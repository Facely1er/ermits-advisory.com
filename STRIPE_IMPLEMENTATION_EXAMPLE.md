# 🔧 Stripe Implementation Example

This document shows exactly how to update your landing pages to use Stripe instead of Gumroad.

---

## Step 1: Install Dependencies

```bash
npm install stripe @stripe/stripe-js
npm install --save-dev @types/node
```

---

## Step 2: Update package.json

The dependencies should already be added, but verify:

```json
{
  "dependencies": {
    "@stripe/stripe-js": "^2.x.x",
    "stripe": "^14.x.x"
  }
}
```

---

## Step 3: Update SteelPremium.tsx

Replace the button onClick handler:

```typescript
// Before (Gumroad):
onClick={() => {
  window.open('https://gumroad.com/ermits/steel-premium', '_blank');
}}

// After (Stripe):
import { createCheckoutSession } from '../services/stripe';

onClick={async () => {
  try {
    await createCheckoutSession({
      productType: 'steel-premium',
      successUrl: `${window.location.origin}/purchase-success`,
      cancelUrl: window.location.href,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Failed to start checkout. Please try again.');
  }
}}
```

And update the payment text:

```typescript
// Before:
<p className="text-center text-sm text-gray-500 dark:text-gray-400">
  Secure payment via Gumroad • Lifetime access
</p>

// After:
<p className="text-center text-sm text-gray-500 dark:text-gray-400">
  Secure payment via Stripe • Lifetime access
</p>
```

---

## Step 4: Update VcisoKit.tsx

Similar update:

```typescript
import { createCheckoutSession } from '../services/stripe';

// In the button onClick:
onClick={async () => {
  try {
    await createCheckoutSession({
      productType: 'vciso-kit',
      successUrl: `${window.location.origin}/purchase-success`,
      cancelUrl: window.location.href,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Failed to start checkout. Please try again.');
  }
}}
```

---

## Step 5: Update DashboardTemplate.tsx

```typescript
import { createCheckoutSession } from '../services/stripe';

// In the button onClick:
onClick={async () => {
  try {
    await createCheckoutSession({
      productType: 'dashboard-template',
      successUrl: `${window.location.origin}/purchase-success`,
      cancelUrl: window.location.href,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Failed to start checkout. Please try again.');
  }
}}
```

---

## Step 6: Add Purchase Success Route

Update `src/App.tsx` to include the purchase success page:

```typescript
const PurchaseSuccess = React.lazy(() => 
  import('./pages/PurchaseSuccess').then(m => ({ default: m.PurchaseSuccess }))
);

// In Routes:
<Route path="/purchase-success" element={<PurchaseSuccess />} />
```

---

## Step 7: Set Up Environment Variables

### Local Development (.env.local)

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_PRICE_STEEL_PREMIUM=price_test_xxxxx
STRIPE_PRICE_VCISO_KIT=price_test_xxxxx
STRIPE_PRICE_DASHBOARD_TEMPLATE=price_test_xxxxx
```

### Vercel Production

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add all the variables from `.env.local`
4. Make sure to set them for Production, Preview, and Development

---

## Step 8: Create Products in Stripe

1. Go to: https://dashboard.stripe.com/products
2. Click "Add product"
3. Create each product:

   **STEEL Premium:**
   - Name: STEEL™ Premium Assessment
   - Description: Premium features for STEEL Assessment
   - Price: $29.00 USD
   - Billing: One time
   - Copy the Price ID (starts with `price_`)

   **vCISO Kit:**
   - Name: vCISO Starter Kit
   - Description: Complete vCISO toolkit with 37 templates
   - Price: $299.00 USD
   - Billing: One time
   - Copy the Price ID

   **Dashboard Template:**
   - Name: Executive Dashboard Template
   - Description: White-label executive dashboard template
   - Price: $79.00 USD
   - Billing: One time
   - Copy the Price ID

4. Update your environment variables with the Price IDs

---

## Step 9: Set Up Webhook

1. Go to: https://dashboard.stripe.com/webhooks
2. Click "Add endpoint"
3. Endpoint URL: `https://your-domain.com/api/webhook`
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the webhook signing secret (starts with `whsec_`)
6. Add to environment variables as `STRIPE_WEBHOOK_SECRET`

---

## Step 10: Update vercel.json

Make sure your `vercel.json` includes function configuration:

```json
{
  "functions": {
    "api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  }
}
```

---

## Step 11: Test the Integration

### Test Mode

1. Use test API keys (start with `pk_test_` and `sk_test_`)
2. Use test card: `4242 4242 4242 4242`
3. Any future expiry date
4. Any 3-digit CVC
5. Any ZIP code

### Test Flow

1. Click "Unlock Premium Features" button
2. Should redirect to Stripe Checkout
3. Enter test card details
4. Complete payment
5. Should redirect to `/purchase-success`
6. Check Stripe dashboard for payment
7. Check webhook logs for delivery trigger

---

## Step 12: Implement Product Delivery

You need to implement the email sending functions in `api/webhook.ts`:

### Option A: Use Resend (Recommended)

```bash
npm install resend
```

Update `api/webhook.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendAccessCodeEmail(email: string, sessionId: string) {
  const accessCode = generateAccessCode(sessionId);
  
  await resend.emails.send({
    from: 'noreply@ermits-advisory.com',
    to: email,
    subject: 'Your STEEL Premium Access Code',
    html: `
      <h1>Welcome to STEEL Premium!</h1>
      <p>Your access code is: <strong>${accessCode}</strong></p>
      <p>Use this code to unlock premium features.</p>
    `,
  });
}
```

### Option B: Use SendGrid

```bash
npm install @sendgrid/mail
```

### Option C: Use AWS SES

Requires AWS SDK setup.

---

## Step 13: Go Live

1. Switch to live API keys in Stripe dashboard
2. Update environment variables with live keys
3. Update webhook endpoint to production URL
4. Test with a real small purchase
5. Monitor transactions in Stripe dashboard

---

## Troubleshooting

### "Failed to create checkout session"
- Check API route is accessible: `/api/create-checkout-session`
- Verify `STRIPE_SECRET_KEY` is set correctly
- Check Price IDs are correct

### "Stripe failed to initialize"
- Verify `VITE_STRIPE_PUBLISHABLE_KEY` is set
- Check it starts with `pk_test_` or `pk_live_`

### Webhook not working
- Verify webhook URL is correct
- Check `STRIPE_WEBHOOK_SECRET` is set
- Test webhook in Stripe dashboard

### Files not being delivered
- Check webhook is receiving events
- Verify email service is configured
- Check webhook logs in Stripe dashboard

---

## Complete Example: Updated SteelPremium.tsx

```typescript
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Lock } from 'lucide-react';
import { createCheckoutSession } from '../services/stripe';

export const SteelPremium: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      await createCheckoutSession({
        productType: 'steel-premium',
        successUrl: `${window.location.origin}/purchase-success`,
        cancelUrl: window.location.href,
      });
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again.');
      setLoading(false);
    }
  };

  return (
    // ... rest of component
    <Button
      variant="primary"
      size="lg"
      onClick={handlePurchase}
      disabled={loading}
      className="w-full mb-4"
    >
      <Lock size={18} className="mr-2" />
      {loading ? 'Processing...' : 'Unlock Premium Features'}
    </Button>
    // ...
  );
};
```

---

**Status:** Ready to implement ✅  
**Next:** Follow steps 1-13 above

