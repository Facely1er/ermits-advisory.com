# STEEL™ Official Description & Architecture
## Strategic Threat & Enterprise Evaluation Layer

**Version:** 2.0 - Updated with Complete Implementation Details  
**Last Updated:** November 2024  
**Status:** Production Ready

---

## 🎯 EXECUTIVE SUMMARY

**STEEL™** (Strategic Threat & Enterprise Evaluation Layer) is ERMITS Corporation's proprietary multi-factor assessment engine that transforms fragmented risk signals into unified, actionable enterprise resilience intelligence.

STEEL powers the entire ERMITS ecosystem by converting complex threat landscapes, vendor exposures, privacy risks, ESG metrics, and governance data into a single composite score that drives strategic decision-making across all ERMITS products.

---

## 📊 WHAT IS STEEL?

### The Intelligence Engine

STEEL is **not a product**—it is the **intelligence backbone** that all ERMITS products consume.

Think of STEEL as the "operating system kernel" for enterprise risk:
- **Data sources** feed raw risk signals into STEEL
- **STEEL core** processes, normalizes, and scores these signals using PESTEL methodology
- **ERMITS products** consume STEEL's outputs to deliver their specific functions

```
Raw Risk Data → STEEL Processing → Unified Scores → Product Actions
```

### PESTEL-Based Methodology

STEEL evaluates enterprise resilience across **six critical factors**:

| Factor | Focus Area | Weighting |
|--------|------------|-----------|
| **Political** | Regulatory compliance, policy changes, government relations | 1.0x |
| **Economic** | Budget impact, financial risks, market conditions | 1.0x |
| **Social** | Human factors, organizational culture, stakeholder awareness | 1.0x |
| **Technological** | Innovation threats, digital transformation, emerging risks | **1.2x** |
| **Environmental** | Sustainability, ESG compliance, climate-related cyber risks | 0.9x |
| **Legal** | Legal requirements, data protection, liability management | **1.1x** |

**Why Weighted?** Technological and Legal factors receive higher weights (20% and 10% respectively) because they represent the most dynamic and high-impact risk vectors in modern enterprise environments.

---

## 🏗️ STEEL ARCHITECTURE

### Three-Layer Processing Model

```
┌─────────────────────────────────────────────────────────────┐
│                     DATA SOURCES                            │
├─────────────────────────────────────────────────────────────┤
│ Threat Feeds | SBOM Data | Vendor Data | Policies          │
│ Geo Events | ESG/CSR | Privacy Reg | Tech Stack            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  INGESTION LAYER                            │
├─────────────────────────────────────────────────────────────┤
│         Normalization & PESTEL Classification               │
│    (Maps diverse data to Political/Economic/Social/Tech/    │
│               Environmental/Legal categories)               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    STEEL CORE                               │
├─────────────────────────────────────────────────────────────┤
│  • Weighting Engine (applies factor-specific weights)      │
│  • Sector Calibration (adjusts for industry context)       │
│  • Composite Risk Modeling (generates unified scores)      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   OUTPUT LAYER                              │
├─────────────────────────────────────────────────────────────┤
│  • STEEL Scores (0-100 composite + 6 factor scores)        │
│  • Exposure Vector Mapping (risk distribution analysis)    │
│  • Maturity Level Index (capability benchmarking)          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              ERMITS PRODUCT LAYER                           │
├─────────────────────────────────────────────────────────────┤
│ CyberCaution | CyberCorrect | VendorSoluce | CyberSoluce   │
│ TechnoSoluce | ImpactSoluce | EduSoluce | SocialCaution    │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow Detail

**1. Data Ingestion (8 Primary Sources)**
- **Threat Feeds**: CISA KEV, Ransomware.live, MITRE ATT&CK, NVD
- **SBOM Data**: Software composition, dependency trees, CVE mapping
- **Vendor Data**: Third-party security posture, financial health, incidents
- **Policies**: Internal governance controls, compliance frameworks
- **Geo Events**: Regional threat landscape, geopolitical risks
- **ESG/CSR**: Environmental metrics, social responsibility data
- **Privacy Regulations**: GDPR, CCPA, LGPD, DPDP compliance status
- **Tech Stack**: Infrastructure inventory, application portfolio

**2. PESTEL Classification**
Each data source is mapped to one or more PESTEL factors:
- Regulatory changes → Political
- Budget impacts → Economic
- Workforce risks → Social
- Zero-day vulnerabilities → Technological
- Climate events → Environmental
- Data breach litigation → Legal

**3. Scoring Calculation**
```javascript
// Factor Score (0-100)
FactorScore = (Sum of 7 factor questions / 70) × 100

