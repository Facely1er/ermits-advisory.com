import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../locales';
import type { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  getNestedTranslation: (path: string) => Record<string, unknown> | string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if a language preference is stored in localStorage
    const savedLanguage = localStorage.getItem('language') as Language | null;
    
    if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Check browser language
    const browserLanguage = navigator.language.split('-')[0];
    if (browserLanguage && ['en', 'fr'].includes(browserLanguage)) {
      return browserLanguage as Language;
    }
    
    return 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Function to get a translation by key
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        let fallback = translations['en'];
        for (const k of keys) {
          if (fallback && fallback[k]) {
            fallback = fallback[k];
          } else {
            return key; // Return the key if no translation found
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  // Function to get a nested translation object
  const getNestedTranslation = (path: string): Record<string, unknown> | string => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        let fallback = translations['en'];
        for (const k of keys) {
          if (fallback && fallback[k]) {
            fallback = fallback[k];
          } else {
            return {}; // Return empty object if path not found
          }
        }
        return fallback;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getNestedTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};