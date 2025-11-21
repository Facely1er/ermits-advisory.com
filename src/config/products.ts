/**
 * Product Catalog Configuration
 * 
 * This file contains all product information including Stripe Price IDs,
 * pricing, descriptions, and metadata.
 */

export type ProductId = 
  | 'steel-premium' 
  | 'vciso-kit' 
  | 'vciso-professional' 
  | 'dashboard-template'
  | 'compliance-toolkit-basic'
  | 'compliance-toolkit-premium-annual'
  | 'compliance-toolkit-premium-lifetime'
  | 'incident-response-toolkit-basic'
  | 'incident-response-toolkit-premium-annual'
  | 'incident-response-toolkit-premium-lifetime'
  | 'vendor-risk-toolkit-basic'
  | 'vendor-risk-toolkit-premium-annual'
  | 'vendor-risk-toolkit-premium-lifetime'
  | 'toolkit-bundle-basic'
  | 'toolkit-bundle-premium-annual'
  | 'toolkit-bundle-premium-lifetime';

export interface Product {
  id: ProductId;
  name: string;
  description: string;
  price: number;
  currency: string;
  stripePriceId: string;
  features: string[];
  category: 'assessment' | 'toolkit' | 'template';
  // Optional: For products that need annual/lifetime pricing
  priceAnnual?: number;
  priceLifetime?: number;
  stripePriceIdAnnual?: string;
  stripePriceIdLifetime?: string;
}

/**
 * Product Catalog
 * 
 * Price IDs are from Stripe live products created on setup.
 * These should match the environment variables in Vercel.
 */
