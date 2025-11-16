import React from 'react';
import { RecommendationCard } from './RecommendationCard';
import { SteelRecommendation } from '../../types/steelAssessment';

interface RecommendationListProps {
  recommendations: SteelRecommendation[];
  className?: string;
}

export const RecommendationList: React.FC<RecommendationListProps> = ({
  recommendations,
  className,
}) => {
  // Filter out low priority recommendations with high scores
  const filteredRecommendations = recommendations.filter(
    (rec) => !(rec.priority === 'LOW' && rec.score >= 80)
  );

  return (
    <div className={className}>
      <h3 className="text-2xl font-bold dark:text-white mb-6">Strategic Recommendations</h3>
      <div className="space-y-6">
        {filteredRecommendations.map((recommendation, index) => (
          <RecommendationCard key={index} recommendation={recommendation} />
        ))}
      </div>
    </div>
  );
};

