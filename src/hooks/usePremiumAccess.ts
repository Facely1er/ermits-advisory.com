/**
 * React hook for premium access management
 */

import { useState, useEffect } from 'react';
import {
  hasPremiumAccess,
  getPremiumAccessDetails,
  getDaysRemaining,
  checkPurchaseConfirmation,
  ToolkitType,
  PremiumAccess
} from '../utils/premiumAccess';

export function usePremiumAccess(toolkitType: ToolkitType = 'all') {
  const [isPremium, setIsPremium] = useState(false);
  const [accessDetails, setAccessDetails] = useState<PremiumAccess | null>(null);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check for purchase confirmation in URL (after Stripe redirect)
    const hasConfirmation = checkPurchaseConfirmation();
    
    // Check premium access status
    const hasAccess = hasPremiumAccess(toolkitType);
    const details = getPremiumAccessDetails(toolkitType);
    const days = getDaysRemaining(toolkitType);
    
    setIsPremium(hasAccess);
    setAccessDetails(details);
    setDaysRemaining(days);
    setIsChecking(false);
    
    // If purchase was just confirmed, refresh the page to update UI
    if (hasConfirmation) {
      window.location.reload();
    }
  }, [toolkitType]);

  // Refresh access status (useful after manual updates)
  const refreshAccess = () => {
    setIsPremium(hasPremiumAccess(toolkitType));
    setAccessDetails(getPremiumAccessDetails(toolkitType));
    setDaysRemaining(getDaysRemaining(toolkitType));
  };

  return {
    isPremium,
    accessDetails,
    daysRemaining,
    isChecking,
    refreshAccess
  };
}