export const PRODUCTS: Record<ProductId, Product> = {
  'steel-premium': {
    id: 'steel-premium',
    name: 'STEEL™ Premium Assessment',
    description: 'Premium features for STEEL Assessment including detailed PDF reports, custom visualizations, executive summary templates, and multiple export formats. One-time purchase with lifetime access.',
    price: 29,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_STEEL_PREMIUM || 'price_1SVi4vAjb9YEbEbowE66I8GK',
    category: 'assessment',
    features: [
      'Detailed PDF Reports (20+ pages)',
      'Industry Benchmarking',
      'Custom Visualizations',
      'Executive Summary Templates',
      'Multiple Export Formats',
      'Unlimited Assessments'
    ]
  },
  'vciso-kit': {
    id: 'vciso-kit',
    name: 'vCISO Starter Kit',
    description: 'Complete vCISO toolkit with 37 ready-to-use security policies, incident response playbooks, board materials, and compliance checklists. Includes Word/PDF templates for easy customization.',
    price: 299,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_VCISO_KIT || 'price_1SVi4vAjb9YEbEboXotfQmIt',
    category: 'toolkit',
    features: [
      '37 Ready-to-Use Templates',
      '10 Security Policies',
      '5 Incident Response Playbooks',
      '4 Board Presentation Templates',
      '8+ Compliance Checklists',
      'Word/PDF Format'
    ]
  },
  'vciso-professional': {
    id: 'vciso-professional',
    name: 'vCISO Professional Kit',
    description: 'Everything in Starter Kit PLUS complete vCISO delivery workflow guide, service delivery methodology, client engagement templates, and ERMITS platform integration workflows.',
    price: 499,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_VCISO_PROFESSIONAL || 'price_1SVi4wAjb9YEbEbol5NRVRWs',
    category: 'toolkit',
    features: [
      'Everything in Starter Kit ($299 value)',
      'Complete vCISO Delivery Workflow Guide',
      'Step-by-step Service Delivery Methodology',
      'Client Engagement Templates',
      'Pricing & Scoping Guides',
      'ERMITS Platform Integration Workflows',
      'Monthly/Quarterly Delivery Templates'
    ]
  },
  'dashboard-template': {
    id: 'dashboard-template',
    name: 'Executive Dashboard Template',
    description: 'White-label HTML/CSS/JS executive dashboard template with risk radar, metrics visualization, and CSV data import capabilities. Fully customizable and ready to deploy.',
    price: 79,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_DASHBOARD_TEMPLATE || 'price_1SVi4wAjb9YEbEbotCv0xg05',
    category: 'template',
    features: [
      'HTML/CSS/JS Template',
      'White-Label Ready',
      'Risk Radar Visualization',
      'CSV Data Import',
      'Professional Charts',
      'Fully Customizable'
    ]
  },
  // Compliance Toolkit Products
  'compliance-toolkit-basic': {
    id: 'compliance-toolkit-basic',
    name: 'Compliance Toolkit Basic',
    description: 'Complete compliance toolkit with gap analysis templates, control mapping matrices, evidence checklists (200+ items), and audit preparation guides. Covers all 7 major frameworks (NIST, ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, CMMC).',
    price: 199,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_COMPLIANCE_BASIC || '',
    category: 'toolkit',
    features: [
      'Gap Analysis Templates',
      'Control Mapping Matrices (50+ controls)',
      'Evidence Collection Checklists (200+ items)',
      'Audit Preparation Guides',
      'All 7 Frameworks (NIST, ISO, SOC 2, PCI, HIPAA, GDPR, CMMC)',
      'Downloadable Markdown Templates'
    ]
  },
  'compliance-toolkit-premium-annual': {
    id: 'compliance-toolkit-premium-annual',
    name: 'Compliance Toolkit Premium (Annual)',
    description: 'Everything in Basic PLUS interactive gap analysis tool, auto-scoring, progress dashboard, unlimited assessments, PDF exports, multi-framework switching, remediation tracker, collaboration features, and CyberCorrect integration.',
    price: 499,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_COMPLIANCE_PREMIUM_ANNUAL || '',
    category: 'toolkit',
    features: [
      'Everything in Basic',
      'Interactive Gap Analysis Tool',
      'Auto-Scoring and Calculations',
      'Progress Dashboard with Charts',
      'Save Unlimited Assessments',
      'Export PDF Reports',
      'Multi-Framework Switching',
      'Remediation Project Tracker',
      'Multi-User Collaboration',
      'CyberCorrect Integration',
      'Priority Email Support'
    ]
  },
  'compliance-toolkit-premium-lifetime': {
    id: 'compliance-toolkit-premium-lifetime',
    name: 'Compliance Toolkit Premium (Lifetime)',
    description: 'Everything in Premium Annual with lifetime access - no recurring fees. All premium features forever.',
    price: 899,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_COMPLIANCE_PREMIUM_LIFETIME || '',
    category: 'toolkit',
    features: [
      'Everything in Premium Annual',
      'Lifetime Access (No Renewal)',
      'All Future Updates Included',
      'Priority Support Forever'
    ]
  },
  // Incident Response Toolkit Products
  'incident-response-toolkit-basic': {
    id: 'incident-response-toolkit-basic',
    name: 'Incident Response Toolkit Basic',
    description: 'Complete incident response toolkit with ransomware response playbook, communication templates (12+), incident tracking forms, 6 scenario-specific playbooks, and regulatory notification templates.',
    price: 149,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_INCIDENT_BASIC || '',
    category: 'toolkit',
    features: [
      'Ransomware Response Playbook',
      'Communication Templates (12+)',
      'Incident Tracking Forms',
      '6 Scenario-Specific Playbooks',
      'Regulatory Notification Templates',
      'Downloadable Markdown Templates'
    ]
  },
  'incident-response-toolkit-premium-annual': {
    id: 'incident-response-toolkit-premium-annual',
    name: 'Incident Response Toolkit Premium (Annual)',
    description: 'Everything in Basic PLUS interactive incident tracker, real-time timeline builder, auto-filled communication templates, evidence collection workflow, post-incident report generator, tabletop exercise simulator, and CyberSoluce integration.',
    price: 349,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_INCIDENT_PREMIUM_ANNUAL || '',
    category: 'toolkit',
    features: [
      'Everything in Basic',
      'Interactive Incident Tracker',
      'Real-Time Timeline Builder',
      'Auto-Filled Communication Templates',
      'Evidence Collection Workflow',
      'Post-Incident Report Generator',
      'Tabletop Exercise Simulator',
      'Incident History Database',
      'Team Collaboration Features',
      'CyberSoluce Integration',
      'Priority Email Support'
    ]
  },
  'incident-response-toolkit-premium-lifetime': {
    id: 'incident-response-toolkit-premium-lifetime',
    name: 'Incident Response Toolkit Premium (Lifetime)',
    description: 'Everything in Premium Annual with lifetime access - no recurring fees.',
    price: 599,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_INCIDENT_PREMIUM_LIFETIME || '',
    category: 'toolkit',
    features: [
      'Everything in Premium Annual',
      'Lifetime Access (No Renewal)',
      'All Future Updates Included'
    ]
  },
  // Vendor Risk Toolkit Products
  'vendor-risk-toolkit-basic': {
    id: 'vendor-risk-toolkit-basic',
    name: 'Vendor Risk Toolkit Basic',
    description: 'Complete vendor risk management toolkit with security questionnaire (150 questions), risk scoring framework, contract security clauses, vendor assessment templates, and 4-tier risk management approach.',
    price: 179,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_VENDOR_BASIC || '',
    category: 'toolkit',
    features: [
      'Security Questionnaire (150 Questions)',
      'Risk Scoring Framework',
      'Contract Security Clauses',
      'Vendor Assessment Templates',
      '4-Tier Risk Management Approach',
      'Downloadable Markdown Templates'
    ]
  },
  'vendor-risk-toolkit-premium-annual': {
    id: 'vendor-risk-toolkit-premium-annual',
    name: 'Vendor Risk Toolkit Premium (Annual)',
    description: 'Everything in Basic PLUS interactive risk calculator, vendor portal, analytics dashboard, automated scoring, vendor database, and VendorSoluce integration.',
    price: 449,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_VENDOR_PREMIUM_ANNUAL || '',
    category: 'toolkit',
    features: [
      'Everything in Basic',
      'Interactive Risk Calculator',
      'Vendor Portal Access',
      'Analytics Dashboard',
      'Automated Risk Scoring',
      'Vendor Database',
      'Team Collaboration',
      'VendorSoluce Integration',
      'Priority Email Support'
    ]
  },
  'vendor-risk-toolkit-premium-lifetime': {
    id: 'vendor-risk-toolkit-premium-lifetime',
    name: 'Vendor Risk Toolkit Premium (Lifetime)',
    description: 'Everything in Premium Annual with lifetime access - no recurring fees.',
    price: 799,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_VENDOR_PREMIUM_LIFETIME || '',
    category: 'toolkit',
    features: [
      'Everything in Premium Annual',
      'Lifetime Access (No Renewal)',
      'All Future Updates Included'
    ]
  },
  // Toolkit Bundle Products
  'toolkit-bundle-basic': {
    id: 'toolkit-bundle-basic',
    name: 'Toolkit Bundle Basic',
    description: 'Get all three basic toolkits (Compliance, Incident Response, Vendor Risk) in one bundle. Save $28 compared to buying individually.',
    price: 499,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_BUNDLE_BASIC || '',
    category: 'toolkit',
    features: [
      'Compliance Toolkit Basic ($199 value)',
      'Incident Response Toolkit Basic ($149 value)',
      'Vendor Risk Toolkit Basic ($179 value)',
      'Save $28 vs. buying individually',
      'All Basic Features Included'
    ]
  },
  'toolkit-bundle-premium-annual': {
    id: 'toolkit-bundle-premium-annual',
    name: 'Toolkit Bundle Premium (Annual)',
    description: 'Get all three premium toolkits (Annual) in one bundle. Save $298 compared to buying individually.',
    price: 999,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_BUNDLE_PREMIUM_ANNUAL || '',
    category: 'toolkit',
    features: [
      'Compliance Toolkit Premium Annual ($499 value)',
      'Incident Response Toolkit Premium Annual ($349 value)',
      'Vendor Risk Toolkit Premium Annual ($449 value)',
      'Save $298 vs. buying individually',
      'All Premium Features Included'
    ]
  },
  'toolkit-bundle-premium-lifetime': {
    id: 'toolkit-bundle-premium-lifetime',
    name: 'Toolkit Bundle Premium (Lifetime)',
    description: 'Get all three premium toolkits (Lifetime) in one bundle. Save $499 compared to buying individually. Lifetime access to all premium features.',
    price: 1799,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_BUNDLE_PREMIUM_LIFETIME || '',
    category: 'toolkit',
    features: [
      'Compliance Toolkit Premium Lifetime ($899 value)',
      'Incident Response Toolkit Premium Lifetime ($599 value)',
      'Vendor Risk Toolkit Premium Lifetime ($799 value)',
      'Save $499 vs. buying individually',
      'Lifetime Access to All Premium Features'
    ]
  }
};

