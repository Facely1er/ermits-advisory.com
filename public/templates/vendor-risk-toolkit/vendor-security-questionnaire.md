# Vendor Security Assessment Questionnaire

## Vendor Information

**Vendor Name:** _______________________
**Assessment Date:** _______________________
**Assessor:** _______________________
**Vendor Contact:** _______________________
**Vendor Contact Email:** _______________________
**Vendor Contact Phone:** _______________________

---

## Service Information

**Service/Product Description:** _______________________
**Data Types Processed:** _______________________
**Integration Type:** _______________________
**User Count:** _______________________
**Contract Value:** $ _______________________
**Contract Term:** _______________________

---

## Instructions

Please answer all questions thoroughly. For Yes/No questions, provide additional details in the Comments column. If a question is not applicable, mark N/A and explain why. Attach supporting documentation where requested.

**Scoring:**
- **Yes/Implemented = 2 points**
- **Partially/In Progress = 1 point**
- **No/Not Implemented = 0 points**
- **N/A = Not scored**

---

## Section 1: Information Security Program

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 1.1 | Does your organization have a formally documented information security policy? | Yes / No / Partial | | | |
| 1.2 | Is there an executive-level security officer (CISO or equivalent)? | Yes / No | | | |
| 1.3 | How often is the information security policy reviewed and updated? | Annually / Bi-annually / Other | | | |
| 1.4 | Does your organization have an information security program aligned with recognized frameworks (ISO 27001, NIST CSF, etc.)? | Yes / No | | | |
| 1.5 | Do you conduct regular security risk assessments? | Yes / No | | Frequency: ______ | |
| 1.6 | Do you have a dedicated security team or function? | Yes / No | | Team size: ______ | |
| 1.7 | Do you provide security awareness training to all employees? | Yes / No | | Frequency: ______ | |
| 1.8 | What is your employee security training completion rate? | ____% | | | |
| 1.9 | Do you conduct background checks on employees with access to sensitive data? | Yes / No / Partial | | | |
| 1.10 | Do you have documented security roles and responsibilities? | Yes / No | | | |

**Section Score:** ______ / 20
**Supporting Documentation:** [ ] Information Security Policy [ ] Risk Assessment Reports [ ] Training Records

---

## Section 2: Compliance & Certifications

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 2.1 | Do you maintain SOC 2 Type II certification? | Yes / No / In Progress | | Report Date: ______ | |
| 2.2 | Do you maintain ISO 27001 certification? | Yes / No / In Progress | | Certificate #: ______ | |
| 2.3 | Are you PCI-DSS compliant (if processing payment card data)? | Yes / No / N/A | | Level: ______ | |
| 2.4 | Are you HIPAA compliant (if handling healthcare data)? | Yes / No / N/A | | | |
| 2.5 | Are you GDPR compliant (if processing EU personal data)? | Yes / No / N/A | | | |
| 2.6 | Do you comply with relevant industry-specific regulations? | Yes / No / N/A | | Specify: ______ | |
| 2.7 | Do you conduct annual compliance audits? | Yes / No | | Last audit: ______ | |
| 2.8 | Do you have a compliance officer or function? | Yes / No | | | |
| 2.9 | Have you had any regulatory violations or fines in the past 3 years? | Yes / No | | Details: ______ | |
| 2.10 | Do you track and manage compliance obligations? | Yes / No | | | |

**Section Score:** ______ / 20
**Supporting Documentation:** [ ] SOC 2 Report [ ] ISO Certificate [ ] PCI AOC [ ] Other Certifications

---

## Section 3: Access Control

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 3.1 | Do you enforce multi-factor authentication (MFA) for all user access? | Yes / No / Partial | | Coverage: ____% | |
| 3.2 | Do you implement role-based access control (RBAC)? | Yes / No | | | |
| 3.3 | Do you enforce the principle of least privilege? | Yes / No | | | |
| 3.4 | How often do you review user access rights? | Monthly / Quarterly / Annually / Ad-hoc | | | |
| 3.5 | Do you have a formal process for provisioning and deprovisioning user accounts? | Yes / No | | | |
| 3.6 | What is your typical account deactivation time after employee termination? | < 24hrs / < 48hrs / > 48hrs | | | |
| 3.7 | Do you enforce password complexity requirements? | Yes / No | | Min length: ____ | |
| 3.8 | Do you enforce password expiration? | Yes / No | | Frequency: ______ | |
| 3.9 | Do you monitor and log privileged user activities? | Yes / No | | | |
| 3.10 | Do you restrict remote access to your systems? | Yes / No | | Method: ______ | |

