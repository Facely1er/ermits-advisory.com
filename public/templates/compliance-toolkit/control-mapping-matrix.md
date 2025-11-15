# Control Mapping Matrix

## Overview
This template maps security controls across multiple compliance frameworks to identify overlaps and streamline compliance efforts.

---

## Organization Information
- **Organization Name:** _______________________
- **Mapping Date:** _______________________
- **Prepared by:** _______________________
- **Frameworks Covered:** NIST CSF, ISO 27001, SOC 2, HIPAA, GDPR, CMMC, PCI-DSS

---

## How to Use This Template

1. **Identify Your Control:** Start with your internal control or security measure
2. **Map to Frameworks:** Identify which framework controls it satisfies
3. **Document Evidence:** Note where evidence is stored
4. **Assign Ownership:** Designate control owner
5. **Track Status:** Monitor implementation status

---

## Control Mapping Matrix

| Internal Control ID | Control Description | NIST CSF | ISO 27001 | SOC 2 | HIPAA | GDPR | CMMC | PCI-DSS | Evidence Location | Owner | Status |
|-------------------|--------------------|---------|-----------| ------|-------|------|------|---------|------------------|-------|--------|
| AC-001 | User access management and provisioning | ID.AM-6, PR.AC-1, PR.AC-4 | A.9.2.1, A.9.2.2 | CC6.1, CC6.2 | 164.308(a)(3), 164.308(a)(4) | Art. 32 | AC.L1-3.1.1, AC.L2-3.1.2 | 7.1, 8.1 | /evidence/access-control/ | IT Director | Implemented |
| AC-002 | Multi-factor authentication (MFA) | PR.AC-7 | A.9.4.2 | CC6.1 | 164.312(d) | Art. 32 | IA.L2-3.5.3 | 8.3 | /evidence/mfa/ | IT Security | Implemented |
| AC-003 | Privileged access management | PR.AC-4 | A.9.2.3 | CC6.1, CC6.2 | 164.308(a)(3) | Art. 32 | AC.L2-3.1.5 | 7.1, 8.7 | /evidence/pam/ | IT Security | Implemented |
| AC-004 | Password policy and management | PR.AC-1, PR.AC-7 | A.9.4.3 | CC6.1 | 164.308(a)(5)(ii)(D) | Art. 32 | IA.L1-3.5.7, IA.L2-3.5.8 | 8.2 | /evidence/password-policy/ | IT Director | Implemented |
| AC-005 | Remote access controls | PR.AC-3, PR.AC-5 | A.6.2.2, A.13.1.3 | CC6.6 | 164.312(e)(1) | Art. 32 | AC.L2-3.1.12 | 8.3 | /evidence/remote-access/ | IT Security | Implemented |
| AC-006 | Access review and recertification | PR.AC-4 | A.9.2.5, A.9.2.6 | CC6.1, CC6.3 | 164.308(a)(4)(ii)(C) | Art. 32 | AC.L2-3.1.6 | 8.1.4 | /evidence/access-reviews/ | Compliance | In Progress |
| AC-007 | Account termination procedures | PR.AC-1 | A.7.3.1, A.9.2.6 | CC6.2 | 164.308(a)(3)(ii)(C) | Art. 17 | AC.L1-3.1.3 | 8.1.3 | /evidence/termination/ | HR | Implemented |
| AS-001 | Asset inventory management | ID.AM-1, ID.AM-2 | A.8.1.1, A.8.1.2 | CC6.1 | 164.310(d)(1) | Art. 30 | CM.L2-3.4.1 | 2.4, 9.9 | /evidence/asset-inventory/ | IT Ops | Implemented |
| AS-002 | Asset classification and labeling | ID.AM-5 | A.8.2.1, A.8.2.2 | CC6.1 | 164.308(a)(1) | Art. 32 | - | 9.6 | /evidence/classification/ | Data Owner | In Progress |
| AS-003 | Secure asset disposal | PR.DS-3 | A.8.3.2, A.11.2.7 | CC6.1 | 164.310(d)(2)(i) | Art. 17 | MP.L2-3.8.3 | 9.8 | /evidence/disposal/ | IT Ops | Implemented |
| AT-001 | Security awareness training | PR.AT-1 | A.7.2.2 | CC1.4 | 164.308(a)(5) | Art. 32, Art. 39 | AT.L1-3.2.1 | 12.6 | /evidence/training/ | CISO | Implemented |
| AT-002 | Role-based security training | PR.AT-2, PR.AT-3 | A.7.2.2 | CC1.4 | 164.308(a)(5) | Art. 32 | AT.L2-3.2.2 | 12.6 | /evidence/training/ | CISO | Implemented |
| AT-003 | Phishing simulation and testing | PR.AT-1 | A.7.2.2 | CC1.4 | - | - | AT.L2-3.2.3 | - | /evidence/phishing/ | CISO | Implemented |
| AU-001 | Audit logging and monitoring | DE.CM-1, DE.CM-3 | A.12.4.1, A.12.4.3 | CC7.2 | 164.312(b) | Art. 32 | AU.L2-3.3.1 | 10.1, 10.2 | /evidence/logging/ | IT Security | Implemented |
| AU-002 | Log review and analysis | DE.AE-3, RS.AN-1 | A.12.4.1 | CC7.2, CC7.3 | 164.308(a)(1)(ii)(D) | Art. 32 | AU.L2-3.3.4 | 10.6 | /evidence/log-review/ | SOC | Implemented |
| AU-003 | Log retention and protection | DE.CM-1, PR.PT-1 | A.12.3.1 | CC7.2 | 164.312(b) | Art. 5 | AU.L2-3.3.8 | 10.7 | /evidence/log-retention/ | IT Ops | Implemented |
| BC-001 | Business continuity plan | PR.IP-9, RC.RP-1 | A.17.1.1, A.17.1.2 | CC9.1 | 164.308(a)(7)(i) | Art. 32 | - | 12.10 | /evidence/bcp/ | Risk Manager | Implemented |
| BC-002 | Disaster recovery plan | PR.IP-9, RC.RP-1 | A.17.1.2, A.17.2.1 | CC9.1 | 164.308(a)(7)(ii) | Art. 32 | - | 12.10 | /evidence/drp/ | IT Director | Implemented |
| BC-003 | Backup and recovery procedures | PR.IP-4 | A.12.3.1 | CC9.1 | 164.308(a)(7)(ii) | Art. 32 | - | - | /evidence/backups/ | IT Ops | Implemented |
| BC-004 | BCP/DRP testing | PR.IP-10, RC.RP-1 | A.17.1.3 | CC9.1 | 164.308(a)(7)(ii)(E) | - | - | - | /evidence/bc-tests/ | Risk Manager | Planned |
| CC-001 | Change management process | PR.IP-3 | A.12.1.2, A.14.2.2 | CC8.1 | - | - | CM.L2-3.4.3 | 6.4 | /evidence/change-mgmt/ | IT Ops | Implemented |
| CC-002 | Configuration management | PR.IP-1 | A.12.1.2, A.12.5.1 | CC8.1 | - | Art. 32 | CM.L2-3.4.2 | 2.2 | /evidence/config-mgmt/ | IT Ops | Implemented |
| CC-003 | Secure baseline configurations | PR.IP-1 | A.12.6.1, A.14.2.3 | CC8.1 | 164.308(a)(8) | Art. 32 | CM.L2-3.4.7 | 2.2 | /evidence/baselines/ | IT Security | Implemented |
| CM-001 | Cryptography and key management | PR.DS-1, PR.DS-2, PR.DS-5 | A.10.1.1, A.10.1.2 | CC6.1 | 164.312(a)(2), 164.312(e)(2) | Art. 32, Art. 34 | SC.L2-3.13.11 | 3.4, 4.1 | /evidence/encryption/ | IT Security | Implemented |
| CM-002 | Encryption at rest | PR.DS-1 | A.8.2.3, A.10.1.1 | CC6.1 | 164.312(a)(2)(iv) | Art. 32 | SC.L2-3.13.16 | 3.4 | /evidence/encryption/ | IT Security | Implemented |
| CM-003 | Encryption in transit | PR.DS-2 | A.13.1.1, A.13.2.3 | CC6.1 | 164.312(e)(2) | Art. 32 | SC.L2-3.13.8 | 4.1 | /evidence/encryption/ | IT Security | Implemented |
| DP-001 | Data classification policy | ID.AM-5, PR.DS-5 | A.8.2.1 | CC6.1 | 164.308(a)(1) | Art. 5, Art. 32 | - | 9.6 | /evidence/data-classification/ | Data Owner | Implemented |
| DP-002 | Data retention and disposal | PR.IP-6, PR.DS-3 | A.8.3.2, A.11.2.7 | CC6.1 | 164.310(d)(2) | Art. 5, Art. 17 | MP.L2-3.8.3 | 9.8 | /evidence/retention/ | Compliance | Implemented |
| DP-003 | Data privacy controls | PR.DS-5 | A.18.1.1, A.18.1.4 | CC6.1 | 164.502, 164.514 | Art. 5, Art. 25 | - | - | /evidence/privacy/ | Privacy Officer | Implemented |
| DP-004 | Data breach notification | RS.CO-2, RS.CO-3 | A.16.1.2 | CC7.4 | 164.404, 164.408 | Art. 33, Art. 34 | - | 12.10 | /evidence/breach-response/ | Legal | Implemented |
| IA-001 | Incident response plan | RS.RP-1 | A.16.1.1, A.16.1.5 | CC7.3, CC7.4 | 164.308(a)(6) | Art. 33 | IR.L2-3.6.1 | 12.10 | /evidence/ir-plan/ | CISO | Implemented |
| IA-002 | Incident detection and monitoring | DE.AE-1, DE.CM-1 | A.12.4.1, A.16.1.2 | CC7.2, CC7.3 | 164.308(a)(1)(ii)(D) | Art. 32 | - | 10.6, 11.5 | /evidence/monitoring/ | SOC | Implemented |
| IA-003 | Incident response procedures | RS.CO-1, RS.AN-1 | A.16.1.4, A.16.1.5 | CC7.3, CC7.4 | 164.308(a)(6)(ii) | Art. 33 | IR.L2-3.6.2 | 12.10 | /evidence/ir-procedures/ | CISO | Implemented |
| IA-004 | Forensics and evidence collection | RS.AN-3 | A.16.1.7 | CC7.3 | - | - | - | - | /evidence/forensics/ | CISO | Planned |
| NW-001 | Network segmentation | PR.AC-5, PR.PT-4 | A.13.1.3 | CC6.6 | 164.312(e)(1) | Art. 32 | SC.L2-3.13.1 | 1.2, 1.3 | /evidence/network/ | Network Admin | Implemented |
| NW-002 | Firewall management | PR.AC-5, PR.PT-4 | A.13.1.1, A.13.1.3 | CC6.6 | 164.312(e)(1) | Art. 32 | SC.L2-3.13.1 | 1.1, 1.2 | /evidence/firewall/ | Network Admin | Implemented |
| NW-003 | Wireless security | PR.AC-5 | A.6.2.1, A.11.2.1 | CC6.6 | 164.312(e)(1) | Art. 32 | - | 1.2, 2.1 | /evidence/wireless/ | Network Admin | Implemented |
| NW-004 | Network monitoring | DE.CM-1, DE.CM-7 | A.12.4.1, A.13.1.1 | CC7.2 | 164.308(a)(1)(ii)(D) | Art. 32 | - | 10.6, 11.4 | /evidence/network-mon/ | SOC | Implemented |
| PA-001 | Physical access controls | PR.AC-2, PR.DS-1 | A.11.1.1, A.11.1.2 | CC6.4 | 164.310(a)(1) | Art. 32 | PE.L1-3.10.1 | 9.1 | /evidence/physical/ | Facilities | Implemented |
| PA-002 | Visitor management | PR.AC-2 | A.11.1.4 | CC6.4 | 164.310(a)(1) | - | PE.L2-3.10.3 | 9.1.2 | /evidence/visitors/ | Facilities | Implemented |
| PA-003 | Physical security monitoring | PR.AC-2, DE.CM-2 | A.11.1.3, A.11.1.6 | CC6.4 | 164.310(a)(1) | Art. 32 | PE.L2-3.10.4 | 9.1.3 | /evidence/cameras/ | Facilities | Implemented |
| RM-001 | Risk assessment process | ID.RA-1, ID.RA-5 | A.12.6.1 | CC3.2 | 164.308(a)(1)(ii)(A) | Art. 32, Art. 35 | RM.L2-3.11.1 | 12.2 | /evidence/risk-assessment/ | Risk Manager | Implemented |
| RM-002 | Vulnerability management | PR.IP-12, DE.CM-8 | A.12.6.1, A.18.2.3 | CC7.1 | 164.308(a)(8) | Art. 32 | RA.L2-3.11.2 | 6.2, 11.2 | /evidence/vuln-mgmt/ | IT Security | Implemented |
| RM-003 | Penetration testing | DE.CM-8 | A.12.6.1 | CC7.1 | 164.308(a)(8) | - | CA.L2-3.12.2 | 11.3 | /evidence/pentest/ | CISO | Implemented |
| RM-004 | Threat intelligence | ID.RA-2, ID.RA-3 | A.12.6.1 | CC7.1 | - | - | - | - | /evidence/threat-intel/ | CISO | In Progress |
| SC-001 | Secure development lifecycle | PR.IP-2 | A.14.1.1, A.14.2.1 | CC7.1, CC8.1 | - | Art. 25, Art. 32 | - | 6.3 | /evidence/sdlc/ | Dev Manager | Implemented |
| SC-002 | Code review and testing | PR.IP-7, PR.DS-6 | A.14.2.8, A.14.2.9 | CC7.1, CC8.1 | - | Art. 32 | - | 6.3 | /evidence/code-review/ | Dev Manager | Implemented |
| SC-003 | DevSecOps and CI/CD security | PR.IP-2, PR.DS-6 | A.14.2.2, A.14.2.6 | CC8.1 | - | Art. 32 | - | 6.4 | /evidence/devsecops/ | Dev Manager | In Progress |
| TP-001 | Third-party risk assessment | ID.SC-1, ID.RA-3 | A.15.1.1, A.15.1.2 | CC9.2 | 164.308(b)(1) | Art. 28 | - | 12.8 | /evidence/vendor-risk/ | Procurement | Implemented |
| TP-002 | Vendor contracts and SLAs | ID.SC-2 | A.15.1.2, A.15.1.3 | CC9.2 | 164.308(b)(3) | Art. 28 | - | 12.8 | /evidence/contracts/ | Legal | Implemented |
| TP-003 | Vendor monitoring and oversight | PR.IP-8, DE.CM-6 | A.15.2.1, A.15.2.2 | CC9.2 | 164.308(b)(2) | Art. 28 | - | 12.8 | /evidence/vendor-mon/ | Procurement | In Progress |

