# Ransomware Response Playbook

## Incident Type: Ransomware Attack

### Severity Level: CRITICAL
**Response Time: IMMEDIATE (0-15 minutes)**

---

## Quick Reference

### Immediate Actions (First 15 Minutes)
1. ✅ Activate Incident Response Team
2. ✅ Isolate affected systems (DO NOT POWER OFF)
3. ✅ Preserve evidence
4. ✅ Notify key stakeholders
5. ✅ Assess scope and impact

### DO NOT:
- ❌ Pay the ransom immediately
- ❌ Power off systems (may lose forensic evidence)
- ❌ Delete or modify files
- ❌ Make unauthorized public statements

---

## Phase 1: Detection & Initial Response (0-1 Hour)

### 1.1 Incident Confirmation

**Signs of Ransomware:**
- [ ] Files encrypted with unusual extensions (.locked, .encrypted, .crypto, etc.)
- [ ] Ransom notes present (text files, wallpapers, pop-ups)
- [ ] Mass file modifications detected
- [ ] Backup deletion attempts
- [ ] Unusual network traffic patterns
- [ ] System performance degradation

**Initial Assessment:**
- **Detection Time:** __________
- **Detection Method:** __________
- **Affected Systems Count:** __________
- **Ransomware Variant (if known):** __________
- **Ransom Amount:** __________
- **Payment Deadline:** __________

### 1.2 Team Activation

**Incident Response Team:**
- [ ] Incident Commander: __________ (Phone: __________)
- [ ] IT Security Lead: __________ (Phone: __________)
- [ ] IT Operations Lead: __________ (Phone: __________)
- [ ] Legal Counsel: __________ (Phone: __________)
- [ ] PR/Communications: __________ (Phone: __________)
- [ ] Executive Sponsor: __________ (Phone: __________)
- [ ] Forensics Specialist: __________ (Phone: __________)

**Communication Channel:**
- Primary: __________
- Secondary: __________

### 1.3 Immediate Containment

**Isolation Steps:**

1. **Network Isolation:**
   - [ ] Disconnect affected systems from network (physically if possible)
   - [ ] Disable WiFi and Bluetooth
   - [ ] Isolate network segments
   - [ ] Block C2 (Command & Control) IPs if identified
   - [ ] Disable VPN access temporarily

2. **Preserve Systems:**
   - [ ] Keep systems powered on (for memory analysis)
   - [ ] Do not restart affected systems
   - [ ] Photograph screens showing ransom notes
   - [ ] Document system states

3. **Protect Critical Assets:**
   - [ ] Isolate domain controllers
   - [ ] Protect backup systems
   - [ ] Secure critical servers
   - [ ] Disable scheduled tasks/automation

**Containment Actions Taken:**
| Time | Action | Performed By | Result |
|------|--------|-------------|---------|
| | | | |
| | | | |

---

## Phase 2: Assessment & Analysis (1-4 Hours)

### 2.1 Scope Determination

**Affected Systems Inventory:**
| System Name | IP Address | OS | Encryption Status | Business Impact | Priority |
|------------|-----------|-----|------------------|----------------|----------|
| | | | | | |
| | | | | | |

**Data Assessment:**
- [ ] Identify encrypted data types
- [ ] Determine data sensitivity level
- [ ] Assess regulatory implications (PII, PHI, PCI, etc.)
- [ ] Check data backup availability
- [ ] Verify backup integrity

**Total Systems:**
- Encrypted: __________
- At Risk: __________
- Isolated: __________
- Clean: __________

### 2.2 Ransomware Identification

