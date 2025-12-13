# 🔗 Stripe Links Reference

Quick access to all Stripe resources you'll need for setup.

---

## 🚀 Getting Started

### Account & Dashboard
- **Stripe Dashboard:** https://dashboard.stripe.com
- **Sign Up:** https://dashboard.stripe.com/register
- **Login:** https://dashboard.stripe.com/login
- **Test Mode Toggle:** Top right of dashboard (switch between Test/Live)

---

## 🔑 API Keys & Configuration

### API Keys
- **API Keys Page:** https://dashboard.stripe.com/apikeys
- **Publishable Key:** Starts with `pk_test_` or `pk_live_`
- **Secret Key:** Starts with `sk_test_` or `sk_live_`
- **Reveal Secret Key:** Click "Reveal test key" or "Reveal live key"

### Webhooks
- **Webhooks Dashboard:** https://dashboard.stripe.com/webhooks
- **Add Webhook Endpoint:** https://dashboard.stripe.com/webhooks/add
- **Webhook Secret:** Found after creating webhook (starts with `whsec_`)

---

## 📦 Products & Pricing

### Products
- **Products Dashboard:** https://dashboard.stripe.com/products
- **Create Product:** https://dashboard.stripe.com/products/create
- **Product Settings:** Click on any product to edit

### Prices
- **Prices Dashboard:** https://dashboard.stripe.com/prices
- **Create Price:** https://dashboard.stripe.com/prices/create
- **Price ID Format:** `price_xxxxxxxxxxxxx` (copy this for your code)

### Payment Links (Simplest Option)
- **Payment Links:** https://dashboard.stripe.com/payment-links
- **Create Payment Link:** https://dashboard.stripe.com/payment-links/create
- **Link Format:** `https://buy.stripe.com/xxxxxxxxxxxxx`

---

## 💳 Payment Methods

### Checkout Sessions
- **Checkout Sessions:** https://dashboard.stripe.com/payments/checkout
- **Test Checkout:** Use test mode and test cards below

### Test Cards
- **Test Cards Documentation:** https://stripe.com/docs/testing
- **Success Card:** `4242 4242 4242 4242`
- **Decline Card:** `4000 0000 0000 0002`
- **Requires Auth:** `4000 0025 0000 3155`
- **Any future expiry date, any 3-digit CVC, any ZIP**

---

## 📊 Payments & Transactions

### Payments
- **Payments Dashboard:** https://dashboard.stripe.com/payments
- **Test Payments:** https://dashboard.stripe.com/test/payments
- **Live Payments:** https://dashboard.stripe.com/payments (switch to Live mode)

### Customers
- **Customers Dashboard:** https://dashboard.stripe.com/customers
- **Create Customer:** https://dashboard.stripe.com/customers/create

### Refunds
- **Refunds:** https://dashboard.stripe.com/refunds
- **Process Refund:** Click on payment → Refund

---

## 🔧 Developer Resources

### Documentation
- **Stripe Docs Home:** https://stripe.com/docs
- **Checkout Documentation:** https://stripe.com/docs/payments/checkout
- **Payment Links Docs:** https://stripe.com/docs/payments/payment-links
- **Webhooks Guide:** https://stripe.com/docs/webhooks
- **API Reference:** https://stripe.com/docs/api

### Code Examples
- **Checkout Integration:** https://stripe.com/docs/payments/checkout/accept-a-payment
- **Webhook Handling:** https://stripe.com/docs/webhooks/quickstart
- **React Integration:** https://stripe.com/docs/stripe-js/react

### Testing
- **Testing Guide:** https://stripe.com/docs/testing
- **Test Mode:** https://dashboard.stripe.com/test
- **Webhook Testing:** https://dashboard.stripe.com/test/webhooks

---

## 💰 Billing & Payouts

### Payouts
- **Payouts Dashboard:** https://dashboard.stripe.com/payouts
- **Payout Settings:** https://dashboard.stripe.com/settings/payouts
- **Payout Schedule:** Usually 2-7 business days

### Balance
- **Account Balance:** https://dashboard.stripe.com/balance
- **Test Balance:** https://dashboard.stripe.com/test/balance

### Settings
- **Account Settings:** https://dashboard.stripe.com/settings/account
- **Business Profile:** https://dashboard.stripe.com/settings/business
- **Tax Settings:** https://dashboard.stripe.com/settings/tax

---

## 🎯 Quick Setup Links

### For Payment Links (Simplest)
1. **Create Product:** https://dashboard.stripe.com/products/create
2. **Create Payment Link:** https://dashboard.stripe.com/payment-links/create
3. **Copy Link:** Use the generated `https://buy.stripe.com/...` URL

