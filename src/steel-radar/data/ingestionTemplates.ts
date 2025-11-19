/**
 * Ingestion Templates
 * 
 * Pre-built mappings for common security tools to STEEL questions
 */

import { IngestionTemplate, ScoringRule } from '../types/radar';
import { SteelFactor } from '../../types/steelAssessment';

/**
 * Tenable.io Vulnerability Scanner Template
 */
export const tenableTemplate: IngestionTemplate = {
  id: 'tenable-io',
  name: 'Tenable.io',
  description: 'Vulnerability scanner export from Tenable.io',
  source: 'Tenable',
  version: '1.0',
  fieldMappings: [
    {
      sourceField: 'plugin_name',
      targetQuestion: 'q23',
      required: false,
    },
    {
      sourceField: 'severity',
      targetQuestion: 'q23',
      transform: (value: string) => {
        const severityMap: Record<string, number> = {
          critical: 1,
          high: 2,
          medium: 3,
          low: 4,
          info: 5,
        };
        return severityMap[value.toLowerCase()] || 3;
      },
      required: false,
    },
    {
      sourceField: 'vpr_score',
      targetQuestion: 'q23',
      required: false,
    },
    {
      sourceField: 'first_found',
      targetQuestion: 'q23',
      required: false,
    },
    {
      sourceField: 'last_found',
      targetQuestion: 'q23',
      required: false,
    },
  ],
  validationRules: [
    {
      field: 'plugin_name',
      type: 'required',
      rule: true,
      message: 'Plugin name is required',
    },
  ],
  scoringLogic: [
    {
      question: 'q23',
      factor: 'technological',
      confidence: 'HIGH',
      logic: (data: any[]) => {
        // Calculate score based on vulnerability metrics
        const criticalCount = data.filter((v) => v.severity === 'critical' || v.vpr_score >= 9).length;
        const highCount = data.filter((v) => v.severity === 'high' || (v.vpr_score >= 7 && v.vpr_score < 9)).length;
        const total = data.length;

        if (total === 0) return 10; // No vulnerabilities = perfect score

        const criticalRatio = criticalCount / total;
        const highRatio = highCount / total;

        // Score 1-10 based on vulnerability severity distribution
        if (criticalRatio > 0.1) return 1; // >10% critical
        if (criticalRatio > 0.05) return 3; // 5-10% critical
        if (highRatio > 0.2) return 4; // >20% high
        if (highRatio > 0.1) return 6; // 10-20% high
        if (highRatio > 0.05) return 7; // 5-10% high
        return 8; // <5% high/critical
      },
    },
  ],
};

/**
 * Qualys VMDR Template
 */
export const qualysTemplate: IngestionTemplate = {
  id: 'qualys-vmdr',
  name: 'Qualys VMDR',
  description: 'Vulnerability Management export from Qualys',
  source: 'Qualys',
  version: '1.0',
  fieldMappings: [
    {
      sourceField: 'title',
      targetQuestion: 'q23',
      required: false,
    },
    {
      sourceField: 'severity',
      targetQuestion: 'q23',
      transform: (value: number) => {
        // Qualys uses 1-5 severity
        return value;
      },
      required: false,
    },
    {
      sourceField: 'qid',
      targetQuestion: 'q23',
      required: false,
    },
  ],
  validationRules: [
    {
      field: 'qid',
      type: 'required',
      rule: true,
      message: 'QID is required',
    },
  ],
  scoringLogic: [
    {
      question: 'q23',
      factor: 'technological',
      confidence: 'HIGH',
      logic: (data: any[]) => {
        const severity5 = data.filter((v) => v.severity === 5).length;
        const severity4 = data.filter((v) => v.severity === 4).length;
        const total = data.length;

        if (total === 0) return 10;

        const criticalRatio = severity5 / total;
        const highRatio = severity4 / total;

        if (criticalRatio > 0.1) return 1;
        if (criticalRatio > 0.05) return 3;
        if (highRatio > 0.2) return 4;
        if (highRatio > 0.1) return 6;
        if (highRatio > 0.05) return 7;
        return 8;
      },
    },
  ],
};

/**
 * CrowdStrike EDR Template
 */
