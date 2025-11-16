export interface RiskDimension {
  id: string;
  name: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

// interface STEELScore {
//   overall: number;
//   dimensions: {
//     political: number;
//     economic: number;
//     social: number;
//     technology: number;
//     environmental: number;
//     legal: number;
//   };
// }

export interface Threat {
  id: string;
  type: string;
  source: string;
  impact: 'Low' | 'Medium' | 'High' | 'Critical';
  timeline: string;
}

export interface StrategicAction {
  id: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  action: string;
  impact: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

export interface Recommendation {
  id: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  action: string;
  impact: string;
  effort: 'Low' | 'Medium' | 'High';
}

export interface Metric {
  id: string;
  name: string;
  value: number;
  change: number;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface SteelDimension {
  id: string;
  title: string;
  description: string;
  value: number;
  color: string;
}

export type Theme = 'light' | 'dark' | 'system';

// Export STEEL Assessment types
export * from './steelAssessment';