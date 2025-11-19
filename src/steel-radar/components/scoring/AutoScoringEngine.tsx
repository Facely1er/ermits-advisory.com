/**
 * Auto-Scoring Engine Component
 * 
 * Displays auto-calculated scores, confidence badges, and discrepancies
 */

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../../../components/shared/Card';
import type { AutoScoringResult } from '../../types/radar';
import type { FactorScores } from '../../../types/steelAssessment';
import { getConfidenceBadgeStyle } from '../../services/confidenceService';
import { InfoTooltip } from '../shared/InfoTooltip';
import { cn } from '../../../utils/cn';

interface AutoScoringEngineProps {
  autoScoringResult: AutoScoringResult;
  selfAssessment?: FactorScores;
  onOverride?: (factor: string, score: number, justification: string) => void;
}

export const AutoScoringEngine: React.FC<AutoScoringEngineProps> = ({
  autoScoringResult,
  selfAssessment,
}) => {

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
      <Card variant="glass" padding="lg" className="bg-gradient-to-br from-navy/5 to-gold/5 dark:from-navy/10 dark:to-gold/10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h3 className="text-lg font-semibold dark:text-white">Auto-Calculated Composite Score</h3>
            <InfoTooltip
              content="The composite score is a weighted average of all PESTEL factors, adjusted by confidence levels. Higher confidence data has more influence on the final score. Scores range from 0-100, with higher scores indicating better security posture."
              title="Composite Score Explanation"
              size="md"
            />
          </div>
          <div className="relative inline-block mb-4">
            <div className="text-6xl font-bold text-navy dark:text-silver mb-2">
              {autoScoringResult.composite}
              <span className="text-2xl text-gray-500 dark:text-gray-400">/100</span>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${autoScoringResult.composite}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={cn(
                  'h-full rounded-full',
                  autoScoringResult.composite >= 80
                    ? 'bg-green-500'
                    : autoScoringResult.composite >= 60
                    ? 'bg-blue-500'
                    : autoScoringResult.composite >= 40
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                )}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver"></div>
              <span className="text-gray-600 dark:text-gray-400">Weighted Average</span>
            </div>
            {selfAssessment && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-gray-600 dark:text-gray-400">Self-Assessment Available</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Confidence Weighted</span>
            </div>
          </div>
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
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Self Assessment
                        </span>
                        <InfoTooltip
                          content="Your self-reported score from the STEEL assessment. Compare with auto-score to identify discrepancies."
                          size="sm"
                        />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-semibold dark:text-white">{selfScore}</span>
                        <span className={cn(
                          'text-xs',
                          selfScore > score
                            ? 'text-green-600 dark:text-green-400'
                            : selfScore < score
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-gray-500 dark:text-gray-400'
                        )}>
                          ({selfScore > score ? '+' : ''}{selfScore - score})
                        </span>
                      </div>
                    </div>
                    {hasDiscrepancy && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 p-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded flex items-start gap-2"
                      >
                        <AlertTriangle
                          size={16}
                          className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5"
                        />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
                            Discrepancy Detected
                          </p>
                          <p className="text-xs text-amber-600 dark:text-amber-400">
                            Difference: {discrepancy.difference} points - Review data sources for accuracy
                          </p>
                        </div>
                      </motion.div>
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

