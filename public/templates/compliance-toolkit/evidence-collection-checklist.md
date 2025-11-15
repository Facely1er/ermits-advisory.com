# Evidence Collection Checklist

## Overview
This template helps organizations collect, organize, and maintain evidence for compliance audits across multiple frameworks.

---

## Organization Information
- **Organization Name:** _______________________
- **Audit Period:** From __________ to __________
- **Framework(s):** _______________________
- **Audit Date:** _______________________
- **Auditor:** _______________________

---

## Evidence Collection Guidelines

### Evidence Quality Standards
- **Complete:** Evidence covers all aspects of the control
- **Accurate:** Evidence is factually correct and current
- **Relevant:** Evidence directly supports the control requirement
- **Timestamped:** Evidence shows when the control was in effect
- **Authentic:** Evidence can be verified as genuine

### Evidence Retention
- Maintain evidence for the entire audit period plus retention requirements
- Store evidence in a secure, organized repository
- Implement version control for policy and procedure documents
- Backup evidence regularly

---

## Access Control Evidence

### User Access Management (NIST: PR.AC-1, ISO: A.9.2.1, SOC 2: CC6.1)
- [ ] User access provisioning procedures
- [ ] Access request and approval forms (sample: last 3 months)
- [ ] User access lists (privileged and standard users)
- [ ] Access review records (last 2 quarters minimum)
- [ ] Account creation logs
- [ ] Role-based access control (RBAC) matrix
- [ ] Segregation of duties documentation
- [ ] Access recertification results

**Evidence Location:** /evidence/access-control/provisioning/
**Owner:** IT Director
**Last Updated:** __________

### Multi-Factor Authentication (NIST: PR.AC-7, ISO: A.9.4.2, SOC 2: CC6.1)
- [ ] MFA policy document
- [ ] MFA implementation screenshots
- [ ] User enrollment reports
- [ ] MFA coverage metrics (% of users with MFA)
- [ ] MFA configuration settings
- [ ] Exception documentation (if any)

**Evidence Location:** /evidence/access-control/mfa/
**Owner:** IT Security
**Last Updated:** __________

### Password Policy (NIST: PR.AC-1, ISO: A.9.4.3, SOC 2: CC6.1)
- [ ] Password policy document
- [ ] Password complexity requirements configuration
- [ ] Password expiration settings
- [ ] Password history settings
- [ ] Account lockout settings
- [ ] Privileged account password requirements

**Evidence Location:** /evidence/access-control/passwords/
**Owner:** IT Security
**Last Updated:** __________

---

## Asset Management Evidence

### Asset Inventory (NIST: ID.AM-1, ISO: A.8.1.1, SOC 2: CC6.1)
- [ ] Complete hardware asset inventory
- [ ] Complete software asset inventory
- [ ] Asset owners and custodians list
- [ ] Asset classification and criticality ratings
- [ ] Asset disposal records
- [ ] Asset reconciliation reports

**Evidence Location:** /evidence/assets/inventory/
**Owner:** IT Operations
**Last Updated:** __________

### Asset Classification (NIST: ID.AM-5, ISO: A.8.2.1, GDPR: Art. 32)
- [ ] Data classification policy
- [ ] Data classification matrix
- [ ] Examples of classified data/systems
- [ ] Data flow diagrams
- [ ] Sensitive data inventory
- [ ] Classification labeling procedures

**Evidence Location:** /evidence/assets/classification/
**Owner:** Data Owner
**Last Updated:** __________

---

## Security Awareness Training Evidence

### General Security Awareness (NIST: PR.AT-1, ISO: A.7.2.2, SOC 2: CC1.4)
- [ ] Security awareness training policy
- [ ] Training materials and curriculum
- [ ] Training attendance records (past 12 months)
- [ ] Training completion certificates
- [ ] New hire security orientation materials
- [ ] Training effectiveness assessments
- [ ] Phishing simulation results

**Evidence Location:** /evidence/training/awareness/
**Owner:** CISO
**Last Updated:** __________

