# ⚡ Stripe Quick Start - Essential Links

## 🎯 Fastest Setup (5 minutes)

### Step 1: Create Account
👉 **Sign Up:** https://dashboard.stripe.com/register

### Step 2: Create Products & Get Payment Links
👉 **Create Product:** https://dashboard.stripe.com/products/create

**Create these 3 products:**
1. **STEEL Premium** - $29
2. **vCISO Kit** - $299  
3. **Dashboard Template** - $79

For each product:
- Click "Create payment link"
- Copy the `https://buy.stripe.com/...` URL
- Use these URLs in your landing pages!

### Step 3: Test
👉 **Test Mode:** https://dashboard.stripe.com/test
- Use test card: `4242 4242 4242 4242`
- Any future expiry, any CVC

**Done!** ✅ Just update your landing page URLs.

---

## 🔧 Full Checkout Setup (30 minutes)

### Step 1: Get API Keys
👉 **API Keys:** https://dashboard.stripe.com/apikeys
- Copy `pk_test_...` (Publishable Key)
- Copy `sk_test_...` (Secret Key)

### Step 2: Create Products & Get Price IDs
👉 **Create Product:** https://dashboard.stripe.com/products/create

For each product:
- Create product with price
- Click on product
- Copy Price ID (starts with `price_`)
- Add to `.env` file

### Step 3: Set Up Webhook
👉 **Add Webhook:** https://dashboard.stripe.com/webhooks/add
- URL: `https://your-domain.com/api/webhook`
- Events: `checkout.session.completed`
- Copy Webhook Secret (`whsec_...`)

### Step 4: Test
👉 **Test Payments:** https://dashboard.stripe.com/payments/checkout
- Use test card: `4242 4242 4242 4242`

---

## 📚 Essential Links

### Dashboard
- **Main Dashboard:** https://dashboard.stripe.com
- **Test Mode:** https://dashboard.stripe.com/test
- **Live Mode:** Toggle in top right

### Products & Payments
- **Products:** https://dashboard.stripe.com/products
- **Payment Links:** https://dashboard.stripe.com/payment-links
- **Payments:** https://dashboard.stripe.com/payments

### Configuration
- **API Keys:** https://dashboard.stripe.com/apikeys
- **Webhooks:** https://dashboard.stripe.com/webhooks
- **Settings:** https://dashboard.stripe.com/settings

### Testing
- **Test Cards:** https://stripe.com/docs/testing
- **Test Payments:** https://dashboard.stripe.com/test/payments
- **Webhook Testing:** https://dashboard.stripe.com/test/webhooks

### Documentation
- **Checkout Docs:** https://stripe.com/docs/payments/checkout
- **Payment Links:** https://stripe.com/docs/payments/payment-links
- **Webhooks:** https://stripe.com/docs/webhooks

### Support
- **Support:** https://support.stripe.com
- **Status:** https://status.stripe.com

---

## 🎯 Your Action Items

### For Payment Links (Simplest):
1. ✅ Sign up: https://dashboard.stripe.com/register
2. ✅ Create products: https://dashboard.stripe.com/products/create
3. ✅ Get payment links: Click "Create payment link" on each product
4. ✅ Update landing pages with payment link URLs

### For Checkout (Full Setup):
1. ✅ Get API keys: https://dashboard.stripe.com/apikeys
2. ✅ Create products: https://dashboard.stripe.com/products/create
3. ✅ Get Price IDs: Copy from product pages
4. ✅ Set up webhook: https://dashboard.stripe.com/webhooks/add
5. ✅ Update code with environment variables
6. ✅ Test: https://dashboard.stripe.com/test

---

**All links in one place:** See `STRIPE_LINKS_REFERENCE.md` for complete list

