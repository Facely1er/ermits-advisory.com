# Vendor Risk Management Toolkit

## Welcome to Your Vendor Risk Management Toolkit!

This comprehensive toolkit provides templates, frameworks, and processes to help your organization effectively assess, score, and manage third-party vendor risks.

---

## What's Included

### 1. **Vendor Security Questionnaire** (`vendor-security-questionnaire.md`)
Comprehensive 300-point security assessment questionnaire covering 15 security domains.

**Use this for:**
- Initial vendor security assessments
- Annual vendor re-assessments
- Due diligence for new vendors
- Security posture evaluation

**Covers:** 150 questions across Information Security Program, Compliance, Access Control, Data Protection, Network Security, Endpoint Security, Vulnerability Management, Patch Management, Logging & Monitoring, Incident Response, Business Continuity, Third-Party Risk, Application Security, Cloud Security, and Physical Security

### 2. **Vendor Risk Scoring Framework** (`vendor-risk-scoring-framework.md`)
Systematic approach to scoring and tiering vendor risk based on inherent risk, residual risk, and business criticality.

**Use this for:**
- Calculating objective vendor risk scores
- Assigning vendors to risk tiers
- Prioritizing vendor oversight activities
- Determining assessment frequency and requirements

**Methodology:** Three-dimensional risk assessment combining inherent risk (40%), residual risk (30%), and business criticality (30%)

**Output:** Risk tiers (1-4) with specific management requirements

### 3. Additional Resources (Included in Full Toolkit)
- Contract security clauses library
- Vendor onboarding checklists
- Vendor monitoring procedures
- Vendor offboarding templates
- Supply chain risk assessment templates
- Business associate agreement (BAA) template
- Data processing agreement (DPA) template

---

## Quick Start Guide

### For New Vendor Assessments:

**STEP 1: Conduct Security Assessment**
- Send Vendor Security Questionnaire to potential vendor
- Request supporting documentation (SOC 2, ISO 27001, etc.)
- Review responses for completeness and accuracy

**STEP 2: Calculate Risk Score**
- Use Vendor Risk Scoring Framework
- Assess inherent risk (data sensitivity, access level, volume)
- Evaluate residual risk (security posture, certifications)
- Determine business criticality (service importance, dependency)

**STEP 3: Assign Risk Tier**
- Calculate final risk score (0-10 scale)
- Assign appropriate risk tier (1-4)
- Identify tier-specific requirements

**STEP 4: Make Decision**
- Review risk profile
- Determine if risk is acceptable
- Identify required compensating controls
- Approve, approve with conditions, or reject

**STEP 5: Ongoing Management**
- Establish monitoring based on tier
- Schedule periodic re-assessments
- Track vendor performance and incidents

### For Existing Vendor Management:

**STEP 1: Inventory Vendors**
- Create complete vendor inventory
- Identify data access and processing
- Document contract terms

**STEP 2: Prioritize for Assessment**
- Assess business criticality
- Identify high-risk vendors first
- Create assessment schedule

**STEP 3: Conduct Assessments**
- Assess high-risk vendors (Tier 1 & 2) first
- Use questionnaire and scoring framework
- Document findings and risks

**STEP 4: Implement Tiered Management**
- Apply tier-appropriate oversight
- Schedule re-assessments
- Monitor ongoing performance

---

## Vendor Risk Management Framework

### Our Approach
This toolkit follows industry best practices for third-party risk management:

1. **Inventory** - Know all your vendors
2. **Assess** - Understand vendor risks
3. **Score** - Quantify and tier risks
4. **Mitigate** - Implement controls and requirements
5. **Monitor** - Ongoing oversight and management
6. **Review** - Periodic re-assessment

### Risk-Based Approach

Not all vendors pose the same risk. This toolkit uses a **risk-based tiering system**:

| Tier | Risk Level | % of Vendors | Oversight Intensity |
|------|-----------|-------------|-------------------|
| Tier 1 | Critical | 5-10% | Quarterly assessments, continuous monitoring, executive oversight |
| Tier 2 | High | 15-20% | Semi-annual assessments, regular monitoring, director oversight |
| Tier 3 | Medium | 30-40% | Annual assessments, periodic monitoring, manager oversight |
| Tier 4 | Low | 30-50% | Biennial assessments, passive monitoring, standard oversight |

