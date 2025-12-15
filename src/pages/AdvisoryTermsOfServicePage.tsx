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
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.3 Invoicing and Payment</h3>
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

