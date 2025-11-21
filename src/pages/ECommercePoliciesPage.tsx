import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowLeft, CreditCard, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ECommercePoliciesPage: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">E-Commerce Policies</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Version:</strong> 1.0
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-2">
            <strong>Last Updated:</strong> November 19, 2025
          </p>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            <strong>Effective Date:</strong> November 19, 2025
          </p>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Table of Contents</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-200 ml-4">
              <li><a href="#subscription-payment" className="text-navy dark:text-silver hover:underline">1. Subscription & Payment Terms</a></li>
              <li><a href="#refund-cancellation" className="text-navy dark:text-silver hover:underline">2. Refund & Cancellation Policy</a></li>
            </ul>
          </Card>
        </motion.div>

        {/* Subscription & Payment Terms */}
        <motion.div
          id="subscription-payment"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <CreditCard size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Subscription & Payment Terms</h2>
                <p className="text-silver mb-4">
                  <strong>Effective Date:</strong> November 19, 2025<br />
                  <strong>Last Updated:</strong> November 19, 2025
                </p>
                <p className="text-silver mb-4">
                  These Subscription & Payment Terms ("Payment Terms") supplement the ERMITS LLC Master Terms of Service and govern all paid subscriptions, purchases, and financial transactions related to ERMITS Services.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Subscription Plans and Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">1.1 Subscription Plans and Pricing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.1.1 Available Plans</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">ERMITS offers various subscription tiers across its product portfolio:</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Freemium Tiers (No Payment Required):</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Limited feature access</li>
                    <li>Usage quotas and restrictions</li>
                    <li>Community support only</li>
                    <li>No service level commitments</li>
                    <li>May include advertisements or promotional content</li>
                    <li>Subject to modification or termination at any time</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Free Trial Plans:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Full feature access for trial period</li>
                    <li>Duration varies by product (typically 14-30 days)</li>
                    <li>Requires payment method on file</li>
                    <li>Automatically converts to paid subscription unless cancelled</li>
                    <li>One free trial per user/organization per product</li>
                    <li>Abuse of free trials (multiple accounts, etc.) is prohibited</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Paid Subscription Tiers:</h4>
                  <p className="text-gray-600 dark:text-gray-200 mb-2">Each ERMITS product offers multiple paid tiers with varying features, quotas, and support levels:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li><strong>Standard/Professional Plans:</strong> Core features, standard usage quotas, email support (24-hour response), monthly or annual billing</li>
                    <li><strong>Enterprise Plans:</strong> Advanced features, higher usage quotas, priority support (4-hour response), custom billing arrangements, volume discounts, dedicated account management</li>
                    <li><strong>Federal/Government Plans:</strong> CMMC-compliant features, FedRAMP-aligned infrastructure options, government-specific support, custom pricing and contracts</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.1.2 Pricing Structure</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Currency:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>All prices listed in U.S. Dollars (USD) unless otherwise specified</li>
                      <li>International customers may see estimated local currency prices</li>
                      <li>Charges processed in USD; currency conversion by payment processor</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Price Changes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>ERMITS reserves the right to modify pricing at any time</li>
                      <li><strong>Existing Customers:</strong> 30 days' advance notice of price increases</li>
                      <li><strong>Grandfathering:</strong> Current subscription price honored through current billing cycle</li>
                      <li><strong>Acceptance:</strong> Continued use after price change effective date constitutes acceptance</li>
                      <li><strong>Cancellation Option:</strong> Cancel before price increase takes effect to avoid new pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Billing and Payment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">1.2 Billing and Payment</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.2.1 Payment Methods</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Accepted Payment Methods:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Credit cards (Visa, Mastercard, American Express, Discover)</li>
                      <li>Debit cards with credit card logo</li>
                      <li>ACH bank transfers (Enterprise customers only)</li>
                      <li>Wire transfers (Enterprise customers, annual plans only)</li>
                      <li>Purchase orders (Enterprise/Government customers with approved credit)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Payment Processor:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>All credit/debit card payments processed by Stripe, Inc.</li>
                      <li>ERMITS does not store complete payment card information</li>
                      <li>Payment security governed by PCI-DSS compliance</li>
                      <li>See Stripe Privacy Policy: <a href="https://stripe.com/privacy" className="text-navy dark:text-silver hover:underline" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.2.2 Billing Cycles</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Monthly Subscriptions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Billed on the same day each month (subscription start date)</li>
                      <li>Prorated charges for mid-cycle upgrades</li>
                      <li>No proration for downgrades (takes effect next billing cycle)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Annual Subscriptions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Billed once per year on subscription anniversary date</li>
                      <li>Discounted pricing compared to monthly (typically 15-20% savings)</li>
                      <li>Entire year charged upfront</li>
                      <li>Prorated refunds not available (see Refund Policy, Section 2)</li>
                      <li>Automatic renewal unless cancelled before anniversary</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">1.2.3 Automatic Renewal</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Renewal Process:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Subscriptions automatically renew at the end of each billing cycle</li>
                      <li>Renewal charge processed using payment method on file</li>
                      <li>No action required to continue service</li>
                      <li>Same subscription tier and features unless modified</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Renewal Notifications:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Email notification 7 days before renewal (monthly subscriptions)</li>
                      <li>Email notification 30 days before renewal (annual subscriptions)</li>
                      <li>Notification includes renewal date, amount, and payment method</li>
                      <li>Instructions for cancellation included in notification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Refund & Cancellation Policy */}
        <motion.div
          id="refund-cancellation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <RefreshCw size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Refund & Cancellation Policy</h2>
                <p className="text-silver mb-4">
                  <strong>Effective Date:</strong> November 19, 2025<br />
                  <strong>Last Updated:</strong> November 19, 2025
                </p>
                <p className="text-silver">
                  This Refund & Cancellation Policy governs subscription cancellations, refund requests, and account terminations for ERMITS LLC ("ERMITS") Services. This policy supplements the Master Terms of Service and Subscription & Payment Terms.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* No Money-Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2.1 No Money-Back Guarantee</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.1.1 General Policy</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-3">
                  ERMITS does <strong>not</strong> offer a standard 30-day money-back guarantee or similar blanket refund policy. All sales are final except as specifically provided in this policy.
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Rationale:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Free trials available for most products</li>
                    <li>Freemium tiers allow service evaluation without payment</li>
                    <li>Privacy-First Architecture makes usage verification difficult</li>
                    <li>Client-side data processing limits ERMITS' ability to assess service use</li>
                  </ul>
                </div>

                <p className="text-gray-600 dark:text-gray-200">
                  <strong>Exceptions:</strong> Refunds may be granted under specific circumstances outlined in Section 2.3.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Cancellation Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2.2 Cancellation Process</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.2.1 How to Cancel</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Self-Service Cancellation:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Log in to your account</li>
                    <li>Navigate to Account Settings → Billing → Subscription</li>
                    <li>Click "Cancel Subscription"</li>
                    <li>Select cancellation reason (optional feedback)</li>
                    <li>Confirm cancellation</li>
                    <li>Receive email confirmation</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Email Cancellation:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Email <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a></li>
                    <li>Subject: "Subscription Cancellation - [Your Name]"</li>
                    <li>Include account email and subscription details</li>
                    <li>Confirmation sent within 1 business day</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.2.2 Cancellation Effective Date</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">End-of-Period Cancellation:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Cancellation takes effect at end of current billing period</li>
                      <li>Access continues through paid period</li>
                      <li>No charges after cancellation effective date</li>
                      <li>No partial refunds for remaining time in billing period</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Example:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li>Current billing period: January 1 - January 31</li>
                      <li>Cancel on January 15</li>
                      <li>Access continues through January 31</li>
                      <li>No charge on February 1</li>
                      <li>No refund for January 15-31</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Refund Eligibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2.3 Refund Eligibility</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.3.1 Digital Products (One-Time Purchases)</h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Eligibility:</h4>
                  <p className="text-gray-600 dark:text-gray-200 mb-2">Refund available within 7 days of purchase if:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>Technical failure prevents access</li>
                    <li>Product incomplete or materially different from description</li>
                    <li>Billing error or duplicate charge</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 dark:text-white">Not Eligible:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                    <li>After 7 days</li>
                    <li>After downloading or accessing file or assessment</li>
                    <li>Change of mind or buyer's remorse</li>
                    <li>"Didn't use it" or "Forgot I purchased it"</li>
                    <li>Incompatibility with user's environment (specs clearly documented)</li>
                  </ul>
                </div>

                <p className="text-gray-600 dark:text-gray-200 mt-3">
                  <strong>Process:</strong> Email <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a> with order number and detailed reason
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.3.2 Advisory Services</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">STEEL Strategic Assessments ($25K-$125K):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li><strong>Refund Policy:</strong> Milestone-based billing with satisfaction checkpoints</li>
                      <li><strong>Eligibility:</strong> Pro-rated refund if ERMITS fails to deliver contracted scope, material breach of Statement of Work, or services not performed as specified</li>
                      <li><strong>Not Eligible:</strong> After final deliverables accepted, subjective dissatisfaction (without contractual breach), change in business priorities</li>
                      <li><strong>Process:</strong> Contact dedicated account manager or <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a></li>
                      <li><strong>Timeline:</strong> 14 days notice for cancellation; pro-rated refund for unperformed work</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">On-Demand Advisory Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                      <li><strong>Billing:</strong> Hourly or project-based (invoiced monthly or at milestones)</li>
                      <li><strong>Refund:</strong> For unperformed work only</li>
                      <li><strong>Process:</strong> Review invoices with account manager; dispute within 14 days</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">2.3.3 Subscription Products</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>No pro-rated refunds for monthly subscriptions</li>
                  <li>Annual subscriptions: No pro-rated refunds</li>
                  <li>Refunds only for technical service failures</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">2.18 Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Cancellation Requests:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Subscription Cancellation"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Refund Requests:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Refund Request - [Invoice Number]"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Billing Disputes:</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Email: <a href="mailto:contact@ermits.com" className="text-navy dark:text-silver hover:underline">contact@ermits.com</a>
                </p>
                <p className="text-gray-600 dark:text-gray-200">Subject: "Billing Dispute - [Invoice Number]"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 dark:text-white">Response Times:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-200 ml-4">
                  <li>Cancellation confirmation: Within 1 business day</li>
                  <li>Refund requests: Review within 5 business days</li>
                  <li>Billing disputes: Within 2 business days</li>
                  <li>General questions: Within 24 hours</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/terms">
              <Button variant="outline" size="sm">
                Terms of Service
              </Button>
            </Link>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