export const crowdstrikeTemplate: IngestionTemplate = {
  id: 'crowdstrike-edr',
  name: 'CrowdStrike Falcon',
  description: 'Endpoint detection and response data from CrowdStrike',
  source: 'CrowdStrike',
  version: '1.0',
  fieldMappings: [
    {
      sourceField: 'detection_name',
      targetQuestion: 'q3',
      required: false,
    },
    {
      sourceField: 'severity',
      targetQuestion: 'q3',
      required: false,
    },
    {
      sourceField: 'technique',
      targetQuestion: 'q3',
      required: false,
    },
  ],
  validationRules: [
    {
      field: 'detection_name',
      type: 'required',
      rule: true,
      message: 'Detection name is required',
    },
  ],
  scoringLogic: [
    {
      question: 'q3',
      factor: 'political',
      confidence: 'HIGH',
      logic: (data: any[]) => {
        // Check for nation-state indicators
        const nationStateIndicators = data.filter(
          (d) =>
            d.technique?.includes('APT') ||
            d.detection_name?.toLowerCase().includes('nation-state') ||
            d.severity === 'critical'
        ).length;

        if (nationStateIndicators > 0) {
          // Has detection capabilities
          return 8;
        }
        return 5; // Basic EDR without nation-state focus
      },
    },
  ],
};

/**
 * Okta Access Review Template
 */
export const oktaTemplate: IngestionTemplate = {
  id: 'okta-access',
  name: 'Okta Access Reviews',
  description: 'Identity and access management data from Okta',
  source: 'Okta',
  version: '1.0',
  fieldMappings: [
    {
      sourceField: 'user_id',
      targetQuestion: 'q16',
      required: false,
    },
    {
      sourceField: 'last_login',
      targetQuestion: 'q16',
      required: false,
    },
    {
      sourceField: 'status',
      targetQuestion: 'q16',
      required: false,
    },
    {
      sourceField: 'privileged',
      targetQuestion: 'q16',
      required: false,
    },
  ],
  validationRules: [
    {
      field: 'user_id',
      type: 'required',
      rule: true,
      message: 'User ID is required',
    },
  ],
  scoringLogic: [
    {
      question: 'q16',
      factor: 'social',
      confidence: 'HIGH',
      logic: (data: any[]) => {
        const totalUsers = data.length;
        const privilegedUsers = data.filter((u) => u.privileged === true).length;
        const inactiveUsers = data.filter(
          (u) => u.last_login && new Date(u.last_login) < new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
        ).length;

        // Score based on access management maturity
        if (totalUsers === 0) return 5;

        const privilegedRatio = privilegedUsers / totalUsers;
        const inactiveRatio = inactiveUsers / totalUsers;

        if (privilegedRatio < 0.05 && inactiveRatio < 0.1) return 9; // Excellent
        if (privilegedRatio < 0.1 && inactiveRatio < 0.2) return 7; // Good
        if (privilegedRatio < 0.2 && inactiveRatio < 0.3) return 5; // Fair
        return 3; // Needs improvement
      },
    },
  ],
};

/**
 * Generic CSV Template
 */
export const genericCSVTemplate: IngestionTemplate = {
  id: 'generic-csv',
  name: 'Generic CSV',
  description: 'Generic CSV format for custom data imports',
  source: 'Generic',
  version: '1.0',
  fieldMappings: [],
  validationRules: [],
  scoringLogic: [],
};

/**
 * Generic JSON Template
 */
export const genericJSONTemplate: IngestionTemplate = {
  id: 'generic-json',
  name: 'Generic JSON',
  description: 'Generic JSON format for custom data imports',
  source: 'Generic',
  version: '1.0',
  fieldMappings: [],
  validationRules: [],
  scoringLogic: [],
};

/**
 * Get all available templates
 */
export function getAvailableTemplates(): IngestionTemplate[] {
  return [
    tenableTemplate,
    qualysTemplate,
    crowdstrikeTemplate,
    oktaTemplate,
    genericCSVTemplate,
    genericJSONTemplate,
  ];
}

/**
 * Get template by ID
 */
export function getTemplateById(id: string): IngestionTemplate | undefined {
  return getAvailableTemplates().find((t) => t.id === id);
}

/**
 * Detect template from data structure
 */
export function detectTemplate(data: any[]): IngestionTemplate | null {
  if (!data || data.length === 0) return null;

  const firstRow = data[0];

  // Check for Tenable
  if (firstRow.plugin_name || firstRow.vpr_score) {
    return tenableTemplate;
  }

  // Check for Qualys
  if (firstRow.qid || (firstRow.severity && typeof firstRow.severity === 'number')) {
    return qualysTemplate;
  }

  // Check for CrowdStrike
  if (firstRow.detection_name || firstRow.technique) {
    return crowdstrikeTemplate;
  }

  // Check for Okta
  if (firstRow.user_id || firstRow.last_login) {
    return oktaTemplate;
  }

  return null;
}

