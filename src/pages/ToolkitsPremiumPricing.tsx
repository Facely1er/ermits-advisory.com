import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  CheckCircle, Lock, Zap, Star, TrendingUp,
  Download, Save, BarChart3, Users, Cloud, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ToolkitsPremiumPricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'lifetime'>('annual');
  const navigate = useNavigate();

  const pricingPlans = [
    {
      name: 'Compliance Toolkit',
      tagline: 'Streamline your compliance journey',
      icon: <Shield size={32} />,
      color: 'green',
      basic: {
        price: 199,
        features: [
          'Gap analysis templates',
          'Control mapping matrices',
          'Evidence checklists (200+ items)',
          'Audit preparation guides',
          'All 7 frameworks (NIST, ISO, SOC 2, etc.)',
          'Downloadable Markdown templates'
        ]
      },
      premium: {
        annual: 499,
        lifetime: 899,
        features: [
          'Everything in Basic, plus:',
          '✨ Interactive gap analysis tool',
          '✨ Auto-scoring and calculations',
          '✨ Progress dashboard with charts',
          '✨ Save assessments (local storage)',
          '✨ Export assessment reports',
          '✨ NIST CSF framework (more coming soon)',
          '✨ Priority email support'
        ]
      },
      demoLink: '/compliance-gap-analysis-premium',
      buyBasicLink: 'https://gumroad.com/ermits/compliance-toolkit',
      buyPremiumLink: 'https://gumroad.com/ermits/compliance-toolkit-premium'
    },
    {
      name: 'Incident Response Toolkit',
      tagline: 'Be ready for any security incident',
      icon: <Zap size={32} />,
      color: 'red',
      basic: {
        price: 149,
        features: [
          'Ransomware response playbook',
          'Communication templates (12+)',
          'Incident tracking forms',
          '6 scenario-specific playbooks',
          'Regulatory notification templates',
          'Downloadable Markdown templates'
        ]
      },
      premium: {
        annual: 349,
        lifetime: 599,
        features: [
          'Everything in Basic, plus:',
          '✨ Interactive incident response tool (coming soon)',
          '✨ Save assessments (local storage)',
          '✨ Export assessment reports',
          '✨ Priority email support'
        ]
      },
      demoLink: null,
      buyBasicLink: 'https://gumroad.com/ermits/incident-response-toolkit',
      buyPremiumLink: 'https://gumroad.com/ermits/incident-response-premium'
    },
    {
      name: 'Vendor Risk Toolkit',
      tagline: 'Manage third-party vendor risks',
      icon: <Users size={32} />,
      color: 'orange',
      basic: {
        price: 179,
        features: [
          'Security questionnaire (150 questions)',
          'Risk scoring framework',
          'Contract security clauses',
          'Vendor assessment templates',
          '4-tier risk management approach',
          'Downloadable Markdown templates'
        ]
      },
      premium: {
        annual: 449,
        lifetime: 799,
        features: [
          'Everything in Basic, plus:',
          '✨ Interactive risk scoring calculator',
          '✨ Automatic tier assignment',
          '✨ Risk dashboard with visualizations',
          '✨ Save assessments (local storage)',
          '✨ Export assessment reports',
          '✨ Priority email support'
        ]
      },
      demoLink: '/vendor-risk-scorer-premium',
      buyBasicLink: 'https://gumroad.com/ermits/vendor-risk-toolkit',
      buyPremiumLink: 'https://gumroad.com/ermits/vendor-risk-premium'
    }
  ];

  const bundlePrice = {
    basic: 499,
    annual: 999,
    lifetime: 1799
  };

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-12 text-center"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 font-semibold">Premium Interactive Toolkits</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Choose Your Toolkit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            Start with downloadable templates or upgrade to premium interactive tools with auto-calculations, dashboards, and reporting
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-navy dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'annual' ? 'lifetime' : 'annual')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'lifetime' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'lifetime' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'lifetime' ? 'text-navy dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Lifetime
            </span>
            <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded text-xs font-semibold text-green-700 dark:text-green-400">
              Save {billingCycle === 'lifetime' ? '40%' : '20%'}
            </span>
          </div>
        </motion.div>

        {/* Individual Toolkits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" padding="lg" className="h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${plan.color}-100 dark:bg-${plan.color}-900/30 mb-4`}>
                    <div className={`text-${plan.color}-600 dark:text-${plan.color}-400`}>
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{plan.tagline}</p>
                </div>

                {/* Basic Plan */}
                <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-4">
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Basic Templates</div>
                    <div className="text-3xl font-bold dark:text-white">${plan.basic.price}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">one-time purchase</div>
                  </div>
                  <ul className="space-y-2 text-sm mb-4">
                    {plan.basic.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full"
                    icon={<Download size={16} />}
                    onClick={() => window.open(plan.buyBasicLink, '_blank')}
                  >
                    Download Templates
                  </Button>
                </div>

                {/* Premium Plan */}
                <div className="mb-6 flex-grow">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-2">
                      <Star size={14} className="text-white" />
                      <span className="text-white text-xs font-bold">PREMIUM</span>
                    </div>
                    <div className="text-4xl font-bold dark:text-white mb-1">
                      ${billingCycle === 'annual' ? plan.premium.annual : plan.premium.lifetime}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {billingCycle === 'annual' ? 'per year' : 'lifetime access'}
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm mb-4 max-h-64 overflow-y-auto">
                    {plan.premium.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {feature.startsWith('✨') ? (
                          <>
                            <Zap size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="dark:text-gray-200 font-medium">{feature.replace('✨ ', '')}</span>
                          </>
                        ) : (
                          <span className="dark:text-gray-300 ml-6">{feature}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-2 mt-auto">
                  {plan.demoLink && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full"
                      onClick={() => navigate(plan.demoLink)}
                    >
                      Try Interactive Demo
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                    onClick={() => window.open(plan.buyPremiumLink, '_blank')}
                  >
                    Upgrade to Premium
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Ultimate Bundle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <Star size={20} className="text-white" />
                  <span className="text-white font-bold">ULTIMATE BUNDLE</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 dark:text-white">All 3 Toolkits</h3>
                <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">
                  Get complete coverage for compliance, incident response, and vendor risk management
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-dark-card rounded-lg p-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Basic Bundle</div>
                    <div className="text-2xl font-bold dark:text-white">${bundlePrice.basic}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Save $28 (6%)</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Premium Bundle</div>
                    <div className="text-3xl font-bold dark:text-white">
                      ${billingCycle === 'annual' ? bundlePrice.annual : bundlePrice.lifetime}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      Save ${billingCycle === 'annual' ? '298' : '499'} ({billingCycle === 'annual' ? '23%' : '22%'})
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {[
                    'All basic templates from all 3 toolkits',
                    'All premium interactive tools',
                    'Unlimited assessments across all tools',
                    'Full platform integrations',
                    'Priority support',
                    'Free updates for life'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="flex-1"
                    icon={<Download size={20} />}
                    onClick={() => window.open('https://gumroad.com/ermits/toolkit-bundle-basic', '_blank')}
                  >
                    Basic Bundle
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    onClick={() => window.open('https://gumroad.com/ermits/toolkit-bundle-premium', '_blank')}
                  >
                    Premium Bundle
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Card variant="glass" padding="md" className="bg-white/50 dark:bg-dark-card/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">
                      <Shield size={24} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-semibold dark:text-white">Compliance Toolkit</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">7 frameworks, gap analysis</div>
                    </div>
                  </div>
                </Card>

                <Card variant="glass" padding="md" className="bg-white/50 dark:bg-dark-card/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded">
                      <Zap size={24} className="text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <div className="font-semibold dark:text-white">Incident Response Toolkit</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">6 playbooks, tracking</div>
                    </div>
                  </div>
                </Card>

                <Card variant="glass" padding="md" className="bg-white/50 dark:bg-dark-card/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded">
                      <Users size={24} className="text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <div className="font-semibold dark:text-white">Vendor Risk Toolkit</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Risk scoring, assessments</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Premium Features Comparison</h2>
          <Card variant="glass" padding="lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 px-4 dark:text-white">Feature</th>
                    <th className="text-center py-3 px-4 dark:text-white">Basic</th>
                    <th className="text-center py-3 px-4 dark:text-white">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { feature: 'Downloadable Templates', basic: true, premium: true },
                    { feature: 'All Frameworks/Playbooks', basic: true, premium: true },
                    { feature: 'Interactive Tools', basic: false, premium: true },
                    { feature: 'Auto-calculations', basic: false, premium: true },
                    { feature: 'Save Assessments', basic: false, premium: true },
                    { feature: 'Export PDF Reports', basic: false, premium: true },
                    { feature: 'Dashboard & Analytics', basic: false, premium: true },
                    { feature: 'Multi-user Collaboration', basic: false, premium: true },
                    { feature: 'Platform Integrations', basic: false, premium: true },
                    { feature: 'Priority Support', basic: false, premium: true }
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-3 px-4 dark:text-gray-200">{row.feature}</td>
                      <td className="text-center py-3 px-4">
                        {row.basic ? (
                          <CheckCircle size={20} className="text-green-500 inline" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {row.premium ? (
                          <CheckCircle size={20} className="text-green-500 inline" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Can I upgrade from Basic to Premium later?',
                a: 'Yes! You can upgrade anytime and we\'ll credit your basic purchase towards premium.'
              },
              {
                q: 'What\'s the difference between Annual and Lifetime?',
                a: 'Annual requires yearly renewal. Lifetime gives you permanent access with all future updates included.'
              },
              {
                q: 'Can I use these for multiple organizations?',
                a: 'Basic templates can be used across organizations. Premium is licensed per organization.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, 30-day money-back guarantee if you\'re not satisfied with your purchase.'
              }
            ].map((faq, i) => (
              <Card key={i} variant="glass" padding="md">
                <h4 className="font-semibold mb-2 dark:text-white">{faq.q}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{faq.a}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Card variant="glass" padding="lg" className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Not sure which option is right for you?</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Contact us for a personalized demo or consultation
            </p>
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
              Schedule a Demo
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
