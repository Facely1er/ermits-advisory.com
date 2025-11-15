# STEEL™ Enhanced Architecture Diagrams
## Visual Reference Guide

---

## 📊 DIAGRAM 1: COMPLETE STEEL ARCHITECTURE

```
┌────────────────────────────────────────────────────────────────────────┐
│                          DATA SOURCES (8)                              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │  Threat  │  │   SBOM   │  │  Vendor  │  │ Policies │             │
│  │  Feeds   │  │   Data   │  │   Data   │  │          │             │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘             │
│                                                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │   Geo    │  │ ESG/CSR  │  │ Privacy  │  │   Tech   │             │
│  │  Events  │  │          │  │   Reg    │  │  Stack   │             │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘             │
│                                                                        │
└──────────────────────────┬─────────────────────────────────────────────┘
                           │
                           │ Raw Risk Signals
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────┐
│                    PESTEL CLASSIFICATION LAYER                         │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Map each data source to appropriate PESTEL factor(s):                │
│                                                                        │
│  Regulatory Changes ───────────────► Political                        │
│  Budget Impacts ───────────────────► Economic                         │
│  Workforce Risks ──────────────────► Social                           │
│  Zero-day Vulnerabilities ─────────► Technological                    │
│  Climate Events ───────────────────► Environmental                    │
│  Data Breach Litigation ───────────► Legal                            │
│                                                                        │
└──────────────────────────┬─────────────────────────────────────────────┘
                           │
                           │ Classified Signals
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      INGESTION LAYER                                   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  • Normalize diverse data formats                                     │
│  • Validate data integrity                                            │
│  • Timestamp and version control                                      │
│  • Quality scoring (confidence levels)                                │
│  • Deduplication and conflict resolution                              │
│                                                                        │
└──────────────────────────┬─────────────────────────────────────────────┘
                           │
                           │ Normalized PESTEL Data
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         STEEL CORE ENGINE                              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │              WEIGHTING ENGINE                                │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │  Political:       1.0x  (Base weight)                        │    │
│  │  Economic:        1.0x  (Base weight)                        │    │
│  │  Social:          1.0x  (Base weight)                        │    │
│  │  Technological:   1.2x  (High-impact, fast-changing)         │    │
│  │  Environmental:   0.9x  (Emerging, lower priority)           │    │
│  │  Legal:           1.1x  (Critical compliance driver)         │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │           SECTOR CALIBRATION ENGINE                          │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │  • Healthcare: Legal +15%, Environmental +10%                │    │
│  │  • Finance: Economic +20%, Legal +15%                        │    │
│  │  • Manufacturing: Tech +15%, Environmental +20%              │    │
│  │  • Education: Social +15%, Legal +10%                        │    │
│  │  • Government: Political +25%, Legal +20%                    │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │          COMPOSITE RISK MODELING                             │    │
│  ├──────────────────────────────────────────────────────────────┤    │
│  │  Score = Σ(Factor × Weight × Sector Adj) / Total Weights    │    │
│  │  Range: 0-100                                                │    │
│  │  Precision: Integer rounding                                 │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
└──────────────────────────┬─────────────────────────────────────────────┘
                           │
                           │ Calculated Scores
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         OUTPUT LAYER                                   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  STEEL SCORES                                                  │  │
│  │  • Composite Score: 0-100 (weighted average)                  │  │
│  │  • Political Score: 0-100                                     │  │
│  │  • Economic Score: 0-100                                      │  │
│  │  • Social Score: 0-100                                        │  │
│  │  • Technological Score: 0-100                                 │  │
│  │  • Environmental Score: 0-100                                 │  │
│  │  • Legal Score: 0-100                                         │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  EXPOSURE VECTOR MAPPING                                       │  │
│  │  • Attack Surface Distribution                                │  │
│  │  • Threat Actor Alignment                                     │  │
│  │  • Vulnerability Density                                      │  │
│  │  • Risk Concentration Areas                                   │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  MATURITY LEVEL INDEX                                          │  │
│  │  • NIST CSF Tier (1-4)                                        │  │
│  │  • ISO 27001 Compliance %                                     │  │
│  │  • CMMC Level (1-3)                                           │  │
│  │  • Industry Benchmark Position                                │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                        │
└──────────────────────────┬─────────────────────────────────────────────┘
                           │
                           │ Product-Consumable Intelligence
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      ERMITS PRODUCT LAYER                              │
├─────────────┬──────────────┬──────────────┬──────────────┬────────────┤
│             │              │              │              │            │
│   Cyber     │   Cyber      │   Vendor     │   Cyber      │   More     │
│  Caution    │  Correct     │   Soluce     │   Soluce     │ Products   │
│             │              │              │              │            │
│  Threat     │  Privacy     │  Vendor      │  CSF Road    │  Techno    │
│  Weather    │  Exposure    │  Risk        │  map         │  Soluce    │
│  Forecast   │  Map         │  Profile     │  Generator   │  Impact    │
│             │              │              │              │  EduSoluce │
└─────────────┴──────────────┴──────────────┴──────────────┴────────────┘
                           │
                           │ Feedback Loop (Learning)
                           │
                           ▼
             [Return to Data Sources for continuous improvement]
```

