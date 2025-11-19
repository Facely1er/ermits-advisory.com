/**
 * Demo Data Service
 * 
 * Generates realistic demo data for STEEL Radar to showcase features
 */

import { RadarDataPoint, FactorConfidence } from '../types/radar';
import { FactorScores, SteelFactor } from '../../types/steelAssessment';
import { subDays } from 'date-fns';

/**
 * Generate demo radar data points over the last 30 days
 */
export async function generateDemoData(): Promise<RadarDataPoint[]> {
  const dataPoints: Omit<RadarDataPoint, 'id'>[] = [];
  const today = new Date();
  
  // Generate data points for the last 30 days (one per week)
  const weeks = 4;
  
  for (let i = weeks; i >= 0; i--) {
    const daysAgo = i * 7;
    const timestamp = subDays(today, daysAgo);
    
    // Create realistic score progression (slight improvement over time)
    const baseScores: FactorScores = {
      political: 65 - (i * 2),
      economic: 70 - (i * 1.5),
      social: 68 - (i * 1),
      technological: 72 - (i * 2.5),
      environmental: 60 - (i * 1),
      legal: 75 - (i * 1.5),
    };
    
    // Add some variation to make it realistic
    const variation = () => (Math.random() - 0.5) * 5;
    const factorScores: FactorScores = {
      political: Math.max(0, Math.min(100, Math.round(baseScores.political + variation()))),
      economic: Math.max(0, Math.min(100, Math.round(baseScores.economic + variation()))),
      social: Math.max(0, Math.min(100, Math.round(baseScores.social + variation()))),
      technological: Math.max(0, Math.min(100, Math.round(baseScores.technological + variation()))),
      environmental: Math.max(0, Math.min(100, Math.round(baseScores.environmental + variation()))),
      legal: Math.max(0, Math.min(100, Math.round(baseScores.legal + variation()))),
    };
    
    // Calculate composite score (weighted average)
    const weights = {
      political: 1.0,
      economic: 1.0,
      social: 1.0,
      technological: 1.2,
      environmental: 0.9,
      legal: 1.1,
    };
    
    const weightedSum = 
      factorScores.political * weights.political +
      factorScores.economic * weights.economic +
      factorScores.social * weights.social +
      factorScores.technological * weights.technological +
      factorScores.environmental * weights.environmental +
      factorScores.legal * weights.legal;
    
    const totalWeight = 
      weights.political + weights.economic + weights.social + 
      weights.technological + weights.environmental + weights.legal;
    
    const composite = Math.round(weightedSum / totalWeight);
    
    // Generate confidence levels (mix of HIGH, MEDIUM, LOW)
    const confidence: FactorConfidence = {
      political: i === 0 ? 'HIGH' : i <= 1 ? 'MEDIUM' : 'LOW',
      economic: i === 0 ? 'HIGH' : i <= 1 ? 'MEDIUM' : 'LOW',
      social: i === 0 ? 'MEDIUM' : 'LOW',
      technological: i === 0 ? 'HIGH' : i <= 2 ? 'MEDIUM' : 'LOW',
      environmental: i === 0 ? 'MEDIUM' : 'LOW',
      legal: i === 0 ? 'HIGH' : i <= 1 ? 'MEDIUM' : 'LOW',
    };
    
    // Create self-assessment scores (slightly different from auto-scores for demo)
    const selfAssessment: FactorScores = {
      political: factorScores.political + (Math.random() > 0.5 ? 5 : -5),
      economic: factorScores.economic + (Math.random() > 0.5 ? 3 : -3),
      social: factorScores.social + (Math.random() > 0.5 ? 4 : -4),
      technological: factorScores.technological + (Math.random() > 0.5 ? 6 : -6),
      environmental: factorScores.environmental + (Math.random() > 0.5 ? 2 : -2),
      legal: factorScores.legal + (Math.random() > 0.5 ? 3 : -3),
    };
    
    // Clamp self-assessment to 0-100
    Object.keys(selfAssessment).forEach((key) => {
      const f = key as SteelFactor;
      selfAssessment[f] = Math.max(0, Math.min(100, selfAssessment[f]));
    });
    
    // Generate discrepancies for the most recent data point
    // Only create discrepancies if difference is significant (>20 points)
    const techDiff = Math.abs(selfAssessment.technological - factorScores.technological);
    const discrepancies = i === 0 && techDiff > 20 ? [
      {
        factor: 'technological' as SteelFactor,
        selfAssessment: selfAssessment.technological,
        autoScore: factorScores.technological,
        difference: techDiff,
        flagged: true,
      },
    ] : undefined;
    
    dataPoints.push({
      timestamp: timestamp.toISOString(),
      factorScores,
      composite,
      confidence,
      source: i === 0 ? 'CSV' : 'CSV',
      dataSources: i === 0 
        ? ['tenable-io', 'crowdstrike-edr', 'okta-access']
        : ['tenable-io'],
      selfAssessment: i === 0 ? selfAssessment : undefined,
      discrepancies,
    });
  }
  
  return dataPoints as RadarDataPoint[];
}

/**
 * Check if demo data has been loaded
 */
export function hasDemoData(): boolean {
  return localStorage.getItem('steel_radar_demo_loaded') === 'true';
}

/**
 * Mark demo data as loaded
 */
export function markDemoDataLoaded(): void {
  localStorage.setItem('steel_radar_demo_loaded', 'true');
}

/**
 * Clear demo data flag
 */
export function clearDemoDataFlag(): void {
  localStorage.removeItem('steel_radar_demo_loaded');
}

