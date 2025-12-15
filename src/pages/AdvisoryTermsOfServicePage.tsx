import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

// ERMITS Advisory Services - Master Terms of Service
// Complete content from ERMITS_Advisory_Terms_of_Service.md
// Last updated: 2025-01-XX - All sections verified and complete
export const AdvisoryTermsOfServicePage: React.FC = () => {
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
          <div className="flex items-center mb-4">
            <FileText size={32} className="mr-3 text-navy dark:text-silver" />
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">ERMITS ADVISORY SERVICES - MASTER TERMS OF SERVICE</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> December 15, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> December 15, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            By engaging ERMITS LLC ("ERMITS," "we," "our," or "us") for professional advisory and consulting services (the "Advisory Services"), you ("Client," "you," or "your") agree to be bound by these Master Terms of Service ("Terms"). If you do not agree to these Terms, do not engage our Advisory Services.
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
                  These Terms govern all ERMITS Advisory Services, including:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Cybersecurity Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>CMMC (Cybersecurity Maturity Model Certification) consulting and readiness assessments</li>
                      <li>Cybersecurity program development and maturity assessments</li>
                      <li>Incident response planning, playbook development, and tabletop exercises</li>
                      <li>Security architecture review and design recommendations</li>
                      <li>Vulnerability management program development</li>
                      <li>Threat modeling and risk assessment</li>
                      <li>Security tool selection and implementation guidance</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Compliance Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>NIST SP 800-171 compliance consulting and gap assessments</li>
                      <li>DFARS (Defense Federal Acquisition Regulation Supplement) compliance guidance</li>
                      <li>HIPAA Security Rule and Privacy Rule consulting</li>
                      <li>Privacy compliance advisory (GDPR, CCPA/CPRA, PIPEDA, LGPD)</li>
                      <li>Policy, procedure, and documentation development</li>
                      <li>Compliance program maturity assessments</li>
                      <li>Regulatory response support</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Third-Party Risk Management Advisory:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Vendor risk assessment consulting and program development</li>
                      <li>Supply chain security advisory</li>
                      <li>Third-party due diligence framework development</li>
                      <li>Vendor security questionnaire design and evaluation</li>
                      <li>Continuous monitoring program design</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Privacy Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Privacy program development and enhancement</li>
                      <li>Data Protection Impact Assessments (DPIA)</li>
                      <li>Privacy by Design consulting</li>
                      <li>Data breach response planning and advisory</li>
                      <li>Privacy policy development and review</li>
                      <li>Data governance framework development</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Strategic Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Executive advisory and virtual CISO (vCISO) services</li>
                      <li>Cybersecurity roadmap and strategic planning</li>
                      <li>Budget planning and resource allocation guidance</li>
                      <li>Technology selection and vendor evaluation support</li>
                      <li>Board-level reporting and communication strategies</li>
                      <li>Merger & acquisition (M&A) security due diligence</li>
                      <li>Security awareness and training program development</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.2 Engagement Structure</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  Advisory Services are delivered through:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Project-Based Engagements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Fixed-scope deliverables defined in Statement of Work (SOW)</li>
                      <li>Defined timeline and milestones</li>
                      <li>Fixed fee or not-to-exceed pricing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Retainer Engagements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Ongoing advisory support (e.g., virtual CISO services)</li>
                      <li>Monthly or quarterly retainer arrangements</li>
                      <li>Defined service hours or availability</li>
                      <li>Priority access to consultants</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Hourly Consulting:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Time-and-materials engagements</li>
                      <li>Hourly or daily rates</li>
                      <li>Flexible scope and duration</li>
                      <li>Detailed time tracking and reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Assessment Engagements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Structured assessments with standardized methodology</li>
                      <li>Deliverable-based (assessment report)</li>
                      <li>Fixed or tiered pricing based on scope</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.3 Relationship to Product Terms</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  These Terms apply ONLY to Advisory Services. If you also use ERMITS software products or platforms, separate Master Terms of Service apply to those products. Advisory Services may be provided independently or as a complement to ERMITS products.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 2: Definitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2. DEFINITIONS</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-200">
              <p><strong>"Advisory Services"</strong> means the professional consulting and advisory services provided by ERMITS under an executed engagement agreement.</p>
              <p><strong>"Statement of Work" or "SOW"</strong> means a written agreement specifying the scope, deliverables, timeline, and fees for a specific Advisory Services engagement.</p>
              <p><strong>"Deliverables"</strong> means the reports, assessments, documentation, recommendations, or other work products specified in the SOW.</p>
              <p><strong>"Engagement Period"</strong> means the duration of the Advisory Services as specified in the SOW, from commencement date to completion or termination.</p>
              <p><strong>"Client Data"</strong> means any information, documents, data, or materials provided by Client to ERMITS for the purpose of delivering Advisory Services.</p>
              <p><strong>"Confidential Information"</strong> means any non-public information disclosed by one party to the other, including Client Data, business information, technical information, and engagement details.</p>
              <p><strong>"Work Product"</strong> means all deliverables, reports, analyses, recommendations, and documentation created by ERMITS in the course of providing Advisory Services.</p>
              <p><strong>"Acceptance"</strong> means Client's formal acceptance of Deliverables as meeting the requirements specified in the SOW.</p>
            </div>
          </Card>
        </motion.div>

        {/* Section 3: Eligibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">3. ELIGIBILITY AND AUTHORITY</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-200">
              <p><strong>Business Entities Only:</strong> Advisory Services are provided to businesses, government entities, and organizations only. ERMITS does not provide Advisory Services to individual consumers.</p>
              <p><strong>Authority to Engage:</strong> By engaging Advisory Services, you represent and warrant that you have the authority to bind your organization to these Terms and any applicable SOW.</p>
              <p><strong>Accurate Information:</strong> You agree to provide accurate, current, and complete information about your organization, needs, and environment to enable effective service delivery.</p>
              <p><strong>Eligibility Verification:</strong> ERMITS reserves the right to verify your authority and organizational identity before commencing services.</p>
            </div>
          </Card>
        </motion.div>

        {/* Section 4: Engagement Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">4. ENGAGEMENT PROCESS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.1 Engagement Initiation</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Initial Consultation:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Complimentary initial consultation to understand your needs</li>
                      <li>Discussion of objectives, scope, and constraints</li>
                      <li>Preliminary assessment of engagement approach</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Proposal Development:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>ERMITS develops proposal outlining approach, scope, timeline, and fees</li>
                      <li>Proposal valid for 30 days unless otherwise specified</li>
                      <li>Proposal is non-binding until SOW is executed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Statement of Work (SOW):</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Formal engagement document specifying:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Detailed scope of services</li>
                      <li>Deliverables and acceptance criteria</li>
                      <li>Timeline and milestones</li>
                      <li>Fees and payment terms</li>
                      <li>Roles and responsibilities</li>
                      <li>Assumptions and dependencies</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-200 mt-2">SOW may incorporate these Terms by reference or include modifications. Engagement commences upon execution of SOW by both parties.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.2 Non-Disclosure Agreement (NDA)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Prior to engagement commencement:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>ERMITS and Client execute mutual Non-Disclosure Agreement (NDA)</li>
                  <li>NDA governs confidentiality of Client Data and engagement details</li>
                  <li>NDA remains in effect for duration specified (typically 3-5 years)</li>
                  <li>Pre-existing NDA may be used if mutually acceptable</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.3 Scope Changes and Change Orders</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Change Requests:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Either party may request changes to SOW scope</li>
                      <li>Changes require written change order signed by both parties</li>
                      <li>Change order specifies impact on deliverables, timeline, and fees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Out-of-Scope Requests:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Work outside SOW scope is not included in original fees</li>
                      <li>ERMITS will notify Client of out-of-scope requests</li>
                      <li>Client may authorize additional work via change order or decline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Emergency Changes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Critical issues may require immediate scope adjustments</li>
                      <li>ERMITS will use reasonable efforts to notify Client promptly</li>
                      <li>Change order formalized as soon as practicable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 5: Professional Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">5. PROFESSIONAL STANDARDS AND CONDUCT</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.1 Professional Standards</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS Advisory Services are delivered in accordance with:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Industry best practices and professional standards</li>
                  <li>Applicable laws, regulations, and ethical guidelines</li>
                  <li>Professional codes of conduct</li>
                  <li>Quality assurance and peer review processes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.2 Consultant Qualifications</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS consultants assigned to your engagement:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Possess relevant education, training, and experience</li>
                  <li>Maintain professional certifications as appropriate (CISSP, CISM, CISA, CEH, CPP, CIPM, etc.)</li>
                  <li>Undergo annual security and privacy training</li>
                  <li>Sign confidentiality and code of conduct agreements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.3 Professional Independence</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS maintains professional independence:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>No undisclosed conflicts of interest</li>
                  <li>Objective recommendations based on professional judgment</li>
                  <li>No kickbacks or referral fees from recommended vendors</li>
                  <li>Transparent disclosure of any potential conflicts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.4 Limitations of Advisory Services</h3>
                <div className="mb-3">
                  <p className="font-semibold mb-2 dark:text-white">Advisory Services Are:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Professional consulting and guidance</li>
                    <li>Based on information provided by Client and industry best practices</li>
                    <li>Subject to professional judgment and interpretation</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="font-semibold mb-2 dark:text-white">Advisory Services Are NOT:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Legal advice (consult your attorney for legal matters)</li>
                    <li>Accounting or financial advice (consult your CPA)</li>
                    <li>Guarantees of regulatory compliance or certification</li>
                    <li>Implementation or technical execution services (unless explicitly included in SOW)</li>
                    <li>Attestation or audit services (we are not auditors or certification bodies)</li>
                    <li>Endorsements of specific vendors or products (unless explicitly contracted)</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 6: Client Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">6. CLIENT RESPONSIBILITIES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.1 Information and Access</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Client shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Provide timely, accurate, and complete information necessary for service delivery</li>
                  <li>Grant access to personnel, systems, and documentation as specified in SOW</li>
                  <li>Designate primary point of contact and decision-maker</li>
                  <li>Provide physical or virtual workspace for consultants (as needed)</li>
                  <li>Ensure availability of key stakeholders for interviews and meetings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.2 Cooperation and Communication</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Client shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Respond to ERMITS requests and questions in a timely manner</li>
                  <li>Participate in scheduled meetings and reviews</li>
                  <li>Provide feedback on draft deliverables during review periods</li>
                  <li>Notify ERMITS of changes affecting engagement scope or timeline</li>
                  <li>Maintain regular communication with assigned consultants</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.3 Review and Acceptance of Deliverables</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Client shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Review deliverables within specified timeframe (typically 10 business days)</li>
                  <li>Provide written feedback or acceptance</li>
                  <li>Identify deficiencies or non-conformance with SOW requirements</li>
                  <li>Work collaboratively to resolve issues</li>
                </ul>
                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="font-semibold mb-1 dark:text-white">Deemed Acceptance:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>If Client does not provide feedback within review period, deliverables are deemed accepted</li>
                    <li>Acceptance does not waive material non-conformance with SOW</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.4 Security and Confidentiality</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Client shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Implement appropriate security controls for consultant access</li>
                  <li>Provide secure communication channels (encrypted email, VPN, etc.)</li>
                  <li>Monitor and log consultant access to sensitive systems (as appropriate)</li>
                  <li>Notify ERMITS of security incidents affecting engagement</li>
                  <li>Comply with confidentiality obligations regarding ERMITS methodologies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.5 Implementation of Recommendations</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Client acknowledges:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Client is solely responsible for implementation of recommendations</li>
                  <li>ERMITS is not responsible for implementation outcomes (unless implementation services explicitly contracted)</li>
                  <li>Client must exercise independent judgment in applying recommendations</li>
                  <li>Recommendations are based on information available at time of engagement</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 7: ERMITS Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.57 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">7. ERMITS RESPONSIBILITIES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.1 Service Delivery</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Deliver Advisory Services in accordance with SOW requirements</li>
                  <li>Assign qualified consultants with appropriate expertise</li>
                  <li>Maintain professional standards of quality and conduct</li>
                  <li>Provide deliverables on schedule (subject to Client cooperation and dependencies)</li>
                  <li>Communicate proactively regarding issues, risks, or delays</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.2 Confidentiality</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Maintain confidentiality of Client Data and Confidential Information</li>
                  <li>Use Client Data only for purposes of delivering Advisory Services</li>
                  <li>Implement appropriate security measures to protect Client Data</li>
                  <li>Not disclose Confidential Information to third parties without Client consent (except as required by law)</li>
                  <li>Bind all consultants and subcontractors to equivalent confidentiality obligations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.3 Quality Assurance</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Conduct internal quality review of deliverables</li>
                  <li>Ensure deliverables meet professional standards</li>
                  <li>Provide opportunity for Client review and feedback</li>
                  <li>Correct material deficiencies in deliverables (during warranty period)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.4 Subcontractors</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS may engage subcontractors or specialists to deliver Advisory Services:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Subcontractors bound by equivalent confidentiality and professional standards</li>
                  <li>ERMITS remains responsible for subcontractor performance</li>
                  <li>Client notification of subcontractor involvement (where material)</li>
                  <li>Client may object to specific subcontractors (SOW may specify approval rights)</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 8: Fees, Payment, and Expenses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">8. FEES, PAYMENT, AND EXPENSES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.1 Fees</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  Fees for Advisory Services are specified in the SOW and may be structured as:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Fixed Fee:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Total fee for defined scope and deliverables</li>
                      <li>Payment milestones tied to deliverable completion</li>
                      <li>Scope changes via change order may adjust fees</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Time and Materials:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Hourly or daily rates for consultants</li>
                      <li>Monthly invoicing based on actual hours worked</li>
                      <li>Detailed time tracking and reporting</li>
                      <li>Not-to-exceed caps (if specified in SOW)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Retainer:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Monthly or quarterly retainer fee</li>
                      <li>Defined service hours or availability</li>
                      <li>Unused hours may roll over or expire (per SOW terms)</li>
                      <li>Additional hours billed at specified hourly rate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Value-Based:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Fee based on value delivered or outcomes achieved</li>
                      <li>Metrics and payment triggers defined in SOW</li>
                      <li>Used for strategic advisory engagements</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.2 Expenses</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Reimbursable Expenses:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Travel (airfare, lodging, ground transportation) at cost</li>
                      <li>Meals during travel (per diem or actual, as specified)</li>
                      <li>Software licenses or tools required for engagement (if not otherwise available)</li>
                      <li>Printing, shipping, and materials for deliverables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Expense Policy:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Expenses pre-approved by Client or within SOW budget</li>
                      <li>Economy travel standards (coach airfare, standard hotels)</li>
                      <li>Expense receipts provided with invoices</li>
                      <li>Markup on expenses (if any) specified in SOW</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Non-Reimbursable Expenses:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Normal business overhead (office, equipment, software tools)</li>
                      <li>Consultant salaries and benefits</li>
                      <li>Internal travel within ERMITS office locations</li>
                      <li>Administrative costs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.3 Invoicing and Payment</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Invoicing Schedule:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Fixed Fee: Per milestone completion or monthly progress billing</li>
                      <li>Time & Materials: Monthly in arrears</li>
                      <li>Retainer: In advance (monthly or quarterly)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Invoice Contents:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Detailed description of services performed</li>
                      <li>Hours worked (for time & materials)</li>
                      <li>Expenses with receipts</li>
                      <li>Payment terms and due date</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Payment Terms:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Payment due within 30 days of invoice date (unless otherwise specified)</li>
                    <li>Wire transfer or ACH preferred; check accepted</li>
                    <li>Credit card payment available (processing fees may apply)</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Late Payment:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Interest on overdue amounts at 1.5% per month (18% annual) or maximum allowed by law</li>
                    <li>ERMITS may suspend services for accounts 60+ days overdue</li>
                    <li>Client responsible for collection costs (attorneys' fees, court costs)</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.4 Taxes</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Client is responsible for all applicable taxes (sales tax, VAT, GST, etc.) except taxes on ERMITS' income. If ERMITS is required to collect taxes, they will be added to invoices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.5 Pricing Changes</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For multi-year retainers or ongoing engagements:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>ERMITS may adjust pricing annually with 60 days' notice</li>
                  <li>Adjustments typically limited to CPI increase or mutually agreed</li>
                  <li>Client may terminate upon objection to price increase</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 9: Intellectual Property Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">9. INTELLECTUAL PROPERTY RIGHTS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.1 Client Data Ownership</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Client retains all ownership rights in Client Data. ERMITS does not claim any ownership or intellectual property rights in Client Data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.2 Work Product Ownership</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Deliverables:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Upon full payment, Client owns all Work Product and Deliverables created specifically for Client under the SOW</li>
                      <li>Client receives license to use, modify, and distribute Deliverables for internal business purposes</li>
                      <li>Client may share Deliverables with regulators, auditors, legal counsel, and business partners as necessary</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Restrictions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Client may not publicly disclose proprietary ERMITS methodologies without consent</li>
                      <li>Client may not resell or commercialize Deliverables</li>
                      <li>Attribution to ERMITS required if Deliverables shared publicly (with ERMITS consent)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.3 ERMITS Intellectual Property</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS retains all rights in:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Pre-existing methodologies, frameworks, and tools</li>
                  <li>General knowledge, know-how, and expertise</li>
                  <li>Templates and assessment frameworks (underlying structure)</li>
                  <li>ERMITS trademarks, branding, and proprietary materials</li>
                </ul>
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 dark:text-white">License to Client:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Limited license to use ERMITS methodologies and tools for internal purposes in connection with Deliverables</li>
                    <li>Non-exclusive, non-transferable, non-sublicensable</li>
                    <li>Terminates upon engagement completion (except for use of Deliverables)</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.4 Residual Knowledge</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS may use general knowledge, skills, and expertise gained during engagement for other clients, provided:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>No Client Confidential Information is disclosed</li>
                  <li>No Client-specific Work Product is reused without consent</li>
                  <li>General industry knowledge and best practices may be applied</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.5 Case Studies and Testimonials</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS may request permission to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Use Client as a reference</li>
                  <li>Publish anonymized or attributed case study</li>
                  <li>Feature Client testimonial on website or marketing materials</li>
                </ul>
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Client Control:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Explicit written permission required before any public disclosure</li>
                    <li>Client reviews and approves all content before publication</li>
                    <li>Client may withdraw permission at any time</li>
                    <li>Client may remain anonymous in case studies</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 10: Confidentiality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.63 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">10. CONFIDENTIALITY</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.1 Mutual Confidentiality Obligations</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Both parties agree to maintain confidentiality of Confidential Information disclosed by the other party.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Confidential Information Includes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Client Data and business information</li>
                      <li>Engagement details and findings</li>
                      <li>Technical information and trade secrets</li>
                      <li>Financial information</li>
                      <li>Strategic plans and business relationships</li>
                      <li>Information marked "Confidential" or that reasonably should be understood as confidential</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Exclusions from Confidential Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Publicly available information (not due to breach)</li>
                      <li>Information already known to receiving party</li>
                      <li>Information independently developed without use of Confidential Information</li>
                      <li>Information rightfully received from third party without confidentiality obligation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.2 Use and Disclosure Restrictions</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Confidential Information shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Be used only for purposes of the engagement</li>
                  <li>Not be disclosed to third parties without prior written consent</li>
                  <li>Be protected with reasonable security measures</li>
                  <li>Be disclosed only to personnel with need-to-know</li>
                </ul>
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Permitted Disclosures:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>To employees, consultants, and subcontractors under confidentiality obligations</li>
                    <li>As required by law, regulation, or court order (with notice to disclosing party when legally permitted)</li>
                    <li>To professional advisors (attorneys, accountants) under professional confidentiality duties</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.3 Return or Destruction of Confidential Information</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Upon engagement termination or request:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Receiving party shall return or securely destroy Confidential Information</li>
                  <li>Certification of destruction provided upon request</li>
                  <li>Receiving party may retain copies as required by law or professional standards</li>
                  <li>Confidentiality obligations survive termination for period specified in NDA (typically 3-5 years)</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 11: Warranties and Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">11. WARRANTIES AND DISCLAIMERS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.1 ERMITS Warranties</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS warrants that:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Professional Standards:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Advisory Services will be performed in a professional and workmanlike manner</li>
                      <li>Services will conform to generally accepted industry standards and practices</li>
                      <li>Consultants possess appropriate qualifications and experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Deliverable Quality:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Deliverables will conform to requirements specified in SOW</li>
                      <li>Deliverables will be based on accurate analysis of information provided</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Authority and Rights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>ERMITS has authority to enter into engagement agreement</li>
                      <li>Services will not infringe third-party intellectual property rights</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.2 Client Warranties</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Client warrants that:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Has authority to engage ERMITS and provide access to Client Data</li>
                  <li>Client Data does not infringe third-party rights</li>
                  <li>Information provided to ERMITS is accurate and complete</li>
                  <li>Has rights to use and disclose Client Data to ERMITS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.3 Warranty Remedy</h3>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Exclusive Remedy:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>If Deliverables fail to conform to SOW requirements, ERMITS will re-perform services or correct Deliverables at no additional charge</li>
                    <li>Warranty applies for 90 days after Deliverable delivery</li>
                    <li>Client must notify ERMITS in writing of deficiencies within warranty period</li>
                    <li>Warranty does not apply to issues caused by Client modifications or misuse</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.4 DISCLAIMER OF WARRANTIES</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3 font-semibold">
                  EXCEPT AS EXPRESSLY PROVIDED ABOVE, ADVISORY SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING:
                </p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="font-semibold mb-2 dark:text-white">NO WARRANTY OF:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li><strong>Compliance or Certification:</strong> Advisory Services do not guarantee regulatory compliance, certification, or audit passage</li>
                    <li><strong>Results:</strong> No guarantee that implementation of recommendations will achieve specific outcomes</li>
                    <li><strong>Accuracy of Third-Party Information:</strong> ERMITS relies on Client-provided information and public sources</li>
                    <li><strong>Fitness for Particular Purpose:</strong> Client must exercise independent judgment in applying recommendations</li>
                    <li><strong>Uninterrupted Service:</strong> Consultant availability subject to reasonable scheduling and emergencies</li>
                    <li><strong>Completeness:</strong> Assessments are based on sampling and point-in-time analysis</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="font-semibold mb-2 dark:text-white">NOT LEGAL ADVICE:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Advisory Services do not constitute legal, accounting, or financial advice</li>
                    <li>Consult appropriate licensed professionals for legal, tax, and financial matters</li>
                    <li>ERMITS is not a law firm and consultants are not attorneys (unless explicitly stated)</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="font-semibold mb-2 dark:text-white">NOT CERTIFICATION OR AUDIT:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>ERMITS is not a certification body (not C3PAO, not auditor)</li>
                    <li>Advisory Services are consulting and guidance, not attestation</li>
                    <li>Third-party auditors and certification bodies make final compliance determinations</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 12: Limitation of Liability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">12. LIMITATION OF LIABILITY</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.1 Exclusion of Consequential Damages</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3 font-semibold">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ERMITS LLC, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONSULTANTS, AGENTS, OR SUBCONTRACTORS BE LIABLE FOR:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, business opportunities, or anticipated savings</li>
                  <li>Loss of data, use, goodwill, or other intangible losses</li>
                  <li>Loss of data or business interruption</li>
                  <li>Regulatory fines, penalties, or enforcement actions</li>
                  <li>Failed audits or certification attempts</li>
                  <li>Reputational harm or loss of goodwill</li>
                  <li>Cost of procurement of substitute services</li>
                  <li>Third-party claims arising from Client's use of Deliverables</li>
                  <li>Reliance on recommendations or advisory guidance</li>
                  <li>Unauthorized access to or alteration of Client Data</li>
                  <li>Results of security assessments or compliance evaluations</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-200 mt-3 text-sm">
                  This limitation applies regardless of legal theory (contract, tort, negligence, strict liability, professional liability, or otherwise) and whether or not ERMITS was advised of the possibility of such damages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.2 Cap on Liability</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3 font-semibold">
                  ERMITS' TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO ANY ENGAGEMENT SHALL NOT EXCEED THE LESSER OF:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>$100,000 USD</strong>, or</li>
                  <li><strong>Total fees paid by Client to ERMITS for the specific engagement giving rise to the claim</strong></li>
                </ul>
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Alternative Cap (if applicable):</h4>
                  <p className="text-gray-600 dark:text-gray-200 mb-2">For certain engagements, ERMITS' total aggregate liability may be limited to the greater of:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li><strong>$100 USD</strong>, or</li>
                    <li><strong>The total amount paid by Client to ERMITS in the 12 months preceding the claim</strong></li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.3 Liability Allocation</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  The limitations in this section reflect the allocation of risk between the parties and the fees charged by ERMITS. The limitations will apply even if any remedy fails of its essential purpose.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.4 Basis of the Bargain</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Client acknowledges and agrees that:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>ERMITS has set fees in reliance on these limitations of liability</li>
                  <li>These limitations reflect the allocation of risk between the parties</li>
                  <li>These limitations are an essential basis of the bargain</li>
                  <li>Advisory Services involve professional judgment and interpretation, not guarantees</li>
                  <li>ERMITS has offered the Services, set pricing, and entered into these Terms in reliance upon the disclaimers and limitations of liability set forth herein</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.5 Exceptions</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">The limitations in this section do not apply to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>ERMITS' indemnification obligations under Section 13.2</li>
                  <li>Claims arising from gross negligence, willful misconduct, or fraud</li>
                  <li>Violations of confidentiality obligations</li>
                  <li>Infringement of intellectual property rights</li>
                  <li>Liabilities that cannot be limited under applicable law</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.6 Timely Notice of Claims</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Client must notify ERMITS in writing of any claims within 90 days of discovery or these limitations apply with full force. Claims not brought within one (1) year of the act or omission giving rise to the claim are barred.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 13: Indemnification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">13. INDEMNIFICATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.1 Client Indemnification</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  Client agrees to indemnify, defend, and hold harmless ERMITS, its affiliates, consultants, and subcontractors from claims, liabilities, damages, and expenses (including reasonable attorneys' fees) arising from:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Client's breach of these Terms or applicable SOW</li>
                  <li>Inaccuracy or incompleteness of Client-provided information</li>
                  <li>Client's implementation of recommendations</li>
                  <li>Third-party claims that Client Data infringes third-party rights</li>
                  <li>Client's violation of applicable laws or regulations</li>
                  <li>Negligence or willful misconduct by Client or its personnel</li>
                  <li>Client's use of Deliverables beyond scope of license granted</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.2 ERMITS Indemnification</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  ERMITS agrees to indemnify, defend, and hold Client harmless from third-party claims alleging that:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Advisory Services or Deliverables infringe valid U.S. patent, copyright, or trademark</li>
                  <li>ERMITS' negligence or willful misconduct caused bodily injury or property damage</li>
                </ul>
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Conditions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Client promptly notifies ERMITS in writing of claim</li>
                    <li>ERMITS has sole control of defense and settlement</li>
                    <li>Client reasonably cooperates in defense</li>
                    <li>Indemnification does not apply to claims arising from Client modifications or misuse</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.3 Exclusive Remedy</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Section 13.2 states ERMITS' sole obligation and Client's exclusive remedy for intellectual property infringement claims.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 14: Term and Termination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">14. TERM AND TERMINATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.1 Engagement Term</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Each engagement commences upon SOW execution and continues until:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Completion of all deliverables and acceptance</li>
                  <li>Termination by either party as provided below</li>
                  <li>Expiration of retainer period (for retainer engagements)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.2 Termination for Convenience</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">By Client:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>May terminate engagement for any reason with 15 days' written notice</li>
                      <li>Client pays for all services performed and expenses incurred through termination date</li>
                      <li>Client pays termination fee of 25% of remaining SOW fees (to compensate for resource commitments)</li>
                      <li>ERMITS delivers work-in-progress in current state</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">By ERMITS:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>May terminate engagement for any reason with 30 days' written notice</li>
                      <li>Client pays only for services performed and expenses incurred through termination date</li>
                      <li>ERMITS delivers work-in-progress in current state</li>
                      <li>Pro-rata refund of pre-paid fees (if applicable)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.3 Termination for Cause</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Either party may terminate immediately upon written notice if:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Material Breach:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Other party materially breaches Terms or SOW</li>
                      <li>Breach is not cured within 15 days of written notice</li>
                      <li>Examples: Non-payment, breach of confidentiality, refusal to cooperate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Impossibility:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Engagement becomes impossible or illegal to perform</li>
                      <li>Client unable or unwilling to provide necessary access or information</li>
                      <li>Force majeure event prevents performance for more than 30 days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Insolvency:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Other party files bankruptcy, becomes insolvent, or makes assignment for benefit of creditors</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Effect of Termination for Cause:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Immediate cessation of services</li>
                      <li>Client pays for services performed through termination date (if ERMITS not in breach)</li>
                      <li>No termination fee if terminating party not in breach</li>
                      <li>Non-breaching party may pursue legal remedies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.4 Effect of Termination</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Upon termination:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>ERMITS ceases work immediately (unless wind-down period agreed)</li>
                  <li>Client pays all outstanding invoices within 15 days</li>
                  <li>ERMITS delivers completed work and work-in-progress in current state</li>
                  <li>Client owns completed Deliverables upon full payment</li>
                  <li>Confidentiality obligations survive termination</li>
                  <li>Provisions that by their nature should survive remain in effect (warranties, liability limitations, indemnification, confidentiality, dispute resolution)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.5 Transition Assistance</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Upon termination, ERMITS will provide reasonable transition assistance:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Knowledge transfer to Client or successor consultant</li>
                  <li>Up to 10 hours at standard hourly rate (unless otherwise agreed)</li>
                  <li>Return or secure destruction of Client Data</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 15: Force Majeure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.76 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">15. FORCE MAJEURE</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-3">
              Neither party shall be liable for failure or delay in performance due to causes beyond reasonable control, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 mb-3">
              <li>Natural disasters (earthquakes, floods, hurricanes, pandemics)</li>
              <li>War, terrorism, civil unrest, or government actions</li>
              <li>Labor disputes, strikes, or lockouts</li>
              <li>Cyberattacks, data breaches, or infrastructure failures</li>
              <li>Power outages, telecommunications failures, or internet disruptions</li>
              <li>Supplier or subcontractor failures</li>
            </ul>
            <div>
              <h4 className="font-semibold mb-2 dark:text-white">Obligations During Force Majeure:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                <li>Affected party promptly notifies other party</li>
                <li>Affected party uses commercially reasonable efforts to mitigate impact</li>
                <li>Performance deadlines extended by duration of force majeure event</li>
                <li>If force majeure continues for more than 30 days, either party may terminate without penalty</li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Section 16: Insurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.77 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">16. INSURANCE</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">16.1 ERMITS Insurance</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS maintains the following insurance coverage:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Professional Liability (Errors & Omissions):</strong> $2,000,000 per claim / $2,000,000 aggregate</li>
                  <li><strong>General Liability:</strong> $1,000,000 per occurrence / $2,000,000 aggregate</li>
                  <li><strong>Cyber Liability:</strong> $1,000,000 per claim / $2,000,000 aggregate</li>
                  <li><strong>Workers' Compensation:</strong> As required by law</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">16.2 Evidence of Insurance</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Upon request, ERMITS will provide Client with certificates of insurance evidencing coverage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">16.3 Additional Insured</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  For large engagements, Client may request to be named as additional insured (additional fees may apply).
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 17: Dispute Resolution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">17. DISPUTE RESOLUTION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">17.1 Informal Resolution</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Before initiating formal dispute resolution, parties agree to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Negotiate in good faith to resolve disputes</li>
                  <li>Escalate to senior management (at least Director level)</li>
                  <li>Attempt to resolve within 30 days of dispute arising</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">17.2 Mediation</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">If informal resolution fails, parties agree to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Mediate dispute with neutral third-party mediator</li>
                  <li>Mediation conducted in Washington, D.C. (or mutually agreed location)</li>
                  <li>Parties split mediation costs equally</li>
                  <li>Mediation must be attempted before arbitration or litigation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">17.3 Binding Arbitration (Optional)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">If SOW specifies binding arbitration:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Arbitration Terms:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Administered by American Arbitration Association (AAA)</li>
                      <li>Commercial Arbitration Rules apply</li>
                      <li>Single arbitrator (unless dispute value exceeds $500,000)</li>
                      <li>Arbitration conducted in Washington, D.C.</li>
                      <li>District of Columbia law applies</li>
                      <li>Arbitrator's decision is final and binding</li>
                      <li>Judgment may be entered in any court with jurisdiction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Exceptions to Arbitration:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Injunctive relief for intellectual property infringement</li>
                      <li>Small claims court actions (within jurisdictional limits)</li>
                      <li>Enforcement of confidentiality obligations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Class Action Waiver:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Disputes must be brought individually, not as class action or representative proceeding</li>
                      <li>No consolidation of multiple client disputes without consent</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">17.4 Litigation</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">If arbitration not specified in SOW, disputes shall be resolved by litigation:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Governing Law:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Governed by laws of District of Columbia, United States</li>
                      <li>Federal Arbitration Act applies to arbitration agreements</li>
                      <li>UN Convention on Contracts for International Sale of Goods does not apply</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Jurisdiction and Venue:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Exclusive jurisdiction in federal or state courts located in Washington, D.C.</li>
                      <li>Both parties consent to personal jurisdiction and venue</li>
                      <li>Waive any objection to venue or forum non conveniens</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">17.5 Attorneys' Fees</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Prevailing party in any arbitration or litigation entitled to recover reasonable attorneys' fees and costs from non-prevailing party.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 18: General Provisions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.79 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">18. GENERAL PROVISIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.1 Entire Agreement</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  These Terms, together with any executed SOW and NDA, constitute the entire agreement between parties regarding Advisory Services and supersede all prior agreements and understandings.
                </p>
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Order of Precedence:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Statement of Work (SOW)</li>
                    <li>These Master Terms of Service</li>
                    <li>Non-Disclosure Agreement (NDA)</li>
                  </ol>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.2 Amendments</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Amendments must be in writing and signed by authorized representatives of both parties. Email acceptance by authorized signatory is binding.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.3 Severability</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  If any provision is found invalid or unenforceable, remaining provisions continue in full force. Invalid provision shall be modified to minimum extent necessary to make it enforceable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.4 Waiver</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Failure to enforce any right or provision does not constitute waiver. Waivers must be in writing and signed by party granting waiver.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.5 Assignment</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Client Assignment:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Client may not assign engagement without ERMITS' prior written consent</li>
                      <li>Consent not unreasonably withheld</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">ERMITS Assignment:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>ERMITS may assign to affiliates or successors without consent</li>
                      <li>ERMITS remains responsible for performance</li>
                      <li>Client notified of assignment</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.6 No Third-Party Beneficiaries</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  These Terms are for benefit of parties only and do not create rights in any third party. Deliverables are for Client's internal use only unless SOW specifies third-party reliance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.7 Independent Contractors</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Parties are independent contractors. No partnership, joint venture, agency, or employment relationship is created.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.8 Notices</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">All notices must be in writing and delivered to:</p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">For ERMITS:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Email: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a></li>
                      <li>Mail: ERMITS LLC, [Physical Address to be inserted], Attn: Legal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 dark:text-white">For Client:</h4>
                    <p className="text-gray-600 dark:text-gray-200 ml-4">Email and mail address specified in SOW</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-200 mt-2">
                  Notices deemed delivered when sent by email (with confirmation) or when received by mail.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.9 Publicity</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  Neither party may issue press releases or public statements regarding engagement without prior written consent. Exceptions:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Disclosure required by law or regulation (with notice to other party)</li>
                  <li>General listing of Client name in client list (with Client consent)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.10 Export Controls</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Client shall not export or re-export Deliverables in violation of U.S. export control laws. Client is responsible for compliance with all export regulations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.11 U.S. Government Clients</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For U.S. Government clients, the following additional terms apply:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Advisory Services are "commercial services" under FAR 12</li>
                  <li>Delivered under FAR Part 12 commercial terms</li>
                  <li>Government-specific clauses incorporated by reference as required by FAR</li>
                  <li>Any inconsistency between these Terms and mandatory FAR clauses resolved in favor of FAR</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.12 Survival</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">The following provisions survive termination:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Payment obligations</li>
                  <li>Confidentiality (for period specified in NDA)</li>
                  <li>Intellectual property rights</li>
                  <li>Warranties (for warranty period)</li>
                  <li>Limitation of liability</li>
                  <li>Indemnification</li>
                  <li>Dispute resolution</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">18.13 Counterparts and Electronic Signatures</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Agreements may be executed in counterparts, each constituting an original. Electronic signatures (DocuSign, Adobe Sign, etc.) are binding and enforceable.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 19: Specific Service Provisions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">19. SPECIFIC SERVICE PROVISIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">19.1 Virtual CISO (vCISO) Retainer Services</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For ongoing vCISO advisory services:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Services Include:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Strategic cybersecurity leadership and guidance</li>
                      <li>Board and executive reporting</li>
                      <li>Cybersecurity program oversight</li>
                      <li>Incident response leadership (during incidents)</li>
                      <li>Vendor and budget recommendations</li>
                      <li>Policy and standards governance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Service Levels:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Defined monthly hours or availability (per SOW)</li>
                      <li>Priority response time for urgent matters (typically 4 hours)</li>
                      <li>Regular check-in meetings (weekly, bi-weekly, or monthly)</li>
                      <li>After-hours emergency availability (for critical incidents)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Exclusions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Hands-on technical implementation (unless separately contracted)</li>
                      <li>24/7 SOC or monitoring services</li>
                      <li>Direct management of Client's security personnel</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">19.2 Incident Response Advisory</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For incident response consulting:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Retainer Model:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Pre-paid retainer for guaranteed availability</li>
                      <li>Rapid response within agreed timeframe (typically 2-4 hours)</li>
                      <li>Discounted hourly rates during active incidents</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Time-and-Materials Model:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Billed hourly during active incident response</li>
                      <li>Premium rates for after-hours and emergency response</li>
                      <li>No guaranteed availability without retainer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Services Include:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Incident response leadership and coordination</li>
                      <li>Forensic analysis support and guidance</li>
                      <li>Containment and eradication planning</li>
                      <li>Recovery and remediation recommendations</li>
                      <li>Post-incident review and lessons learned</li>
                      <li>Regulatory notification advisory (HIPAA, state breach laws, etc.)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Limitations:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>ERMITS does not preserve evidence for litigation (recommend forensic specialists)</li>
                      <li>ERMITS does not provide legal advice (engage legal counsel)</li>
                      <li>Client responsible for notification decisions (with ERMITS guidance)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">19.3 Compliance Assessment Services</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For CMMC, NIST 800-171, HIPAA, and other compliance assessments:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Services Include:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Gap assessment against regulatory requirements</li>
                      <li>Documentation review and analysis</li>
                      <li>Stakeholder interviews</li>
                      <li>Control testing (sampling-based)</li>
                      <li>Assessment report with findings and recommendations</li>
                      <li>Remediation roadmap</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Not Included:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Certification or attestation (ERMITS is not a certification body)</li>
                      <li>Guarantee of certification or audit passage</li>
                      <li>Implementation of remediation (unless separately contracted)</li>
                      <li>Legal interpretation of regulatory requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Client Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Provide access to systems, documentation, and personnel</li>
                      <li>Complete self-assessment questionnaires (if applicable)</li>
                      <li>Provide evidence of control implementation</li>
                      <li>Designate knowledgeable points of contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 20: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">20. CONTACT INFORMATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">ERMITS LLC - Advisory Services</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  Website: <a href="https://advisory.ermits.com" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://advisory.ermits.com</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">For technical support inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:support@ermits.com" className="text-navy dark:text-silver hover:underline">support@ermits.com</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">For privacy inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">For compliance and legal inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">For billing and payment inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:billing@ermits.com" className="text-navy dark:text-silver hover:underline">billing@ermits.com</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">For security and confidentiality concerns:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:security@ermits.com" className="text-navy dark:text-silver hover:underline">security@ermits.com</a>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 21: Effective Date and Acceptance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.81 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">21. EFFECTIVE DATE AND ACCEPTANCE</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-2">
              <strong>Effective Date:</strong> December 15, 2025
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              <strong>Last Updated:</strong> December 15, 2025
            </p>
            <p className="text-gray-600 dark:text-gray-200">
              <strong>By executing a Statement of Work for Advisory Services, Client acknowledges that it has read, understood, and agrees to be bound by these Master Terms of Service.</strong>
            </p>
          </Card>
        </motion.div>

        {/* Schedule A: Standard Statement of Work (SOW) Template */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">SCHEDULE A: STANDARD STATEMENT OF WORK (SOW) TEMPLATE</h2>
            <p className="text-gray-600 dark:text-gray-200">
              [SOW template would be attached, including sections for: Engagement Overview, Scope of Services, Deliverables, Timeline and Milestones, Fees and Payment Terms, Client Responsibilities, ERMITS Responsibilities, Acceptance Criteria, Change Management, and Signature Blocks]
            </p>
          </Card>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.83 }}
          className="mb-8 text-center"
        >
          <p className="text-lg font-semibold text-navy dark:text-silver">
            ERMITS Advisory Services - Expert. Independent. Trusted.
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/advisory/privacy">
              <Button variant="outline" size="sm">
                Advisory Privacy Policy
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
        </motion.div>
      </div>
    </div>
  );
};