---

## 📊 DIAGRAM 2: STEEL PRODUCT INTEGRATION FLOW

```
                            ┌─────────────┐
                            │   STEEL™    │
                            │ Core Engine │
                            │   (Scores)  │
                            └──────┬──────┘
                                   │
                 ┌─────────────────┼─────────────────┐
                 │                 │                 │
                 ▼                 ▼                 ▼
        ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
        │ CyberCaution   │ │ CyberCorrect   │ │ VendorSoluce   │
        │ Ransomware     │ │ Privacy Risk   │ │ Supply Chain   │
        │                │ │                │ │ Risk           │
        └───────┬────────┘ └───────┬────────┘ └───────┬────────┘
                │                  │                  │
                │ CONSUMES:        │ CONSUMES:        │ CONSUMES:
                │ • Tech Factor    │ • Legal Factor   │ • Economic
                │ • Political      │ • Political      │ • Social
                │                  │                  │
                ▼                  ▼                  ▼
        ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
        │ Threat Level   │ │ Data Rights    │ │ Vendor         │
        │ Forecasting    │ │ Violations     │ │ Exposure       │
        │ (Critical/High)│ │ (Score 0-100)  │ │ Score          │
        └────────────────┘ └────────────────┘ └────────────────┘
                 │                 │                 │
                 └─────────────────┼─────────────────┘
                                   │
                                   ▼
                 ┌─────────────────┴─────────────────┐
                 │                 │                 │
                 ▼                 ▼                 ▼
        ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
        │ CyberSoluce    │ │ ImpactSoluce   │ │ TechnoSoluce   │
        │ NIST CSF       │ │ ESG/CSR        │ │ SBOM           │
        │                │ │                │ │ Analyzer       │
        └───────┬────────┘ └───────┬────────┘ └───────┬────────┘
                │                  │                  │
                │ CONSUMES:        │ CONSUMES:        │ CONSUMES:
                │ • All 6 Factors  │ • Environmental  │ • Tech Factor
                │                  │ • Social         │ • Legal
                │                  │                  │
                ▼                  ▼                  ▼
        ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
        │ CSF Roadmap    │ │ ESG Risk       │ │ Component      │
        │ Maturity       │ │ Exposure       │ │ Risk           │
        │ Guidance       │ │ (Score)        │ │ Mapping        │
        └────────────────┘ └────────────────┘ └────────────────┘
                 │                 │                 │
                 └─────────────────┼─────────────────┘
                                   │
                                   ▼
                 ┌─────────────────┴─────────────────┐
                 │                                   │
                 ▼                                   ▼
        ┌────────────────┐                  ┌────────────────┐
        │ EduSoluce      │                  │ SocialCaution  │
        │ Training &     │                  │ Consumer       │
        │ Certification  │                  │ Privacy        │
        └───────┬────────┘                  └───────┬────────┘
                │                                   │
                │ CONSUMES:                         │ CONSUMES:
                │ • All 6 Factors                   │ • Legal
                │   (Training Focus)                │ • Social
                │                                   │
                ▼                                   ▼
        ┌────────────────┐                  ┌────────────────┐
        │ Risk-Calibrated│                  │ Personal Data  │
        │ Training       │                  │ Protection     │
        │ Programs       │                  │ Guidance       │
        └────────────────┘                  └────────────────┘
```

