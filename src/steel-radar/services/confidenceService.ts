/**
 * Confidence Service
 * 
 * Calculates confidence levels based on data source availability
 */

import { ConfidenceLevel, FactorConfidence } from '../types/radar';
import { SteelFactor } from '../../types/steelAssessment';

export interface DataSourceInfo {
  factor: SteelFactor;
  questions: string[];
  hasData: boolean;
  dataQuality: 'high' | 'medium' | 'low';
  dataAge?: number; // days since last update
}

/**
 * Calculate confidence level based on data sources
 */
export function calculateConfidenceLevel(
  dataSources: DataSourceInfo[],
  factor: SteelFactor
): ConfidenceLevel {
  const factorSources = dataSources.filter((ds) => ds.factor === factor);

  if (factorSources.length === 0) {
    return 'LOW';
  }

  const hasHighQualityData = factorSources.some(
    (ds) => ds.hasData && ds.dataQuality === 'high' && (!ds.dataAge || ds.dataAge <= 30)
  );

  const hasMediumQualityData = factorSources.some(
    (ds) => ds.hasData && ds.dataQuality === 'medium' && (!ds.dataAge || ds.dataAge <= 60)
  );

  const hasAnyData = factorSources.some((ds) => ds.hasData);

  // Check for stale data
  const hasStaleData = factorSources.some((ds) => ds.dataAge && ds.dataAge > 90);

  if (hasStaleData) {
    return 'LOW';
  }

  if (hasHighQualityData && factorSources.length >= 2) {
    return 'HIGH';
  }

  if (hasHighQualityData || (hasMediumQualityData && factorSources.length >= 2)) {
    return 'MEDIUM';
  }

  if (hasAnyData) {
    return 'MEDIUM';
  }

  return 'LOW';
}

/**
 * Calculate confidence for all factors
 */
export function calculateFactorConfidence(
  dataSources: DataSourceInfo[]
): FactorConfidence {
  const factors: SteelFactor[] = [
    'political',
    'economic',
    'social',
    'technological',
    'environmental',
    'legal',
  ];

  const confidence: Partial<FactorConfidence> = {};

  factors.forEach((factor) => {
    confidence[factor] = calculateConfidenceLevel(dataSources, factor);
  });

  return confidence as FactorConfidence;
}

/**
 * Get confidence percentage (0-100)
 */
export function getConfidencePercentage(level: ConfidenceLevel): number {
  switch (level) {
    case 'HIGH':
      return 85; // 70-100% range, use midpoint
    case 'MEDIUM':
      return 55; // 40-69% range, use midpoint
    case 'LOW':
      return 20; // 0-39% range, use midpoint
    default:
      return 0;
  }
}

/**
 * Get confidence color for UI
 */
export function getConfidenceColor(level: ConfidenceLevel, isDark: boolean = false): string {
  if (isDark) {
    switch (level) {
      case 'HIGH':
        return 'text-green-400';
      case 'MEDIUM':
        return 'text-yellow-400';
      case 'LOW':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  } else {
    switch (level) {
      case 'HIGH':
        return 'text-green-600';
      case 'MEDIUM':
        return 'text-yellow-600';
      case 'LOW':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  }
}

/**
 * Get confidence badge style
 */
export function getConfidenceBadgeStyle(level: ConfidenceLevel): string {
  switch (level) {
    case 'HIGH':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
    case 'MEDIUM':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
    case 'LOW':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
  }
}

/**
 * Determine if question has data validation vs self-reported
 */
export function hasDataValidation(
  questionId: string,
  dataSources: DataSourceInfo[]
): boolean {
  return dataSources.some(
    (ds) => ds.questions.includes(questionId) && ds.hasData
  );
}

