import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Download, Zap, FileText, CheckCircle,
  ArrowRight, Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ToolkitsOverview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Choose Your Toolkit Format
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            We offer two product lines: Downloadable Template Packages and Interactive Web-Based Tools
          </p>
        </motion.div>

        {/* Product Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Templates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="glass" padding="lg" className="h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <FileText size={40} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold mb-3 dark:text-white">Template Packages</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Downloadable templates you can customize
                </p>
              </div>

              <div className="mb-6 flex-grow">
                <h3 className="font-bold mb-4 dark:text-white">What You Get:</h3>
                <ul className="space-y-3">
                  {[
                    'Downloadable Markdown files',
                    'Comprehensive templates and frameworks',
                    'Customizable for your organization',
                    'One-time purchase, yours forever',
                    'No subscription required',
                    'Works offline',
                    'Perfect for documentation'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Starting at</div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">$149</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">one-time purchase</div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="dark:text-gray-200">Compliance Templates</span>
                    <span className="font-semibold dark:text-white">$199</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="dark:text-gray-200">Incident Response Templates</span>
                    <span className="font-semibold dark:text-white">$149</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="dark:text-gray-200">Vendor Risk Templates</span>
                    <span className="font-semibold dark:text-white">$179</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded border-2 border-blue-200 dark:border-blue-700">
                    <span className="font-semibold dark:text-white">All 3 Templates Bundle</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">$499</span>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  icon={<Download size={20} />}
                  onClick={() => navigate('/compliance-toolkit')}
                >
                  View Template Packages
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Interactive */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card variant="glass" padding="lg" className="h-full flex flex-col border-2 border-orange-200 dark:border-orange-700 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
                  <Zap size={40} className="text-white" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-3">
                  <Star size={16} className="text-white" />
                  <span className="text-white text-sm font-bold">INTERACTIVE TOOLS</span>
                </div>
                <h2 className="text-3xl font-bold mb-3 dark:text-white">Interactive Tools</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Web-based tools with auto-calculations
                </p>
              </div>

              <div className="mb-6 flex-grow">
                <h3 className="font-bold mb-4 dark:text-white">What You Get:</h3>
                <ul className="space-y-3">
                  {[
                    'Real-time calculations & scoring',
                    'Interactive dashboards & analytics',
                    'Save unlimited assessments',
                    'Export professional PDF reports',
                    'Multi-user collaboration',
                    'Platform integrations',
                    'Priority email support',
                    'PLUS all templates included'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Zap size={20} className="text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="dark:text-gray-200 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border-2 border-orange-300 dark:border-orange-600">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Starting at</div>
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-1">$349</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">per year or lifetime access</div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                    <span className="dark:text-gray-200">Compliance Interactive</span>
                    <span className="font-semibold dark:text-white">$499/yr</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                    <span className="dark:text-gray-200">Incident Response Interactive</span>
                    <span className="font-semibold dark:text-white">$349/yr</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                    <span className="dark:text-gray-200">Vendor Risk Interactive</span>
                    <span className="font-semibold dark:text-white">$449/yr</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-100 dark:bg-orange-900/30 rounded border-2 border-orange-300 dark:border-orange-600">
                    <span className="font-semibold dark:text-white">All 3 Interactive Bundle</span>
                    <span className="font-bold text-orange-600 dark:text-orange-400">$999/yr</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                  icon={<Zap size={20} />}
                  onClick={() => navigate('/toolkits-premium')}
                >
                  View Interactive Tools
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={() => navigate('/compliance-gap-analysis-premium')}
                >
                  Try Interactive Demo
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Detailed Comparison</h2>
          <Card variant="glass" padding="lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                    <th className="text-left py-4 px-4 dark:text-white">Feature</th>
                    <th className="text-center py-4 px-4 dark:text-white">
                      <FileText size={24} className="inline mb-1" />
                      <div>Templates</div>
                    </th>
                    <th className="text-center py-4 px-4 dark:text-white">
                      <Zap size={24} className="inline mb-1 text-orange-600" />
                      <div>Interactive</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { feature: 'Comprehensive Templates', templates: true, interactive: true },
                    { feature: 'Downloadable Files', templates: true, interactive: true },
                    { feature: 'Customizable Content', templates: true, interactive: true },
                    { feature: 'Works Offline', templates: true, interactive: false },
                    { feature: 'Interactive Web Interface', templates: false, interactive: true },
                    { feature: 'Auto-Calculations', templates: false, interactive: true },
                    { feature: 'Real-time Scoring', templates: false, interactive: true },
                    { feature: 'Save Assessments', templates: false, interactive: true },
                    { feature: 'Export PDF Reports', templates: false, interactive: true },
                    { feature: 'Dashboards & Analytics', templates: false, interactive: true },
                    { feature: 'Multi-user Access', templates: false, interactive: true },
                    { feature: 'Platform Integrations', templates: false, interactive: true },
                    { feature: 'Priority Support', templates: false, interactive: true },
                    { feature: 'Free Updates', templates: true, interactive: true },
                    { feature: 'One-time Purchase Option', templates: true, interactive: false },
                    { feature: 'Subscription Option', templates: false, interactive: true }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="py-3 px-4 dark:text-gray-200">{row.feature}</td>
                      <td className="text-center py-3 px-4">
                        {row.templates ? (
                          <CheckCircle size={20} className="text-blue-600 inline" />
                        ) : (
                          <span className="text-gray-300 dark:text-gray-600">—</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {row.interactive ? (
                          <CheckCircle size={20} className="text-orange-600 inline" />
                        ) : (
                          <span className="text-gray-300 dark:text-gray-600">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Which is Right for You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Which is Right for You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="glass" padding="lg" className="bg-blue-50 dark:bg-blue-900/20">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <FileText size={24} />
                Choose Templates If:
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  'You prefer working with documents (Word, Markdown, etc.)',
                  'You want full control over customization',
                  'You need offline access',
                  'You have a one-time budget vs. recurring',
                  'You already have your own tracking systems',
                  'You want to integrate into existing workflows'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card variant="glass" padding="lg" className="bg-orange-50 dark:bg-orange-900/20">
              <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2">
                <Zap size={24} />
                Choose Interactive If:
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  'You want instant calculations and scoring',
                  'You need professional reports quickly',
                  'You\'ll conduct multiple assessments',
                  'You want analytics and dashboards',
                  'You need team collaboration features',
                  'You prefer web-based tools over documents'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                    <span className="dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </motion.div>

        {/* Can I Get Both? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card variant="glass" padding="lg" className="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Can I Get Both?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">
              Yes! Interactive Tools include all templates. Or purchase templates first and upgrade later with a discount.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" onClick={() => navigate('/compliance-toolkit')}>
                View Templates
              </Button>
              <Button
                variant="primary"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                onClick={() => navigate('/toolkits-premium')}
              >
                View Interactive Tools
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