### Role-Based Training (NIST: PR.AT-2, ISO: A.7.2.2, HIPAA: 164.308(a)(5))
- [ ] Role-based training matrix
- [ ] Developer security training records
- [ ] Administrator security training records
- [ ] Privacy training records
- [ ] Compliance training records
- [ ] Executive/Board security briefings

**Evidence Location:** /evidence/training/role-based/
**Owner:** CISO
**Last Updated:** __________

---

## Logging and Monitoring Evidence

### Audit Logging (NIST: DE.CM-1, ISO: A.12.4.1, SOC 2: CC7.2)
- [ ] Logging policy and standards
- [ ] List of systems with logging enabled
- [ ] Log retention policy
- [ ] Log configuration settings (samples)
- [ ] Log storage and protection methods
- [ ] Time synchronization evidence (NTP config)
- [ ] Sample audit logs (sanitized)

**Evidence Location:** /evidence/logging/audit-logs/
**Owner:** IT Security
**Last Updated:** __________

### Security Monitoring (NIST: DE.CM-1, ISO: A.12.4.1, SOC 2: CC7.2)
- [ ] Security monitoring procedures
- [ ] SIEM/monitoring tool configurations
- [ ] Alert definitions and thresholds
- [ ] Monitoring dashboards (screenshots)
- [ ] Alert response procedures
- [ ] Sample monitoring reports
- [ ] 24/7 monitoring coverage documentation

**Evidence Location:** /evidence/monitoring/
**Owner:** SOC Manager
**Last Updated:** __________

### Log Review (NIST: RS.AN-1, ISO: A.12.4.1, SOC 2: CC7.2)
- [ ] Log review procedures
- [ ] Log review schedule
- [ ] Sample log review reports (3-6 months)
- [ ] Anomaly investigation records
- [ ] Corrective action evidence

**Evidence Location:** /evidence/logging/reviews/
**Owner:** SOC Manager
**Last Updated:** __________

---

## Vulnerability Management Evidence

### Vulnerability Scanning (NIST: DE.CM-8, ISO: A.12.6.1, SOC 2: CC7.1)
- [ ] Vulnerability management policy
- [ ] Vulnerability scanning schedule
- [ ] Recent vulnerability scan reports (quarterly)
- [ ] Scan coverage documentation
- [ ] Authenticated vs. unauthenticated scan evidence
- [ ] Scanning tool configurations

**Evidence Location:** /evidence/vulnerability/scanning/
**Owner:** IT Security
**Last Updated:** __________

### Vulnerability Remediation (NIST: RS.MI-3, ISO: A.12.6.1, PCI-DSS: 6.2)
- [ ] Vulnerability remediation procedures
- [ ] Remediation SLAs by severity
- [ ] Remediation tracking reports
- [ ] Patch management procedures
- [ ] Sample patch deployment records
- [ ] Exception/risk acceptance documentation
- [ ] Before/after scan comparisons

**Evidence Location:** /evidence/vulnerability/remediation/
**Owner:** IT Security
**Last Updated:** __________

### Penetration Testing (ISO: A.12.6.1, SOC 2: CC7.1, PCI-DSS: 11.3)
- [ ] Penetration testing policy
- [ ] Most recent penetration test report
- [ ] Penetration test scope and methodology
- [ ] Remediation plan for findings
- [ ] Attestation of remediation completion
- [ ] Re-test results (if applicable)

**Evidence Location:** /evidence/vulnerability/pentest/
**Owner:** CISO
**Last Updated:** __________

---

## Incident Response Evidence

### Incident Response Plan (NIST: RS.RP-1, ISO: A.16.1.1, SOC 2: CC7.3)
- [ ] Current incident response plan
- [ ] IR plan approval and distribution records
- [ ] Incident classification matrix
- [ ] Escalation procedures and contact lists
- [ ] IR team roles and responsibilities
- [ ] Communication templates