---

## 📊 DIAGRAM 3: PESTEL FACTOR WEIGHTING VISUAL

```
                        STEEL WEIGHTING MODEL
                              
        Political ████████████████████ 1.0x (Base)
                  
        Economic  ████████████████████ 1.0x (Base)
                  
        Social    ████████████████████ 1.0x (Base)
                  
        Technological ████████████████████████ 1.2x (20% Increase)
                      ↑
                      High impact, rapid change
                      
        Environmental ██████████████████ 0.9x (10% Decrease)
                      ↑
                      Emerging priority
                      
        Legal     ██████████████████████ 1.1x (10% Increase)
                  ↑
                  Critical compliance driver

        ──────────────────────────────────────────────
        COMPOSITE SCORE = Weighted Average of All Factors
```

---

## 📊 DIAGRAM 4: RISK CATEGORY DISTRIBUTION

```
                    STEEL RISK CATEGORIES
                    
    100 ┌──────────────────────────────────────┐
        │                                      │
     90 │         LOW RISK                     │ █ Resilient
        │         (Resilient)                  │   Organizations
     80 ├──────────────────────────────────────┤
        │                                      │
     70 │      MODERATE RISK                   │ ▓ Managed
        │         (Managed)                    │   Controls
     60 ├──────────────────────────────────────┤
        │                                      │
     50 │      ELEVATED RISK                   │ ▒ Gaps
        │      (Gaps Present)                  │   Present
     40 ├──────────────────────────────────────┤
        │                                      │
     30 │        HIGH RISK                     │ ░ Critical
        │   (Critical Action Needed)           │   Action
     20 │                                      │   Needed
        │                                      │
     10 │                                      │
        │                                      │
      0 └──────────────────────────────────────┘

Distribution of Organizations (Industry Average):
• 15% = LOW RISK (80-100)
• 40% = MODERATE RISK (60-79)
• 35% = ELEVATED RISK (40-59)
• 10% = HIGH RISK (0-39)
```

---

## 📊 DIAGRAM 5: ASSESSMENT TO ACTION WORKFLOW

