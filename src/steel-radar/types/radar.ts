/**
 * STEEL Radar Type Definitions
 * 
 * Type definitions for the STEEL™ Radar continuous monitoring feature
 */

import { FactorScores, SteelFactor } from '../../types/steelAssessment';

export type ConfidenceLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export type IngestionSource = 'CSV' | 'JSON' | 'API';

export interface RadarDataPoint {
  id?: number;
  timestamp: string;
  factorScores: FactorScores;
  composite: number;
  confidence: FactorConfidence;
  source: IngestionSource;
  dataSources?: string[];
  selfAssessment?: FactorScores;
  discrepancies?: Discrepancy[];
}

export interface FactorConfidence {
  political: ConfidenceLevel;
  economic: ConfidenceLevel;
  social: ConfidenceLevel;
  technological: ConfidenceLevel;
  environmental: ConfidenceLevel;
  legal: ConfidenceLevel;
}

export interface Discrepancy {
  factor: SteelFactor;
  selfAssessment: number;
  autoScore: number;
  difference: number;
  flagged: boolean;
}

export interface DataIngestionResult {
  success: boolean;
  source: IngestionSource;
  template?: string;
  recordsProcessed: number;
  recordsValid: number;
  recordsInvalid: number;
  errors: string[];
  mappedQuestions: Record<string, any>;
  timestamp: string;
}

export interface AutoScoringResult {
  factorScores: FactorScores;
  composite: number;
  confidence: FactorConfidence;
  questionsScored: Record<string, {
    question: string;
    score: number;
    confidence: ConfidenceLevel;
    dataSource?: string;
    validated: boolean;
  }>;
  discrepancies?: Discrepancy[];
  warnings: string[];
}

export interface TrendData {
  date: string;
  composite: number;
  factorScores: FactorScores;
}

export interface TrendAnalysis {
  period: '7d' | '30d' | '90d';
  data: TrendData[];
  changes: {
    composite: number;
    factors: Record<SteelFactor, number>;
  };
  direction: 'improving' | 'declining' | 'stable';
}

export interface IngestionTemplate {
  id: string;
  name: string;
  description: string;
  source: string;
  version: string;
  fieldMappings: FieldMapping[];
  validationRules: ValidationRule[];
  scoringLogic: ScoringRule[];
}

export interface FieldMapping {
  sourceField: string;
  targetQuestion: string;
  transform?: (value: any) => any;
  required: boolean;
}

export interface ValidationRule {
  field: string;
  type: 'required' | 'format' | 'range' | 'custom';
  rule: any;
  message: string;
}

export interface ScoringRule {
  question: string;
  factor: SteelFactor;
  logic: (data: any) => number;
  confidence: ConfidenceLevel;
}