**Evidence Location:** /evidence/incident-response/plan/
**Owner:** CISO
**Last Updated:** __________

### Incident Handling (NIST: RS.CO-1, ISO: A.16.1.4, SOC 2: CC7.3)
- [ ] Incident response procedures
- [ ] Sample incident tickets (sanitized)
- [ ] Incident response timelines
- [ ] Communication records
- [ ] Post-incident review reports
- [ ] Lessons learned documentation

**Evidence Location:** /evidence/incident-response/incidents/
**Owner:** CISO
**Last Updated:** __________

### IR Testing (NIST: PR.IP-10, ISO: A.17.1.3)
- [ ] IR plan testing schedule
- [ ] Tabletop exercise documentation
- [ ] Simulation/drill results
- [ ] Test participant feedback
- [ ] Plan updates based on testing
- [ ] Testing frequency evidence

**Evidence Location:** /evidence/incident-response/testing/
**Owner:** CISO
**Last Updated:** __________

---

## Business Continuity Evidence

### Business Continuity Plan (NIST: RC.RP-1, ISO: A.17.1.1, SOC 2: CC9.1)
- [ ] Current business continuity plan
- [ ] BCP approval and distribution records
- [ ] Business impact analysis (BIA)
- [ ] Recovery time objectives (RTO)
- [ ] Recovery point objectives (RPO)
- [ ] Critical business functions identification
- [ ] Continuity strategies

**Evidence Location:** /evidence/business-continuity/plan/
**Owner:** Risk Manager
**Last Updated:** __________

### Disaster Recovery Plan (ISO: A.17.1.2, SOC 2: CC9.1, HIPAA: 164.308(a)(7))
- [ ] Current disaster recovery plan
- [ ] DR site/infrastructure documentation
- [ ] Failover procedures
- [ ] Recovery procedures
- [ ] Data restoration procedures
- [ ] System dependencies documentation

**Evidence Location:** /evidence/business-continuity/dr-plan/
**Owner:** IT Director
**Last Updated:** __________

### Backup Procedures (NIST: PR.IP-4, ISO: A.12.3.1, SOC 2: CC9.1)
- [ ] Backup policy and procedures
- [ ] Backup schedule
- [ ] Backup success/failure reports (3-6 months)
- [ ] Backup retention schedule
- [ ] Backup storage location(s)
- [ ] Off-site backup evidence
- [ ] Backup encryption evidence

**Evidence Location:** /evidence/business-continuity/backups/
**Owner:** IT Operations
**Last Updated:** __________

### BC/DR Testing (NIST: PR.IP-10, ISO: A.17.1.3, SOC 2: CC9.1)
- [ ] BC/DR testing schedule
- [ ] Recent test reports (annual minimum)
- [ ] Test scenarios and procedures
- [ ] Test results and metrics
- [ ] Issues identified during testing
- [ ] Plan updates based on testing

**Evidence Location:** /evidence/business-continuity/testing/
**Owner:** Risk Manager
**Last Updated:** __________

---

## Change Management Evidence

### Change Management Process (NIST: PR.IP-3, ISO: A.12.1.2, SOC 2: CC8.1)
- [ ] Change management policy
- [ ] Change management procedures
- [ ] Change request forms (samples)
- [ ] Change approval records
- [ ] Emergency change procedures
- [ ] Change success/failure metrics
- [ ] Rollback procedures

**Evidence Location:** /evidence/change-management/
**Owner:** IT Operations
**Last Updated:** __________

### Configuration Management (NIST: PR.IP-1, ISO: A.12.1.2, SOC 2: CC8.1)
- [ ] Configuration management policy
- [ ] Baseline configurations
- [ ] Configuration standards
- [ ] Configuration compliance reports
- [ ] Configuration change tracking
- [ ] Configuration backup procedures

**Evidence Location:** /evidence/configuration-management/
**Owner:** IT Operations
**Last Updated:** __________

---

## Encryption Evidence

