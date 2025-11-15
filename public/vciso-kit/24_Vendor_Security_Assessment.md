# Vendor Security Assessment Form

**[ORGANIZATION_NAME]**

---

## Assessment Information

**Vendor Name**: [VENDOR]
**Assessment Date**: [DATE]
**Assessed By**: [ASSESSOR NAME]
**Assessment Type**: [ ] Initial [ ] Annual [ ] Renewal [ ] Incident-Triggered
**Overall Risk Rating**: [ ] LOW [ ] MEDIUM [ ] HIGH [ ] CRITICAL

---

## SECTION 1: VENDOR INFORMATION

### Basic Information
- [ ] Vendor name: [NAME]
- [ ] Contact person: [NAME, PHONE, EMAIL]
- [ ] Service provided: [DESCRIPTION]
- [ ] Data access level: [ ] NONE [ ] LIMITED [ ] MODERATE [ ] EXTENSIVE
- [ ] Years in business: [NUMBER]
- [ ] Company size: [SIZE]
- [ ] Headquarters location: [LOCATION]
- [ ] Data processing location(s): [LOCATIONS]

### Scope of Services
- [ ] Services provided: [DETAILED DESCRIPTION]
- [ ] Data categories processed: [LIST TYPES]
- [ ] Systems/networks accessed: [LIST]
- [ ] Duration of relationship: [DATE - DATE]

---

## SECTION 2: ORGANIZATION & GOVERNANCE

### Management & Governance
- [ ] Security/compliance officer designated: [ ] YES [ ] NO
- [ ] Information security governance documented: [ ] YES [ ] NO
- [ ] Security policies documented: [ ] YES [ ] NO
- [ ] Risk management process: [ ] YES [ ] NO
- [ ] Evidence provided: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Certifications & Standards Compliance
- [ ] ISO 27001 certified: [ ] YES [ ] NO | Year: [YEAR]
- [ ] SOC 2 Type II report: [ ] YES [ ] NO | Year: [YEAR]
- [ ] Other certifications: [LIST]
- [ ] Industry-specific standards (HIPAA, PCI-DSS, etc.): [LIST]

**Score**: [1-10] | **Comments**: [NOTES]

### Audit History
- [ ] Regular internal audits performed: [ ] YES [ ] NO
- [ ] External audits performed: [ ] YES [ ] NO | Frequency: [FREQUENCY]
- [ ] Audit findings from past 2 years: [SUMMARY]
- [ ] Remediation of findings: [DOCUMENTED / PENDING / UNKNOWN]

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 3: ACCESS CONTROL & AUTHENTICATION

### User Access Management
- [ ] Access control policy documented: [ ] YES [ ] NO
- [ ] Least privilege enforced: [ ] YES [ ] NO
- [ ] Access reviews performed: [ ] YES [ ] NO | Frequency: [FREQUENCY]
- [ ] Unused accounts removed: [ ] YES [ ] NO
- [ ] Off-boarding procedures defined: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Authentication Controls
- [ ] Password policy enforced: [ ] YES [ ] NO
  - [ ] Complexity requirements: [REQUIREMENTS]
  - [ ] Expiration period: [PERIOD]
  - [ ] History enforcement: [YES / NO]
- [ ] Multi-factor authentication (MFA): [ ] YES [ ] NO
- [ ] MFA for privileged access: [ ] YES [ ] NO
- [ ] Credential storage: [ ] Secure [ ] At risk

**Score**: [1-10] | **Comments**: [NOTES]

### Privileged Access Management
- [ ] Privileged account management: [ ] YES [ ] NO
- [ ] Privileged access limited: [ ] YES [ ] NO
- [ ] Admin access monitored: [ ] YES [ ] NO
- [ ] Session recording (if applicable): [ ] YES [ ] NO
- [ ] Privileged access separated from user access: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 4: DATA PROTECTION & ENCRYPTION

### Data Protection Measures
- [ ] Data classification policy: [ ] YES [ ] NO
- [ ] Data handling procedures: [ ] YES [ ] NO
- [ ] Data retention/disposal policy: [ ] YES [ ] NO
- [ ] Secure data destruction: [ ] YES [ ] NO
- [ ] Data loss prevention (DLP) tools: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Encryption
- [ ] Encryption at rest: [ ] YES [ ] NO
  - [ ] Standard used: [STANDARD]
  - [ ] Key management: [METHOD]
- [ ] Encryption in transit: [ ] YES [ ] NO
  - [ ] Standard used: [STANDARD] (TLS 1.2+ required)
  - [ ] All data encrypted: [ ] YES [ ] NO
- [ ] Encryption key management: [ ] STRONG [ ] ADEQUATE [ ] WEAK [ ] NONE

**Score**: [1-10] | **Comments**: [NOTES]

### Data Backups
- [ ] Backup strategy documented: [ ] YES [ ] NO
- [ ] Backup frequency: [FREQUENCY]
- [ ] Off-site backups: [ ] YES [ ] NO
- [ ] Backup testing: [ ] YES [ ] NO | Frequency: [FREQUENCY]
- [ ] Recovery capability verified: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 5: INFRASTRUCTURE & SECURITY

