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

### ❌ **NOT YET IMPLEMENTED**

The 18-question assessment based on the three sublayers is **not currently implemented** in the codebase.

### What Exists Instead

1. **42-Question PESTEL Assessment** ✅
   - Based on 6 PESTEL factors (Political, Economic, Social, Technological, Environmental, Legal)
   - 7 questions per factor
   - Location: `/steel` route and `/public/steel/index.html`

2. **Three Sublayer Structure** ✅
   - Documented in `SteelMethodPage.tsx`
   - Described in `LandingPage.tsx`
   - Used for conceptual framework, not as a questionnaire structure

---

## 📋 Proposed 18-Question Structure

### Strategic Evaluation Layer (Questions 1-6)

**Focus:** Business and governance alignment

1. Business and mission alignment
2. Governance structures and accountability
3. Risk appetite, tolerance, and decision thresholds
4. Regulatory and market expectations
5. Executive and board priorities
6. Strategic cyber risk integration

### Threat Evaluation Layer (Questions 7-12)

**Focus:** External threat pressure

7. Sector-specific threat landscape and actor profiles
8. Ransomware, data breach, and fraud exposure
9. Attack surface and vulnerability posture
10. Incident readiness and response scenarios
11. Impact of emerging vulnerabilities and campaigns
12. Threat intelligence and monitoring capabilities

### Enterprise Evaluation Layer (Questions 13-18)

**Focus:** Internal capabilities and resilience

13. Controls, architecture, and security engineering maturity
14. Processes and workflows across teams and business units
15. Data flows, critical assets, and "crown jewels"
16. Vendor, partner, and supply chain dependencies
17. Operational resilience, continuity, and recovery capabilities
18. Technology stack and infrastructure maturity

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
| **Status** | ❌ Not implemented | ✅ Implemented |

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
- ❌ **18-question questionnaire NOT implemented**
- ❌ **No dedicated route or component for 18-question version**

### What Would Be Needed

1. **Question Set Definition**
   - Define 6 questions per sublayer
   - Create scoring rubrics (1-10 scale)
   - Align with existing STEEL Index calculation

2. **Component Development**
   - Create `Steel18QuestionAssessment.tsx` component
   - Implement sublayer-based navigation
   - Integrate with existing scoring service

3. **Route Addition**
   - Add route: `/steel/quick-assessment` or `/steel/18-question`
   - Link from navigation or as alternative to 42-question

4. **Integration**
   - Use existing `steelAssessmentService.ts`
   - Feed into STEEL Radar
   - Generate STEEL Index (S/T/E scores)

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

**Status:** The 18-question STEEL assessment based on the three evaluation sublayers is **conceptually defined but not implemented**.

**Current Implementation:**
- ✅ 42-question PESTEL assessment (fully implemented)
- ✅ Three sublayer framework (documented)
- ✅ STEEL Index with S/T/E scores (conceptually defined)
- ❌ 18-question sublayer-based questionnaire (not implemented)

**Next Steps:**
1. Define the 18 questions (6 per sublayer)
2. Create assessment component
3. Integrate with existing scoring service
4. Add route and navigation link
5. Test and validate scoring

---

## 🔗 Related Documentation

- `STEEL_QUESTIONNAIRE_AND_RADAR_STATUS.md` - Status of 42-question assessment
- `src/pages/SteelMethodPage.tsx` - Three sublayer documentation
- `src/services/steelAssessmentService.ts` - Assessment service
- `src/types/steelAssessment.ts` - Type definitions