---

## Vendor Security Questionnaire Guide

### 15 Security Domains Assessed

1. **Information Security Program** (20 pts)
   - Security governance and leadership
   - Risk assessment processes
   - Security training and awareness

2. **Compliance & Certifications** (20 pts)
   - SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR
   - Regulatory compliance tracking
   - Audit results

3. **Access Control** (20 pts)
   - Multi-factor authentication
   - Role-based access control
   - Access reviews and deprovisioning

4. **Data Protection** (20 pts)
   - Encryption at rest and in transit
   - Data classification and retention
   - Data loss prevention

5. **Network Security** (20 pts)
   - Network segmentation and firewalls
   - Intrusion detection/prevention
   - DDoS protection

6. **Endpoint Security** (20 pts)
   - Anti-malware and EDR
   - Endpoint encryption
   - Mobile device management

7. **Vulnerability Management** (20 pts)
   - Vulnerability scanning frequency
   - Remediation SLAs
   - Penetration testing

8. **Patch Management** (20 pts)
   - Patch deployment timelines
   - Testing procedures
   - Compliance tracking

9. **Security Monitoring & Logging** (20 pts)
   - SIEM implementation
   - 24/7 monitoring
   - Log retention

10. **Incident Response** (20 pts)
    - Incident response plan
    - IR team and procedures
    - Incident history

11. **Business Continuity & DR** (20 pts)
    - BCP/DR plans and testing
    - Backup procedures
    - RTO/RPO objectives

12. **Third-Party Risk** (20 pts)
    - Subcontractor assessments
    - Vendor contracts
    - Supply chain risk

13. **Application Security** (20 pts)
    - Secure development lifecycle
    - Code reviews and testing
    - OWASP compliance

14. **Cloud Security** (20 pts)
    - Cloud security posture
    - Cloud access management
    - Cloud monitoring

15. **Physical Security** (20 pts)
    - Physical access controls
    - Environmental controls
    - Security personnel

### Scoring Interpretation

**Total Score: 300 points possible**

| Score Range | Percentage | Risk Level | Recommendation |
|------------|-----------|-----------|----------------|
| 270-300 | 90-100% | Low Risk | Strong security posture, minimal concerns |
| 225-269 | 75-89% | Medium-Low | Good security, minor improvements recommended |
| 180-224 | 60-74% | Medium | Acceptable with conditions, monitoring required |
| 120-179 | 40-59% | Medium-High | Significant concerns, remediation plan required |
| < 120 | < 40% | High Risk | Unacceptable, do not proceed or require immediate fixes |

---

## Risk Scoring Framework Guide

### Three-Dimensional Risk Model

#### 1. Inherent Risk (40% of final score)
**What risk does the vendor inherently pose?**

Factors assessed:
- **Data Sensitivity** (35%): Type and classification of data
- **Data Volume** (15%): Number of records
- **System Access** (25%): Level and type of access
- **Regulatory Scope** (15%): Applicable regulations
- **Geographic Risk** (10%): Data location and jurisdiction

**Example:**
- Vendor processes 50,000 PII records with read/write access
- Subject to GDPR and CCPA
- Administrative access to critical systems
- → High inherent risk

#### 2. Residual Risk (30% of final score)
**How well does the vendor mitigate their inherent risk?**

Factors assessed:
- **Security Posture** (35%): Questionnaire score
- **Certifications** (25%): SOC 2, ISO 27001, etc.
- **Incident History** (20%): Past breaches
- **Security Maturity** (15%): Program sophistication
- **Transparency** (5%): Audit rights and openness

**Residual Risk = 10 - Security Average**

**Example:**
- Questionnaire score: 85% (8/10)
- Has SOC 2 Type II and ISO 27001 (10/10)
- No incidents (10/10)
- Managed maturity level (8/10)
- Annual audit rights (7/10)
- → Security Average = 8.65, Residual Risk = 1.35 (Low)

#### 3. Business Criticality (30% of final score)
**How important is the vendor to business operations?**

Factors assessed:
- **Service Criticality** (40%): Business impact if unavailable
- **Financial Impact** (20%): Contract value
- **Dependency** (20%): Availability of alternatives
- **Integration** (10%): System integration complexity
- **User Impact** (10%): Number of affected users

