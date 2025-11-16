import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../shared/Card';
import { SteelRiskLevel, getRiskLevel } from '../../services/steelAssessmentService';

interface SteelCompositeScoreProps {
  composite: number;
  className?: string;
}

const riskLevelColors: Record<SteelRiskLevel, string> = {
  LOW: '#16a34a',
  MODERATE: '#eab308',
  ELEVATED: '#f97316',
  HIGH: '#dc2626',
};

const riskLevelLabels: Record<SteelRiskLevel, string> = {
  LOW: 'Low Risk',
  MODERATE: 'Moderate Risk',
  ELEVATED: 'Elevated Risk',
  HIGH: 'High Risk',
};

export const SteelCompositeScore: React.FC<SteelCompositeScoreProps> = ({
  composite,
  className,
}) => {
  const riskLevel = getRiskLevel(composite);
  const color = riskLevelColors[riskLevel];
  const label = riskLevelLabels[riskLevel];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={className}
    >
      <Card variant="glass" padding="lg" className="text-center">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Composite STEEL Score
        </h3>
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-gray-200 dark:text-gray-700"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeDasharray={`${composite}, 100`}
              initial={{ strokeDasharray: '0, 100' }}
              animate={{ strokeDasharray: `${composite}, 100` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-3xl font-bold"
              style={{ color }}
            >
              {composite}
            </span>
          </div>
        </div>
        <div
          className="text-xl font-semibold mb-2"
          style={{ color }}
        >
          {label}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </Card>
    </motion.div>
  );
};