// Composite STEEL Score (0-100)
CompositeScore = (
  (Political × 1.0) + 
  (Economic × 1.0) + 
  (Social × 1.0) + 
  (Technological × 1.2) + 
  (Environmental × 0.9) + 
  (Legal × 1.1)
) / 6.2
```

**4. Risk Categorization**
- **80-100**: LOW RISK (Resilient)
- **60-79**: MODERATE RISK (Managed)
- **40-59**: ELEVATED RISK (Gaps Present)
- **0-39**: HIGH RISK (Critical Action Needed)

---

## 🔬 STEEL ASSESSMENT TOOL

### Executive Intelligence Questionnaire

STEEL includes a **42-question executive assessment** (7 questions per PESTEL factor) that can be completed in **25-30 minutes**.

**Sample Questions by Factor:**

**Political (Q1-7)**
> "How well does your organization track and respond to cybersecurity regulations and policy changes?"
- [1] Reactive - We respond only when violations occur
- [3] Basic - We monitor major regulations but lack systematic tracking
- [7] Managed - We have dedicated compliance monitoring with quarterly reviews
- [10] Optimized - Automated regulatory intelligence with proactive policy adaptation

**Economic (Q8-14)**
> "How well does your organization quantify cybersecurity risk in financial terms?"
- [1] None - Security risks not translated to financial impact
- [3] Basic - Rough estimates for major incidents only
- [7] Structured - Regular risk quantification using industry frameworks
- [10] Optimized - Real-time financial risk modeling integrated with business planning

**Technological (Q22-28)**
> "How well does your organization secure cloud infrastructure?"
- [1] Unmanaged - Cloud security not differentiated from on-premises
- [3] Basic - Standard cloud provider default security settings
- [7] Managed - Cloud security posture management (CSPM) tools deployed
- [10] Optimized - Multi-cloud security with continuous compliance validation

[Complete 42-question set available in STEEL Assessment Platform]

### Assessment Deliverables

Upon completion, executives receive:

1. **Composite STEEL Score** (0-100 with risk category)
2. **Six Factor Breakdown** (individual PESTEL scores)
3. **Visual Dashboard** (radar chart, trend analysis)
4. **Strategic Recommendations** (prioritized by factor gaps)
5. **Industry Benchmark Comparison** (sector-adjusted scores)
6. **PDF Executive Report** (board-ready presentation)

---

## 🎯 HOW STEEL POWERS ERMITS PRODUCTS

### Product Integration Matrix

| Product | STEEL Input | Product Output |
|---------|-------------|----------------|
| **CyberCaution** | Technological + Political factors | Threat weather forecasting, ransomware readiness scoring |
| **CyberCorrect** | Legal + Political factors | Privacy exposure mapping, GDPR/CCPA compliance status |
| **VendorSoluce** | Economic + Social factors | Third-party risk index, supply chain exposure scoring |
| **CyberSoluce** | All 6 factors | NIST CSF maturity assessment, gap analysis roadmap |
| **TechnoSoluce** | Technological + Legal factors | SBOM vulnerability prioritization, component risk mapping |
| **ImpactSoluce** | Environmental + Social factors | ESG risk alignment, sustainability compliance scoring |
| **EduSoluce** | All 6 factors | Risk-calibrated training, awareness program customization |
| **SocialCaution** | Legal + Social factors | Consumer privacy risk education, personal data protection |

### Example: CyberCaution Threat Weather

```
STEEL Inputs → CyberCaution Processing → Threat Weather Output

