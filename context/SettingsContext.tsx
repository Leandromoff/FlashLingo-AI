import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SupportedLanguage } from '../types';

interface SettingsContextType {
  targetLanguage: SupportedLanguage;
  setTargetLanguage: (lang: SupportedLanguage | ((val: SupportedLanguage) => SupportedLanguage)) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean | ((val: boolean) => boolean)) => void;
  expandedGroups: Record<string, boolean>;
  setExpandedGroups: (val: Record<string, boolean> | ((val: Record<string, boolean>) => Record<string, boolean>)) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [targetLanguage, setTargetLanguage] = useLocalStorage<SupportedLanguage>('flashlingo_target_language', 'en');
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('flashlingo_dark_mode', true);
  const [expandedGroups, setExpandedGroups] = useLocalStorage<Record<string, boolean>>('flashlingo_expanded_groups', {
    group1: true,
    group2: true,
    group3: true,
    group4: true,
    group5: true
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <SettingsContext.Provider value={{
      targetLanguage, setTargetLanguage,
      isDarkMode, setIsDarkMode,
      expandedGroups, setExpandedGroups
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error("useSettings must be used within SettingsProvider");
  return context;
};
