# ERMITS Advisory - Page Flow & Structure Review

## Executive Summary

This document reviews the page flow, navigation structure, content alignment, and user journey coherence across the ERMITS Advisory website.

---

## 1. Navigation Structure Analysis

### Current Navigation Menu
- **Advisory** (`/ermits-advisory`) → LandingPage
- **Method: STEEL™** (`/method/steel`) → SteelMethodPage
  - Submenu: Overview, Assessment, STEEL™ Radar, Premium Features, Enterprise
- **Ecosystem** (`/ecosystem`) → EcosystemPage
- **About** (`/about`) → AboutPage

### Issues Identified

1. **Missing "Services" in Navigation**
   - `/services` route exists (ServiceOffering page)
   - Not accessible from main navigation
   - Users may not discover available services

2. **vCISO Services Not Directly Accessible**
   - `/vciso-kit` route exists
   - Not in main navigation
   - Should be linked from Services or Advisory pages

3. **Inconsistent Route Aliases**
   - `/ermits-advisory` and `/` both point to LandingPage ✓
   - `/method/steel` and `/ermits-method/steel` both point to SteelMethodPage ✓
   - `/ecosystem` and `/ermits-ecosystem` both point to EcosystemPage ✓
   - Good consistency here

---

## 2. Page Flow & User Journey

### Primary User Journeys

#### Journey 1: Discovery → Understanding → Engagement
```
LandingPage (/ermits-advisory)
  ↓
  [Learn About STEEL™] → SteelMethodPage (/method/steel)
  ↓
  [Explore Ecosystem] → EcosystemPage (/ecosystem)
  ↓
  [Talk to Advisor] → ContactPage (/contact)
```

#### Journey 2: Service Exploration
```
LandingPage (/ermits-advisory)
  ↓
  [View Services] → ServiceOffering (/services) ❌ NOT LINKED
  ↓
  [vCISO Services] → VcisoKit (/vciso-kit) ❌ NOT LINKED
```

### Issues

1. **Services Page Not Discoverable**
   - No link from LandingPage to `/services`
   - No link from Navigation to `/services`
   - Users may not find service offerings

2. **vCISO Services Isolation**
   - VcisoKit page exists but not linked from Services
   - Should be accessible from ServiceOffering page

3. **Missing Cross-Links**
   - ServiceOffering should link to SteelMethodPage
   - ServiceOffering should link to EcosystemPage
   - LandingPage should link to ServiceOffering

---

## 3. Content Consistency Analysis

### STEEL™ Terminology
✅ **Consistent across pages:**
- "Strategic Threat & Enterprise Evaluation Layer" - consistent
- "STEEL™ Index" - consistent
- Three sublayers (Strategic, Threat, Enterprise) - consistent

### Messaging Alignment

#### LandingPage
- ✅ "Strategic cyber governance and risk stewardship"
- ✅ "Advisory first. Tools second." clarification
- ✅ Links to STEEL™ and Ecosystem

#### SteelMethodPage
- ✅ Comprehensive STEEL™ explanation
- ✅ Three sublayers clearly defined
- ✅ STEEL Index explained
- ✅ Links to Advisory and Ecosystem

#### EcosystemPage
- ✅ Explains ecosystem capabilities
- ✅ Shows STEEL™ connection
- ✅ Links to Advisory and STEEL™

#### ServiceOffering
- ✅ Five services clearly defined
- ✅ All reference STEEL™
- ⚠️ Missing link to EcosystemPage
- ⚠️ Missing link to SteelMethodPage

### Issues

1. **ServiceOffering Page Isolation**
   - Doesn't link to other key pages
   - Missing context about STEEL™ and Ecosystem

2. **vCISO Services**
   - VcisoKit page exists but not integrated into Services flow
   - Should be a service card in ServiceOffering or linked from it

---

## 4. CTA Consistency

### Current CTAs Across Pages

#### LandingPage
- "Talk to an Advisor" → `/contact` ✅
- "Schedule a Strategic Session" → `/contact` ✅
- "Learn More About STEEL™" → `/method/steel` ✅
- "Explore ERMITS Ecosystem" → `/ecosystem` ✅

#### SteelMethodPage
- "Talk to an Advisor" → `/contact` ✅
- "Request a STEEL™ Evaluation" → `/contact` ✅
- "Learn More About STEEL™" → `/method/steel` (self-link) ⚠️