```
┌──────────────────────────────────────────────────────────────────┐
│             STEP 1: EXECUTIVE ASSESSMENT                         │
│                 (25-30 minutes)                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Executive completes 42-question STEEL assessment:               │
│  • 7 Political questions                                        │
│  • 7 Economic questions                                         │
│  • 7 Social questions                                           │
│  • 7 Technological questions                                    │
│  • 7 Environmental questions                                    │
│  • 7 Legal questions                                            │
│                                                                  │
└─────────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│             STEP 2: AUTOMATED SCORING                            │
│                 (Instant)                                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  STEEL Engine calculates:                                        │
│  • 6 Factor Scores (0-100 each)                                 │
│  • Weighted Composite Score (0-100)                             │
│  • Risk Category Assignment                                     │
│  • Industry Benchmark Comparison                                │
│                                                                  │
└─────────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│             STEP 3: RESULTS DASHBOARD                            │
│                 (Interactive)                                    │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Executive receives:                                             │
│  • Composite Score Display (large, color-coded)                 │
│  • PESTEL Radar Chart                                           │
│  • Factor Breakdown Cards                                       │
│  • Risk Heatmap                                                 │
│                                                                  │
└─────────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│         STEP 4: STRATEGIC RECOMMENDATIONS                        │
│             (Prioritized by Gap Size)                            │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Generated recommendations for factors < 60:                     │
│  ┌────────────────────────────────────────────────────┐         │
│  │ CRITICAL: Legal (Score: 38)                        │         │
│  │ Action: Implement GDPR compliance program          │         │
│  │ Timeline: 30 days                                  │         │
│  │ Resources: CyberCorrect deployment                 │         │
│  └────────────────────────────────────────────────────┘         │
│                                                                  │
│  ┌────────────────────────────────────────────────────┐         │
│  │ HIGH: Technological (Score: 52)                    │         │
│  │ Action: Enhance cloud security posture             │         │
│  │ Timeline: 60 days                                  │         │
│  │ Resources: CyberCaution threat monitoring          │         │
│  └────────────────────────────────────────────────────┘         │
│                                                                  │
└─────────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│             STEP 5: PDF REPORT GENERATION                        │
│                 (Board-Ready)                                    │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Downloadable PDF includes:                                      │
│  • Executive Summary (1 page)                                   │
│  • Composite Score & Risk Category                              │
│  • PESTEL Factor Breakdown                                      │
│  • Visual Charts (radar, bar, trend)                            │
│  • Strategic Recommendations (prioritized)                      │
│  • Industry Benchmarks                                          │
│  • Action Plan Timeline                                         │
│                                                                  │
└─────────────────────────┬────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────┐
│             STEP 6: ERMITS PRODUCT ACTIVATION                    │
│                 (Optional Integration)                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Based on scores, activate relevant ERMITS products:             │
│                                                                  │
│  Legal < 60?     → Deploy CyberCorrect                          │
│  Tech < 60?      → Deploy CyberCaution                          │
│  Economic < 60?  → Deploy VendorSoluce                          │
│  All < 60?       → Deploy CyberSoluce (full ecosystem)          │
│                                                                  │
│  STEEL scores automatically populate product baselines          │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📊 DIAGRAM 6: NETWORK EFFECT INTELLIGENCE

```
        TRADITIONAL APPROACH (Siloed)
        
    ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
    │  Company A  │   │  Company B  │   │  Company C  │
    │             │   │             │   │             │
    │  Vendor X   │   │  Vendor X   │   │  Vendor X   │
    │  Score: 45  │   │  Score: 72  │   │  Score: 58  │
    └─────────────┘   └─────────────┘   └─────────────┘
         ↑                  ↑                  ↑
         │                  │                  │
    Each company            │             Different
    uses different     No sharing        methodologies
    scoring method     of intelligence   = Incomparable


        STEEL APPROACH (Unified)
        
         ┌──────────────────────────────────────────┐
         │         STEEL™ Shared Intelligence       │
         │                                          │
         │  Vendor X Composite Score: 58 (ELEVATED) │
         │                                          │
         │  Factor Breakdown:                       │
         │  • Political: 72                         │
         │  • Economic: 45  ← Network learns        │
         │  • Social: 68       Company A found      │
         │  • Technological: 52  financial issues   │
         │  • Environmental: 61                     │
         │  • Legal: 50                             │
         └──────────────┬───────────────────────────┘
                        │
         ┌──────────────┼───────────────────────────┐
         │              │                           │
         ▼              ▼                           ▼
    ┌─────────────┐ ┌─────────────┐         ┌─────────────┐
    │  Company A  │ │  Company B  │         │  Company C  │
    │             │ │             │         │             │
    │  Vendor X   │ │  Vendor X   │         │  Vendor X   │
    │  Score: 58  │ │  Score: 58  │         │  Score: 58  │
    │             │ │             │         │             │
    │  All get    │ │  Instant    │         │  Proactive  │
    │  same       │ │  visibility │         │  alerts on  │
    │  assessment │ │  into risks │         │  vendor     │
    └─────────────┘ └─────────────┘         └─────────────┘

    BENEFIT: Shared intelligence improves all customers
    • Faster vendor onboarding (pre-scored)
    • Early warning of vendor degradation
    • Industry benchmarking accuracy
    • Collective bargaining power
```

---

## 📊 DIAGRAM 7: SECTOR CALIBRATION EXAMPLES

```
                 SECTOR-SPECIFIC WEIGHTING ADJUSTMENTS
                 
