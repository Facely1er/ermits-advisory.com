import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Settings, Eye, BarChart3, Shield, 
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookiePolicyPage: React.FC = () => {

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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Cookie Policy</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Effective Date:</strong> October 31, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Last Updated:</strong> December 13, 2025
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            This Cookie Policy explains how ERMITS LLC ("ERMITS," "we," "our," or "us") uses cookies and similar technologies when you use our Services. This policy should be read in conjunction with our Privacy Policy.
          </p>
        </motion.div>

        {/* What Are Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">1. What Are Cookies?</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.1 Definition</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Cookies are small text files stored on your device (computer, tablet, smartphone) when you visit websites or use applications. Cookies enable websites to remember your actions and preferences over time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.2 Similar Technologies</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">This policy also covers similar technologies including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Local Storage:</strong> Browser-based storage (localStorage, IndexedDB)</li>
                  <li><strong>Session Storage:</strong> Temporary storage cleared when browser closes</li>
                  <li><strong>Web Beacons (Pixels):</strong> Small graphics that track page views</li>
                  <li><strong>SDKs:</strong> Software development kits for mobile applications</li>
                  <li><strong>Fingerprinting:</strong> Device and browser characteristic collection</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* How We Use Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2. How We Use Cookies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.1 Cookie Categories</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center mb-2">
                      <Shield size={20} className="text-green-600 dark:text-green-400 mr-2" />
                      <h4 className="font-semibold dark:text-white">Essential Cookies (Always Active)</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-200 text-sm mb-2">Required for basic service functionality:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>Authentication and session management</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and performance</li>
                      <li>User preference storage (language, theme)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center mb-2">
                      <BarChart3 size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <h4 className="font-semibold dark:text-white">Performance Cookies (Optional)</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-200 text-sm mb-2">Help us improve service performance:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>Page load time measurement</li>
                      <li>Error tracking and debugging (Sentry)</li>
                      <li>Feature usage analytics</li>
                      <li>Service optimization</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center mb-2">
                      <Eye size={20} className="text-purple-600 dark:text-purple-400 mr-2" />
                      <h4 className="font-semibold dark:text-white">Analytics Cookies (Optional)</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-200 text-sm mb-2">Help us understand how Services are used:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>User behavior patterns (PostHog with differential privacy)</li>
                      <li>Popular features and pages</li>
                      <li>User journey analysis</li>
                      <li>Conversion tracking</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center mb-2">
                      <Settings size={20} className="text-orange-600 dark:text-orange-400 mr-2" />
                      <h4 className="font-semibold dark:text-white">Functional Cookies (Optional)</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-200 text-sm mb-2">Enable enhanced functionality:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>Remember settings and preferences</li>
                      <li>Personalize user experience</li>
                      <li>Enable integrations with third-party services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Specific Cookies We Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">3. Specific Cookies We Use</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Cookie Name</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Provider</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Type</th>
                    <th className="text-left py-3 px-4 font-semibold dark:text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">sb-access-token</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Supabase</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Authentication</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Essential</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 hour</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">sb-refresh-token</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Supabase</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Session renewal</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Essential</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">30 days</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">theme</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">UI theme preference (light/dark)</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Functional</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 year</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">language</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Language preference</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Functional</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 year</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">consent</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Cookie consent preferences</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Essential</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 year</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">phc_***</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">PostHog</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Anonymous analytics</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Analytics</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">sentry-session</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Sentry</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Error tracking session</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Performance</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 dark:text-gray-200 text-sm mt-4 italic">
              <strong>Note:</strong> Cookie names and specifics may change. This table represents typical cookies; actual implementation may vary by product.
            </p>
          </Card>
        </motion.div>

        {/* Third-Party Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">4. Third-Party Cookies</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">4.1 Third-Party Service Providers</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">We use third-party services that may set cookies:</p>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Supabase (Authentication & Database)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>Purpose: User authentication and session management</li>
                      <li>Privacy: Essential for service functionality</li>
                      <li>Control: Required for service use; cannot be disabled</li>
                      <li>More info: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-navy dark:text-silver hover:underline">https://supabase.com/privacy</a></li>
                    </ul>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Sentry (Error Tracking)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>Purpose: Monitor application errors and performance</li>
                      <li>Privacy: Automatically scrubs PII from error reports</li>
                      <li>Control: Can be disabled in privacy settings</li>
                      <li>More info: <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-navy dark:text-silver hover:underline">https://sentry.io/privacy/</a></li>
                    </ul>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">PostHog (Analytics)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>Purpose: Anonymous usage analytics with differential privacy</li>
                      <li>Privacy: Cannot identify individual users</li>
                      <li>Control: Can be disabled in privacy settings (opt-out)</li>
                      <li>More info: <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-navy dark:text-silver hover:underline">https://posthog.com/privacy</a></li>
                    </ul>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Stripe (Payment Processing)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>Purpose: Payment processing and fraud prevention</li>
                      <li>Privacy: Handles payment information securely</li>
                      <li>Control: Required for payment functionality</li>
                      <li>More info: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-navy dark:text-silver hover:underline">https://stripe.com/privacy</a></li>
                    </ul>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Vercel (Hosting & CDN)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 text-sm ml-4">
                      <li>Purpose: Content delivery and performance optimization</li>
                      <li>Privacy: Standard web server logs</li>
                      <li>Control: Required for service delivery</li>
                      <li>More info: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-navy dark:text-silver hover:underline">https://vercel.com/legal/privacy-policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Privacy-First Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <h2 className="text-2xl font-bold mb-4">5. Cookies and Privacy-First Architecture</h2>
            
            <div className="space-y-4 text-silver">
              <div>
                <h3 className="font-semibold text-white mb-2">5.1 Minimal Cookie Use</h3>
                <p className="mb-3">Due to Privacy-First Architecture:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>No tracking cookies</strong> for advertising or marketing</li>
                  <li><strong>No cross-site tracking</strong> or profiling</li>
                  <li><strong>Minimal essential cookies</strong> only for functionality</li>
                  <li><strong>Local processing</strong> reduces need for server-side cookies</li>
                  <li><strong>Pseudonymized analytics</strong> cannot identify individual users</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">5.2 Data Minimization</h3>
                <p className="mb-3">Cookies are designed to collect minimum data necessary:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>No PII in cookies</strong> (names, emails, addresses not stored in cookies)</li>
                  <li><strong>Session tokens only</strong> for authentication</li>
                  <li><strong>Hashed identifiers</strong> for analytics (cannot be reverse-engineered)</li>
                  <li><strong>No sensitive data</strong> in cookies (passwords, financial info, CUI/FCI)</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Your Cookie Choices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">6. Your Cookie Choices</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.1 Cookie Consent</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  When you first visit ERMITS Services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Cookie Banner:</strong> You'll see a cookie consent banner</li>
                  <li><strong>Granular Control:</strong> Choose which cookie categories to accept</li>
                  <li><strong>Default Settings:</strong> Only essential cookies enabled by default</li>
                  <li><strong>Change Anytime:</strong> Update preferences in Account Settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.2 Managing Cookie Preferences</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  <strong>Within ERMITS Services:</strong> Navigate to Account Settings → Privacy → Cookie Preferences. Toggle categories on/off (except essential cookies) and save preferences.
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  <strong>Browser Controls:</strong> Most browsers allow cookie management:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4 mb-3">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and Website Data</li>
                  <li><strong>Edge:</strong> Settings → Privacy, Search, and Services → Cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">6.3 Opt-Out Tools</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">
                  <strong>Analytics Opt-Out:</strong> Disable analytics cookies in Account Settings, use browser Do Not Track (DNT) signal (we honor DNT), or visit <a href="https://posthog.com/opt-out" target="_blank" rel="noopener noreferrer" className="text-navy dark:text-silver hover:underline">PostHog opt-out</a>.
                </p>
                <p className="text-gray-600 dark:text-gray-200">
                  <strong>Error Tracking Opt-Out:</strong> Disable performance cookies in Account Settings. Sentry respects privacy settings.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Do Not Track */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.52 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">7. Do Not Track (DNT)</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">7.1 DNT Support</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS respects browser Do Not Track signals:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>DNT Enabled:</strong> We disable optional analytics and performance cookies</li>
                  <li><strong>Essential Cookies Only:</strong> Authentication and security cookies remain active</li>
                  <li><strong>No Tracking:</strong> No behavioral tracking when DNT is enabled</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Cookies and International Privacy Laws */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.54 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">9. Cookies and International Privacy Laws</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.1 GDPR Compliance (EU/UK/Swiss)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For users in the European Economic Area, United Kingdom, or Switzerland:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>Consent Required:</strong> We obtain consent before setting non-essential cookies</li>
                  <li><strong>Granular Control:</strong> You can accept/reject specific cookie categories</li>
                  <li><strong>Easy Withdrawal:</strong> Withdraw consent anytime in Account Settings</li>
                  <li><strong>Pre-Checked Boxes Prohibited:</strong> Cookie preferences start with only essential cookies enabled</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">9.2 CCPA Compliance (California)</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">For California residents:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li><strong>No Sale of Data:</strong> We do not sell personal information collected via cookies</li>
                  <li><strong>Opt-Out Rights:</strong> You can disable optional cookies anytime</li>
                  <li><strong>Disclosure:</strong> This policy discloses all cookies used</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Local Storage and IndexedDB */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">11. Local Storage and IndexedDB</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.1 Privacy-First Local Storage</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2">ERMITS products extensively use browser local storage (localStorage, IndexedDB) for Privacy-First Architecture:</p>
                <p className="text-gray-600 dark:text-gray-200 mb-2"><strong>Purpose:</strong> Store assessment data locally (never transmitted to servers), enable offline functionality, reduce server data storage, provide faster performance.</p>
                <p className="text-gray-600 dark:text-gray-200 mb-2"><strong>Privacy Benefits:</strong> Data stays local on your device, no server transmission, user control (you can clear local storage anytime), encryption option for sensitive data.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">11.2 Managing Local Storage</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-2"><strong>Clear Local Storage:</strong> Within Services: Account Settings → Data → Clear Local Data. Browser Settings: Developer Tools → Application → Storage → Clear. <strong>Warning:</strong> Clearing local storage deletes locally-stored assessments and data.</p>
                <p className="text-gray-600 dark:text-gray-200"><strong>Backup Local Data:</strong> Export data before clearing: Account Settings → Export Data. Download JSON/CSV backups and store backups securely.</p>
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
            <h2 className="text-2xl font-bold mb-4 dark:text-white">13. Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Cookie Policy Questions:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Cookie Policy Inquiry"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Cookie Preferences:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Account Settings → Privacy → Cookie Preferences
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Data Protection Officer (EU/UK/Swiss):</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">privacy@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Cookie GDPR Inquiry"</p>
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
            <Link to="/privacy">
              <Button variant="outline" size="sm">
                Privacy Policy
              </Button>
            </Link>
            <Link to="/terms">
              <Button variant="outline" size="sm">
                Terms of Service
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