#### EcosystemPage
- "Explore ERMITS Advisory" → `/ermits-advisory` ✅
- "Learn About STEEL™" → `/method/steel` ✅
- "Talk to ERMITS Advisory" → `/ermits-advisory` ✅

#### ServiceOffering
- "Talk to an Advisor" → `/contact` ✅
- "Request a STEEL™ Evaluation" → `/contact` ✅

### Issues

1. **Missing Service Discovery CTA**
   - LandingPage doesn't link to Services
   - Users may not discover service offerings

2. **Self-Linking**
   - SteelMethodPage has "Learn More About STEEL™" button that links to itself
   - Should link to assessment or remove

---

## 5. Recommended Improvements

### Priority 1: Add Services to Navigation

**Option A: Add to Main Nav**
```typescript
const navLinks = [
  { to: '/ermits-advisory', label: 'Advisory', icon: <Briefcase /> },
  { to: '/services', label: 'Services', icon: <Briefcase /> }, // NEW
  { to: '/method/steel', label: 'Method: STEEL™', icon: <BookOpen /> },
  { to: '/ecosystem', label: 'Ecosystem', icon: <Layers /> },
  { to: '/about', label: 'About', icon: <Users /> },
];
```

**Option B: Add to Advisory Submenu**
```typescript
{
  to: '/ermits-advisory',
  label: 'Advisory',
  icon: <Briefcase />,
  submenu: [
    { to: '/ermits-advisory', label: 'Overview' },
    { to: '/services', label: 'Services' }, // NEW
    { to: '/vciso-kit', label: 'vCISO Services' }, // NEW
  ]
}
```

### Priority 2: Add Cross-Links

**ServiceOffering Page:**
- Add link to SteelMethodPage in hero or intro
- Add link to EcosystemPage
- Link vCISO service card to `/vciso-kit`

**LandingPage:**
- Add "View Our Services" button/link
- Link to ServiceOffering page

**SteelMethodPage:**
- Remove or fix self-linking "Learn More About STEEL™" button
- Add link to ServiceOffering

### Priority 3: Integrate vCISO Services

**Option A: Add to ServiceOffering**
- vCISO is already listed as a service
- Add "Learn More" link to `/vciso-kit`

**Option B: Make vCISO accessible from Services**
- Ensure ServiceOffering links to VcisoKit page

### Priority 4: Improve User Journey

**Suggested Flow:**
```
1. LandingPage → Introduces Advisory, STEEL™, Ecosystem
2. Services → Lists all services (including vCISO)
3. SteelMethodPage → Explains the method
4. EcosystemPage → Shows execution layer
5. Contact → Conversion point
```

---

## 6. Content Alignment Checklist

### ✅ Well Aligned
- STEEL™ definition and terminology
- Three evaluation sublayers
- STEEL Index concept
- Ecosystem capabilities
- Advisory positioning (not a product shop)

### ⚠️ Needs Improvement
- Service discovery and navigation
- vCISO services integration
- Cross-linking between pages
- CTA consistency (some pages missing key links)

---

## 7. Action Items

### Immediate (High Priority)
1. ✅ Add Services link to navigation or Advisory submenu
2. ✅ Add "View Services" link from LandingPage
3. ✅ Add cross-links in ServiceOffering (to STEEL™ and Ecosystem)
4. ✅ Link vCISO service in ServiceOffering to VcisoKit page
5. ✅ Fix self-linking button in SteelMethodPage

### Short-term (Medium Priority)
1. Review and standardize all CTAs
2. Add breadcrumbs for better navigation
3. Ensure all pages have consistent footer links
4. Add "Related Pages" sections where appropriate

### Long-term (Low Priority)
1. Create user journey maps
2. Add analytics to track user flow
3. A/B test CTA placements
4. Create service comparison page

---

## 8. Summary

### Strengths
- ✅ Clear messaging about Advisory vs. products
- ✅ Consistent STEEL™ terminology
- ✅ Good content structure on individual pages
- ✅ Proper route aliases

### Weaknesses
- ❌ Services page not discoverable
- ❌ Missing cross-links between related pages
- ❌ vCISO services not integrated into flow
- ❌ Some self-linking CTAs

### Overall Assessment
**Score: 7/10**

The site has strong content and messaging, but navigation and discoverability need improvement. The primary issue is that the Services page exists but is not easily discoverable, and there are missing cross-links that would help users understand the full ERMITS offering.

