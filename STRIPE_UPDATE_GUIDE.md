# 🔄 Stripe Configuration Update Guide

## Current Status

### ✅ Products Created in Stripe
1. **STEEL™ Premium Assessment** - $29.00
   - Price ID: `price_1SU74XAjb9YEbEboc4sLuKtV`
   - Status: ✅ Active

2. **vCISO Starter Kit** - $299.00
   - Price ID: `price_1SU74YAjb9YEbEbohKsi0HZO`
   - Status: ✅ Active

3. **Executive Dashboard Template** - $79.00
   - Price ID: `price_1SU74YAjb9YEbEboGzeh3o78`
   - Status: ✅ Active

### ⚠️ Missing Product
4. **vCISO Professional Kit** - $499.00
   - Price ID: `price_VCISO_PROFESSIONAL_PLACEHOLDER` (PLACEHOLDER)
   - Status: ❌ Not created in Stripe yet

---

## 📋 Step-by-Step: Create vCISO Professional in Stripe

### Option 1: Create via Stripe Dashboard (Recommended)

1. **Go to Stripe Dashboard**
   - Visit: https://dashboard.stripe.com/products
   - Click **"Add product"**

2. **Product Details**
   ```
   Name: vCISO Professional Kit
   Description: Everything in Starter Kit PLUS complete vCISO delivery workflow guide, service delivery methodology, client engagement templates, and ERMITS platform integration workflows.
   ```

3. **Pricing**
   - **Price:** $499.00
   - **Billing:** One time
   - **Currency:** USD

4. **Save Product**
   - Click **"Save product"**
   - **Copy the Price ID** (starts with `price_`)
   - It will look like: `price_1ABC123xyz...`

5. **Add to Vercel Environment Variables**
   ```
   Name: STRIPE_PRICE_VCISO_PROFESSIONAL
   Value: price_YOUR_ACTUAL_PRICE_ID_HERE
   ```
   - Go to: Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add for: Production, Preview, and Development
   - Click "Save"

6. **Redeploy Application**
   - Go to Deployments
   - Click "Redeploy" on latest deployment
   - Or push a new commit

---

### Option 2: Create via Stripe API (Using Script)

If you prefer to use the script, update `scripts/create-stripe-products.js`:

```javascript
{
  name: 'vCISO Professional Kit',
  description: 'Everything in Starter Kit PLUS complete vCISO delivery workflow guide, service delivery methodology, client engagement templates, and ERMITS platform integration workflows.',
  price: 49900, // $499.00 in cents
  currency: 'usd',
  priceIdEnvVar: 'STRIPE_PRICE_VCISO_PROFESSIONAL'
}
```

Then run:
```bash
node scripts/create-stripe-products.js
```

---

## ✅ Verification Checklist

After creating the product and adding the environment variable:

- [ ] Product created in Stripe Dashboard
- [ ] Price ID copied (starts with `price_`)
- [ ] Environment variable `STRIPE_PRICE_VCISO_PROFESSIONAL` added to Vercel
- [ ] Environment variable set for Production, Preview, and Development
- [ ] Application redeployed
- [ ] Test checkout on `/vciso-professional` page
- [ ] Verify Stripe button appears (not just Gumroad)
- [ ] Complete a test purchase

---

## 🔧 Current Configuration

### Environment Variables Needed in Vercel

```bash
# Required for all products
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_51SU6vmAjb9YEbEbooHztADla1WhTVxfxewp88WAQz3vF9uxYBCwBIt9ohzEPVpeSV9ddbOz6KkJqVPbKFuQVFU7P00uENiaN5r
STRIPE_SECRET_KEY=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

# Product Price IDs
STRIPE_PRICE_STEEL_PREMIUM=price_1SU74XAjb9YEbEboc4sLuKtV
STRIPE_PRICE_VCISO_KIT=price_1SU74YAjb9YEbEbohKsi0HZO
STRIPE_PRICE_VCISO_PROFESSIONAL=price_YOUR_ACTUAL_PRICE_ID_HERE  # ⚠️ UPDATE THIS
STRIPE_PRICE_DASHBOARD_TEMPLATE=price_1SU74YAjb9YEbEboGzeh3o78

# Webhook (if using)
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE
```

---

## 🎯 What Happens After Update

Once `STRIPE_PRICE_VCISO_PROFESSIONAL` is set with a real Price ID:

1. ✅ `hasValidStripePriceId('vciso-professional')` will return `true`
2. ✅ Stripe checkout button will appear on `/vciso-professional` page
3. ✅ Users can purchase via Stripe (in addition to Gumroad)
4. ✅ Checkout will redirect to Stripe payment page
5. ✅ Success redirect will work properly

**Current Behavior (with placeholder):**
- Only Gumroad button is shown
- Stripe button is hidden
- Clicking purchase redirects to Gumroad automatically

---

## 📝 Code Locations

The following files reference the vCISO Professional Price ID:

1. `src/config/products.ts` - Product catalog
2. `src/services/stripe.ts` - Stripe service utilities
3. `api/create-checkout-session.ts` - API endpoint
4. `src/pages/VcisoProfessional.tsx` - Product page
5. `src/pages/VcisoKit.tsx` - Links to professional version

All files are configured to use the environment variable `STRIPE_PRICE_VCISO_PROFESSIONAL` when available.

---

## 🚀 Quick Start

1. Create product in Stripe Dashboard → Get Price ID
2. Add `STRIPE_PRICE_VCISO_PROFESSIONAL` to Vercel
3. Redeploy
4. Test checkout

**That's it!** The code will automatically detect the real Price ID and enable Stripe checkout.

