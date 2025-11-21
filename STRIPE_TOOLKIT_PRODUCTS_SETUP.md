# 🛠️ Stripe Setup Guide for Toolkit Products

## Overview

This guide will help you create all 8 toolkit products in Stripe and add the Price IDs to your Vercel environment variables.

---

## 📋 Products to Create in Stripe

### Basic Toolkit Products (3 products)

1. **Compliance Toolkit Basic** - $199
2. **Incident Response Toolkit Basic** - $149
3. **Vendor Risk Toolkit Basic** - $179

### Premium Toolkit Products (6 products - Annual + Lifetime)

4. **Compliance Toolkit Premium (Annual)** - $499/year
5. **Compliance Toolkit Premium (Lifetime)** - $899 (one-time)
6. **Incident Response Toolkit Premium (Annual)** - $349/year
7. **Incident Response Toolkit Premium (Lifetime)** - $599 (one-time)
8. **Vendor Risk Toolkit Premium (Annual)** - $449/year
9. **Vendor Risk Toolkit Premium (Lifetime)** - $799 (one-time)

### Bundle Products (3 products)

10. **Toolkit Bundle Basic** - $499 (one-time)
11. **Toolkit Bundle Premium (Annual)** - $999/year
12. **Toolkit Bundle Premium (Lifetime)** - $1,799 (one-time)

**Total: 12 products to create**

---

## 🚀 Step-by-Step: Create Products in Stripe

### Step 1: Access Stripe Dashboard

1. Go to: https://dashboard.stripe.com
2. Log in to your Stripe account
3. Navigate to: **Products** → **Add product**

### Step 2: Create Basic Toolkit Products

#### Product 1: Compliance Toolkit Basic

1. **Name:** `Compliance Toolkit Basic`
2. **Description:**
   ```
   Complete compliance toolkit with gap analysis templates, control mapping matrices, evidence checklists (200+ items), and audit preparation guides. Covers all 7 major frameworks (NIST, ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, CMMC).
   ```
3. **Pricing:**
   - **Price:** $199.00
   - **Billing:** One time
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID** (starts with `price_...`)

#### Product 2: Incident Response Toolkit Basic

1. **Name:** `Incident Response Toolkit Basic`
2. **Description:**
   ```
   Complete incident response toolkit with ransomware response playbook, communication templates (12+), incident tracking forms, 6 scenario-specific playbooks, and regulatory notification templates.
   ```
3. **Pricing:**
   - **Price:** $149.00
   - **Billing:** One time
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

#### Product 3: Vendor Risk Toolkit Basic

1. **Name:** `Vendor Risk Toolkit Basic`
2. **Description:**
   ```
   Complete vendor risk management toolkit with security questionnaire (150 questions), risk scoring framework, contract security clauses, vendor assessment templates, and 4-tier risk management approach.
   ```
3. **Pricing:**
   - **Price:** $179.00
   - **Billing:** One time
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

---

### Step 3: Create Premium Toolkit Products (Annual)

#### Product 4: Compliance Toolkit Premium (Annual)

1. **Name:** `Compliance Toolkit Premium (Annual)`
2. **Description:**
   ```
   Everything in Basic PLUS interactive gap analysis tool, auto-scoring, progress dashboard, unlimited assessments, PDF exports, multi-framework switching, remediation tracker, collaboration features, and CyberCorrect integration.
   ```
3. **Pricing:**
   - **Price:** $499.00
   - **Billing:** Recurring
   - **Interval:** Yearly
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

#### Product 5: Incident Response Toolkit Premium (Annual)

1. **Name:** `Incident Response Toolkit Premium (Annual)`
2. **Description:**
   ```
   Everything in Basic PLUS interactive incident tracker, real-time timeline builder, auto-filled communication templates, evidence collection workflow, post-incident report generator, tabletop exercise simulator, and CyberSoluce integration.
   ```
3. **Pricing:**
   - **Price:** $349.00
   - **Billing:** Recurring
   - **Interval:** Yearly
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

