# 📦 Stripe Product Creation - Step by Step

## Quick Links

- **Products Dashboard:** https://dashboard.stripe.com/products
- **API Keys:** https://dashboard.stripe.com/apikeys
- **Webhooks:** https://dashboard.stripe.com/webhooks

---

## Product 1: STEEL Premium Assessment ($29)

### Step-by-Step:

1. **Go to:** https://dashboard.stripe.com/products
2. **Click:** "Add product" button (top right)
3. **Fill in Product Information:**
   ```
   Name: STEEL™ Premium Assessment
   
   Description: 
   Premium features for STEEL Assessment including detailed PDF reports, 
   custom visualizations, executive summary templates, and multiple export formats. 
   One-time purchase with lifetime access.
   ```
4. **Add Pricing:**
   - Click "Add pricing"
   - **Price:** `29.00`
   - **Currency:** `USD`
   - **Billing:** Select "One time"
   - Click "Save pricing"
5. **Save Product:**
   - Click "Save product" (bottom right)
6. **Copy Price ID:**
   - After saving, you'll see the product page
   - Look for "API ID" or "Price ID" 
   - It will look like: `price_1ABC123xyz...`
   - **Copy this ID** - you'll need it for `STRIPE_PRICE_STEEL_PREMIUM`

---

## Product 2: vCISO Starter Kit ($299)

### Step-by-Step:

1. **Go to:** https://dashboard.stripe.com/products
2. **Click:** "Add product" button
3. **Fill in Product Information:**
   ```
   Name: vCISO Starter Kit
   
   Description:
   Complete vCISO toolkit with 37 ready-to-use security policies, incident 
   response playbooks, board materials, and compliance checklists. 
   Includes Word/PDF templates for easy customization.
   ```
4. **Add Pricing:**
   - Click "Add pricing"
   - **Price:** `299.00`
   - **Currency:** `USD`
   - **Billing:** Select "One time"
   - Click "Save pricing"
5. **Save Product:**
   - Click "Save product"
6. **Copy Price ID:**
   - Copy the Price ID for `STRIPE_PRICE_VCISO_KIT`

---

## Product 3: Executive Dashboard Template ($79)

### Step-by-Step:

1. **Go to:** https://dashboard.stripe.com/products
2. **Click:** "Add product" button
3. **Fill in Product Information:**
   ```
   Name: Executive Dashboard Template
   
   Description:
   White-label HTML/CSS/JS executive dashboard template with risk radar, 
   metrics visualization, and CSV data import capabilities. 
   Fully customizable and ready to deploy.
   ```
4. **Add Pricing:**
   - Click "Add pricing"
   - **Price:** `79.00`
   - **Currency:** `USD`
   - **Billing:** Select "One time"
   - Click "Save pricing"
5. **Save Product:**
   - Click "Save product"
6. **Copy Price ID:**
   - Copy the Price ID for `STRIPE_PRICE_DASHBOARD_TEMPLATE`

---

## 📝 After Creating Products

You should have 3 Price IDs that look like:
- `price_1ABC123xyz...` (STEEL Premium)
- `price_1DEF456abc...` (vCISO Kit)
- `price_1GHI789def...` (Dashboard Template)

Add these to your Vercel environment variables as shown in `STRIPE_SETUP_COMPLETE.md`

---

## ✅ Verification

After creating all products:
1. Go to https://dashboard.stripe.com/products
2. You should see all 3 products listed
3. Click on each product to verify:
   - Name is correct
   - Price is correct
   - Price ID is visible
4. Copy all Price IDs for environment variables

---

**Time Required:** ~5-10 minutes  
**Difficulty:** Easy

