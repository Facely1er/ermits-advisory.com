# STEEL™ 18-Question Assessment Status

## Overview

Based on the STEEL™ architecture with **three evaluation sublayers**, there is a logical structure for an **18-question assessment** that aligns with the Strategic Threat & Enterprise Evaluation Layer methodology.

---

## 📊 Assessment Structure

### Three Evaluation Sublayers

STEEL™ is structured around three internal evaluation sublayers:

1. **Strategic Evaluation Layer** (6 questions)
2. **Threat Evaluation Layer** (6 questions)  
3. **Enterprise Evaluation Layer** (6 questions)

**Total: 18 questions** (6 questions × 3 sublayers)

---

## 🔍 Current Status

### ✅ **FULLY IMPLEMENTED**

The 18-question assessment based on the three sublayers is **fully implemented** and available in the codebase.

### Implementation Details

1. **18-Question STEEL Assessment** ✅
   - Based on 3 evaluation sublayers (Strategic, Threat, Enterprise)
   - 6 questions per sublayer
   - Location: `/steel-evaluation` route
   - Component: `src/steel/SteelEvaluationPage.tsx`
   - Form Component: `src/steel/SteelQuestionnaireForm.tsx`
   - Config: `src/steel/steelQuestionnaireConfig.ts`
   - Scoring: `src/steel/steelScoring.ts`

2. **42-Question PESTEL Assessment** ✅
   - Based on 6 PESTEL factors (Political, Economic, Social, Technological, Environmental, Legal)
   - 7 questions per factor
   - Location: `/steel` route and `/public/steel/index.html`

3. **Three Sublayer Structure** ✅
   - Documented in `SteelMethodPage.tsx`
   - Described in `LandingPage.tsx`
   - **Implemented as functional questionnaire** (18-question version)

---

## 📋 Implemented 18-Question Structure

### Strategic Evaluation Layer (Questions 1-6)

**Focus:** Business and governance alignment

1. **S1_GOVERNANCE_ALIGNMENT** - Cyber risk integration into business governance
2. **S2_RISK_APPETITE_DEFINITION** - Defined and communicated risk appetite
3. **S3_LEADERSHIP_AWARENESS** - Executive understanding of cyber exposure
4. **S4_BOARD_ENGAGEMENT** - Structured board cyber reporting
5. **S5_REGULATORY_READINESS** - Regulatory and market expectations preparedness
6. **S6_STRATEGIC_ROADMAP_INTEGRATION** - Cybersecurity aligned with strategic objectives

### Threat Evaluation Layer (Questions 7-12)

**Focus:** External threat pressure

7. **T1_SECTOR_THREAT_AWARENESS** - Sector-specific threat actors and campaigns
8. **T2_ATTACK_SURFACE_VISIBILITY** - Digital footprint and vulnerability understanding
9. **T3_INCIDENT_READINESS** - Preparedness for high-impact incidents
10. **T4_CRISIS_DECISION_ARCHITECTURE** - Escalation paths and decision rights
11. **T5_THREAT_INTEL_UTILIZATION** - Threat intelligence consumption and action
12. **T6_VULNERABILITY_EXPLOIT_EXPOSURE** - Vulnerability identification and remediation

### Enterprise Evaluation Layer (Questions 13-18)

**Focus:** Internal capabilities and resilience

13. **E1_ARCHITECTURE_COHERENCE** - Security architecture definition and consistency
14. **E2_CONTROL_EFFECTIVENESS** - Foundational security controls implementation
15. **E3_DATA_FLOW_CLARITY** - Critical assets and data flows documentation
16. **E4_VENDOR_DEPENDENCIES** - Third-party and supply chain risk governance
17. **E5_WORKFLOW_MATURITY** - Defined workflows for change and access management
18. **E6_RESILIENCE_RECOVERY** - Recovery capability confidence during disruption

---

## 🎯 Scoring Structure

### Sublayer Scores

Each sublayer would generate a score (0-100):
- **Strategic Score (S-score)**: Average of questions 1-6
- **Threat Score (T-score)**: Average of questions 7-12
- **Enterprise Score (E-score)**: Average of questions 13-18

### STEEL Index Calculation

```
STEEL Index = Weighted aggregation of (S-score, T-score, E-score)
```

**Proposed Weights:**
- Strategic: 1.0x
- Threat: 1.2x (higher weight - dynamic threats)
- Enterprise: 1.1x (higher weight - foundational)

---

## 🔄 Relationship to Existing Assessments

### 18-Question vs 42-Question