Political Factor (72/100) + 
Technological Factor (58/100)
    ↓
Weighted Threat Analysis
    ↓
CyberCaution displays:
- "ELEVATED threat level for your sector"
- "Ransomware readiness: 65% (needs improvement)"
- "Top 3 vulnerabilities requiring immediate attention"
```

### Example: VendorSoluce Risk Scoring

```
STEEL Inputs → VendorSoluce Processing → Vendor Risk Output

Economic Factor (vendor financial health) +
Social Factor (vendor workforce stability)
    ↓
Supply Chain Risk Model
    ↓
VendorSoluce displays:
- "Vendor XYZ: Risk Score 42/100 (ELEVATED)"
- "Financial instability detected - recommend contingency planning"
- "Workforce turnover above industry average"
```

---

## 🔥 STEEL COMPETITIVE DIFFERENTIATION

### The Market Gap

**Traditional Approach (Competitors):**
```
Fragmented Tools → Manual Correlation → Inconsistent Scoring
├─ Point solution for cyber risk (SecurityScorecard)
├─ Separate tool for privacy compliance (OneTrust)
├─ Different platform for vendor risk (Prevalent)
└─ Yet another system for ESG (Workiva)

Result: Siloed data, incompatible scores, no unified view
```

**ERMITS STEEL Approach:**
```
Unified Intelligence → Automated Processing → Consistent Scoring
└─ Single STEEL engine scoring all risk domains
   ├─ CyberCaution consumes STEEL for threat intelligence
   ├─ CyberCorrect consumes STEEL for privacy scoring
   ├─ VendorSoluce consumes STEEL for supply chain risk
   └─ All products share the same risk foundation

Result: Single source of truth, comparable scores, unified strategy
```

### Why STEEL Wins

| Capability | Competitors | STEEL |
|------------|-------------|-------|
| **Unified Risk Model** | No - fragmented across tools | Yes - single composite score |
| **PESTEL Integration** | No - cyber-only or compliance-only | Yes - holistic business risk view |
| **Real-time Updates** | Manual refresh cycles | Automated continuous scoring |
| **Cross-domain Correlation** | No - siloed analytics | Yes - network effect intelligence |
| **Framework Alignment** | Limited - often proprietary | Native NIST, ISO, GDPR, CMMC, ESG |
| **Sector Calibration** | Generic scoring | Industry-specific normalization |
| **Executive Presentation** | Technical dashboards | Board-ready strategic intelligence |

---

## 📈 STEEL VALUE PROPOSITION

### For CISOs & Security Teams
> "STEEL translates 50+ data sources into a single score I can defend to the board—no more explaining why our SecurityScorecard rating differs from our ISO audit."

**Key Benefits:**
- Unified risk language across departments
- Automated evidence collection for audits
- Faster incident impact assessment
- Data-driven budget justification

### For CEOs & Boards
> "STEEL gives me the cyber risk clarity I need without the technical jargon—just a clear score and strategic recommendations."

**Key Benefits:**
- Single enterprise resilience metric
- Competitive benchmarking against peers
- Strategic risk visibility (not just technical details)
- ROI demonstration for security investments

### For Compliance Officers
> "STEEL maps our controls to 12 different frameworks simultaneously—what used to take weeks now updates automatically."

**Key Benefits:**
- Multi-framework compliance tracking (NIST, ISO, GDPR, CMMC, etc.)
- Automated gap analysis
- Continuous compliance monitoring
- Audit-ready evidence packages

### For Procurement & Vendor Teams
> "STEEL scores our vendors the same way we score ourselves—finally, apples-to-apples third-party risk comparison."

**Key Benefits:**
- Standardized vendor risk assessment
- Supply chain exposure visibility
- Automated vendor onboarding scoring
- Contract security requirements alignment

---

## 🚀 DEPLOYMENT & IMPLEMENTATION

### STEEL Assessment Platform
- **Deployment**: Standalone HTML5 application (zero installation)
- **Hosting**: GitHub Pages, Netlify, or customer infrastructure
- **Data**: Client-side processing with optional cloud sync
- **Privacy**: Zero data transmission in offline mode
- **Time to Value**: 30 minutes from deployment to first assessment

### Integration Options

**Option 1: Standalone Assessment**
```
Deploy STEEL Assessment → Complete 42 questions → Generate report
Use Case: Executive risk briefings, board presentations, annual assessments
```

**Option 2: Product Integration**
```
ERMITS Product → Calls STEEL API → Receives scores → Displays in product UI
Use Case: CyberCaution threat scoring, VendorSoluce risk indexing
```

**Option 3: Ecosystem Integration**
```
Multiple products → Shared STEEL backend → Unified scoring → Cross-product analytics
Use Case: Full ERMITS deployment with network effect intelligence
```

### Technical Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Optional: Internet connection for live threat feed integration
- Optional: PDF generation library for report exports

---

## 📊 STEEL SCORING METHODOLOGY (TECHNICAL)

### Assessment Calculation Detail

**Input:** 42 questions, 7 per factor, scored 1-10 per question

**Step 1: Factor Score Calculation**
```
Raw Factor Score = Sum of 7 question values (range: 7-70)
Normalized Factor Score = (Raw Score / 70) × 100
Result: 6 factor scores, each 0-100
```

**Step 2: Weighted Composite Calculation**
```
Weighted Sum = 
  (Political × 1.0) + 
  (Economic × 1.0) + 
  (Social × 1.0) + 
  (Technological × 1.2) + 
  (Environmental × 0.9) + 
  (Legal × 1.1)

