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
    description: 'Complete vCISO starter toolkit with 27 ready-to-use templates: 10 security policies, 5 basic incident response playbooks, 4 board materials, and 8 compliance checklists. Perfect for starting vCISO services. For detailed operational playbooks, see specialized toolkits.',
    price: 299,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_VCISO_KIT || 'price_1SVi4vAjb9YEbEboXotfQmIt',
    category: 'toolkit',
    features: [
      '27 Ready-to-Use Templates',
      '10 Security Policies',
      '5 Incident Response Playbooks',
      '4 Board Presentation Templates',
      '8 Compliance Checklists',
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
    description: 'Comprehensive compliance program management with gap analysis templates, control mapping matrices, and evidence collection systems. More detailed than vCISO Kit basic checklists. Supports NIST, ISO 27001, SOC 2, HIPAA, GDPR, CMMC, and PCI-DSS.',
    price: 199,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_COMPLIANCE_BASIC || '',
    category: 'toolkit',
    features: [
      '4 Comprehensive Template Files',
      'Gap Analysis Template',
      'Control Mapping Matrix',
      'Evidence Collection Checklist',
      'Getting Started Guide',
      'All 7 Frameworks (NIST, ISO, SOC 2, PCI, HIPAA, GDPR, CMMC)',
      'Downloadable Markdown Format',
      'One-time Purchase, Yours Forever'
    ]
  },
  'compliance-toolkit-premium-annual': {
    id: 'compliance-toolkit-premium-annual',
    name: 'Compliance Toolkit Premium (Annual)',
    description: 'Interactive web-based compliance gap analysis tool with auto-scoring, progress dashboard, assessment saving, report export, and all basic templates included. Annual subscription.',
    price: 499,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_COMPLIANCE_PREMIUM_ANNUAL || '',
    category: 'toolkit',
    features: [
      'Everything in Basic Templates (included)',
      'Interactive Gap Analysis Web Tool',
      'Auto-Scoring and Calculations',
      'Progress Dashboard with Charts',
      'Save Assessments (Local Storage)',
      'Export Assessment Reports (Text Format)',
      'NIST CSF Framework (Additional frameworks coming soon)',
      'Priority Email Support'
    ]
  },
  'compliance-toolkit-premium-lifetime': {
    id: 'compliance-toolkit-premium-lifetime',
    name: 'Compliance Toolkit Premium (Lifetime)',
    description: 'Everything in Premium Annual with lifetime access - no recurring fees. All premium interactive features and all future updates included forever.',
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
    description: 'Comprehensive operational incident response playbooks, communication templates, and tracking forms. Detailed tactical playbooks for security operations teams. More detailed than vCISO Kit playbooks.',
    price: 149,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_INCIDENT_BASIC || '',
    category: 'toolkit',
    features: [
      '4 Comprehensive Template Files',
      'Detailed Ransomware Response Playbook',
      'Communication Templates (12+)',
      'Incident Tracking Form',
      'Getting Started Guide',
      '6+ Scenario-Specific Playbooks',
      'Downloadable Markdown Format',
      'One-time Purchase, Yours Forever'
    ]
  },
  'incident-response-toolkit-premium-annual': {
    id: 'incident-response-toolkit-premium-annual',
    name: 'Incident Response Toolkit Premium (Annual)',
    description: 'Interactive web-based incident response tool (coming soon) with assessment saving, report export, and all basic templates included. Annual subscription.',
    price: 349,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_INCIDENT_PREMIUM_ANNUAL || '',
    category: 'toolkit',
    features: [
      'Everything in Basic Templates (included)',
      'Interactive Incident Response Tool (Coming Soon)',
      'Save Assessments (Local Storage)',
      'Export Assessment Reports (Text Format)',
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
    description: 'Comprehensive vendor risk management system with 150-question security questionnaire, risk scoring framework, and contract clauses. More comprehensive than vCISO Kit basic vendor assessment.',
    price: 179,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_VENDOR_BASIC || '',
    category: 'toolkit',
    features: [
      '3 Comprehensive Template Files',
      'Vendor Security Questionnaire (150 questions)',
      'Vendor Risk Scoring Framework',
      'Getting Started Guide',
      'Contract Security Clauses',
      '4-Tier Risk Management Approach',
      'Downloadable Markdown Format',
      'One-time Purchase, Yours Forever'
    ]
  },
  'vendor-risk-toolkit-premium-annual': {
    id: 'vendor-risk-toolkit-premium-annual',
    name: 'Vendor Risk Toolkit Premium (Annual)',
    description: 'Interactive web-based vendor risk scoring tool with automated calculations, analytics dashboard, assessment saving, report export, and all basic templates included. Annual subscription.',
    price: 449,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_VENDOR_PREMIUM_ANNUAL || '',
    category: 'toolkit',
    features: [
      'Everything in Basic Templates (included)',
      'Interactive Risk Scoring Calculator',
      'Automatic Tier Assignment',
      'Analytics Dashboard with Visualizations',
      'Save Assessments (Local Storage)',
      'Export Assessment Reports (Text Format)',
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
    description: 'Get all three basic template toolkits (Compliance, Incident Response, Vendor Risk) in one bundle. Save $28 compared to buying individually. Includes all downloadable templates from all three toolkits.',
    price: 499,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_BUNDLE_BASIC || '',
    category: 'toolkit',
    features: [
      'Compliance Toolkit Basic ($199 value) - 4 template files',
      'Incident Response Toolkit Basic ($149 value) - 4 template files',
      'Vendor Risk Toolkit Basic ($179 value) - 3 template files',
      'Save $28 (6% discount) vs. buying individually',
      'All 11 Template Files Included',
      'One-time Purchase'
    ]
  },
  'toolkit-bundle-premium-annual': {
    id: 'toolkit-bundle-premium-annual',
    name: 'Toolkit Bundle Premium (Annual)',
    description: 'Get all three premium interactive tools (Annual) in one bundle. Includes all interactive web tools plus all basic templates. Save $298 compared to buying individually.',
    price: 999,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_BUNDLE_PREMIUM_ANNUAL || '',
    category: 'toolkit',
    features: [
      'Compliance Toolkit Premium Annual ($499 value)',
      'Incident Response Toolkit Premium Annual ($349 value)',
      'Vendor Risk Toolkit Premium Annual ($449 value)',
      'All Basic Templates Included (from all 3 toolkits)',
      'Save $298 (23% discount) vs. buying individually',
      'All Premium Interactive Features',
      'Annual Subscription'
    ]
  },
  'toolkit-bundle-premium-lifetime': {
    id: 'toolkit-bundle-premium-lifetime',
    name: 'Toolkit Bundle Premium (Lifetime)',
    description: 'Get all three premium interactive tools (Lifetime) in one bundle. Includes all interactive web tools plus all basic templates. Lifetime access - no recurring fees. Save $499 compared to buying individually.',
    price: 1799,
    currency: 'USD',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_BUNDLE_PREMIUM_LIFETIME || '',
    category: 'toolkit',
    features: [
      'Compliance Toolkit Premium Lifetime ($899 value)',
      'Incident Response Toolkit Premium Lifetime ($599 value)',
      'Vendor Risk Toolkit Premium Lifetime ($799 value)',
      'All Basic Templates Included (from all 3 toolkits)',
      'Save $499 (22% discount) vs. buying individually',
      'Lifetime Access to All Premium Features',
      'All Future Updates Included Forever'
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