┌────────────────────────────────────────────────────────────────┐
│                      HEALTHCARE                                │
├────────────────────────────────────────────────────────────────┤
│  Political:       1.0x  →  1.05x  (HIPAA regulations)          │
│  Economic:        1.0x  →  1.0x   (Standard)                   │
│  Social:          1.0x  →  1.1x   (Patient trust critical)     │
│  Technological:   1.2x  →  1.2x   (Medical devices)            │
│  Environmental:   0.9x  →  1.0x   (Facility resilience)        │
│  Legal:           1.1x  →  1.25x  (Privacy laws heightened)    │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                 FINANCIAL SERVICES                             │
├────────────────────────────────────────────────────────────────┤
│  Political:       1.0x  →  1.15x  (Regulatory scrutiny)        │
│  Economic:        1.0x  →  1.2x   (Market stability)           │
│  Social:          1.0x  →  1.05x  (Customer trust)             │
│  Technological:   1.2x  →  1.25x  (Fintech innovation)         │
│  Environmental:   0.9x  →  0.9x   (Lower priority)             │
│  Legal:           1.1x  →  1.25x  (Compliance heavy)           │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                    MANUFACTURING                               │
├────────────────────────────────────────────────────────────────┤
│  Political:       1.0x  →  1.0x   (Standard)                   │
│  Economic:        1.0x  →  1.1x   (Supply chain costs)         │
│  Social:          1.0x  →  1.0x   (Standard)                   │
│  Technological:   1.2x  →  1.3x   (OT/IT convergence)          │
│  Environmental:   0.9x  →  1.2x   (Sustainability regs)        │
│  Legal:           1.1x  →  1.05x  (Moderate compliance)        │
└────────────────────────────────────────────────────────────────┘

OUTCOME: Same raw scores → Different composite scores based on sector
Example: Tech Factor = 70 
• Healthcare Composite: 73 (adjusted for medical device criticality)
• Finance Composite: 74 (adjusted for fintech innovation)
• Manufacturing Composite: 76 (adjusted for OT security priority)
```

---

## 📊 DIAGRAM 8: STEEL vs COMPETITOR COMPARISON

```
┌─────────────────────────────────────────────────────────────────┐
│              CAPABILITY COMPARISON MATRIX                       │
├──────────────────┬──────────────┬─────────────┬────────────────┤
│   Capability     │   STEEL™     │  OneTrust   │ SecurityScore  │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Unified Risk     │      ✅      │      ❌     │       ❌       │
│ Model            │   (PESTEL)   │ (Fragmented)│  (Cyber only)  │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Executive        │      ✅      │      ❌     │       ❌       │
│ Scoring          │  (Board-ready│  (Technical)│  (IT-focused)  │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Real-time        │      ✅      │      ❌     │       ✅       │
│ Updates          │ (Continuous) │  (Manual)   │  (Automated)   │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Multi-framework  │      ✅      │      ✅     │       ❌       │
│ Alignment        │ (NIST/ISO/   │ (Primary)   │  (Limited)     │
│                  │  GDPR/ESG)   │             │                │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Product          │      ✅      │      ❌     │       ❌       │
│ Ecosystem        │ (11 products)│ (Modules)   │  (Standalone)  │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Sector           │      ✅      │      ❌     │       ✅       │
│ Calibration      │  (Built-in)  │  (Generic)  │ (Some sectors) │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Vendor Risk      │      ✅      │      ✅     │       ✅       │
│ Scoring          │ (Integrated) │ (Separate)  │  (Primary)     │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Privacy-First    │      ✅      │      ❌     │       ❌       │
│ Architecture     │ (Client-side)│ (Cloud req) │  (Cloud req)   │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Assessment       │      ✅      │      ❌     │       ✅       │
│ Tool             │ (25-30 min)  │  (Hours)    │  (Automated)   │
├──────────────────┼──────────────┼─────────────┼────────────────┤
│ Price Point      │   $$-$$$     │    $$$$$    │     $$$$       │
│ (SMB-Enterprise) │              │             │                │
└──────────────────┴──────────────┴─────────────┴────────────────┘

LEGEND:
✅ = Fully supported
❌ = Not available or limited
```

---

**Ready for deployment in presentations, documentation, and training materials.**

*STEEL™ is a trademark of ERMITS Corporation*
