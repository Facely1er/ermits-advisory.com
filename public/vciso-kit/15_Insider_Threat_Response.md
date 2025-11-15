# Insider Threat Response Playbook

**[ORGANIZATION_NAME]**

---

## Incident Type: Insider Threat

**Severity:** HIGH to CRITICAL (depending on actions)
**Response Time:** Immediate (within 1 hour)
**Escalation:** Executive level + Legal + HR

---

## Quick Reference

| Step | Action | Owner | Time |
|------|--------|-------|------|
| 1 | Detect/Report | Any employee | Immediate |
| 2 | Activate team | Incident Commander | 15 min |
| 3 | Assess threat | Security Lead | 30 min |
| 4 | Legal review | Legal Counsel | 1 hour |
| 5 | HR notification | HR Director | 1 hour |
| 6 | Access suspension | IT Security | 1-2 hours |
| 7 | Investigation | Security/Legal | 24-48 hours |
| 8 | Interview | HR/Legal | 2-5 days |
| 9 | Resolution | HR/Legal | 5-14 days |
| 10 | Follow-up | Leadership | Ongoing |

---

## Suspicious Activity Indicators

### Behavioral Indicators
- Unusual access to sensitive data outside job role
- Access to data before/after normal work hours
- Excessive access requests
- Accessing colleagues' files without business justification
- Attempting to avoid detection or surveillance
- Expressing financial difficulties
- Grievances or dissatisfaction
- Sudden change in behavior or attitude
- Seeking promotions/raises despite poor performance
- Relationship with competitors

### Technical Indicators
- Mass data downloads or copying
- Accessing data from unusual locations/devices
- Unusual email activity:
  - [ ] Forwarding sensitive data to personal accounts
  - [ ] Sending large files externally
  - [ ] Late night/weekend email activity
- USB device usage
- Unusual printing activity
- VPN access at odd hours
- Accessing terminated employee accounts

### Observable Actions
- Photographing documents or screens
- Copying files to personal devices
- Removing company equipment
- Discussing confidential matters inappropriately
- Offering sensitive information
- Unauthorized access to restricted areas
- Tampering with security systems
- Hiring competitors as consultants

---

## Phase 1: Initial Assessment (0-1 hour)

### 1.1 Threat Report Reception
- [ ] Document all threat report details
- [ ] Identify reporting source
- [ ] Record specific allegations
- [ ] Document suspicious activities
- [ ] Note evidence observed
- [ ] Capture timeline of observations
- [ ] Request contact information for follow-up

### 1.2 Preliminary Assessment
- [ ] Evaluate credibility of report
- [ ] Assess severity level (LOW/MEDIUM/HIGH/CRITICAL)
- [ ] Determine if immediate action needed
- [ ] Assess risk to organization
- [ ] Check for ongoing threat
- [ ] Verify reporter identity if anonymous
- [ ] Document assessment details

### 1.3 Threat Severity Determination
- [ ] Has sensitive data been accessed?
- [ ] Is data still at risk?
- [ ] Is the person still employed?
- [ ] Does person have system access?
- [ ] Is there evidence of malicious intent?
- [ ] Could damage be irreversible?
- [ ] Has data been exfiltrated?

**CRITICAL**: Imminent harm risk, active data theft, sabotage
**HIGH**: Suspicious data access, policy violations, intent indicators
**MEDIUM**: Minor policy violations, low-risk behavior
**LOW**: Questionable behavior, no confirmed violation

### 1.4 Team Activation
- [ ] Contact Incident Commander
- [ ] Notify Legal Counsel immediately
- [ ] Notify CISO
- [ ] Notify HR Director (CRITICAL/HIGH only)
- [ ] Notify executive sponsor
- [ ] Brief on findings and severity
- [ ] Establish communication protocol

---

## Phase 2: Immediate Protective Actions (1-2 hours)

### 2.1 Access Control Decision
- [ ] Review suspect's current system access
- [ ] Determine if access suspension needed
- [ ] Check for ongoing access
- [ ] Review recent activities
- [ ] Consult with Legal before action
- [ ] Document access decisions
- [ ] Plan access suspension if approved

**Decision criteria for suspension:**
- Active data exfiltration
- Risk of data destruction
- Risk of sabotage
- Evidence of criminal activity
- Imminent departure risk

### 2.2 Access Suspension (if approved by Legal)
- [ ] Coordinate with IT Security
- [ ] Plan simultaneous access revocation
- [ ] Suspend system access
- [ ] Revoke badge/building access
- [ ] Revoke VPN access
- [ ] Revoke email access
- [ ] Revoke application access
- [ ] Document all actions with timestamp
- [ ] Preserve access logs