**Section Score:** ______ / 20

---

## Section 4: Data Protection

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 4.1 | Do you encrypt data at rest? | Yes / No / Partial | | Encryption: ______ | |
| 4.2 | Do you encrypt data in transit? | Yes / No / Partial | | Protocol: ______ | |
| 4.3 | Do you have a data classification policy? | Yes / No | | | |
| 4.4 | Do you have a data retention and disposal policy? | Yes / No | | | |
| 4.5 | Do you implement secure data deletion procedures? | Yes / No | | Method: ______ | |
| 4.6 | Do you segregate customer data (multi-tenancy)? | Yes / No / N/A | | | |
| 4.7 | Do you implement data loss prevention (DLP) controls? | Yes / No | | | |
| 4.8 | Do you anonymize or pseudonymize sensitive data where possible? | Yes / No / N/A | | | |
| 4.9 | Do you have controls to prevent unauthorized data exfiltration? | Yes / No | | | |
| 4.10 | Can you provide data portability upon customer request? | Yes / No | | Timeframe: ______ | |

**Section Score:** ______ / 20

---

## Section 5: Network Security

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 5.1 | Do you implement network segmentation? | Yes / No | | | |
| 5.2 | Do you use firewalls to protect your network perimeter? | Yes / No | | | |
| 5.3 | Do you use intrusion detection/prevention systems (IDS/IPS)? | Yes / No | | | |
| 5.4 | Do you monitor network traffic for anomalies? | Yes / No | | Tool: ______ | |
| 5.5 | Do you implement secure network architecture (DMZ, etc.)? | Yes / No | | | |
| 5.6 | Do you use VPN for remote access? | Yes / No | | | |
| 5.7 | Do you disable unnecessary network services and ports? | Yes / No | | | |
| 5.8 | Do you conduct regular network vulnerability scans? | Yes / No | | Frequency: ______ | |
| 5.9 | Do you have DDoS protection in place? | Yes / No | | Provider: ______ | |
| 5.10 | Do you implement wireless security controls (if applicable)? | Yes / No / N/A | | WPA3 / WPA2 / Other | |

**Section Score:** ______ / 20

---

## Section 6: Endpoint Security

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 6.1 | Do you deploy anti-malware/antivirus on all endpoints? | Yes / No | | Coverage: ____% | |
| 6.2 | Do you use endpoint detection and response (EDR) solutions? | Yes / No | | Tool: ______ | |
| 6.3 | Do you enforce disk encryption on all endpoints? | Yes / No / Partial | | Coverage: ____% | |
| 6.4 | Do you have a mobile device management (MDM) solution? | Yes / No / N/A | | | |
| 6.5 | Do you enforce security configurations on endpoints? | Yes / No | | Tool: ______ | |
| 6.6 | Do you implement application whitelisting? | Yes / No | | | |
| 6.7 | Do you disable unauthorized USB/removable media? | Yes / No / Partial | | | |
| 6.8 | Do you enforce automatic security updates? | Yes / No | | | |
| 6.9 | Do you remotely wipe lost or stolen devices? | Yes / No | | | |
| 6.10 | Do you implement bring-your-own-device (BYOD) security controls? | Yes / No / N/A | | | |

**Section Score:** ______ / 20

---

