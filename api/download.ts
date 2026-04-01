import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

const PRODUCT_FILE_URLS: Record<string, string | undefined> = {
  'vciso-kit': process.env.VCISO_KIT_URL,
  'dashboard-template': process.env.DASHBOARD_TEMPLATE_URL,
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { productType } = req.query;
  const token = req.query.token as string | undefined;
  const expiresParam = req.query.expires as string | undefined;

  if (
    typeof productType !== 'string' ||
    typeof token !== 'string' ||
    typeof expiresParam !== 'string'
  ) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  const expires = parseInt(expiresParam, 10);
  if (isNaN(expires)) {
    return res.status(400).json({ error: 'Invalid expires parameter' });
  }

  // Check expiry
  const nowSeconds = Math.floor(Date.now() / 1000);
  if (nowSeconds > expires) {
    return res.status(401).json({ error: 'Download link has expired' });
  }

  // Reconstruct the signed payload and verify the HMAC
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'Download secret not configured' });
  }
  const sessionId = req.query.session;
  const sid = typeof sessionId === 'string' ? sessionId : '';
  const payload = `${productType}:${sid}:${expires}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('base64url');

  // Use timing-safe comparison to prevent timing attacks
  const tokenBuffer = Buffer.from(token);
  const expectedBuffer = Buffer.from(expectedSignature);

  let valid = false;
  if (tokenBuffer.length === expectedBuffer.length) {
    valid = crypto.timingSafeEqual(tokenBuffer, expectedBuffer);
  }

  if (!valid) {
    return res.status(401).json({ error: 'Invalid or expired download token' });
  }

  // Get the file URL for this product
  const fileUrl = PRODUCT_FILE_URLS[productType];
  if (!fileUrl) {
    return res.status(500).json({ error: 'Product file URL not configured' });
  }

  // Redirect to the actual hosted file
  return res.redirect(302, fileUrl);
}
