# Changelog - ERMITS-Advisory Website Alignment

## Overview
This changelog documents the alignment of the ERMITS-Advisory website with STEEL and ERMITS ecosystem positioning, transforming it into a strategic governance partner site focused on board, regulator, and investor-facing content.

## Changes Made

### Navigation Updates (`src/components/Navigation.tsx`)
- **Updated navigation structure** to align with governance positioning:
  - Renamed "About" → "About ERMITS-Advisory"
  - Replaced STEEL™ dropdown menu with single "STEEL™ Executive Diagnostic" link
  - Added "Insights" link (new page)
  - Updated "Contact" button label to "Request Briefing"
  - Removed "vCISO Kit" and "Ecosystem" from main navigation (moved to footer/Services)
- **Simplified navigation**: Removed dropdown menus, streamlined to flat structure
- **Mobile navigation**: Updated to match new structure

### Homepage Rewrite (`src/pages/LandingPage.tsx`)
- **Hero Section**:
  - Replaced carousel-based headline with static H1: "Strategic Cyber & Privacy Governance for Boards, Regulators, and Investors."
  - Updated subheadline to emphasize STEEL Executive Diagnostic and ERMITS platform ecosystem
  - Changed primary CTA to "Request STEEL Briefing" → `/contact`
  - Changed secondary CTA to "View STEEL Sample Output" → `/steel-executive-diagnostic#steel-overview`
  - Removed key benefits pills section
- **Added STEEL Teaser Block**:
  - New section explaining STEEL as decision-grade diagnostic (not control counting)
  - Visual representation of six PESTEL dimensions (Political, Economic, Social, Technological, Environmental, Legal)
  - Link to "How STEEL Works" → `/steel-executive-diagnostic`
- **Added Strategic Capabilities Strip**:
  - Replaced "Enhanced Features Section" with Strategic Capabilities
  - Five capability blocks: Cybersecurity Governance, Privacy Compliance Architecture, Operational Risk Management, Supply Chain Resilience & Third-Party Risk, Global Regulatory Alignment
  - Added micro-tagline: "Where legal understanding, cybersecurity experience, and global trade exposure intersect to solve real-world risk."
- **Maintained existing sections**: STEEL Methodology, Use Cases, and CTA sections kept with minor alignment edits

### About Page Rewrite (`src/pages/AboutPage.tsx`)
- **Added Origin Story & STEEL Creation Section**:
  - Founded 2016, response to emerging global privacy + cyber issues
  - Cross-domain experience (logistics/export, AI software, finance, education) framed as "real-world risk understanding"
  - Clear statement that ERMITS-Advisory created STEEL to move beyond control checklists
  - Separation statement: Advisory = governance/strategy/asymmetry detection; ERMITS platforms = execution/automation layer
- **Maintained existing sections**: Leadership Excellence, Strategic Capabilities, Global Presence

### New Page: STEEL Executive Diagnostic (`src/pages/SteelExecutiveDiagnostic.tsx`)
- **Created new dedicated page** at `/steel-executive-diagnostic`
- **Six sections implemented**:
  1. **Hero**: Title, subtext, and CTA to request STEEL session
  2. **What STEEL Measures**: Explanation of six PESTEL dimensions, explicit statement that STEEL does NOT count controls
  3. **How STEEL Works**: 4-step layout (Input, Computation, Diagnosis, Execution)
  4. **Typical Use Cases**: Board readiness, regulatory scrutiny, investor/M&A diligence, multi-region expansion
  5. **What You Receive**: Bullet list of deliverables (classification, radar, asymmetries, priorities)
  6. **Call to Action**: Primary and secondary CTAs to schedule briefing

