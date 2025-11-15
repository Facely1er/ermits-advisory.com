# Ransomware Response Playbook

**[ORGANIZATION_NAME]**

---

## Incident Type: Ransomware Attack

**Severity:** CRITICAL
**Response Time:** Immediate (within 1 hour)
**Escalation:** Executive level

---

## Quick Reference

| Step | Action | Owner | Time |
|------|--------|-------|------|
| 1 | Detect/Report | Any employee | Immediate |
| 2 | Activate team | Incident Commander | 15 min |
| 3 | Isolate systems | IT Security | 30 min |
| 4 | Assess scope | Security Lead | 1 hour |
| 5 | Notify leadership | Communications | 1 hour |
| 6 | Preserve evidence | Forensics | Ongoing |
| 7 | Develop strategy | Incident team | 2-4 hours |
| 8 | Execute recovery | IT/Recovery team | Ongoing |

---

## Detection Indicators

- Unusual file extensions (.lock, .encrypted, .ransom)
- Ransom note displayed on screen
- Files inaccessible or corrupted
- Unusual network activity
- Mass file modifications
- Slow system performance
- Encryption activity logs

---

## Phase 1: Immediate Response (0-1 hour)

### 1.1 Incident Confirmation
- [ ] Verify ransomware infection
- [ ] Identify affected systems
- [ ] Determine ransomware variant (if identifiable)
- [ ] Document discovery time and method

### 1.2 System Isolation
- [ ] Immediately disconnect affected system from network
- [ ] Unplug network cable and disable WiFi
- [ ] Power off system (don't perform graceful shutdown yet)
- [ ] Isolate shared drives from being accessed by ransomware

### 1.3 Team Activation
- [ ] Contact Incident Commander
- [ ] Activate full incident response team
- [ ] Notify CISO immediately
- [ ] Prepare war room/meeting space

### 1.4 Initial Documentation
- [ ] Capture screenshots of ransom note
- [ ] Document affected systems list
- [ ] Record discovery timestamp
- [ ] Note any suspicious activities observed

---

## Phase 2: Containment (1-2 hours)

### 2.1 Scope Assessment
- [ ] Identify all infected systems
- [ ] Determine infection path
- [ ] Identify entry point (email, VPN, exploit, etc.)
- [ ] Check backup systems (ensure not infected)

### 2.2 Network Containment
- [ ] Identify and isolate affected network segments
- [ ] Segment network to prevent lateral movement
- [ ] Monitor network traffic for C&C communications
- [ ] Block known command and control servers

### 2.3 Backup System Protection
- [ ] Verify backup systems not infected
- [ ] Disconnect backup systems from network if at risk
- [ ] Test backup integrity
- [ ] Prepare for recovery from clean backups

### 2.4 Communication
- [ ] Notify affected business units
- [ ] Determine notification scope
- [ ] Prepare holding statements
- [ ] Plan for customer communication

---

## Phase 3: Investigation (2-6 hours)

### 3.1 Forensic Collection
- [ ] Image affected systems (before powering on)
- [ ] Capture network traffic (if still occurring)
- [ ] Collect logs from all systems
- [ ] Preserve evidence chain of custody

### 3.2 Root Cause Analysis
- [ ] Determine entry method
- [ ] Identify initial compromise date
- [ ] Trace attacker movement through network
- [ ] Identify privileged account access

### 3.3 Ransomware Identification
- [ ] Identify ransomware family/variant
- [ ] Check against known indicators
- [ ] Consult threat intelligence resources
- [ ] Research decryption tools (ransomware-decryptor.org, etc.)

### 3.4 Threat Intelligence
- [ ] Review ransom note for indicators
- [ ] Check attacker group known behavior
- [ ] Assess likelihood of decryption key availability
- [ ] Review threat intel on ransomware variant

---

## Phase 4: Decision Making (2-4 hours)

### 4.1 Ransom Negotiation Decision
**Recommendation:** Do NOT pay ransom

**Reasons:**
- Funds criminal activity
- No guarantee files will be recovered
- Invites future attacks
- Violates sanctions if applicable

### 4.2 Law Enforcement Notification
- [ ] Report to FBI (ic3.gov)
- [ ] Report to local law enforcement
- [ ] Provide forensic findings
- [ ] Coordinate investigation

### 4.3 Regulatory Notification
- [ ] Determine if breach notification required
- [ ] Notify insurance carrier
- [ ] Determine notification timeline
- [ ] Prepare notification content

---

## Phase 5: Recovery Strategy

### 5.1 Recovery Options (in order of preference)

**Option 1: Restore from Backups** (PREFERRED)
- [ ] Verify backup integrity
- [ ] Restore to clean point before infection
- [ ] Validate system functionality
- [ ] Patch systems before reconnection

**Option 2: Check for Decryption Tools**
- [ ] Research ransomware-specific decryptors
- [ ] Download from trusted sources (Emsisoft, Kaspersky)
- [ ] Test on sample files
- [ ] Execute if successful

**Option 3: Manual System Rebuild**
- [ ] Clean install operating system
- [ ] Restore applications from clean source
- [ ] Restore data from verified clean backups
- [ ] Test thoroughly before production use

### 5.2 System Remediation
- [ ] Remove all malware
- [ ] Patch all vulnerabilities
- [ ] Reset all credentials
- [ ] Reinstall software from clean source
- [ ] Verify system integrity

---

## Phase 6: Restoration (Ongoing)

### 6.1 Recovery Execution
- [ ] Prioritize critical systems
- [ ] Restore by business importance
- [ ] Test each system thoroughly
- [ ] Document restoration process

### 6.2 Validation
- [ ] Confirm files accessible and uncorrupted
- [ ] Verify system functionality
- [ ] Test business processes
- [ ] Monitor for re-infection

### 6.3 Network Reconnection
- [ ] Carefully monitor for re-encryption
- [ ] Apply all security patches
- [ ] Enable enhanced monitoring
- [ ] Keep systems isolated until confident

---

## Phase 7: Post-Incident

### 7.1 Communication
- [ ] Customer notification (if required)
- [ ] Media statement (if public)
- [ ] Regulatory disclosure (if required)
- [ ] Staff briefing

### 7.2 Lessons Learned
- [ ] Root cause remediation
- [ ] Vulnerability patching
- [ ] Access control improvements
- [ ] Backup verification process
- [ ] Security awareness training

### 7.3 Improvements
- [ ] Endpoint detection tools
- [ ] Network segmentation enhancements
- [ ] Backup isolation procedures
- [ ] Incident response plan updates
- [ ] Security policy updates

---

## Critical Contacts

| Role | Name | Phone | Email |
|------|------|-------|-------|
| Incident Commander | | | |
| Security Lead | | | |
| IT Director | | | |
| CISO | | | |
| Legal Counsel | | | |
| Communications | | | |
| FBI Contact | | | |

---

## Prevention Measures

- Patch management program
- Email filtering and anti-phishing
- Endpoint detection and response (EDR)
- Network segmentation
- Backup verification (regular restores)
- Security awareness training
- Incident response drills

---

**Last Updated:** [DATE]
**Next Review:** [DATE]
