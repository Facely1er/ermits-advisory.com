# Data Sources and Demo Data Documentation

## Overview

This document outlines the data sources used throughout the ERMITS Advisory application and identifies which data is demo/example data versus real data.

## Demo Data Indicators

All demo/example data is clearly marked with:
- **"DEMO MODE"** labels in the UI
- **"Example Data"** comments in code
- **Data source documentation** in component headers

## Data Sources by Component

### 1. Dashboard Metrics (`src/data/mockData.ts`)
- **Status**: Example/Demo Data
- **Current Data**: Sample metrics for demonstration
- **Production Data Sources**:
  - Active Vulnerabilities: Vulnerability scanning systems (Nessus, Qualys, etc.)
  - Emerging Threats: Threat intelligence feeds (CISA, ENISA, commercial providers)
  - Recent Incidents: Security incident management systems (SIEM)
  - Compliance Status: Compliance monitoring and assessment tools

### 2. STEEL Framework Dimensions (`src/data/mockData.ts`)
- **Status**: Example Data
- **Current Data**: Sample risk values for demonstration
- **Production Data Sources**:
  - Risk values: Calculated from STEEL framework assessment questionnaires
  - Based on: NIST Cybersecurity Framework, ISO 27001, industry best practices

### 3. Threat Intelligence (`src/data/mockData.ts`)
- **Status**: Example Data
- **Current Data**: Sample threat categories
- **Production Data Sources**:
  - Threat types: Based on common categories from:
    - CISA (Cybersecurity and Infrastructure Security Agency) threat reports
    - ENISA (European Union Agency for Cybersecurity) threat landscape reports
  - Real-time data: Commercial threat intelligence feeds

### 4. Strategic Actions (`src/data/mockData.ts`)
- **Status**: Example Recommendations
- **Current Data**: Sample recommendations with impact statements
- **Production Data Sources**:
  - Recommendations: Generated from STEEL framework risk assessments
  - Impact statements: Based on industry best practices and frameworks:
    - NIST Cybersecurity Framework
    - CIS Controls
    - Microsoft Security Intelligence Report (for MFA effectiveness: ~99%)
  - **Note**: Actual impact varies by organization, implementation quality, and threat landscape

### 5. Risk Radar Scenarios (`src/data/mockData.ts`)
- **Status**: Example Scenarios
- **Current Data**: Sample scenario calculations
- **Production Data Sources**:
  - Scenarios: Calculated from actual STEEL framework assessments
  - Risk values: Based on organizational responses to assessment questions

## Verified Claims and Data Sources

### Multi-Factor Authentication (MFA)
- **Claim**: "Significantly reduces account compromise risk"
- **Source**: Microsoft Security Intelligence Report
- **Effectiveness**: ~99% (when properly implemented)
- **Location**: `src/data/mockData.ts` - Strategic Actions

### Threat Categories
- **Source**: CISA and ENISA threat landscape reports
- **Categories**: Ransomware, Phishing, Zero-day, Supply Chain, Insider Threats
- **Location**: `src/data/mockData.ts` - Threats

## Professional Statistics (About Page)

The following statistics on the About page should be updated with actual numbers when available:
- **Certifications**: "5+" - Update with actual count
- **Assessments**: Changed to "Multiple" - Update with actual count when available
- **Confidence**: Changed to "Enhanced" - Qualitative statement
- **Risk Reduction**: Changed to "Measurable" - Qualitative statement

## Contact Form

- **Status**: Demo Mode
- **Current Behavior**: Logs to console, does not persist
- **Production**: Would POST to actual backend API (Supabase, REST API, etc.)

## Newsletter Subscription

- **Status**: Demo Mode
- **Current Behavior**: Logs to console, does not persist
- **Production**: Would integrate with newsletter service (Mailchimp, SendGrid, etc.)

## Recommendations for Production

1. **Replace Demo Data**: All mock data should be replaced with actual API calls to backend services
2. **Add Real Data Sources**: Connect to actual security monitoring systems
3. **Update Statistics**: Replace placeholder numbers with verified statistics
4. **Add Data Source Citations**: Include citations for any industry statistics or claims
5. **Implement Authentication**: Add user authentication to access real client data

## Industry Standards Referenced

- **NIST Cybersecurity Framework**: Risk assessment methodology
- **ISO 27001**: Information security management standards
- **CIS Controls**: Security best practices
- **CISA**: Threat intelligence and security guidance
- **ENISA**: European cybersecurity threat landscape
- **Microsoft Security Intelligence Report**: MFA effectiveness data

