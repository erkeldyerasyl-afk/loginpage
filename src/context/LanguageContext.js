/**
 * LanguageContext - provides current language and translations.
 * Persists selected language in localStorage.
 * All UI text updates when language changes.
 */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';
import { storageService } from '../services/storageService';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => storageService.getLanguage() || 'ru');

  useEffect(() => {
    storageService.setLanguage(language);
  }, [language]);

  const setLanguage = (lang) => {
    if (translations[lang]) setLanguageState(lang);
  };

  const t = translations[language] || translations.ru;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
