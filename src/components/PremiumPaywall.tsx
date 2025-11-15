import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';

interface PremiumPaywallProps {
  onUnlock?: () => void;
  showTestMode?: boolean;
}

export const PremiumPaywall: React.FC<PremiumPaywallProps> = ({ onUnlock, showTestMode = false }) => {
  const features = [
    "Detailed PDF Reports with Industry Benchmarking",
    "Custom Visualizations & Radar Charts",
    "Executive Summary Templates",
    "Multiple Export Formats (PDF, PNG, PPT, JSON)",
    "Unlimited Assessments",
    "Lifetime Access"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <Card variant="glass" padding="xl" className="max-w-md w-full border-2 border-gold">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gold/20 rounded-full mb-4">
            <Lock size={32} className="text-gold" />
          </div>
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Unlock Premium
          </h2>
          <p className="text-gray-600 dark:text-gray-200 text-sm">
            Get advanced reporting and export features
          </p>
        </div>

        {/* Price */}
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-navy dark:text-white mb-2">
            $29
          </div>
          <p className="text-gray-600 dark:text-gray-200 text-sm">
            One-time purchase • Lifetime access
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-gray-200">{feature}</span>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <Button
          variant="primary"
          size="lg"
          onClick={() => window.open('https://gumroad.com/ermits/steel-premium', '_blank')}
          className="w-full mb-3"
        >
          <Lock size={18} className="mr-2" />
          Buy Now - $29
          <ArrowRight size={18} className="ml-2" />
        </Button>

        {/* Test Mode Button (for development) */}
        {showTestMode && (
          <Button
            variant="secondary"
            size="lg"
            onClick={onUnlock}
            className="w-full"
          >
            Test Unlock (Dev Only)
          </Button>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
          Secure payment via Gumroad • No recurring charges
        </p>
      </Card>
    </motion.div>
  );
};
