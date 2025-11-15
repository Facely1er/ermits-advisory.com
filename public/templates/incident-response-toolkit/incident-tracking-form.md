# Security Incident Tracking Form

## Incident Identification

**Incident ID:** [AUTO-GENERATED or MANUAL]
**Report Date/Time:** __________
**Reported By:** __________
**Contact Information:** __________

---

## Incident Classification

### Incident Type
- [ ] Ransomware Attack
- [ ] Data Breach / Data Exfiltration
- [ ] DDoS Attack
- [ ] Phishing / Social Engineering
- [ ] Malware Infection
- [ ] Unauthorized Access
- [ ] Insider Threat
- [ ] Lost/Stolen Device
- [ ] Misconfiguration / Human Error
- [ ] Third-Party / Supply Chain Incident
- [ ] Physical Security Breach
- [ ] Other: __________

### Severity Level
- [ ] **Critical** - Widespread impact, significant data loss, business operations severely affected
- [ ] **High** - Limited systems affected, potential data loss, major business function impacted
- [ ] **Medium** - Isolated incident, no data loss, minor business impact
- [ ] **Low** - Minimal impact, no data loss, no business disruption

### Status
- [ ] Detected
- [ ] Investigating
- [ ] Contained
- [ ] Eradicating
- [ ] Recovering
- [ ] Resolved
- [ ] Closed

**Current Phase:** __________
**Last Updated:** __________

---

## Incident Discovery

### Detection Details
**How was the incident discovered?**
- [ ] Automated security alert (SIEM, EDR, IDS/IPS)
- [ ] User report
- [ ] IT staff observation
- [ ] Third-party notification
- [ ] External notification (law enforcement, vendor, customer)
- [ ] Audit finding
- [ ] Other: __________

**Detection Source:** __________
**Detection Time:** __________ (Date/Time)
**Detection Method Details:** __________

### Initial Observations
**What was observed?**
__________________________________________________________________________

**Systems/Services Affected (Initial):**
__________________________________________________________________________

**Unusual Activities Noted:**
- [ ] Abnormal network traffic
- [ ] Suspicious login attempts
- [ ] File modifications/deletions
- [ ] System performance issues
- [ ] Error messages/alerts
- [ ] Other: __________

---

## Affected Assets

### Systems Impacted
| Asset Name | Asset Type | IP Address | OS/Version | Criticality | Impact | Status |
|-----------|-----------|-----------|-----------|-----------|--------|--------|
| | Server / Workstation / Network / Application / Database / Other | | | Critical / High / Medium / Low | Compromised / At-Risk / Isolated / Restored | |
| | | | | | | |
| | | | | | | |

**Total Systems Affected:** __________

### Data Impacted
**Was data accessed, modified, or exfiltrated?**
- [ ] Yes
- [ ] No
- [ ] Unknown

**If Yes, provide details:**

| Data Type | Classification | Volume/Records | Exfiltrated? | Impact |
|----------|--------------|--------------|-------------|--------|
| PII (Names, addresses, etc.) | | | Yes / No / Unknown | |
| Financial Data (Credit cards, bank accounts) | | | Yes / No / Unknown | |
| Health Information (PHI/ePHI) | | | Yes / No / Unknown | |
| Credentials (Passwords, API keys) | | | Yes / No / Unknown | |
| Intellectual Property | | | Yes / No / Unknown | |
| Business Confidential | | | Yes / No / Unknown | |
| Other: __________ | | | Yes / No / Unknown | |

**Total Records Affected:** __________
**Total Individuals Affected:** __________

---

## Business Impact Assessment

### Services Affected
| Service/Application | Business Unit | Impact Level | Downtime | Alternative Process | Priority |
|-------------------|--------------|-------------|----------|-------------------|----------|
| | | Critical / High / Medium / Low | | | |
| | | | | | |

### Financial Impact (Estimated)
- **Downtime Costs:** $ __________
- **Recovery Costs:** $ __________
- **Investigation Costs:** $ __________
- **Notification Costs:** $ __________
- **Regulatory Fines (potential):** $ __________
- **Ransom Payment (if applicable):** $ __________
- **Other Costs:** $ __________
- **Total Estimated Cost:** $ __________

### Operational Impact
**Business Functions Affected:**
__________________________________________________________________________

**Customer Impact:**
- [ ] No customer impact
- [ ] Service degradation
- [ ] Service outage
- [ ] Data exposure
- [ ] Number of customers affected: __________

**Regulatory/Compliance Impact:**
- [ ] GDPR reporting required (within 72 hours)
- [ ] HIPAA reporting required (within 60 days)
- [ ] SEC reporting required (within 4 business days)
- [ ] State breach notification laws applicable
- [ ] PCI-DSS reporting required
- [ ] Other: __________

---

## Incident Timeline

