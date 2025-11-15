import React, { createContext, useContext, useState, useEffect } from 'react';

interface PremiumContextType {
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
  unlockPremium: () => void;
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export const PremiumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPremium, setIsPremium] = useState(false);

  // Check if premium was unlocked previously (from localStorage)
  useEffect(() => {
    const saved = localStorage.getItem('steel_premium_unlocked');
    if (saved === 'true') {
      setIsPremium(true);
    }
  }, []);

  const setPremium = (premium: boolean) => {
    setIsPremium(premium);
    if (premium) {
      localStorage.setItem('steel_premium_unlocked', 'true');
    }
  };

  const unlockPremium = () => {
    setPremium(true);
  };

  return (
    <PremiumContext.Provider value={{ isPremium, setPremium, unlockPremium }}>
      {children}
    </PremiumContext.Provider>
  );
};

export const usePremium = () => {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
};
