import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Shield, ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Master Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> November 19, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> October 31, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            ERMITS LLC ("ERMITS," "we," "our," or "us") is committed to protecting your privacy through a Privacy-First Architecture that ensures you maintain control over your data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our Services across all ERMITS product lines.
          </p>
          <p className="text-gray-600 dark:text-gray-200 mt-4">
            By using our Services, you consent to the data practices described in this policy. If you do not agree with this Privacy Policy, please do not use our Services.
          </p>
        </motion.div>

        {/* Scope and Applicability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">1. Scope and Applicability</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.1 Services Covered</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">This Privacy Policy applies to all ERMITS products and services, including:</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">ERMITS Advisory + STEEL™:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Strategic cybersecurity assessments and advisory services</li>
                      <li>STEEL™ (Strategic Threat & Enterprise Evaluation Layer) framework assessments</li>
                      <li>vCISO services and security consulting</li>
                      <li>Compliance advisory and implementation services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">SocialCaution:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Personalized privacy platform</li>
                      <li>AI-powered persona detection</li>
                      <li>Privacy exposure index and risk scoring</li>
                      <li>Service catalog with privacy risk profiles</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">TechnoSoluce™:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>SBOM (Software Bill of Materials) Analyzer</li>
                      <li>Software supply chain security and vulnerability analysis</li>
                      <li>Client-side SBOM processing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">CyberCertitude™:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>CMMC 2.0 Level 1 Implementation Suite</li>
                      <li>CMMC 2.0 Level 2 Compliance Platform</li>
                      <li>NIST SP 800-171 assessment and compliance tools</li>
                      <li>Original Toolkit (localStorage-based compliance management)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">VendorSoluce™:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Supply Chain Risk Management Platform</li>
                      <li>Vendor assessment and monitoring</li>
                      <li>Third-party risk evaluation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">CyberCorrect™:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Privacy Portal (workplace privacy compliance)</li>
                      <li>Privacy Platform (multi-regulation privacy management)</li>
                      <li>Data subject rights management</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">CyberCaution™:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>RansomCheck (ransomware readiness assessment)</li>
                      <li>Security Toolkit (comprehensive cybersecurity assessments)</li>
                      <li>RiskProfessional (CISA-aligned security assessments)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.2 Geographic Scope</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">This Privacy Policy applies to users worldwide and complies with:</p>
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

        {/* Privacy-First Architecture Overview */}
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
                <h2 className="text-2xl font-bold mb-4">2. Privacy-First Architecture Overview</h2>
                <p className="text-silver mb-4">
                  ERMITS implements Privacy-First Architecture built on five fundamental principles that distinguish our approach:
                </p>
                <div className="space-y-4 text-silver">
                  <div>
                    <h3 className="font-semibold text-white mb-2">1. Client-Side Processing</h3>
                    <p className="mb-2">All core computational functions are performed locally within your browser or self-managed environment whenever technically feasible:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Security Assessments:</strong> STEEL™, CMMC, cybersecurity assessments processed in your browser</li>
                      <li><strong>SBOM Analysis:</strong> TechnoSoluce processes SBOM files entirely client-side</li>
                      <li><strong>Risk Scoring:</strong> All risk calculations performed locally</li>
                      <li><strong>Compliance Evaluations:</strong> Assessment scoring and gap analysis done in your browser</li>
                      <li><strong>Privacy Analysis:</strong> SocialCaution persona detection runs entirely client-side</li>
                    </ul>
                    <p className="mt-2 font-semibold">Your data remains under your control throughout the analysis process.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">2. Data Sovereignty Options</h3>
                    <p className="mb-2">You choose where your data resides:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Local-Only Mode:</strong> All data stored exclusively in your browser (IndexedDB, localStorage)</li>
                      <li><strong>Self-Managed Cloud:</strong> Deploy to your own cloud infrastructure with full control (AWS, Azure, GCP)</li>
                      <li><strong>ERMITS-Managed Cloud:</strong> Optional encrypted cloud synchronization with zero-knowledge architecture</li>
                      <li><strong>Hybrid Deployment:</strong> Local processing with selective encrypted cloud backup</li>
                      <li><strong>On-Premises:</strong> Enterprise customers can deploy on their own infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">3. Zero-Knowledge Encryption</h3>
                    <p className="mb-2">When using ERMITS-managed cloud features with encryption enabled:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Data is encrypted client-side using <strong>AES-256-GCM</strong> before transmission</li>
                      <li>Encryption keys are <strong>derived from your credentials</strong> using PBKDF2 and never transmitted to ERMITS</li>
                      <li>ERMITS <strong>cannot decrypt, access, or view</strong> your encrypted data</li>
                      <li>You are <strong>solely responsible</strong> for maintaining access to encryption keys</li>
                      <li><strong>Lost keys = permanent data loss</strong> (we cannot recover your data)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">4. Data Minimization</h3>
                    <p className="mb-2">We collect only the minimum data necessary for service functionality:</p>
                    <p className="mb-2 font-semibold">Never Collected:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                      <li>Raw SBOM files, component lists, dependency graphs</li>
                      <li>Assessment content, responses, or findings</li>
                      <li>Vulnerability scan results or CVE data</li>
                      <li>Compliance documentation (SSPs, POA&Ms, evidence)</li>
                      <li>CUI (Controlled Unclassified Information)</li>
                      <li>FCI (Federal Contract Information)</li>
                      <li>PHI (Protected Health Information)</li>
                      <li>Proprietary business data or trade secrets</li>
                    </ul>
                    <p className="mb-2 font-semibold">Optionally Collected:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Account information (name, email, company) - only when you create an account</li>
                      <li>Pseudonymized telemetry (anonymous performance metrics) - opt-in only</li>
                      <li>Encrypted user data (if cloud sync enabled) - we cannot decrypt</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">5. Transparency and Control</h3>
                    <p className="mb-2">You have complete control over your data:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Export</strong> all data at any time in standard formats (JSON, CSV, PDF)</li>
                      <li><strong>Delete</strong> all data permanently with one click</li>
                      <li><strong>Opt in or opt out</strong> of telemetry collection anytime</li>
                      <li><strong>Choose</strong> your deployment and storage model</li>
                      <li><strong>Review</strong> detailed data flow documentation for each product</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Information We Collect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">3. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">3.1 Information You Provide Directly</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Account Information (Optional):</h4>
                  <p className="text-gray-600 dark:text-gray-200 mb-2">When you create an account or subscribe to paid features, we collect:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                    <li><strong>Name:</strong> Your full name or preferred name</li>
                    <li><strong>Email Address:</strong> For authentication, communications, and billing</li>
                    <li><strong>Company Name and Job Title:</strong> Optional, for business context</li>
                    <li><strong>Billing Information:</strong> Processed by Stripe, Inc. (our payment processor)
                      <ul className="list-disc list-inside space-y-1 ml-6 mt-1">
                        <li>ERMITS does not store complete payment card information</li>
                        <li>We receive only: transaction status, last 4 digits of card, billing address</li>
                      </ul>
                    </li>
                    <li><strong>Password:</strong> Cryptographically hashed using bcrypt, never stored in plaintext</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">User-Generated Content:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                    <li><strong>Support Requests:</strong> Questions, issues, or feedback sent to contact@ermits.com</li>
                    <li><strong>Survey Responses:</strong> Feedback provided through user surveys</li>
                    <li><strong>Customization Preferences:</strong> UI preferences, notification settings, feature preferences</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">3.2 Information We Do NOT Collect</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">ERMITS explicitly does NOT collect, access, store, or transmit:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>SBOM Data:</strong> Software bill of materials files, component lists, dependency graphs, or package metadata</li>
                  <li><strong>Assessment Content:</strong> Security assessments, compliance evaluations, risk analyses, or audit findings</li>
                  <li><strong>Vulnerability Data:</strong> Vulnerability scan results, CVE findings, or remediation plans</li>
                  <li><strong>Compliance Data:</strong> CMMC documentation, POAMs, SSPs, evidence portfolios, or certification materials</li>
                  <li><strong>Proprietary Business Data:</strong> Trade secrets, confidential information, or business-sensitive data</li>
                  <li><strong>CUI/FCI:</strong> Controlled Unclassified Information or Federal Contract Information</li>
                  <li><strong>Personal Health Information (PHI):</strong> Protected health information under HIPAA</li>
                  <li><strong>Financial Records:</strong> Detailed financial data or payment card information (except via Stripe)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">3.3 Automatically Collected Information</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  With your consent, we collect anonymous, aggregated performance data (pseudonymized telemetry):
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Feature usage statistics (which tools are used, how often)</li>
                  <li>Performance metrics (page load times, API response times)</li>
                  <li>Error reports (crash logs, exceptions) with PII automatically scrubbed</li>
                  <li>Browser and device information (browser type, OS version, screen resolution)</li>
                  <li>Session metadata (session duration, navigation paths)</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-200 mt-3 italic">
                  <strong>Note:</strong> Telemetry uses irreversible pseudonymization and cannot identify individual users. You can opt-out at any time.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* How We Use Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">4. How We Use Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Service Delivery and Operation</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Provide, maintain, and improve the Services</li>
                  <li>Process transactions and send transaction confirmations</li>
                  <li>Authenticate users and maintain account security</li>
                  <li>Enable features like cloud synchronization and multi-device access</li>
                  <li>Provide customer support and respond to inquiries</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Service Improvement and Analytics</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Analyze pseudonymized usage patterns to improve features</li>
                  <li>Identify and fix bugs, errors, and performance issues</li>
                  <li>Develop new features and services</li>
                  <li>Conduct research and analysis (using only aggregated, anonymous data)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">What We Do NOT Do</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS does NOT:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Sell or rent your personal information to third parties</li>
                  <li>Use your data for advertising or marketing to others</li>
                  <li>Share your User Data with third parties (except as disclosed)</li>
                  <li>Train AI models on your User Data</li>
                  <li>Analyze your assessment results or SBOM data for any purpose</li>
                  <li>Profile users for behavioral targeting</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Information Sharing and Disclosure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">5. Information Sharing and Disclosure</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.1 Service Providers (Sub-Processors)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We share limited data with trusted third-party service providers who assist in delivering the Services:</p>
                
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Service Provider</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Purpose</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Data Shared</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>Supabase</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Database and authentication</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Email, encrypted user data (if cloud sync enabled)</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">United States</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>Stripe</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Payment processing</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Email, billing information</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">United States</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>Sentry</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Error monitoring</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Error logs with PII automatically scrubbed</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">United States</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>PostHog</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Pseudonymized usage metrics with differential privacy</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">United States / EU</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>Vercel</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Hosting and CDN</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">IP address, HTTP headers (standard web traffic)</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Global CDN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-600 dark:text-gray-200 mt-3"><strong>Sub-Processor Requirements:</strong> All sub-processors are contractually required to use data only for specified purposes, implement appropriate security measures, comply with applicable privacy laws, not use data for their own purposes, and delete data when no longer needed.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.2 Legal Requirements</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">We may disclose information if required by law or in response to court orders, subpoenas, government investigations, law enforcement requests, or national security threats. When legally permitted, we will notify affected users, challenge overly broad requests, and provide only the minimum information required.</p>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">6. Data Security Measures</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Encryption</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Data in Transit:</strong> TLS 1.3 encryption for all data transmission, HTTPS required for all web traffic</li>
                  <li><strong>Data at Rest:</strong> AES-256-GCM encryption for cloud-stored data, client-side encryption with user-controlled keys</li>
                  <li><strong>Data in Use:</strong> Local processing minimizes data exposure, secure coding practices</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Access Controls</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Multi-Factor Authentication (MFA):</strong> Available for all accounts, required for administrators</li>
                  <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions based on user roles</li>
                  <li><strong>Row-Level Security (RLS):</strong> Database-level isolation ensuring users can only access their own data</li>
                  <li><strong>Principle of Least Privilege:</strong> Internal access limited to minimum necessary</li>
                  <li><strong>Access Logging:</strong> All data access logged for audit and security monitoring</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Infrastructure Security</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Secure Cloud Hosting: Enterprise-grade infrastructure (Supabase, Vercel)</li>
                  <li>Network Segmentation: Isolated production, staging, and development environments</li>
                  <li>DDoS Protection: Distributed denial-of-service attack mitigation</li>
                  <li>Intrusion Detection: 24/7 monitoring for suspicious activity</li>
                  <li>Regular Security Audits: Penetration testing and vulnerability assessments</li>
                  <li>Incident Response Plan: Documented procedures for security incidents</li>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">7. Data Retention</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.1 Active Accounts</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We retain your data for as long as your account is active or as needed to provide Services:</p>
                
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
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>Account Information</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Duration of account + 30 days</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Service delivery, support</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>User-Generated Content</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">User-controlled (can delete anytime)</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Service functionality</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>Encrypted Cloud Data</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">User-controlled (can delete anytime)</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Cloud synchronization</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>Support Communications</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">3 years</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Customer support, quality improvement</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200"><strong>Pseudonymized Telemetry</strong></td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Indefinite (anonymous, cannot be deleted)</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Service improvement, analytics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.2 Deleted Accounts</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">When you delete your account or request data deletion:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Immediate:</strong> Account access disabled, data marked for deletion</li>
                  <li><strong>Within 30 days:</strong> User Data permanently deleted from production systems</li>
                  <li><strong>Within 90 days:</strong> Backup copies permanently deleted</li>
                  <li><strong>Exceptions:</strong> Data retained longer only where legally required</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* International Data Transfers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">9. International Data Transfers</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.1 Data Processing Locations</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS is based in the United States. If you access Services from outside the U.S., your data may be transferred to, stored, and processed in the United States or other countries where our service providers operate.</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>United States:</strong> Primary data processing and storage (Supabase, Vercel, Stripe)</li>
                  <li><strong>European Union:</strong> Optional data residency for EU customers (Supabase EU region)</li>
                  <li><strong>Global CDN:</strong> Content delivery network nodes worldwide (Vercel)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.2 Safeguards for International Transfers</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For data transfers from the EEA, UK, or Switzerland to the United States, ERMITS uses European Commission-approved Standard Contractual Clauses (SCCs) incorporated into agreements with sub-processors. Additional safeguards include encryption in transit and at rest, access controls, regular security assessments, and transparency about government access requests.</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Children's Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.49 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">10. Children's Privacy</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.1 Age Restrictions</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">The Services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we learn that we have collected personal information from a child under 18, we will delete the information as quickly as possible.</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Product-Specific Privacy Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.492 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">11. Product-Specific Privacy Considerations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.1 ERMITS Advisory + STEEL™</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">What We Collect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Contact information (name, email, company) for consultation scheduling</li>
                      <li>Billing information (via Stripe) for paid advisory services</li>
                      <li>Communication history (emails, meeting notes) for service delivery</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">What We Do NOT Collect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>STEEL assessment responses (processed client-side or recorded by you)</li>
                      <li>Strategic recommendations or advisory deliverables (owned by you)</li>
                      <li>Proprietary business information or trade secrets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.2 SocialCaution</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">What We Collect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Minimal account information (email for login, optional)</li>
                      <li>User preferences (theme, notification settings)</li>
                      <li>Anonymous aggregate statistics (opt-in only)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">What We Do NOT Collect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Privacy assessment responses (processed 100% client-side)</li>
                      <li>Personal data entered into assessments</li>
                      <li>Service usage details or persona detection results</li>
                      <li>Any identifiable information about your privacy posture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Data Storage:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>All assessment data stored locally in your browser (IndexedDB, localStorage)</li>
                      <li>Zero data transmission to ERMITS servers during assessments</li>
                      <li>You control all data; we have no access</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.3 TechnoSoluce™ (SBOM Analyzer)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">What We Do NOT Collect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>SBOM files or contents (processed 100% client-side)</li>
                      <li>Software component lists or dependency graphs</li>
                      <li>Vulnerability analysis results</li>
                      <li>Package metadata or software inventories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Data Flow:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>SBOM analysis performed entirely in your browser</li>
                      <li>Only component identifiers (public package names, versions) sent to vulnerability databases (OSV.dev, NIST NVD)</li>
                      <li>No proprietary information transmitted</li>
                      <li>Results stored locally in your browser only</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.4 CyberCertitude™ (CMMC Compliance)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2"><strong>Toolkit (localStorage-based):</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 mb-4">
                  <li><strong>No data collected:</strong> 100% local storage in browser</li>
                  <li><strong>No account required:</strong> Anonymous use</li>
                  <li><strong>No transmission:</strong> Zero data sent to ERMITS servers</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-200 mb-2"><strong>Level 1 & Level 2 Platform (Cloud-Enabled):</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Assessment responses encrypted with zero-knowledge E2EE</li>
                  <li>ERMITS cannot decrypt your compliance data</li>
                  <li>SSPs, POA&Ms, evidence files encrypted or stored locally</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Federal Contractor Privacy Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.495 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">12. Special Considerations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.1 Federal Contractor Privacy</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">For users handling Controlled Unclassified Information (CUI) or Federal Contract Information (FCI):</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Privacy-First Architecture Benefits:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>CUI/FCI processed client-side; never transmitted to ERMITS</li>
                    <li>Zero-knowledge encryption ensures ERMITS cannot access CUI/FCI</li>
                    <li>Local storage options eliminate cloud transmission of sensitive data</li>
                    <li>You maintain complete control over CUI/FCI data</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Your Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Properly mark and handle CUI/FCI according to NIST SP 800-171 and 32 CFR Part 2002</li>
                    <li>Use encryption features and self-managed deployment options for CUI/FCI</li>
                    <li>Implement appropriate access controls per DFARS requirements</li>
                    <li>Maintain audit logs for CUI/FCI access</li>
                    <li>Report cyber incidents as required by DFARS 252.204-7012 (within 72 hours to DoD)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">ERMITS Cannot:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Access or view CUI/FCI due to zero-knowledge architecture</li>
                    <li>Report cyber incidents on your behalf (you must report)</li>
                    <li>Determine if information qualifies as CUI/FCI (your responsibility)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">12.2 Healthcare Privacy (HIPAA)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">For healthcare organizations subject to HIPAA:</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Business Associate Agreement (BAA) Available:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Required for healthcare customers processing PHI</li>
                    <li>Contact: privacy@ermits.com to execute BAA</li>
                    <li>HIPAA-compliant infrastructure and safeguards</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">What We Do NOT Collect:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Unencrypted PHI (processed client-side)</li>
                    <li>Medical records or clinical data</li>
                    <li>Patient names or identifiers</li>
                    <li>Protected health information content</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Your Privacy Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">8. Your Privacy Rights</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Universal Rights (All Users)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Right to Access:</strong> Request a copy of all personal data we hold about you</li>
                  <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete personal data</li>
                  <li><strong>Right to Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to Data Portability:</strong> Export your data in machine-readable formats (JSON, CSV)</li>
                  <li><strong>Right to Restriction of Processing:</strong> Request limitation of processing in certain circumstances</li>
                  <li><strong>Right to Object:</strong> Object to processing based on legitimate interests, opt out of marketing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Additional Rights for EU/UK/Swiss Users (GDPR)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Right to withdraw consent at any time</li>
                  <li>Right to lodge a complaint with your local data protection authority</li>
                  <li>Legal basis for processing: Consent, Contract, Legitimate Interests, Legal Obligation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Additional Rights for California Residents (CCPA/CPRA)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Right to know what personal information is collected and how it's used</li>
                  <li>Right to delete personal information (subject to legal exceptions)</li>
                  <li>Right to opt-out of sale (ERMITS does not sell personal information)</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-200 mb-2">
                  <strong>How to Exercise Your Rights:</strong> Submit requests via email to{' '}
                  <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>{' '}
                  (Subject: "Privacy Rights Request") or through Account Settings → Privacy Rights.
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Response Timeline:</strong> Initial response within 10 business days, complete response within 45 days (may extend 45 days with notice for complex requests). First two requests per year are free.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Updates to Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">13. Updates to This Privacy Policy</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.1 Policy Updates</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">We may update this Privacy Policy periodically to reflect changes in data practices, legal or regulatory developments, technological improvements, or user feedback.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.2 Notification of Changes</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2"><strong>Material Changes:</strong> For significant changes affecting your rights, we provide 30 days' advance notice via email and in-app notification, with an option to export data and close account before changes take effect.</p>
                <p className="text-gray-600 dark:text-gray-200"><strong>Non-Material Changes:</strong> For clarifications, formatting, or minor updates, we update the "Last Updated" date and changes are effective immediately upon posting.</p>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">14. Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.1 Privacy Inquiries</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">General Privacy Questions:</h4>
                  <p className="text-gray-600 dark:text-gray-200">
                    Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-200">Subject: "Privacy Inquiry"</p>
                  <p className="text-gray-600 dark:text-gray-200">
                    Website: <a href="https://www.ermits.com/privacy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">www.ermits.com/privacy</a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Data Rights Requests:</h4>
                  <p className="text-gray-600 dark:text-gray-200">
                    Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-200">Subject: "Privacy Rights Request - [Type]"</p>
                  <p className="text-gray-600 dark:text-gray-200">
                    Online Form: <a href="https://www.ermits.com/privacy-request" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">www.ermits.com/privacy-request</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.2 Jurisdiction-Specific Contacts</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Data Protection Officer (EU/UK/Swiss):</h4>
                  <p className="text-gray-600 dark:text-gray-200">
                    Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-200">Subject: "GDPR Inquiry - DPO"</p>
                  <p className="text-gray-600 dark:text-gray-200">Handles: GDPR, UK GDPR, Swiss FADP matters</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">California Privacy Requests (CCPA/CPRA):</h4>
                  <p className="text-gray-600 dark:text-gray-200">
                    Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-200">Subject: "CCPA Request"</p>
                  <p className="text-gray-600 dark:text-gray-200">Handles: California consumer privacy rights</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">HIPAA Privacy Officer (Healthcare):</h4>
                  <p className="text-gray-600 dark:text-gray-200">
                    Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-200">Subject: "HIPAA Privacy Matter"</p>
                  <p className="text-gray-600 dark:text-gray-200">Handles: BAA requests, PHI concerns</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">14.3 Security Concerns</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  <strong>Security Issues or Data Breaches:</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Security Issue - [Urgent/Non-Urgent]"</p>
                <p className="text-gray-600 dark:text-gray-200">For vulnerabilities: contact@ermits.com (responsible disclosure)</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Effective Date and Acceptance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">15. Effective Date and Acceptance</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  <strong>Effective Date:</strong> October 31, 2025
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  <strong>Last Updated:</strong> November 19, 2025
                </p>
                <p className="text-gray-600 dark:text-gray-200 font-semibold">
                  By using ERMITS Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                </p>
                <p className="text-gray-600 dark:text-gray-200 mt-2">
                  If you do not agree with this Privacy Policy, you must discontinue use of all ERMITS Services immediately.
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
            <Link to="/terms">
              <Button variant="outline" size="sm">
                Terms of Service
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