#### Product 6: Vendor Risk Toolkit Premium (Annual)

1. **Name:** `Vendor Risk Toolkit Premium (Annual)`
2. **Description:**
   ```
   Everything in Basic PLUS interactive risk calculator, vendor portal, analytics dashboard, automated scoring, vendor database, and VendorSoluce integration.
   ```
3. **Pricing:**
   - **Price:** $449.00
   - **Billing:** Recurring
   - **Interval:** Yearly
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

---

### Step 4: Create Premium Toolkit Products (Lifetime)

#### Product 7: Compliance Toolkit Premium (Lifetime)

1. **Name:** `Compliance Toolkit Premium (Lifetime)`
2. **Description:**
   ```
   Everything in Premium Annual with lifetime access - no recurring fees. All premium features forever.
   ```
3. **Pricing:**
   - **Price:** $899.00
   - **Billing:** One time
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

#### Product 8: Incident Response Toolkit Premium (Lifetime)

1. **Name:** `Incident Response Toolkit Premium (Lifetime)`
2. **Description:**
   ```
   Everything in Premium Annual with lifetime access - no recurring fees.
   ```
3. **Pricing:**
   - **Price:** $599.00
   - **Billing:** One time
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

#### Product 9: Vendor Risk Toolkit Premium (Lifetime)

1. **Name:** `Vendor Risk Toolkit Premium (Lifetime)`
2. **Description:**
   ```
   Everything in Premium Annual with lifetime access - no recurring fees.
   ```
3. **Pricing:**
   - **Price:** $799.00
   - **Billing:** One time
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

---

### Step 5: Create Bundle Products

#### Product 10: Toolkit Bundle Basic

1. **Name:** `Toolkit Bundle Basic`
2. **Description:**
   ```
   Get all three basic toolkits (Compliance, Incident Response, Vendor Risk) in one bundle. Save $28 compared to buying individually.
   ```
3. **Pricing:**
   - **Price:** $499.00
   - **Billing:** One time
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

#### Product 11: Toolkit Bundle Premium (Annual)

1. **Name:** `Toolkit Bundle Premium (Annual)`
2. **Description:**
   ```
   Get all three premium toolkits (Annual) in one bundle. Save $298 compared to buying individually.
   ```
3. **Pricing:**
   - **Price:** $999.00
   - **Billing:** Recurring
   - **Interval:** Yearly
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

#### Product 12: Toolkit Bundle Premium (Lifetime)

1. **Name:** `Toolkit Bundle Premium (Lifetime)`
2. **Description:**
   ```
   Get all three premium toolkits (Lifetime) in one bundle. Save $499 compared to buying individually. Lifetime access to all premium features.
   ```
3. **Pricing:**
   - **Price:** $1,799.00
   - **Billing:** One time
   - **Currency:** USD
4. **Click:** "Add product"
5. **Copy the Price ID**

---

## 📝 Add Price IDs to Vercel

After creating all products, add the Price IDs to Vercel environment variables:

### Go to Vercel Dashboard

1. **Open:** https://vercel.com/dashboard
2. **Select:** Your project (`ermits-advisory.com`)
3. **Navigate:** Settings → Environment Variables
4. **Click:** "Add New"

### Add Each Variable

#### Basic Toolkit Products

**Variable Name:**
```
VITE_STRIPE_PRICE_COMPLIANCE_BASIC
```
**Value:** (Paste Price ID from Product 1)

**Variable Name:**
```
STRIPE_PRICE_COMPLIANCE_BASIC
```
**Value:** (Same Price ID)

**Variable Name:**
```
VITE_STRIPE_PRICE_INCIDENT_BASIC
```
**Value:** (Paste Price ID from Product 2)

**Variable Name:**
```
STRIPE_PRICE_INCIDENT_BASIC
```
**Value:** (Same Price ID)

**Variable Name:**
```
VITE_STRIPE_PRICE_VENDOR_BASIC
```
**Value:** (Paste Price ID from Product 3)