### 2.3 Information Preservation
- [ ] Preserve email account
- [ ] Back up user files
- [ ] Capture email metadata
- [ ] Preserve calendar entries
- [ ] Document file access logs
- [ ] Capture network logs
- [ ] Preserve USB device logs
- [ ] Document all preservation actions

### 2.4 Notification Strategy
- [ ] Consult with Legal on notification timing
- [ ] Plan HR involvement approach
- [ ] Determine if immediate termination likely
- [ ] Establish communication process
- [ ] Brief facilities/security
- [ ] Plan for any needed escort procedures
- [ ] Document notification plan

---

## Phase 3: Investigation (24-72 hours)

### 3.1 Digital Forensics
- [ ] Collect suspect's computer
- [ ] Image hard drive and memory
- [ ] Preserve email evidence
- [ ] Review file access logs
- [ ] Analyze network logs
- [ ] Review VPN connection logs
- [ ] Examine browsing history
- [ ] Preserve chain of custody
- [ ] Engage external forensics if needed

### 3.2 Data Access Analysis
- [ ] Review what data was accessed
- [ ] Determine when access occurred
- [ ] Identify data copied/exported
- [ ] Check for external transmission
- [ ] Review file modification times
- [ ] Verify data integrity
- [ ] Assess exfiltration risk
- [ ] Document data access findings

### 3.3 Motivation Assessment
- [ ] Review employment history
- [ ] Check for performance issues
- [ ] Identify financial circumstances
- [ ] Review for outside relationships
- [ ] Assess ties to competitors
- [ ] Determine motive categories:
  - [ ] Financial gain (selling data)
  - [ ] Sabotage (damage)
  - [ ] Espionage (competitor information)
  - [ ] Revenge (disgruntlement)
  - [ ] Carelessness (unintentional)

### 3.4 Evidence Collection
- [ ] Document all findings
- [ ] Compile evidence file
- [ ] Preserve original evidence
- [ ] Create evidence copies
- [ ] Establish chain of custody
- [ ] Prepare for legal review
- [ ] Document investigation timeline
- [ ] Preserve investigator notes

---

## Phase 4: Legal Review (2-4 hours)

### 4.1 Legal Consultation
- [ ] Present findings to Legal
- [ ] Discuss evidence strength
- [ ] Review for violations:
  - [ ] Policy violations
  - [ ] Criminal violations
  - [ ] Intellectual property theft
  - [ ] Trade secret theft
  - [ ] Breach of contract
- [ ] Assess civil action options
- [ ] Assess criminal referral options

### 4.2 Law Enforcement Coordination
- [ ] Determine if criminal activity occurred
- [ ] Decide whether to report to law enforcement
- [ ] Contact FBI (if trade secret theft)
- [ ] Contact local law enforcement
- [ ] Preserve evidence for authorities
- [ ] Establish communication with investigators
- [ ] Document all communications

### 4.3 Employment Action Planning
- [ ] Review with Legal acceptable actions
- [ ] Assess for potential litigation
- [ ] Plan for termination (if appropriate)
- [ ] Prepare severance/separation agreement
- [ ] Plan reference letter approach
- [ ] Review non-compete/NDA enforcement
- [ ] Document legal guidance

---

## Phase 5: Interview & Confrontation (2-5 days)

### 5.1 Interview Preparation
- [ ] Compile all evidence
- [ ] Identify key facts
- [ ] Prepare interview questions
- [ ] Ensure Legal and HR present
- [ ] Plan interview location
- [ ] Consider security needs
- [ ] Prepare for various responses
- [ ] Document interview plan