## Section 7: Vulnerability Management

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 7.1 | Do you have a formal vulnerability management program? | Yes / No | | | |
| 7.2 | How often do you conduct vulnerability scans? | Weekly / Monthly / Quarterly / Annually | | | |
| 7.3 | Do you conduct authenticated vulnerability scans? | Yes / No | | | |
| 7.4 | Do you have defined SLAs for vulnerability remediation? | Yes / No | | Critical: ____ days | |
| 7.5 | What is your average time to remediate critical vulnerabilities? | < 7 days / < 14 days / < 30 days / > 30 days | | | |
| 7.6 | Do you conduct annual penetration testing? | Yes / No | | Last test: ______ | |
| 7.7 | Do you use external penetration testers? | Yes / No | | | |
| 7.8 | Do you remediate all high-severity penetration test findings? | Yes / No | | Timeframe: ______ | |
| 7.9 | Do you have a bug bounty program? | Yes / No | | | |
| 7.10 | Do you subscribe to threat intelligence feeds? | Yes / No | | Sources: ______ | |

**Section Score:** ______ / 20

---

## Section 8: Patch Management

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 8.1 | Do you have a formal patch management policy? | Yes / No | | | |
| 8.2 | How quickly do you apply critical security patches? | < 7 days / < 14 days / < 30 days / > 30 days | | | |
| 8.3 | Do you test patches before deployment? | Yes / No | | | |
| 8.4 | Do you maintain an inventory of all systems requiring patches? | Yes / No | | | |
| 8.5 | Do you track patch compliance? | Yes / No | | Compliance: ____% | |
| 8.6 | Do you have an emergency patch process? | Yes / No | | | |
| 8.7 | Do you patch operating systems regularly? | Yes / No | | Frequency: ______ | |
| 8.8 | Do you patch applications regularly? | Yes / No | | Frequency: ______ | |
| 8.9 | Do you patch network devices regularly? | Yes / No | | Frequency: ______ | |
| 8.10 | Do you maintain systems with end-of-life software? | Yes / No | | Details: ______ | |

**Section Score:** ______ / 20

---

## Section 9: Security Monitoring & Logging

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 9.1 | Do you implement centralized logging (SIEM)? | Yes / No | | Tool: ______ | |
| 9.2 | Do you monitor security logs 24/7? | Yes / No | | In-house / SOC / MSSP | |
| 9.3 | How long do you retain security logs? | < 30 days / 30-90 days / 90+ days / 1+ year | | | |
| 9.4 | Do you monitor for unauthorized access attempts? | Yes / No | | | |
| 9.5 | Do you have alerting configured for security events? | Yes / No | | | |
| 9.6 | Do you review security logs regularly? | Yes / No | | Frequency: ______ | |
| 9.7 | Do you protect log data from tampering? | Yes / No | | | |
| 9.8 | Do you sync system clocks (NTP)? | Yes / No | | | |
| 9.9 | Do you have automated threat detection capabilities? | Yes / No | | Tool: ______ | |
| 9.10 | Do you conduct security incident investigations? | Yes / No | | | |

**Section Score:** ______ / 20

---

## Section 10: Incident Response

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 10.1 | Do you have a documented incident response plan? | Yes / No | | Last updated: ______ | |
| 10.2 | Do you have a dedicated incident response team? | Yes / No | | Team size: ______ | |
| 10.3 | Do you have 24/7 incident response capabilities? | Yes / No | | In-house / External | |
| 10.4 | Do you test your incident response plan annually? | Yes / No | | Last test: ______ | |
| 10.5 | Do you have incident classification and prioritization procedures? | Yes / No | | | |
| 10.6 | Do you have incident communication procedures? | Yes / No | | | |
| 10.7 | Do you conduct post-incident reviews? | Yes / No | | | |
| 10.8 | Do you have cyber insurance? | Yes / No | | Coverage: $ ______ | |
| 10.9 | Have you experienced a security incident in the past 12 months? | Yes / No | | Details: ______ | |
| 10.10 | Do you have relationships with external incident response firms? | Yes / No | | | |

**Section Score:** ______ / 20

---