### Encryption at Rest (NIST: PR.DS-1, ISO: A.10.1.1, SOC 2: CC6.1)
- [ ] Encryption policy
- [ ] Data-at-rest encryption inventory
- [ ] Encryption algorithms and key lengths
- [ ] Encryption implementation evidence (screenshots)
- [ ] Key management procedures
- [ ] Encryption coverage by data classification

**Evidence Location:** /evidence/encryption/at-rest/
**Owner:** IT Security
**Last Updated:** __________

### Encryption in Transit (NIST: PR.DS-2, ISO: A.13.2.3, SOC 2: CC6.1)
- [ ] Data-in-transit encryption policy
- [ ] TLS/SSL configuration evidence
- [ ] Certificate management procedures
- [ ] VPN configurations
- [ ] Secure protocol usage evidence
- [ ] Insecure protocol prohibition evidence

**Evidence Location:** /evidence/encryption/in-transit/
**Owner:** IT Security
**Last Updated:** __________

---

## Physical Security Evidence

### Physical Access Controls (NIST: PR.AC-2, ISO: A.11.1.1, SOC 2: CC6.4)
- [ ] Physical security policy
- [ ] Data center access procedures
- [ ] Badge/access card system evidence
- [ ] Access logs (sample period)
- [ ] Visitor management procedures
- [ ] Visitor logs (sample period)
- [ ] Security guard/monitoring evidence

**Evidence Location:** /evidence/physical-security/
**Owner:** Facilities Manager
**Last Updated:** __________

### Environmental Controls (ISO: A.11.1.4, SOC 2: CC6.4)
- [ ] Environmental monitoring evidence
- [ ] Fire suppression systems
- [ ] Temperature/humidity monitoring
- [ ] Power backup systems (UPS/generators)
- [ ] Water detection systems
- [ ] Maintenance records

**Evidence Location:** /evidence/physical-security/environmental/
**Owner:** Facilities Manager
**Last Updated:** __________

---

## Third-Party Risk Management Evidence

### Vendor Risk Assessments (ISO: A.15.1.1, SOC 2: CC9.2, HIPAA: 164.308(b))
- [ ] Vendor risk management policy
- [ ] Vendor inventory
- [ ] Vendor risk assessment questionnaires
- [ ] Vendor risk ratings
- [ ] Critical vendor identification
- [ ] Vendor assessment schedule
- [ ] Recent vendor assessment reports

**Evidence Location:** /evidence/third-party/assessments/
**Owner:** Procurement
**Last Updated:** __________

### Vendor Contracts (ISO: A.15.1.2, SOC 2: CC9.2, GDPR: Art. 28)
- [ ] Vendor contract templates
- [ ] Security requirements in contracts
- [ ] Data processing agreements (DPAs)
- [ ] Business associate agreements (BAAs)
- [ ] Right to audit clauses
- [ ] Breach notification requirements
- [ ] Sample executed contracts

**Evidence Location:** /evidence/third-party/contracts/
**Owner:** Legal
**Last Updated:** __________

### Vendor Monitoring (ISO: A.15.2.1, SOC 2: CC9.2)
- [ ] Vendor monitoring procedures
- [ ] Vendor performance metrics
- [ ] SOC 2 reports from vendors
- [ ] Vendor security certifications
- [ ] Vendor security questionnaire updates
- [ ] Vendor incident notifications

**Evidence Location:** /evidence/third-party/monitoring/
**Owner:** Procurement
**Last Updated:** __________

---

## Privacy and Data Protection Evidence (GDPR/HIPAA)

### Privacy Program (GDPR: Art. 24, HIPAA: 164.530)
- [ ] Privacy policy
- [ ] Privacy notice
- [ ] Data protection impact assessments (DPIAs)
- [ ] Privacy by design documentation
- [ ] Data subject rights procedures
- [ ] Privacy training records
- [ ] Data processing inventory

**Evidence Location:** /evidence/privacy/
**Owner:** Privacy Officer
**Last Updated:** __________

