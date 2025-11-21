import { loadStripe, Stripe } from '@stripe/stripe-js';
import { getProduct } from '../config/products';

// Initialize Stripe
let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      console.warn('Stripe publishable key not found');
      return Promise.resolve(null);
    }
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};

export type ProductType = 
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

export interface CheckoutOptions {
  productType: ProductType;
  successUrl?: string;
  cancelUrl?: string;
}

/**
 * Create a Stripe checkout session and redirect to checkout
 */
export const createCheckoutSession = async (options: CheckoutOptions): Promise<void> => {
  try {
    // Check if Stripe publishable key is configured
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      throw new Error('Stripe is not configured. Please contact support or use Gumroad checkout.');
    }

    // Check if we're in development and API might not be available
    const isDevelopment = import.meta.env.DEV;
    const apiUrl = isDevelopment 
      ? 'http://localhost:3000/api/create-checkout-session'
      : '/api/create-checkout-session';

    // Store product type in localStorage for success page
    if (typeof window !== 'undefined') {
      localStorage.setItem('pending_checkout', JSON.stringify({
        productType: options.productType,
        timestamp: Date.now()
      }));
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productType: options.productType,
        successUrl: (options.successUrl || `${window.location.origin}/purchase-success`) + `?product=${options.productType}`,
        cancelUrl: options.cancelUrl || window.location.href,
      }),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to create checkout session';
      try {
        const error = await response.json();
        errorMessage = error.error || errorMessage;
      } catch {
        // If response is not JSON, try to get text
        const text = await response.text();
        if (text) {
          errorMessage = text;
        } else {
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
      }
      
      // Provide helpful error message for development
      if (isDevelopment && response.status === 404) {
        errorMessage = 'API route not found. In development, you need to run Vercel CLI or deploy to test checkout. Please use Gumroad checkout for now.';
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data.sessionId) {
      throw new Error('No session ID returned from server');
    }

    const stripe = await getStripe();
    if (!stripe) {
      throw new Error('Stripe failed to initialize. Please check your Stripe publishable key.');
    }

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });

    if (error) {
      throw new Error(error.message || 'Failed to redirect to checkout');
    }
  } catch (error) {
    console.error('Checkout error:', error);
    // Re-throw with user-friendly message
    const userMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again or contact support.';
    throw new Error(userMessage);
  }
};

/**
 * Get product price ID from product type
 * Uses actual Stripe Price IDs with fallback to environment variables
 */
export const getProductPriceId = (productType: ProductType): string => {
  // Use product catalog for price IDs (with fallback to env vars)
  const product = getProduct(productType as any);
  if (product?.stripePriceId) {
    return product.stripePriceId;
  }
  
  // Fallback to environment variables
  const envMap: Partial<Record<ProductType, string>> = {
    'steel-premium': import.meta.env.VITE_STRIPE_PRICE_STEEL_PREMIUM || 'price_1SVi4vAjb9YEbEbowE66I8GK',
    'vciso-kit': import.meta.env.VITE_STRIPE_PRICE_VCISO_KIT || 'price_1SVi4vAjb9YEbEboXotfQmIt',
    'vciso-professional': import.meta.env.VITE_STRIPE_PRICE_VCISO_PROFESSIONAL || 'price_1SVi4wAjb9YEbEbol5NRVRWs',
    'dashboard-template': import.meta.env.VITE_STRIPE_PRICE_DASHBOARD_TEMPLATE || 'price_1SVi4wAjb9YEbEbotCv0xg05',
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

  return envMap[productType] || '';
};

/**
 * Check if a product has a valid Stripe Price ID (not a placeholder)
 */
export const hasValidStripePriceId = (productType: ProductType): boolean => {
  const priceId = getProductPriceId(productType);
  return Boolean(priceId && !priceId.includes('PLACEHOLDER') && priceId.startsWith('price_'));
};

/**
 * Get product name from product type
 * Uses product catalog for consistency
 */
export const getProductName = (productType: ProductType): string => {
  const product = getProduct(productType as any);
  return product?.name || productType;
};

/**
 * Get product price from product type
 * Uses product catalog for consistency
 */
export const getProductPrice = (productType: ProductType): number => {
  const product = getProduct(productType as any);
  return product?.price || 0;
};

