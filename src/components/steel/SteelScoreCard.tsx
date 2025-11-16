import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../shared/Card';
import { SteelFactor } from '../../types/steelAssessment';

interface SteelScoreCardProps {
  factor: SteelFactor;
  factorName: string;
  score: number;
  color: string;
  className?: string;
}

const factorColors: Record<SteelFactor, string> = {
  political: '#8b5cf6',
  economic: '#10b981',
  social: '#06b6d4',
  technological: '#f97316',
  environmental: '#22c55e',
  legal: '#ef4444',
};

export const SteelScoreCard: React.FC<SteelScoreCardProps> = ({
  factor,
  factorName,
  score,
  color,
  className,
}) => {
  const displayColor = color || factorColors[factor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <Card variant="glass" padding="md" className="h-full">
        <div className="text-center">
          <div className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
            {factorName}
          </div>
          <div
            className="text-4xl font-bold mb-3"
            style={{ color: displayColor }}
          >
            {score}
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ backgroundColor: displayColor }}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

