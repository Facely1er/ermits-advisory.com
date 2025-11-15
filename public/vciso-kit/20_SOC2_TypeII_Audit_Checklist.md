# SOC 2 Type II Audit Checklist

**[ORGANIZATION_NAME]**

---

## Document Information

**Standard**: SOC 2 Type II
**Audit Scope**: [SPECIFY SYSTEMS AND SERVICES]
**Observation Period**: Minimum 6 months
**Audit Firm**: [NAME]
**Audit Date Range**: [START DATE] to [END DATE]
**Prepared By**: CISO / Compliance Officer
**Last Updated**: [DATE]

---

## Pre-Audit Preparation

### 30 Days Before Audit

**Documentation Review**:
- [ ] Information security policies current and approved
- [ ] Incident response plan documented
- [ ] Business continuity/disaster recovery plan
- [ ] Access control policies
- [ ] Change management procedures
- [ ] Vendor/third-party management policies
- [ ] Data protection and encryption policies
- [ ] Compliance and regulatory documentation

**Evidence Collection Begins**:
- [ ] System access logs (6+ months)
- [ ] Authentication logs (6+ months)
- [ ] Administrative action logs (6+ months)
- [ ] Change management records
- [ ] Incident reports
- [ ] Backup/recovery test results
- [ ] Training records
- [ ] Security assessment reports

**System Readiness**:
- [ ] All systems documented and inventoried
- [ ] System architecture diagrams prepared
- [ ] Data flow diagrams completed
- [ ] Boundary diagrams prepared
- [ ] Configuration documentation current

**Organizational Readiness**:
- [ ] Key stakeholders identified and briefed
- [ ] Communication plan prepared
- [ ] Document repository organized
- [ ] Access provided to audit team
- [ ] Conference room allocated for interviews

### 1 Week Before Audit

**Final Checks**:
- [ ] All audit team members identified
- [ ] Audit schedule confirmed
- [ ] Systems access credentials provided to auditors
- [ ] Incident list prepared (6-month history)
- [ ] Personnel roster prepared with role descriptions
- [ ] Supporting documentation organized and indexed

**Evidence Finalization**:
- [ ] All logs exported and verified
- [ ] All policies cross-referenced
- [ ] All training records compiled
- [ ] All incident evidence gathered
- [ ] All test results compiled
- [ ] All assessment reports compiled

---

## SOC 2 Trust Service Criteria

### CC: Common Criteria (Applies to All)

#### CC1: Control Environment

**CC1.1 - Governance and Independence**
- [ ] Board/Management has oversight responsibility for SOC 2 requirements
- [ ] CISO role defined and has organizational independence
- [ ] Governance structure documented
- [ ] Segregation of duties enforced
- [ ] Escalation procedures documented
- [ ] Evidence: Organizational chart, policy documents, board minutes

**CC1.2 - Board Oversight**
- [ ] Board/Management oversight committee meets regularly
- [ ] Board receives security reports
- [ ] Board approval for security policies
- [ ] Board awareness of significant risks
- [ ] Evidence: Meeting minutes, security reports, audit records

**CC1.3 - Management Accountability**
- [ ] Roles and responsibilities documented
- [ ] Accountability for SOC 2 requirements assigned
- [ ] Performance metrics established
- [ ] Regular performance reviews
- [ ] Evidence: Job descriptions, performance evaluations

**CC1.4 - Competence**
- [ ] Personnel have appropriate competence
- [ ] Training requirements defined
- [ ] Training records maintained
- [ ] Competency assessments performed
- [ ] Evidence: Training records, competency assessments, certifications

**CC1.5 - Ethical Values**
- [ ] Code of conduct established
- [ ] Ethics training provided
- [ ] Whistleblower procedures documented
- [ ] Violations documented and addressed
- [ ] Evidence: Code of conduct, training records, incident reports

