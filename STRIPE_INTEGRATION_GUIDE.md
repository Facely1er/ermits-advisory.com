# 💳 Stripe Integration Guide

## Overview

Integrating Stripe directly gives you **lower fees** and **more control** over the checkout experience. This guide covers multiple integration options from simplest to most advanced.

---

## 💰 Fee Comparison

### Gumroad vs Stripe

| Service | Fee Structure | $29 Sale | $299 Sale | $79 Sale |
|---------|--------------|----------|-----------|----------|
| **Gumroad** | 10% + $0.50 | $3.40 fee → $25.60 | $30.40 fee → $268.60 | $8.40 fee → $70.60 |
| **Stripe** | 2.9% + $0.30 | $1.14 fee → $27.86 | $8.97 fee → $290.03 | $2.59 fee → $76.41 |
| **Savings** | - | **+$2.26** | **+$21.43** | **+$5.81** |

**Stripe saves you ~7% more per transaction!**

---

## 🎯 Integration Options

### Option 1: Stripe Payment Links (Simplest - No Code)
✅ **Best for:** Quick setup, no backend needed  
✅ **Setup time:** 5 minutes  
✅ **Code changes:** None

### Option 2: Stripe Checkout (Recommended)
✅ **Best for:** Custom checkout experience, better UX  
✅ **Setup time:** 30 minutes  
✅ **Code changes:** Minimal (frontend + serverless function)

### Option 3: Stripe Elements (Advanced)
✅ **Best for:** Fully embedded checkout  
✅ **Setup time:** 2+ hours  
✅ **Code changes:** Significant

---

## 🚀 Option 1: Stripe Payment Links (Simplest)

### Setup Steps

1. **Create Stripe Account**
   - Go to: https://dashboard.stripe.com/register
   - Complete account setup
   - Verify email

2. **Create Payment Links**
   - Go to: Products → Create Product
   - Create 3 products:
     - **STEEL Premium:** $29
     - **vCISO Kit:** $299
     - **Dashboard Template:** $79
   - For each product, click "Create payment link"
   - Copy the payment link URL

3. **Update Landing Pages**
   - Replace Gumroad URLs with Stripe Payment Links
   - No code changes needed - just update the URLs!

### Example Code Update

```typescript
// src/pages/SteelPremium.tsx
onClick={() => {
  window.open('https://buy.stripe.com/YOUR_PAYMENT_LINK_ID', '_blank');
}}
```

### Pros & Cons

**Pros:**
- ✅ Zero code changes
- ✅ No backend needed
- ✅ Works immediately
- ✅ Lower fees than Gumroad

**Cons:**
- ❌ Less customization
- ❌ Generic Stripe checkout page
- ❌ Manual file delivery (need to email access codes)

---

## 🎨 Option 2: Stripe Checkout (Recommended)

This gives you a custom checkout experience while keeping it simple with serverless functions.

### Architecture

```
User clicks button → Frontend calls API → Vercel Function creates checkout session → 
Redirects to Stripe Checkout → Payment → Webhook → Deliver product
```

### Setup Steps

#### Step 1: Install Stripe

```bash
npm install stripe @stripe/stripe-js
```

#### Step 2: Get Stripe Keys

1. Go to: https://dashboard.stripe.com/apikeys
2. Copy:
   - **Publishable Key** (starts with `pk_`)
   - **Secret Key** (starts with `sk_`)

#### Step 3: Set Environment Variables

Create `.env.local`:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_... (for production)
```

#### Step 4: Create Serverless Function

Create `api/create-checkout-session.ts`:

```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { priceId, productType, successUrl, cancelUrl } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl || `${req.headers.origin}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.origin}/steel/premium`,
      metadata: {
        productType: productType, // 'steel-premium', 'vciso-kit', 'dashboard-template'
      },
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
```

#### Step 5: Create Products & Prices in Stripe

1. Go to: Products → Create Product
2. Create products with prices:
   - **STEEL Premium:** $29 (one-time)
   - **vCISO Kit:** $299 (one-time)
   - **Dashboard Template:** $79 (one-time)
3. Copy the **Price IDs** (start with `price_`)

#### Step 6: Update Frontend Components

Create `src/services/stripe.ts`:

```typescript
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

export const createCheckoutSession = async (priceId: string, productType: string) => {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId,
      productType,
      successUrl: `${window.location.origin}/purchase-success`,
      cancelUrl: window.location.href,
    }),
  });

  const { sessionId } = await response.json();
  const stripe = await stripePromise;
  
  if (stripe) {
    await stripe.redirectToCheckout({ sessionId });
  }
};
```

Update `src/pages/SteelPremium.tsx`:

```typescript
import { createCheckoutSession } from '../services/stripe';

// In your component:
<Button
  variant="primary"
  size="lg"
  onClick={async () => {
    await createCheckoutSession('price_YOUR_STEEL_PREMIUM_PRICE_ID', 'steel-premium');
  }}
  className="w-full mb-4"
>
  <Lock size={18} className="mr-2" />
  Unlock Premium Features