| Date/Time | Event Description | Evidence/Source | Recorded By |
|-----------|------------------|----------------|-------------|
| | Initial compromise (estimated) | | |
| | First malicious activity detected | | |
| | Incident discovered | | |
| | Incident response team activated | | |
| | Containment actions initiated | | |
| | Systems isolated | | |
| | Forensics initiated | | |
| | Eradication began | | |
| | Recovery started | | |
| | Services restored | | |
| | Incident declared resolved | | |
| | Post-incident review completed | | |

**Dwell Time (Compromise to Detection):** __________
**Response Time (Detection to Containment):** __________
**Recovery Time (Containment to Normal Operations):** __________

---

## Technical Analysis

### Attack Vector
**How did the attacker gain access?**
- [ ] Phishing email
- [ ] Exploited vulnerability
- [ ] Stolen credentials
- [ ] Brute force attack
- [ ] Social engineering
- [ ] Physical access
- [ ] Supply chain compromise
- [ ] Insider threat
- [ ] Misconfiguration
- [ ] Unknown
- [ ] Other: __________

**Entry Point Details:** __________

### Tactics, Techniques, and Procedures (TTPs)

**MITRE ATT&CK Mapping:**
| Tactic | Technique | Sub-Technique | Evidence |
|--------|-----------|--------------|----------|
| | | | |
| | | | |

**Attack Chain:**
1. Initial Access: __________
2. Execution: __________
3. Persistence: __________
4. Privilege Escalation: __________
5. Defense Evasion: __________
6. Credential Access: __________
7. Discovery: __________
8. Lateral Movement: __________
9. Collection: __________
10. Exfiltration: __________
11. Impact: __________

### Indicators of Compromise (IOCs)

**Malicious IP Addresses:**
__________________________________________________________________________

**Malicious Domains:**
__________________________________________________________________________

**File Hashes (MD5/SHA256):**
__________________________________________________________________________

**Malicious File Names:**
__________________________________________________________________________

**Email Addresses (phishing/C2):**
__________________________________________________________________________

**Registry Keys:**
__________________________________________________________________________

**Other IOCs:**
__________________________________________________________________________

### Malware Analysis (if applicable)
**Malware Type:** __________
**Malware Family:** __________
**Capabilities:** __________
**Persistence Mechanisms:** __________
**C2 Infrastructure:** __________

---

## Response Actions

### Incident Response Team
| Role | Name | Contact | Status |
|------|------|---------|--------|
| Incident Commander | | | Active / Standby |
| IT Security Lead | | | Active / Standby |
| IT Operations Lead | | | Active / Standby |
| Forensics Specialist | | | Active / Standby |
| Legal Counsel | | | Active / Standby |
| PR/Communications | | | Active / Standby |
| Executive Sponsor | | | Active / Standby |

**Team Activated:** __________ (Date/Time)
**Communication Channel:** __________
**War Room Location:** __________

### Containment Actions
| Date/Time | Action Taken | Performed By | Result |
|-----------|-------------|-------------|---------|
| | | | Success / Failed / Partial |
| | | | |
| | | | |

**Containment Status:**
- [ ] Fully contained
- [ ] Partially contained
- [ ] Not contained
- [ ] Containment ongoing

### Eradication Actions
| Date/Time | Action Taken | Performed By | Result |
|-----------|-------------|-------------|---------|
| | | | Success / Failed / Partial |
| | | | |
| | | | |

**Eradication Status:**
- [ ] Threat fully removed
- [ ] Partial removal
- [ ] Eradication ongoing
- [ ] Not started

### Recovery Actions
| Date/Time | System/Service | Action Taken | Performed By | Status |
|-----------|---------------|-------------|-------------|---------|
| | | | | Restored / In Progress / Pending |
| | | | | |
| | | | | |

**Recovery Status:**
- [ ] Fully recovered
- [ ] Partial recovery
- [ ] Recovery ongoing
- [ ] Not started

---

## Evidence Collection

### Evidence Inventory
| Evidence ID | Type | Description | Collection Date | Location | Custodian | Chain of Custody |
|------------|------|-------------|----------------|----------|-----------|-----------------|
| | Disk Image / Memory Dump / Logs / Network Capture / Screenshots / Other | | | | | Maintained: Yes/No |
| | | | | | | |
| | | | | | | |

### Log Sources Preserved
- [ ] System logs (Windows Event Logs, Syslog)
- [ ] Application logs
- [ ] Security tool logs (SIEM, EDR, IDS/IPS)
- [ ] Network device logs (Firewall, Proxy, DNS)
- [ ] Authentication logs (Active Directory, SSO)
- [ ] Cloud service logs (AWS CloudTrail, Azure AD, etc.)
- [ ] Email logs
- [ ] Database logs
- [ ] Web server logs

**Log Retention Period:** __________
**Evidence Storage Location:** __________
**Evidence Backup:** Yes / No

