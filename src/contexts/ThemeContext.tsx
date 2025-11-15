import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import type { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Safely check localStorage (may not be available in SSR or private browsing)
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      
      if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
        return savedTheme;
      }
    } catch (error) {
      // localStorage not available, continue with default detection
      console.warn('localStorage not available:', error);
    }
    
    // Check for system preference (only in browser)
    if (typeof window !== 'undefined' && window.matchMedia) {
      try {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
      } catch (error) {
        // matchMedia not available
        console.warn('matchMedia not available:', error);
      }
    }
    
    return 'light';
  });

  useEffect(() => {
    const updateTheme = (newTheme: Theme) => {
      const root = window.document.documentElement;
      
      // Remove old theme class
      root.classList.remove('light', 'dark');
      
      // Add new theme class if not system
      if (newTheme !== 'system') {
        root.classList.add(newTheme);
      } else {
        // If system, check system preference
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
      }
      
      // Save to localStorage (safely)
      try {
        localStorage.setItem('theme', newTheme);
      } catch (error) {
        console.warn('Failed to save theme to localStorage:', error);
      }
    };
    
    updateTheme(theme);
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        updateTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleSystemChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'light'; // Changed from 'system' to 'light' for simplicity
      return 'light';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};