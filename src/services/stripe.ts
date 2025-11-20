import { loadStripe, Stripe } from '@stripe/stripe-js';
import { getProduct, getStripePriceId } from '../config/products';

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

export type ProductType = 'steel-premium' | 'vciso-kit' | 'vciso-professional' | 'dashboard-template';

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

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productType: options.productType,
        successUrl: options.successUrl || `${window.location.origin}/purchase-success`,
        cancelUrl: options.cancelUrl || window.location.href,
      }),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to create checkout session';
      try {
        const error = await response.json();
        errorMessage = error.error || errorMessage;
      } catch (e) {
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
  } catch (error: any) {
    console.error('Checkout error:', error);
    // Re-throw with user-friendly message
    const userMessage = error.message || 'An unexpected error occurred. Please try again or contact support.';
    throw new Error(userMessage);
  }
};

/**
 * Get product price ID from product type
 * Uses actual Stripe Price IDs with fallback to environment variables
 */
export const getProductPriceId = (productType: ProductType): string => {
  // Actual Price IDs from Stripe (created products)
  const priceIds: Record<ProductType, string> = {
    'steel-premium': import.meta.env.VITE_STRIPE_PRICE_STEEL_PREMIUM || 'price_1SU74XAjb9YEbEboc4sLuKtV',
    'vciso-kit': import.meta.env.VITE_STRIPE_PRICE_VCISO_KIT || 'price_1SU74YAjb9YEbEbohKsi0HZO',
    'vciso-professional': import.meta.env.VITE_STRIPE_PRICE_VCISO_PROFESSIONAL || 'price_VCISO_PROFESSIONAL_PLACEHOLDER',
    'dashboard-template': import.meta.env.VITE_STRIPE_PRICE_DASHBOARD_TEMPLATE || 'price_1SU74YAjb9YEbEboGzeh3o78',
  };

  return priceIds[productType];
};

/**
 * Get product name from product type
 * Uses product catalog for consistency
 */
export const getProductName = (productType: ProductType): string => {
  const product = getProduct(productType);
  return product?.name || {
    'steel-premium': 'STEEL™ Premium Assessment',
    'vciso-kit': 'vCISO Starter Kit',
    'vciso-professional': 'vCISO Professional Kit',
    'dashboard-template': 'Executive Dashboard Template',
  }[productType];
};

/**
 * Get product price from product type
 * Uses product catalog for consistency
 */
export const getProductPrice = (productType: ProductType): number => {
  const product = getProduct(productType);
  return product?.price || {
    'steel-premium': 29,
    'vciso-kit': 299,
    'vciso-professional': 499,
    'dashboard-template': 79,
  }[productType];
};