### Services Page Rework (`src/pages/ServiceOffering.tsx`)
- **Reorganized into 4 top-level offerings**:
  1. **STEEL Executive Diagnostic**: Board/regulator-facing diagnostic using STEEL
  2. **Cyber & Privacy Governance Architecture**: Uses STEEL outputs to define committees, reporting, KPIs
  3. **Supply Chain & Vendor Risk Governance**: Uses STEEL and VendorSoluce/TechnoSoluce data
  4. **Regulatory & Board Defense Readiness**: Legal defensibility and oversight evidence
- **For each service, specified**:
  - Who it's for (Board, C-suite, Risk/Compliance, Investors)
  - What problem it addresses (1-2 sentences)
  - What artifacts clients receive (STEEL report, governance blueprint, risk roadmap)
- **Removed pricing/timeline fields**: Focused on governance outcomes rather than transactional details

### Contact Page: Interactive Onboarding Demo (`src/pages/ContactPage.tsx`)
- **Created interactive onboarding demo** (5-step flow):
  1. **Introduction**: Welcome to STEEL Executive Diagnostic
  2. **Interactive STEEL walkthrough**: Key concepts, six PESTEL dimensions, sample outputs
  3. **Needs assessment**: Role selection, primary concerns, organization context
  4. **Results preview**: What they would receive based on inputs
  5. **Conversion**: Request STEEL Briefing with pre-filled information
- **Added toggle**: Users can switch between "Interactive Demo" and "Quick Contact Form"
- **Updated form fields**: Added Role and Primary Concern dropdowns
- **State management**: Tracks progress through onboarding steps, collects data incrementally
- **Pre-fills final form**: Onboarding data automatically populates contact form

### New Page: Insights (`src/pages/InsightsPage.tsx`)
- **Created placeholder page** at `/insights`
- **Three placeholder articles** (Coming Q1 2026):
  1. "From Controls to Asymmetries: Why We Built STEEL"
  2. "Why Most Cyber Risk Dashboards Mislead Boards"
  3. "Vendor and SBOM Risk as Board Topics, Not IT Noise"
- **No fabricated content**: Clearly labeled as placeholders

### Routing Updates (`src/App.tsx`)
- **Added new routes**:
  - `/steel-executive-diagnostic` → `SteelExecutiveDiagnostic` component
  - `/insights` → `InsightsPage` component
- **Maintained existing routes**: All existing URLs preserved (no breaking changes)

## Files Modified
1. `src/components/Navigation.tsx` - Navigation structure
2. `src/pages/LandingPage.tsx` - Hero, STEEL teaser, strategic capabilities
3. `src/pages/AboutPage.tsx` - STEEL origin story, separation statement
4. `src/pages/ServiceOffering.tsx` - Reorganized services
5. `src/pages/ContactPage.tsx` - Interactive onboarding demo + simple form toggle
6. `src/App.tsx` - Added new routes

## Files Created
1. `src/pages/SteelExecutiveDiagnostic.tsx` - New STEEL Executive Diagnostic page
2. `src/pages/InsightsPage.tsx` - New Insights/Resources page
3. `CHANGELOG.md` - This changelog

## Files NOT Modified
- `public/steel-core-full/` - Sealed STEEL engine (per plan requirements)
- Any scoring logic, weights, or questionnaire files in steel-core

## Content Guidelines Followed
- **No exaggeration**: All claims are factual and verifiable
- **No false statements**: Preserved accurate information (dates, certifications, capabilities)
- **Professional tone**: Clear, concise writing for senior decision-makers
- **No marketing fluff**: Focused on governance/strategy positioning
- **No product catalog**: Avoided turning site into product showcase

## Design System
- Maintained existing design system (colors, fonts, spacing)
- Reused existing components (Card, Button, etc.)
- No new UI libraries introduced
- Preserved existing functionality (form submissions, routing, etc.)

## Accessibility & SEO
- Semantic headings (h1, h2, h3) maintained
- Proper button elements used
- Alt text preserved on images
- Existing SEO tags maintained

## Next Steps
- Content review for accuracy
- Testing of interactive onboarding flow
- Content creation for Insights page (Q1 2026)

