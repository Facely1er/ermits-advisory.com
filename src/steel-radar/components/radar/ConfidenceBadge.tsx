/**
 * Confidence Badge Component
 * 
 * Displays confidence level indicators
 */

import React from 'react';
import { ConfidenceLevel } from '../../types/radar';
import { getConfidenceBadgeStyle, getConfidenceColor } from '../../services/confidenceService';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ConfidenceBadgeProps {
  level: ConfidenceLevel;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({
  level,
  showIcon = true,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2',
  };

  const iconSize = size === 'sm' ? 14 : size === 'md' ? 16 : 18;

  const getIcon = () => {
    switch (level) {
      case 'HIGH':
        return <CheckCircle size={iconSize} />;
      case 'MEDIUM':
        return <Info size={iconSize} />;
      case 'LOW':
        return <AlertCircle size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium ${getConfidenceBadgeStyle(
        level
      )} ${sizeClasses[size]}`}
    >
      {showIcon && getIcon()}
      <span>{level}</span>
    </span>
  );
};