**Variable Name:**
```
STRIPE_PRICE_VENDOR_BASIC
```
**Value:** (Same Price ID)

#### Premium Toolkit Products (Annual)

**Variable Name:**
```
VITE_STRIPE_PRICE_COMPLIANCE_PREMIUM_ANNUAL
```
**Value:** (Paste Price ID from Product 4)

**Variable Name:**
```
STRIPE_PRICE_COMPLIANCE_PREMIUM_ANNUAL
```
**Value:** (Same Price ID)

**Variable Name:**
```
VITE_STRIPE_PRICE_INCIDENT_PREMIUM_ANNUAL
```
**Value:** (Paste Price ID from Product 5)

**Variable Name:**
```
STRIPE_PRICE_INCIDENT_PREMIUM_ANNUAL
```
**Value:** (Same Price ID)

**Variable Name:**
```
VITE_STRIPE_PRICE_VENDOR_PREMIUM_ANNUAL
```
**Value:** (Paste Price ID from Product 6)

**Variable Name:**
```
STRIPE_PRICE_VENDOR_PREMIUM_ANNUAL
```
**Value:** (Same Price ID)

#### Premium Toolkit Products (Lifetime)

**Variable Name:**
```
VITE_STRIPE_PRICE_COMPLIANCE_PREMIUM_LIFETIME
```
**Value:** (Paste Price ID from Product 7)

**Variable Name:**
```
STRIPE_PRICE_COMPLIANCE_PREMIUM_LIFETIME
```
**Value:** (Same Price ID)

**Variable Name:**
```
VITE_STRIPE_PRICE_INCIDENT_PREMIUM_LIFETIME
```
**Value:** (Paste Price ID from Product 8)

**Variable Name:**
```
STRIPE_PRICE_INCIDENT_PREMIUM_LIFETIME
```
**Value:** (Same Price ID)

**Variable Name:**
```
VITE_STRIPE_PRICE_VENDOR_PREMIUM_LIFETIME
```
**Value:** (Paste Price ID from Product 9)

**Variable Name:**
```
STRIPE_PRICE_VENDOR_PREMIUM_LIFETIME
```
**Value:** (Same Price ID)

#### Bundle Products

**Variable Name:**
```
VITE_STRIPE_PRICE_BUNDLE_BASIC
```
**Value:** (Paste Price ID from Product 10)

**Variable Name:**
```
STRIPE_PRICE_BUNDLE_BASIC
```
**Value:** (Same Price ID)

**Variable Name:**
```
VITE_STRIPE_PRICE_BUNDLE_PREMIUM_ANNUAL
```
**Value:** (Paste Price ID from Product 11)

**Variable Name:**
```
STRIPE_PRICE_BUNDLE_PREMIUM_ANNUAL
```
**Value:** (Same Price ID)

**Variable Name:**
```
VITE_STRIPE_PRICE_BUNDLE_PREMIUM_LIFETIME
```
**Value:** (Paste Price ID from Product 12)

**Variable Name:**
```
STRIPE_PRICE_BUNDLE_PREMIUM_LIFETIME
```
**Value:** (Same Price ID)

---

## ✅ Checklist

After completing setup:

- [ ] All 12 products created in Stripe
- [ ] All Price IDs copied
- [ ] All 24 environment variables added to Vercel (12 frontend + 12 backend)
- [ ] All variables set for Production, Preview, and Development
- [ ] Deployment redeployed
- [ ] Tested checkout flow for at least one product

---

## 🧪 Testing

After adding all variables:

1. **Redeploy** your Vercel project
2. **Test a product page:**
   - Visit: `/compliance-toolkit`
   - Click "Buy with Stripe"
   - Should redirect to Stripe Checkout ✅

---

## 📊 Summary

**Total Products:** 12  
**Total Environment Variables:** 24 (12 frontend + 12 backend)  
**Estimated Setup Time:** 30-45 minutes

---

**Ready to start?** Begin with Step 1 and create your first product in Stripe! 🚀

