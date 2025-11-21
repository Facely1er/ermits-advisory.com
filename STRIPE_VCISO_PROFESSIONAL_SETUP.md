# ✅ vCISO Professional - Stripe Catalog Setup Guide

## Current Status

**Product:** vCISO Professional Kit  
**Price:** $499.00  
**Status:** ⚠️ **Not yet created in Stripe**  
**Price ID:** `price_VCISO_PROFESSIONAL_PLACEHOLDER` (placeholder)

---

## 🚀 Quick Setup: Create Product in Stripe

### Option 1: Use Automated Script (Recommended)

1. **Install Stripe SDK** (if not already installed):
   ```bash
   npm install stripe
   ```

2. **Run the creation script**:
   ```bash
   node scripts/create-stripe-products.js
   ```
   
   Or for ES modules:
   ```bash
   node scripts/create-stripe-products.mjs
   ```

3. **The script will:**
   - Create the vCISO Professional product in Stripe
   - Generate a Price ID
   - Display the Price ID for you to copy

4. **Copy the Price ID** (it will look like: `price_1ABC123xyz...`)

5. **Add to Vercel Environment Variables:**
   ```
   Name: STRIPE_PRICE_VCISO_PROFESSIONAL
   Value: price_YOUR_ACTUAL_PRICE_ID_HERE
   ```
   - Go to: Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add for: Production, Preview, and Development
   - Click "Save"

6. **Also add the frontend variable:**
   ```
   Name: VITE_STRIPE_PRICE_VCISO_PROFESSIONAL
   Value: price_YOUR_ACTUAL_PRICE_ID_HERE
   ```
   - Same location, same settings

7. **Redeploy:**
   - Go to Deployments
   - Click "Redeploy" on latest deployment

---

### Option 2: Create via Stripe Dashboard

1. **Go to Stripe Dashboard:**
   - Visit: https://dashboard.stripe.com/products
   - Click **"Add product"**

2. **Product Details:**
   ```
   Name: vCISO Professional Kit
   Description: Everything in Starter Kit PLUS complete vCISO delivery workflow guide, service delivery methodology, client engagement templates, and ERMITS platform integration workflows.
   ```

3. **Pricing:**
   - **Price:** $499.00
   - **Billing:** One time
   - **Currency:** USD

4. **Save Product:**
   - Click **"Save product"**
   - **Copy the Price ID** (starts with `price_`)

5. **Add to Vercel** (same as Option 1, steps 5-7)

---

## ✅ Verification Checklist

After creating the product:

- [ ] Product created in Stripe Dashboard
- [ ] Price ID copied (starts with `price_`)
- [ ] `STRIPE_PRICE_VCISO_PROFESSIONAL` added to Vercel
- [ ] `VITE_STRIPE_PRICE_VCISO_PROFESSIONAL` added to Vercel
- [ ] Both variables set for Production, Preview, and Development
- [ ] Application redeployed
- [ ] Test checkout on `/vciso-kit` page (Upgrade to Professional button)
- [ ] Test checkout on `/vciso-professional` page
- [ ] Verify Stripe button appears (not just Gumroad)
- [ ] Complete a test purchase

---

## 📋 Product Configuration

The product is already configured in the codebase:

**File:** `src/config/products.ts`
```typescript
'vciso-professional': {
  id: 'vciso-professional',
  name: 'vCISO Professional Kit',
  description: 'Everything in Starter Kit PLUS complete vCISO delivery workflow guide...',
  price: 499,
  currency: 'USD',
  stripePriceId: process.env.VITE_STRIPE_PRICE_VCISO_PROFESSIONAL || 'price_VCISO_PROFESSIONAL_PLACEHOLDER',
  gumroadUrl: 'https://gumroad.com/ermits/vciso-professional',
  category: 'toolkit',
  features: [
    'Everything in Starter Kit ($299 value)',
    'Complete vCISO Delivery Workflow Guide',
    'Step-by-step Service Delivery Methodology',
    'Client Engagement Templates',
    'Pricing & Scoping Guides',
    'ERMITS Platform Integration Workflows',
    'Monthly/Quarterly Delivery Templates'
  ]
}
```

**API Endpoint:** `api/create-checkout-session.ts`
- Already configured to handle `vciso-professional`
- Validates Price ID and blocks placeholders

**Frontend Service:** `src/services/stripe.ts`
- Already configured with `vciso-professional` product type
- Has placeholder detection

---

## 🔍 Current Behavior

**Before Product Creation:**
- Button tries Stripe first
- API detects placeholder Price ID
- Returns error: "Price ID not configured"
- Falls back to Gumroad automatically

**After Product Creation:**
- Button tries Stripe first
- API uses real Price ID
- Creates Stripe Checkout session
- User redirected to Stripe Checkout
- ✅ **Fully functional!**

---

## 📝 Environment Variables Needed

Once product is created, add these to Vercel:

### Backend (Server-side)
```
STRIPE_PRICE_VCISO_PROFESSIONAL=price_YOUR_ACTUAL_PRICE_ID
```

### Frontend (Client-side)
```
VITE_STRIPE_PRICE_VCISO_PROFESSIONAL=price_YOUR_ACTUAL_PRICE_ID
```

**Note:** Both should have the same Price ID value.

---

## 🧪 Testing After Setup

1. **Visit:** `https://ermits-advisory.com/vciso-kit`
2. **Click:** "Upgrade to Professional" button
3. **Expected:** Redirects to Stripe Checkout (not Gumroad)
4. **Test Card:** `4242 4242 4242 4242`
5. **Complete:** Test purchase to verify end-to-end flow

---

## 🎯 Summary

**What's Ready:**
- ✅ Code is configured
- ✅ Buttons are connected
- ✅ API endpoint ready
- ✅ Fallback to Gumroad works

**What's Needed:**
- ⚠️ Create product in Stripe Dashboard
- ⚠️ Add Price ID to Vercel environment variables
- ⚠️ Redeploy application

**Once complete:** vCISO Professional will be fully functional with Stripe checkout!

---

**Last Updated:** $(date)

