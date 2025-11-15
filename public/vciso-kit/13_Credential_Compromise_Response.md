# Credential Compromise Response Playbook

**[ORGANIZATION_NAME]**

---

## Incident Type: Credential Compromise

**Severity:** HIGH
**Response Time:** Immediate (within 30 minutes)
**Escalation:** Security Leadership + IT

---

## Quick Reference

| Step | Action | Owner | Time |
|------|--------|-------|------|
| 1 | Detect/Report | Any employee | Immediate |
| 2 | Activate team | Incident Commander | 15 min |
| 3 | Credential reset | IT Security/Identity | 30 min |
| 4 | Account review | Security Lead | 1 hour |
| 5 | Access audit | System Admins | 2 hours |
| 6 | MFA enforcement | IT Security | Ongoing |
| 7 | Monitor activity | SOC/Monitoring | 7 days |
| 8 | Investigation | Security | 24-48 hours |
| 9 | Notification | Communications | Per policy |
| 10 | Lessons learned | Leadership | 5 days |

---

## Detection Indicators

- Notification from external password breach databases
- Unusual login attempts from unknown locations
- Failed authentication attempts followed by success
- Account lockouts
- Password reset notifications not initiated by user
- Unusual system access times
- Multiple failed MFA attempts
- Account activity during off-hours
- Reports from users of credential phishing
- Third-party notification of credential sale on dark web

---

## Phase 1: Immediate Response (0-30 minutes)

### 1.1 Incident Confirmation
- [ ] Verify credential has been compromised
- [ ] Identify specific accounts affected
- [ ] Determine source of compromise:
  - [ ] Password breach database
  - [ ] Phishing email
  - [ ] Malware/keylogger
  - [ ] Password manager compromise
  - [ ] Third-party service breach
  - [ ] Insider threat
- [ ] Document discovery method and time
- [ ] Preserve evidence (screenshots, logs, etc.)

### 1.2 Credential Invalidation
- [ ] Reset passwords for all affected accounts
- [ ] Force re-authentication for all active sessions
- [ ] Invalidate all API tokens/keys
- [ ] Revoke VPN certificates (if applicable)
- [ ] Disable SSH keys (if applicable)
- [ ] Invalidate temporary credentials
- [ ] Document all credentials reset

### 1.3 Multi-Factor Authentication Enforcement
- [ ] Disable existing MFA tokens
- [ ] Require re-enrollment in MFA
- [ ] Send MFA setup instructions to users
- [ ] Verify MFA enrollment completion
- [ ] Enforce MFA before account access
- [ ] Document MFA enforcement

### 1.4 Team Activation
- [ ] Contact Incident Commander
- [ ] Notify IT Security team
- [ ] Notify Identity & Access Management
- [ ] Notify CISO
- [ ] Brief relevant department leadership
- [ ] Establish communication channels

---

## Phase 2: Scope Assessment (30 minutes - 2 hours)

### 2.1 Affected Account Identification
- [ ] Determine all accounts using compromised credentials
- [ ] Identify shared accounts (if applicable)
- [ ] Check for credential reuse across systems
- [ ] Verify account status (active, inactive, etc.)
- [ ] Identify account privileges
- [ ] Document all affected accounts

### 2.2 Access Review
- [ ] Review account access and permissions
- [ ] Check last login information
- [ ] Review login history for suspicious activity:
  - [ ] Logins from unusual locations
  - [ ] Logins at unusual times
  - [ ] Logins from multiple locations simultaneously
  - [ ] Multiple failed login attempts
- [ ] Check for privilege escalation
- [ ] Verify account activity logs

### 2.3 Systems Accessed
- [ ] Identify all systems accessed with compromised credentials
- [ ] Review access patterns
- [ ] Check for data access
- [ ] Verify if changes were made
- [ ] Assess if malware was deployed
- [ ] Document all access details

### 2.4 Exposure Assessment
- [ ] Assess if attacker had time to perform actions
- [ ] Determine data exposure risk
- [ ] Evaluate system compromise risk
- [ ] Assess if attacker escalated privileges
- [ ] Review for lateral movement
- [ ] Document exposure details

---

## Phase 3: Investigation (2-48 hours)

### 3.1 Forensic Analysis
- [ ] Collect logs from all accessed systems
- [ ] Review authentication logs
- [ ] Analyze system access logs
- [ ] Review file access logs
- [ ] Check for malware/backdoors installed
- [ ] Verify system integrity
- [ ] Preserve evidence chain of custody

### 3.2 Attacker Attribution
- [ ] Determine attacker location (if identifiable)
- [ ] Check threat intelligence databases
- [ ] Analyze attack methods
- [ ] Assess skill level
- [ ] Check for known attacker signatures
- [ ] Determine likely motivation
- [ ] Document findings

### 3.3 Malware/Backdoor Check
- [ ] Scan affected systems for malware
- [ ] Check for installed backdoors
- [ ] Review startup processes
- [ ] Check scheduled tasks
- [ ] Verify system binary integrity
- [ ] Check browser history and cache
- [ ] Review installed applications

### 3.4 Unauthorized Actions
- [ ] Review administrative actions performed
- [ ] Check for data exfiltration
- [ ] Verify if accounts were created
- [ ] Check for privilege escalation
- [ ] Review for configuration changes
- [ ] Verify system patches
- [ ] Document all unauthorized actions

---

## Phase 4: Containment & Remediation

### 4.1 System Remediation
- [ ] Run full malware scans
- [ ] Remove any detected malware
- [ ] Patch all vulnerabilities
- [ ] Update antivirus definitions
- [ ] Verify clean system state
- [ ] Document remediation steps

