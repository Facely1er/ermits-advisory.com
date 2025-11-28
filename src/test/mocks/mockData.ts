import { SteelAssessmentData } from '../../types/steelAssessment';

export const mockSteelAssessment: SteelAssessmentData = {
  factorScores: {
    political: 50,
    economic: 60,
    social: 70,
    technological: 48,
    environmental: 45,
    legal: 66,
  },
  composite: 56.5,
  timestamp: '2024-01-15T00:00:00.000Z',
  insights: {
    executiveSummary: 'Test organization shows moderate risk across all factors.',
    keyInsights: [
      { factor: 'social', text: 'Strong social compliance' },
      { factor: 'technological', text: 'Technology infrastructure needs improvement' },
    ],
    strengths: [
      { factor: 'social', text: 'Excellent social policies' },
    ],
    opportunities: [
      { factor: 'technological', text: 'Digital transformation opportunities' },
    ],
    riskContext: 'Moderate overall risk profile',
  },
  recommendations: [
    {
      factor: 'technological',
      factorName: 'Technological',
      score: 48,
      priority: 'HIGH',
      timeline: '3-6 months',
      actions: ['Upgrade infrastructure', 'Implement security measures'],
      quickWins: ['Update software', 'Train staff'],
      longTerm: ['Digital transformation', 'AI integration'],
    },
  ],
};

// Legacy mock data structure for backward compatibility
export interface PESTELFactor {
  name: string;
  score: number;
  weight: number;
  questions: Array<{
    id: string;
    text: string;
    response: number;
  }>;
}

export const mockPESTELFactors: PESTELFactor[] = [
  {
    name: 'Political',
    score: 50,
    weight: 1.0,
    questions: Array(7).fill({
      id: 'pol-1',
      text: 'Sample political question',
      response: 5,
    }),
  },
  {
    name: 'Economic',
    score: 60,
    weight: 1.0,
    questions: Array(7).fill({
      id: 'eco-1',
      text: 'Sample economic question',
      response: 6,
    }),
  },
  {
    name: 'Social',
    score: 70,
    weight: 1.0,
    questions: Array(7).fill({
      id: 'soc-1',
      text: 'Sample social question',
      response: 7,
    }),
  },
  {
    name: 'Technological',
    score: 48,
    weight: 1.2,
    questions: Array(7).fill({
      id: 'tech-1',
      text: 'Sample technological question',
      response: 4,
    }),
  },
  {
    name: 'Environmental',
    score: 45,
    weight: 0.9,
    questions: Array(7).fill({
      id: 'env-1',
      text: 'Sample environmental question',
      response: 5,
    }),
  },
  {
    name: 'Legal',
    score: 66,
    weight: 1.1,
    questions: Array(7).fill({
      id: 'leg-1',
      text: 'Sample legal question',
      response: 6,
    }),
  },
];

export const mockProductData = {
  steelPremium: {
    id: 'steel-premium',
    name: 'STEEL™ Premium Assessment',
    price: 29,
    currency: 'USD',
    description: 'Premium features for STEEL Assessment',
  },
  vcisoKit: {
    id: 'vciso-kit',
    name: 'vCISO Starter Kit',
    price: 299,
    currency: 'USD',
    description: 'Complete toolkit with 37+ templates',
  },
  dashboardTemplate: {
    id: 'dashboard-template',
    name: 'Executive Dashboard Template',
    price: 79,
    currency: 'USD',
    description: 'White-label dashboard template',
  },
};