**Analysis Steps:**
- [ ] Collect ransom note samples
- [ ] Submit samples to ID Ransomware (https://id-ransomware.malwarehunterteam.com/)
- [ ] Check file extensions
- [ ] Analyze encryption patterns
- [ ] Search for decryption tools
- [ ] Contact cybersecurity vendors

**Ransomware Details:**
- **Variant Name:** __________
- **Encryption Method:** __________
- **Known Decryption:** Yes / No
- **Decryption Tool Available:** __________
- **Source:** __________

### 2.3 Attack Vector Investigation

**Entry Point Analysis:**
- [ ] Review security logs (SIEM, firewall, EDR)
- [ ] Check email security logs (phishing attempts)
- [ ] Review VPN/RDP access logs
- [ ] Examine vulnerability scan results
- [ ] Check for compromised credentials
- [ ] Analyze network traffic patterns

**Initial Findings:**
- **Suspected Entry Point:** __________
- **Initial Compromise Time:** __________
- **Lateral Movement Observed:** Yes / No
- **Persistence Mechanisms:** __________

### 2.4 Business Impact Assessment

**Critical Business Functions Affected:**
| Function | Impact Level (H/M/L) | Alternative Process | Recovery Priority |
|----------|---------------------|---------------------|------------------|
| | | | |
| | | | |

**Financial Impact Estimate:**
- Downtime costs: $ __________
- Recovery costs: $ __________
- Ransom amount: $ __________
- Potential fines/penalties: $ __________
- **Total Estimated Impact:** $ __________

---

## Phase 3: Eradication & Recovery Decision (4-8 Hours)

### 3.1 Recovery Options Analysis

**Option 1: Restore from Backups**
- [ ] Verify backup availability
- [ ] Test backup integrity
- [ ] Confirm backup is pre-infection
- [ ] Estimate restoration time: __________
- [ ] Data loss assessment: __________
- **Viability:** Yes / No

**Option 2: Use Decryption Tool**
- [ ] Decryption tool identified
- [ ] Tool tested on sample files
- [ ] Success rate: _________%
- [ ] Estimated decryption time: __________
- **Viability:** Yes / No

**Option 3: Ransom Payment** (Last Resort)
- [ ] Legal review completed
- [ ] Executive approval obtained
- [ ] Payment mechanism available
- [ ] Cryptocurrency acquisition plan
- [ ] Decryption guarantee: Yes / No
- **Recommendation:** __________

**Option 4: Rebuild from Scratch**
- [ ] Clean system images available
- [ ] Data re-entry feasible
- [ ] Estimated rebuild time: __________
- [ ] Resource availability confirmed
- **Viability:** Yes / No

### 3.2 Recovery Strategy Decision

**Decision Matrix:**
| Option | Pros | Cons | Cost | Time | Risk | Recommendation |
|--------|------|------|------|------|------|---------------|
| Backups | | | | | | |
| Decryption Tool | | | | | | |
| Ransom Payment | | | | | | |
| Rebuild | | | | | | |

**Selected Strategy:** __________
**Decision Made By:** __________
**Date/Time:** __________
**Rationale:** __________

### 3.3 Ransom Payment Decision (If Applicable)

**IMPORTANT: Consult legal counsel and law enforcement before paying**

**Considerations:**
- [ ] Legal implications reviewed
- [ ] Law enforcement notified
- [ ] Payment legality confirmed (sanctions, regulations)
- [ ] Negotiation attempted
- [ ] Payment tracking mechanism in place
- [ ] No guarantee of decryption understood
- [ ] Reputation impact considered

**If Payment Authorized:**
- **Authorized By:** __________
- **Negotiated Amount:** $ __________
- **Payment Wallet:** __________
- **Payment Time:** __________
- **Decryption Key Received:** Yes / No
- **Decryption Success:** _________%

---

## Phase 4: Eradication (8-24 Hours)

### 4.1 Threat Removal

**Malware Removal:**
- [ ] Identify all infected systems
- [ ] Remove ransomware executable
- [ ] Remove persistence mechanisms (registry, scheduled tasks, services)
- [ ] Delete malicious files
- [ ] Clean temporary directories
- [ ] Verify removal with security tools

**Credential Reset:**
- [ ] Reset all compromised accounts
- [ ] Force password changes for all users
- [ ] Reset service accounts
- [ ] Rotate API keys and tokens
- [ ] Invalidate active sessions
- [ ] Update domain admin passwords

**Security Hardening:**
- [ ] Patch all systems
- [ ] Update anti-malware signatures
- [ ] Enable additional security controls
- [ ] Implement enhanced monitoring
- [ ] Configure least-privilege access
- [ ] Disable unnecessary services

---

## Phase 5: Recovery (24-72 Hours)

### 5.1 System Restoration

**Restoration Plan:**
| Priority | System/Service | Restoration Method | Estimated Time | Dependencies | Assigned To | Status |
|----------|---------------|-------------------|---------------|--------------|------------|--------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

**Restoration Steps:**
1. **Prepare Clean Environment:**
   - [ ] Verify network isolation
   - [ ] Prepare clean system images
   - [ ] Stage backup data
   - [ ] Test restoration process

2. **Restore Systems (Priority Order):**
   - [ ] Domain controllers
   - [ ] Core infrastructure (DNS, DHCP, AD)
   - [ ] Critical business applications
   - [ ] User workstations
   - [ ] Secondary systems

3. **Data Restoration:**
   - [ ] Identify latest clean backup
   - [ ] Restore data from backups
   - [ ] Verify data integrity
   - [ ] Test application functionality
   - [ ] Validate user access

4. **System Validation:**
   - [ ] Run anti-malware scans
   - [ ] Verify system functionality
   - [ ] Test business processes
   - [ ] Conduct user acceptance testing
   - [ ] Monitor for re-infection

### 5.2 Progressive Restoration

**Day 1:**
- [ ] Critical systems restored
- [ ] Core business functions operational
- [ ] Basic connectivity established
- [ ] Security monitoring active

**Day 2:**
- [ ] Secondary systems restored
- [ ] Department-specific applications online
- [ ] User workstations available
- [ ] Full functionality restored

**Day 3:**
- [ ] All systems operational
- [ ] Full security monitoring
- [ ] Enhanced controls implemented
- [ ] Normal operations resumed

**Recovery Completion:** __________

---

## Phase 6: Post-Incident Activities (72+ Hours)

### 6.1 Forensic Analysis

**Evidence Collection:**
- [ ] Preserve disk images
- [ ] Collect memory dumps
- [ ] Save log files
- [ ] Document timeline
- [ ] Photograph ransom notes
- [ ] Record all actions taken

**Analysis Objectives:**
- [ ] Determine initial access vector
- [ ] Map attacker's actions (lateral movement)
- [ ] Identify compromised credentials
- [ ] Document exfiltrated data
- [ ] Assess dwell time
- [ ] Create indicators of compromise (IOCs)

**Forensic Report:**
- Prepared by: __________
- Date: __________
- Location: __________

### 6.2 Notification & Reporting

**Internal Notifications:**
- [ ] Executive leadership
- [ ] Board of directors
- [ ] All affected employees
- [ ] IT department
- [ ] Legal counsel
- [ ] Insurance provider

**External Notifications:**
- [ ] Law enforcement (FBI IC3, local police)
- [ ] Cyber insurance carrier
- [ ] Legal/regulatory authorities (if required)
- [ ] Affected customers/partners
- [ ] Credit monitoring services (if PII compromised)
- [ ] Media (if necessary)

**Regulatory Reporting:**
| Regulation | Applicable? | Deadline | Report Date | Filed By | Confirmation # |
|-----------|------------|----------|------------|----------|---------------|
| GDPR | | 72 hours | | | |
| HIPAA | | 60 days | | | |
| SEC | | 4 days | | | |
| State Laws | | Varies | | | |

### 6.3 Lessons Learned

**Post-Incident Review Meeting:**
- **Date:** __________
- **Participants:** __________
- **Facilitator:** __________

**Key Questions:**
1. What happened? __________
2. When did it happen? __________
3. How did it happen? __________
4. Why did it happen? __________
5. What worked well? __________
6. What could be improved? __________

**Root Cause Analysis:**
- **Primary Cause:** __________
- **Contributing Factors:** __________
- **Prevention Opportunities Missed:** __________

**Improvement Actions:**
| Action Item | Owner | Priority | Target Date | Status |
|------------|-------|----------|------------|--------|
| | | | | |
| | | | | |

---

## Preventive Measures

### Technical Controls
- [ ] Implement robust backup strategy (3-2-1 rule)
- [ ] Deploy endpoint detection and response (EDR)
- [ ] Enable email filtering and anti-phishing
- [ ] Implement network segmentation
- [ ] Deploy application whitelisting
- [ ] Disable unnecessary RDP access
- [ ] Implement multi-factor authentication
- [ ] Maintain patch management program
- [ ] Configure least-privilege access

### Administrative Controls
- [ ] Conduct security awareness training
- [ ] Perform regular phishing simulations
- [ ] Establish incident response procedures
- [ ] Conduct tabletop exercises
- [ ] Maintain offline backups
- [ ] Test backup restoration regularly
- [ ] Review and update security policies
- [ ] Conduct regular security assessments

### Monitoring & Detection
- [ ] Implement 24/7 security monitoring
- [ ] Configure SIEM alerts for ransomware indicators
- [ ] Monitor for suspicious file modifications
- [ ] Track privileged account usage
- [ ] Detect abnormal network traffic
- [ ] Monitor backup deletion attempts

---

## Resources & Contacts

### Internal Contacts
| Role | Name | Phone | Email | Alternate |
|------|------|-------|-------|-----------|
| CISO | | | | |
| IT Director | | | | |
| Legal Counsel | | | | |
| PR Director | | | | |
| CEO | | | | |

### External Contacts
| Organization | Contact | Phone | Email | Purpose |
|-------------|---------|-------|-------|---------|
| FBI IC3 | | 1-800-CALL-FBI | | Ransomware reporting |
| Cyber Insurance | | | | Claim filing |
| Forensics Firm | | | | Investigation |
| Legal (External) | | | | Compliance |
| PR Firm | | | | Media management |

### Tools & Resources
- ID Ransomware: https://id-ransomware.malwarehunterteam.com/
- No More Ransom: https://www.nomoreransom.org/
- FBI IC3: https://www.ic3.gov/
- CISA Ransomware Guide: https://www.cisa.gov/ransomware
- ERMITS CyberSoluce Platform: [Internal URL]

---

## Appendices

### Appendix A: Ransom Note Templates & Examples
[Collect and store sanitized copies of ransom notes]

### Appendix B: Decryption Tool Resources
[Links to known decryption tools by ransomware variant]

### Appendix C: Communication Templates
[Pre-approved templates for various stakeholder groups]

### Appendix D: Legal Considerations
[Jurisdiction-specific legal requirements and considerations]

### Appendix E: Insurance Claim Procedures
[Step-by-step guide for filing cyber insurance claims]

---

**ERMITS Advisory Services**
Incident Response Toolkit
Version 1.0 | 2024

**This is a living document. Update after each incident and during annual reviews.**
