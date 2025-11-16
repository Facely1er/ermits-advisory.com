import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowRight, CheckCircle, Lock, FileText, BarChart2, Download } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createCheckoutSession } from '../services/stripe';

export const SteelPremium: React.FC = () => {
  const navigate = useNavigate();
  const [showPaywall, setShowPaywall] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      await createCheckoutSession({
        productType: 'steel-premium',
        successUrl: `${window.location.origin}/purchase-success`,
        cancelUrl: window.location.href,
      });
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again or contact support.');
      setLoading(false);
    }
  };

  const premiumFeatures = [
    {
      icon: <FileText size={24} className="text-navy dark:text-silver" />,
      title: "Detailed PDF Reports",
      description: "Professional 20+ page executive reports with industry benchmarking"
    },
    {
      icon: <BarChart2 size={24} className="text-navy dark:text-silver" />,
      title: "Custom Visualizations",
      description: "High-resolution charts, radar graphs, and trend analysis"
    },
    {
      icon: <CheckCircle size={24} className="text-navy dark:text-silver" />,
      title: "Executive Summary Templates",
      description: "Ready-to-use board presentation templates"
    },
    {
      icon: <Download size={24} className="text-navy dark:text-silver" />,
      title: "Multiple Export Formats",
      description: "PDF, PNG, PowerPoint, and JSON data export"
    }
  ];

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-12 text-center"
        >
          <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
            <span className="text-gold font-semibold">Premium Features Unlocked</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            STEEL™ Premium Assessment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
            Get comprehensive executive-level reports with professional visualizations and templates
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <Card variant="glass" padding="lg" className="border-2 border-gold">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-navy dark:text-white mb-2">
                $29
              </div>
              <p className="text-gray-600 dark:text-gray-200">One-time purchase • Unlimited assessments</p>
            </div>

            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePurchase}
                disabled={loading}
                className="w-full"
              >
                <Lock size={18} className="mr-2" />
                {loading ? 'Processing...' : 'Buy with Stripe'}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://gumroad.com/ermits/steel-premium', '_blank')}
                className="w-full"
              >
                <Lock size={18} className="mr-2" />
                Buy with Gumroad
              </Button>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Need enterprise features?
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/steel/enterprise')}
                  className="w-full"
                >
                  View Enterprise Pricing →
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Secure payment options • Lifetime access
            </p>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} variant="glass" padding="lg">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-200">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-16 max-w-3xl mx-auto"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy/5 to-silver/5 border-l-4 border-navy">
            <div className="flex gap-4">
              <div className="text-2xl">🔒</div>
              <div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">Privacy-First Assessment Tool</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                  STEEL™ processes all data entirely in your browser. No assessment results are sent to external servers, stored in databases, or used for analytics. Your security posture remains completely confidential.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-200 space-y-1">
                  <li>✓ Client-side processing only</li>
                  <li>✓ No external data transmission</li>
                  <li>✓ Works offline</li>
                  <li>✓ Full data privacy and control</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Free vs Premium
          </h2>
          <Card variant="glass" padding="lg" className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left py-4 px-4 font-bold dark:text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-bold dark:text-white">Free</th>
                  <th className="text-center py-4 px-4 font-bold dark:text-white">Premium ($29)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Assessment Questions</td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Score Calculation</td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Basic Results Display</td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Detailed PDF Report (20+ pages)</td>
                  <td className="text-center">-</td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Industry Benchmarking</td>
                  <td className="text-center">-</td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Executive Summary Templates</td>
                  <td className="text-center">-</td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Multiple Export Formats</td>
                  <td className="text-center">-</td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Unlimited Assessments</td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                  <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy to-dark">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Unlock Premium?</h3>
            <p className="text-silver mb-6">Join hundreds of security professionals using STEEL™ Premium</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePurchase}
                disabled={loading}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                {loading ? 'Processing...' : 'Buy with Stripe ($29)'}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://gumroad.com/ermits/steel-premium', '_blank')}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Buy with Gumroad
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Back to Assessment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link to="/steel" className="text-navy dark:text-silver hover:underline inline-flex items-center gap-2">
            ← Back to STEEL Assessment
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
