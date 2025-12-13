# ✅ Stripe Keys - Ready for Setup

## 🔑 Your Stripe Keys

### ✅ Publishable Key (Live)
```
pk_live_51SU6vmAjb9YEbEbooHztADla1WhTVxfxewp88WAQz3vF9uxYBCwBIt9ohzEPVpeSV9ddbOz6KkJqVPbKFuQVFU7P00uENiaN5r
```

### ✅ Secret Key (Live)
```
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
```

⚠️ **IMPORTANT:** Never commit secret keys to git. Only add to Vercel environment variables.

---

## 📋 Next Steps

### 1. Create Products in Stripe (5-10 minutes)

Go to: https://dashboard.stripe.com/products

Create these 3 products:

#### Product 1: STEEL Premium Assessment
- **Name:** `STEEL™ Premium Assessment`
- **Price:** `$29.00` (one-time)
- **Description:** Premium features for STEEL Assessment including detailed PDF reports, custom visualizations, executive summary templates, and multiple export formats.
- **After creating:** Copy the Price ID (starts with `price_`)

#### Product 2: vCISO Starter Kit
- **Name:** `vCISO Starter Kit`
- **Price:** `$299.00` (one-time)
- **Description:** Complete vCISO toolkit with 37 ready-to-use security policies, incident response playbooks, board materials, and compliance checklists.
- **After creating:** Copy the Price ID

#### Product 3: Executive Dashboard Template
- **Name:** `Executive Dashboard Template`
- **Price:** `$79.00` (one-time)
- **Description:** White-label HTML/CSS/JS executive dashboard template with risk radar, metrics visualization, and CSV data import capabilities.
- **After creating:** Copy the Price ID

**See detailed steps:** `STRIPE_PRODUCT_CREATION_STEPS.md`

---

### 2. Set Up Webhook (2 minutes)

1. Go to: https://dashboard.stripe.com/webhooks
2. Click **"Add endpoint"**
3. **Endpoint URL:** `https://ermits-advisory.com/api/webhook`
4. **Description:** `ERMITS Advisory Payment Webhook`
5. **Events to send:**
   - ✅ `checkout.session.completed`
   - ✅ `payment_intent.succeeded`
   - ✅ `payment_intent.payment_failed`
6. Click **"Add endpoint"**
7. **Copy the Signing secret** (starts with `whsec_`)

---

### 3. Add Environment Variables to Vercel (5 minutes)

Go to: **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

Add these variables (set for Production, Preview, and Development):

#### Variable 1: Publishable Key
```
Name: VITE_STRIPE_PUBLISHABLE_KEY
Value: pk_live_51SU6vmAjb9YEbEbooHztADla1WhTVxfxewp88WAQz3vF9uxYBCwBIt9ohzEPVpeSV9ddbOz6KkJqVPbKFuQVFU7P00uENiaN5r
```

#### Variable 2: Secret Key
```
Name: STRIPE_SECRET_KEY
Value: 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
```

#### Variable 3: Webhook Secret
```
Name: STRIPE_WEBHOOK_SECRET
Value: whsec_YOUR_WEBHOOK_SECRET_HERE
```
(Replace with the webhook secret from Step 2)

#### Variable 4: STEEL Premium Price ID
```
Name: STRIPE_PRICE_STEEL_PREMIUM
Value: price_YOUR_STEEL_PREMIUM_PRICE_ID
```
(Replace with Price ID from Product 1)

#### Variable 5: vCISO Kit Price ID
```
Name: STRIPE_PRICE_VCISO_KIT
Value: price_YOUR_VCISO_KIT_PRICE_ID
```
(Replace with Price ID from Product 2)

#### Variable 6: Dashboard Template Price ID
```
Name: STRIPE_PRICE_DASHBOARD_TEMPLATE
Value: price_YOUR_DASHBOARD_TEMPLATE_PRICE_ID
```
(Replace with Price ID from Product 3)

**Click "Save" after adding each variable.**

---

### 4. Redeploy Your Application

After adding all environment variables:
1. Go to Vercel Dashboard → Your Project → Deployments
2. Click "Redeploy" on the latest deployment
3. Or push a new commit to trigger automatic deployment

---

## ✅ Checklist

- [x] Publishable key provided
- [x] Secret key provided
- [ ] Create 3 products in Stripe dashboard
- [ ] Get 3 Price IDs from products
- [ ] Set up webhook endpoint
- [ ] Get webhook secret
- [ ] Add all 6 environment variables to Vercel
- [ ] Redeploy application
- [ ] Test checkout flow

---

## 🧪 Testing

### Test with a Small Purchase

1. Go to your live site
2. Navigate to `/steel/premium`
3. Click "Buy with Stripe"
4. Use a real credit card (or test card if in test mode)
5. Complete the purchase
6. Verify:
   - ✅ Redirects to Stripe Checkout
   - ✅ Payment processes successfully
   - ✅ Redirects to `/purchase-success`
   - ✅ Webhook receives the event (check Stripe dashboard)

### Test Cards (if using test mode)

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- Any future expiry date, any 3-digit CVC

---

## 📊 Monitor Your Sales

After going live, monitor:
- **Stripe Dashboard:** https://dashboard.stripe.com/payments
- **Webhook Events:** https://dashboard.stripe.com/webhooks
- **Product Performance:** https://dashboard.stripe.com/products

---

## 🚨 Security Reminders

1. ✅ **Never commit secret keys to git**
2. ✅ **Only add keys to Vercel environment variables**
3. ✅ **Keep webhook secret secure**
4. ✅ **Monitor for unauthorized access**

---

## 📞 Quick Links

- **Stripe Dashboard:** https://dashboard.stripe.com
- **Products:** https://dashboard.stripe.com/products
- **API Keys:** https://dashboard.stripe.com/apikeys
- **Webhooks:** https://dashboard.stripe.com/webhooks
- **Payments:** https://dashboard.stripe.com/payments

---

**Status:** ✅ Keys ready, waiting for products and webhook setup  
**Estimated Time:** 15-20 minutes to complete setup