---

## Framework Coverage Summary

### Controls Coverage by Framework

| Framework | Total Controls in Toolkit | Fully Mapped | Partially Mapped | Not Mapped | Coverage % |
|-----------|-------------------------|--------------|-----------------|-----------|------------|
| NIST CSF | 108 | 45 | 15 | 48 | 56% |
| ISO 27001 | 114 | 42 | 12 | 60 | 47% |
| SOC 2 | 64 | 38 | 8 | 18 | 72% |
| HIPAA | 45 | 35 | 5 | 5 | 89% |
| GDPR | 11 | 10 | 1 | 0 | 100% |
| CMMC | 110 | 28 | 10 | 72 | 35% |
| PCI-DSS | 262 | 32 | 14 | 216 | 18% |

### Implementation Status

| Status | Count | Percentage |
|--------|-------|-----------|
| Implemented | 42 | 84% |
| In Progress | 6 | 12% |
| Planned | 2 | 4% |
| Not Started | 0 | 0% |

---

## Gap Analysis Summary

### Unmapped Framework Requirements

List framework requirements that don't have corresponding controls:

**NIST CSF:**
- _____________
- _____________

**ISO 27001:**
- _____________
- _____________

**SOC 2:**
- _____________
- _____________

**Other Frameworks:**
- _____________
- _____________

### Recommended Actions

1. **High Priority:** Implement controls for unmapped high-risk requirements
2. **Medium Priority:** Document evidence for partially mapped controls
3. **Low Priority:** Review and enhance documentation for fully mapped controls

---

## Notes

Use this section to document:
- Special considerations or exceptions
- Framework-specific interpretations
- Planned control enhancements
- Integration points with security tools

---

**ERMITS Advisory Services**
Compliance Framework Toolkit
Version 1.0 | 2024
