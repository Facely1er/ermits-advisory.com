import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../shared/Card';
import { SteelRecommendation, SteelPriority } from '../../types/steelAssessment';
import { Calendar, Clock } from 'lucide-react';

interface ActionTimelineProps {
  recommendations: SteelRecommendation[];
  className?: string;
}

const timelineGroups = {
  '30 days': '30-Day Critical Actions',
  '60-90 days': '60-90 Day Strategic Improvements',
  '90-180 days': '90-180 Day Optimization',
  'Ongoing': 'Ongoing Maintenance',
};

export const ActionTimeline: React.FC<ActionTimelineProps> = ({
  recommendations,
  className,
}) => {
  const criticalRecs = recommendations.filter((r) => r.priority === 'CRITICAL');
  const highRecs = recommendations.filter((r) => r.priority === 'HIGH');

  return (
    <Card variant="glass" padding="lg" className={className}>
      <div className="flex items-center gap-2 mb-6">
        <Calendar size={24} className="text-navy dark:text-silver" />
        <h3 className="text-2xl font-bold dark:text-white">Recommended Action Timeline</h3>
      </div>

      {criticalRecs.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
            <Clock size={18} />
            30-Day Critical Actions
          </h4>
          <ul className="space-y-3">
            {criticalRecs.slice(0, 5).map((rec, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800"
              >
                <span className="font-semibold text-red-700 dark:text-red-300 min-w-[100px]">
                  {rec.factorName}:
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm">
                  {rec.quickWins[0] || rec.actions[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {highRecs.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-4 flex items-center gap-2">
            <Clock size={18} />
            60-90 Day Strategic Improvements
          </h4>
          <ul className="space-y-3">
            {highRecs.slice(0, 5).map((rec, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
              >
                <span className="font-semibold text-orange-700 dark:text-orange-300 min-w-[100px]">
                  {rec.factorName}:
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-sm">
                  {rec.quickWins[0] || rec.actions[0]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

