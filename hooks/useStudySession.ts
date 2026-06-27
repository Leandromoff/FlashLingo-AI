import { useState, useCallback, useRef, useEffect } from 'react';
import { AppState, StudySession, FlashcardData, PREDEFINED_TOPICS } from '../types';
import { useSettings } from '../context/SettingsContext';
import { useProgress } from '../context/ProgressContext';
import decksMetadataRaw from '../data/decksMetadata.json';

const decksMetadata = decksMetadataRaw as Record<string, Record<string, number>>;

export const useStudySession = () => {
  const { targetLanguage } = useSettings();
  const { topicWords, setTopicWords, activeSessions, setActiveSessions } = useProgress();

  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [session, setSession] = useState<StudySession | null>(null);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Helper to get unique key per language
  const getTopicKey = (topicId: string, lang = targetLanguage) => `${topicId}_${lang}`;

  const startSession = useCallback(async (topicLabel: string, topicId: string) => {
    const key = getTopicKey(topicId);
    
    // Default autoplay settings
    try {
      localStorage.setItem('flashlingo_autoplay_local', 'false');
      localStorage.setItem('flashlingo_autoplay_slow', 'false');
      localStorage.setItem('flashlingo_autoplay_know', 'false');
    } catch (e) {
      console.error("Failed to reset autocomplete: ", e);
    }

    // Clear any existing active session when starting a fresh one
    setActiveSessions(prev => { const n = { ...prev }; delete n[key]; return n; });

    setAppState(AppState.LOADING);
    setErrorMsg('');
    
    try {
      let cards: FlashcardData[];
      const staticTopic = PREDEFINED_TOPICS.find(t => t.id === topicId);
      if (staticTopic?.isStatic && decksMetadata[topicId] && decksMetadata[topicId][targetLanguage]) {
          try {
              const res = await fetch(`/decks/${topicId}_${targetLanguage}.json`);
              if (!res.ok) throw new Error("Failed to fetch deck.");
              const data: any[] = await res.json();
              
              cards = data.map((card: any, index: number) => ({
                  id: `static-${topicId}-${index}`,
                  word: card.word || '',
                  translation: card.translation || '',
                  pronunciation: '',
                  portuguesePhonetic: '',
                  syllables: [],
                  exampleSentence: card.exampleSentence || '',
                  exampleTranslation: card.exampleTranslation || '',
                  ...card
              }));
          } catch (err) {
              console.error("Failed to load topic deck:", err);
              throw new Error("No modules found or network error.");
          }
      } else {
          throw new Error("Deck is not static or not found. Only offline decks are supported.");
      }

      setSession({
        topicId,
        topicLabel,
        language: targetLanguage,
        cards,
        currentIndex: 0
      });
      setAppState(AppState.STUDY);
      setIsCardFlipped(false);
    } catch (error) {
      console.error(error);
      setErrorMsg('Falha ao carregar deck. Tente novamente.');
      setAppState(AppState.ERROR);
    }
  }, [targetLanguage, getTopicKey, setActiveSessions]);

  const resumeSession = useCallback((topicId: string) => {
    const key = getTopicKey(topicId);
    const savedSession = activeSessions[key];
    if (savedSession) {
      setSession(savedSession);
      setAppState(AppState.STUDY);
      setIsCardFlipped(false);
    }
  }, [activeSessions, getTopicKey]);

  // Safe ref to track if we should process card updates
  const sessionRef = useRef(session);
  useEffect(() => { sessionRef.current = session; }, [session]);

  const handleCardResult = useCallback((known: boolean) => {
    if (!sessionRef.current) return;

    setIsCardFlipped(false);
    
    // Safety timeout to allow flip animation
    setTimeout(() => {
      const prev = sessionRef.current;
      if (!prev) return;
        
      const currentCard = prev.cards[prev.currentIndex];
      const isLastCard = prev.currentIndex >= prev.cards.length - 1;
      const key = `${prev.topicId}_${prev.language}`;
      const staticTopic = PREDEFINED_TOPICS.find(t => t.id === prev.topicId);
      const isStatic = staticTopic?.isStatic === true;
      const trackValue = isStatic ? currentCard.id : currentCard.word;

      if (known) {
        setTopicWords(words => {
          const currentHistory = words[key] || [];
          if (!currentHistory.includes(trackValue)) {
            return { ...words, [key]: [...currentHistory, trackValue] };
          }
          return words;
        });
      }

      const nextSessionState = {
        ...prev,
        currentIndex: prev.currentIndex + 1
      };

      if (isLastCard) {
        setActiveSessions(sessions => {
          const newSessions = { ...sessions };
          delete newSessions[key];
          return newSessions;
        });

        setSession(nextSessionState);
        setAppState(AppState.SUMMARY);
        return;
      }

      setActiveSessions(sessions => ({
        ...sessions,
        [key]: nextSessionState
      }));

      setSession(nextSessionState);
    }, 150);
  }, [setTopicWords, setActiveSessions]);

  const handlePreviousCard = useCallback(() => {
    if (!sessionRef.current) return;

    setIsCardFlipped(false);
    
    setTimeout(() => {
      const prev = sessionRef.current;
      if (!prev || prev.currentIndex === 0) return;
        
      const nextIndex = prev.currentIndex - 1;
      const prevCard = prev.cards[nextIndex];
      const key = `${prev.topicId}_${prev.language}`;
      
      const staticTopic = PREDEFINED_TOPICS.find(t => t.id === prev.topicId);
      const isStatic = staticTopic?.isStatic === true;
      const trackValue = isStatic ? prevCard.id : prevCard.word;

      setTopicWords(words => {
        const existing = words[key] || [];
        return {
          ...words,
          [key]: existing.filter(w => w !== trackValue)
        };
      });
      
      const nextSessionState = {
        ...prev,
        currentIndex: nextIndex
      };

      setActiveSessions(sessions => ({
        ...sessions,
        [key]: nextSessionState
      }));

      setSession(nextSessionState);
    }, 150);
  }, [setTopicWords, setActiveSessions]);

  const resetApp = useCallback(() => {
    setAppState(AppState.HOME);
    setSession(null);
  }, []);

  return {
    appState,
    session,
    isCardFlipped,
    setIsCardFlipped,
    errorMsg,
    startSession,
    resumeSession,
    handleCardResult,
    handlePreviousCard,
    resetApp,
    getTopicKey
  };
};