### Data Subject Rights (GDPR: Art. 15-22)
- [ ] Data subject access request procedures
- [ ] Sample DSAR handling (anonymized)
- [ ] Right to erasure procedures
- [ ] Right to rectification procedures
- [ ] Data portability procedures
- [ ] Objection handling procedures

**Evidence Location:** /evidence/privacy/dsar/
**Owner:** Privacy Officer
**Last Updated:** __________

### Breach Notification (GDPR: Art. 33-34, HIPAA: 164.404-408)
- [ ] Breach notification procedures
- [ ] Breach notification templates
- [ ] Breach assessment criteria
- [ ] Breach notification timeline
- [ ] Breach register/log
- [ ] Sample breach notifications (if applicable)

**Evidence Location:** /evidence/privacy/breach-notification/
**Owner:** Privacy Officer/Legal
**Last Updated:** __________

---

## Governance and Risk Management Evidence

### Information Security Policy (ISO: A.5.1.1, SOC 2: CC1.1)
- [ ] Information security policy
- [ ] Policy approval records
- [ ] Policy distribution/acknowledgment records
- [ ] Policy review and update schedule
- [ ] Supporting policies and procedures

**Evidence Location:** /evidence/governance/policies/
**Owner:** CISO
**Last Updated:** __________

### Risk Management (NIST: ID.RA-1, ISO: A.12.6.1, SOC 2: CC3.2)
- [ ] Risk management framework
- [ ] Risk assessment methodology
- [ ] Recent risk assessment reports
- [ ] Risk register
- [ ] Risk treatment plans
- [ ] Risk acceptance documentation
- [ ] Risk review schedule and evidence

**Evidence Location:** /evidence/governance/risk-management/
**Owner:** Risk Manager
**Last Updated:** __________

### Compliance Management (ISO: A.18.1.1, SOC 2: CC2.1)
- [ ] Compliance framework documentation
- [ ] Compliance roles and responsibilities
- [ ] Compliance monitoring procedures
- [ ] Compliance assessment results
- [ ] Compliance reporting to management
- [ ] Regulatory change tracking

**Evidence Location:** /evidence/governance/compliance/
**Owner:** Compliance Officer
**Last Updated:** __________

---

## Evidence Tracking Summary

### Evidence Collection Status

| Evidence Category | Total Items | Collected | In Progress | Missing | % Complete |
|------------------|------------|-----------|-------------|---------|-----------|
| Access Control | 18 | | | | |
| Asset Management | 12 | | | | |
| Security Training | 12 | | | | |
| Logging & Monitoring | 18 | | | | |
| Vulnerability Mgmt | 18 | | | | |
| Incident Response | 18 | | | | |
| Business Continuity | 24 | | | | |
| Change Management | 14 | | | | |
| Encryption | 12 | | | | |
| Physical Security | 12 | | | | |
| Third-Party Risk | 18 | | | | |
| Privacy & Data Protection | 18 | | | | |
| Governance & Risk | 18 | | | | |
| **TOTAL** | **212** | | | | |

### Missing Evidence Priority List

| Priority | Evidence Item | Framework Requirement | Due Date | Owner |
|----------|--------------|---------------------|----------|-------|
| High | | | | |
| High | | | | |
| Medium | | | | |
| Medium | | | | |
| Low | | | | |

---

## Audit Readiness Checklist

- [ ] All evidence organized in designated folders
- [ ] Evidence is current (within audit period)
- [ ] Evidence is complete and accurate
- [ ] Evidence owners identified and confirmed
- [ ] Evidence access permissions configured
- [ ] Evidence backed up
- [ ] Evidence index/summary prepared
- [ ] Gap analysis completed
- [ ] Missing evidence action plan created
- [ ] Audit response team identified
- [ ] Mock audit conducted
- [ ] Corrective actions from previous audit completed

---

## Notes & Comments

Use this section to document special considerations, evidence gaps, or audit-specific requirements:

---

**ERMITS Advisory Services**
Compliance Framework Toolkit
Version 1.0 | 2024