**CC2: Communication**
- [ ] Roles and responsibilities communicated
- [ ] Policies and procedures documented and communicated
- [ ] Training records maintained
- [ ] Incident reporting procedures communicated
- [ ] Evidence: Training records, communication logs

**CC3: Risk Assessment**
- [ ] Risk assessment process documented
- [ ] Risks identified and documented
- [ ] Risk mitigation strategies defined
- [ ] Risks prioritized
- [ ] Regular risk review (annual minimum)
- [ ] Evidence: Risk register, risk assessment reports

**CC4: Control Activities**
- [ ] Control objectives defined
- [ ] Controls documented
- [ ] Control procedures implemented
- [ ] Control effectiveness monitoring
- [ ] Evidence: Control documentation, test results

**CC5: Monitoring**
- [ ] Continuous monitoring processes
- [ ] Control testing performed regularly
- [ ] Audit findings tracked and remediated
- [ ] Management reviews control effectiveness
- [ ] Evidence: Monitoring logs, test results, remediation records

**CC6: Remediation**
- [ ] Deficiencies identified and tracked
- [ ] Root causes analyzed
- [ ] Corrective actions planned
- [ ] Corrective actions implemented and tested
- [ ] Evidence: Issue tracking, remediation plans, test results

**CC7: Controls Over System Changes**
- [ ] Change management process documented
- [ ] Changes authorized before implementation
- [ ] Changes tested before production
- [ ] Changes documented with approval
- [ ] Changes reviewed for security impact
- [ ] Emergency change procedures documented
- [ ] Evidence: Change requests, approvals, test results

**CC8: Infrastructure and Operations**
- [ ] Infrastructure documented and monitored
- [ ] Environmental controls in place (power, cooling, physical security)
- [ ] Capacity planning performed
- [ ] Change management for infrastructure
- [ ] Operations procedures documented
- [ ] Evidence: Infrastructure diagrams, monitoring logs, procedures

**CC9: Risk Mitigation**
- [ ] Insurance and other risk mitigation strategies identified
- [ ] Mitigation strategies documented
- [ ] Regular review of mitigation effectiveness
- [ ] Evidence: Insurance policies, mitigation documentation

---

### S: Security (Trust Service Category)

#### S1: Confidentiality

**S1.1 - Information Protection Policies**
- [ ] Data classification policy established
- [ ] Encryption standards defined (data at rest and in transit)
- [ ] Access controls documented
- [ ] Third-party handling requirements defined
- [ ] Evidence: Policies, encryption standards, access control documentation

**S1.2 - Information Protection Processes**
- [ ] Data classification applied
- [ ] Encryption implemented and configured
- [ ] Access controls implemented
- [ ] Third-party agreements include security requirements
- [ ] Evidence: Data inventory, encryption configuration, access logs

**S1.3 - Information Protection Monitoring**
- [ ] Unauthorized access attempts monitored
- [ ] Encryption controls monitored
- [ ] Data classification compliance monitored
- [ ] Monitoring results reviewed
- [ ] Evidence: Monitoring logs, review reports

**S1.4 - Information Breach Response**
- [ ] Incident response plan for confidentiality breaches
- [ ] Procedures for data breach notification
- [ ] Regulatory notification procedures
- [ ] Investigation procedures
- [ ] Evidence: Incident response plan, breach notification records

**S2: Processing Integrity**
- [ ] Systems prevent/detect errors in processing
- [ ] Systems prevent/detect unauthorized transactions
- [ ] Data integrity controls implemented
- [ ] Logging and monitoring for data integrity
- [ ] Testing of integrity controls performed
- [ ] Evidence: System configuration, logs, test results

**S3: Availability**
- [ ] Availability targets defined (RTO/RPO)
- [ ] Infrastructure to support availability
- [ ] Monitoring systems for availability
- [ ] Incident response for availability issues
- [ ] Recovery procedures tested
- [ ] Evidence: Availability SLAs, backup test results, recovery procedures

