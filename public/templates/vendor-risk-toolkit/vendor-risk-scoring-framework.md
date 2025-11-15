# Vendor Risk Scoring Framework

## Overview
This framework provides a systematic approach to scoring and tiering vendor risk based on multiple factors including inherent risk, security posture, and business criticality.

---

## Vendor Information

**Vendor Name:** _______________________
**Assessment Date:** _______________________
**Assessor:** _______________________
**Next Review Date:** _______________________

---

## Risk Scoring Methodology

### Three-Dimensional Risk Assessment

1. **Inherent Risk**: Risk based on data access and processing
2. **Residual Risk**: Risk after considering vendor's security controls
3. **Business Criticality**: Impact of vendor failure on business operations

**Final Risk Score = (Inherent Risk × 40%) + (Residual Risk × 30%) + (Business Criticality × 30%)**

---

## Part 1: Inherent Risk Assessment

### 1.1 Data Type and Sensitivity

| Data Type | Access Level | Score |
|-----------|-------------|-------|
| No sensitive data | N/A | 0 |
| Public data only | Read | 1 |
| Internal business data | Read | 2 |
| Internal business data | Write/Modify | 3 |
| Customer PII | Read | 4 |
| Customer PII | Write/Modify/Store | 5 |
| Financial data (credit cards, bank accounts) | Read | 5 |
| Financial data | Write/Modify/Store | 6 |
| Health information (PHI/ePHI) | Read | 6 |
| Health information | Write/Modify/Store | 7 |
| Credentials/authentication data | Any | 7 |
| Intellectual property/trade secrets | Read | 5 |
| Intellectual property/trade secrets | Write/Modify/Store | 6 |
| Multiple sensitive data types | Any | Add +2 |

**Data Sensitivity Score:** ______ / 10

### 1.2 Data Volume

| Volume | Score |
|--------|-------|
| < 100 records | 1 |
| 100 - 1,000 records | 2 |
| 1,000 - 10,000 records | 3 |
| 10,000 - 100,000 records | 4 |
| 100,000 - 1,000,000 records | 5 |
| > 1,000,000 records | 6 |

**Data Volume Score:** ______ / 6

### 1.3 System Access Level

| Access Type | Score |
|------------|-------|
| No system access | 0 |
| Read-only access to non-critical systems | 1 |
| Read-only access to critical systems | 2 |
| User-level access to non-critical systems | 2 |
| User-level access to critical systems | 3 |
| Administrative access to non-critical systems | 4 |
| Administrative access to critical systems | 5 |
| Network level access | 5 |
| Direct database access | 6 |
| Source code access | 5 |
| Infrastructure/cloud environment access | 6 |

**System Access Score:** ______ / 6

### 1.4 Regulatory Scope

**Select all that apply and sum scores:**

| Regulation | Applicable? | Score |
|-----------|------------|-------|
| GDPR | Yes / No | 3 |
| HIPAA | Yes / No | 3 |
| PCI-DSS | Yes / No | 3 |
| SOX | Yes / No | 2 |
| GLBA | Yes / No | 2 |
| CCPA/CPRA | Yes / No | 2 |
| FERPA | Yes / No | 2 |
| Industry-specific regulations | Yes / No | 2 |

**Regulatory Score:** ______ / 10 (cap at 10)

### 1.5 Geographic Considerations

| Factor | Score |
|--------|-------|
| Data processed/stored in high-risk countries | 3 |
| Data processed/stored in countries with weak data protection laws | 2 |
| Data crosses international borders | 2 |
| Vendor located in high-risk jurisdiction | 2 |
| None of the above | 0 |

**Geographic Risk Score:** ______ / 9 (sum applicable, cap at 9)

### Inherent Risk Calculation

| Factor | Score | Weight | Weighted Score |
|--------|-------|--------|---------------|
| Data Sensitivity | ____/10 | × 35% | ____ |
| Data Volume | ____/6 | × 15% | ____ |
| System Access | ____/6 | × 25% | ____ |
| Regulatory Scope | ____/10 | × 15% | ____ |
| Geographic Risk | ____/9 | × 10% | ____ |
| **Inherent Risk Total** | | | **____/10** |

---

## Part 2: Residual Risk Assessment

### 2.1 Security Questionnaire Score

**From Vendor Security Questionnaire:**
- **Total Score:** ______ / 300
- **Percentage:** ______%

**Convert to 10-point scale:**
- 90-100% = 10 points (Excellent)
- 80-89% = 8 points (Good)
- 70-79% = 6 points (Adequate)
- 60-69% = 4 points (Needs Improvement)
- 50-59% = 2 points (Poor)
- < 50% = 0 points (Unacceptable)

**Security Posture Score:** ______ / 10

### 2.2 Certifications & Compliance

**Award points for each applicable certification:**

| Certification | Points |
|--------------|--------|
| SOC 2 Type II (current) | 3 |
| ISO 27001 (current) | 3 |
| PCI-DSS (if applicable) | 2 |
| HIPAA compliant (if applicable) | 2 |
| FedRAMP (if applicable) | 3 |
| NIST CSF aligned | 1 |
| Industry-specific certification | 1 |
| No certifications | 0 |