### 5.2 Conduct Interview
- [ ] Explain purpose (don't accuse)
- [ ] Ask open-ended questions
- [ ] Request explanation of activities
- [ ] Present evidence factually
- [ ] Allow response to allegations
- [ ] Document responses
- [ ] Avoid confrontational approach
- [ ] Preserve evidence chain

### 5.3 Interview Questions
- "Can you explain your access to [DATA]?"
- "Why was this data accessed at [TIME/DATE]?"
- "Can you explain [SPECIFIC ACTION]?"
- "Have you shared access credentials?"
- "Have you copied company data?"
- "Do you have authorized reasons for these actions?"
- "Can you explain the file transfers?"
- "Are you aware of our data protection policies?"

### 5.4 Response Documentation
- [ ] Document all responses
- [ ] Note verbal statements
- [ ] Capture admissions
- [ ] Record denials
- [ ] Note contradictions
- [ ] Preserve interview recording (if approved)
- [ ] Provide copy to suspect (if legal advice)

---

## Phase 6: Resolution & Termination (5-14 days)

### 6.1 Employment Action
- [ ] HR and Legal determine action
- [ ] Possible actions:
  - [ ] Termination for cause
  - [ ] Disciplinary action
  - [ ] Reassignment
  - [ ] Enhanced monitoring
  - [ ] Probation period
- [ ] Prepare termination documentation
- [ ] Plan termination meeting
- [ ] Arrange IT access removal
- [ ] Plan equipment collection
- [ ] Arrange escort if needed
- [ ] Document all actions

### 6.2 Termination Execution
- [ ] Schedule termination meeting
- [ ] Brief Facilities/Security
- [ ] Have IT ready to revoke access
- [ ] Conduct termination meeting
- [ ] Collect equipment
- [ ] Revoke all access
- [ ] Escort from building if needed
- [ ] Preserve severance/separation details

### 6.3 Post-Termination Actions
- [ ] Cancel all access credentials
- [ ] Remove from all systems
- [ ] Revoke email forwarding
- [ ] Preserve email for discovery
- [ ] Update references
- [ ] Brief remaining team
- [ ] Monitor for any access attempts
- [ ] Document all actions

### 6.4 Legal Actions
- [ ] Enforce non-compete agreement
- [ ] Enforce NDA/confidentiality agreement
- [ ] Pursue trade secret protection
- [ ] Monitor for misuse of information
- [ ] Engage in litigation if needed
- [ ] Coordinate with law enforcement
- [ ] Preserve evidence for legal proceedings

---

## Phase 7: Post-Incident (7-30 days)

### 7.1 Investigation Completion
- [ ] Finalize investigation report
- [ ] Document all findings
- [ ] Compile evidence
- [ ] Timeline of events
- [ ] Recommendations
- [ ] Preserve for potential litigation
- [ ] Brief leadership on resolution

### 7.2 Data Breach Assessment
- [ ] Determine if data breach occurred
- [ ] Assess what was exfiltrated
- [ ] Evaluate external disclosure risk
- [ ] Assess customer/third-party impact
- [ ] Determine notification obligations
- [ ] Plan breach response if needed

### 7.3 Organizational Communication
- [ ] Brief affected teams
- [ ] Explain security response
- [ ] Assure data protection measures
- [ ] Describe preventive improvements
- [ ] Do NOT disclose employee details
- [ ] Maintain confidentiality
- [ ] Reinforce security culture

### 7.4 Prevention Improvements
- [ ] Enhanced access controls
- [ ] Improved monitoring/logging
- [ ] Data loss prevention (DLP)
- [ ] Behavioral analysis tools
- [ ] Insider threat awareness training
- [ ] Reference check improvements
- [ ] Background check enhancements
- [ ] Exit interview improvements

---

## Interview Question Examples

**Innocent Explanation Expected:**
- "Walk me through your access to this data"
- "Explain the business reason for this file transfer"
- "Tell me about your work on this project"

**Probing Questions:**
- "Have you ever copied company data to personal device?"
- "Have you shared your credentials with anyone?"
- "Have you accessed data outside your role?"

**Direct Questions:**
- "Did you intend to take this data?"
- "Are you aware this violates our policies?"
- "What were you planning to do with this information?"

---

## Critical Contacts

| Role | Name | Phone | Email |
|------|------|-------|-------|
| Incident Commander | | | |
| Legal Counsel | | | |
| CISO | | | |
| HR Director | | | |
| Forensic Investigator | | | |
| FBI Contact (if applicable) | | | |
| Executive Sponsor | | | |
| Security Director | | | |

---

## Prevention Measures

- Behavioral threat monitoring
- User activity logging and monitoring
- Data loss prevention (DLP) tools
- Access control enforcement
- Least privilege implementation
- Enhanced background checks
- Exit interview process
- Insider threat training
- Clear policies on data handling
- Regular access reviews
- Monitoring of privileged users
- Report line for concerns
- Confidential reporting hotline

---

**Last Updated:** [DATE]
**Next Review:** [DATE]

---

## IMPORTANT LEGAL NOTES

- All investigations must involve Legal Counsel
- Preserve chain of custody for evidence
- Maintain investigation confidentiality
- Do not conduct illegal surveillance
- Comply with employment law
- Respect employee rights
- Document all decisions
- Consider litigation preservation
