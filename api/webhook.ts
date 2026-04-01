import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import crypto from 'crypto';

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
 * Send access code email for STEEL Premium via Resend
 */
async function sendAccessCodeEmail(email: string, sessionId: string) {
  const accessCode = generateAccessCode();
  const fromEmail = process.env.FROM_EMAIL || 'noreply@ermits-advisory.com';
  const appUrl = process.env.APP_URL || 'https://ermits-advisory.com';

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div style="background: #1a2744; padding: 32px 40px;">
      <h1 style="color: #d4af37; margin: 0; font-size: 22px; letter-spacing: 1px;">ERMITS Advisory</h1>
      <p style="color: #ffffff; margin: 8px 0 0; font-size: 14px;">STEEL™ Premium Diagnostic</p>
    </div>
    <div style="padding: 40px;">
      <h2 style="color: #1a2744; margin: 0 0 16px;">Welcome to STEEL™ Premium!</h2>
      <p style="color: #444; line-height: 1.6;">Thank you for your purchase. Your access code is ready:</p>
      <div style="background: #f8f8f8; border: 2px dashed #1a2744; border-radius: 6px; padding: 20px; text-align: center; margin: 24px 0;">
        <span style="font-size: 24px; font-weight: bold; letter-spacing: 4px; color: #1a2744; font-family: monospace;">${accessCode}</span>
      </div>
      <p style="color: #444; line-height: 1.6;">Use this code to unlock the full STEEL™ Premium Diagnostic experience at:</p>
      <p style="text-align: center; margin: 24px 0;">
        <a href="${appUrl}/steel/premium" style="background: #1a2744; color: #ffffff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">Access STEEL™ Premium</a>
      </p>
      <p style="color: #666; font-size: 13px; line-height: 1.6; border-top: 1px solid #eee; padding-top: 20px; margin-top: 24px;">
        Keep this code safe — it grants access to your premium features.<br>
        Questions? Contact us at <a href="mailto:support@ermits-advisory.com" style="color: #1a2744;">support@ermits-advisory.com</a>
      </p>
    </div>
  </div>
</body>
</html>`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: email,
      subject: 'Your STEEL™ Premium Access Code — ERMITS Advisory',
      html,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend API error (${response.status}): ${errorBody}`);
  }

  console.log(`Access code email sent to ${email} (session: ${sessionId})`);
}

/**
 * Send download link for digital products via Resend
 */
async function sendDownloadLink(
  email: string,
  productType: 'vciso-kit' | 'dashboard-template',
  sessionId: string
) {
  const downloadLink = generateDownloadLink(productType, sessionId);
  const fromEmail = process.env.FROM_EMAIL || 'noreply@ermits-advisory.com';
  const productName = productType === 'vciso-kit' ? 'vCISO Starter Kit' : 'Executive Dashboard Template';

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div style="background: #1a2744; padding: 32px 40px;">
      <h1 style="color: #d4af37; margin: 0; font-size: 22px; letter-spacing: 1px;">ERMITS Advisory</h1>
      <p style="color: #ffffff; margin: 8px 0 0; font-size: 14px;">${productName}</p>
    </div>
    <div style="padding: 40px;">
      <h2 style="color: #1a2744; margin: 0 0 16px;">Thank you for your purchase!</h2>
      <p style="color: #444; line-height: 1.6;">Your <strong>${productName}</strong> is ready to download. Click the button below to get started:</p>
      <p style="text-align: center; margin: 32px 0;">
        <a href="${downloadLink}" style="background: #1a2744; color: #ffffff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px;">Download Now</a>
      </p>
      <p style="color: #666; font-size: 13px; line-height: 1.6;">
        ⚠️ <strong>This download link expires in 7 days.</strong> Please save your files promptly.
      </p>
      <p style="color: #666; font-size: 13px; line-height: 1.6; border-top: 1px solid #eee; padding-top: 20px; margin-top: 24px;">
        Questions or issues downloading? Contact us at <a href="mailto:support@ermits-advisory.com" style="color: #1a2744;">support@ermits-advisory.com</a>
      </p>
    </div>
  </div>
</body>
</html>`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: email,
      subject: `Your ${productName} Download — ERMITS Advisory`,
      html,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend API error (${response.status}): ${errorBody}`);
  }

  console.log(`Download link email sent to ${email} for ${productType} (session: ${sessionId})`);
}

/**
 * Generate a cryptographically secure access code for STEEL Premium
 */
function generateAccessCode(): string {
  const token = crypto.randomBytes(8).toString('hex').toUpperCase();
  return `STEEL-${token.substring(0, 5)}-${token.substring(5, 10)}-${token.substring(10, 16)}`;
}

/**
 * Generate a signed, expiring download link using HMAC-SHA256
 */
function generateDownloadLink(
  productType: 'vciso-kit' | 'dashboard-template',
  sessionId: string
): string {
  const appUrl = process.env.APP_URL || 'https://ermits-advisory.com';
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret) {
    throw new Error('DOWNLOAD_SECRET environment variable is not configured');
  }
  const expires = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60; // 7 days from now

  const payload = `${productType}:${sessionId}:${expires}`;
  const signature = crypto.createHmac('sha256', secret).update(payload).digest('base64url');

  return `${appUrl}/download/${productType}?token=${signature}&expires=${expires}&session=${encodeURIComponent(sessionId)}`;
}

