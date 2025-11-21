import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowRight, CheckCircle, Code2, Palette, Settings, Upload, Lock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createCheckoutSession } from '../services/stripe';

export const DashboardTemplate: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      await createCheckoutSession({
        productType: 'dashboard-template',
        successUrl: `${window.location.origin}/purchase-success`,
        cancelUrl: window.location.href,
      });
      // Note: If successful, user will be redirected, so we don't set loading to false
    } catch (error: any) {
      console.error('Checkout error:', error);
      const errorMessage = error?.message || 'Failed to start checkout. Please try again or contact support.';
      alert(`Checkout Error: ${errorMessage}\n\nPlease try again or contact support.`);
      setLoading(false);
    }
  };
  const features = [
    {
      icon: <Code2 size={24} className="text-navy dark:text-silver" />,
      title: "HTML/CSS/JS Template",
      description: "Clean, modern code ready to customize with your data"
    },
    {
      icon: <Palette size={24} className="text-navy dark:text-silver" />,
      title: "White-Label Ready",
      description: "Rebrand with your logo, colors, and company name"
    },
    {
      icon: <Upload size={24} className="text-navy dark:text-silver" />,
      title: "CSV Data Import",
      description: "Easily load your own security metrics and KPIs"
    },
    {
      icon: <BarChart3 size={24} className="text-navy dark:text-silver" />,
      title: "Professional Charts",
      description: "Interactive visualizations with Chart.js and custom displays"
    },
    {
      icon: <Settings size={24} className="text-navy dark:text-silver" />,
      title: "Fully Responsive",
      description: "Works perfectly on desktop, tablet, and mobile devices"
    },
    {
      icon: <Palette size={24} className="text-navy dark:text-silver" />,
      title: "Dark/Light Modes",
      description: "Built-in theme toggle for user preferences"
    }
  ];

  const sections = [
    "Executive Summary Dashboard",
    "Real-time Risk Radar (6D STEEL)",
    "Strategic Actions & Recommendations",
    "Threat Intelligence Feed",
    "Compliance Scorecard",
    "Custom Metrics Builder"
  ];

  const useCases = [
    {
      title: "Consultants",
      description: "White-label and customize for each client engagement"
    },
    {
      title: "Organizations",
      description: "Deploy internally to showcase your security posture"
    },
    {
      title: "Resellers",
      description: "Rebrand and sell as your own product"
    },
    {
      title: "MSPs",
      description: "Offer as value-add to managed security services"
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
            <span className="text-gold font-semibold">White-Label Template</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Executive Security Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
            Professional HTML/CSS template for security executives to visualize risk, metrics, and strategic actions
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
                $79
              </div>
              <p className="text-gray-600 dark:text-gray-200">One-time purchase • Lifetime license • Free updates</p>
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
              
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Secure payment options • Instant download
            </p>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="glass" padding="lg">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200 flex-grow">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Dashboard Sections</h2>
          <Card variant="glass" padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-200">{section}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Customization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Easy Customization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="glass" padding="lg">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Branding</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                  <CheckCircle size={16} className="text-green-500" />
                  Upload your logo
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                  <CheckCircle size={16} className="text-green-500" />
                  Change color scheme
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                  <CheckCircle size={16} className="text-green-500" />
                  Add company name
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                  <CheckCircle size={16} className="text-green-500" />
                  Customize menu items
                </li>
              </ul>
            </Card>

            <Card variant="glass" padding="lg">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Data</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                  <CheckCircle size={16} className="text-green-500" />
                  Import CSV metrics
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                  <CheckCircle size={16} className="text-green-500" />
                  Add your threat data
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                  <CheckCircle size={16} className="text-green-500" />
                  Update KPIs
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                  <CheckCircle size={16} className="text-green-500" />
                  Modify visualizations
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((usecase, index) => (
              <Card key={index} variant="glass" padding="lg">
                <h3 className="text-lg font-bold mb-2 dark:text-white">{usecase.title}</h3>
                <p className="text-gray-600 dark:text-gray-200">{usecase.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Package Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">In The Box</h2>
          <Card variant="glass" padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-4 dark:text-white">Files Included</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                    <CheckCircle size={16} className="text-green-500" />
                    index.html
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                    <CheckCircle size={16} className="text-green-500" />
                    styles.css (fully customizable)
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                    <CheckCircle size={16} className="text-green-500" />
                    script.js (Chart.js integration)
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                    <CheckCircle size={16} className="text-green-500" />
                    sample-data.csv
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 dark:text-white">Documentation</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                    <CheckCircle size={16} className="text-green-500" />
                    Setup guide
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                    <CheckCircle size={16} className="text-green-500" />
                    Customization guide
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                    <CheckCircle size={16} className="text-green-500" />
                    FAQ & Troubleshooting
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
                    <CheckCircle size={16} className="text-green-500" />
                    Free updates
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-gold/20 to-navy/20">
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Ready to Impress Your Board?</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6">Get the dashboard template and customize in minutes</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePurchase}
                disabled={loading}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                {loading ? 'Processing...' : 'Buy with Stripe ($79)'}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://gumroad.com/ermits/dashboard-template', '_blank')}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Buy with Gumroad
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link to="/services" className="text-navy dark:text-silver hover:underline inline-flex items-center gap-2">
            ← Back to Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
