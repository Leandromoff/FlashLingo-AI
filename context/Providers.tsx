import React from 'react';
import { SettingsProvider } from './SettingsContext';
import { ProgressProvider } from './ProgressContext';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SettingsProvider>
      <ProgressProvider>
        {children}
      </ProgressProvider>
    </SettingsProvider>
  );
};