**Example:**
- Mission-critical SaaS platform (10/10)
- Contract value $500K (8/10)
- Single source, difficult to replace (10/10)
- Deep system integration (10/10)
- All users affected (10/10)
- → High business criticality (9.6/10)

### Final Score Calculation Example

| Component | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Inherent Risk | 7.5/10 | 40% | 3.0 |
| Residual Risk | 1.35/10 | 30% | 0.41 |
| Business Criticality | 9.6/10 | 30% | 2.88 |
| **TOTAL** | | | **6.29/10** |

**Risk Tier:** Tier 2 (High Risk) - requires director approval, semi-annual assessments

---

## Risk Tier Requirements Summary

### Tier 1 - Critical Risk (Score: 8.0-10.0)

**Assessment Frequency:**
- Quarterly security updates
- Annual full assessment
- Current SOC 2 Type II required

**Monitoring:**
- Continuous security ratings monitoring
- 24-hour breach notification
- Monthly security meetings

**Contract Requirements:**
- Comprehensive security addendum
- On-demand audit rights
- $5M+ cyber insurance
- BAA/DPA if applicable

**Approval:**
- Executive level (CISO, CIO, CEO)
- Legal and privacy review
- Risk committee approval

### Tier 2 - High Risk (Score: 6.0-7.9)

**Assessment Frequency:**
- Semi-annual security updates
- Annual full assessment
- SOC 2 review if available

**Monitoring:**
- Security ratings monitoring
- 48-hour breach notification
- Quarterly check-ins

**Contract Requirements:**
- Security addendum
- Annual audit rights
- $2M+ cyber insurance

**Approval:**
- Director level
- Legal review for data processing

### Tier 3 - Medium Risk (Score: 4.0-5.9)

**Assessment Frequency:**
- Annual security questionnaire
- SOC 2 review if available

**Monitoring:**
- Quarterly security ratings checks
- 72-hour breach notification

**Contract Requirements:**
- Standard security terms
- Audit rights upon request

**Approval:**
- Manager level
- Legal review if sensitive data

### Tier 4 - Low Risk (Score: 0-3.9)

**Assessment Frequency:**
- Initial assessment
- Re-assessment every 2 years

**Monitoring:**
- Passive monitoring
- Breach notification tracking

**Contract Requirements:**
- Standard terms and conditions

**Approval:**
- Standard procurement process

---

## Integration with VendorSoluce Platform

These templates are designed to integrate with the ERMITS VendorSoluce vendor risk management platform:

1. **Automated Questionnaires:** Send questionnaires directly from platform
2. **Risk Scoring Engine:** Automatic risk calculation
3. **Vendor Portal:** Vendors submit responses and documentation via portal
4. **Assessment Tracking:** Track all assessments and due dates
5. **Document Repository:** Store SOC 2 reports, certificates, and evidence
6. **Continuous Monitoring:** Security ratings integration
7. **Workflow Automation:** Approval workflows by risk tier
8. **Reporting Dashboard:** Real-time vendor risk portfolio view

---

## Best Practices

### Initial Vendor Assessment
1. **Pre-Assessment:** Review vendor website, publicly available security info
2. **Send Questionnaire:** Allow 2-3 weeks for completion
3. **Review Responses:** Check for completeness, request clarifications
4. **Validate:** Review supporting documents (SOC 2, certs, policies)
5. **Score:** Use risk scoring framework systematically
6. **Decide:** Make risk-informed procurement decision

### Ongoing Vendor Management
1. **Risk-Based Frequency:** More frequent assessments for higher-risk vendors
2. **Continuous Monitoring:** Use security ratings services for real-time alerts
3. **Incident Tracking:** Document and track vendor security incidents
4. **Performance Reviews:** Include security in regular vendor reviews
5. **Contract Renewals:** Re-assess security before renewal
6. **Offboarding:** Secure data deletion and access termination

### Common Pitfalls to Avoid
1. **One-Size-Fits-All:** Don't treat all vendors the same
2. **Set and Forget:** Vendor risk changes over time
3. **Check-the-Box:** Go beyond just collecting questionnaires
4. **Missing Shadow IT:** Discover and assess all vendors
5. **No Follow-Up:** Require remediation of identified gaps
6. **Ignoring Subcontractors:** Assess critical sub-processors