**S4: Restricted Access**
- [ ] Access control policy based on least privilege
- [ ] Role-based access control (RBAC) implemented
- [ ] Access provisioning procedures
- [ ] Access removal procedures
- [ ] Access reviews performed regularly
- [ ] Multi-factor authentication (MFA) required for sensitive access
- [ ] Evidence: Access control policies, access review records, MFA configuration

**S5: Logical Security**
- [ ] Systems protected from unauthorized access
- [ ] Firewalls and network security controls
- [ ] Intrusion detection/prevention systems
- [ ] Authentication controls
- [ ] Encryption of sensitive data
- [ ] Evidence: Network diagrams, security tool configuration, logs

---

### A: Availability (Trust Service Category)

**A1 - Availability Controls**
- [ ] Availability objectives defined and communicated
- [ ] Monitoring systems detect availability issues
- [ ] Redundancy implemented for critical systems
- [ ] Failover capabilities tested
- [ ] Incident response for availability incidents
- [ ] Evidence: Availability SLAs, monitoring configuration, test results

**A2 - Performance and Scalability**
- [ ] Systems monitored for performance
- [ ] Capacity planning performed
- [ ] Load testing performed
- [ ] Scalability tested
- [ ] Performance baselines established
- [ ] Evidence: Performance reports, capacity plans, test results

**A3 - Recovery/Restoration**
- [ ] Backup procedures documented
- [ ] Backups tested regularly
- [ ] Recovery time objectives (RTO) defined
- [ ] Recovery point objectives (RPO) defined
- [ ] Recovery procedures documented and tested
- [ ] Off-site backup storage
- [ ] Evidence: Backup test results, recovery procedures, restoration logs

---

## Audit Testing

### Control Testing Approach

**Evidence for Each Control**:
- [ ] Design: How is control designed?
- [ ] Implementation: Has control been implemented?
- [ ] Effectiveness: Is control operating effectively?
- [ ] Timeline: Is control operating throughout observation period?

### Testing Methods
- [ ] Document review
- [ ] Interviews
- [ ] System access review
- [ ] Log analysis
- [ ] Testing of actual transactions
- [ ] Configuration review
- [ ] On-site observation

### Documentation Required

**For Each Tested Control**:
- [ ] Policy or procedure documentation
- [ ] Evidence of implementation (screenshots, logs, configuration)
- [ ] Evidence of operation (test results, logs)
- [ ] Timeline of operation (6+ months minimum)
- [ ] Management review and approval

---

## Common Findings & Remediation

### Potential Findings by Area

**Access Control**:
- Inactive accounts not removed
- Excessive privileges
- Lack of MFA
- Access reviews not performed
- Privileged access not monitored

**Data Protection**:
- Encryption not implemented
- Encryption keys not managed
- Sensitive data not classified
- Data retention not documented
- Encryption certificates not monitored

**Change Management**:
- Changes not documented
- Changes not tested
- Changes not approved
- Emergency changes not tracked
- Change impacts not assessed

**Monitoring & Logging**:
- Logs not retained for adequate period
- Logs not protected
- Logs not reviewed
- Monitoring not configured
- Alerts not monitored

### Remediation Process

For each finding:
- [ ] Root cause analysis
- [ ] Corrective action plan
- [ ] Implementation timeline
- [ ] Responsible party assignment
- [ ] Evidence of implementation
- [ ] Verification/retesting
- [ ] Documentation

---

## Audit Timeline

### Months 1-3: Planning Phase
- [ ] Kickoff meeting with audit firm
- [ ] System scope confirmed
- [ ] Documentation requirements finalized
- [ ] Evidence collection plan created
- [ ] Key personnel identified

### Months 3-6: Preliminary Phase
- [ ] On-site visit by auditors
- [ ] Systems reviewed
- [ ] Processes observed
- [ ] Preliminary control assessment
- [ ] Gaps identified
- [ ] Remediation recommendations provided

