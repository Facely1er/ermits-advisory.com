import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvisoryWebsitePortalPolicyPage: React.FC = () => {
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
            <Cookie size={32} className="mr-3 text-navy dark:text-silver" />
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">ERMITS ADVISORY SERVICES - WEBSITE AND CLIENT PORTAL POLICY</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> November 19, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> November 19, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            This Website and Client Portal Policy explains how ERMITS LLC ("ERMITS," "we," "our," or "us") uses cookies, tracking technologies, and collects information when you visit the ERMITS Advisory Services website (advisory.ermits.com) or use our secure client portal. This policy should be read in conjunction with our Advisory Services Privacy Policy.
          </p>
        </motion.div>

        {/* Section 1: Scope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">1. SCOPE AND APPLICABILITY</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.1 Services Covered</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">This policy applies to:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Advisory Services Website:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Public-facing website at advisory.ermits.com</li>
                      <li>Service description pages</li>
                      <li>Resource library and thought leadership content</li>
                      <li>Contact and inquiry forms</li>
                      <li>Blog and news sections</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Client Portal:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Secure client portal for engagement management</li>
                      <li>Document sharing and collaboration platform</li>
                      <li>Project status tracking and communications</li>
                      <li>Deliverable access and review</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 2: Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2. COOKIES AND SIMILAR TECHNOLOGIES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.1 What Are Cookies?</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  Cookies are small text files stored on your device (computer, tablet, smartphone) when you visit websites. Cookies enable websites to remember your actions and preferences over time.
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-3">This policy also covers:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Local Storage: Browser-based storage (localStorage, IndexedDB)</li>
                  <li>Session Storage: Temporary storage cleared when browser closes</li>
                  <li>Web Beacons (Pixels): Small graphics that track page views</li>
                  <li>Server Logs: Web server access and error logs</li>
                  <li>Session Tokens: Authentication and session management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.2 How We Use Cookies</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Essential Cookies (Always Active):</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Required for basic website and portal functionality:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Authentication and session management (client portal)</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and performance</li>
                      <li>User preference storage (language, theme selection)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Analytics Cookies (Optional):</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Help us understand how visitors use our website:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>User behavior patterns (PostHog with differential privacy)</li>
                      <li>Page views and navigation patterns</li>
                      <li>Popular content and resources</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="font-semibold mb-2 dark:text-white">We Do NOT Use:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Third-party advertising networks</li>
                    <li>Cross-site tracking for profiling</li>
                    <li>Cookies to sell your data</li>
                    <li>Tracking cookies for advertising or marketing (Privacy-First Architecture)</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 3: Specific Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">3. SPECIFIC COOKIES AND TECHNOLOGIES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">3.2 Client Portal Cookies</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Cookie Name</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Provider</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Purpose</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">sb-access-token</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Supabase</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Authentication</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 hour</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">sb-refresh-token</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Supabase</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Session renewal</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">30 days</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">portal_session</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Session management</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">4 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 4: Cookie Consent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">4. COOKIE CONSENT AND MANAGEMENT</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.1 Cookie Consent Banner</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  When you first visit our website, a cookie consent banner is displayed with options to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Accept All: Enable all cookies</li>
                  <li>Reject Non-Essential: Only essential cookies enabled</li>
                  <li>Customize: Choose specific cookie categories</li>
                  <li>Save preferences (stored in consent cookie)</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 7: Client Portal Specific */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">7. CLIENT PORTAL SPECIFIC PROVISIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.1 Client Portal Authentication</h3>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Secure Authentication:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Multi-factor authentication (MFA) required for all portal users</li>
                    <li>Strong password requirements (minimum 16 characters)</li>
                    <li>Session timeout after 4 hours of inactivity</li>
                    <li>Automatic logout after 12 hours maximum</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.2 Portal Data Protection</h3>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Encryption:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>All data transmitted over TLS 1.3</li>
                    <li>Files encrypted at rest (AES-256)</li>
                    <li>End-to-end encryption available for sensitive deliverables</li>
                    <li>Zero-knowledge architecture option (client-controlled encryption keys)</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 14: Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">14. CONTACT INFORMATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Cookie and Website Privacy Questions:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Website Cookie Policy Inquiry"</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Data Protection Officer (EU/UK/Swiss):</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:dpo@ermits.com" className="text-navy dark:text-silver hover:underline">dpo@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Cookie GDPR Inquiry - Advisory Services"</p>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

