import React from 'react';
import { Card } from '../shared/Card';
import { Target, AlertCircle, Layers, TrendingUp } from 'lucide-react';

// Future: Replace static values with real computed results.
// Future: Integrate real scoring engine (API or service).

interface SteelIndexCardProps {
  strategicScore?: number;
  threatScore?: number;
  enterpriseScore?: number;
  steelIndex?: number;
}

export const SteelIndexCard: React.FC<SteelIndexCardProps> = ({
  strategicScore = 72, // Mock value
  threatScore = 65, // Mock value
  enterpriseScore = 68, // Mock value
  steelIndex = 68 // Mock value
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    if (score >= 40) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 dark:bg-green-900/30';
    if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900/30';
    if (score >= 40) return 'bg-orange-100 dark:bg-orange-900/30';
    return 'bg-red-100 dark:bg-red-900/30';
  };

  const scores = [
    {
      label: 'Strategic Score',
      shortLabel: 'S-score',
      value: strategicScore,
      icon: Target,
      color: 'text-navy dark:text-silver',
      description: 'Governance alignment, business integration, risk appetite clarity, and leadership readiness'
    },
    {
      label: 'Threat Score',
      shortLabel: 'T-score',
      value: threatScore,
      icon: AlertCircle,
      color: 'text-red-600 dark:text-red-400',
      description: 'Exposure to active threats, attack surface readiness, incident readiness, sector-threat alignment, and vulnerability posture'
    },
    {
      label: 'Enterprise Score',
      shortLabel: 'E-score',
      value: enterpriseScore,
      icon: Layers,
      color: 'text-blue-600 dark:text-blue-400',
      description: 'Internal capability maturity: controls, processes, technology, data flows, vendor dependencies, and resilience'
    }
  ];

  return (
    <Card className="p-6 md:p-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp size={24} className="text-cyan-600 dark:text-cyan-400" />
          <h3 className="text-2xl font-bold text-navy dark:text-white">
            STEEL™ Index
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Unified readiness and risk evaluation score
        </p>
      </div>

      {/* Overall STEEL Index */}
      <div className="mb-8">
        <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${getScoreBgColor(steelIndex)} mb-4`}>
          <span className={`text-4xl font-bold ${getScoreColor(steelIndex)}`}>
            {steelIndex}
          </span>
        </div>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Overall STEEL™ Index
        </p>
      </div>

      {/* Sublayer Scores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scores.map((score, index) => {
          const Icon = score.icon;
          return (
            <div
              key={index}
              className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon size={20} className={score.color} />
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {score.shortLabel}
                  </p>
                  <p className="text-sm font-bold text-navy dark:text-white">
                    {score.label}
                  </p>
                </div>
              </div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getScoreBgColor(score.value)} mb-2`}>
                <span className={`text-2xl font-bold ${getScoreColor(score.value)}`}>
                  {score.value}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {score.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Future Implementation Note */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 italic">
          Note: Weights and scoring models will evolve; implementation-specific logic can be added later or integrated with ERMITS ecosystem analytics.
        </p>
      </div>
    </Card>
  );
};

