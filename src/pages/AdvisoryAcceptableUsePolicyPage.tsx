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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">ERMITS ADVISORY SERVICES - ACCEPTABLE USE POLICY</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> November 19, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> November 19, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">1. PURPOSE AND SCOPE</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.1 Applicability</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">This AUP applies to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>All ERMITS Advisory Services engagements</li>
                  <li>Client personnel participating in engagements</li>
                  <li>ERMITS consultants, subcontractors, and specialists</li>
                  <li>All parties with access to Confidential Information under engagement agreements</li>
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
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Shield size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">2. PROFESSIONAL CONDUCT STANDARDS</h2>
                <div className="space-y-4 text-silver">
                  <div>
                    <h3 className="font-semibold text-white mb-2">2.1 Professional Standards</h3>
                    <p className="mb-2">All parties shall:</p>
                    <div className="space-y-2 text-sm">
                      <div>
                        <h4 className="font-semibold text-white mb-1">Maintain Professional Conduct:</h4>
                        <ul className="list-disc list-inside ml-4">
                          <li>Act with honesty, integrity, and professionalism</li>
                          <li>Respect confidentiality and trust relationships</li>
                          <li>Communicate respectfully and professionally</li>
                          <li>Meet commitments and deadlines</li>
                        </ul>
                      </div>
                    </div>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">3. PROHIBITED ACTIVITIES</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">3.1 Illegal and Unethical Activities</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">Prohibited Activities:</p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
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
                <h3 className="text-xl font-semibold mb-3 dark:text-white">3.3 Security Violations</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">Prohibited Security Activities:</p>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Accessing client systems without explicit authorization</li>
                    <li>Exceeding scope of authorized system access</li>
                    <li>Attempting to gain unauthorized access or escalate privileges</li>
                    <li>Introducing malware, viruses, worms, Trojan horses, or other harmful code</li>
                    <li>Circumventing security controls or authentication mechanisms</li>
                    <li>Conducting penetration testing or vulnerability scanning without written authorization</li>
                    <li>Modifying client systems, configurations, or data without authorization</li>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">4. HANDLING CONTROLLED AND SENSITIVE INFORMATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.1 Controlled Unclassified Information (CUI) and Federal Contract Information (FCI)</h3>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Clients Processing CUI/FCI Shall:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Properly mark CUI/FCI per NIST SP 800-171 and 32 CFR Part 2002</li>
                    <li>Provide ERMITS consultants with CUI/FCI handling training</li>
                    <li>Implement appropriate safeguards and access controls</li>
                    <li>Monitor and log consultant access to CUI/FCI</li>
                    <li>Report cyber incidents per DFARS 252.204-7012 requirements</li>
                  </ul>
                </div>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">7. REPORTING VIOLATIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.1 How to Report</h3>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Client Reporting:</h4>
                  <p className="text-gray-600 dark:text-gray-200 mb-2">If you become aware of violations by ERMITS consultants:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Contact engagement project manager immediately</li>
                    <li>Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a> (Subject: "AUP Violation Report")</li>
                    <li>For serious violations: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a></li>
                  </ul>
                </div>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">8. ENFORCEMENT AND CONSEQUENCES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.2 Enforcement Actions - ERMITS Consultants</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">For violations by ERMITS consultants:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Warning and Remediation:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Written warning and corrective action plan</li>
                      <li>Additional training or supervision</li>
                      <li>Removal from specific engagement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Termination:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Immediate termination of employment</li>
                      <li>Removal from all client engagements</li>
                      <li>Notification to client (as appropriate)</li>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">12. CONTACT INFORMATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">AUP Violation Reports:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "AUP Violation Report"</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">AUP Questions:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:legal@ermits.com" className="text-navy dark:text-silver hover:underline">legal@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "AUP Inquiry - Advisory Services"</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Security Incidents:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:security@ermits.com" className="text-navy dark:text-silver hover:underline">security@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Security Incident - Advisory Services [URGENT]"</p>
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
            <Link to="/advisory/privacy">
              <Button variant="outline" size="sm">
                Advisory Privacy Policy
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

