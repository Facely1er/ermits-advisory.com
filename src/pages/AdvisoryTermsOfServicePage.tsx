import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <strong>Effective Date:</strong> November 19, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> November 19, 2025
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
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.2 Cap on Liability</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3 font-semibold">
                  ERMITS' TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO ANY ENGAGEMENT SHALL NOT EXCEED THE LESSER OF:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>$100,000 USD</strong>, or</li>
                  <li><strong>Total fees paid by Client to ERMITS for the specific engagement giving rise to the claim</strong></li>
                </ul>
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
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.2 Termination for Convenience</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">By Client:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>May terminate engagement for any reason with 15 days' written notice</li>
                      <li>Client pays for all services performed and expenses incurred through termination date</li>
                      <li>Client pays termination fee of 25% of remaining SOW fees</li>
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
                <h3 className="font-semibold mb-2 dark:text-white">For compliance and legal inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a>
                </p>
              </div>
            </div>
          </Card>
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

