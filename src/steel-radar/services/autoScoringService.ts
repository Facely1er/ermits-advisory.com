/**
 * Auto-Scoring Service
 * 
 * Implements scoring rules from framework document (Q1-Q42 mappings)
 * with confidence calculation and discrepancy detection
 */

import {
  AutoScoringResult,
  Discrepancy,
  FactorConfidence,
} from '../types/radar';
import { FactorScores, SteelFactor, SteelAssessmentData } from '../../types/steelAssessment';
import { calculateFactorConfidence, DataSourceInfo } from './confidenceService';
import { getTemplateById, detectTemplate } from '../data/ingestionTemplates';

/**
 * Calculate auto-score for a specific question based on ingested data
 */
export function calculateQuestionScore(
  questionId: string,
  data: any[],
  templateId?: string
): { score: number; confidence: 'HIGH' | 'MEDIUM' | 'LOW' } {
  if (!data || data.length === 0) {
    return { score: 0, confidence: 'LOW' };
  }

  // Get template for scoring logic
  let template = templateId ? getTemplateById(templateId) : null;
  
  // Try to detect template if not provided
  if (!template) {
    template = detectTemplate(data);
  }
  
  if (!template || !template.scoringLogic || template.scoringLogic.length === 0) {
    return { score: 5, confidence: 'MEDIUM' }; // Default middle score
  }

  // Find scoring rule for this question
  const rule = template.scoringLogic.find((r) => r.question === questionId);
  if (!rule || !rule.logic) {
    return { score: 5, confidence: 'MEDIUM' };
  }

  try {
    const score = rule.logic(data);
    return {
      score: Math.max(1, Math.min(10, Math.round(score))), // Clamp 1-10
      confidence: rule.confidence,
    };
  } catch (error) {
    console.error(`Error calculating score for ${questionId}:`, error);
    return { score: 5, confidence: 'LOW' };
  }
}

/**
 * Calculate auto-scores for all PESTEL factors
 */
export function calculateAutoScores(
  mappedQuestions: Record<string, any[]>,
  dataSources: DataSourceInfo[]
): {
  factorScores: FactorScores;
  questionsScored: AutoScoringResult['questionsScored'];
} {
  const factorScores: FactorScores = {
    political: 0,
    economic: 0,
    social: 0,
    technological: 0,
    environmental: 0,
    legal: 0,
  };

  const questionsScored: AutoScoringResult['questionsScored'] = {};

  // Question to factor mapping
  const questionFactorMap: Record<string, SteelFactor> = {
    q1: 'political',
    q2: 'political',
    q3: 'political',
    q4: 'political',
    q5: 'political',
    q6: 'political',
    q7: 'political',
    q8: 'economic',
    q9: 'economic',
    q10: 'economic',
    q11: 'economic',
    q12: 'economic',
    q13: 'economic',
    q14: 'economic',
    q15: 'social',
    q16: 'social',
    q17: 'social',
    q18: 'social',
    q19: 'social',
    q20: 'social',
    q21: 'social',
    q22: 'technological',
    q23: 'technological',
    q24: 'technological',
    q25: 'technological',
    q26: 'technological',
    q27: 'technological',
    q28: 'technological',
    q29: 'environmental',
    q30: 'environmental',
    q31: 'environmental',
    q32: 'environmental',
    q33: 'environmental',
    q34: 'environmental',
    q35: 'environmental',
    q36: 'legal',
    q37: 'legal',
    q38: 'legal',
    q39: 'legal',
    q40: 'legal',
    q41: 'legal',
    q42: 'legal',
  };

  // Factor question counts
  const factorCounts: Record<SteelFactor, number> = {
    political: 0,
    economic: 0,
    social: 0,
    technological: 0,
    environmental: 0,
    legal: 0,
  };

  // Calculate scores for each question
  Object.entries(mappedQuestions).forEach(([questionId, data]) => {
    const factor = questionFactorMap[questionId];
    if (!factor) return;

    const result = calculateQuestionScore(questionId, data);
    const score = result.score;

    factorScores[factor] += score;
    factorCounts[factor]++;

    const dataSourceInfo = dataSources.find((ds) => ds.questions.includes(questionId));
    questionsScored[questionId] = {
      question: questionId,
      score,
      confidence: result.confidence,
      dataSource: dataSourceInfo ? `${dataSourceInfo.factor}-${dataSourceInfo.dataQuality}` : undefined,
      validated: true,
    };
  });

  // Normalize factor scores to 0-100
  Object.keys(factorScores).forEach((factor) => {
    const f = factor as SteelFactor;
    if (factorCounts[f] > 0) {
      factorScores[f] = Math.round((factorScores[f] / (factorCounts[f] * 10)) * 100);
    }
  });

  return { factorScores, questionsScored };
}

