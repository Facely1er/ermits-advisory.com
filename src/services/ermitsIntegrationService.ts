/**
 * ERMITS Integration Service
 * 
 * Handles integration with ERMITS platform ecosystem for Professional/Enterprise tiers.
 * This service manages data synchronization, platform connections, and cross-platform recommendations.
 */

import { SteelAssessmentData } from '../types/steelAssessment';

export interface ErmitsPlatform {
  id: string;
  name: string;
  description: string;
  integrationStatus: 'connected' | 'available' | 'unavailable';
  lastSync?: string;
}

export interface ErmitsIntegrationConfig {
  platforms: ErmitsPlatform[];
  autoSync: boolean;
  syncInterval: number; // in minutes
}

/**
 * Get recommended ERMITS platforms based on STEEL assessment results
 */
export function getRecommendedPlatforms(
  assessmentData: SteelAssessmentData
): ErmitsPlatform[] {
  const recommendations: ErmitsPlatform[] = [];
  const { factorScores } = assessmentData;

  // CyberCaution - for technological risks
  if (factorScores.technological < 60) {
    recommendations.push({
      id: 'cybercaution',
      name: 'CyberCaution',
      description: 'Ransomware readiness and threat forecasts',
      integrationStatus: 'available',
    });
  }

  // CyberCorrect - for political/legal risks
  if (factorScores.political < 60 || factorScores.legal < 60) {
    recommendations.push({
      id: 'cybercorrect',
      name: 'CyberCorrect',
      description: 'Privacy exposure and regulatory gaps',
      integrationStatus: 'available',
    });
  }

  // CyberSoluce - for environmental risks
  if (factorScores.environmental < 60) {
    recommendations.push({
      id: 'cybersoluce',
      name: 'CyberSoluce',
      description: 'NIST CSF–aligned maturity mapping',
      integrationStatus: 'available',
    });
  }

  // VendorSoluce - for legal/operational risks
  if (factorScores.legal < 60) {
    recommendations.push({
      id: 'vendorsoluce',
      name: 'VendorSoluce',
      description: 'Vendor exposure scoring & TPRM',
      integrationStatus: 'available',
    });
  }

  // TechnoSoluce - for technological risks
  if (factorScores.technological < 60) {
    recommendations.push({
      id: 'technosoluce',
      name: 'TechnoSoluce',
      description: 'SBOM risk and component vulnerability management',
      integrationStatus: 'available',
    });
  }

  // ImpactSoluce - for environmental risks
  if (factorScores.environmental < 60) {
    recommendations.push({
      id: 'impactsoluce',
      name: 'ImpactSoluce',
      description: 'Sustainability, ESG, and supply chain climate risks',
      integrationStatus: 'available',
    });
  }

  // EduSoluce - for social risks
  if (factorScores.social < 60) {
    recommendations.push({
      id: 'edusoluce',
      name: 'EduSoluce',
      description: 'Training aligned to your risk profile',
      integrationStatus: 'available',
    });
  }

  // SocialCaution - for social/legal risks
  if (factorScores.social < 60 || factorScores.legal < 60) {
    recommendations.push({
      id: 'socialcaution',
      name: 'SocialCaution',
      description: 'Public-facing privacy understanding',
      integrationStatus: 'available',
    });
  }

  return recommendations;
}

/**
 * Sync STEEL assessment data with ERMITS platforms
 * (Professional/Enterprise feature)
 */
export async function syncWithErmitsPlatforms(
  _assessmentData: SteelAssessmentData,
  platformIds: string[]
): Promise<{ success: boolean; synced: string[]; errors: string[] }> {
  // In production, this would make API calls to ERMITS platform services
  // For now, simulate the sync process
  // Note: _assessmentData will be used in production to sync actual assessment data
  
  const result = {
    success: true,
    synced: [] as string[],
    errors: [] as string[],
  };

  try {
    // Simulate API calls
    for (const platformId of platformIds) {
      // In production: await fetch(`/api/ermits/${platformId}/sync`, { ... })
      result.synced.push(platformId);
    }

    // Update last sync timestamp
    const config = getIntegrationConfig();
    config.platforms = config.platforms.map((p) =>
      platformIds.includes(p.id)
        ? { ...p, lastSync: new Date().toISOString(), integrationStatus: 'connected' as const }
        : p
    );
    saveIntegrationConfig(config);

    return result;
  } catch (error) {
    result.success = false;
    result.errors.push(error instanceof Error ? error.message : 'Unknown error');
    return result;
  }
}

/**
 * Get ERMITS integration configuration
 */
export function getIntegrationConfig(): ErmitsIntegrationConfig {
  try {
    const stored = localStorage.getItem('ermits_integration_config');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading ERMITS integration config:', error);
  }

  // Default configuration
  return {
    platforms: [],
    autoSync: false,
    syncInterval: 60, // 60 minutes
  };
}

/**
 * Save ERMITS integration configuration
 */
export function saveIntegrationConfig(config: ErmitsIntegrationConfig): void {
  try {
    localStorage.setItem('ermits_integration_config', JSON.stringify(config));
  } catch (error) {
    console.error('Error saving ERMITS integration config:', error);
  }
}

/**
 * Check if ERMITS integration is available (Professional/Enterprise tier)
 */
export function isErmitsIntegrationAvailable(): boolean {
  // In production, this would check user subscription/tier
  // For now, check if professional/enterprise flag exists
  try {
    const tier = localStorage.getItem('steel_tier');
    return tier === 'professional' || tier === 'enterprise';
  } catch {
    return false;
  }
}

/**
 * Initialize ERMITS platform connections
 */
export async function initializeErmitsPlatforms(
  assessmentData: SteelAssessmentData
): Promise<ErmitsPlatform[]> {
  if (!isErmitsIntegrationAvailable()) {
    return [];
  }

  const recommended = getRecommendedPlatforms(assessmentData);
  const config = getIntegrationConfig();

  // Merge with existing config
  const allPlatforms = recommended.map((rec) => {
    const existing = config.platforms.find((p) => p.id === rec.id);
    return existing || rec;
  });

  config.platforms = allPlatforms;
  saveIntegrationConfig(config);

  return allPlatforms;
}

