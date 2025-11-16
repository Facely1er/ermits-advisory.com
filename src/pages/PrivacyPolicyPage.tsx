import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Shield, Mail, ArrowLeft, Database, Eye, Lock, Globe, UserCheck
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
            <strong>Effective Date:</strong> October 31, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> October 31, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            ERMITS LLC ("ERMITS," "we," "our," or "us") is committed to protecting your privacy through a Privacy-First Architecture that ensures you maintain control over your data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our Services.
          </p>
          <p className="text-gray-600 dark:text-gray-200 mt-4">
            By using our Services, you consent to the data practices described in this policy. If you do not agree with this Privacy Policy, please do not use our Services.
          </p>
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
                <h2 className="text-2xl font-bold mb-4">1. Privacy-First Architecture Overview</h2>
                <p className="text-silver mb-4">
                  ERMITS implements Privacy-First Architecture built on five fundamental principles:
                </p>
                <div className="space-y-4 text-silver">
                  <div>
                    <h3 className="font-semibold text-white mb-2">1. Client-Side Processing</h3>
                    <p>All core computational functions (security assessments, SBOM analysis, risk scoring, compliance evaluations) are performed locally within your browser or self-managed environment whenever technically feasible. Your data remains under your control throughout the analysis process.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">2. Data Sovereignty Options</h3>
                    <p>You choose where your data resides: Local-Only Mode, Self-Managed Cloud, ERMITS-Managed Cloud, or Hybrid Deployment.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">3. Zero-Knowledge Encryption</h3>
                    <p>When using ERMITS-managed cloud features with encryption enabled, data is encrypted client-side using AES-256-GCM. ERMITS cannot decrypt, access, or view your encrypted data.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">4. Data Minimization</h3>
                    <p>We collect only the minimum data necessary for service functionality. We never collect raw SBOM files, assessment content, CUI, FCI, vulnerability findings, or proprietary business information.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">5. Transparency and Control</h3>
                    <p>You have complete control over your data: export all data at any time, delete all data permanently, opt in or opt out of telemetry collection, and choose your deployment model.</p>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.1 Information You Provide Directly</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">When you create an account or subscribe to paid features, we collect:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Company name and job title (optional)</li>
                  <li>Billing information (processed by Stripe, not stored by ERMITS)</li>
                  <li>Password (cryptographically hashed, never stored in plaintext)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.2 Information We Do NOT Collect</h3>
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
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.3 Automatically Collected Information</h3>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">3. How We Use Information</h2>
            
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">4. Information Sharing and Disclosure</h2>
            
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">5. Data Security Measures</h2>
            
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">6. Data Retention</h2>
            
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">8. International Data Transfers</h2>
            
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">9. Children's Privacy</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.1 Age Restrictions</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">The Services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we learn that we have collected personal information from a child under 18, we will delete the information as quickly as possible.</p>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">10. Federal Contractor Privacy Considerations</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.1 CUI and FCI Handling</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For users handling Controlled Unclassified Information (CUI) or Federal Contract Information (FCI):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>CUI/FCI is processed client-side and never transmitted to ERMITS</li>
                  <li>Zero-knowledge encryption ensures ERMITS cannot access CUI/FCI</li>
                  <li>Local storage options eliminate cloud transmission of sensitive data</li>
                  <li>Users maintain complete control over CUI/FCI data</li>
                </ul>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">7. Your Privacy Rights</h2>
            
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">11. Updates to This Privacy Policy</h2>
            
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">12. Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Privacy Inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Privacy Inquiry"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Data Rights Requests:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Privacy Rights Request"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Data Protection Officer (EU/UK/Swiss):</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "GDPR Inquiry"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">California Privacy Requests:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "CCPA Request"</p>
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
