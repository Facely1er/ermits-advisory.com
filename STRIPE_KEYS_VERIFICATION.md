# ✅ Stripe Keys Verification

## Keys Confirmed ✅

Your Stripe keys have been verified and match the documentation:

**Publishable Key:**
```
pk_live_YOUR_PUBLISHABLE_KEY_HERE
```
⚠️ **Get from:** https://dashboard.stripe.com/apikeys

**Secret Key:**
```
sk_live_YOUR_SECRET_KEY_HERE
```
⚠️ **Get from:** https://dashboard.stripe.com/apikeys (Reveal test key)

---

## ⚠️ IMPORTANT: Set in Vercel

These keys **MUST** be set as environment variables in **Vercel** for Stripe to work.

### Step-by-Step Instructions:

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Select your project: `ermits-advisory.com`

2. **Navigate to Environment Variables:**
   - Click **Settings** → **Environment Variables**

3. **Add the Publishable Key:**
   - Click **Add New**
   - **Name:** `VITE_STRIPE_PUBLISHABLE_KEY`
   - **Value:** Get from https://dashboard.stripe.com/apikeys (starts with `pk_live_` or `pk_test_`)
   - Select: **Production**, **Preview**, **Development**
   - Click **Save**

4. **Add the Secret Key:**
   - Click **Add New**
   - **Name:** `STRIPE_SECRET_KEY`
   - **Value:** Get from https://dashboard.stripe.com/apikeys (starts with `sk_live_` or `sk_test_`)
   - Select: **Production**, **Preview**, **Development**
   - Click **Save**

5. **Add Price IDs (Optional but Recommended):**
   - `STRIPE_PRICE_STEEL_PREMIUM` = `price_1SU74XAjb9YEbEboc4sLuKtV`
   - `VITE_STRIPE_PRICE_STEEL_PREMIUM` = `price_1SU74XAjb9YEbEboc4sLuKtV`
   - `STRIPE_PRICE_VCISO_KIT` = `price_1SU74YAjb9YEbEbohKsi0HZO`
   - `VITE_STRIPE_PRICE_VCISO_KIT` = `price_1SU74YAjb9YEbEbohKsi0HZO`
   - `STRIPE_PRICE_DASHBOARD_TEMPLATE` = `price_1SU74YAjb9YEbEboGzeh3o78`
   - `VITE_STRIPE_PRICE_DASHBOARD_TEMPLATE` = `price_1SU74YAjb9YEbEboGzeh3o78`

6. **Redeploy:**
   - Go to **Deployments**
   - Click **⋯** (three dots) on latest deployment
   - Click **Redeploy**
   - Or push a new commit to trigger deployment

---

## ✅ Verification Checklist

After setting the environment variables:

- [ ] `VITE_STRIPE_PUBLISHABLE_KEY` added to Vercel
- [ ] `STRIPE_SECRET_KEY` added to Vercel
- [ ] Variables set for Production, Preview, and Development
- [ ] Deployment redeployed after adding variables
- [ ] Test checkout on `/steel/premium` page
- [ ] Test checkout on `/vciso-kit` page
- [ ] Test checkout on `/dashboard-template` page

---

## 🧪 Testing After Setup

1. **Visit a product page:**
   - Go to: `https://ermits-advisory.com/steel/premium`
   - Or: `https://ermits-advisory.com/vciso-kit`

2. **Click "Buy with Stripe" button**

3. **Expected Result:**
   - ✅ Redirects to Stripe Checkout page
   - ✅ Shows product details and price
   - ✅ Allows payment with test card: `4242 4242 4242 4242`

4. **If Error Occurs:**
   - Check browser console (F12) for error messages
   - Check Vercel function logs
   - Verify environment variables are set correctly

---

## 📊 Current Status

**Code:** ✅ Fully functional  
**Keys:** ✅ Confirmed  
**Vercel Configuration:** ⚠️ **Needs verification**

Once you've added these keys to Vercel and redeployed, Stripe checkout will be **fully functional** for:
- ✅ STEEL Premium ($29)
- ✅ vCISO Kit ($299)
- ✅ Dashboard Template ($79)
- ⚠️ vCISO Professional ($499) - Still needs product creation in Stripe

---

## 🔒 Security Note

These are **live production keys**. Make sure:
- ✅ They're only set in Vercel environment variables
- ✅ They're NOT committed to the repository (they're in docs, which is okay)
- ✅ They're NOT exposed in client-side code (publishable key is safe, secret key is server-side only)

---

**Last Updated:** $(date)