/**
 * Get product by ID
 */
export function getProduct(id: ProductId): Product {
  return PRODUCTS[id];
}

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return Object.values(PRODUCTS);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: Product['category']): Product[] {
  return Object.values(PRODUCTS).filter(p => p.category === category);
}

/**
 * Get Stripe Price ID for a product
 * Falls back to environment variable if not in catalog
 */
export function getStripePriceId(productId: ProductId): string {
  const product = PRODUCTS[productId];
  if (product?.stripePriceId) {
    return product.stripePriceId;
  }
  
  // Fallback to environment variables
  const envMap: Partial<Record<ProductId, string>> = {
    'steel-premium': import.meta.env.VITE_STRIPE_PRICE_STEEL_PREMIUM || '',
    'vciso-kit': import.meta.env.VITE_STRIPE_PRICE_VCISO_KIT || '',
    'vciso-professional': import.meta.env.VITE_STRIPE_PRICE_VCISO_PROFESSIONAL || '',
    'dashboard-template': import.meta.env.VITE_STRIPE_PRICE_DASHBOARD_TEMPLATE || '',
    'compliance-toolkit-basic': import.meta.env.VITE_STRIPE_PRICE_COMPLIANCE_BASIC || '',
    'compliance-toolkit-premium-annual': import.meta.env.VITE_STRIPE_PRICE_COMPLIANCE_PREMIUM_ANNUAL || '',
    'compliance-toolkit-premium-lifetime': import.meta.env.VITE_STRIPE_PRICE_COMPLIANCE_PREMIUM_LIFETIME || '',
    'incident-response-toolkit-basic': import.meta.env.VITE_STRIPE_PRICE_INCIDENT_BASIC || '',
    'incident-response-toolkit-premium-annual': import.meta.env.VITE_STRIPE_PRICE_INCIDENT_PREMIUM_ANNUAL || '',
    'incident-response-toolkit-premium-lifetime': import.meta.env.VITE_STRIPE_PRICE_INCIDENT_PREMIUM_LIFETIME || '',
    'vendor-risk-toolkit-basic': import.meta.env.VITE_STRIPE_PRICE_VENDOR_BASIC || '',
    'vendor-risk-toolkit-premium-annual': import.meta.env.VITE_STRIPE_PRICE_VENDOR_PREMIUM_ANNUAL || '',
    'vendor-risk-toolkit-premium-lifetime': import.meta.env.VITE_STRIPE_PRICE_VENDOR_PREMIUM_LIFETIME || '',
    'toolkit-bundle-basic': import.meta.env.VITE_STRIPE_PRICE_BUNDLE_BASIC || '',
    'toolkit-bundle-premium-annual': import.meta.env.VITE_STRIPE_PRICE_BUNDLE_PREMIUM_ANNUAL || '',
    'toolkit-bundle-premium-lifetime': import.meta.env.VITE_STRIPE_PRICE_BUNDLE_PREMIUM_LIFETIME || '',
  };
  
  return envMap[productId] || '';
}

