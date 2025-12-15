import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvisoryAcceptableUsePolicyPage: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">ERMITS ADVISORY SERVICES - ACCEPTABLE USE POLICY</h1>
          <p className="text-gray-700 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> December 15, 2025
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> December 15, 2025
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-100">
            This Acceptable Use Policy ("AUP") governs the conduct of clients, client personnel, and ERMITS consultants during advisory service engagements. This AUP supplements the Master Terms of Service for Advisory Services. By engaging ERMITS Advisory Services, you agree to comply with this AUP.
          </p>
        </motion.div>

        {/* Section 1: Purpose and Scope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">1. PURPOSE AND SCOPE</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">1.1 Applicability</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">This AUP applies to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>All ERMITS Advisory Services engagements</li>
                  <li>Client personnel participating in engagements</li>
                  <li>ERMITS consultants, subcontractors, and specialists</li>
                  <li>All parties with access to Confidential Information under engagement agreements</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">1.2 Purpose</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">This AUP establishes:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>Professional conduct standards for engagements</li>
                  <li>Prohibited activities and uses</li>
                  <li>Security and confidentiality requirements</li>
                  <li>Compliance with legal and regulatory requirements</li>
                  <li>Consequences of violations</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 2: Professional Conduct Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2. PROFESSIONAL CONDUCT STANDARDS</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.1 Professional Standards</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">All parties shall:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Maintain Professional Conduct:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Act with honesty, integrity, and professionalism</li>
                      <li>Respect confidentiality and trust relationships</li>
                      <li>Communicate respectfully and professionally</li>
                      <li>Meet commitments and deadlines</li>
                      <li>Escalate issues promptly and appropriately</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Exercise Professional Judgment:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Provide objective, unbiased advice and recommendations</li>
                      <li>Base recommendations on factual analysis and industry standards</li>
                      <li>Disclose conflicts of interest promptly</li>
                      <li>Acknowledge limitations of expertise</li>
                      <li>Recommend specialists when appropriate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Adhere to Industry Standards:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Follow applicable professional codes of conduct</li>
                      <li>Comply with industry best practices and standards</li>
                      <li>Maintain professional certifications and continuing education</li>
                      <li>Apply quality assurance processes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.2 Client Conduct</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">Clients and client personnel shall:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Provide Accurate Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Provide truthful, accurate, and complete information</li>
                      <li>Not misrepresent facts, circumstances, or security posture</li>
                      <li>Correct inaccuracies promptly when discovered</li>
                      <li>Disclose material changes affecting engagement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Respect Professional Boundaries:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Not request illegal, unethical, or unprofessional services</li>
                      <li>Not pressure consultants to violate professional standards</li>
                      <li>Not request access to confidential information about other clients</li>
                      <li>Not attempt to recruit or hire ERMITS consultants during engagement (non-solicitation)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Cooperate in Good Faith:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Provide timely access to personnel, systems, and documentation</li>
                      <li>Respond to requests for information promptly</li>
                      <li>Participate in scheduled meetings and reviews</li>
                      <li>Implement reasonable security measures for consultant access</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.3 ERMITS Consultant Conduct</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">ERMITS consultants shall:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Maintain Professional Independence:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Provide objective recommendations without bias</li>
                      <li>Disclose conflicts of interest</li>
                      <li>Not accept gifts, kickbacks, or referral fees from vendors</li>
                      <li>Not recommend specific vendors without transparent disclosure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Respect Client Confidentiality:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Maintain strict confidentiality of Client Data and Confidential Information</li>
                      <li>Use Confidential Information only for engagement purposes</li>
                      <li>Not disclose engagement details to other clients or third parties</li>
                      <li>Implement appropriate security measures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Deliver Quality Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li>Perform services with appropriate expertise and care</li>
                      <li>Meet professional standards and quality expectations</li>
                      <li>Communicate proactively about issues, risks, and delays</li>
                      <li>Stand behind recommendations with professional reasoning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 3: Prohibited Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">3. PROHIBITED ACTIVITIES</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.1 Illegal and Unethical Activities</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-3">Prohibited Activities:</p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                    <li>Violating applicable laws, regulations, or ordinances</li>
                    <li>Engaging in fraud, misrepresentation, or deception</li>
                    <li>Violating intellectual property rights or confidentiality obligations</li>
                    <li>Facilitating illegal activities or regulatory violations</li>
                    <li>Money laundering or financial crimes</li>
                    <li>Bribery, kickbacks, or corrupt practices</li>
                    <li>Export control or economic sanctions violations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.2 Confidentiality and Data Protection Violations</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Clients Shall Not:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Share ERMITS proprietary methodologies, tools, or frameworks with third parties without consent</li>
                      <li>Use ERMITS work product beyond scope of license granted</li>
                      <li>Disclose engagement details in manner that reveals ERMITS confidential information</li>
                      <li>Publicly criticize ERMITS or consultants in defamatory manner</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">ERMITS Consultants Shall Not:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Disclose Client Data or Confidential Information to unauthorized parties</li>
                      <li>Use Client Confidential Information for personal gain or other clients</li>
                      <li>Discuss client engagement details with other clients or publicly</li>
                      <li>Access Client Data beyond scope authorized in SOW</li>
                      <li>Retain Client Data after engagement termination (except as permitted)</li>
                      <li>Disclose client identity or engagement details without consent</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.3 Security Violations</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-3">Prohibited Security Activities:</p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                    <li>Accessing client systems without explicit authorization</li>
                    <li>Exceeding scope of authorized system access</li>
                    <li>Attempting to gain unauthorized access or escalate privileges</li>
                    <li>Introducing malware, viruses, worms, Trojan horses, or other harmful code to client systems</li>
                    <li>Circumventing security controls or authentication mechanisms</li>
                    <li>Copying, downloading, or exfiltrating client data without authorization</li>
                    <li>Conducting penetration testing or vulnerability scanning without written authorization</li>
                    <li>Modifying client systems, configurations, or data without authorization</li>
                    <li>Sharing system credentials with unauthorized personnel</li>
                    <li>Using client systems for personal purposes or unauthorized activities</li>
                    <li>Interfering with or disrupting client systems, servers, or networks</li>
                    <li>Participating in denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks</li>
                    <li>Engaging in password cracking, network sniffing, or packet manipulation</li>
                    <li>Using automated tools to bypass rate limits or access restrictions</li>
                    <li>Exploiting security vulnerabilities for any purpose</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.4 Data Handling Violations</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-3">Prohibited Data Activities:</p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                    <li>Processing personal data in violation of privacy laws (GDPR, CCPA, HIPAA)</li>
                    <li>Collecting or retaining data beyond engagement scope</li>
                    <li>Using client data for training, benchmarking, or research without explicit consent</li>
                    <li>Sharing client data with subcontractors without authorization</li>
                    <li>Storing client data on personal devices or unauthorized systems</li>
                    <li>Transmitting sensitive data over unsecured channels</li>
                    <li>Failing to encrypt sensitive data as required</li>
                    <li>Disposing of client data insecurely (leaving documents, unwiped devices)</li>
                    <li>Photographing or recording client facilities, systems, or documents without permission</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.5 Conflicts of Interest</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-3">Prohibited Conflict Activities:</p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg mb-3">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                    <li>Providing services to competing clients without disclosure and consent</li>
                    <li>Recommending vendors from whom consultant receives compensation</li>
                    <li>Using client confidential information to benefit other clients</li>
                    <li>Engaging in business relationships with client vendors without disclosure</li>
                    <li>Investing in or acquiring financial interest in client or client's competitors</li>
                    <li>Accepting gifts, entertainment, or benefits from client or vendors exceeding nominal value</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-navy dark:text-white">Required Disclosures:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                    <li>Consultants must disclose potential conflicts promptly</li>
                    <li>Clients must disclose relationships affecting engagement objectivity</li>
                    <li>Parties must obtain consent before proceeding with potential conflict</li>
                    <li>ERMITS may decline engagement or consultant may be recused if conflict cannot be managed</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.6 Misrepresentation and Misuse</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited Misrepresentation:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Misrepresenting qualifications, certifications, or experience</li>
                        <li>Claiming ERMITS is a certification body or auditor (we are not)</li>
                        <li>Guaranteeing compliance, certification, or audit passage</li>
                        <li>Overstating scope or outcomes of engagement deliverables</li>
                        <li>Falsifying time records, expenses, or invoices</li>
                        <li>Claiming work product of others as one's own</li>
                        <li>Misrepresenting professional opinions or findings</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited Misuse of Deliverables:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Using deliverables for purposes beyond internal business use (without consent)</li>
                        <li>Commercializing or reselling ERMITS deliverables</li>
                        <li>Modifying deliverables and attributing to ERMITS</li>
                        <li>Using deliverables to misrepresent compliance status</li>
                        <li>Sharing deliverables with unauthorized third parties</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">3.7 Harassment and Discrimination</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-3">Prohibited Conduct:</p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg mb-3">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                    <li>Harassment, discrimination, or hostile behavior based on protected characteristics</li>
                    <li>Sexual harassment or unwelcome sexual advances</li>
                    <li>Bullying, intimidation, or threatening behavior</li>
                    <li>Abusive, offensive, or disrespectful language</li>
                    <li>Retaliation against individuals reporting violations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-navy dark:text-white">Professional Environment:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                    <li>All parties entitled to respectful, professional treatment</li>
                    <li>Violations reported to management and may result in termination</li>
                    <li>ERMITS maintains zero-tolerance policy for harassment</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 4: Handling Controlled and Sensitive Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">4. HANDLING CONTROLLED AND SENSITIVE INFORMATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">4.1 Controlled Unclassified Information (CUI) and Federal Contract Information (FCI)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Clients Processing CUI/FCI Shall:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Properly mark CUI/FCI per NIST SP 800-171 and 32 CFR Part 2002</li>
                      <li>Provide ERMITS consultants with CUI/FCI handling training</li>
                      <li>Implement appropriate safeguards and access controls</li>
                      <li>Monitor and log consultant access to CUI/FCI</li>
                      <li>Ensure consultants sign Non-Disclosure Agreements</li>
                      <li>Report cyber incidents per DFARS 252.204-7012 requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">ERMITS Consultants Handling CUI/FCI Shall:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Complete CUI/FCI handling training</li>
                      <li>Access CUI/FCI only on client-approved systems</li>
                      <li>Not transmit CUI/FCI outside authorized systems</li>
                      <li>Not store CUI/FCI on personal devices or ERMITS infrastructure</li>
                      <li>Report suspected security incidents immediately</li>
                      <li>Comply with all client CUI/FCI handling procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited CUI/FCI Activities:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Accessing CUI/FCI without authorization</li>
                        <li>Transmitting CUI/FCI over unsecured channels</li>
                        <li>Storing CUI/FCI on unauthorized systems or personal devices</li>
                        <li>Sharing CUI/FCI with unauthorized personnel</li>
                        <li>Removing CUI/FCI from client facilities without authorization</li>
                        <li>Failing to report cyber incidents affecting CUI/FCI</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">4.2 Protected Health Information (PHI) - HIPAA</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Clients Subject to HIPAA Shall:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Execute Business Associate Agreement (BAA) before PHI disclosure</li>
                      <li>Provide minimum necessary PHI for engagement purposes</li>
                      <li>Train ERMITS consultants on HIPAA requirements</li>
                      <li>Monitor consultant access to PHI</li>
                      <li>Report breaches involving PHI per HIPAA Breach Notification Rule</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">ERMITS Consultants Handling PHI Shall:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Access PHI only as necessary for engagement deliverables</li>
                      <li>Apply minimum necessary standard</li>
                      <li>Not access PHI for personal purposes</li>
                      <li>Not disclose PHI to unauthorized parties</li>
                      <li>Use de-identified data when possible</li>
                      <li>Report suspected breaches within 24 hours to client</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited PHI Activities:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Accessing PHI beyond engagement scope</li>
                        <li>Using PHI for purposes other than engagement deliverables</li>
                        <li>Disclosing PHI to unauthorized parties</li>
                        <li>Storing PHI on unsecured or personal devices</li>
                        <li>Emailing PHI without encryption</li>
                        <li>Discussing PHI in public or unsecured locations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">4.3 Classified Information</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">ERMITS Policy:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>ERMITS Advisory Services do not involve classified information</li>
                      <li>Consultants do not have security clearances (unless specifically disclosed)</li>
                      <li>Clients may not disclose classified information to ERMITS consultants</li>
                      <li>Engagements involving classified information require special arrangements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">If Classified Information Inadvertently Disclosed:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Consultant shall immediately cease accessing and notify ERMITS management</li>
                      <li>ERMITS will notify client security officer</li>
                      <li>Appropriate safeguarding and reporting procedures followed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 5: Acceptable Technology Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">5. ACCEPTABLE TECHNOLOGY USE</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">5.1 Client System Access</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">When authorized to access client systems:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Permitted Activities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Access systems and data within scope defined in SOW</li>
                      <li>Review configurations, logs, and documentation as authorized</li>
                      <li>Conduct assessments using approved tools and methodologies</li>
                      <li>Document findings for inclusion in deliverables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited Activities:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Accessing systems or data beyond authorized scope</li>
                        <li>Making changes to systems or configurations without approval</li>
                        <li>Installing software or tools without authorization</li>
                        <li>Conducting vulnerability scans or penetration tests without written authorization</li>
                        <li>Copying data to personal devices or unauthorized locations</li>
                        <li>Using client systems for personal purposes</li>
                        <li>Attempting to bypass security controls</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">5.2 ERMITS Technology and Tools</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Acceptable Use:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Use ERMITS-provided devices and accounts for client work</li>
                      <li>Use approved collaboration and file sharing platforms</li>
                      <li>Implement security controls (encryption, MFA, strong passwords)</li>
                      <li>Report security incidents or suspicious activity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited Use:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Storing client data on personal devices or cloud accounts</li>
                        <li>Using personal email for client communications</li>
                        <li>Sharing ERMITS account credentials</li>
                        <li>Circumventing security controls (disabling antivirus, VPN)</li>
                        <li>Using client data for personal projects or other clients</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">5.3 Secure Communication</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Required Practices:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Use encrypted email for sensitive communications (TLS minimum, S/MIME preferred)</li>
                      <li>Use secure file transfer platforms for document exchange</li>
                      <li>Use client-approved collaboration tools</li>
                      <li>Conduct video calls in private locations</li>
                      <li>Avoid discussing confidential information in public</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited Practices:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Discussing confidential information in public places</li>
                        <li>Using public Wi-Fi without VPN for client work</li>
                        <li>Sending sensitive data via unencrypted email</li>
                        <li>Using personal messaging apps for confidential discussions</li>
                        <li>Leaving confidential documents visible or unattended</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 6: Intellectual Property and Licensing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.47 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">6. INTELLECTUAL PROPERTY AND LICENSING</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">6.1 Respecting Intellectual Property Rights</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">All parties shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>Respect intellectual property rights of others</li>
                  <li>Use software, tools, and materials only under valid licenses</li>
                  <li>Not use pirated, unlicensed, or unauthorized software</li>
                  <li>Attribute sources appropriately in deliverables</li>
                  <li>Obtain necessary permissions for use of third-party content</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">6.2 ERMITS Intellectual Property</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Clients Shall Not:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Use ERMITS methodologies, frameworks, or tools beyond engagement scope</li>
                      <li>Reverse engineer ERMITS proprietary tools</li>
                      <li>Share ERMITS intellectual property with competitors</li>
                      <li>Commercialize or resell ERMITS deliverables or methodologies</li>
                      <li>Remove ERMITS attribution from deliverables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Permitted Use:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Use deliverables for internal business purposes</li>
                      <li>Share deliverables with regulators, auditors, and advisors as necessary</li>
                      <li>Implement recommendations and methodologies within your organization</li>
                      <li>Reference ERMITS publicly with consent (testimonials, case studies)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">6.3 Client Intellectual Property</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">ERMITS Consultants Shall Not:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>Use client intellectual property beyond engagement scope</li>
                  <li>Disclose client trade secrets or proprietary information</li>
                  <li>Incorporate client intellectual property into deliverables for other clients</li>
                  <li>Claim ownership of client intellectual property</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 7: Reporting Violations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">7. REPORTING VIOLATIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">7.1 How to Report</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Client Reporting:</h4>
                    <p className="text-gray-700 dark:text-gray-200 mb-2">If you become aware of violations by ERMITS consultants:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Contact engagement project manager immediately</li>
                      <li>Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a> (Subject: "AUP Violation Report")</li>
                      <li>For serious violations: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a></li>
                      <li>Include: Detailed description, evidence, date/time, personnel involved</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">ERMITS Consultant Reporting:</h4>
                    <p className="text-gray-700 dark:text-gray-200 mb-2">If you become aware of violations by clients or client personnel:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Report to ERMITS management immediately</li>
                      <li>Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a> (Subject: "Client AUP Violation")</li>
                      <li>For security incidents: <a href="mailto:security@ermits.com" className="text-navy dark:text-silver hover:underline">security@ermits.com</a></li>
                      <li>For legal/ethical concerns: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">7.2 Good Faith Reporting</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Protections:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>No retaliation against good faith reporters</li>
                      <li>Confidential handling of reports</li>
                      <li>Prompt investigation of allegations</li>
                      <li>Protection of reporter identity (to extent possible)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Reporting Obligations:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Consultants must report violations of professional standards</li>
                      <li>Clients should report consultant misconduct or unprofessional behavior</li>
                      <li>All parties must report security incidents affecting confidential information</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">7.3 False Reports</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Making knowingly false or malicious reports is prohibited and may result in:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4 mt-2">
                  <li>Termination of engagement</li>
                  <li>Legal action for damages</li>
                  <li>Reporting to professional organizations (if applicable)</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 8: Enforcement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">8. ENFORCEMENT AND CONSEQUENCES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">8.1 Investigation</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">Upon receiving report of violation:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">ERMITS Investigation (for consultant violations):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Prompt investigation by management</li>
                      <li>Review account activity and usage patterns</li>
                      <li>Examine audit logs and system logs (pseudonymized)</li>
                      <li>Interview involved parties and witnesses</li>
                      <li>Request information from the user</li>
                      <li>Review evidence and documentation</li>
                      <li>Determine facts and violation severity</li>
                      <li>Notify client of findings (as appropriate)</li>
                      <li>Cooperate with law enforcement or regulatory authorities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Client Investigation (for client personnel violations):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Client responsible for investigating own personnel</li>
                      <li>ERMITS may suspend services pending investigation</li>
                      <li>ERMITS cooperates with reasonable investigation requests</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    <strong>Privacy Note:</strong> Due to Privacy-First Architecture, ERMITS cannot access encrypted User Data. Investigations rely on metadata, logs, and user cooperation.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">8.2 Enforcement Actions - ERMITS Consultants</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-3">For violations by ERMITS consultants:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Warning and Remediation:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Written warning and corrective action plan</li>
                      <li>Additional training or supervision</li>
                      <li>Removal from specific engagement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Suspension:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Temporary suspension from client engagements</li>
                      <li>Remediation and retraining required</li>
                      <li>Reinstatement upon completion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Termination:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Immediate termination of employment</li>
                      <li>Removal from all client engagements</li>
                      <li>Notification to client (as appropriate)</li>
                      <li>Report to professional organizations (if applicable)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Legal Action:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Pursuit of damages for breach of confidentiality</li>
                      <li>Injunctive relief to prevent ongoing violations</li>
                      <li>Criminal referral (if illegal activity)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">8.3 Enforcement Actions - Clients</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-3">For violations by clients or client personnel:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Warning:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Email notification of violation</li>
                      <li>Request for corrective action</li>
                      <li>Monitoring of future compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Temporary Suspension:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Immediate suspension of account access</li>
                      <li>Opportunity to respond and remediate</li>
                      <li>Reinstatement upon resolution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Termination of Engagement:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Immediate and permanent account closure</li>
                      <li>Immediate termination for material breach</li>
                      <li>Client remains obligated to pay for services performed</li>
                      <li>No refund of fees paid</li>
                      <li>ERMITS may decline future engagements</li>
                      <li>Ban from future use of Services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Legal Action:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Enforcement of confidentiality and intellectual property rights</li>
                      <li>Pursuit of damages for breach of contract</li>
                      <li>Injunctive relief to prevent misuse of confidential information</li>
                      <li>Pursuit of damages for harm caused</li>
                      <li>Cooperation with law enforcement investigations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">8.4 Appeals</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">If you believe enforcement action was made in error:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>Contact: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a> (Subject: "AUP Enforcement Appeal")</li>
                  <li>Provide detailed explanation and evidence</li>
                  <li>ERMITS will review and respond within 10 business days</li>
                  <li>Decision is final and at ERMITS' discretion</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 9: Special Engagement Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">9. SPECIAL ENGAGEMENT TYPES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">9.1 Incident Response Engagements</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">During active incident response:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Permitted:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Rapid access to systems and data as needed for containment and investigation</li>
                      <li>After-hours and emergency access</li>
                      <li>Expedited communication and decision-making</li>
                      <li>Deviation from normal documentation procedures (documented post-incident)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Destroying evidence or altering forensic artifacts</li>
                        <li>Conducting investigation without client authorization</li>
                        <li>Disclosing incident details to third parties without client approval</li>
                        <li>Making unilateral containment decisions without client consent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">9.2 Red Team / Adversarial Testing</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">For authorized adversarial testing engagements:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Required:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Explicit written authorization before testing</li>
                      <li>Clear scope definition (systems, timeframes, methods)</li>
                      <li>Rules of engagement documented and approved</li>
                      <li>Client notification procedures for critical findings</li>
                      <li>Immediate cease upon client request</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Testing systems or networks outside authorized scope</li>
                        <li>Causing damage or disruption beyond approved rules of engagement</li>
                        <li>Social engineering client personnel without explicit authorization</li>
                        <li>Retaining access or backdoors after engagement completion</li>
                        <li>Disclosing vulnerabilities to third parties before client remediation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">9.3 M&A Due Diligence</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">For merger and acquisition due diligence:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Special Confidentiality:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Enhanced confidentiality for sensitive transaction information</li>
                      <li>Chinese Wall procedures if representing multiple parties</li>
                      <li>Secure disposal of due diligence materials post-transaction</li>
                      <li>Non-disclosure of transaction details even after engagement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Prohibited:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                        <li>Trading on material non-public information</li>
                        <li>Disclosing acquisition targets or transaction terms</li>
                        <li>Using due diligence information for competitive advantage</li>
                        <li>Representing conflicting parties without disclosure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 10: Compliance with Laws and Regulations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.67 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">10. COMPLIANCE WITH LAWS AND REGULATIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">10.1 Legal and Regulatory Compliance</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">All parties shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>Comply with applicable federal, state, and local laws</li>
                  <li>Adhere to industry regulations (HIPAA, GLBA, DFARS, etc.)</li>
                  <li>Respect privacy laws (GDPR, CCPA, PIPEDA, etc.)</li>
                  <li>Comply with export control regulations</li>
                  <li>Report legal violations as required by law</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">10.2 Professional Standards</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">ERMITS consultants shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>Comply with professional codes of conduct ((ISC)², ISACA, IAPP, etc.)</li>
                  <li>Maintain professional certifications through continuing education</li>
                  <li>Adhere to ethical standards of professional organizations</li>
                  <li>Report violations of professional standards as required</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">10.3 Anti-Bribery and Anti-Corruption</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">All parties shall:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>Comply with U.S. Foreign Corrupt Practices Act (FCPA)</li>
                  <li>Comply with UK Bribery Act and equivalent laws</li>
                  <li>Not offer or accept bribes, kickbacks, or improper payments</li>
                  <li>Not make facilitation payments</li>
                  <li>Report suspected corruption or bribery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">10.4 Cooperation with Law Enforcement</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Legal Requests:</h4>
                    <p className="text-gray-700 dark:text-gray-200 mb-2">ERMITS will cooperate with lawful requests from:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Law enforcement agencies</li>
                      <li>Regulatory authorities</li>
                      <li>Court orders and subpoenas</li>
                      <li>National security investigations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">User Notification:</h4>
                    <p className="text-gray-700 dark:text-gray-200 mb-2">When legally permitted, ERMITS will:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Notify affected users of legal requests</li>
                      <li>Provide reasonable time to challenge requests</li>
                      <li>Disclose only information required by law</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Emergency Situations:</h4>
                    <p className="text-gray-700 dark:text-gray-200 mb-2">In emergencies involving imminent threat to life or serious bodily harm:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>ERMITS may disclose information without prior notice</li>
                      <li>Users will be notified after emergency resolution</li>
                      <li>Disclosure limited to minimum necessary</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 11: Updates to This Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.69 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">11. UPDATES TO THIS POLICY</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">11.1 Policy Updates</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-2">ERMITS may update this AUP to reflect:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                  <li>Evolving security threats and professional standards</li>
                  <li>Legal and regulatory changes</li>
                  <li>New service offerings or engagement types</li>
                  <li>Industry best practices</li>
                  <li>Client feedback</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">11.2 Notification</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Material Changes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>30 days' advance notice to active clients</li>
                      <li>Notification via email or engagement communication</li>
                      <li>Opportunity to discuss concerns</li>
                      <li>Continued engagement constitutes acceptance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-navy dark:text-white">Non-Material Changes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200 ml-4">
                      <li>Update "Last Updated" date</li>
                      <li>Effective immediately upon posting</li>
                      <li>Notice in next scheduled client communication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 12: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">12. CONTACT INFORMATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-navy dark:text-white">AUP Violation Reports:</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a>
                </p>
                <p className="text-gray-700 dark:text-gray-200">Subject: "AUP Violation Report"</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-navy dark:text-white">AUP Questions:</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Email: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a>
                </p>
                <p className="text-gray-700 dark:text-gray-200">Subject: "AUP Inquiry - Advisory Services"</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-navy dark:text-white">Security Incidents:</h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Email: <a href="mailto:security@ermits.com" className="text-navy dark:text-silver hover:underline">security@ermits.com</a>
                </p>
                <p className="text-gray-700 dark:text-gray-200">Subject: "Security Incident - Advisory Services [URGENT]"</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 13: Acknowledgment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">13. ACKNOWLEDGMENT</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              By engaging ERMITS Advisory Services, you acknowledge that you have read, understood, and agree to comply with this Acceptable Use Policy. Violations may result in engagement termination and legal action.
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              <strong>Effective Date:</strong> December 15, 2025
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              <strong>Last Updated:</strong> December 15, 2025
            </p>
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
            <Link to="/advisory/privacy">
              <Button variant="outline" size="sm">
                Advisory Privacy Policy
              </Button>
            </Link>
            <Link to="/advisory/website-portal">
              <Button variant="outline" size="sm">
                Cookie & Portal Policy
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

