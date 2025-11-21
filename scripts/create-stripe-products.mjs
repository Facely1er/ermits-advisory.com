/**
 * Stripe Product Creation Script (ES Modules)
 * 
 * This script creates all 4 products in your Stripe account.
 * 
 * Usage:
 * 1. Make sure stripe is installed: npm install stripe
 * 2. Run: node scripts/create-stripe-products.mjs
 */

import Stripe from 'stripe';

// Your Stripe secret key - MUST be set as environment variable
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error('❌ Error: STRIPE_SECRET_KEY environment variable is required');
  console.error('   Set it before running this script:');
  console.error('   export STRIPE_SECRET_KEY=sk_live_...');
  console.error('   or');
  console.error('   STRIPE_SECRET_KEY=sk_live_... node scripts/create-stripe-products.mjs');
  process.exit(1);
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-11-20.acacia',
});

// Products to create
const products = [
  {
    name: 'STEEL™ Premium Assessment',
    description: 'Premium features for STEEL Assessment including detailed PDF reports, custom visualizations, executive summary templates, and multiple export formats. One-time purchase with lifetime access.',
    price: 2900, // $29.00 in cents
    currency: 'usd',
    priceIdEnvVar: 'STRIPE_PRICE_STEEL_PREMIUM'
  },
  {
    name: 'vCISO Starter Kit',
    description: 'Complete vCISO toolkit with 37 ready-to-use security policies, incident response playbooks, board materials, and compliance checklists. Includes Word/PDF templates for easy customization.',
    price: 29900, // $299.00 in cents
    currency: 'usd',
    priceIdEnvVar: 'STRIPE_PRICE_VCISO_KIT'
  },
  {
    name: 'Executive Dashboard Template',
    description: 'White-label HTML/CSS/JS executive dashboard template with risk radar, metrics visualization, and CSV data import capabilities. Fully customizable and ready to deploy.',
    price: 7900, // $79.00 in cents
    currency: 'usd',
    priceIdEnvVar: 'STRIPE_PRICE_DASHBOARD_TEMPLATE'
  },
  {
    name: 'vCISO Professional Kit',
    description: 'Everything in Starter Kit PLUS complete vCISO delivery workflow guide, service delivery methodology, client engagement templates, and ERMITS platform integration workflows.',
    price: 49900, // $499.00 in cents
    currency: 'usd',
    priceIdEnvVar: 'STRIPE_PRICE_VCISO_PROFESSIONAL'
  }
];

async function createProducts() {
  console.log('🚀 Starting Stripe product creation...\n');
  console.log('Using Stripe account:', stripeSecretKey.substring(0, 20) + '...\n');

  const results = [];

  for (const product of products) {
    try {
      console.log(`📦 Creating: ${product.name}...`);

      // Create the product with price
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        default_price_data: {
          currency: product.currency,
          unit_amount: product.price,
        },
      });

      // Get the price ID
      const priceId = typeof stripeProduct.default_price === 'string' 
        ? stripeProduct.default_price 
        : stripeProduct.default_price?.id;

      if (!priceId) {
        throw new Error('Price ID not found');
      }

      console.log(`✅ Created: ${product.name}`);
      console.log(`   Product ID: ${stripeProduct.id}`);
      console.log(`   Price ID: ${priceId}`);
      console.log(`   Price: $${(product.price / 100).toFixed(2)} ${product.currency.toUpperCase()}\n`);

      results.push({
        name: product.name,
        productId: stripeProduct.id,
        priceId: priceId,
        envVar: product.priceIdEnvVar,
        price: `$${(product.price / 100).toFixed(2)}`
      });

    } catch (error) {
      console.error(`❌ Error creating ${product.name}:`, error.message);
      results.push({
        name: product.name,
        error: error.message
      });
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📋 SUMMARY');
  console.log('='.repeat(60) + '\n');

  if (results.some(r => r.error)) {
    console.log('⚠️  Some products failed to create. See errors above.\n');
  } else {
    console.log('✅ All products created successfully!\n');
  }

  console.log('📝 Add these to your Vercel environment variables:\n');
  
  results.forEach(result => {
    if (result.error) {
      console.log(`❌ ${result.envVar}: Failed - ${result.error}`);
    } else {
      console.log(`${result.envVar}=${result.priceId}`);
    }
  });

  console.log('\n' + '='.repeat(60));
  console.log('🔗 Next Steps:');
  console.log('='.repeat(60));
  console.log('1. Copy the Price IDs above');
  console.log('2. Add them to Vercel environment variables');
  console.log('3. Set up webhook: https://dashboard.stripe.com/webhooks');
  console.log('4. Redeploy your application');
  console.log('\n✅ Done!\n');
}

// Run the script
createProducts().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