| Aspect | 18-Question (Sublayers) | 42-Question (PESTEL) |
|--------|------------------------|---------------------|
| **Structure** | 3 sublayers × 6 questions | 6 factors × 7 questions |
| **Focus** | Strategic/Threat/Enterprise dimensions | PESTEL framework |
| **Time** | ~15-20 minutes | ~25-30 minutes |
| **Use Case** | Quick executive assessment | Comprehensive evaluation |
| **Status** | ✅ Implemented | ✅ Implemented |

### Complementary Use

- **18-question**: Quick executive-level assessment aligned with STEEL™ method
- **42-question**: Comprehensive PESTEL-based assessment
- Both feed into the same STEEL Index calculation
- Both can feed into STEEL Radar

---

## 📍 Implementation Status

### Current State

- ✅ **Conceptual framework exists** (three sublayers documented)
- ✅ **Scoring methodology defined** (STEEL Index with S/T/E scores)
- ✅ **18-question questionnaire FULLY IMPLEMENTED**
- ✅ **Route available:** `/steel-evaluation`
- ✅ **Component:** `SteelEvaluationPage.tsx` with `SteelQuestionnaireForm.tsx`
- ✅ **Question config:** `steelQuestionnaireConfig.ts` (all 18 questions defined)
- ✅ **Scoring engine:** `steelScoring.ts` (computes S/T/E scores and STEEL Index)
- ✅ **Radar visualization:** Integrated radar chart display

### Implementation Details

1. **Question Set Definition** ✅
   - ✅ All 18 questions defined (6 per sublayer)
   - ✅ Scoring rubrics implemented (1-5 scale with descriptive anchors)
   - ✅ Aligned with STEEL Index calculation

2. **Component Development** ✅
   - ✅ `SteelEvaluationPage.tsx` - Main page component
   - ✅ `SteelQuestionnaireForm.tsx` - Form with sublayer-based navigation
   - ✅ Integrated with scoring service

3. **Route Addition** ✅
   - ✅ Route: `/steel-evaluation`
   - ✅ Accessible via direct URL

4. **Integration** ✅
   - ✅ Uses `steelScoring.ts` for calculations
   - ✅ Generates STEEL Index (S/T/E scores)
   - ✅ Displays radar visualization
   - ⚠️ **Note:** Integration with STEEL Radar dashboard may need verification

---

## 💡 Recommendation

### Option 1: Implement 18-Question Assessment
- Create quick executive assessment aligned with three sublayers
- Faster completion time (15-20 minutes)
- Direct mapping to STEEL Index (S/T/E scores)
- Good for initial evaluations or periodic check-ins

### Option 2: Keep 42-Question Only
- More comprehensive coverage
- PESTEL framework alignment
- Already implemented and working
- Can still calculate S/T/E scores from PESTEL results

### Option 3: Hybrid Approach
- Offer both assessments
- 18-question for quick assessments
- 42-question for comprehensive evaluations
- Both generate STEEL Index

---

## 📝 Summary

**Status:** The 18-question STEEL assessment based on the three evaluation sublayers is **✅ FULLY IMPLEMENTED AND OPERATIONAL**.

**Current Implementation:**
- ✅ 42-question PESTEL assessment (fully implemented at `/steel`)
- ✅ Three sublayer framework (documented and implemented)
- ✅ STEEL Index with S/T/E scores (fully implemented)
- ✅ 18-question sublayer-based questionnaire (fully implemented at `/steel-evaluation`)

**Access Points:**
- **18-Question Assessment:** `/steel-evaluation`
- **42-Question Assessment:** `/steel`
- **STEEL Radar:** `/steel/radar`

**Files:**
- `src/steel/SteelEvaluationPage.tsx` - Main page
- `src/steel/SteelQuestionnaireForm.tsx` - Form component
- `src/steel/steelQuestionnaireConfig.ts` - Question definitions
- `src/steel/steelScoring.ts` - Scoring engine

**Next Steps (Optional Enhancements):**
1. Add navigation link to `/steel-evaluation` in main navigation
2. Verify integration with STEEL Radar dashboard
3. Add data persistence (localStorage) similar to 42-question version
4. Add export functionality (JSON/PDF)
5. Add progress tracking and auto-save

---

## 🔗 Related Documentation

- `STEEL_QUESTIONNAIRE_AND_RADAR_STATUS.md` - Status of 42-question assessment
- `src/pages/SteelMethodPage.tsx` - Three sublayer documentation
- `src/services/steelAssessmentService.ts` - Assessment service
- `src/types/steelAssessment.ts` - Type definitions

