import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SteelAssessmentData, SteelFactor } from '../../types/steelAssessment';
import { SteelScoreCard } from './SteelScoreCard';
import { SteelCompositeScore } from './SteelCompositeScore';

interface SteelResultsSummaryProps {
  data: SteelAssessmentData;
  showViewReport?: boolean;
}

const factorColors: Record<SteelFactor, string> = {
  political: '#8b5cf6',
  economic: '#10b981',
  social: '#06b6d4',
  technological: '#f97316',
  environmental: '#22c55e',
  legal: '#ef4444',
};

const factorNames: Record<SteelFactor, string> = {
  political: 'Political',
  economic: 'Economic',
  social: 'Social',
  technological: 'Technological',
  environmental: 'Environmental',
  legal: 'Legal',
};

export const SteelResultsSummary: React.FC<SteelResultsSummaryProps> = ({
  data,
  showViewReport = true,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold dark:text-white mb-2">STEEL™ Diagnostic Results</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Your comprehensive cybersecurity risk assessment
          </p>
        </div>
        {showViewReport && (
          <Button
            variant="primary"
            onClick={() => navigate('/dashboard/steel-results')}
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            View Full Report
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <SteelCompositeScore composite={data.composite} />
        </div>
        <div className="lg:col-span-3">
          <Card variant="glass" padding="md">
            <h3 className="text-lg font-semibold dark:text-white mb-4">PESTEL Factor Scores</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(Object.entries(data.factorScores) as [SteelFactor, number][]).map(
                ([factor, score]) => (
                  <SteelScoreCard
                    key={factor}
                    factor={factor}
                    factorName={factorNames[factor]}
                    score={score}
                    color={factorColors[factor]}
                  />
                )
              )}
            </div>
          </Card>
        </div>
      </div>

      {data.insights && (
        <Card variant="glass" padding="md">
          <h3 className="text-lg font-semibold dark:text-white mb-3">Executive Summary</h3>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
            {data.insights.executiveSummary}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {data.insights.riskContext}
          </p>
        </Card>
      )}

      {data.insights && data.insights.keyInsights.length > 0 && (
        <Card variant="glass" padding="md" className="border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
            Key Insights
          </h3>
          <ul className="space-y-2">
            {data.insights.keyInsights.slice(0, 3).map((insight, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-200 text-sm">
                <span className="font-semibold">
                  {factorNames[insight.factor]}:{' '}
                </span>
                {insight.text}
              </li>
            ))}
          </ul>
          {data.insights.keyInsights.length > 3 && showViewReport && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/dashboard/steel-results')}
              className="mt-3"
            >
              View all insights →
            </Button>
          )}
        </Card>
      )}
    </motion.div>
  );
};