### Network Security
- [ ] Firewall/perimeter security: [ ] YES [ ] NO
- [ ] Network segmentation: [ ] YES [ ] NO
- [ ] Intrusion detection/prevention: [ ] YES [ ] NO
- [ ] DDoS protection: [ ] YES [ ] NO
- [ ] Network monitoring: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### System Security
- [ ] Vulnerability scanning: [ ] YES [ ] NO | Frequency: [FREQUENCY]
- [ ] Patch management program: [ ] YES [ ] NO
- [ ] Patch cycle (critical patches): [TIMELINE]
- [ ] Antivirus/antimalware: [ ] YES [ ] NO
- [ ] Endpoint detection & response: [ ] YES [ ] NO
- [ ] Configuration management: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Physical Security
- [ ] Data center access controlled: [ ] YES [ ] NO
- [ ] Environmental controls (power, cooling, fire): [ ] YES [ ] NO
- [ ] CCTV monitoring: [ ] YES [ ] NO
- [ ] Security guards/access logs: [ ] YES [ ] NO
- [ ] Equipment protection: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 6: INCIDENT MANAGEMENT & RESPONSE

### Incident Response Capability
- [ ] Incident response plan documented: [ ] YES [ ] NO
- [ ] Response team identified: [ ] YES [ ] NO
- [ ] Notification timeline: [TIMELINE]
- [ ] Forensic investigation capability: [ ] YES [ ] NO
- [ ] Business continuity/disaster recovery: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Breach Notification
- [ ] Commitment to notify of breaches: [ ] YES [ ] NO
- [ ] Notification timeline: [TIMELINE] (Should be ≤24 hours)
- [ ] Historical breaches (past 3 years): [NUMBER]
- [ ] Severity of past breaches: [SEVERITY]
- [ ] Remediation actions taken: [DESCRIPTION]

**Score**: [1-10] | **Comments**: [NOTES]

### Compliance with Breach Laws
- [ ] Understands breach notification requirements: [ ] YES [ ] NO
- [ ] Complies with GDPR breach notification: [ ] YES [ ] NO
- [ ] Complies with state breach notification laws: [ ] YES [ ] NO
- [ ] Complies with industry-specific requirements: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 7: COMPLIANCE & REGULATORY

### Data Protection Compliance
- [ ] GDPR compliant (if EU data): [ ] YES [ ] NO [ ] N/A
- [ ] CCPA compliant (if CA data): [ ] YES [ ] NO [ ] N/A
- [ ] HIPAA compliant (if health data): [ ] YES [ ] NO [ ] N/A
- [ ] PCI-DSS compliant (if payment data): [ ] YES [ ] NO [ ] N/A
- [ ] Other regulatory requirements: [LIST]

**Score**: [1-10] | **Comments**: [NOTES]

### Compliance Monitoring
- [ ] Regular compliance audits: [ ] YES [ ] NO
- [ ] Audit frequency: [FREQUENCY]
- [ ] Compliance tracking/reporting: [ ] YES [ ] NO
- [ ] Non-compliance reporting: [ ] YES [ ] NO
- [ ] Regulatory inspection results (if applicable): [RESULTS]

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 8: EMPLOYEE & TRAINING

### Staff Security Awareness
- [ ] Security awareness training: [ ] YES [ ] NO
- [ ] Training frequency: [FREQUENCY]
- [ ] Training completion rate: [PERCENTAGE]
- [ ] Phishing/social engineering training: [ ] YES [ ] NO
- [ ] NDA/confidentiality agreements: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Vendor Staff Access to Our Data
- [ ] Background checks performed: [ ] YES [ ] NO
- [ ] Confidentiality agreements: [ ] YES [ ] NO
- [ ] Access limited to authorized personnel: [ ] YES [ ] NO
- [ ] Supervised/monitored access (if applicable): [ ] YES [ ] NO
- [ ] Staff turnover/attrition rate: [RATE]

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 9: BUSINESS CONTINUITY & RESILIENCE

### Availability & Reliability
- [ ] Uptime commitment/SLA: [PERCENTAGE]
- [ ] Historical uptime: [PERCENTAGE]
- [ ] Redundancy implemented: [ ] YES [ ] NO
- [ ] Failover capability: [ ] YES [ ] NO
- [ ] Geographic redundancy: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Disaster Recovery
- [ ] Disaster recovery plan: [ ] YES [ ] NO
- [ ] Recovery time objective (RTO): [TIME]
- [ ] Recovery point objective (RPO): [TIME]
- [ ] Testing frequency: [FREQUENCY]
- [ ] Recent test results: [RESULTS]

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 10: SUB-PROCESSORS & THIRD-PARTIES

