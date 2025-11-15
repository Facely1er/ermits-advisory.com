# Deployment Checklist for ERMITS Advisory

## ✅ Pre-Deployment Checks

### Build Status
- [x] **Build succeeds locally** - `npm run build` completes without errors
- [x] **No TypeScript errors** - All type checks pass
- [x] **No ESLint errors** - Code quality checks pass
- [x] **All pages load** - No missing components or imports

### Configuration Files
- [x] **vercel.json** - Configured correctly (functions runtime removed - auto-detected)
- [x] **package.json** - Build scripts configured
- [x] **_redirects** - SPA routing configured
- [x] **All policy pages** - AcceptableUsePolicyPage, PrivacyPolicyPage, TermsOfServicePage, CookiePolicyPage

### Code Quality
- [x] **AcceptableUsePolicyPage** - Fixed (was empty, now has full content)
- [x] **No unused imports** - All linter errors resolved
- [x] **All routes configured** - App.tsx has all routes

## 🔧 Vercel Configuration

### Fixed Issues
- ✅ **Function Runtime Error** - Removed `functions` configuration from `vercel.json` (Vercel auto-detects TypeScript API routes)

### Current vercel.json Configuration
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

## 🔐 Environment Variables (Required for Stripe)

Set these in Vercel Dashboard → Project Settings → Environment Variables:

### Required for Payment Functionality
- [ ] **STRIPE_SECRET_KEY** - Your Stripe secret key (starts with `sk_`)
- [ ] **STRIPE_WEBHOOK_SECRET** - Stripe webhook signing secret (starts with `whsec_`)
- [ ] **STRIPE_PRICE_STEEL_PREMIUM** - Stripe Price ID for STEEL Premium
- [ ] **STRIPE_PRICE_VCISO_KIT** - Stripe Price ID for vCISO Kit
- [ ] **STRIPE_PRICE_DASHBOARD_TEMPLATE** - Stripe Price ID for Dashboard Template

### Optional Environment Variables
- [ ] **APP_URL** - Your production URL (defaults to `https://ermits-advisory.com`)

## 📋 API Functions

### Auto-Detected by Vercel
Vercel automatically detects TypeScript files in the `api/` folder and uses Node.js runtime:
- ✅ `api/create-checkout-session.ts` - Creates Stripe checkout sessions
- ✅ `api/webhook.ts` - Handles Stripe webhook events

**Note**: No explicit runtime configuration needed - Vercel auto-detects TypeScript API routes.

## 🚀 Deployment Steps

### 1. Verify Local Build
```bash
cd ermits-advisory.com
npm install
npm run build
```

### 2. Commit and Push
```bash
git add .
git commit -m "Fix deployment: Remove functions runtime config, fix AcceptableUsePolicyPage"
git push
```

### 3. Deploy to Vercel
- Push to main branch triggers automatic deployment
- Or use Vercel CLI: `vercel --prod`

### 4. Set Environment Variables
In Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add all required Stripe environment variables
3. Redeploy if needed

### 5. Configure Stripe Webhook
1. In Stripe Dashboard → Webhooks
2. Add endpoint: `https://your-domain.vercel.app/api/webhook`
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy webhook signing secret to `STRIPE_WEBHOOK_SECRET` env var

## ✅ Post-Deployment Verification

### Functional Checks
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Policy pages accessible (`/privacy`, `/terms`, `/cookies`, `/acceptable-use`)
- [ ] Footer links work
- [ ] STEEL page loads
- [ ] Pricing page displays correctly
- [ ] Ecosystem page shows logos

### API Checks
- [ ] `/api/create-checkout-session` responds (requires Stripe keys)
- [ ] `/api/webhook` endpoint exists (requires webhook secret)

### Performance Checks
- [ ] Page load times acceptable
- [ ] Images load correctly
- [ ] No console errors in browser
- [ ] Mobile responsive design works

## 🐛 Troubleshooting

### If Deployment Still Fails

1. **Check Vercel Build Logs**
   - Look for specific error messages
   - Verify Node.js version (should be 20.x)

2. **Verify API Functions**
   - Ensure `api/*.ts` files export default async function
   - Check for TypeScript errors in API files

3. **Environment Variables**
   - Verify all required env vars are set
   - Check for typos in variable names

4. **Build Output**
   - Verify `dist/` folder contains all assets
   - Check that `dist/index.html` exists

## 📝 Notes

- **Runtime Detection**: Vercel automatically detects TypeScript API routes and uses Node.js 20.x runtime
- **Framework Detection**: Vercel detects Vite framework automatically
- **SPA Routing**: All routes redirect to `index.html` for client-side routing
- **Security Headers**: Configured in `vercel.json` for XSS protection and content security

## 🎯 Next Steps After Deployment

1. Test payment flow end-to-end
2. Configure email service for product delivery (webhook.ts)
3. Set up monitoring and error tracking
4. Configure custom domain (if applicable)
5. Set up analytics tracking