## Section 11: Business Continuity & Disaster Recovery

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 11.1 | Do you have a documented business continuity plan? | Yes / No | | Last updated: ______ | |
| 11.2 | Do you have a documented disaster recovery plan? | Yes / No | | Last updated: ______ | |
| 11.3 | What is your recovery time objective (RTO)? | < 4 hrs / < 24 hrs / < 72 hrs / > 72 hrs | | | |
| 11.4 | What is your recovery point objective (RPO)? | < 1 hr / < 4 hrs / < 24 hrs / > 24 hrs | | | |
| 11.5 | Do you conduct regular backups? | Yes / No | | Frequency: ______ | |
| 11.6 | Do you store backups off-site or in the cloud? | Yes / No | | Location: ______ | |
| 11.7 | Do you encrypt backups? | Yes / No | | | |
| 11.8 | Do you test backup restoration regularly? | Yes / No | | Frequency: ______ | |
| 11.9 | Do you have redundant systems/infrastructure? | Yes / No | | | |
| 11.10 | Do you test your BC/DR plan annually? | Yes / No | | Last test: ______ | |

**Section Score:** ______ / 20

---

## Section 12: Third-Party & Supply Chain Risk

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 12.1 | Do you have a third-party risk management program? | Yes / No | | | |
| 12.2 | Do you assess the security of your subcontractors/suppliers? | Yes / No | | | |
| 12.3 | Do you require subcontractors to meet the same security standards? | Yes / No | | | |
| 12.4 | Do you include security requirements in vendor contracts? | Yes / No | | | |
| 12.5 | Do you conduct periodic security reviews of critical vendors? | Yes / No | | Frequency: ______ | |
| 12.6 | Do you have right-to-audit clauses in vendor contracts? | Yes / No | | | |
| 12.7 | Do you maintain an inventory of all third parties with data access? | Yes / No | | | |
| 12.8 | Do you have data processing agreements (DPAs) with subprocessors? | Yes / No / N/A | | | |
| 12.9 | Do you monitor vendor security incidents? | Yes / No | | | |
| 12.10 | Do you have vendor offboarding procedures? | Yes / No | | | |

**Section Score:** ______ / 20

---

## Section 13: Application Security

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 13.1 | Do you follow a secure development lifecycle (SDLC)? | Yes / No | | | |
| 13.2 | Do you conduct security code reviews? | Yes / No | | Coverage: ____% | |
| 13.3 | Do you use static application security testing (SAST)? | Yes / No | | Tool: ______ | |
| 13.4 | Do you use dynamic application security testing (DAST)? | Yes / No | | Tool: ______ | |
| 13.5 | Do you conduct security testing before production deployment? | Yes / No | | | |
| 13.6 | Do you follow OWASP Top 10 guidance? | Yes / No | | | |
| 13.7 | Do you implement input validation and sanitization? | Yes / No | | | |
| 13.8 | Do you use web application firewalls (WAF)? | Yes / No | | | |
| 13.9 | Do you conduct security training for developers? | Yes / No | | Frequency: ______ | |
| 13.10 | Do you scan third-party libraries/dependencies for vulnerabilities? | Yes / No | | Tool: ______ | |

**Section Score:** ______ / 20

---

## Section 14: Cloud Security (if applicable)

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 14.1 | What cloud service provider(s) do you use? | AWS / Azure / GCP / Other / N/A | | | |
| 14.2 | Do you follow cloud security best practices (CSA, CIS)? | Yes / No / N/A | | | |
| 14.3 | Do you implement cloud security posture management (CSPM)? | Yes / No / N/A | | Tool: ______ | |
| 14.4 | Do you encrypt data stored in the cloud? | Yes / No / N/A | | | |
| 14.5 | Do you implement identity and access management (IAM) in the cloud? | Yes / No / N/A | | | |
| 14.6 | Do you monitor cloud infrastructure for misconfigurations? | Yes / No / N/A | | | |
| 14.7 | Do you implement network security in the cloud (security groups, NACLs)? | Yes / No / N/A | | | |
| 14.8 | Do you enable cloud audit logging (CloudTrail, Azure Activity Log)? | Yes / No / N/A | | | |
| 14.9 | Do you have a multi-cloud or hybrid cloud security strategy? | Yes / No / N/A | | | |
| 14.10 | Do you conduct cloud security assessments? | Yes / No / N/A | | Frequency: ______ | |

**Section Score:** ______ / 20 (or N/A)

---

## Section 15: Physical Security