### Sub-processor Management
- [ ] Sub-processors identified: [ ] YES [ ] NO
- [ ] Sub-processor list provided: [ ] YES [ ] NO
- [ ] Sub-processors approved: [ ] YES [ ] NO
- [ ] Sub-processor agreements in place: [ ] YES [ ] NO
- [ ] Notification of changes: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Third-Party Risk Management
- [ ] Third-party assessments performed: [ ] YES [ ] NO
- [ ] Third-party agreements include security: [ ] YES [ ] NO
- [ ] Third-party access monitoring: [ ] YES [ ] NO
- [ ] Third-party incident history: [HISTORY]

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 11: CONTRACT & SLA REQUIREMENTS

### Security Terms in Contract
- [ ] Security requirements documented: [ ] YES [ ] NO
- [ ] Data protection obligations: [ ] YES [ ] NO
- [ ] Breach notification clause: [ ] YES [ ] NO
- [ ] Audit/assessment rights: [ ] YES [ ] NO
- [ ] Insurance requirements: [ ] YES [ ] NO
- [ ] Liability limitations: [ ] YES [ ] NO
- [ ] Termination & data return procedures: [ ] YES [ ] NO

**Score**: [1-10] | **Comments**: [NOTES]

### Service Level Agreement (SLA)
- [ ] SLA in place: [ ] YES [ ] NO
- [ ] Performance metrics defined: [ ] YES [ ] NO
- [ ] Penalties for non-compliance: [ ] YES [ ] NO
- [ ] Regular SLA reviews: [ ] YES [ ] NO
- [ ] SLA compliance tracking: [PERCENTAGE]

**Score**: [1-10] | **Comments**: [NOTES]

---

## SECTION 12: RISK ASSESSMENT

### Overall Risk Factors

| Risk Factor | Rating | Justification |
|-------------|--------|---------------|
| Data sensitivity | [HIGH/MED/LOW] | [EXPLANATION] |
| Access level | [HIGH/MED/LOW] | [EXPLANATION] |
| Financial impact if breach | [HIGH/MED/LOW] | [EXPLANATION] |
| Vendor financial stability | [HIGH/MED/LOW] | [EXPLANATION] |
| Vendor maturity | [HIGH/MED/LOW] | [EXPLANATION] |
| Regulatory requirements | [HIGH/MED/LOW] | [EXPLANATION] |

### Risk Mitigation Measures

**Current Mitigations**:
- [ ] [MITIGATION]
- [ ] [MITIGATION]
- [ ] [MITIGATION]

**Additional Mitigations Recommended**:
- [ ] [MITIGATION]: Priority [HIGH/MED/LOW], Cost [$AMOUNT]
- [ ] [MITIGATION]: Priority [HIGH/MED/LOW], Cost [$AMOUNT]

---

## ASSESSMENT RESULTS

### Scoring Summary

| Category | Score | Status |
|----------|-------|--------|
| **Organization & Governance** | [/10] | [✓/⚠️/✗] |
| **Access Control** | [/10] | [✓/⚠️/✗] |
| **Data Protection** | [/10] | [✓/⚠️/✗] |
| **Infrastructure** | [/10] | [✓/⚠️/✗] |
| **Incident Management** | [/10] | [✓/⚠️/✗] |
| **Compliance** | [/10] | [✓/⚠️/✗] |
| **Business Continuity** | [/10] | [✓/⚠️/✗] |
| **Sub-processors** | [/10] | [✓/⚠️/✗] |

**Overall Score**: [AVERAGE/10]

### Risk Rating Determination

| Overall Score | Risk Rating |
|--------------|------------|
| 9-10 | LOW |
| 7-8 | MEDIUM |
| 5-6 | HIGH |
| <5 | CRITICAL |

**Overall Risk Rating**: [ ] LOW [ ] MEDIUM [ ] HIGH [ ] CRITICAL

---

## RECOMMENDATION

### Approval Recommendation
- [ ] APPROVED - Safe to engage
- [ ] APPROVED WITH CONDITIONS - Can engage with mitigations
- [ ] NOT APPROVED - Do not engage without remediation
- [ ] REQUIRE REASSESSMENT - Conditions changed, re-evaluate

### Conditions/Requirements (if conditional approval)
1. [REQUIREMENT]: By [DATE]
2. [REQUIREMENT]: By [DATE]
3. [REQUIREMENT]: By [DATE]

### Next Assessment Date
[ ] 1 year (for MEDIUM risk)
[ ] 6 months (for HIGH risk)
[ ] 3 months (for CRITICAL risk)
[ ] Upon incident or major change

---

## ASSESSMENT SIGN-OFF

**Assessed By**: [NAME, TITLE] Date: _______
**Reviewed By**: [NAME, TITLE] Date: _______
**Approved By**: [NAME, TITLE] Date: _______

---

**Assessment Reference**: [VENDOR-DATE]
**Assessment File Location**: [PATH]
**Next Review**: [DATE]

---

## ATTACHMENTS

- [ ] Vendor security questionnaire responses
- [ ] Certifications and audit reports
- [ ] Contract and SLA
- [ ] Insurance certificates
- [ ] Incident history records
- [ ] Risk mitigation plans
- [ ] Other: [DOCUMENTS]
