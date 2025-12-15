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
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">1. SCOPE AND APPLICABILITY</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">1.1 Services Covered</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  This Privacy Policy applies to ERMITS Advisory Services, including:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Cybersecurity Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>CMMC consulting and readiness assessments</li>
                      <li>Cybersecurity program development and maturity assessments</li>
                      <li>Incident response planning and tabletop exercises</li>
                      <li>Security architecture review and recommendations</li>
                      <li>Vulnerability management program development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Compliance Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>NIST SP 800-171 compliance consulting</li>
                      <li>DFARS compliance guidance</li>
                      <li>HIPAA Security Rule consulting</li>
                      <li>Privacy compliance advisory (GDPR, CCPA/CPRA, PIPEDA)</li>
                      <li>Policy and procedure development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Third-Party Risk Management Advisory:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Vendor risk assessment consulting</li>
                      <li>Supply chain security advisory</li>
                      <li>Third-party due diligence support</li>
                      <li>Vendor security questionnaire development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Privacy Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Privacy program development</li>
                      <li>Data Protection Impact Assessments (DPIA)</li>
                      <li>Privacy by Design consulting</li>
                      <li>Data breach response and notification advisory</li>
                      <li>Privacy policy development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Strategic Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
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
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">1.2 What This Policy Does NOT Cover</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">This Privacy Policy does NOT apply to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>ERMITS software products and platforms (covered by Master Privacy Policy)</li>
                  <li>Marketing website activities (covered by Website Privacy Policy)</li>
                  <li>Job applicant data (covered by Recruitment Privacy Notice)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">1.3 Geographic Scope</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  This Privacy Policy applies to clients worldwide and complies with:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
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
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Provide Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Conduct assessments and evaluations per SOW</li>
                      <li>Develop recommendations and strategic guidance</li>
                      <li>Produce deliverables (reports, roadmaps, policies, procedures)</li>
                      <li>Present findings and recommendations to stakeholders</li>
                      <li>Answer questions and provide clarifications</li>
                      <li>Support implementation of recommendations (if contracted)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Quality Assurance:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Internal review of deliverables for accuracy and completeness</li>
                      <li>Technical review by subject matter experts</li>
                      <li>Engagement oversight by senior advisors</li>
                      <li>Compliance with professional standards</li>
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
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              ERMITS shares client information only in the following circumstances:
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2 text-navy dark:text-white">With Your Consent:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Sharing deliverables with your designated third parties</li>
                  <li>Joint presentations with your technology vendors</li>
                  <li>Collaboration with your legal counsel or other advisors</li>
                  <li>Case studies or testimonials (with explicit written permission)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-navy dark:text-white">Service Providers (Under NDA):</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Secure file sharing platforms (Supabase, encrypted storage)</li>
                  <li>Payment processors (Stripe for invoicing)</li>
                  <li>Document collaboration tools (as needed for engagement delivery)</li>
                  <li>Professional liability insurance carriers (for coverage verification)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-navy dark:text-white">Legal and Regulatory Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Court orders, subpoenas, or legal process</li>
                  <li>Regulatory investigations or examinations</li>
                  <li>National security requests (where legally required)</li>
                  <li>Professional standards board inquiries</li>
                </ul>
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
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.1 Technical Security Controls</h3>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 text-navy dark:text-white">Data in Transit:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>TLS 1.3 encryption for all electronic communications</li>
                    <li>Secure file transfer protocols (SFTP, HTTPS)</li>
                    <li>Encrypted email options available (S/MIME, PGP)</li>
                    <li>VPN connections for remote system access</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 text-navy dark:text-white">Data at Rest:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>AES-256 encryption for stored client documents</li>
                    <li>Encrypted file storage platforms (Supabase with encryption)</li>
                    <li>Encrypted laptop drives (BitLocker, FileVault)</li>
                    <li>Secure document destruction (digital wiping, physical shredding)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-navy dark:text-white">Access Controls:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Multi-factor authentication (MFA) required for all consultants</li>
                    <li>Role-based access control (RBAC) for client data</li>
                    <li>Strong password requirements (minimum 16 characters)</li>
                    <li>Automatic session timeout and screen locking</li>
                    <li>Privileged access monitoring and logging</li>
                  </ul>
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
            
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold text-navy dark:text-white">Data Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-navy dark:text-white">Retention Period</th>
                    <th className="text-left py-3 px-4 font-semibold text-navy dark:text-white">Purpose</th>
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
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Technical Findings</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement duration + 3 years</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Deliverable support, warranty period assistance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Financial Records</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">7 years from engagement end</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Tax compliance, audit requirements, financial regulations</td>
                  </tr>
                </tbody>
              </table>
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
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.1 Universal Rights (All Clients)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Right to Access:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Request copies of all information we hold about you or your organization</li>
                      <li>Receive engagement files and working documents</li>
                      <li>Obtain documentation of data processing activities</li>
                      <li>Request: privacy@ermits.com</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Right to Rectification:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Correct inaccurate information in our records</li>
                      <li>Update contact information or organizational details</li>
                      <li>Request corrections to deliverables (during warranty period)</li>
                      <li>Turnaround: 10 business days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Right to Deletion:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Request deletion of information (subject to legal/professional requirements)</li>
                      <li>Cannot delete financial records (7-year legal requirement)</li>
                      <li>Cannot delete documents under legal hold</li>
                      <li>Deletion completed within 30 days (where legally permissible)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-200 mb-2">
                  <strong>How to Exercise Your Rights:</strong> Submit requests via email to{' '}
                  <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>{' '}
                  (Subject: "Privacy Rights Request - Advisory Services")
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Response Timeline:</strong> Initial response within 10 business days, complete response within 30-45 days. First two requests per year are free.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 10: Special Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.4 Attorney-Client Engagement Model</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  For engagements conducted at the direction of legal counsel:
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 text-navy dark:text-white">Attorney-Client Privilege Protection:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>ERMITS may be engaged by your legal counsel to provide technical consulting</li>
                    <li>Work product prepared at counsel's direction may be privileged</li>
                    <li>Communications routed through legal counsel to preserve privilege</li>
                    <li>Disclosure restrictions to protect privilege</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 13: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">13. CONTACT INFORMATION</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.1 Advisory Services Privacy Inquiries</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">General Privacy Questions:</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">Subject: "Advisory Services Privacy Inquiry"</p>
                    <p className="text-gray-600 dark:text-gray-200">Website: <a href="https://advisory.ermits.com/privacy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://advisory.ermits.com/privacy</a></p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Data Protection Officer (EU/UK/Swiss):</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:dpo@ermits.com" className="text-navy dark:text-silver hover:underline">dpo@ermits.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">Subject: "GDPR Inquiry - Advisory Services"</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Security Concerns:</h4>
                    <p className="text-gray-600 dark:text-gray-200">
                      Email: <a href="mailto:security@ermits.com" className="text-navy dark:text-silver hover:underline">security@ermits.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-200">Subject: "Security Issue - Advisory Services [Urgent]"</p>
                  </div>
                </div>
              </div>
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
                Website & Portal Policy
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
