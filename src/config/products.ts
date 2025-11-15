/**
 * Product Configuration
 * Centralized configuration for all digital products and their sales channels
 *
 * UPDATE THESE URLS after creating products on Gumroad
 */

export const PRODUCTS = {
  // STEEL Premium Assessment - $29
  STEEL_PREMIUM: {
    name: 'STEEL™ Premium Assessment',
    price: 29,
    description: 'Professional assessment tool with premium reporting and exports',
    url: process.env.REACT_APP_GUMROAD_STEEL || 'https://gumroad.com/ermits/steel-premium',
    // After creating on Gumroad, update to: https://gumroad.com/l/{your-unique-code}
  },

  // vCISO Starter Kit - $299
  VCISO_KIT: {
    name: 'vCISO Starter Kit',
    price: 299,
    description: '37 customizable security program templates and frameworks',
    url: process.env.REACT_APP_GUMROAD_VCISO || 'https://gumroad.com/ermits/vciso-kit',
    // After creating on Gumroad, update to: https://gumroad.com/l/{your-unique-code}
  },

  // Executive Dashboard Template - $79
  DASHBOARD_TEMPLATE: {
    name: 'Executive Dashboard Template',
    price: 79,
    description: 'White-label HTML dashboard for security metrics and KPIs',
    url: process.env.REACT_APP_GUMROAD_DASHBOARD || 'https://gumroad.com/ermits/dashboard-template',
    // After creating on Gumroad, update to: https://gumroad.com/l/{your-unique-code}
  },
};

/**
 * Open product purchase URL
 */
export const openProductPage = (productKey: keyof typeof PRODUCTS) => {
  window.open(PRODUCTS[productKey].url, '_blank');
};

/**
 * For development/testing
 */
export const isProduction = process.env.NODE_ENV === 'production';

export default PRODUCTS;