### Months 3-9: Observation Period
- [ ] Evidence collection continues
- [ ] Controls operating
- [ ] Monitoring and testing performed
- [ ] Documentation accumulated
- [ ] Issues tracked and remediated

### Month 9: Final Audit
- [ ] Final on-site visit
- [ ] Control testing completed
- [ ] Evidence reviewed
- [ ] Findings documented
- [ ] Management responses collected

### Month 10-12: Reporting
- [ ] Audit draft report issued
- [ ] Management review and comments
- [ ] Final report issued
- [ ] SOC 2 report generated
- [ ] Report distribution

---

## Post-Audit

### Report Distribution
- [ ] Final SOC 2 report received
- [ ] Report reviewed for findings
- [ ] Report provided to stakeholders
- [ ] Findings communicated to management
- [ ] Remediation plan created
- [ ] Marketing updates website with SOC 2 certification

### Remediation Tracking
- [ ] Findings prioritized
- [ ] Corrective actions assigned
- [ ] Implementation timelines set
- [ ] Progress monitored
- [ ] Effectiveness verified
- [ ] Documentation updated

### Continuous Improvement
- [ ] Lessons learned documented
- [ ] Processes improved
- [ ] Controls strengthened
- [ ] Policies updated
- [ ] Training updated
- [ ] Next audit planning begins (for Type II continuation)

---

## Audit Preparation Checklist

### 6 Months Before Audit

**Policies & Procedures**:
- [ ] All policies up to date and approved
- [ ] All procedures documented
- [ ] Documentation adequate and organized
- [ ] Policy review dates scheduled

**Controls Evaluation**:
- [ ] Existing controls assessed
- [ ] Gaps identified
- [ ] Remediation plans created
- [ ] Control improvements prioritized

**Infrastructure**:
- [ ] Systems documented
- [ ] Architecture documented
- [ ] Network diagrams current
- [ ] Infrastructure changes planned

### 3 Months Before Audit

**Evidence Collection Setup**:
- [ ] Logging configured and tested
- [ ] Monitoring configured
- [ ] Reports scheduled
- [ ] Evidence retention verified

**Team Preparation**:
- [ ] SOC 2 training for key personnel
- [ ] Audit coordinator identified
- [ ] Document management system prepared
- [ ] Access control review performed

**Risk Assessment**:
- [ ] Current risks identified
- [ ] Mitigating controls verified
- [ ] Residual risks documented
- [ ] Management sign-off obtained

### During Audit

**Coordination**:
- [ ] Audit coordinator available
- [ ] Management accessible
- [ ] Document access provided
- [ ] System access granted
- [ ] Interview scheduling

**Issue Management**:
- [ ] Issues tracked as they arise
- [ ] Evidence provided promptly
- [ ] Clarifications provided
- [ ] Root causes analyzed

---

## Key Audit Dates & Deliverables

| Milestone | Date | Owner | Deliverable |
|-----------|------|-------|-------------|
| Audit Kickoff | [DATE] | CISO | Confirmed scope |
| Preliminary Audit | [DATE] | CISO | Preliminary findings |
| Evidence Due | [DATE] | Compliance | Compiled evidence |
| Final Audit | [DATE] | CISO | Final testing complete |
| Draft Report | [DATE] | Audit Firm | Draft SOC 2 report |
| Final Report | [DATE] | Audit Firm | Final SOC 2 report |

---

## Contact Information

| Role | Name | Contact |
|------|------|---------|
| **CISO** | | |
| **Compliance Officer** | | |
| **Audit Coordinator** | | |
| **Audit Firm Contact** | | |
| **Key System Owners** | | |

---

**Checklist Owner**: Chief Information Security Officer
**Last Updated**: [DATE]
**Next Audit**: [DATE + 1 YEAR]

---

## References

- SOC 2 Trust Service Criteria: [LINK]
- AICPA SOC 2 Guide: [LINK]
- Internal Audit Standards: [LINK]
- Related Policies: [LIST LINKS]
