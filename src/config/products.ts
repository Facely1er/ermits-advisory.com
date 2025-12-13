/**
 * Product Catalog Configuration
 * 
 * This file contains all product information including Stripe Price IDs,
 * pricing, descriptions, and metadata.
 */

export type ProductId = 'steel-premium' | 'vciso-kit' | 'dashboard-template';

export interface Product {
  id: ProductId;
  name: string;
  description: string;
  price: number;
  currency: string;
  stripePriceId: string;
  gumroadUrl: string;
  features: string[];
  category: 'assessment' | 'toolkit' | 'template';
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
    name: 'STEEL™ Premium Diagnostic',
    description: 'Premium features for STEEL™ Diagnostic including detailed PDF reports, custom visualizations, executive summary templates, and multiple export formats. One-time purchase with lifetime access.',
    price: 29,
    currency: 'USD',
    stripePriceId: 'price_1SU74XAjb9YEbEboc4sLuKtV',
    gumroadUrl: 'https://gumroad.com/ermits/steel-premium',
    category: 'assessment',
    features: [
      'Detailed PDF Reports (20+ pages)',
      'Industry Benchmarking',
      'Custom Visualizations',
      'Executive Summary Templates',
      'Multiple Export Formats',
      'Unlimited Diagnostics'
    ]
  },
  'vciso-kit': {
    id: 'vciso-kit',
    name: 'vCISO Starter Kit',
    description: 'Complete vCISO toolkit with 37 ready-to-use security policies, incident response playbooks, board materials, and compliance checklists. Includes Word/PDF templates for easy customization.',
    price: 299,
    currency: 'USD',
    stripePriceId: 'price_1SU74YAjb9YEbEbohKsi0HZO',
    gumroadUrl: 'https://gumroad.com/ermits/vciso-kit',
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
  'dashboard-template': {
    id: 'dashboard-template',
    name: 'Executive Dashboard Template',
    description: 'White-label HTML/CSS/JS executive dashboard template with risk radar, metrics visualization, and CSV data import capabilities. Fully customizable and ready to deploy.',
    price: 79,
    currency: 'USD',
    stripePriceId: 'price_1SU74YAjb9YEbEboGzeh3o78',
    gumroadUrl: 'https://gumroad.com/ermits/dashboard-template',
    category: 'template',
    features: [
      'HTML/CSS/JS Template',
      'White-Label Ready',
      'Risk Radar Visualization',
      'CSV Data Import',
      'Professional Charts',
      'Fully Customizable'
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
  const envMap: Record<ProductId, string> = {
    'steel-premium': import.meta.env.VITE_STRIPE_PRICE_STEEL_PREMIUM || '',
    'vciso-kit': import.meta.env.VITE_STRIPE_PRICE_VCISO_KIT || '',
    'dashboard-template': import.meta.env.VITE_STRIPE_PRICE_DASHBOARD_TEMPLATE || '',
  };
  
  return envMap[productId] || '';
}

/**
 * Get Gumroad URL for a product
 */
export function getGumroadUrl(productId: ProductId): string {
  return PRODUCTS[productId]?.gumroadUrl || '';
}

