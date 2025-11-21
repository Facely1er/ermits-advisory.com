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
pk_live_YOUR_PUBLISHABLE_KEY_HERE
```
**⚠️ Get this from:** https://dashboard.stripe.com/apikeys (Publishable key)

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### 2️⃣ Secret Key (Backend)
**Variable Name:**
```
STRIPE_SECRET_KEY
```

**Value:**
```
sk_live_YOUR_SECRET_KEY_HERE
```
**⚠️ Get this from:** https://dashboard.stripe.com/apikeys (Secret key - Reveal test key)

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
price_1SVi4vAjb9YEbEbowE66I8GK
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
price_1SVi4vAjb9YEbEbowE66I8GK
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
price_1SVi4vAjb9YEbEboXotfQmIt
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
price_1SVi4vAjb9YEbEboXotfQmIt
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
price_1SVi4wAjb9YEbEbotCv0xg05
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
price_1SVi4wAjb9YEbEbotCv0xg05
```

---

### 9️⃣ vCISO Professional Price ID (Frontend) ⭐ NEW
**Variable Name:**
```
VITE_STRIPE_PRICE_VCISO_PROFESSIONAL
```

**Value:**
```
price_1SVi4wAjb9YEbEbol5NRVRWs
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### 🔟 vCISO Professional Price ID (Backend) ⭐ NEW
**Variable Name:**
```
STRIPE_PRICE_VCISO_PROFESSIONAL
```

**Value:**
```
price_1SVi4wAjb9YEbEbol5NRVRWs
```

**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

## ✅ vCISO Professional - NOW AVAILABLE!

The vCISO Professional product has been created in Stripe. Add these variables:

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

4. **Repeat for all 10 variables above** (including vCISO Professional)

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
- [ ] All Price ID variables added (8 total, including vCISO Professional)
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