Total Weight = 1.0 + 1.0 + 1.0 + 1.2 + 0.9 + 1.1 = 6.2

Composite STEEL Score = Weighted Sum / 6.2
Result: Single composite score, 0-100
```

**Step 3: Risk Categorization**
```javascript
function getRiskCategory(score) {
  if (score >= 80) return { level: 'LOW', color: '#16a34a' };
  if (score >= 60) return { level: 'MODERATE', color: '#eab308' };
  if (score >= 40) return { level: 'ELEVATED', color: '#f97316' };
  return { level: 'HIGH', color: '#dc2626' };
}
```

**Step 4: Recommendation Generation**
```javascript
// Generate recommendations for factors scoring < 60
for (let factor in factorScores) {
  if (factorScores[factor] < 60) {
    const priority = factorScores[factor] < 40 ? 'CRITICAL' : 'HIGH';
    recommendations.push({
      factor: factor,
      priority: priority,
      score: factorScores[factor],
      message: generateRecommendation(factor, score)
    });
  }
}
```

---

## 🎯 STEEL ROADMAP

### Current Capabilities (v2.0)
✅ 42-question PESTEL assessment  
✅ Weighted composite scoring algorithm  
✅ Interactive web-based assessment platform  
✅ Real-time progress tracking & auto-save  
✅ PDF report generation  
✅ Risk category visualization  
✅ Strategic recommendations engine  

### Planned Enhancements (v2.1-3.0)

**Q1 2025**
- [ ] Industry-specific question sets (Healthcare, Finance, Manufacturing)
- [ ] Automated threat feed integration (CISA KEV, NVD)
- [ ] Historical trend analysis (track score changes over time)
- [ ] Peer benchmarking (anonymous industry comparisons)

**Q2 2025**
- [ ] AI-powered recommendation engine
- [ ] NIST CSF 2.0 control mapping
- [ ] ISO 27001:2022 control mapping
- [ ] Automated evidence collection

**Q3 2025**
- [ ] Real-time PESTEL signal monitoring
- [ ] Predictive risk forecasting (30/60/90-day projections)
- [ ] Integration with ERMITS product ecosystem
- [ ] API for custom integrations

**Q4 2025**
- [ ] Board presentation automation
- [ ] Multi-language support
- [ ] Mobile assessment app
- [ ] Executive coaching/advisory integration

---

## 📚 STEEL KNOWLEDGE BASE SUMMARY

### What is STEEL?
STEEL is the strategic intelligence engine behind the ERMITS ecosystem. It transforms threat intelligence, vendor data, privacy indicators, ESG metrics, and governance evidence into a single enterprise resilience score.

### What does STEEL do?
STEEL evaluates organizations across six PESTEL factors (Political, Economic, Social, Technological, Environmental, Legal), generating a 0-100 composite score plus factor-specific scores that drive all ERMITS product intelligence.

### Who uses STEEL?
- **CISOs & CIOs** - Unified risk visibility and strategic planning
- **Security & IT teams** - Operational prioritization and gap analysis
- **Compliance officers** - Multi-framework compliance tracking
- **Procurement & vendor managers** - Standardized third-party risk assessment
- **Executives and boards** - Strategic risk intelligence and decision support
- **Consultants** - Client assessment and advisory services

### What problems does STEEL solve?
- **Fragmented risk intelligence** → Single unified score
- **Incomparable vendor assessments** → Standardized scoring methodology
- **Technical complexity** → Executive-friendly presentation
- **Manual correlation** → Automated cross-domain analysis
- **Framework conflicts** → Native multi-framework alignment
- **Limited visibility** → Real-time risk monitoring

### How does STEEL integrate with ERMITS products?
Every ERMITS product consumes STEEL scores and mappings, ensuring consistent results, unified recommendations, and seamless cross-platform analytics. Products share intelligence through STEEL, creating network effect improvements.

---

## 🔐 STEEL TRADEMARK & INTELLECTUAL PROPERTY

**STEEL™** is a trademark of ERMITS Corporation.

**Full Name:** Strategic Threat & Enterprise Evaluation Layer  
**Short Name:** STEEL or STEEL™  
**Usage:** Intelligence engine, assessment methodology, scoring framework  

**Authorized Usage:**
- "Powered by STEEL™"
- "STEEL-scored assessment"
- "STEEL composite score"
- "Based on STEEL methodology"

**Unauthorized Usage:**
- Using STEEL as a standalone product name
- Claiming STEEL certification without ERMITS authorization
- Reverse-engineering STEEL scoring algorithms

---

## 📞 STEEL CONTACT & SUPPORT

**For STEEL Licensing:**  
advisory@ermits.com

**For Technical Integration:**  
developers@ermits.com

**For Assessment Support:**  
support@ermits.com

**Documentation:**  
docs.ermits.com/steel

**Assessment Platform:**  
assessment.ermits.com/steel

---

## ✅ OFFICIAL STEEL DESCRIPTION BLOCK

**For Website & Marketing Materials:**

> STEEL™ (Strategic Threat & Enterprise Evaluation Layer) is the proprietary intelligence engine powering the ERMITS ecosystem. Using a PESTEL-based methodology, STEEL transforms complex risk signals from threat feeds, vendor data, privacy indicators, ESG metrics, and governance frameworks into a unified enterprise resilience score. This single composite score—ranging from 0 to 100—drives strategic decision-making across all ERMITS products, providing executives with the clarity needed to transform cybersecurity from defensive necessity into competitive advantage.

**For Technical Documentation:**

> STEEL processes risk intelligence through a three-layer architecture: (1) Data Ingestion normalizes diverse sources to PESTEL categories, (2) STEEL Core applies weighted scoring and sector calibration, (3) Output Layer generates composite scores, exposure vectors, and maturity indices consumed by CyberCaution, CyberCorrect, VendorSoluce, CyberSoluce, TechnoSoluce, ImpactSoluce, EduSoluce, and SocialCaution.

**For Executive Briefings:**

> STEEL is ERMITS' answer to fragmented cybersecurity intelligence. While competitors force you to juggle separate scores from different tools, STEEL provides a single, board-ready metric that quantifies your organization's true resilience—accounting for regulatory pressures, budget constraints, human factors, technology risks, environmental challenges, and legal exposures simultaneously.

---

**Document Control:**
- Version: 2.0
- Last Updated: November 2024
- Next Review: February 2025
- Classification: Public
- Owner: ERMITS Advisory

---

*This is the official, authoritative description of STEEL™. All other references should align with this document.*