</Button>
```

#### Step 7: Create Webhook Handler (For File Delivery)

Create `api/webhook.ts`:

```typescript
import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature']!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const productType = session.metadata?.productType;

    // Handle product delivery based on type
    switch (productType) {
      case 'steel-premium':
        // Send access code email
        await sendAccessCodeEmail(session.customer_email!);
        break;
      case 'vciso-kit':
        // Send download link
        await sendDownloadLink(session.customer_email!, 'vciso-kit');
        break;
      case 'dashboard-template':
        // Send download link
        await sendDownloadLink(session.customer_email!, 'dashboard-template');
        break;
    }
  }

  res.json({ received: true });
}
```

#### Step 8: Configure Vercel for Serverless Functions

Update `vercel.json`:

```json
{
  "functions": {
    "api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  },
  "env": {
    "STRIPE_SECRET_KEY": "@stripe-secret-key",
    "STRIPE_WEBHOOK_SECRET": "@stripe-webhook-secret"
  }
}
```

### Pros & Cons

**Pros:**
- ✅ Custom checkout experience
- ✅ Lower fees than Gumroad
- ✅ Better UX (stays on your domain)
- ✅ Full control over flow

**Cons:**
- ❌ Requires backend/serverless function
- ❌ Need to handle file delivery yourself
- ❌ More setup complexity

---

## 🔧 Option 3: Stripe Elements (Advanced)

For fully embedded checkout forms. See Stripe documentation: https://stripe.com/docs/payments/accept-a-payment

---

## 📦 Product Delivery Options

### For STEEL Premium (Access Code)

**Option A: Email Delivery**
- Use webhook to trigger email with access code
- Use service like SendGrid, Resend, or AWS SES

**Option B: Database + Login**
- Store purchase in database
- User logs in to access premium features
- More complex but better UX

### For vCISO Kit & Dashboard Template (File Downloads)

**Option A: Secure Download Links**
- Generate signed URLs (AWS S3, Cloudflare R2)
- Send download link via email
- Links expire after 7 days

**Option B: Direct Download After Payment**
- Store files in `/public/downloads/` (not recommended - files exposed)
- Use serverless function to verify payment and serve files

**Option C: Email Attachment**
- Attach ZIP files to confirmation email
- Simple but limited by email size (usually 25MB max)

---

## 🧪 Testing

### Test Cards

```javascript
// Success
4242 4242 4242 4242

// Decline
4000 0000 0000 0002

// Requires Authentication
4000 0025 0000 3155
```

### Test Mode

1. Use test API keys (start with `pk_test_` and `sk_test_`)
2. Test checkout flow end-to-end
3. Verify webhooks work
4. Test file delivery

---

## 🔒 Security Best Practices

1. **Never expose secret keys** in frontend code
2. **Use environment variables** for all sensitive data
3. **Verify webhook signatures** before processing
4. **Validate payment status** before delivering products
5. **Use HTTPS** for all payment flows
6. **Implement rate limiting** on API endpoints

---

## 📊 Comparison: Gumroad vs Stripe

| Feature | Gumroad | Stripe Payment Links | Stripe Checkout |
|---------|---------|---------------------|-----------------|
| **Setup Time** | 30 min | 5 min | 1-2 hours |
| **Fees** | 10% + $0.50 | 2.9% + $0.30 | 2.9% + $0.30 |
| **Customization** | Limited | Limited | Full |
| **File Delivery** | Automatic | Manual | Manual |
| **Backend Needed** | No | No | Yes |
| **Customer Management** | Built-in | Basic | Full control |
| **Analytics** | Basic | Basic | Full control |

---

## 🎯 Recommendation

### Start with: **Stripe Payment Links**
- Quickest to implement
- Lower fees than Gumroad
- No code changes needed
- Can upgrade later to Stripe Checkout

### Upgrade to: **Stripe Checkout** when you need:
- Custom checkout experience
- Better branding
- More control over flow
- Integration with your user system

---

## 📝 Implementation Checklist

### Stripe Payment Links (Option 1)
- [ ] Create Stripe account
- [ ] Create 3 products in Stripe
- [ ] Generate payment links
- [ ] Update landing page URLs
- [ ] Test purchase flow
- [ ] Set up email delivery for access codes

### Stripe Checkout (Option 2)
- [ ] Create Stripe account
- [ ] Install Stripe packages
- [ ] Set up environment variables
- [ ] Create products & prices in Stripe
- [ ] Create serverless function
- [ ] Update frontend components
- [ ] Set up webhook handler
- [ ] Configure webhook in Stripe dashboard
- [ ] Implement file delivery system
- [ ] Test end-to-end flow

---

## 🔗 Resources

- **Stripe Dashboard:** https://dashboard.stripe.com
- **Stripe Docs:** https://stripe.com/docs
- **Stripe Checkout:** https://stripe.com/docs/payments/checkout
- **Stripe Payment Links:** https://stripe.com/docs/payments/payment-links
- **Vercel Functions:** https://vercel.com/docs/functions
- **Stripe Testing:** https://stripe.com/docs/testing

---

## 💡 Next Steps

1. **Choose your integration option** (recommend starting with Payment Links)
2. **Set up Stripe account** and get API keys
3. **Create products** in Stripe dashboard
4. **Update landing pages** with Stripe URLs/functions
5. **Test thoroughly** before going live
6. **Set up webhook** for production
7. **Monitor transactions** in Stripe dashboard

---

**Status:** Ready to implement ✅  
**Recommended:** Start with Stripe Payment Links, upgrade to Checkout later

