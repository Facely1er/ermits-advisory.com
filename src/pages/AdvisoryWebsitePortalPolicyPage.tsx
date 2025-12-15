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
            <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white">ERMITS ADVISORY SERVICES - COOKIE & PORTAL POLICY</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> December 15, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> December 15, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            This Cookie & Portal Policy explains how ERMITS LLC ("ERMITS," "we," "our," or "us") uses cookies, tracking technologies, and collects information when you visit the ERMITS Advisory Services website (advisory.ermits.com) or use our secure client portal. This policy should be read in conjunction with our Advisory Services Privacy Policy.
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
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.2 What This Policy Does NOT Cover</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">This policy does NOT cover:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>ERMITS software products and SaaS platforms (separate Cookie Policy applies)</li>
                  <li>Third-party websites linked from our website</li>
                  <li>Email communications (covered by Privacy Policy)</li>
                  <li>Engagement deliverables (covered by Terms of Service)</li>
                </ul>
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
                  <li>SDKs: Software development kits for mobile applications</li>
                  <li>Fingerprinting: Device and browser characteristic collection</li>
                  <li>Server Logs: Web server access and error logs</li>
                  <li>Analytics Tools: Website analytics and performance monitoring</li>
                  <li>Session Tokens: Authentication and session management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.2 How We Use Cookies</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We use cookies for the following purposes:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Essential Cookies (Always Active):</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Required for basic website and portal functionality:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Authentication and session management (client portal)</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and performance</li>
                      <li>User preference storage (language, theme selection)</li>
                      <li>Form submission and inquiry handling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Performance Cookies (Optional):</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Help us improve service performance:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Page load time measurement</li>
                      <li>Error tracking and debugging (Sentry)</li>
                      <li>Feature usage analytics</li>
                      <li>Service optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Analytics Cookies (Optional):</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Help us understand how visitors use our website:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>User behavior patterns (PostHog with differential privacy)</li>
                      <li>Page views and navigation patterns</li>
                      <li>Time spent on pages</li>
                      <li>Popular content and resources</li>
                      <li>Popular features and pages</li>
                      <li>User journey analysis</li>
                      <li>Conversion tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Functional Cookies (Optional):</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Enable enhanced functionality:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Remember your preferences and settings</li>
                      <li>Remember form field entries (for convenience)</li>
                      <li>Enable resource downloads and content access</li>
                      <li>Personalize user experience</li>
                      <li>Enable integrations with third-party services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Marketing Cookies (Opt-In Required):</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Used for marketing and advertising (with your consent):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Track conversions from marketing campaigns</li>
                      <li>Measure effectiveness of advertising</li>
                      <li>Enable targeted content recommendations</li>
                      <li>Support retargeting campaigns</li>
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
                <h3 className="text-xl font-semibold mb-3 dark:text-white">3.1 Advisory Services Website Cookies</h3>
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Cookie Name</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Provider</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Purpose</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Type</th>
                        <th className="text-left py-3 px-4 font-semibold dark:text-white">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ermits_session</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Session management</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Essential</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Session</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ermits_consent</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Cookie consent preferences</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Essential</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 year</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ermits_language</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Language preference</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Functional</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 year</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">theme</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">UI theme preference (light/dark)</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Functional</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 year</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">_ga</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Google Analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Website analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">2 years</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">_gid</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Google Analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Website analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">24 hours</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">phc_***</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">PostHog</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Anonymous analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Analytics</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 year</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">sentry-session</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Sentry</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Error tracking session</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Performance</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <strong>Note:</strong> Cookie names and specifics may change. This table represents typical cookies; actual implementation may vary by product.
                </p>
              </div>
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
                <div className="mt-3">
                  <h4 className="font-semibold mb-2 dark:text-white">Security Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>All authentication cookies are HTTP-only (not accessible to JavaScript)</li>
                    <li>Secure flag set (transmitted only over HTTPS)</li>
                    <li>SameSite attribute set to prevent CSRF attacks</li>
                    <li>Automatic expiration and renewal</li>
                    <li>Encrypted values for sensitive cookie data</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">3.3 Server Logs</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">What We Log:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Timestamp of access</li>
                      <li>IP address (anonymized after 90 days)</li>
                      <li>HTTP method and requested URL</li>
                      <li>HTTP response status code</li>
                      <li>User agent (browser and operating system)</li>
                      <li>Referrer (previous page)</li>
                      <li>Error messages and stack traces (for debugging)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Log Retention:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Active logs: 90 days</li>
                      <li>Archived logs (anonymized): 1 year</li>
                      <li>Access restricted to security and engineering teams</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Use of Logs:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Security monitoring and threat detection</li>
                      <li>Performance optimization</li>
                      <li>Error debugging and troubleshooting</li>
                      <li>Usage statistics (anonymized)</li>
                      <li>Fraud prevention</li>
                    </ul>
                  </div>
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
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.2 Managing Cookie Preferences</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">On ERMITS Website:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Access cookie preferences anytime via footer link</li>
                      <li>Navigate to: Cookie Settings or Preferences</li>
                      <li>Toggle cookie categories on/off (except essential)</li>
                      <li>Save changes (takes effect immediately)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Browser Controls:</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Most browsers allow cookie management:</p>
                    <div className="space-y-2">
                      <div>
                        <h5 className="font-semibold mb-1 dark:text-white">Block All Cookies:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                          <li>May prevent website functionality</li>
                          <li>Client portal will not function without essential cookies</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 dark:text-white">Block Third-Party Cookies:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                          <li>Reduces third-party tracking</li>
                          <li>Recommended for privacy</li>
                          <li>May affect some features (analytics, marketing)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 dark:text-white">Delete Cookies:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                          <li>Clear existing cookies</li>
                          <li>Resets preferences (consent banner reappears)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.3 Browser-Specific Instructions</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600 dark:text-gray-200"><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</p>
                  <p className="text-gray-600 dark:text-gray-200"><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</p>
                  <p className="text-gray-600 dark:text-gray-200"><strong>Safari:</strong> Preferences → Privacy → Cookies and Website Data</p>
                  <p className="text-gray-600 dark:text-gray-200"><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and data stored</p>
                  <p className="text-gray-600 dark:text-gray-200"><strong>Mobile Browsers:</strong> iOS Safari: Settings → Safari → Block All Cookies | Android Chrome: Settings → Site Settings → Cookies</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 5: Third-Party Services and Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">5. THIRD-PARTY SERVICES AND INTEGRATIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.1 Third-Party Service Providers</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Supabase (Authentication & Database):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Purpose:</strong> User authentication and session management</li>
                      <li><strong>Privacy:</strong> Essential for service functionality</li>
                      <li><strong>Control:</strong> Required for service use; cannot be disabled</li>
                      <li><strong>Data Collected:</strong> Email, encrypted client data, session information</li>
                      <li><strong>Location:</strong> US or EU (client choice for portal data residency)</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://supabase.com/privacy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://supabase.com/privacy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Google Analytics:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Purpose:</strong> Website traffic analysis and visitor behavior</li>
                      <li><strong>Data Collected:</strong> Page views, sessions, demographics, interests, device info</li>
                      <li><strong>Privacy:</strong> IP anonymization enabled, data retention set to 26 months</li>
                      <li><strong>Opt-Out:</strong> Use Google Analytics Opt-out Browser Add-on or disable analytics cookies</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">PostHog (Analytics):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Purpose:</strong> Anonymous usage analytics with differential privacy</li>
                      <li><strong>Privacy:</strong> Cannot identify individual users</li>
                      <li><strong>Control:</strong> Can be disabled in privacy settings (opt-out)</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://posthog.com/privacy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://posthog.com/privacy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Sentry (Error Tracking):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Purpose:</strong> Monitor application errors and performance</li>
                      <li><strong>Privacy:</strong> Automatically scrubs PII from error reports</li>
                      <li><strong>Control:</strong> Can be disabled in privacy settings</li>
                      <li><strong>Data Collected:</strong> Error messages (PII automatically scrubbed), user actions leading to errors</li>
                      <li><strong>Data Retention:</strong> 90 days</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://sentry.io/privacy/" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://sentry.io/privacy/</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Stripe (Payment Processing):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Purpose:</strong> Payment processing and fraud prevention</li>
                      <li><strong>Privacy:</strong> Handles payment information securely</li>
                      <li><strong>Control:</strong> Required for payment functionality</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://stripe.com/privacy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">HubSpot (Marketing Automation):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Purpose:</strong> Lead management, form submissions, marketing campaigns</li>
                      <li><strong>Data Collected:</strong> Contact information (name, email, company), form submissions, page views</li>
                      <li><strong>Privacy:</strong> GDPR-compliant, data processing agreement in place</li>
                      <li><strong>Opt-Out:</strong> Disable marketing cookies, unsubscribe from emails</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://legal.hubspot.com/privacy-policy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://legal.hubspot.com/privacy-policy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Vercel (Hosting & CDN):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Purpose:</strong> Content delivery and performance optimization</li>
                      <li><strong>Privacy:</strong> Standard web server logs</li>
                      <li><strong>Control:</strong> Required for service delivery</li>
                      <li><strong>Privacy Policy:</strong> <a href="https://vercel.com/legal/privacy-policy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">5.2 Third-Party Cookie Control</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">We Contractually Require Third Parties To:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Use data only for specified purposes (supporting our services)</li>
                      <li>Implement appropriate security measures</li>
                      <li>Comply with applicable privacy laws (GDPR, CCPA)</li>
                      <li>Respect user opt-out preferences</li>
                      <li>Delete data when no longer needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">You Can Control Third-Party Cookies:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Use browser settings to block third-party cookies</li>
                      <li>Use privacy-focused browser extensions (Privacy Badger, uBlock Origin)</li>
                      <li>Opt out via Digital Advertising Alliance: <a href="http://optout.aboutads.info" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">http://optout.aboutads.info</a></li>
                      <li>Opt out via Network Advertising Initiative: <a href="http://optout.networkadvertising.org" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 6: Do Not Track (DNT) and Global Privacy Control (GPC) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.47 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">6. DO NOT TRACK (DNT) AND GLOBAL PRIVACY CONTROL (GPC)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.1 Do Not Track Support</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">ERMITS Respects DNT Signals:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>When browser DNT is enabled, we disable optional analytics and marketing cookies</li>
                      <li>Essential cookies remain active (required for portal functionality)</li>
                      <li>No behavioral tracking or profiling when DNT enabled</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Enabling DNT:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                      <li><strong>Firefox:</strong> Settings → Privacy & Security → Send websites a "Do Not Track" signal</li>
                      <li><strong>Safari:</strong> Preferences → Privacy → Prevent cross-site tracking (enabled by default)</li>
                      <li><strong>Edge:</strong> Settings → Privacy, Search, and Services → Send "Do Not Track" requests</li>
                      <li><strong>Chrome:</strong> Not supported (use cookie controls instead)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.2 Global Privacy Control (GPC)</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">GPC Support:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>We honor Global Privacy Control signals as an opt-out preference under CCPA</li>
                      <li>GPC automatically disables non-essential cookies</li>
                      <li>Available via browser extensions or privacy-focused browsers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Enabling GPC:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Install GPC browser extension: <a href="https://globalprivacycontrol.org" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://globalprivacycontrol.org</a></li>
                      <li>Use privacy-focused browsers with built-in GPC (Brave, DuckDuckGo, Firefox with extension)</li>
                    </ul>
                  </div>
                </div>
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
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.3 Portal Usage Tracking</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">What We Track (Client Portal):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Login/logout events and timestamps</li>
                      <li>Document access and downloads</li>
                      <li>Page views within portal</li>
                      <li>Feature usage (anonymized)</li>
                      <li>Error events and performance issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Purpose:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Security monitoring and anomaly detection</li>
                      <li>Audit trail for compliance</li>
                      <li>Portal performance optimization</li>
                      <li>User support and troubleshooting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Privacy Protections:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Tracking limited to portal activity only</li>
                      <li>No cross-site tracking or profiling</li>
                      <li>Data used only for security and support</li>
                      <li>Client administrators may review access logs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.4 Local Storage and IndexedDB</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Privacy-First Local Storage:</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS products extensively use browser local storage (localStorage, IndexedDB) for Privacy-First Architecture:</p>
                    <div className="space-y-2">
                      <div>
                        <h5 className="font-semibold mb-1 dark:text-white">Purpose:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                          <li>Store assessment data locally (never transmitted to servers)</li>
                          <li>Enable offline functionality</li>
                          <li>Reduce server data storage</li>
                          <li>Provide faster performance</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 dark:text-white">Privacy Benefits:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                          <li><strong>Data stays local:</strong> Your data remains on your device</li>
                          <li><strong>No server transmission:</strong> ERMITS doesn't access local storage data</li>
                          <li><strong>User control:</strong> You can clear local storage anytime</li>
                          <li><strong>Encryption option:</strong> Sensitive data can be encrypted locally</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1 dark:text-white">Managing Local Storage:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 text-sm">
                          <li><strong>Clear Local Storage:</strong> Account Settings → Data → Clear Local Data</li>
                          <li><strong>Browser Settings:</strong> Developer Tools → Application → Storage → Clear</li>
                          <li><strong>Warning:</strong> Clearing local storage deletes locally-stored assessments and data</li>
                          <li><strong>Backup:</strong> Export data before clearing: Account Settings → Export Data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 8: Privacy by Design for Advisory Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">8. PRIVACY BY DESIGN FOR ADVISORY SERVICES</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.1 Minimal Data Collection</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Website:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Anonymous browsing supported (no account required)</li>
                      <li>Contact forms collect only necessary information</li>
                      <li>No tracking of individual browsing behavior for marketing</li>
                      <li>Resource downloads do not require email (for public content)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Client Portal:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Data collection limited to engagement-related activities</li>
                      <li>No unnecessary profiling or behavioral tracking</li>
                      <li>Client controls data retention and deletion</li>
                      <li>Export all portal data anytime (JSON, CSV)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.2 Data Minimization Practices</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">We Do NOT Collect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Browsing history across other websites</li>
                      <li>Granular location data (only country-level for analytics)</li>
                      <li>Personal data from cookies (authentication tokens only)</li>
                      <li>Sensitive personal information via website forms</li>
                      <li>PII in cookies (names, emails, addresses not stored in cookies)</li>
                      <li>Sensitive data in cookies (passwords, financial info, CUI/FCI)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">We Do Collect (Minimally):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Contact information you provide via forms (name, email, company, phone)</li>
                      <li>Aggregated website analytics (page views, popular content)</li>
                      <li>Client portal activity for security and audit purposes</li>
                      <li>Technical information (browser, OS, device type) for support</li>
                      <li>Session tokens only for authentication</li>
                      <li>Hashed identifiers for analytics (cannot be reverse-engineered)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.3 Privacy-First Architecture</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">Due to Privacy-First Architecture:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>No tracking cookies</strong> for advertising or marketing</li>
                  <li><strong>No cross-site tracking</strong> or profiling</li>
                  <li><strong>Minimal essential cookies</strong> only for functionality</li>
                  <li><strong>Local processing</strong> reduces need for server-side cookies</li>
                  <li><strong>Pseudonymized analytics</strong> cannot identify individual users</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">8.4 Transparency and Control</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">You Can:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>View and manage cookie preferences anytime</li>
                  <li>Access all data we hold about you</li>
                  <li>Export your data in machine-readable format</li>
                  <li>Delete your account and data</li>
                  <li>Opt out of marketing and analytics</li>
                  <li>Contact us with privacy questions: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a></li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 9: International Privacy Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.54 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">9. INTERNATIONAL PRIVACY CONSIDERATIONS</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.1 GDPR Compliance (EU/UK/Switzerland)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For visitors and clients in the European Economic Area, United Kingdom, or Switzerland:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Cookie Consent:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Explicit consent required before setting non-essential cookies</li>
                      <li>Granular control over cookie categories</li>
                      <li>Easy withdrawal of consent anytime</li>
                      <li>Pre-checked boxes prohibited (opt-in required)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Legal Basis for Cookies:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li><strong>Essential Cookies:</strong> Necessary for service provision (GDPR Art. 6(1)(b))</li>
                      <li><strong>Analytics Cookies:</strong> Legitimate interests (GDPR Art. 6(1)(f)) or consent</li>
                      <li><strong>Marketing Cookies:</strong> Explicit consent (GDPR Art. 6(1)(a))</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Rights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Access cookie data collected about you</li>
                      <li>Request deletion of cookie data</li>
                      <li>Object to cookie-based processing</li>
                      <li>Lodge complaint with supervisory authority</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Data Protection Authority:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Contact your local DPA: <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/about-edpb/board/members_en</a></li>
                      <li>ERMITS DPO: <a href="mailto:dpo@ermits.com" className="text-navy dark:text-silver hover:underline">dpo@ermits.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.2 CCPA Compliance (California)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For California residents:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Know:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Categories of personal information collected via cookies</li>
                      <li>Categories of third parties with whom we share cookie data</li>
                      <li>Business purposes for cookie use</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Opt-Out:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Opt out of "sale" of personal information (we do not sell)</li>
                      <li>Opt out of sharing for targeted advertising (disable marketing cookies)</li>
                      <li>Use GPC to automatically signal opt-out preference</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Right to Limit:</h4>
                    <p className="text-gray-600 dark:text-gray-200 ml-4">Limit use of sensitive personal information (none collected via cookies)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Non-Discrimination:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Equal service regardless of cookie preferences</li>
                      <li>No penalty for disabling optional cookies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Submit Requests:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a> (Subject: "CCPA Request - Cookies")</li>
                      <li>Online: Cookie Settings → Exercise Your Rights</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.3 Other Jurisdictions</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600 dark:text-gray-200"><strong>Canada (PIPEDA):</strong> Express consent for non-essential cookies. Opt-out available anytime. Office of the Privacy Commissioner: <a href="https://www.priv.gc.ca" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://www.priv.gc.ca</a></p>
                  <p className="text-gray-600 dark:text-gray-200"><strong>Brazil (LGPD):</strong> Cookie consent required similar to GDPR. Rights to access, delete, and object.</p>
                  <p className="text-gray-600 dark:text-gray-200"><strong>Australia (Privacy Act):</strong> Australian Privacy Principles (APPs) apply. Reasonable notice and opt-out for cookies.</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 10: Website Analytics and Reporting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">10. WEBSITE ANALYTICS AND REPORTING</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.1 Analytics Data Collection</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">What We Track:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li><strong>Page Views:</strong> Which pages are visited and how often</li>
                      <li><strong>Traffic Sources:</strong> How visitors find our website (search, referral, direct)</li>
                      <li><strong>Demographics:</strong> Country, language, browser, device type (aggregated)</li>
                      <li><strong>User Flow:</strong> Navigation patterns through website</li>
                      <li><strong>Conversions:</strong> Form submissions, resource downloads, contact requests</li>
                      <li><strong>Performance:</strong> Page load times, errors, bounce rates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Privacy Protections:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li><strong>IP Anonymization:</strong> Last octet removed before storage</li>
                      <li><strong>Data Minimization:</strong> No granular personal data collected</li>
                      <li><strong>Aggregation:</strong> Reports show aggregate trends, not individual behavior</li>
                      <li><strong>Retention Limits:</strong> Analytics data retained 26 months maximum</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">10.2 How We Use Analytics</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Website Optimization:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Improve user experience and navigation</li>
                      <li>Identify popular content and resources</li>
                      <li>Fix broken links and errors</li>
                      <li>Optimize page performance and load times</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Content Strategy:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Understand which topics are most valuable to visitors</li>
                      <li>Develop new resources based on interest</li>
                      <li>Tailor messaging to audience needs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Marketing Effectiveness:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Measure campaign performance</li>
                      <li>Understand lead sources and quality</li>
                      <li>Optimize marketing spend and strategy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">We Do NOT Use Analytics For:</h4>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                        <li>Individual profiling or targeting</li>
                        <li>Behavioral manipulation</li>
                        <li>Selling data to third parties</li>
                        <li>Invasive tracking or surveillance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 11: Security of Cookies and Website Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">11. SECURITY OF COOKIES AND WEBSITE DATA</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.1 Cookie Security Measures</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Technical Safeguards:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li><strong>HTTPS Only:</strong> All cookies transmitted over encrypted connections</li>
                      <li><strong>Secure Flag:</strong> Cookies sent only over HTTPS</li>
                      <li><strong>HTTP-Only Flag:</strong> Authentication cookies inaccessible to JavaScript (prevents XSS)</li>
                      <li><strong>SameSite Attribute:</strong> Cookies sent only to same-site requests (prevents CSRF)</li>
                      <li><strong>Short Expiration:</strong> Session cookies expire quickly (1-4 hours)</li>
                      <li><strong>Encrypted Values:</strong> Sensitive cookie values are encrypted</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Cookie Security Risks:</h4>
                    <p className="text-gray-600 dark:text-gray-200 mb-2">Be aware of cookie-related security risks:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li><strong>Session Hijacking:</strong> Attackers stealing session cookies</li>
                      <li><strong>XSS Attacks:</strong> Malicious scripts accessing cookies</li>
                      <li><strong>CSRF Attacks:</strong> Unauthorized actions using your cookies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Protect Yourself:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Use strong, unique passwords for client portal</li>
                      <li>Enable multi-factor authentication (MFA)</li>
                      <li>Log out when finished (especially on shared devices)</li>
                      <li>Clear cookies on public/shared computers</li>
                      <li>Keep browser and OS updated</li>
                      <li>Use antivirus and security software</li>
                      <li>Be cautious of phishing emails</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.2 Portal Security</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Infrastructure Security:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>SOC 2 Type II compliant hosting (Supabase)</li>
                      <li>DDoS protection and Web Application Firewall (WAF)</li>
                      <li>Regular vulnerability scanning and penetration testing</li>
                      <li>24/7 security monitoring and alerting</li>
                      <li>Intrusion detection and prevention (IDS/IPS)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Application Security:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Secure coding practices (OWASP Top 10)</li>
                      <li>Input validation and output encoding</li>
                      <li>SQL injection prevention (parameterized queries)</li>
                      <li>XSS protection (Content Security Policy)</li>
                      <li>CSRF protection (anti-CSRF tokens)</li>
                      <li>Regular security updates and patches</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.3 Protecting Yourself</h3>
                <h4 className="font-semibold mb-2 dark:text-white">Best Practices:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Use strong, unique passwords for client portal</li>
                  <li>Enable multi-factor authentication (MFA)</li>
                  <li>Log out when finished (especially on shared devices)</li>
                  <li>Clear cookies on public/shared computers</li>
                  <li>Keep browser and OS updated</li>
                  <li>Use antivirus and security software</li>
                  <li>Be cautious of phishing emails</li>
                  <li>Report suspicious activity immediately</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 12: Children's Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">12. CHILDREN'S PRIVACY</h2>
            <p className="text-gray-600 dark:text-gray-200">
              ERMITS Advisory Services are business-to-business professional services not directed at children under 18. We do not knowingly collect information from children under 18 via our website or portal.
            </p>
            <p className="text-gray-600 dark:text-gray-200 mt-3">
              If we learn we have inadvertently collected information from a child under 18, we will delete it immediately. Parents or guardians may contact <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a> if they believe a child has provided information to us.
            </p>
          </Card>
        </motion.div>

        {/* Section 13: Updates to This Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">13. UPDATES TO THIS POLICY</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.1 Policy Changes</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">We may update this policy to reflect:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>New website features or technologies</li>
                  <li>Changes in cookie usage</li>
                  <li>Legal or regulatory developments</li>
                  <li>Industry best practices</li>
                  <li>User feedback</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.2 Notification of Changes</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Material Changes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>30 days' advance notice via website banner</li>
                      <li>Email notification to active clients</li>
                      <li>Updated cookie consent banner on first visit</li>
                      <li>Opportunity to review and adjust preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Non-Material Changes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Update "Last Updated" date</li>
                      <li>Effective immediately upon posting</li>
                      <li>Notice in footer of website</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">13.3 Version History</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Previous versions available upon request: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200 mt-2">
                  <strong>Current Version:</strong> 1.0 (November 2025)
                </p>
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
                <h3 className="font-semibold mb-2 dark:text-white">Cookie Preferences:</h3>
                <p className="text-gray-600 dark:text-gray-200">Website Footer → Cookie Settings</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Data Protection Officer (EU/UK/Swiss):</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:dpo@ermits.com" className="text-navy dark:text-silver hover:underline">dpo@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Cookie GDPR Inquiry - Advisory Services"</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">California Privacy Requests (CCPA):</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "CCPA Cookie Request"</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Technical Support:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:support@ermits.com" className="text-navy dark:text-silver hover:underline">support@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Website or Portal Technical Issue"</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">For general inquiries:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver hover:underline">advisory@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  Website: <a href="https://advisory.ermits.com" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">https://advisory.ermits.com</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Mailing Address:</h3>
                <p className="text-gray-600 dark:text-gray-200">ERMITS LLC - Advisory Services</p>
                <p className="text-gray-600 dark:text-gray-200">[Physical Address to be inserted]</p>
                <p className="text-gray-600 dark:text-gray-200">Attn: Privacy Team</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Section 15: Effective Date and Acceptance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.64 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">15. EFFECTIVE DATE AND ACCEPTANCE</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-2">
              <strong>Effective Date:</strong> December 15, 2025
            </p>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              <strong>Last Updated:</strong> December 15, 2025
            </p>
            <p className="text-gray-600 dark:text-gray-200">
              <strong>By using the ERMITS Advisory Services website or client portal, you acknowledge that you have read and understood this Cookie & Portal Policy.</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-200 mt-3">
              You can manage your cookie preferences at any time via the Cookie Settings link in the website footer or by contacting <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>.
            </p>
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

