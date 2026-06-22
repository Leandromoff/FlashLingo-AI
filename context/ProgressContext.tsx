import React, { createContext, useContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { FlashcardData, StudySession } from '../types';

interface ProgressContextType {
  topicWords: Record<string, string[]>;
  setTopicWords: React.Dispatch<React.SetStateAction<Record<string, string[]>>>;
  activeSessions: Record<string, StudySession>;
  setActiveSessions: React.Dispatch<React.SetStateAction<Record<string, StudySession>>>;
  resetTopicProgress: (topicId: string, getTopicKey: (id: string, lang: string) => string, targetLanguage: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topicWords, setTopicWords] = useLocalStorage<Record<string, string[]>>('flashlingo_words', {});
  const [activeSessions, setActiveSessions] = useLocalStorage<Record<string, StudySession>>('flashlingo_active_sessions', {});

  const resetTopicProgress = useCallback((topicId: string, getTopicKey: (id: string, lang: string) => string, targetLanguage: string) => {
    const key = getTopicKey(topicId, targetLanguage);
    setTopicWords(prev => { const n = { ...prev }; delete n[key]; return n; });
    setActiveSessions(prev => { const n = { ...prev }; delete n[key]; return n; });
  }, [setTopicWords, setActiveSessions]);

  return (
    <ProgressContext.Provider value={{
      topicWords, setTopicWords,
      activeSessions, setActiveSessions,
      resetTopicProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used within ProgressProvider");
  return context;
};