**Certification Score:** ______ / 10 (cap at 10)

### 2.3 Incident History

| Factor | Score |
|--------|-------|
| No known security incidents | 10 |
| Minor incident > 2 years ago, lessons learned demonstrated | 8 |
| Minor incident in past 2 years | 6 |
| Moderate incident > 2 years ago | 5 |
| Moderate incident in past 2 years | 3 |
| Major breach/incident > 2 years ago | 2 |
| Major breach/incident in past 2 years | 0 |
| Multiple incidents in past 2 years | 0 |

**Incident History Score:** ______ / 10

### 2.4 Security Maturity

| Maturity Level | Description | Score |
|---------------|-------------|-------|
| Advanced | Proactive security program, continuous improvement, industry leader | 10 |
| Managed | Formal security program, regular assessments, monitored and improved | 8 |
| Defined | Documented security policies and procedures, implemented and followed | 6 |
| Developing | Basic security measures in place, inconsistent implementation | 4 |
| Initial | Ad-hoc security, no formal program | 2 |
| Non-existent | No security measures | 0 |

**Security Maturity Score:** ______ / 10

### 2.5 Audit Rights & Transparency

| Factor | Score |
|--------|-------|
| Unlimited audit rights, full transparency | 3 |
| Annual audit rights, good transparency | 2 |
| Limited audit rights or transparency | 1 |
| No audit rights, poor transparency | 0 |

**Transparency Score:** ______ / 3

### Residual Risk Calculation

**Residual Risk = 10 - (Average of Security Factors)**

| Factor | Score | Weight | Weighted Score |
|--------|-------|--------|---------------|
| Security Posture (from questionnaire) | ____/10 | × 35% | ____ |
| Certifications | ____/10 | × 25% | ____ |
| Incident History | ____/10 | × 20% | ____ |
| Security Maturity | ____/10 | × 15% | ____ |
| Transparency | ____/3 → ____/10 | × 5% | ____ |
| **Security Average** | | | **____/10** |

**Residual Risk = 10 - Security Average = ______ / 10**

*Higher residual risk = weaker security controls*

---

## Part 3: Business Criticality Assessment

### 3.1 Service Criticality

| Criticality Level | Score |
|------------------|-------|
| Mission-critical (business cannot operate without) | 10 |
| Business-critical (major impact if unavailable) | 8 |
| Important (moderate impact on operations) | 5 |
| Supporting (minor impact on operations) | 3 |
| Non-critical (no operational impact) | 1 |

**Service Criticality Score:** ______ / 10

### 3.2 Financial Impact

**Annual contract value or spend:**

| Contract Value | Score |
|---------------|-------|
| > $1,000,000 | 5 |
| $500,000 - $1,000,000 | 4 |
| $100,000 - $499,999 | 3 |
| $50,000 - $99,999 | 2 |
| < $50,000 | 1 |

**Financial Impact Score:** ______ / 5

### 3.3 Business Dependency

| Factor | Score |
|--------|-------|
| Single source / no alternative vendors available | 4 |
| Limited alternatives, difficult to switch | 3 |
| Multiple alternatives exist, moderate switching cost | 2 |
| Easy to replace, low switching cost | 1 |

**Dependency Score:** ______ / 4

### 3.4 Integration Complexity

| Integration Level | Score |
|------------------|-------|
| Deep integration with core systems | 3 |
| Moderate integration | 2 |
| Minimal integration or standalone | 1 |

**Integration Score:** ______ / 3

### 3.5 User Impact

| User Impact | Score |
|------------|-------|
| All users/customers directly affected | 3 |
| Majority of users affected | 2 |
| Limited user group affected | 1 |
| Internal only or minimal users | 0.5 |

**User Impact Score:** ______ / 3

### Business Criticality Calculation

| Factor | Score | Weight | Weighted Score |
|--------|-------|--------|---------------|
| Service Criticality | ____/10 | × 40% | ____ |
| Financial Impact | ____/5 → ____/10 | × 20% | ____ |
| Business Dependency | ____/4 → ____/10 | × 20% | ____ |
| Integration Complexity | ____/3 → ____/10 | × 10% | ____ |
| User Impact | ____/3 → ____/10 | × 10% | ____ |
| **Business Criticality Total** | | | **____/10** |

---

## Final Risk Score Calculation

| Component | Score | Weight | Weighted Score |
|-----------|-------|--------|---------------|
| **Inherent Risk** | ____/10 | × 40% | ____ |
| **Residual Risk** | ____/10 | × 30% | ____ |
| **Business Criticality** | ____/10 | × 30% | ____ |
| | | **TOTAL** | **____/10** |

---

## Risk Tier Assignment

### Risk Tiers

| Tier | Score Range | Risk Level | Requirements |
|------|------------|-----------|-------------|
| **Tier 1** | 8.0 - 10.0 | Critical Risk | Executive approval, quarterly reviews, enhanced monitoring, dedicated security contact |
| **Tier 2** | 6.0 - 7.9 | High Risk | Director approval, semi-annual reviews, regular monitoring |
| **Tier 3** | 4.0 - 5.9 | Medium Risk | Manager approval, annual reviews, periodic monitoring |
| **Tier 4** | 0 - 3.9 | Low Risk | Standard approval, biennial reviews, standard monitoring |

