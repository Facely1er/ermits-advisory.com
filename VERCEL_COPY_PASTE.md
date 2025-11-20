# 📋 Vercel Environment Variables - Copy & Paste

## 🚀 Quick Setup Guide

Go to: **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

Then click **"Add New"** for each variable below.

---

## ✅ Required Variables (Copy & Paste)

### 1️⃣ Publishable Key (Frontend)
**Variable Name:**
```
VITE_STRIPE_PUBLISHABLE_KEY
```

**Value:**
```
pk_live_51SU6vmAjb9YEbEbooHztADla1WhTVxfxewp88WAQz3vF9uxYBCwBIt9ohzEPVpeSV9ddbOz6KkJqVPbKFuQVFU7P00uENiaN5r
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### 2️⃣ Secret Key (Backend)
**Variable Name:**
```
STRIPE_SECRET_KEY
```

**Value:**
```
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
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

## 📦 Optional Price IDs (Recommended)

### 3️⃣ STEEL Premium Price ID (Frontend)
**Variable Name:**
```
VITE_STRIPE_PRICE_STEEL_PREMIUM
```

**Value:**
```
price_1SU74XAjb9YEbEboc4sLuKtV
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### 4️⃣ STEEL Premium Price ID (Backend)
**Variable Name:**
```
STRIPE_PRICE_STEEL_PREMIUM
```

**Value:**
```
price_1SU74XAjb9YEbEboc4sLuKtV
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### 5️⃣ vCISO Kit Price ID (Frontend)
**Variable Name:**
```
VITE_STRIPE_PRICE_VCISO_KIT
```

**Value:**
```
price_1SU74YAjb9YEbEbohKsi0HZO
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### 6️⃣ vCISO Kit Price ID (Backend)
**Variable Name:**
```
STRIPE_PRICE_VCISO_KIT
```

**Value:**
```
price_1SU74YAjb9YEbEbohKsi0HZO
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### 7️⃣ Dashboard Template Price ID (Frontend)
**Variable Name:**
```
VITE_STRIPE_PRICE_DASHBOARD_TEMPLATE
```

**Value:**
```
price_1SU74YAjb9YEbEboGzeh3o78
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### 8️⃣ Dashboard Template Price ID (Backend)
**Variable Name:**
```
STRIPE_PRICE_DASHBOARD_TEMPLATE
```

**Value:**
```
price_1SU74YAjb9YEbEboGzeh3o78
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

## ⚠️ vCISO Professional (Skip for now - needs product creation)

This product needs to be created in Stripe first. Skip this until you create the product.

---

## 📝 Step-by-Step Instructions

1. **Open Vercel Dashboard:**
   - Go to: https://vercel.com/dashboard
   - Click on your project: `ermits-advisory.com`

2. **Navigate to Environment Variables:**
   - Click **Settings** (top menu)
   - Click **Environment Variables** (left sidebar)

3. **Add Each Variable:**
   - Click **"Add New"** button
   - Paste the **Variable Name** (first line)
   - Paste the **Value** (second line)
   - Check all three boxes: **Production**, **Preview**, **Development**
   - Click **Save**

4. **Repeat for all 8 variables above**

5. **Redeploy:**
   - Go to **Deployments** tab
   - Click **⋯** (three dots) on the latest deployment
   - Click **Redeploy**
   - Or just push a new commit

---

## ✅ Verification Checklist

After adding all variables, verify:

- [ ] `VITE_STRIPE_PUBLISHABLE_KEY` added
- [ ] `STRIPE_SECRET_KEY` added
- [ ] All Price ID variables added (6 total)
- [ ] All variables set for Production, Preview, and Development
- [ ] Deployment redeployed

---

## 🧪 Test After Setup

1. Visit: `https://ermits-advisory.com/steel/premium`
2. Click **"Buy with Stripe"**
3. Should redirect to Stripe Checkout ✅

---

## 🔒 Security Note

These are **live production keys**. They're safe to use in Vercel environment variables, but:
- ✅ Never commit them to git (they're already in docs, which is okay)
- ✅ Never expose the secret key in client-side code
- ✅ Only the publishable key is used in the frontend (safe)

---

**Ready to paste!** Copy each variable name and value above into Vercel.

