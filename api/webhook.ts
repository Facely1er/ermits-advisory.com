import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

// Helper to get raw body for webhook signature verification
const getRawBody = (req: VercelRequest): Buffer => {
  if (req.body && typeof req.body === 'string') {
    return Buffer.from(req.body, 'utf-8');
  }
  return Buffer.from(JSON.stringify(req.body || {}), 'utf-8');
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];

  if (!sig) {
    return res.status(400).json({ error: 'No signature provided' });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set');
    return res.status(500).json({ error: 'Webhook secret not configured' });
  }

  let event: Stripe.Event;

  try {
    // Get raw body for signature verification
    const rawBody = getRawBody(req);
    
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig as string,
      webhookSecret
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const productType = session.metadata?.productType as string;
        const customerEmail = session.customer_email || session.customer_details?.email;

        console.log(`Payment successful for ${productType} - Email: ${customerEmail}`);

        // Handle product delivery based on type
        await handleProductDelivery(productType, customerEmail, session.id);

        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('PaymentIntent succeeded:', paymentIntent.id);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error('PaymentIntent failed:', paymentIntent.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return res.json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({ error: error.message });
  }
}

/**
 * Handle product delivery after successful payment
 */
async function handleProductDelivery(
  productType: string,
  customerEmail: string | null | undefined,
  sessionId: string
) {
  if (!customerEmail) {
    console.error('No customer email provided');
    return;
  }

  try {
    switch (productType) {
      case 'steel-premium':
        // Send access code email for STEEL Premium
        await sendAccessCodeEmail(customerEmail, sessionId);
        break;

      case 'vciso-kit':
        // Send download link for vCISO Kit
        await sendDownloadLink(customerEmail, 'vciso-kit', sessionId);
        break;

      case 'dashboard-template':
        // Send download link for Dashboard Template
        await sendDownloadLink(customerEmail, 'dashboard-template', sessionId);
        break;

      default:
        console.error(`Unknown product type: ${productType}`);
    }
  } catch (error) {
    console.error(`Error delivering product ${productType}:`, error);
    throw error;
  }
}

/**
 * Send access code email for STEEL Premium
 * TODO: Implement with your email service (SendGrid, Resend, AWS SES, etc.)
 */
async function sendAccessCodeEmail(email: string, sessionId: string) {
  // Generate or retrieve access code
  const accessCode = generateAccessCode(sessionId);

  // TODO: Send email with access code
  // Example with a service like Resend:
  /*
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@ermits-advisory.com',
      to: email,
      subject: 'Your STEEL Premium Access Code',
      html: `
        <h1>Welcome to STEEL Premium!</h1>
        <p>Your access code is: <strong>${accessCode}</strong></p>
        <p>Use this code to unlock premium features in the STEEL Assessment tool.</p>
      `,
    }),
  });
  */

  console.log(`Access code ${accessCode} generated for ${email}`);
}

/**
 * Send download link for digital products
 * TODO: Implement with your email service
 */
async function sendDownloadLink(
  email: string,
  productType: 'vciso-kit' | 'dashboard-template',
  sessionId: string
) {
  // Generate secure download link (expires in 7 days)
  const downloadLink = generateDownloadLink(productType, sessionId);

  // TODO: Send email with download link
  // Example with a service like Resend:
  /*
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'noreply@ermits-advisory.com',
      to: email,
      subject: `Your ${productType} Download`,
      html: `
        <h1>Thank you for your purchase!</h1>
        <p>Download your ${productType} here:</p>
        <a href="${downloadLink}">Download Now</a>
        <p>This link expires in 7 days.</p>
      `,
    }),
  });
  */

  console.log(`Download link generated for ${email} - Product: ${productType}`);
}

/**
 * Generate access code for STEEL Premium
 */
function generateAccessCode(sessionId: string): string {
  // Simple implementation - you may want to use a more secure method
  const timestamp = Date.now();
  const hash = sessionId.substring(0, 8).toUpperCase();
  return `STEEL-${hash}-${timestamp.toString(36).toUpperCase()}`;
}

/**
 * Generate secure download link
 * TODO: Implement with signed URLs (AWS S3, Cloudflare R2, etc.)
 */
function generateDownloadLink(
  productType: 'vciso-kit' | 'dashboard-template',
  sessionId: string
): string {
  // For now, return a simple link
  // In production, use signed URLs that expire
  const baseUrl = process.env.APP_URL || 'https://ermits-advisory.com';
  return `${baseUrl}/download/${productType}?session=${sessionId}`;
}