---

## Vendor Risk Management Program Setup

### Phase 1: Foundation (Months 1-3)
- [ ] Create vendor inventory
- [ ] Customize templates
- [ ] Define risk tiers and requirements
- [ ] Establish approval workflows
- [ ] Train procurement and security teams

### Phase 2: Initial Assessments (Months 3-9)
- [ ] Assess Tier 1 vendors (critical risk)
- [ ] Assess Tier 2 vendors (high risk)
- [ ] Assess Tier 3 vendors (medium risk)
- [ ] Document findings and risk acceptance

### Phase 3: Operationalization (Months 9-12)
- [ ] Implement continuous monitoring
- [ ] Establish regular review cycles
- [ ] Integrate into procurement process
- [ ] Create vendor risk dashboard
- [ ] Conduct program review

### Phase 4: Continuous Improvement (Ongoing)
- [ ] Quarterly program reviews
- [ ] Annual template updates
- [ ] Lessons learned from incidents
- [ ] Industry benchmark comparison

---

## Customization Checklist

Before using this toolkit, complete the following:

- [ ] Customize risk scoring weights for your organization's risk appetite
- [ ] Define your risk tier criteria and requirements
- [ ] Establish approval authorities by risk tier
- [ ] Add organization-specific questions to questionnaire
- [ ] Customize contract security requirements
- [ ] Define your acceptable risk thresholds
- [ ] Establish your assessment frequency by tier
- [ ] Create your vendor inventory template
- [ ] Document your vendor risk management policy
- [ ] Train your team on the process

---

## Regulatory Considerations

### GDPR Requirements
- Assess data processors and sub-processors
- Execute Data Processing Agreements (DPAs)
- Ensure adequate security measures (Art. 32)
- Document due diligence
- Monitor processor compliance

### HIPAA Requirements
- Assess business associates
- Execute Business Associate Agreements (BAAs)
- Ensure appropriate safeguards
- Right to audit business associates
- Breach notification requirements

### PCI-DSS Requirements
- Assess service providers handling cardholder data
- Maintain list of service providers
- Monitor PCI compliance status
- Include PCI requirements in contracts
- Annual re-assessment

### SOX Requirements
- Assess IT service providers
- SSAE 18 / SOC 1 reports
- Change management controls
- Access control reviews

---

## Support & Training

### Need Help?
- **Implementation Support:** support@ermits-advisory.com
- **Vendor Risk Services:** https://ermits-advisory.com/vendor-risk
- **VendorSoluce Platform:** Request demo
- **Consulting Services:** Custom program design

### Training Opportunities
- **Vendor Risk Management Workshop:** 1-day training
- **Risk Scoring Masterclass:** Half-day workshop
- **Vendor Negotiation Training:** Contract security requirements
- **Platform Training:** VendorSoluce implementation

---

## Additional Resources

### Industry Standards
- **ISO 27036:** Information Security for Supplier Relationships
- **NIST SP 800-161:** Supply Chain Risk Management
- **Shared Assessments SIG:** Standardized Information Gathering
- **CSA CAIQ:** Cloud Security Alliance questionnaire

### Useful Tools
- **Security Ratings:** BitSight, SecurityScorecard, UpGuard
- **Vendor Risk Platforms:** VendorSoluce, Prevalent, ProcessUnity
- **Contract Management:** Tools for tracking vendor contracts
- **GRC Platforms:** Integrated vendor risk management

---

## Version History

- **v1.0 (2024):** Initial release
  - 150-question security assessment questionnaire
  - Three-dimensional risk scoring framework
  - Four-tier risk management approach
  - Integration guides for VendorSoluce

---

## License & Usage

This toolkit is licensed for use by the purchaser only. You may:
- Use templates within your organization
- Customize templates to fit your needs
- Send questionnaires to your vendors
- Share internally with your team

You may not:
- Redistribute templates to other organizations
- Sell or sublicense the templates
- Remove ERMITS branding

---

**Thank you for choosing ERMITS Vendor Risk Management Toolkit!**

Know your vendors. Manage your risks. Protect your organization.

**ERMITS Advisory Services**
Making Vendor Risk Manageable
Version 1.0 | 2024
