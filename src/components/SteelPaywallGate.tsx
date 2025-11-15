import React, { useState } from 'react';
import { usePremium } from '../contexts/PremiumContext';
import { PremiumPaywall } from './PremiumPaywall';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Zap } from 'lucide-react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';

interface SteelPaywallGateProps {
  children: React.ReactNode;
  allowFreePreview?: boolean;
}

export const SteelPaywallGate: React.FC<SteelPaywallGateProps> = ({
  children,
  allowFreePreview = true
}) => {
  const { isPremium, unlockPremium } = usePremium();
  const [showPaywall, setShowPaywall] = useState(!isPremium && !allowFreePreview);
  const [showPremiumFeatures, setShowPremiumFeatures] = useState(false);

  if (showPaywall && !isPremium) {
    return (
      <PremiumPaywall
        onUnlock={() => {
          unlockPremium();
          setShowPaywall(false);
        }}
        showTestMode={process.env.NODE_ENV === 'development'}
      />
    );
  }

  return (
    <div className="relative">
      {/* Free preview with watermark if not premium */}
      {!isPremium && allowFreePreview && (
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent via-transparent to-black/5"></div>
      )}

      {children}

      {/* Premium features banner for free users */}
      <AnimatePresence>
        {!isPremium && allowFreePreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 max-w-2xl mx-auto px-4"
          >
            <Card variant="glass" padding="lg" className="bg-gradient-to-r from-gold/10 to-navy/10 border-l-4 border-gold">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-center gap-2">
                  <Zap size={24} className="text-gold" />
                  <div>
                    <h3 className="font-bold text-navy dark:text-white text-lg">Unlock Premium Features</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                      Get professional reports, exports, and advanced visualizations for just $29
                    </p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    window.open('https://gumroad.com/ermits/steel-premium', '_blank');
                  }}
                  className="whitespace-nowrap"
                >
                  <Lock size={16} className="mr-2" />
                  Buy Now
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium features available indicator */}
      {isPremium && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 max-w-2xl mx-auto px-4"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
            <div className="flex items-center gap-3">
              <div className="text-2xl">✨</div>
              <div>
                <h3 className="font-bold text-green-900 dark:text-green-100">Premium Unlocked</h3>
                <p className="text-sm text-green-800 dark:text-green-200">
                  You have access to all premium features including exports and advanced reports
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
};