---

## Communications

### Internal Notifications
| Date/Time | Audience | Method | Sent By | Approved By |
|-----------|---------|--------|---------|------------|
| | Executives / Board / IT / All Staff | Email / Meeting / Intranet | | |
| | | | | |

### External Notifications
| Date/Time | Recipient | Method | Purpose | Sent By | Confirmation |
|-----------|----------|--------|---------|---------|-------------|
| | Customers / Partners / Regulators / Law Enforcement / Media | Email / Mail / Phone / Press Release | | | |
| | | | | | |

### Regulatory Notifications
| Regulation | Required? | Deadline | Report Date | Filed By | Confirmation # |
|-----------|----------|----------|------------|----------|---------------|
| GDPR (72 hours) | Yes / No | | | | |
| HIPAA (60 days) | Yes / No | | | | |
| SEC (4 days) | Yes / No | | | | |
| State Breach Laws | Yes / No | | | | |
| PCI-DSS | Yes / No | | | | |
| Other: __________ | Yes / No | | | | |

---

## External Support

### Third-Party Assistance
| Organization | Type | Contact | Services Provided | Cost | Status |
|-------------|------|---------|------------------|------|--------|
| | Forensics / Legal / PR / Insurance / Cybersecurity Vendor | | | | Engaged / Standby |
| | | | | | |

### Law Enforcement Engagement
**Agency:** __________
**Case Number:** __________
**Agent Name:** __________
**Contact:** __________
**Date Reported:** __________
**Status:** Active / Closed

### Insurance Claim
**Carrier:** __________
**Policy Number:** __________
**Claim Number:** __________
**Filed Date:** __________
**Claim Amount:** $ __________
**Status:** Pending / Approved / Paid / Denied

---

## Root Cause Analysis

### Primary Cause
__________________________________________________________________________

### Contributing Factors
1. __________
2. __________
3. __________

### Control Failures
**What controls should have prevented this?**
1. __________
2. __________
3. __________

**Why did they fail?**
__________________________________________________________________________

---

## Lessons Learned

### What Worked Well
1. __________
2. __________
3. __________

### What Could Be Improved
1. __________
2. __________
3. __________

### Gaps Identified
1. **People:** __________
2. **Process:** __________
3. **Technology:** __________

---

## Corrective Actions

| Action Item | Category | Priority | Owner | Target Date | Status | Verification |
|------------|----------|----------|-------|------------|--------|-------------|
| | Technical / Process / Training / Policy | H / M / L | | | Not Started / In Progress / Complete | |
| | | | | | | |
| | | | | | | |

**Corrective Action Plan Approved By:** __________
**Date:** __________

---

## Metrics & KPIs

**Incident Metrics:**
- **Time to Detection:** __________ (from initial compromise)
- **Time to Containment:** __________ (from detection)
- **Time to Eradication:** __________ (from containment)
- **Time to Recovery:** __________ (from eradication)
- **Total Incident Duration:** __________

**Cost Metrics:**
- **Total Direct Costs:** $ __________
- **Total Indirect Costs:** $ __________
- **Total Incident Cost:** $ __________

**Impact Metrics:**
- **Systems Affected:** __________
- **Data Records Affected:** __________
- **Users/Customers Impacted:** __________
- **Downtime Hours:** __________

---

## Post-Incident Review

**Review Meeting Date:** __________
**Participants:** __________
**Facilitator:** __________

**Key Findings:**
__________________________________________________________________________

**Recommendations:**
1. __________
2. __________
3. __________

**Incident Report Prepared:** Yes / No
**Report Location:** __________
**Report Distributed To:** __________

---

## Incident Closure

**Incident Resolved:** __________ (Date/Time)
**Resolved By:** __________
**All Corrective Actions Completed:** Yes / No / N/A
**Post-Incident Review Completed:** Yes / No
**Documentation Complete:** Yes / No

**Final Status:**
- [ ] Incident successfully resolved
- [ ] No ongoing threat detected
- [ ] All affected systems restored
- [ ] All evidence preserved
- [ ] All notifications completed
- [ ] All corrective actions assigned
- [ ] Lessons learned documented
- [ ] Incident closed

**Closed By:** __________
**Closure Date:** __________
**Approval:** __________

---

## Attachments & References

1. Forensic Reports: __________
2. Evidence Files: __________
3. Communication Logs: __________
4. Notification Documentation: __________
5. Regulatory Filing Confirmations: __________
6. Insurance Claim Documentation: __________
7. Legal Correspondence: __________
8. Third-Party Reports: __________
9. Other: __________

---

## Notes & Comments

Use this section for additional information, special circumstances, or observations:

__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________

---

**ERMITS Advisory Services**
Incident Response Toolkit
Version 1.0 | 2024

**Form Version:** 1.0
**Last Updated:** [DATE]
**Next Review:** [DATE]
