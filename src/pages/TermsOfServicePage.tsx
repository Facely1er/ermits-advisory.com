import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsOfServicePage: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Master Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> November 19, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> October 31, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            By accessing or using any ERMITS LLC ("ERMITS," "we," "our," or "us") products, platforms, or services (collectively, the "Services"), you ("User," "you," or "your") agree to be bound by these Master Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
          </p>
        </motion.div>

        {/* Scope and Applicability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">1. Scope and Applicability</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              These Terms govern your use of all ERMITS products, including but not limited to:
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">TechnoSoluce™ Brand Products:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 ml-4">
                  <li>SBOM Analyzer - Software supply chain security and vulnerability analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">CyberCertitude™ Brand Products:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 ml-4">
                  <li>CMMC 2.0 Level 1 Implementation Suite</li>
                  <li>CMMC 2.0 Level 2 Compliance Platform</li>
                  <li>Original Toolkit (localStorage-based compliance management)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">VendorSoluce™ Brand Products:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 ml-4">
                  <li>Supply Chain Risk Management Platform</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">CyberCorrect™ Brand Products:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 ml-4">
                  <li>Privacy Portal (Workplace privacy compliance)</li>
                  <li>Privacy Platform (Multi-regulation privacy compliance automation)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">CyberCaution™ Brand Products:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 ml-4">
                  <li>RansomCheck (Ransomware readiness assessment)</li>
                  <li>Security Toolkit (Comprehensive cybersecurity assessment platform)</li>
                  <li>RiskProfessional (CISA-aligned security assessments)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">ERMITS Advisory + STEEL™ Brand Products and Services:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 ml-4">
                  <li>STEEL™ Assessment Platform (Strategic Threat & Enterprise Evaluation Layer)</li>
                  <li>STEEL™ Premium Assessment ($29 digital product)</li>
                  <li>vCISO Starter Kit ($299 digital product)</li>
                  <li>Executive Dashboard Template ($79 digital product)</li>
                  <li>Compliance Toolkit (digital product)</li>
                  <li>Incident Response Toolkit (digital product)</li>
                  <li>Vendor Risk Toolkit (digital product)</li>
                  <li>Premium Toolkits (subscription-based digital products)</li>
                  <li>STEEL Strategic Assessment Services ($25,000-$125,000 custom pricing)</li>
                  <li>On-Demand Advisory Services (custom pricing)</li>
                  <li>Compliance Advisory Services (custom pricing)</li>
                  <li>Virtual CISO (vCISO) Services (custom pricing)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">SocialCaution Brand Products:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 ml-4">
                  <li>Personalized Privacy Platform with AI-powered persona detection</li>
                  <li>Privacy Exposure Index for online services</li>
                  <li>Service Catalog with risk profiles</li>
                  <li>Adaptive privacy resources and tools</li>
                  <li>Digital footprint analysis</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-200 mt-4">
              Product-specific terms may apply as set forth in Product-Specific Addendums.
            </p>
          </Card>
        </motion.div>

        {/* Definitions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2. Definitions</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-200">
              <p><strong>"Privacy-First Architecture"</strong> means ERMITS' system design philosophy ensuring that user data is processed locally whenever possible, with optional encrypted cloud synchronization, pseudonymized telemetry, and zero-knowledge data handling principles.</p>
              <p><strong>"User Data"</strong> means any information, content, files, or materials that you upload, submit, generate, or process through the Services.</p>
              <p><strong>"Controlled Unclassified Information" or "CUI"</strong> means information that requires safeguarding or dissemination controls pursuant to federal law, regulations, or government-wide policies.</p>
              <p><strong>"Federal Contract Information" or "FCI"</strong> means information not intended for public release that is provided by or generated for the U.S. Government under a contract.</p>
              <p><strong>"Beta Products"</strong> means Services explicitly marked as "Beta," "Preview," "Early Access," or similar designations indicating pre-release or testing status.</p>
              <p><strong>"Advisory Services"</strong> means professional consulting, strategic guidance, assessments, and expert recommendations provided by ERMITS personnel or contractors, including but not limited to STEEL Strategic Assessments, vCISO services, compliance advisory, and on-demand consulting. Advisory Services are distinct from self-service Digital Products.</p>
              <p><strong>"Digital Products"</strong> means self-service downloadable or web-based tools, templates, assessments, and resources available for immediate purchase and use without professional consulting, including but not limited to STEEL Premium Assessment, vCISO Starter Kit, Executive Dashboard Template, and Premium Toolkits.</p>
              <p><strong>"STEEL™ Framework"</strong> means ERMITS' proprietary Strategic Threat & Enterprise Evaluation Layer methodology for assessing organizational cybersecurity and risk posture across Political, Economic, Social, Technological, Environmental, and Legal (PESTEL) factors.</p>
              <p><strong>"Privacy Persona"</strong> means the AI-determined privacy profile classification assigned by SocialCaution based on user assessment responses, used to personalize privacy recommendations and resources.</p>
              <p><strong>"Privacy Exposure Index"</strong> means SocialCaution's quantified privacy risk score (0-100) for online services based on publicly available data, privacy policies, and service characteristics.</p>
            </div>
          </Card>
        </motion.div>

        {/* Eligibility and Account Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">3. Eligibility and Account Requirements</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Age Requirement</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  You must be at least 18 years of age to use the Services. By using the Services, you represent and warrant that you meet this age requirement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Authority</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Account Security</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">You are responsible for:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying ERMITS immediately of any unauthorized access or security breach</li>
                  <li>Using strong, unique passwords and enabling multi-factor authentication where available</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Privacy-First Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <h2 className="text-2xl font-bold mb-4">4. Privacy-First Architecture and Data Handling</h2>
            <p className="text-silver mb-4">
              ERMITS implements a Privacy-First Architecture across all products, built on the following principles:
            </p>
            <div className="space-y-3 text-silver">
              <div>
                <h3 className="font-semibold text-white mb-2">Client-Side Processing</h3>
                <p>All core computational functions (assessments, SBOM analysis, risk scoring, compliance evaluations) are performed locally within your browser or self-managed environment whenever technically feasible.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Data Sovereignty Options</h3>
                <p>You have multiple deployment and storage options: Local Storage (browser-based, desktop app, on-premises), Cloud Storage (self-managed or ERMITS-managed), or Hybrid deployment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Zero-Knowledge Principles</h3>
                <p>When using ERMITS-managed cloud services with encryption enabled, data is encrypted client-side using AES-256-GCM. ERMITS administrators cannot decrypt your data.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Data Minimization</h3>
                <p>ERMITS collects only the minimum data necessary for service functionality. We never collect raw SBOM files, assessment content, CUI, FCI, or proprietary business data.</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* License Grant and Restrictions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">5. License Grant and Restrictions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">License to Use Services</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Subject to your compliance with these Terms, ERMITS grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business or personal purposes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">License Restrictions</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">You may not:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Services</li>
                  <li>Reverse engineer, decompile, disassemble, or attempt to discover source code or underlying algorithms (except to the extent such restriction is prohibited by applicable law)</li>
                  <li>Remove, obscure, or alter any proprietary rights notices</li>
                  <li>Use the Services to develop competing products or services</li>
                  <li>Access the Services through automated means (bots, scrapers) without prior written authorization</li>
                  <li>Attempt to circumvent security measures or gain unauthorized access</li>
                  <li>Use the Services in any way that violates applicable laws or regulations</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* User Data Ownership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">6. User Data Ownership and Responsibilities</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">User Data Ownership</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  You retain all ownership rights in your User Data. ERMITS does not claim any ownership or intellectual property rights in your User Data.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">User Data Responsibilities</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">You are solely responsible for:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>The accuracy, quality, and legality of your User Data</li>
                  <li>The means by which you acquired User Data</li>
                  <li>Compliance with all applicable laws regarding User Data processing</li>
                  <li>Maintaining appropriate security controls for your User Data</li>
                  <li>Backup and disaster recovery of locally-stored data</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Beta Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">9. Beta Products and Services</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.9.1 Beta Designation</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Products or features explicitly marked as "Beta," "Preview," "Early Access," or similar designations are pre-release versions provided for testing and feedback purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.9.2 Beta Terms</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Beta Products are provided "AS IS" with the following additional limitations:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>May contain bugs, errors, or incomplete features</li>
                  <li>May be modified or discontinued without notice</li>
                  <li>Are not subject to standard SLA commitments</li>
                  <li>May have limited or no customer support</li>
                  <li>Should not be used for production or mission-critical purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.9.3 Beta Feedback</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  By using Beta Products, you agree to provide feedback on functionality, usability, and issues. ERMITS may use such feedback without compensation or obligation to you.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Federal Contractor Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">10. Federal Contractor Specific Terms</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.10.1 Applicability</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  This section applies to users who are U.S. federal contractors or subcontractors handling Federal Contract Information (FCI) or Controlled Unclassified Information (CUI).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.10.2 Compliance Representations</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Users represent and warrant that they:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Understand their obligations under applicable DFARS and FAR clauses</li>
                  <li>Are solely responsible for compliance with DFARS 252.204-7012, NIST SP 800-171, and CMMC requirements</li>
                  <li>Will implement appropriate controls for CUI and FCI protection</li>
                  <li>Acknowledge that ERMITS products are tools to assist with compliance but do not guarantee certification</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.10.3 CUI and FCI Handling</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">When using ERMITS Services to process CUI or FCI:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>You must use encryption features and self-managed deployment options</li>
                  <li>You are responsible for properly marking and handling CUI/FCI</li>
                  <li>ERMITS does not access or process CUI/FCI due to Privacy-First Architecture</li>
                  <li>You must implement appropriate access controls and audit logging</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Payment Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">12. Payment Terms</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.12.1 Pricing and Billing</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Pricing for Services is set forth on the ERMITS website or in your subscription agreement</li>
                  <li>All fees are in U.S. Dollars unless otherwise specified</li>
                  <li>Fees are non-refundable except as expressly provided in the Refund & Cancellation Policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.12.2 Payment Processing</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Payments are processed through Stripe, Inc., a third-party payment processor</li>
                  <li>You authorize ERMITS to charge your designated payment method</li>
                  <li>You must provide accurate, current payment information</li>
                  <li>You are responsible for all applicable taxes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.12.3 Subscription Terms</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Renewal pricing may change with 30 days' notice</li>
                  <li>Downgrades take effect at the next billing cycle</li>
                  <li>Cancellations must be submitted before renewal date</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Term and Termination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">13. Term and Termination</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.13.1 Term</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  These Terms remain in effect for as long as you access or use the Services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.13.2 Termination by You</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">You may terminate your account at any time through:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Account settings within the Services</li>
                  <li>Contacting ERMITS support at contact@ermits.com</li>
                  <li>Following product-specific cancellation procedures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.13.3 Termination by ERMITS</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS may suspend or terminate your access immediately without notice if:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>You breach these Terms or any applicable policies</li>
                  <li>Your account is inactive for 12+ months (free accounts)</li>
                  <li>Your payment method fails or account is delinquent</li>
                  <li>Required by law or regulatory authority</li>
                  <li>Necessary to protect ERMITS or other users</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Warranties and Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">14. Warranties and Disclaimers</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Limited Warranty</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  ERMITS warrants that the Services will perform substantially in accordance with published documentation under normal use. This warranty does not apply to Beta Products, free tiers, issues caused by user error, third-party services, or force majeure events.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Disclaimer of Warranties</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  EXCEPT AS EXPRESSLY PROVIDED, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>No warranty that Services will meet your specific requirements</li>
                  <li>No guarantee of continuous, error-free operation</li>
                  <li>No guarantee that Services are completely secure or error-free</li>
                  <li>No warranty regarding accuracy, completeness, or reliability of outputs</li>
                  <li>No guarantee that use of Services will result in regulatory compliance or certification</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Compliance Disclaimer</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  ERMITS products are tools to assist with security and compliance efforts but do not guarantee compliance with any regulatory framework, do not constitute legal or professional consulting advice, and are not certification authorities.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Limitation of Liability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">15. Limitation of Liability</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Exclusion of Consequential Damages</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ERMITS LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, LOSS OF PROFITS, REVENUE, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Cap on Liability</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  ERMITS' TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR USE OF THE SERVICES SHALL NOT EXCEED THE GREATER OF $100 USD OR THE TOTAL AMOUNT PAID BY YOU TO ERMITS IN THE 12 MONTHS PRECEDING THE CLAIM.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Indemnification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.76 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">16. Indemnification</h2>
            <p className="text-gray-600 dark:text-gray-200">
              You agree to indemnify, defend, and hold harmless ERMITS LLC, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to: (a) your use of the Services; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) your User Data.
            </p>
          </Card>
        </motion.div>

        {/* Force Majeure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.77 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">17. Force Majeure</h2>
            <p className="text-gray-600 dark:text-gray-200">
              ERMITS shall not be liable for any failure or delay in performance under these Terms due to circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, government actions, internet or telecommunications failures, or cyberattacks.
            </p>
          </Card>
        </motion.div>

        {/* Governing Law */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">20. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">20.1 Governing Law</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  These Terms are governed by and construed in accordance with the laws of the District of Columbia, United States, without regard to conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">20.2 Jurisdiction and Venue</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Subject to the arbitration provision below, any legal action or proceeding relating to these Terms shall be brought exclusively in the federal or state courts located in Washington, D.C. You consent to the personal jurisdiction of such courts and waive any objection to venue.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">20.3 Binding Arbitration</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  Any dispute, controversy, or claim arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof (collectively, "Disputes") shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules.
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-2"><strong>Arbitration Procedures:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Arbitration shall be conducted in Washington, D.C.</li>
                  <li>Arbitration shall be by a single arbitrator</li>
                  <li>Arbitrator shall apply District of Columbia law</li>
                  <li>Each party bears its own costs and fees</li>
                  <li>Arbitrator's decision is final and binding</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-200 mt-3 font-semibold">Class Action Waiver:</p>
                <p className="text-gray-600 dark:text-gray-200">
                  YOU AND ERMITS AGREE THAT DISPUTES MUST BE BROUGHT ON AN INDIVIDUAL BASIS ONLY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, REPRESENTATIVE, OR COLLECTIVE PROCEEDING. CLASS ARBITRATIONS, CLASS ACTIONS, AND REPRESENTATIVE ACTIONS ARE NOT PERMITTED.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Dispute Resolution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.79 }}
          className="mb-8"
        >
        </motion.div>

        {/* Modifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">19. Modifications to Services and Terms</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-2">
              ERMITS reserves the right to modify these Terms at any time. Material changes will be communicated via email and in-app notification at least 30 days before they take effect. Continued use of Services after changes constitutes acceptance of modified Terms.
            </p>
            <p className="text-gray-600 dark:text-gray-200">
              If you do not agree to modified Terms, you must stop using the Services and may terminate your account.
            </p>
          </Card>
        </motion.div>

        {/* Severability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.81 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">21. General Provisions</h2>
            <p className="text-gray-600 dark:text-gray-200">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect. The invalid provision shall be replaced with a valid provision that most closely reflects the intent of the original provision.
            </p>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">22. Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">For questions, concerns, or notices regarding these Terms:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  <strong>ERMITS LLC</strong><br />
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a><br />
                  Website: <a href="https://www.ermits.com" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">www.ermits.com</a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">For technical support inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
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
                <h3 className="font-semibold mb-2 dark:text-white">For advisory services inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a><br />
                  Website: <a href="https://www.ermits-advisory.com" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">www.ermits-advisory.com</a>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy">
              <Button variant="outline" size="sm">
                Privacy Policy
              </Button>
            </Link>
            <Link to="/cookies">
              <Button variant="outline" size="sm">
                Cookie Policy
              </Button>
            </Link>
            <Link to="/acceptable-use">
              <Button variant="outline" size="sm">
                Acceptable Use Policy
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
