/**
 * Score Breakdown Component
 * 
 * Detailed breakdown of scores with explanations and recommendations
 */

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Card } from '../../../components/shared/Card';
import { FactorScores, SteelFactor } from '../../../types/steelAssessment';
import { FactorConfidence, ConfidenceLevel } from '../../types/radar';
import { getConfidenceBadgeStyle, getConfidenceColor } from '../../services/confidenceService';
import { useTheme } from '../../../contexts/ThemeContext';
import { InfoTooltip } from './InfoTooltip';
import { cn } from '../../../utils/cn';

interface ScoreBreakdownProps {
  factor: SteelFactor;
  score: number;
  confidence: ConfidenceLevel;
  selfScore?: number;
  trend?: number;
  dataSources?: string[];
  questionsScored?: number;
  totalQuestions?: number;
  recommendations?: string[];
}

const factorDescriptions: Record<SteelFactor, string> = {
  political: 'Measures geopolitical risks, regulatory changes, and political stability affecting cybersecurity posture.',
  economic: 'Evaluates economic factors including budget constraints, market conditions, and financial resources for security.',
  social: 'Assesses social factors like workforce skills, organizational culture, and stakeholder awareness of security.',
  technological: 'Analyzes technological capabilities, infrastructure maturity, and adoption of security technologies.',
  environmental: 'Reviews environmental factors including physical security, data center locations, and climate risks.',
  legal: 'Examines legal and compliance requirements, regulatory obligations, and contractual security mandates.',
};

const getScoreInterpretation = (score: number): { label: string; color: string; description: string } => {
  if (score >= 80) {
    return {
      label: 'Excellent',
      color: 'text-green-600 dark:text-green-400',
      description: 'Strong security posture with minimal risks',
    };
  } else if (score >= 60) {
    return {
      label: 'Good',
      color: 'text-blue-600 dark:text-blue-400',
      description: 'Solid security foundation with some areas for improvement',
    };
  } else if (score >= 40) {
    return {
      label: 'Fair',
      color: 'text-yellow-600 dark:text-yellow-400',
      description: 'Moderate security posture requiring attention',
    };
  } else {
    return {
      label: 'Needs Improvement',
      color: 'text-red-600 dark:text-red-400',
      description: 'Significant security gaps requiring immediate action',
    };
  }
};

const getRecommendations = (factor: SteelFactor, score: number): string[] => {
  const recommendations: Record<SteelFactor, string[]> = {
    political: [
      score < 60 ? 'Monitor geopolitical developments affecting your industry' : 'Maintain awareness of regulatory changes',
      score < 60 ? 'Establish relationships with government cybersecurity agencies' : 'Continue engagement with regulatory bodies',
      score < 40 ? 'Develop contingency plans for political instability' : 'Review and update risk assessments regularly',
    ],
    economic: [
      score < 60 ? 'Optimize security budget allocation' : 'Maintain adequate security investment',
      score < 60 ? 'Consider ROI of security investments' : 'Continue strategic security spending',
      score < 40 ? 'Prioritize critical security controls' : 'Explore cost-effective security solutions',
    ],
    social: [
      score < 60 ? 'Enhance security awareness training programs' : 'Maintain regular security training',
      score < 60 ? 'Improve organizational security culture' : 'Continue building security-first mindset',
      score < 40 ? 'Address skills gaps in security team' : 'Invest in security talent development',
    ],
    technological: [
      score < 60 ? 'Upgrade legacy security infrastructure' : 'Maintain current security technologies',
      score < 60 ? 'Implement advanced threat detection' : 'Continue monitoring and detection capabilities',
      score < 40 ? 'Prioritize critical security tool deployment' : 'Review and optimize security stack',
    ],
    environmental: [
      score < 60 ? 'Assess physical security controls' : 'Maintain physical security standards',
      score < 60 ? 'Review data center security measures' : 'Continue monitoring physical risks',
      score < 40 ? 'Address critical physical security gaps' : 'Regular security audits of facilities',
    ],
    legal: [
      score < 60 ? 'Review compliance with relevant regulations' : 'Maintain compliance posture',
      score < 60 ? 'Update security policies and procedures' : 'Keep policies current with regulations',
      score < 40 ? 'Address compliance gaps immediately' : 'Regular compliance assessments',
    ],
  };

  return recommendations[factor] || [];
};

