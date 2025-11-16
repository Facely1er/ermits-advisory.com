# ✅ Stripe Integration Setup Guide

## 🔑 Your Stripe Keys

**Publishable Key (Live):**
```
pk_live_51SU6vmAjb9YEbEbooHztADla1WhTVxfxewp88WAQz3vF9uxYBCwBIt9ohzEPVpeSV9ddbOz6KkJqVPbKFuQVFU7P00uENiaN5r
```

**Secret Key:** Get from https://dashboard.stripe.com/apikeys (starts with `sk_live_`)

---

## 📦 Step 1: Create Products in Stripe Dashboard

### Go to Stripe Products: https://dashboard.stripe.com/products

### Product 1: STEEL Premium Assessment

1. Click **"Add product"**
2. Fill in:
   - **Name:** `STEEL™ Premium Assessment`
   - **Description:** 
     ```
     Premium features for STEEL Assessment including detailed PDF reports, 
     custom visualizations, executive summary templates, and multiple export formats.
     ```
   - **Pricing:**
     - **Price:** `$29.00`
     - **Currency:** `USD`
     - **Billing:** `One time`
   - **Tax:** Enable if needed
3. Click **"Save product"**
4. **Copy the Price ID** (starts with `price_`) - you'll need this!

### Product 2: vCISO Starter Kit

1. Click **"Add product"**
2. Fill in:
   - **Name:** `vCISO Starter Kit`
   - **Description:**
     ```
     Complete vCISO toolkit with 37 ready-to-use security policies, incident 
     response playbooks, board materials, and compliance checklists.
     ```
   - **Pricing:**
     - **Price:** `$299.00`
     - **Currency:** `USD`
     - **Billing:** `One time`
   - **Tax:** Enable if needed
3. Click **"Save product"**
4. **Copy the Price ID** (starts with `price_`)

### Product 3: Executive Dashboard Template

1. Click **"Add product"**
2. Fill in:
   - **Name:** `Executive Dashboard Template`
   - **Description:**
     ```
     White-label HTML/CSS/JS executive dashboard template with risk radar, 
     metrics visualization, and CSV data import capabilities.
     ```
   - **Pricing:**
     - **Price:** `$79.00`
     - **Currency:** `USD`
     - **Billing:** `One time`
   - **Tax:** Enable if needed
3. Click **"Save product"**
4. **Copy the Price ID** (starts with `price_`)

---

## 🔐 Step 2: Get Your Secret Key

1. Go to: https://dashboard.stripe.com/apikeys
2. Find your **Secret key** (starts with `sk_live_`)
3. Click **"Reveal live key"** to see it
4. **Copy it** - you'll add this to Vercel

---

## 🔔 Step 3: Set Up Webhook

1. Go to: https://dashboard.stripe.com/webhooks
2. Click **"Add endpoint"**
3. Fill in:
   - **Endpoint URL:** `https://ermits-advisory.com/api/webhook`
   - **Description:** `ERMITS Advisory Payment Webhook`
   - **Events to send:** Select:
     - `checkout.session.completed`
     - `payment_intent.succeeded`
     - `payment_intent.payment_failed`
4. Click **"Add endpoint"**
5. **Copy the Signing secret** (starts with `whsec_`) - you'll need this!

---

## ⚙️ Step 4: Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

### Required Variables:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_51SU6vmAjb9YEbEbooHztADla1WhTVxfxewp88WAQz3vF9uxYBCwBIt9ohzEPVpeSV9ddbOz6KkJqVPbKFuQVFU7P00uENiaN5r
```

```env
STRIPE_SECRET_KEY=sk_live_YOUR_SECRET_KEY_HERE
```
(Replace with your actual secret key)

```env
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE
```
(Replace with your actual webhook secret)

```env
STRIPE_PRICE_STEEL_PREMIUM=price_YOUR_STEEL_PREMIUM_PRICE_ID
```
(Replace with Price ID from Product 1)

```env
STRIPE_PRICE_VCISO_KIT=price_YOUR_VCISO_KIT_PRICE_ID
```
(Replace with Price ID from Product 2)

```env
STRIPE_PRICE_DASHBOARD_TEMPLATE=price_YOUR_DASHBOARD_TEMPLATE_PRICE_ID
```
(Replace with Price ID from Product 3)

### Optional (for frontend):

```env
VITE_STRIPE_PRICE_STEEL_PREMIUM=price_YOUR_STEEL_PREMIUM_PRICE_ID
VITE_STRIPE_PRICE_VCISO_KIT=price_YOUR_VCISO_KIT_PRICE_ID
VITE_STRIPE_PRICE_DASHBOARD_TEMPLATE=price_YOUR_DASHBOARD_TEMPLATE_PRICE_ID
```

4. **Important:** Set these for **Production**, **Preview**, and **Development** environments
5. Click **"Save"**

---

## 🧪 Step 5: Test the Integration

### Test with Test Mode First (Recommended)

1. Switch to **Test mode** in Stripe dashboard (toggle in top right)
2. Get test API keys: https://dashboard.stripe.com/test/apikeys
3. Create test products with same names/prices
4. Update environment variables with test keys temporarily
5. Test checkout flow with test card: `4242 4242 4242 4242`
6. Verify webhook receives events

### Test in Production

1. Make sure all environment variables are set in Vercel
2. Redeploy your application
3. Test a small purchase ($29 STEEL Premium)
4. Verify:
   - Checkout redirects correctly
   - Payment processes
   - Success page shows
   - Webhook receives event
   - Product delivery works (if implemented)

---

## 📋 Quick Reference

### Product Price IDs Location
After creating each product, the Price ID is shown on the product page:
- Click on the product
- Look for "Price ID" or "API ID"
- Format: `price_xxxxxxxxxxxxx`

### Environment Variables Checklist

- [ ] `VITE_STRIPE_PUBLISHABLE_KEY` - ✅ Provided
- [ ] `STRIPE_SECRET_KEY` - Get from dashboard
- [ ] `STRIPE_WEBHOOK_SECRET` - Get after creating webhook
- [ ] `STRIPE_PRICE_STEEL_PREMIUM` - Get after creating product
- [ ] `STRIPE_PRICE_VCISO_KIT` - Get after creating product
- [ ] `STRIPE_PRICE_DASHBOARD_TEMPLATE` - Get after creating product

---

## 🚨 Important Notes

1. **Never commit secret keys to git** - only add to Vercel environment variables
2. **Test in test mode first** before going live
3. **Webhook URL must be HTTPS** - Vercel provides this automatically
4. **Price IDs are different** for test and live mode
5. **Redeploy after adding environment variables** for changes to take effect

---

## 🎯 Next Steps

1. ✅ Publishable key provided - already configured
2. ⏳ Create 3 products in Stripe dashboard
3. ⏳ Get secret key from dashboard
4. ⏳ Set up webhook endpoint
5. ⏳ Add all environment variables to Vercel
6. ⏳ Test checkout flow
7. ⏳ Deploy and go live!

---

## 📞 Need Help?

- **Stripe Dashboard:** https://dashboard.stripe.com
- **Stripe Docs:** https://stripe.com/docs
- **Webhook Testing:** https://dashboard.stripe.com/test/webhooks

---

**Status:** ✅ Publishable key configured  
**Next:** Create products and get Price IDs