| # | Question | Response | Score | Comments | Evidence |
|---|----------|----------|-------|----------|----------|
| 15.1 | Do you control physical access to facilities? | Yes / No | | Method: ______ | |
| 15.2 | Do you use badge/card access systems? | Yes / No | | | |
| 15.3 | Do you maintain visitor logs? | Yes / No | | | |
| 15.4 | Do you have security cameras/CCTV? | Yes / No | | Coverage: ______ | |
| 15.5 | Do you have 24/7 security personnel? | Yes / No | | In-house / Contract | |
| 15.6 | Do you control access to server rooms/data centers? | Yes / No | | | |
| 15.7 | Do you have environmental controls (fire, flood, climate)? | Yes / No | | | |
| 15.8 | Do you have backup power (UPS, generators)? | Yes / No | | | |
| 15.9 | Do you conduct regular physical security audits? | Yes / No | | Frequency: ______ | |
| 15.10 | Is your data center in a secure, discrete location? | Yes / No | | | |

**Section Score:** ______ / 20

---

## Overall Assessment

### Scoring Summary

| Section | Score | Max | Percentage |
|---------|-------|-----|-----------|
| 1. Information Security Program | | 20 | % |
| 2. Compliance & Certifications | | 20 | % |
| 3. Access Control | | 20 | % |
| 4. Data Protection | | 20 | % |
| 5. Network Security | | 20 | % |
| 6. Endpoint Security | | 20 | % |
| 7. Vulnerability Management | | 20 | % |
| 8. Patch Management | | 20 | % |
| 9. Security Monitoring & Logging | | 20 | % |
| 10. Incident Response | | 20 | % |
| 11. Business Continuity & DR | | 20 | % |
| 12. Third-Party & Supply Chain | | 20 | % |
| 13. Application Security | | 20 | % |
| 14. Cloud Security | | 20 | % |
| 15. Physical Security | | 20 | % |
| **TOTAL** | | **300** | **%** |

### Risk Rating

**Overall Score:** ______ / 300 (____%)

**Risk Level:**
- **90-100% (270-300 points): LOW RISK** - Strong security posture, minimal concerns
- **75-89% (225-269 points): MEDIUM-LOW RISK** - Good security, minor improvements needed
- **60-74% (180-224 points): MEDIUM RISK** - Acceptable with conditions, monitoring required
- **40-59% (120-179 points): MEDIUM-HIGH RISK** - Significant concerns, remediation plan required
- **Below 40% (< 120 points): HIGH RISK** - Unacceptable, do not proceed or require immediate remediation

**Assigned Risk Level:** __________

---

## Key Findings

### Strengths
1. __________
2. __________
3. __________

### Critical Gaps
1. __________
2. __________
3. __________

### Medium Priority Gaps
1. __________
2. __________
3. __________

### Recommendations
1. __________
2. __________
3. __________

---

## Remediation Requirements

**For approval, vendor must address the following items:**

| Finding | Priority | Remediation Required | Target Date | Status |
|---------|----------|---------------------|------------|--------|
| | Critical / High / Medium | | | |
| | | | | |

---

## Supporting Documentation

**Please attach the following documents:**
- [ ] SOC 2 Type II Report (if available)
- [ ] ISO 27001 Certificate (if available)
- [ ] Recent penetration test report
- [ ] Information security policy
- [ ] Incident response plan
- [ ] Business continuity/disaster recovery plan
- [ ] Most recent vulnerability scan report
- [ ] Data processing agreement (DPA) template
- [ ] Subprocessor list
- [ ] Cyber insurance certificate

---

## Vendor Attestation

I hereby attest that the information provided in this questionnaire is true, complete, and accurate to the best of my knowledge.

**Name:** _______________________
**Title:** _______________________
**Signature:** _______________________
**Date:** _______________________

---

## Assessor Recommendation

**Assessed By:** _______________________
**Date:** _______________________

**Recommendation:**
- [ ] Approve - Low Risk
- [ ] Approve with Conditions - Medium Risk
- [ ] Conditional Approval Pending Remediation - Medium-High Risk
- [ ] Reject - High Risk

**Conditions/Requirements:**
__________________________________________________________________________

**Next Review Date:** _______________________

**Approved By:** _______________________
**Date:** _______________________

---

**ERMITS Advisory Services**
Vendor Risk Management Toolkit
Version 1.0 | 2024
