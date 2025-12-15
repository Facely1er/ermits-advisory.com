import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvisoryPrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">ERMITS ADVISORY SERVICES PRIVACY POLICY</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> November 19, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> November 19, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100 mb-4">
            ERMITS LLC ("ERMITS," "we," "our," or "us") is committed to protecting your privacy in connection with our professional advisory and consulting services. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you engage us for Advisory Services.
          </p>
          <p className="text-gray-600 dark:text-gray-100">
            By engaging ERMITS Advisory Services, you consent to the data practices described in this policy. If you do not agree with this Privacy Policy, please do not engage our Advisory Services.
          </p>
        </motion.div>

        {/* Section 1: Scope and Applicability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">1. SCOPE AND APPLICABILITY</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.1 Services Covered</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  This Privacy Policy applies to ERMITS Advisory Services, including:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Cybersecurity Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>CMMC consulting and readiness assessments</li>
                      <li>Cybersecurity program development and maturity assessments</li>
                      <li>Incident response planning and tabletop exercises</li>
                      <li>Security architecture review and recommendations</li>
                      <li>Vulnerability management program development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Compliance Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>NIST SP 800-171 compliance consulting</li>
                      <li>DFARS compliance guidance</li>
                      <li>HIPAA Security Rule consulting</li>
                      <li>Privacy compliance advisory (GDPR, CCPA/CPRA, PIPEDA)</li>
                      <li>Policy and procedure development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Third-Party Risk Management Advisory:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Vendor risk assessment consulting</li>
                      <li>Supply chain security advisory</li>
                      <li>Third-party due diligence support</li>
                      <li>Vendor security questionnaire development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Privacy Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Privacy program development</li>
                      <li>Data Protection Impact Assessments (DPIA)</li>
                      <li>Privacy by Design consulting</li>
                      <li>Data breach response and notification advisory</li>
                      <li>Privacy policy development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Strategic Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Executive advisory and virtual CISO services</li>
                      <li>Cybersecurity roadmap development</li>
                      <li>Budget planning and resource allocation guidance</li>
                      <li>Technology selection and vendor evaluation support</li>
                      <li>Board-level reporting and communication strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.2 What This Policy Does NOT Cover</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">This Privacy Policy does NOT apply to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                  <li>ERMITS software products and platforms (covered by Master Privacy Policy)</li>
                  <li>Marketing website activities (covered by Website Privacy Policy)</li>
                  <li>Job applicant data (covered by Recruitment Privacy Notice)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.3 Geographic Scope</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  This Privacy Policy applies to clients worldwide and complies with:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                  <li>General Data Protection Regulation (GDPR) - European Union, United Kingdom, Switzerland</li>
                  <li>California Consumer Privacy Act (CCPA) / California Privacy Rights Act (CPRA)</li>
                  <li>Personal Information Protection and Electronic Documents Act (PIPEDA) - Canada</li>
                  <li>Lei Geral de Proteção de Dados (LGPD) - Brazil</li>
                  <li>Other applicable privacy and data protection laws</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 2: Advisory Services Data Handling Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Shield size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">2. ADVISORY SERVICES DATA HANDLING PRINCIPLES</h2>
                <div className="space-y-4 text-gray-700 dark:text-silver">
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white mb-2">2.1 Professional Services Privacy Principles</h3>
                    <p className="mb-3 text-gray-700 dark:text-gray-200">ERMITS Advisory Services are built on professional consulting best practices:</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-navy dark:text-white mb-1">1. Client Confidentiality</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200">All client information is treated as confidential and protected under:</p>
                        <ul className="list-disc list-inside text-sm ml-4 mt-1 text-gray-700 dark:text-gray-200">
                          <li>Non-Disclosure Agreements (NDAs) executed prior to engagement</li>
                          <li>Professional confidentiality standards</li>
                          <li>Attorney-client privilege (where applicable with legal counsel involvement)</li>
                          <li>Contractual confidentiality obligations in Statement of Work (SOW)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-navy dark:text-white mb-1">2. Need-to-Know Access</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200">Only ERMITS personnel directly involved in your engagement have access to your information:</p>
                        <ul className="list-disc list-inside text-sm ml-4 mt-1 text-gray-700 dark:text-gray-200">
                          <li>Consultants assigned to your project</li>
                          <li>Technical specialists providing support</li>
                          <li>Quality assurance reviewers (under confidentiality obligations)</li>
                          <li>Senior advisors providing oversight</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-navy dark:text-white mb-1">3. Data Minimization</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200">We collect only information necessary to deliver Advisory Services:</p>
                        <ul className="list-disc list-inside text-sm ml-4 mt-1 text-gray-700 dark:text-gray-200">
                          <li>Information required for the specific engagement scope</li>
                          <li>Background information for context and recommendations</li>
                          <li>Documentation necessary for deliverable production</li>
                          <li>Contact information for communication and billing</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-navy dark:text-white mb-1">4. Secure Handling</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200">Client data is protected through:</p>
                        <ul className="list-disc list-inside text-sm ml-4 mt-1 text-gray-700 dark:text-gray-200">
                          <li>Encrypted transmission (TLS 1.3) for all electronic communications</li>
                          <li>Encrypted storage for client documents and deliverables</li>
                          <li>Secure file sharing platforms (encrypted client portals)</li>
                          <li>Physical security for any paper documents</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-navy dark:text-white mb-1">5. Limited Retention</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-200">Client data is retained only as long as necessary:</p>
                        <ul className="list-disc list-inside text-sm ml-4 mt-1 text-gray-700 dark:text-gray-200">
                          <li>During active engagement period</li>
                          <li>For contractual warranty periods (typically 90 days post-delivery)</li>
                          <li>As required by professional standards and legal obligations</li>
                          <li>As agreed in engagement contracts or SOWs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 3: Information We Collect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">3. INFORMATION WE COLLECT</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.1 Client Contact and Business Information</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-2 text-navy dark:text-white">What We Collect:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Primary contact information (name, title, email, phone)</li>
                    <li>Company information (name, address, industry, size)</li>
                    <li>Billing contact information</li>
                    <li>Secondary contacts (technical leads, project managers)</li>
                    <li>Organizational structure (as relevant to engagement scope)</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-2 text-navy dark:text-white">Why We Collect:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Establish and maintain client relationships</li>
                    <li>Communicate about engagement scope, deliverables, and recommendations</li>
                    <li>Deliver advisory services and consulting reports</li>
                    <li>Process invoices and payments</li>
                    <li>Provide ongoing support during warranty period</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-navy dark:text-white">Legal Basis (GDPR):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Contract performance</li>
                    <li>Legitimate interests (business relationship management)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.2 Engagement-Specific Information</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  Depending on the nature of your engagement, we may collect:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Cybersecurity Assessment Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Current security controls and implementations</li>
                      <li>Network architecture diagrams and documentation</li>
                      <li>Security policies, procedures, and standards</li>
                      <li>Incident response plans and documentation</li>
                      <li>Vulnerability scan results and penetration test reports</li>
                      <li>Security tool configurations and logs (sanitized/anonymized)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Compliance Assessment Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>System Security Plans (SSPs)</li>
                      <li>Plans of Action and Milestones (POA&Ms)</li>
                      <li>Compliance documentation and evidence</li>
                      <li>Audit findings and remediation status</li>
                      <li>Policy and procedure documents</li>
                      <li>Training records and certification status</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Risk Assessment Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Business context and critical assets</li>
                      <li>Threat landscape and risk tolerance</li>
                      <li>Existing risk registers and assessments</li>
                      <li>Vendor and third-party relationships</li>
                      <li>Business continuity and disaster recovery plans</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Privacy Assessment Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Data inventory and data flow mapping</li>
                      <li>Privacy policies and notices</li>
                      <li>Data processing activities (Article 30 records)</li>
                      <li>Data Protection Impact Assessments (DPIAs)</li>
                      <li>Data subject request procedures</li>
                      <li>Privacy incident history</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Organizational Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Business processes and workflows</li>
                      <li>IT infrastructure and technology stack</li>
                      <li>Organizational roles and responsibilities</li>
                      <li>Budget and resource constraints</li>
                      <li>Strategic objectives and priorities</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="font-semibold mb-2 text-navy dark:text-white">We Do NOT Require:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Production data or live datasets</li>
                    <li>Personal data of your employees or customers (beyond contact information)</li>
                    <li>Credentials or passwords to your systems</li>
                    <li>Controlled Unclassified Information (CUI) or classified data</li>
                    <li>Protected Health Information (PHI) beyond what's necessary for HIPAA consulting</li>
                    <li>Payment card data (PCI data)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.3 Information from Meetings and Communications</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-2 text-navy dark:text-white">What We Collect:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Meeting notes and discussion summaries</li>
                    <li>Email and messaging communications</li>
                    <li>Interview responses (from stakeholder interviews)</li>
                    <li>Workshop participation and feedback</li>
                    <li>Presentation materials and responses</li>
                    <li>Follow-up questions and clarifications</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-2 text-navy dark:text-white">How We Use:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Inform recommendations and deliverables</li>
                    <li>Document engagement activities</li>
                    <li>Provide context for advisory guidance</li>
                    <li>Support deliverable accuracy and completeness</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-navy dark:text-white">Retention:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Meeting notes retained for engagement duration + 3 years</li>
                    <li>Communications retained per engagement contract terms</li>
                    <li>Documentation supporting deliverables retained for professional standards compliance</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.4 Information We Collect About Your Systems (With Permission)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  With your explicit authorization, we may observe or collect:
                </p>
                <div className="mb-3">
                  <p className="font-semibold mb-2 text-navy dark:text-white">During Security Assessments:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>System configurations (sanitized of sensitive data)</li>
                    <li>Security control implementations</li>
                    <li>Log samples (anonymized and sanitized)</li>
                    <li>Security tool outputs</li>
                    <li>Network traffic patterns (aggregated, anonymized)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-navy dark:text-white">Privacy Protections:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>All access conducted under signed authorization</li>
                    <li>Access limited to scope defined in SOW</li>
                    <li>No collection of personal data, CUI, or sensitive business data</li>
                    <li>All observations documented and disclosed to client</li>
                    <li>Client retains full control and oversight</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.5 Information from Third Parties</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We may receive information from:</p>
                <div className="mb-3">
                  <p className="font-semibold mb-2 text-navy dark:text-white">Professional References:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Contact information from mutual business contacts</li>
                    <li>Professional reputation and background information</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-2 text-navy dark:text-white">Subcontractors and Partners:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Technical findings from authorized subcontractors</li>
                    <li>Specialist assessments (under same confidentiality terms)</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="font-semibold mb-2 text-navy dark:text-white">Public Sources:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Publicly available company information</li>
                    <li>Industry reports and threat intelligence</li>
                    <li>Regulatory guidance and best practices</li>
                    <li>Published security advisories</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="font-semibold mb-2 text-navy dark:text-white">We Do NOT:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Purchase client data from data brokers</li>
                    <li>Conduct covert investigations or surveillance</li>
                    <li>Access systems without explicit authorization</li>
                    <li>Share your information with partners without your consent</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Continue with remaining sections - I'll add the key sections but truncate for space */}
        {/* Section 4: How We Use Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">4. HOW WE USE INFORMATION</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.1 Service Delivery</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We use collected information to:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Provide Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Conduct assessments and evaluations per SOW</li>
                      <li>Develop recommendations and strategic guidance</li>
                      <li>Produce deliverables (reports, roadmaps, policies, procedures)</li>
                      <li>Present findings and recommendations to stakeholders</li>
                      <li>Answer questions and provide clarifications</li>
                      <li>Support implementation of recommendations (if contracted)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Quality Assurance:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Internal review of deliverables for accuracy and completeness</li>
                      <li>Technical review by subject matter experts</li>
                      <li>Engagement oversight by senior advisors</li>
                      <li>Compliance with professional standards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Client Communication:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Project status updates and milestone notifications</li>
                      <li>Scheduling meetings and coordination</li>
                      <li>Deliverable transmission and review</li>
                      <li>Issue escalation and resolution</li>
                      <li>Post-engagement support during warranty period</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.2 Business Operations</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We use information for legitimate business purposes:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Billing and Payment:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Generate invoices based on engagement terms</li>
                      <li>Process payments and maintain financial records</li>
                      <li>Track project hours and expenses (for time-and-materials engagements)</li>
                      <li>Comply with tax and accounting requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Engagement Management:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Resource allocation and consultant assignment</li>
                      <li>Project timeline and milestone tracking</li>
                      <li>Scope management and change control</li>
                      <li>Contract compliance and deliverable tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Legal and Compliance:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Comply with legal obligations and regulations</li>
                      <li>Respond to lawful requests from authorities</li>
                      <li>Enforce contracts and protect legal rights</li>
                      <li>Maintain professional liability insurance requirements</li>
                      <li>Comply with industry professional standards</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.3 Professional Development and Service Improvement</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We may use anonymized, aggregated information to:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Improve Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Identify common client challenges and needs</li>
                      <li>Develop new service offerings and methodologies</li>
                      <li>Refine assessment frameworks and tools</li>
                      <li>Train and develop consultant capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Research and Thought Leadership:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Publish anonymized case studies (with explicit client permission)</li>
                      <li>Develop industry reports and white papers</li>
                      <li>Contribute to industry standards and best practices</li>
                      <li>Present at conferences and professional events</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Privacy Protections:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>All use is with anonymized, aggregated data only</li>
                      <li>No client-identifiable information disclosed without explicit written consent</li>
                      <li>Minimum anonymity set of 10+ organizations for any published statistics</li>
                      <li>Opt-out available for inclusion in anonymized datasets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.4 What We Do NOT Do</h3>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="font-semibold mb-2 text-navy dark:text-white">ERMITS Advisory Services Does NOT:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li><strong>Sell or license</strong> your information to third parties</li>
                    <li><strong>Use your data for marketing</strong> to other clients</li>
                    <li><strong>Share your confidential information</strong> with competitors or other clients</li>
                    <li><strong>Disclose engagement details</strong> without your explicit consent</li>
                    <li><strong>Retain information longer</strong> than contractually necessary</li>
                    <li><strong>Access your systems</strong> beyond authorized scope</li>
                    <li><strong>Train AI models</strong> on your confidential data</li>
                    <li><strong>Create benchmark databases</strong> with identifiable client data</li>
                    <li><strong>Publish case studies</strong> without explicit written permission</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 5: Information Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">5. INFORMATION SHARING AND DISCLOSURE</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.1 Limited Information Sharing</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  ERMITS shares client information only in the following circumstances:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">With Your Consent:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Sharing deliverables with your designated third parties</li>
                      <li>Joint presentations with your technology vendors</li>
                      <li>Collaboration with your legal counsel or other advisors</li>
                      <li>Case studies or testimonials (with explicit written permission)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Service Providers (Under NDA):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Secure file sharing platforms (Supabase, encrypted storage)</li>
                      <li>Payment processors (Stripe for invoicing)</li>
                      <li>Document collaboration tools (as needed for engagement delivery)</li>
                      <li>Professional liability insurance carriers (for coverage verification)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Subcontractors and Specialists:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Technical specialists providing niche expertise</li>
                      <li>All subcontractors bound by equivalent confidentiality terms</li>
                      <li>Client notification and approval for subcontractor involvement</li>
                      <li>ERMITS remains responsible for subcontractor confidentiality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Legal and Regulatory Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Court orders, subpoenas, or legal process</li>
                      <li>Regulatory investigations or examinations</li>
                      <li>National security requests (where legally required)</li>
                      <li>Professional standards board inquiries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.2 Confidentiality Protections</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">All service providers and subcontractors must:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                  <li>Execute Non-Disclosure Agreements (NDAs) with ERMITS</li>
                  <li>Implement equivalent security and privacy measures</li>
                  <li>Use data only for specified purposes (supporting your engagement)</li>
                  <li>Delete or return data upon engagement completion</li>
                  <li>Comply with applicable privacy laws (GDPR, CCPA, etc.)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.3 Professional References and Case Studies</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">References:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>We may request your permission to list you as a client reference</li>
                      <li>You may decline or specify limited reference scope</li>
                      <li>References provided only with your explicit consent</li>
                      <li>You may withdraw consent at any time</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Case Studies:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Require explicit written permission before publication</li>
                      <li>Client review and approval of all content before publication</li>
                      <li>Option to be identified or remain anonymous</li>
                      <li>Right to request removal of published case studies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.4 Legal Disclosures</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">When legally required to disclose information:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Our Commitments:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Notify you promptly of requests (when legally permitted)</li>
                      <li>Challenge overbroad or improper requests</li>
                      <li>Provide minimum information required by law</li>
                      <li>Seek protective orders for sensitive information</li>
                      <li>Document all disclosures for your records</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Limitations:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Cannot notify if legally prohibited (e.g., national security letters)</li>
                      <li>Cannot refuse legally valid court orders</li>
                      <li>Must comply with regulatory examination requests</li>
                      <li>Professional standards may require disclosure in limited circumstances</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 6: Data Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">6. DATA SECURITY MEASURES</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.1 Technical Security Controls</h3>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Data in Transit:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>TLS 1.3 encryption for all electronic communications</li>
                    <li>Secure file transfer protocols (SFTP, HTTPS)</li>
                    <li>Encrypted email options available (S/MIME, PGP)</li>
                    <li>VPN connections for remote system access</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Data at Rest:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>AES-256 encryption for stored client documents</li>
                    <li>Encrypted file storage platforms (Supabase with encryption)</li>
                    <li>Encrypted laptop drives (BitLocker, FileVault)</li>
                    <li>Secure document destruction (digital wiping, physical shredding)</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Access Controls:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>Multi-factor authentication (MFA) required for all consultants</li>
                    <li>Role-based access control (RBAC) for client data</li>
                    <li>Strong password requirements (minimum 16 characters)</li>
                    <li>Automatic session timeout and screen locking</li>
                    <li>Privileged access monitoring and logging</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Endpoint Security:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>Company-managed devices with security controls</li>
                    <li>Endpoint detection and response (EDR) software</li>
                    <li>Regular security patching and updates</li>
                    <li>Full-disk encryption on all devices</li>
                    <li>Remote wipe capability for lost/stolen devices</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.2 Physical Security</h3>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Office Security:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>Controlled access to office facilities</li>
                    <li>Visitor management and escort policies</li>
                    <li>Secure document storage (locked cabinets)</li>
                    <li>Clean desk policy for confidential materials</li>
                    <li>Secure disposal (shredding) of paper documents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Remote Work Security:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>Home office security requirements for consultants</li>
                    <li>Prohibition on public Wi-Fi for client work</li>
                    <li>Private workspace requirements for video calls</li>
                    <li>Secure storage of client materials at home</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.3 Operational Security</h3>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Consultant Training:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>Annual security awareness training</li>
                    <li>Privacy and confidentiality training</li>
                    <li>Data handling and classification training</li>
                    <li>Incident response training</li>
                    <li>Client data protection protocols</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Background Checks:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>Background checks for all consulting personnel</li>
                    <li>Enhanced screening for sensitive engagements</li>
                    <li>Confidentiality agreements signed by all personnel</li>
                    <li>Code of professional conduct</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Document Handling:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                    <li>Classification of client documents (Confidential, Highly Confidential)</li>
                    <li>Secure transmission protocols for document sharing</li>
                    <li>Version control and document tracking</li>
                    <li>Secure deletion after retention period</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.4 Security Incident Response</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">In the event of a security incident affecting client data:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Immediate Response (0-24 hours):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Containment and isolation of affected systems</li>
                      <li>Assessment of scope and impact</li>
                      <li>Notification to affected clients within 24 hours</li>
                      <li>Engagement of incident response procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Investigation (24-72 hours):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Forensic analysis of incident</li>
                      <li>Determination of data affected</li>
                      <li>Root cause identification</li>
                      <li>Evidence preservation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Notification (Within 72 hours):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Formal written notification to affected clients</li>
                      <li>Details of incident, data affected, and remediation steps</li>
                      <li>Recommendations for client protective measures</li>
                      <li>Ongoing communication and updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Remediation:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Implementation of corrective measures</li>
                      <li>Enhanced security controls</li>
                      <li>Post-incident review and lessons learned</li>
                      <li>Updated security procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 7: Data Retention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">7. DATA RETENTION AND DELETION</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.1 Active Engagement Data</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">During active engagements, we retain:</p>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Data Type</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Retention Period</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Client Contact Information</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement duration + 7 years</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Contract compliance, communication, professional standards</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement Deliverables</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement duration + 7 years</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Warranty support, professional liability, legal compliance</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Working Documents</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement duration + 3 years</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Quality assurance, issue resolution, professional standards</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Meeting Notes</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement duration + 3 years</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Deliverable support, context documentation</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Communications (Email)</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement duration + 7 years</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Contract compliance, dispute resolution, professional standards</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Financial Records</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">7 years from engagement end</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Tax compliance, audit requirements, financial regulations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.2 Post-Engagement Retention</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">After engagement completion:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Warranty Period (Typically 90 days):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Full engagement file retained for issue resolution</li>
                      <li>Client access to consultants for questions and clarifications</li>
                      <li>Errata or corrections to deliverables if needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Professional Standards Period (3 years):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Core deliverables and supporting documentation retained</li>
                      <li>Required for professional liability insurance</li>
                      <li>Support for quality assurance and peer review</li>
                      <li>Evidence of professional standards compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Legal Compliance Period (7 years):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Financial records and invoices</li>
                      <li>Contracts and Statements of Work</li>
                      <li>Core deliverables (final reports)</li>
                      <li>Required by tax regulations and professional standards</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.3 Data Deletion Process</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">At the end of retention periods:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Automated Deletion:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Working documents deleted after 3 years</li>
                      <li>Communications purged from email systems</li>
                      <li>Encrypted files deleted and keys destroyed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Verified Deletion:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Secure data wiping (DoD 5220.22-M standard)</li>
                      <li>Physical document shredding (cross-cut, unrecoverable)</li>
                      <li>Certificate of destruction available upon request</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Early Deletion Requests:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Clients may request early deletion of data</li>
                      <li>Subject to legal and professional standard requirements</li>
                      <li>Cannot delete financial records (7-year requirement)</li>
                      <li>Cannot delete documents under legal hold</li>
                      <li>Deletion typically completed within 30 days of request</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.4 Engagement File Closeout</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">Upon engagement completion:</p>
                <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                  <li><strong>Deliverable Handoff:</strong> Final deliverables transmitted to client</li>
                  <li><strong>File Review:</strong> Engagement file reviewed for completeness</li>
                  <li><strong>Data Classification:</strong> Client data classified for retention/deletion</li>
                  <li><strong>Secure Storage:</strong> Long-term retention materials moved to secure archive</li>
                  <li><strong>Access Restriction:</strong> Access limited to authorized personnel only</li>
                  <li><strong>Deletion Scheduling:</strong> Short-term materials scheduled for deletion</li>
                </ol>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 8: Your Privacy Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">8. YOUR PRIVACY RIGHTS</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.1 Universal Rights (All Clients)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">All clients have the following rights:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Access:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Request copies of all information we hold about you or your organization</li>
                      <li>Receive engagement files and working documents</li>
                      <li>Obtain documentation of data processing activities</li>
                      <li>Request: privacy@ermits.com</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Rectification:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Correct inaccurate information in our records</li>
                      <li>Update contact information or organizational details</li>
                      <li>Request corrections to deliverables (during warranty period)</li>
                      <li>Turnaround: 10 business days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Deletion:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Request deletion of information (subject to legal/professional requirements)</li>
                      <li>Cannot delete financial records (7-year legal requirement)</li>
                      <li>Cannot delete documents under legal hold</li>
                      <li>Deletion completed within 30 days (where legally permissible)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Restrict Processing:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Request limitation of data use</li>
                      <li>Object to specific processing activities</li>
                      <li>Suspend processing pending dispute resolution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Data Portability:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Receive engagement data in machine-readable format (JSON, XML, CSV)</li>
                      <li>Transfer data to another service provider</li>
                      <li>Provided at no charge within 30 days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Object:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Object to processing for research or thought leadership</li>
                      <li>Opt out of anonymized data aggregation</li>
                      <li>Decline reference or case study requests</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.2 Additional Rights for EU/UK/Swiss Clients (GDPR)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Legal Basis for Processing:</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2 text-sm">We process your data based on:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Contract:</strong> To perform advisory services under our engagement agreement</li>
                      <li><strong>Legitimate Interests:</strong> Professional standards compliance, quality assurance, legal compliance</li>
                      <li><strong>Consent:</strong> For case studies, testimonials, marketing communications (explicit opt-in)</li>
                      <li><strong>Legal Obligation:</strong> Tax compliance, regulatory requirements, legal process</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Lodge a Complaint:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>File complaint with your local Data Protection Authority (DPA)</li>
                      <li><strong>EU:</strong> Find your DPA at <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/about-edpb/board/members_en</a></li>
                      <li><strong>UK:</strong> Information Commissioner's Office (ICO) - <a href="https://ico.org.uk" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://ico.org.uk</a></li>
                      <li><strong>Switzerland:</strong> FDPIC - <a href="https://www.edoeb.admin.ch" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://www.edoeb.admin.ch</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Data Protection Officer:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Contact: <a href="mailto:dpo@ermits.com" className="text-navy dark:text-silver hover:underline">dpo@ermits.com</a></li>
                      <li>Subject: "GDPR Inquiry - Advisory Services"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Withdraw Consent:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Withdraw consent for optional processing anytime</li>
                      <li>Does not affect processing based on contract or legal obligation</li>
                      <li>Does not invalidate prior processing conducted with consent</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.3 Additional Rights for California Clients (CCPA/CPRA)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Know:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Categories of personal information collected</li>
                      <li>Sources of personal information</li>
                      <li>Business purposes for collection</li>
                      <li>Categories of third parties with whom we share information</li>
                      <li>Specific pieces of personal information collected</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Delete:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Request deletion of personal information (subject to exceptions)</li>
                      <li>Exceptions: Contract performance, legal compliance, professional standards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Opt-Out of Sale:</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2 text-sm"><strong>ERMITS Advisory Services does not sell client information</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>We have not sold personal information in the past 12 months</li>
                      <li>We will not sell your information in the future</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Non-Discrimination:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Equal service quality regardless of privacy rights exercise</li>
                      <li>No penalties for exercising privacy rights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Authorized Agent:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>May designate an authorized agent to make requests</li>
                      <li>Agent must provide written authorization</li>
                      <li>We may require identity verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Submit Requests:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a> (Subject: "CCPA Request - Advisory Services")</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.4 Exercising Your Rights</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">How to Submit Requests:</h4>
                    <div className="mb-3">
                      <h5 className="font-semibold mb-1 dark:text-white text-sm">Email:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                        <li>Address: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a></li>
                        <li>Subject: "Privacy Rights Request - Advisory Services"</li>
                        <li>Include: Name, organization, email, description of request</li>
                      </ul>
                    </div>
                    <div className="mb-3">
                      <h5 className="font-semibold mb-1 dark:text-white text-sm">Online Form:</h5>
                      <p className="text-gray-600 dark:text-gray-200 text-sm ml-4">
                        Submit requests via our{' '}
                        <Link to="/advisory/privacy-request" className="text-navy dark:text-silver hover:underline font-semibold">
                          Privacy Rights Request Form
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Verification Process:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Email verification to registered contact</li>
                      <li>Additional verification for sensitive requests (government ID, contract details)</li>
                      <li>Authorized representatives must provide written authorization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Response Timeline:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Initial acknowledgment: 10 business days</li>
                      <li>Complete response: 30 days (GDPR), 45 days (CCPA)</li>
                      <li>Extensions: May extend with notice for complex requests</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">No Cost:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>First two requests per year are free</li>
                      <li>Reasonable fees for excessive or repetitive requests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 9: International Data Transfers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">9. INTERNATIONAL DATA TRANSFERS</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.1 Data Processing Locations</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">ERMITS Advisory Services operates from the United States. Client data may be:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Processed in:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>United States (primary operations)</li>
                      <li>European Union (EU-based consultants for EU clients)</li>
                      <li>Canada (Canadian consulting team)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Stored in:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>United States (encrypted cloud storage - Supabase US)</li>
                      <li>European Union (optional EU data residency for EU clients)</li>
                      <li>Client-designated locations (for on-premises engagements)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.2 Safeguards for International Transfers</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">For data transfers from EEA, UK, or Switzerland to the United States:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Standard Contractual Clauses (SCCs):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>European Commission-approved SCCs (Decision 2021/914)</li>
                      <li>Module Two (Controller to Processor) for subprocessors</li>
                      <li>Module One (Controller to Controller) for consulting relationships</li>
                      <li>Full text available upon request: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">UK International Data Transfer Addendum:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>UK Addendum to EU SCCs for UK clients</li>
                      <li>Compliance with UK GDPR requirements</li>
                      <li>Approved by UK Information Commissioner's Office (ICO)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Swiss Data Transfer Mechanisms:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Swiss-adapted Standard Contractual Clauses</li>
                      <li>Compliance with Swiss Federal Data Protection Act (FADP)</li>
                      <li>Swiss FDPIC-approved transfer mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Additional Safeguards:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>End-to-end encryption for all data transfers</li>
                      <li>Access controls and authentication (MFA, RBAC)</li>
                      <li>Data minimization (collect only what's necessary)</li>
                      <li>Regular security assessments and audits</li>
                      <li>Incident notification within 72 hours</li>
                      <li>Client notification of government access requests (when legally permitted)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.3 Data Residency Options</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">EU Data Residency (Available):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>EU-based consultants for EU client engagements</li>
                      <li>Data stored in EU regions only (Supabase EU - Frankfurt)</li>
                      <li>No transfer to United States (unless client authorizes)</li>
                      <li>Request at engagement initiation: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">On-Site Engagements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Consultant travel to client location</li>
                      <li>Data processed and stored at client facilities</li>
                      <li>No transmission to ERMITS infrastructure (if preferred)</li>
                      <li>Client retains complete control of data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Client-Controlled Storage:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Store all engagement data on client-provided infrastructure</li>
                      <li>ERMITS access via secure VPN or on-site only</li>
                      <li>No ERMITS cloud storage used</li>
                      <li>Available for sensitive engagements (CUI, classified, ITAR)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 10: Special Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">10. SPECIAL CONSIDERATIONS</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.1 Federal Contractor Clients (CUI/FCI)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  For clients handling Controlled Unclassified Information (CUI) or Federal Contract Information (FCI):
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 text-navy dark:text-white">Special Protections:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>CUI/FCI is NOT stored on ERMITS infrastructure</li>
                    <li>All CUI/FCI processed on-site at client facilities or client-approved systems</li>
                    <li>ERMITS consultants access CUI/FCI only under client supervision and authorization</li>
                    <li>Consultants trained on CUI/FCI handling per NIST SP 800-171 and 32 CFR Part 2002</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.2 Healthcare Clients (HIPAA)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  For healthcare organizations subject to HIPAA:
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 text-navy dark:text-white">Business Associate Agreement (BAA):</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Required before any access to Protected Health Information (PHI)</li>
                    <li>Executed as part of engagement contract</li>
                    <li>HIPAA-compliant safeguards implemented</li>
                    <li>Request: privacy@ermits.com</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.3 Financial Services Clients (GLBA, SOX, PCI-DSS)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  For financial institutions and public companies:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Special Protections:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>No access to customer financial data or payment card information</li>
                      <li>No storage of financial records on ERMITS systems</li>
                      <li>Consultants sign confidentiality agreements acknowledging SOX requirements</li>
                      <li>Support for SOX 404 compliance assessments (IT general controls)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Compliance Support:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Advisory services designed to support GLBA, SOX, PCI-DSS compliance</li>
                      <li>No certification or attestation authority (recommend third-party auditors)</li>
                      <li>Deliverables may be used to support compliance programs</li>
                      <li>Professional services do not constitute audit or assurance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Restrictions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Do not process payment card data (PCI data)</li>
                      <li>Do not access customer personally identifiable information (PII)</li>
                      <li>Financial records reviewed on-site or via sanitized/anonymized samples</li>
                      <li>Client retains all sensitive financial data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.4 Attorney-Client Engagement Model</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  For engagements conducted at the direction of legal counsel:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Attorney-Client Privilege Protection:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>ERMITS may be engaged by your legal counsel to provide technical consulting</li>
                      <li>Work product prepared at counsel's direction may be privileged</li>
                      <li>Communications routed through legal counsel to preserve privilege</li>
                      <li>Disclosure restrictions to protect privilege</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Our Role:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Technical advisor to legal counsel</li>
                      <li>Consultant under attorney work-product doctrine</li>
                      <li>No independent client relationship (engagement through counsel only)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Maintaining Privilege:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Clearly identify counsel as client in engagement documents</li>
                      <li>Route all communications through legal counsel</li>
                      <li>Mark documents "Attorney-Client Privileged - Prepared at Request of Counsel"</li>
                      <li>Limit disclosure to preserve privilege</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Not Legal Advice:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>ERMITS provides technical and cybersecurity consulting only</li>
                      <li>We are not attorneys and do not provide legal advice</li>
                      <li>Legal counsel responsible for legal advice and strategy</li>
                      <li>Consult your attorney regarding privilege protections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 11: Children's Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">11. CHILDREN'S PRIVACY</h2>
            <p className="text-gray-600 dark:text-gray-200">
              ERMITS Advisory Services are business-to-business professional services not directed at children under 18. We do not knowingly collect information from children under 18.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mt-3">
              If we learn we have inadvertently collected information from a child under 18, we will delete it immediately.
            </p>
          </Card>
        </motion.div>

        {/* Section 12: Updates to Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">12. UPDATES TO THIS PRIVACY POLICY</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.1 Policy Updates</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We may update this Privacy Policy to reflect:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                  <li>Changes in advisory service offerings</li>
                  <li>Legal or regulatory developments</li>
                  <li>Industry best practices for professional services</li>
                  <li>Client feedback</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.2 Notification of Changes</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Material Changes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>30 days' advance notice via email to active clients</li>
                      <li>Opportunity to discuss changes with your account manager</li>
                      <li>Option to terminate engagement if you object to changes (during active engagement)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Non-Material Changes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Update "Last Updated" date</li>
                      <li>Effective immediately upon posting</li>
                      <li>Notification in next scheduled client communication</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.3 Version History</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  Previous versions available upon request: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  <strong>Current Version:</strong> 1.0 (November 2025)
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 13: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">13. CONTACT INFORMATION</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.1 Advisory Services Privacy Inquiries</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">General Privacy Questions:</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">Subject: "Advisory Services Privacy Inquiry"</p>
                    <p className="text-gray-600 dark:text-gray-200">Website: <a href="https://advisory.ermits.com/privacy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://advisory.ermits.com/privacy</a></p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Data Rights Requests:</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">Subject: "Privacy Rights Request - Advisory Services"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Engagement-Specific Questions:</h4>
                    <p className="text-gray-600 dark:text-gray-200">Contact your assigned consultant or project manager</p>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">For technical support inquiries:</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:support@ermits.com" className="text-navy dark:text-silver hover:underline">support@ermits.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.2 Jurisdiction-Specific Contacts</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Data Protection Officer (EU/UK/Swiss):</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:dpo@ermits.com" className="text-navy dark:text-silver hover:underline">dpo@ermits.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">Subject: "GDPR Inquiry - Advisory Services"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">California Privacy Requests (CCPA/CPRA):</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">Subject: "CCPA Request - Advisory Services"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">HIPAA Privacy Officer (Healthcare Clients):</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:hipaa@ermits.com" className="text-navy dark:text-silver hover:underline">hipaa@ermits.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">Subject: "HIPAA Privacy Matter - Advisory Services"</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.3 Security Concerns</h3>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Security Issues or Data Breaches:</h4>
                  <p className="text-gray-600 dark:text-gray-200">
                    Email: <a href="mailto:security@ermits.com" className="text-navy dark:text-silver hover:underline">security@ermits.com</a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-200">Subject: "Security Issue - Advisory Services [Urgent]"</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.4 Mailing Address</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  <strong>ERMITS LLC - Advisory Services</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-200">[Physical Address to be inserted]</p>
                <p className="text-gray-600 dark:text-gray-200">Attn: Privacy Team - Advisory Services</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 14: Effective Date and Acceptance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">14. EFFECTIVE DATE AND ACCEPTANCE</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-200">
                <strong>Effective Date:</strong> November 19, 2025
              </p>
              <p className="text-gray-600 dark:text-gray-200">
                <strong>Last Updated:</strong> November 19, 2025
              </p>
              <p className="text-gray-600 dark:text-gray-200">
                <strong>By engaging ERMITS Advisory Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-200">
                If you do not agree with this Privacy Policy, please discuss concerns with us before engagement commencement or terminate the engagement in accordance with contract terms.
              </p>
              <p className="text-gray-600 dark:text-gray-200 mt-4 italic">
                <strong>ERMITS Advisory Services - Professional. Confidential. Trusted.</strong>
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/advisory/terms">
              <Button variant="outline" size="sm">
                Advisory Terms of Service
              </Button>
            </Link>
            <Link to="/advisory/acceptable-use">
              <Button variant="outline" size="sm">
                Advisory Acceptable Use Policy
              </Button>
            </Link>
            <Link to="/advisory/website-portal">
              <Button variant="outline" size="sm">
                Cookie & Portal Policy
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            These policies apply to ERMITS Advisory Services only. For software product policies, see{' '}
            <Link to="/privacy" className="text-navy dark:text-silver hover:underline">Product Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
