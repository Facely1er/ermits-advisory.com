# 🔐 Vercel Environment Variables - Copy & Paste

## Quick Copy for Vercel Dashboard

Go to: **Vercel** → **Your Project** → **Settings** → **Environment Variables**

Copy and paste these one by one:

---

### Variable 1: Publishable Key
```
VITE_STRIPE_PUBLISHABLE_KEY
pk_live_51SU6vmAjb9YEbEbooHztADla1WhTVxfxewp88WAQz3vF9uxYBCwBIt9ohzEPVpeSV9ddbOz6KkJqVPbKFuQVFU7P00uENiaN5r
```

### Variable 2: Secret Key
```
STRIPE_SECRET_KEY
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
```

### Variable 3: STEEL Premium Price ID
```
STRIPE_PRICE_STEEL_PREMIUM
price_1SU74XAjb9YEbEboc4sLuKtV
```

### Variable 4: vCISO Kit Price ID
```
STRIPE_PRICE_VCISO_KIT
price_1SU74YAjb9YEbEbohKsi0HZO
```

### Variable 5: Dashboard Template Price ID
```
STRIPE_PRICE_DASHBOARD_TEMPLATE
price_1SU74YAjb9YEbEboGzeh3o78
```

### Variable 6: Webhook Secret (After setting up webhook)
```
STRIPE_WEBHOOK_SECRET
whsec_YOUR_WEBHOOK_SECRET_HERE
```
*(Get this from: https://dashboard.stripe.com/webhooks)*

---

## 📝 Instructions

1. For each variable above:
   - Click "Add New" in Vercel
   - Paste the **Name** (first line)
   - Paste the **Value** (second line)
   - Select **Production**, **Preview**, and **Development**
   - Click "Save"

2. After adding all variables:
   - Go to **Deployments**
   - Click "Redeploy" on the latest deployment
   - Or push a new commit

3. Test the integration:
   - Visit your site
   - Try purchasing a product
   - Verify checkout works

---

**Note:** The webhook secret will be available after you create the webhook endpoint in Stripe.