**Assigned Tier:** ______ (Tier 1 / Tier 2 / Tier 3 / Tier 4)

---

## Risk Tier Management Requirements

### Tier 1 - Critical Risk Vendors

**Assessment Frequency:**
- [ ] Full security assessment: Quarterly
- [ ] Security questionnaire update: Quarterly
- [ ] SOC 2 review: Annual (current report required)

**Monitoring Requirements:**
- [ ] Continuous security monitoring via security ratings service
- [ ] Real-time breach notifications
- [ ] Regular security meetings (monthly/quarterly)
- [ ] Dedicated vendor security contact assigned

**Contract Requirements:**
- [ ] Comprehensive security addendum
- [ ] Right to audit (on-demand)
- [ ] Security breach notification (within 24 hours)
- [ ] Cyber insurance requirement ($5M+ coverage)
- [ ] Business associate agreement (if HIPAA applicable)
- [ ] Data processing agreement (if GDPR applicable)
- [ ] Service level agreements with security metrics

**Approval Requirements:**
- [ ] Executive leadership approval (CISO, CIO, or CEO)
- [ ] Legal review
- [ ] Privacy officer review (if applicable)
- [ ] Risk committee review

### Tier 2 - High Risk Vendors

**Assessment Frequency:**
- [ ] Full security assessment: Semi-annually
- [ ] Security questionnaire update: Semi-annually
- [ ] SOC 2 review: Annual

**Monitoring Requirements:**
- [ ] Security ratings monitoring
- [ ] Breach notifications
- [ ] Quarterly security check-ins

**Contract Requirements:**
- [ ] Security addendum
- [ ] Right to audit (annual)
- [ ] Breach notification (within 48 hours)
- [ ] Cyber insurance requirement ($2M+ coverage)

**Approval Requirements:**
- [ ] Director-level approval (IT, Security, or Risk)
- [ ] Legal review for data processing

### Tier 3 - Medium Risk Vendors

**Assessment Frequency:**
- [ ] Security questionnaire: Annually
- [ ] SOC 2 review: If available

**Monitoring Requirements:**
- [ ] Security ratings monitoring (quarterly checks)
- [ ] Breach notifications

**Contract Requirements:**
- [ ] Standard security terms
- [ ] Breach notification (within 72 hours)
- [ ] Right to audit (upon reasonable request)

**Approval Requirements:**
- [ ] Manager-level approval
- [ ] Legal review if processing sensitive data

### Tier 4 - Low Risk Vendors

**Assessment Frequency:**
- [ ] Initial security questionnaire
- [ ] Re-assessment every 2 years or upon contract renewal

**Monitoring Requirements:**
- [ ] Passive monitoring
- [ ] Breach notification tracking

**Contract Requirements:**
- [ ] Standard terms and conditions
- [ ] Basic security requirements

**Approval Requirements:**
- [ ] Standard procurement approval

---

## Risk Treatment Plan

### Risk Mitigation Strategies

| Risk | Mitigation Strategy | Owner | Target Date | Status |
|------|-------------------|-------|------------|--------|
| | Avoid / Accept / Mitigate / Transfer | | | |
| | | | | |

### Compensating Controls

**If vendor has security gaps, identify compensating controls:**

| Gap | Compensating Control | Implementation Date | Verification |
|-----|---------------------|-------------------|-------------|
| | | | |
| | | | |

---

## Vendor Risk Summary

### Risk Profile

**Inherent Risk:** ______ / 10 - [Low / Medium / High / Critical]
**Residual Risk:** ______ / 10 - [Low / Medium / High / Critical]
**Business Criticality:** ______ / 10 - [Low / Medium / High / Critical]

**Final Risk Score:** ______ / 10
**Risk Tier:** Tier ______ ([Low / Medium / High / Critical] Risk)

### Key Risk Factors

**Top 3 Risk Drivers:**
1. __________
2. __________
3. __________

**Top 3 Strengths:**
1. __________
2. __________
3. __________

### Recommendation

- [ ] **Approve** - Risk is acceptable, proceed with vendor
- [ ] **Approve with Conditions** - Approve subject to implementation of compensating controls
- [ ] **Conditional Approval** - Vendor must remediate identified gaps within [X] days
- [ ] **Reject** - Risk is unacceptable, do not proceed

**Conditions/Requirements:**
__________________________________________________________________________

---

## Approval Sign-Off

### Risk Assessment

**Assessed By:** _______________________
**Title:** _______________________
**Date:** _______________________

### Risk Acceptance (Tier 1 & 2 only)

**I acknowledge and accept the identified risks associated with this vendor.**

**Approved By:** _______________________
**Title:** _______________________
**Date:** _______________________

### Next Review

**Scheduled Review Date:** _______________________
**Review Owner:** _______________________

---

## Notes & Comments

__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________

---

**ERMITS Advisory Services**
Vendor Risk Management Toolkit
Version 1.0 | 2024