### For Stripe Checkout (Recommended)
1. **Get API Keys:** https://dashboard.stripe.com/apikeys
2. **Create Products:** https://dashboard.stripe.com/products/create
3. **Get Price IDs:** Copy from product page (starts with `price_`)
4. **Set Up Webhook:** https://dashboard.stripe.com/webhooks/add
5. **Test Checkout:** Use test cards from https://stripe.com/docs/testing

---

## 🔐 Security & Compliance

### Security
- **Security Settings:** https://dashboard.stripe.com/settings/security
- **API Logs:** https://dashboard.stripe.com/logs
- **Event Logs:** https://dashboard.stripe.com/events

### Compliance
- **PCI Compliance:** https://stripe.com/docs/security/guide
- **GDPR:** https://stripe.com/docs/security/gdpr
- **Tax Compliance:** https://stripe.com/docs/tax

---

## 📞 Support

### Help & Support
- **Stripe Support:** https://support.stripe.com
- **Contact Support:** https://support.stripe.com/contact
- **Status Page:** https://status.stripe.com
- **Community Forum:** https://github.com/stripe/stripe-node/discussions

### Resources
- **Stripe Blog:** https://stripe.com/blog
- **Stripe YouTube:** https://www.youtube.com/c/stripe
- **Stripe Discord:** https://stripe.com/discord

---

## 🎓 Learning Resources

### Tutorials
- **Stripe Checkout Tutorial:** https://stripe.com/docs/payments/checkout
- **Webhook Tutorial:** https://stripe.com/docs/webhooks/quickstart
- **Payment Links Tutorial:** https://stripe.com/docs/payments/payment-links

### Video Guides
- **Getting Started:** https://www.youtube.com/watch?v=2h-wYHX2dfc
- **Checkout Integration:** https://www.youtube.com/watch?v=Yp9w7qJqJYk

---

## 📝 Your Product Setup Checklist

### Step 1: Create Products
- [ ] Go to: https://dashboard.stripe.com/products/create
- [ ] Create "STEEL Premium Assessment" - $29
- [ ] Create "vCISO Starter Kit" - $299
- [ ] Create "Executive Dashboard Template" - $79

### Step 2: Get Payment Links (Option A - Simplest)
- [ ] For each product, click "Create payment link"
- [ ] Copy the `https://buy.stripe.com/...` URL
- [ ] Update your landing pages with these URLs

### Step 2: Get Price IDs (Option B - Checkout)
- [ ] Click on each product
- [ ] Copy the Price ID (starts with `price_`)
- [ ] Add to your `.env` file

### Step 3: Get API Keys
- [ ] Go to: https://dashboard.stripe.com/apikeys
- [ ] Copy Publishable Key (`pk_test_...`)
- [ ] Copy Secret Key (`sk_test_...`)
- [ ] Add to your `.env` file

### Step 4: Set Up Webhook (For Checkout)
- [ ] Go to: https://dashboard.stripe.com/webhooks/add
- [ ] Endpoint URL: `https://your-domain.com/api/webhook`
- [ ] Select events: `checkout.session.completed`
- [ ] Copy Webhook Secret (`whsec_...`)
- [ ] Add to your `.env` file

---

## 🧪 Testing Links

### Test Your Integration
- **Test Mode Dashboard:** https://dashboard.stripe.com/test
- **Test Payments:** https://dashboard.stripe.com/test/payments
- **Test Webhooks:** https://dashboard.stripe.com/test/webhooks
- **Webhook Testing Tool:** https://dashboard.stripe.com/test/webhooks (click on webhook → Send test webhook)

### Test Cards
- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **More Test Cards:** https://stripe.com/docs/testing#cards

---

## 🚀 Go Live Checklist

### Before Going Live
- [ ] Complete business verification: https://dashboard.stripe.com/settings/account
- [ ] Add bank account: https://dashboard.stripe.com/settings/payouts
- [ ] Switch to Live mode: Toggle in top right
- [ ] Get Live API keys: https://dashboard.stripe.com/apikeys
- [ ] Update environment variables with live keys
- [ ] Test with real small purchase
- [ ] Set up live webhook: https://dashboard.stripe.com/webhooks

---

## 📱 Mobile & Apps

### Mobile SDKs
- **iOS SDK:** https://stripe.com/docs/mobile/ios
- **Android SDK:** https://stripe.com/docs/mobile/android
- **React Native:** https://stripe.com/docs/stripe-react-native

---

**Quick Access:** Bookmark https://dashboard.stripe.com for easy access!

