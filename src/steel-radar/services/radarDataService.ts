/**
 * Radar Data Service
 * 
 * Handles IndexedDB operations for storing and retrieving historical STEEL scores
 * Uses Dexie for IndexedDB wrapper with isolated database
 */

import Dexie, { Table } from 'dexie';
import { RadarDataPoint, TrendData, TrendAnalysis } from '../types/radar';
import { subDays, format, parseISO } from 'date-fns';

// Isolated database for Radar data
class RadarDatabase extends Dexie {
  radarData!: Table<RadarDataPoint, number>;

  constructor() {
    super('steel_radar_db');
    this.version(1).stores({
      radarData: '++id, timestamp, composite',
    });
  }
}

const db = new RadarDatabase();

const DATA_RETENTION_DAYS = 90;

/**
 * Save a radar data point to IndexedDB
 */
export async function saveRadarDataPoint(data: Omit<RadarDataPoint, 'id'>): Promise<number> {
  try {
    // Clean up old data before saving
    await cleanupOldData();

    const id = await db.radarData.add({
      ...data,
      timestamp: data.timestamp || new Date().toISOString(),
    } as RadarDataPoint);

    return id as number;
  } catch (error) {
    console.error('Error saving radar data point:', error);
    throw new Error('Failed to save radar data point');
  }
}

/**
 * Get historical data within a date range
 */
export async function getHistoricalData(
  startDate?: Date,
  endDate?: Date
): Promise<RadarDataPoint[]> {
  try {
    let query = db.radarData.orderBy('timestamp');

    if (startDate || endDate) {
      const start = startDate ? startDate.toISOString() : undefined;
      const end = endDate ? endDate.toISOString() : undefined;

      if (start && end) {
        query = db.radarData
          .where('timestamp')
          .between(start, end, true, true)
          .sortBy('timestamp');
      } else if (start) {
        query = db.radarData
          .where('timestamp')
          .aboveOrEqual(start)
          .sortBy('timestamp');
      } else if (end) {
        query = db.radarData
          .where('timestamp')
          .belowOrEqual(end)
          .sortBy('timestamp');
      }
    }

    const data = await query;
    return data.reverse(); // Most recent first
  } catch (error) {
    console.error('Error getting historical data:', error);
    return [];
  }
}

/**
 * Get the latest radar data point
 */
export async function getLatestScore(): Promise<RadarDataPoint | null> {
  try {
    const data = await db.radarData
      .orderBy('timestamp')
      .reverse()
      .limit(1)
      .toArray();

    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error getting latest score:', error);
    return null;
  }
}

/**
 * Calculate trends for score changes over time
 */
export async function calculateTrends(period: '7d' | '30d' | '90d' = '30d'): Promise<TrendAnalysis> {
  try {
    const days = period === '7d' ? 7 : period === '30d' ? 30 : 90;
    const startDate = subDays(new Date(), days);
    const endDate = new Date();

    const data = await getHistoricalData(startDate, endDate);

    const trendData: TrendData[] = data.map((point) => ({
      date: point.timestamp,
      composite: point.composite,
      factorScores: point.factorScores,
    }));

    // Calculate changes
    const changes = calculateChanges(trendData);
    const direction = determineDirection(changes.composite);

    return {
      period,
      data: trendData,
      changes,
      direction,
    };
  } catch (error) {
    console.error('Error calculating trends:', error);
    return {
      period,
      data: [],
      changes: {
        composite: 0,
        factors: {
          political: 0,
          economic: 0,
          social: 0,
          technological: 0,
          environmental: 0,
          legal: 0,
        },
      },
      direction: 'stable',
    };
  }
}

/**
 * Calculate score changes between first and last data points
 */
function calculateChanges(data: TrendData[]): TrendAnalysis['changes'] {
  if (data.length < 2) {
    return {
      composite: 0,
      factors: {
        political: 0,
        economic: 0,
        social: 0,
        technological: 0,
        environmental: 0,
        legal: 0,
      },
    };
  }

  const first = data[data.length - 1]; // Oldest
  const last = data[0]; // Newest

  return {
    composite: last.composite - first.composite,
    factors: {
      political: last.factorScores.political - first.factorScores.political,
      economic: last.factorScores.economic - first.factorScores.economic,
      social: last.factorScores.social - first.factorScores.social,
      technological: last.factorScores.technological - first.factorScores.technological,
      environmental: last.factorScores.environmental - first.factorScores.environmental,
      legal: last.factorScores.legal - first.factorScores.legal,
    },
  };
}

/**
 * Determine trend direction based on composite score change
 */
function determineDirection(change: number): 'improving' | 'declining' | 'stable' {
  if (change > 2) return 'improving';
  if (change < -2) return 'declining';
  return 'stable';
}

/**
 * Clean up data older than retention period
 */
async function cleanupOldData(): Promise<void> {
  try {
    const cutoffDate = subDays(new Date(), DATA_RETENTION_DAYS);
    const cutoffISO = cutoffDate.toISOString();

    await db.radarData
      .where('timestamp')
      .below(cutoffISO)
      .delete();
  } catch (error) {
    console.error('Error cleaning up old data:', error);
  }
}

/**
 * Export all radar data as JSON
 */
export async function exportRadarData(): Promise<string> {
  try {
    const data = await db.radarData.toArray();
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error exporting radar data:', error);
    throw new Error('Failed to export radar data');
  }
}

/**
 * Clear all radar data
 */
export async function clearRadarData(): Promise<void> {
  try {
    await db.radarData.clear();
  } catch (error) {
    console.error('Error clearing radar data:', error);
    throw new Error('Failed to clear radar data');
  }
}