/**
 * Calculate weighted composite score
 */
export function calculateWeightedComposite(
  autoScores: FactorScores,
  selfAssessment?: FactorScores,
  confidence?: FactorConfidence
): number {
  const weights = {
    political: 1.0,
    economic: 1.0,
    social: 1.0,
    technological: 1.2,
    environmental: 0.9,
    legal: 1.1,
  };

  let weightedSum = 0;
  let totalWeight = 0;

  Object.keys(autoScores).forEach((factor) => {
    const f = factor as SteelFactor;
    const autoScore = autoScores[f];
    const selfScore = selfAssessment?.[f] || autoScore;
    const conf = confidence?.[f] || 'LOW';

    // Weight based on confidence
    let finalScore = autoScore;
    if (selfAssessment) {
      if (conf === 'HIGH') {
        finalScore = autoScore * 0.7 + selfScore * 0.3;
      } else if (conf === 'MEDIUM') {
        finalScore = autoScore * 0.5 + selfScore * 0.5;
      } else {
        finalScore = selfScore; // Use self-assessment if low confidence
      }
    }

    weightedSum += finalScore * weights[f];
    totalWeight += weights[f];
  });

  return Math.round(weightedSum / totalWeight);
}

/**
 * Detect discrepancies between self-assessment and auto-scores
 */
export function detectDiscrepancies(
  selfAssessment: FactorScores,
  autoScores: FactorScores,
  threshold: number = 20
): Discrepancy[] {
  const discrepancies: Discrepancy[] = [];

  Object.keys(selfAssessment).forEach((factor) => {
    const f = factor as SteelFactor;
    const self = selfAssessment[f];
    const auto = autoScores[f];
    const difference = Math.abs(self - auto);

    if (difference > threshold) {
      discrepancies.push({
        factor: f,
        selfAssessment: self,
        autoScore: auto,
        difference,
        flagged: true,
      });
    }
  });

  return discrepancies;
}

/**
 * Main auto-scoring function
 */
export function calculateAutoScoring(
  mappedQuestions: Record<string, any[]>,
  selfAssessment?: SteelAssessmentData,
  dataSources: DataSourceInfo[] = []
): AutoScoringResult {
  // Calculate auto-scores
  const { factorScores, questionsScored } = calculateAutoScores(
    mappedQuestions,
    dataSources
  );

  // Calculate confidence
  const confidence = calculateFactorConfidence(dataSources);

  // Calculate composite score
  const composite = calculateWeightedComposite(
    factorScores,
    selfAssessment?.factorScores,
    confidence
  );

  // Detect discrepancies
  let discrepancies: Discrepancy[] = [];
  if (selfAssessment) {
    discrepancies = detectDiscrepancies(
      selfAssessment.factorScores,
      factorScores
    );
  }

  // Generate warnings
  const warnings: string[] = [];
  if (discrepancies.length > 0) {
    warnings.push(
      `${discrepancies.length} factor(s) show significant discrepancies between self-assessment and data`
    );
  }

  // Check for stale data
  const staleDataSources = dataSources.filter(
    (ds) => ds.dataAge && ds.dataAge > 90
  );
  if (staleDataSources.length > 0) {
    warnings.push(
      `${staleDataSources.length} data source(s) are older than 90 days`
    );
  }

  return {
    factorScores,
    composite,
    confidence,
    questionsScored,
    discrepancies: discrepancies.length > 0 ? discrepancies : undefined,
    warnings,
  };
}

/**
 * Validate data freshness
 */
export function validateDataFreshness(dataAge?: number): boolean {
  if (!dataAge) return true;
  return dataAge <= 90; // Data is fresh if less than 90 days old
}

/**
 * Detect outliers (scores significantly below industry benchmark)
 */
export function detectOutliers(
  scores: FactorScores,
  benchmark: FactorScores = {
    political: 70,
    economic: 70,
    social: 70,
    technological: 70,
    environmental: 70,
    legal: 70,
  },
  stdDev: number = 2
): SteelFactor[] {
  const outliers: SteelFactor[] = [];

  Object.keys(scores).forEach((factor) => {
    const f = factor as SteelFactor;
    const score = scores[f];
    const bench = benchmark[f];
    const threshold = bench - stdDev * 10; // Approximate std dev

    if (score < threshold) {
      outliers.push(f);
    }
  });

  return outliers;
}

