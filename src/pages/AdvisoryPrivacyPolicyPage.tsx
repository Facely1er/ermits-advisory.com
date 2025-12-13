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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Advisory Services Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> November 19, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> November 19, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            ERMITS LLC is committed to protecting your privacy in connection with our professional advisory and consulting services. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you engage us for Advisory Services.
          </p>
        </motion.div>

        {/* Professional Services Privacy Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Shield size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Professional Services Privacy Principles</h2>
                <div className="space-y-4 text-silver">
                  <div>
                    <h3 className="font-semibold text-white mb-2">1. Client Confidentiality</h3>
                    <p>All client information is treated as confidential and protected under Non-Disclosure Agreements (NDAs), professional confidentiality standards, and contractual obligations.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">2. Need-to-Know Access</h3>
                    <p>Only ERMITS personnel directly involved in your engagement have access to your information: consultants assigned to your project, technical specialists, quality assurance reviewers, and senior advisors.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">3. Data Minimization</h3>
                    <p>We collect only information necessary to deliver Advisory Services: engagement scope requirements, background information for context, and documentation for deliverables.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">4. Secure Handling</h3>
                    <p>Client data is protected through encrypted transmission (TLS 1.3), encrypted storage, secure file sharing platforms, and physical security for paper documents.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">5. Limited Retention</h3>
                    <p>Client data is retained only as long as necessary: during engagement, for warranty periods (90 days), and as required by professional standards (3-7 years).</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Services Covered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Services Covered</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              This Privacy Policy applies to ERMITS Advisory Services, including:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Cybersecurity Advisory</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 text-sm space-y-1">
                  <li>CMMC consulting and readiness</li>
                  <li>Program development</li>
                  <li>Incident response planning</li>
                  <li>Security architecture review</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Compliance Advisory</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 text-sm space-y-1">
                  <li>NIST SP 800-171 consulting</li>
                  <li>HIPAA Security Rule consulting</li>
                  <li>Privacy compliance (GDPR, CCPA)</li>
                  <li>Policy development</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Risk Management Advisory</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 text-sm space-y-1">
                  <li>Vendor risk assessment</li>
                  <li>Supply chain security</li>
                  <li>Third-party due diligence</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Strategic Advisory</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 text-sm space-y-1">
                  <li>Virtual CISO services</li>
                  <li>Cybersecurity roadmaps</li>
                  <li>Board-level reporting</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Information We Collect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Client Contact and Business Information</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We collect:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Contact information (name, title, email, phone)</li>
                  <li>Company information (name, address, industry)</li>
                  <li>Billing contact information</li>
                  <li>Secondary contacts (technical leads, project managers)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Engagement-Specific Information</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">Depending on your engagement:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Security controls and implementations</li>
                  <li>Compliance documentation and evidence</li>
                  <li>Risk assessments and business context</li>
                  <li>Privacy policies and data flow mapping</li>
                  <li>Organizational structure and processes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">We Do NOT Require</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Production data or live datasets</li>
                  <li>Personal data of your employees or customers</li>
                  <li>System credentials or passwords</li>
                  <li>Controlled Unclassified Information (CUI)</li>
                  <li>Protected Health Information (PHI) beyond necessary</li>
                  <li>Payment card data (PCI data)</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Data Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Data Security Measures</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Encryption</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Data in Transit:</strong> TLS 1.3 encryption, SFTP, encrypted email (S/MIME, PGP)</li>
                  <li><strong>Data at Rest:</strong> AES-256 encryption, encrypted laptop drives (BitLocker, FileVault)</li>
                  <li><strong>Access Controls:</strong> MFA required, RBAC, strong passwords (16+ characters)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Physical & Operational Security</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Controlled office access and visitor management</li>
                  <li>Secure document storage and shredding</li>
                  <li>Background checks for consultants</li>
                  <li>Annual security and privacy training</li>
                  <li>Clean desk policy for confidential materials</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Data Retention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Data Retention</h2>
            
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Data Type</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Contact Information</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement + 7 years</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Deliverables</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement + 7 years</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Working Documents</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Engagement + 3 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Financial Records</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">7 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Special Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Special Considerations</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Federal Contractor Clients (CUI/FCI)</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  CUI/FCI is NOT stored on ERMITS infrastructure. All CUI/FCI processed on-site at client facilities. Consultants trained on CUI/FCI handling per NIST SP 800-171.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Healthcare Clients (HIPAA)</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Business Associate Agreement (BAA) required before PHI access. PHI accessed only as necessary for engagement scope. Minimum necessary standard applied.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Attorney-Client Engagement Model</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  ERMITS may be engaged by your legal counsel to provide technical consulting. Work product prepared at counsel's direction may be privileged.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Your Privacy Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Your Privacy Rights</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Universal Rights (All Clients)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Right to Access:</strong> Request copies of all information we hold</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
                  <li><strong>Right to Deletion:</strong> Request deletion (subject to legal requirements)</li>
                  <li><strong>Right to Data Portability:</strong> Receive data in machine-readable format</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
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

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Privacy Inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Advisory Services Privacy Inquiry"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Data Protection Officer (EU/UK/Swiss):</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:dpo@ermits.com" className="text-navy dark:text-silver hover:underline">dpo@ermits.com</a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Security Concerns:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:security@ermits.com" className="text-navy dark:text-silver hover:underline">security@ermits.com</a>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
                Advisory Acceptable Use
              </Button>
            </Link>
            <Link to="/advisory/website-policy">
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