### 4.2 Access Control Hardening
- [ ] Review and revoke unnecessary permissions
- [ ] Enforce principle of least privilege
- [ ] Update access control lists
- [ ] Review shared accounts (recommend elimination)
- [ ] Strengthen authentication
- [ ] Document access changes

### 4.3 Password Management
- [ ] Verify password policy enforcement
- [ ] Implement stronger complexity requirements
- [ ] Shorten password rotation intervals temporarily
- [ ] Prohibit password reuse
- [ ] Enable password breach notification
- [ ] Document policy changes

### 4.4 Monitoring Enhancement
- [ ] Enable account activity logging
- [ ] Set alerts for suspicious logins
- [ ] Monitor from unusual locations
- [ ] Alert on privilege escalation
- [ ] Monitor for file access anomalies
- [ ] Establish baseline for monitoring

---

## Phase 5: User Communication & Support

### 5.1 User Notification
- [ ] Send password reset notification to affected users
- [ ] Provide password reset instructions
- [ ] Explain credential compromise
- [ ] Advise on exposure risk
- [ ] Provide MFA setup guidance
- [ ] Offer security tips and resources
- [ ] Provide support contact information

### 5.2 Support & Guidance
- [ ] Establish help desk support queue
- [ ] Provide password reset assistance
- [ ] Help with MFA enrollment
- [ ] Answer security questions
- [ ] Provide external breach information
- [ ] Maintain communication logs

### 5.3 User Education
- [ ] Send security awareness message
- [ ] Explain how credential was compromised
- [ ] Recommend password manager use
- [ ] Advise on strong password creation
- [ ] Emphasize MFA importance
- [ ] Provide phishing awareness training

---

## Phase 6: External Credential Monitoring (Ongoing)

### 6.1 Dark Web Monitoring
- [ ] Enroll affected users in dark web monitoring
- [ ] Monitor paste sites for credential dumps
- [ ] Monitor dark web markets
- [ ] Check credential breach databases
- [ ] Set up alerts for reappearance
- [ ] Document monitoring results

### 6.2 Third-Party Services
- [ ] Notify if credentials used in third-party services
- [ ] Check if password was reused externally
- [ ] Monitor for fraudulent account creation
- [ ] Alert users to check personal accounts
- [ ] Provide credit monitoring if identity theft risk
- [ ] Document third-party notifications

---

## Phase 7: Post-Incident Review (5-7 days)

### 7.1 Incident Analysis
- [ ] Complete investigation report
- [ ] Document root cause
- [ ] Trace compromise path
- [ ] Timeline of events
- [ ] All findings and evidence
- [ ] Recommendations for prevention

### 7.2 Lessons Learned
- [ ] Team debrief session
- [ ] Review response effectiveness
- [ ] Identify improvements
- [ ] Update procedures
- [ ] Document best practices discovered
- [ ] Brief leadership on findings

### 7.3 Preventive Improvements
- [ ] Enforce MFA organization-wide
- [ ] Implement password manager
- [ ] Deploy credential breach monitoring
- [ ] Enhance detection capabilities
- [ ] Improve incident response procedures
- [ ] Schedule security awareness training
- [ ] Plan phishing simulations

---

## Investigation Checklist

### User Interview Questions
- [ ] When did you last use this password?
- [ ] Have you used this password on other services?
- [ ] Have you received any suspicious emails recently?
- [ ] Have you noticed unusual account activity?
- [ ] Have you installed any new software recently?
- [ ] Have you visited suspicious websites?
- [ ] Have you shared this password with anyone?
- [ ] Is your computer secure (no malware)?

### System Review Checklist
- [ ] Authentication logs (past 90 days)
- [ ] Access logs for systems used
- [ ] File access logs
- [ ] Database access logs
- [ ] VPN connection logs
- [ ] Administrative action logs
- [ ] Change management logs
- [ ] Security event logs

### External Check Checklist
- [ ] Check breach databases (HaveIBeenPwned, etc.)
- [ ] Check dark web paste sites
- [ ] Contact social media platforms
- [ ] Check email forwarding rules
- [ ] Verify recovery email address
- [ ] Check account recovery options
- [ ] Verify phone number on file
- [ ] Check linked accounts

---

## Credential Compromise Severity Matrix

| Factor | Impact |
|--------|--------|
| Admin/privileged account | CRITICAL - IMMEDIATE ACTION |
| Finance/accounting access | CRITICAL - IMMEDIATE ACTION |
| Executive account | CRITICAL - IMMEDIATE ACTION |
| System/database access | HIGH - RESET IMMEDIATELY |
| Regular user account | MEDIUM - RESET WITHIN 2 HOURS |
| Service account | CRITICAL - RESET IMMEDIATELY |
| API key/token | CRITICAL - REVOKE IMMEDIATELY |
| Shared account | CRITICAL - RESET ALL USERS |

---

## Critical Contacts

| Role | Name | Phone | Email |
|------|------|-------|-------|
| Incident Commander | | | |
| Identity Manager | | | |
| IT Security Lead | | | |
| CISO | | | |
| Help Desk Manager | | | |
| System Owners | | | |
| Department Heads | | | |

---

## Prevention Measures

- Mandatory multi-factor authentication
- Password manager deployment
- Credential breach monitoring
- Privileged access management (PAM)
- Session timeout enforcement
- Endpoint detection and response (EDR)
- Security awareness training (phishing focus)
- Incident response drills
- Regular access reviews
- Account lockout policies

---

**Last Updated:** [DATE]
**Next Review:** [DATE]
