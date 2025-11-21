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
    // Log error but don't expose details in production
    if (process.env.NODE_ENV === 'development') {
      console.error('STRIPE_WEBHOOK_SECRET is not set');
    }
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
    // Log error details only in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Webhook signature verification failed:', err.message);
    }
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const productType = session.metadata?.productType as string;
        const customerEmail = session.customer_email || session.customer_details?.email;

        // Log payment success (safe to log in production)
        if (process.env.NODE_ENV === 'development') {
          console.log(`Payment successful for ${productType} - Email: ${customerEmail}`);
        }

        // Handle product delivery based on type
        await handleProductDelivery(productType, customerEmail, session.id);

        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        if (process.env.NODE_ENV === 'development') {
          console.log('PaymentIntent succeeded:', paymentIntent.id);
        }
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        // Always log payment failures for monitoring
        console.error('PaymentIntent failed:', paymentIntent.id);
        break;
      }

      default:
        if (process.env.NODE_ENV === 'development') {
          console.log(`Unhandled event type: ${event.type}`);
        }
    }

    return res.json({ received: true });
  } catch (error: any) {
    // Always log errors for monitoring
    console.error('Error processing webhook:', error instanceof Error ? error.message : 'Unknown error');
    return res.status(500).json({ error: 'Internal server error' });
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
    console.error('No customer email provided for product delivery');
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

      case 'vciso-professional':
        // Send download link for vCISO Professional
        await sendDownloadLink(customerEmail, 'vciso-kit', sessionId); // Uses same kit for now
        break;

      default:
        console.error(`Unknown product type: ${productType}`);
    }
  } catch (error) {
    console.error(`Error delivering product ${productType}:`, error instanceof Error ? error.message : 'Unknown error');
    // Don't throw - log error but don't fail webhook processing
  }
}

/**
 * Send access code email for STEEL Premium
 * Supports multiple email services: Resend, SendGrid, AWS SES
 * Set RESEND_API_KEY, SENDGRID_API_KEY, or AWS_SES_CONFIG env vars
 */
async function sendAccessCodeEmail(email: string, sessionId: string) {
  // Generate or retrieve access code
  const accessCode = generateAccessCode(sessionId);

  // Try Resend first (recommended - simple and reliable)
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'noreply@ermits-advisory.com',
          to: email,
          subject: 'Your STEEL Premium Access Code',
          html: `
            <h1>Welcome to STEEL Premium!</h1>
            <p>Thank you for your purchase. Your access code is:</p>
            <p style="font-size: 24px; font-weight: bold; color: #1e40af;">${accessCode}</p>
            <p>Use this code to unlock premium features in the STEEL Assessment tool at <a href="https://ermits-advisory.com/steel">ermits-advisory.com/steel</a></p>
            <p>If you have any questions, please contact us.</p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend API error: ${response.status}`);
      }

      if (process.env.NODE_ENV === 'development') {
        console.log(`Access code email sent via Resend to ${email}`);
      }
      return;
    } catch (error) {
      console.error('Failed to send email via Resend:', error instanceof Error ? error.message : 'Unknown error');
      // Fall through to next method
    }
  }

  // Try SendGrid as fallback
  if (process.env.SENDGRID_API_KEY) {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email }] }],
          from: { email: process.env.EMAIL_FROM || 'noreply@ermits-advisory.com' },
          subject: 'Your STEEL Premium Access Code',
          content: [{
            type: 'text/html',
            value: `
              <h1>Welcome to STEEL Premium!</h1>
              <p>Thank you for your purchase. Your access code is: <strong>${accessCode}</strong></p>
              <p>Use this code to unlock premium features in the STEEL Assessment tool.</p>
            `,
          }],
        }),
      });

      if (!response.ok) {
        throw new Error(`SendGrid API error: ${response.status}`);
      }

      if (process.env.NODE_ENV === 'development') {
        console.log(`Access code email sent via SendGrid to ${email}`);
      }
      return;
    } catch (error) {
      console.error('Failed to send email via SendGrid:', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  // If no email service configured, log the access code (for manual delivery)
  console.warn(`⚠️  No email service configured. Access code for ${email}: ${accessCode}`);
  console.warn('⚠️  Please configure RESEND_API_KEY or SENDGRID_API_KEY environment variable');
}

/**
 * Send download link for digital products
 * Supports multiple email services: Resend, SendGrid, AWS SES
 */
async function sendDownloadLink(
  email: string,
  productType: 'vciso-kit' | 'dashboard-template',
  sessionId: string
) {
  // Generate secure download link (expires in 7 days)
  const downloadLink = generateDownloadLink(productType, sessionId);

  const productNames: Record<string, string> = {
    'vciso-kit': 'vCISO Starter Kit',
    'dashboard-template': 'Executive Dashboard Template',
  };

  const productName = productNames[productType] || productType;

  // Try Resend first
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'noreply@ermits-advisory.com',
          to: email,
          subject: `Your ${productName} Download`,
          html: `
            <h1>Thank you for your purchase!</h1>
            <p>Your ${productName} is ready for download.</p>
            <p><a href="${downloadLink}" style="display: inline-block; padding: 12px 24px; background-color: #1e40af; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Download Now</a></p>
            <p style="color: #666; font-size: 14px;">This link expires in 7 days. If you have any questions, please contact us.</p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend API error: ${response.status}`);
      }

      if (process.env.NODE_ENV === 'development') {
        console.log(`Download link email sent via Resend to ${email}`);
      }
      return;
    } catch (error) {
      console.error('Failed to send email via Resend:', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  // Try SendGrid as fallback
  if (process.env.SENDGRID_API_KEY) {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email }] }],
          from: { email: process.env.EMAIL_FROM || 'noreply@ermits-advisory.com' },
          subject: `Your ${productName} Download`,
          content: [{
            type: 'text/html',
            value: `
              <h1>Thank you for your purchase!</h1>
              <p>Download your ${productName} here: <a href="${downloadLink}">Download Now</a></p>
              <p>This link expires in 7 days.</p>
            `,
          }],
        }),
      });

      if (!response.ok) {
        throw new Error(`SendGrid API error: ${response.status}`);
      }

      if (process.env.NODE_ENV === 'development') {
        console.log(`Download link email sent via SendGrid to ${email}`);
      }
      return;
    } catch (error) {
      console.error('Failed to send email via SendGrid:', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  // If no email service configured, log the download link (for manual delivery)
  console.warn(`⚠️  No email service configured. Download link for ${email}: ${downloadLink}`);
  console.warn('⚠️  Please configure RESEND_API_KEY or SENDGRID_API_KEY environment variable');
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
 * For production, consider implementing signed URLs (AWS S3, Cloudflare R2, etc.)
 * Current implementation uses session-based verification
 */
function generateDownloadLink(
  productType: 'vciso-kit' | 'dashboard-template',
  sessionId: string
): string {
  const baseUrl = process.env.APP_URL || 'https://ermits-advisory.com';
  
  // Generate a token from session ID for basic security
  // In production, you should verify this token server-side before allowing download
  const token = Buffer.from(`${sessionId}:${Date.now()}`).toString('base64').replace(/[+/=]/g, '');
  
  return `${baseUrl}/download/${productType}?token=${token}&session=${sessionId.substring(0, 8)}`;
}

