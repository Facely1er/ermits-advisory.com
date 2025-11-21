import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

// Initialize Stripe
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey && process.env.NODE_ENV === 'development') {
  console.warn('STRIPE_SECRET_KEY is not set. Stripe checkout will not work.');
}

const stripe = stripeSecretKey 
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2023-10-16',
    })
  : null;

// Product price IDs - From Stripe live products
// These should match environment variables, with fallback to actual Price IDs
// NOTE: vciso-professional uses fallback price ID - set STRIPE_PRICE_VCISO_PROFESSIONAL env var to override
const PRICE_IDS: Record<string, string> = {
  'steel-premium': process.env.STRIPE_PRICE_STEEL_PREMIUM || 'price_1SU74XAjb9YEbEboc4sLuKtV',
  'vciso-kit': process.env.STRIPE_PRICE_VCISO_KIT || 'price_1SU74YAjb9YEbEbohKsi0HZO',
  'vciso-professional': process.env.STRIPE_PRICE_VCISO_PROFESSIONAL || 'price_1SVi4wAjb9YEbEbol5NRVRWs',
  'dashboard-template': process.env.STRIPE_PRICE_DASHBOARD_TEMPLATE || 'price_1SU74YAjb9YEbEboGzeh3o78',
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if Stripe is configured
  if (!stripe) {
    return res.status(500).json({ 
      error: 'Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.' 
    });
  }

  try {
    const { productType, successUrl, cancelUrl } = req.body;

    // Validate product type
    if (!productType || !PRICE_IDS[productType]) {
      return res.status(400).json({ 
        error: 'Invalid product type. Must be: steel-premium, vciso-kit, vciso-professional, or dashboard-template' 
      });
    }

    const priceId = PRICE_IDS[productType];

    if (!priceId || priceId.trim() === '') {
      return res.status(400).json({ 
        error: `Price ID not configured for product: ${productType}. Please set STRIPE_PRICE_${productType.toUpperCase().replace(/-/g, '_')} environment variable in Vercel.` 
      });
    }

    // Get origin from request headers
    const origin = req.headers.origin || req.headers.referer || 'https://ermits-advisory.com';
    const baseUrl = typeof origin === 'string' ? origin : origin[0] || 'https://ermits-advisory.com';

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl || `${baseUrl}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || (productType === 'vciso-kit' 
        ? `${baseUrl}/vciso-kit` 
        : productType === 'vciso-professional'
        ? `${baseUrl}/vciso-professional`
        : productType === 'dashboard-template'
        ? `${baseUrl}/dashboard-template`
        : `${baseUrl}/steel/premium`),
      metadata: {
        productType: productType,
      },
      // Optional: Collect customer email
      customer_email: req.body.email || undefined,
      // Optional: Allow promotion codes
      allow_promotion_codes: true,
    });

    return res.status(200).json({ 
      sessionId: session.id,
      url: session.url 
    });
  } catch (error: unknown) {
    // Always log errors for monitoring, but don't expose details to client
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Stripe checkout error:', errorMessage);
    
    // Return generic error message to client (don't expose internal details)
    return res.status(500).json({ 
      error: 'Failed to create checkout session. Please try again or contact support.'
    });
  }
}

