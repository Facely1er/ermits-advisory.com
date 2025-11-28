import { STEELAssessment, PESTELFactor } from '../../types/steelAssessment';

export const mockSTEELAssessment: STEELAssessment = {
  id: 'test-assessment-1',
  timestamp: new Date('2024-01-15'),
  organizationName: 'Test Organization',
  industry: 'Technology',
  companySize: 'Mid-Market (500-5000)',
  responses: {
    political: Array(7).fill(5),
    economic: Array(7).fill(6),
    social: Array(7).fill(7),
    technological: Array(7).fill(4),
    environmental: Array(7).fill(5),
    legal: Array(7).fill(6),
  },
  scores: {
    political: 50,
    economic: 60,
    social: 70,
    technological: 48,
    environmental: 45,
    legal: 66,
    composite: 56.5,
  },
  riskLevel: 'Moderate',
  version: '2.0',
};

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

