import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../shared/Card';
import { SteelRecommendation, SteelPriority } from '../../types/steelAssessment';

interface RecommendationCardProps {
  recommendation: SteelRecommendation;
  className?: string;
}

const priorityColors: Record<SteelPriority, string> = {
  CRITICAL: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-300 dark:border-red-700',
  HIGH: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-300 dark:border-orange-700',
  MODERATE: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700',
  LOW: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-300 dark:border-green-700',
};

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <Card variant="glass" padding="md" className="h-full border-l-4 border-yellow-500">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold border ${priorityColors[recommendation.priority]}`}
          >
            {recommendation.priority}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
            Timeline: {recommendation.timeline}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
            Score: {recommendation.score}/100
          </span>
        </div>

        <h4 className="text-lg font-semibold dark:text-white mb-3">
          {recommendation.factorName} Factor Enhancement
        </h4>

        <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
          Your {recommendation.factorName.toLowerCase()} score of {recommendation.score} indicates{' '}
          {recommendation.priority === 'CRITICAL'
            ? 'critical vulnerabilities requiring immediate action'
            : recommendation.priority === 'HIGH'
            ? 'significant gaps needing strategic improvements'
            : recommendation.priority === 'MODERATE'
            ? 'opportunities for optimization'
            : 'areas for continuous improvement'}
          .
        </p>

        {recommendation.quickWins.length > 0 && (
          <div className="mb-4">
            <strong className="text-navy dark:text-silver font-semibold block mb-2">
              Quick Wins ({recommendation.timeline}):
            </strong>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-200">
              {recommendation.quickWins.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        )}

        {recommendation.longTerm.length > 0 && (
          <div>
            <strong className="text-navy dark:text-silver font-semibold block mb-2">
              Long-term Strategies:
            </strong>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-200">
              {recommendation.longTerm.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

