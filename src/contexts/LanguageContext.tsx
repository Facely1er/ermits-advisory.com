import { translations } from '../locales';

interface LanguageContextType {
  t: (key: string) => string;
  getNestedTranslation: (path: string) => Record<string, unknown> | string;
}

// English-only translation hook
export const useLanguage = (): LanguageContextType => {
  // Function to get a translation by key (always English)
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations.en;
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Return the key if no translation found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  // Function to get a nested translation object (always English)
  const getNestedTranslation = (path: string): Record<string, unknown> | string => {
    const keys = path.split('.');
    let value = translations.en;
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return {}; // Return empty object if path not found
      }
    }
    
    return value;
  };

  return {
    t,
    getNestedTranslation
  };
};