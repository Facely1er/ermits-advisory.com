import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../locales';
import type { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  getNestedTranslation: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    console.log('🌐 LanguageContext: Initializing language...');
    
    // Check if a language preference is stored in localStorage
    const savedLanguage = localStorage.getItem('language') as Language | null;
    console.log('🌐 LanguageContext: Saved language from localStorage:', savedLanguage);
    
    if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
      console.log('🌐 LanguageContext: Using saved language:', savedLanguage);
      return savedLanguage;
    }
    
    // Check browser language
    const browserLanguage = navigator.language.split('-')[0];
    console.log('🌐 LanguageContext: Browser language detected:', browserLanguage);
    
    if (browserLanguage && ['en', 'fr'].includes(browserLanguage)) {
      console.log('🌐 LanguageContext: Using browser language:', browserLanguage);
      return browserLanguage as Language;
    }
    
    console.log('🌐 LanguageContext: Defaulting to English');
    return 'en';
  });

  useEffect(() => {
    console.log('🌐 LanguageContext: Language changed to:', language);
    
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    console.log('🌐 LanguageContext: Saved language to localStorage:', language);
    
    // Update html lang attribute
    document.documentElement.lang = language;
    console.log('🌐 LanguageContext: Updated document.documentElement.lang to:', language);
  }, [language]);

  const handleSetLanguage = (newLanguage: Language) => {
    console.log('🌐 LanguageContext: setLanguage called with:', newLanguage);
    console.log('🌐 LanguageContext: Current language before change:', language);
    setLanguage(newLanguage);
  };

  // Function to get a translation by key
  const t = (key: string): string => {
    console.log('🌐 LanguageContext: Translating key:', key, 'for language:', language);
    
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.log('🌐 LanguageContext: Translation not found, falling back to English for key:', key);
        // Fallback to English if translation not found
        let fallback = translations['en'];
        for (const k of keys) {
          if (fallback && fallback[k]) {
            fallback = fallback[k];
          } else {
            console.log('🌐 LanguageContext: English fallback also not found for key:', key);
            return key; // Return the key if no translation found
          }
        }
        const result = typeof fallback === 'string' ? fallback : key;
        console.log('🌐 LanguageContext: Using English fallback:', result);
        return result;
      }
    }
    
    const result = typeof value === 'string' ? value : key;
    console.log('🌐 LanguageContext: Translation result:', result);
    return result;
  };

  // Function to get a nested translation object
  const getNestedTranslation = (path: string): any => {
    console.log('🌐 LanguageContext: Getting nested translation for path:', path, 'language:', language);
    
    const keys = path.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.log('🌐 LanguageContext: Nested translation not found, falling back to English for path:', path);
        // Fallback to English if translation not found
        let fallback = translations['en'];
        for (const k of keys) {
          if (fallback && fallback[k]) {
            fallback = fallback[k];
          } else {
            console.log('🌐 LanguageContext: English fallback also not found for nested path:', path);
            return {}; // Return empty object if path not found
          }
        }
        console.log('🌐 LanguageContext: Using English fallback for nested translation:', fallback);
        return fallback;
      }
    }
    
    console.log('🌐 LanguageContext: Nested translation result:', value);
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, getNestedTranslation }}>
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