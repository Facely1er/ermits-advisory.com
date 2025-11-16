# Stripe Product Creation Scripts

## Quick Start

### Option 1: Run the Script (Easiest)

```bash
# Make sure you're in the project root
cd ermits-advisory.com

# Run the script (it will use your secret key)
node scripts/create-stripe-products.mjs
```

The script will:
1. ✅ Create all 3 products in Stripe
2. ✅ Set up pricing for each product
3. ✅ Display the Price IDs you need
4. ✅ Show you what to add to Vercel

### Option 2: Use Environment Variable

```bash
# Set your secret key
export STRIPE_SECRET_KEY=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

# Run the script
node scripts/create-stripe-products.mjs
```

## What Gets Created

1. **STEEL™ Premium Assessment** - $29.00
2. **vCISO Starter Kit** - $299.00
3. **Executive Dashboard Template** - $79.00

## After Running

The script will output the Price IDs. Copy them and add to Vercel:

```
STRIPE_PRICE_STEEL_PREMIUM=price_xxxxx
STRIPE_PRICE_VCISO_KIT=price_xxxxx
STRIPE_PRICE_DASHBOARD_TEMPLATE=price_xxxxx
```

## Troubleshooting

### Error: "Cannot find module 'stripe'"
```bash
npm install stripe
```

### Error: "Invalid API Key"
- Make sure you're using the live secret key (starts with `sk_live_`)
- Check that the key is correct

### Products Already Exist
- The script will create new products each time
- If products already exist, you can use the existing Price IDs from Stripe dashboard

## Manual Alternative

If you prefer to create products manually:
1. Go to: https://dashboard.stripe.com/products
2. Follow the guide in: `STRIPE_PRODUCT_CREATION_STEPS.md`

