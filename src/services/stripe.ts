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

export type ProductType = 'steel-premium' | 'vciso-kit' | 'dashboard-template';

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
    const response = await fetch('/api/create-checkout-session', {
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
      const error = await response.json();
      throw new Error(error.error || 'Failed to create checkout session');
    }

    const { sessionId } = await response.json();

    if (!sessionId) {
      throw new Error('No session ID returned');
    }

    const stripe = await getStripe();
    if (!stripe) {
      throw new Error('Stripe failed to initialize');
    }

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
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
    'dashboard-template': 79,
  }[productType];
};