export const ScoreBreakdown: React.FC<ScoreBreakdownProps> = ({
  factor,
  score,
  confidence,
  selfScore,
  trend,
  dataSources = [],
  questionsScored = 0,
  totalQuestions = 7,
  recommendations,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const interpretation = getScoreInterpretation(score);
  const factorRecs = recommendations || getRecommendations(factor, score);
  const coverage = totalQuestions > 0 ? Math.round((questionsScored / totalQuestions) * 100) : 0;

  const factorNames: Record<SteelFactor, string> = {
    political: 'Political',
    economic: 'Economic',
    social: 'Social',
    technological: 'Technological',
    environmental: 'Environmental',
    legal: 'Legal',
  };

  return (
    <Card variant="glass" padding="md" className="h-full">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-lg dark:text-white">{factorNames[factor]}</h4>
              <InfoTooltip
                content={factorDescriptions[factor]}
                title={`${factorNames[factor]} Factor`}
                size="md"
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              {factorDescriptions[factor]}
            </p>
          </div>
          <span className={cn('text-xs px-2 py-1 rounded-full', getConfidenceBadgeStyle(confidence))}>
            {confidence}
          </span>
        </div>

        {/* Score Display */}
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Score</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold dark:text-white">{score}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">/100</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className={cn(
                'h-full rounded-full',
                score >= 80
                  ? 'bg-green-500'
                  : score >= 60
                  ? 'bg-blue-500'
                  : score >= 40
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              )}
            />
          </div>

          {/* Interpretation */}
          <div className="flex items-center gap-2">
            <span className={cn('text-sm font-medium', interpretation.color)}>
              {interpretation.label}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {interpretation.description}
            </span>
          </div>
        </div>

        {/* Comparison & Trend */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
          {selfScore !== undefined && (
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs text-gray-600 dark:text-gray-400">Self Assessment</span>
                <InfoTooltip
                  content="Your self-reported score from the STEEL assessment"
                  size="sm"
                />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-semibold dark:text-white">{selfScore}</span>
                <span className="text-xs text-gray-500">
                  ({selfScore > score ? '+' : ''}{selfScore - score})
                </span>
              </div>
            </div>
          )}

          {trend !== undefined && Math.abs(trend) >= 1 && (
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs text-gray-600 dark:text-gray-400">Trend</span>
                <InfoTooltip
                  content="Change compared to previous period"
                  size="sm"
                />
              </div>
              <div className="flex items-center gap-1">
                {trend > 0 ? (
                  <TrendingUp size={16} className="text-green-600 dark:text-green-400" />
                ) : trend < 0 ? (
                  <TrendingDown size={16} className="text-red-600 dark:text-red-400" />
                ) : (
                  <Minus size={16} className="text-gray-400" />
                )}
                <span
                  className={cn(
                    'text-lg font-semibold',
                    trend > 0
                      ? 'text-green-600 dark:text-green-400'
                      : trend < 0
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-gray-600 dark:text-gray-400'
                  )}
                >
                  {trend > 0 ? '+' : ''}
                  {trend.toFixed(1)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Data Coverage */}
        {questionsScored > 0 && (
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600 dark:text-gray-400">Data Coverage</span>
              <span className="text-xs font-medium dark:text-white">{coverage}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${coverage}%` }}
                transition={{ duration: 0.8 }}
                className="h-full bg-navy dark:bg-silver rounded-full"
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {questionsScored} of {totalQuestions} questions validated
            </p>
          </div>
        )}

        {/* Data Sources */}
        {dataSources.length > 0 && (
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Data Sources</span>
              <InfoTooltip
                content="Security tools and data sources used to calculate this score"
                size="sm"
              />
            </div>
            <div className="flex flex-wrap gap-1">
              {dataSources.map((source, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-0.5 bg-navy/10 dark:bg-silver/20 text-navy dark:text-silver rounded"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        {factorRecs.length > 0 && (
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1 mb-2">
              <Info size={14} className="text-navy dark:text-silver" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Recommendations
              </span>
            </div>
            <ul className="space-y-1">
              {factorRecs.slice(0, 3).map((rec, idx) => (
                <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <CheckCircle size={12} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
};

