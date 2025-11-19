/**
 * Auto-Scoring Engine Component
 * 
 * Displays auto-calculated scores, confidence badges, and discrepancies
 */

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../../../components/shared/Card';
import { AutoScoringResult } from '../../types/radar';
import { FactorScores } from '../../types/radar';
import { getConfidenceBadgeStyle, getConfidenceColor } from '../../services/confidenceService';
import { useTheme } from '../../../contexts/ThemeContext';

interface AutoScoringEngineProps {
  autoScoringResult: AutoScoringResult;
  selfAssessment?: FactorScores;
  onOverride?: (factor: string, score: number, justification: string) => void;
}

export const AutoScoringEngine: React.FC<AutoScoringEngineProps> = ({
  autoScoringResult,
  selfAssessment,
  onOverride,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const factorNames: Record<keyof FactorScores, string> = {
    political: 'Political',
    economic: 'Economic',
    social: 'Social',
    technological: 'Technological',
    environmental: 'Environmental',
    legal: 'Legal',
  };

  const factorKeys: (keyof FactorScores)[] = [
    'political',
    'economic',
    'social',
    'technological',
    'environmental',
    'legal',
  ];

  return (
    <div className="space-y-6">
      {/* Composite Score */}
      <Card variant="glass" padding="lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Auto-Calculated Composite Score</h3>
          <div className="text-5xl font-bold text-navy dark:text-silver mb-2">
            {autoScoringResult.composite}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Based on ingested data with confidence weighting
          </p>
        </div>
      </Card>

      {/* Factor Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {factorKeys.map((factor) => {
          const score = autoScoringResult.factorScores[factor];
          const confidence = autoScoringResult.confidence[factor];
          const selfScore = selfAssessment?.[factor];
          const discrepancy = autoScoringResult.discrepancies?.find(
            (d) => d.factor === factor
          );
          const hasDiscrepancy = discrepancy && discrepancy.flagged;

          return (
            <Card key={factor} variant="glass" padding="md">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold dark:text-white">{factorNames[factor]}</h4>
                <span className={getConfidenceBadgeStyle(confidence)}>
                  {confidence}
                </span>
              </div>

              <div className="space-y-3">
                {/* Auto Score */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Auto Score
                    </span>
                    <span className="text-2xl font-bold dark:text-white">{score}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-navy dark:bg-silver rounded-full"
                    />
                  </div>
                </div>

                {/* Self Assessment Comparison */}
                {selfScore !== undefined && (
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Self Assessment
                      </span>
                      <span className="text-lg font-semibold dark:text-white">{selfScore}</span>
                    </div>
                    {hasDiscrepancy && (
                      <div className="mt-2 p-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded flex items-start gap-2">
                        <AlertTriangle
                          size={16}
                          className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5"
                        />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
                            Discrepancy Detected
                          </p>
                          <p className="text-xs text-amber-600 dark:text-amber-400">
                            Difference: {discrepancy.difference} points
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Questions Scored */}
                {autoScoringResult.questionsScored && (
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Questions Validated:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {Object.entries(autoScoringResult.questionsScored)
                        .filter(([qId]) => {
                          // Map question IDs to factors
                          const qNum = parseInt(qId.replace('q', ''));
                          if (factor === 'political' && qNum >= 1 && qNum <= 7) return true;
                          if (factor === 'economic' && qNum >= 8 && qNum <= 14) return true;
                          if (factor === 'social' && qNum >= 15 && qNum <= 21) return true;
                          if (factor === 'technological' && qNum >= 22 && qNum <= 28) return true;
                          if (factor === 'environmental' && qNum >= 29 && qNum <= 35) return true;
                          if (factor === 'legal' && qNum >= 36 && qNum <= 42) return true;
                          return false;
                        })
                        .map(([qId, info]) => (
                          <span
                            key={qId}
                            className={`px-2 py-0.5 rounded text-xs ${
                              info.confidence === 'HIGH'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                : info.confidence === 'MEDIUM'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
                            }`}
                            title={`${qId}: ${info.score}/10 (${info.confidence} confidence)`}
                          >
                            {qId}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Warnings */}
      {autoScoringResult.warnings && autoScoringResult.warnings.length > 0 && (
        <Card variant="glass" padding="md" className="border-amber-200 dark:border-amber-800">
          <div className="flex items-start gap-3">
            <Info size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                Warnings
              </h4>
              <ul className="space-y-1">
                {autoScoringResult.warnings.map((warning, index) => (
                  <li
                    key={index}
                    className="text-sm text-amber-600 dark:text-amber-400"
                  >
                    • {warning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      )}

      {/* Discrepancies Summary */}
      {autoScoringResult.discrepancies &&
        autoScoringResult.discrepancies.length > 0 && (
          <Card variant="glass" padding="md" className="border-red-200 dark:border-red-800">
            <div className="flex items-start gap-3">
              <AlertTriangle
                size={20}
                className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                  Significant Discrepancies
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  The following factors show significant differences between your self-assessment
                  and the auto-calculated scores based on ingested data:
                </p>
                <div className="space-y-2">
                  {autoScoringResult.discrepancies.map((disc) => (
                    <div
                      key={disc.factor}
                      className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-red-700 dark:text-red-300">
                          {factorNames[disc.factor]}
                        </span>
                        <span className="text-sm text-red-600 dark:text-red-400">
                          {disc.difference} point difference
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                        <span>
                          Self: {disc.selfAssessment} | Auto: {disc.autoScore}
                        </span>
                        {disc.selfAssessment > disc.autoScore ? (
                          <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                            <TrendingDown size={12} />
                            Over-estimated
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                            <TrendingUp size={12} />
                            Under-estimated
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}
    </div>
  );
};

