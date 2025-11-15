import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowRight, CheckCircle, Users, Download,
  DollarSign, FileText, Network, Shield, Target
} from 'lucide-react';

export const VendorRiskToolkit: React.FC = () => {
  const toolkitAreas = [
    { name: 'Vendor Assessment', icon: <FileText size={24} /> },
    { name: 'Risk Scoring', icon: <Target size={24} /> },
    { name: 'Supply Chain', icon: <Network size={24} /> },
    { name: 'Contract Security', icon: <Shield size={24} /> }
  ];

  const toolkitContents = [
    {
      category: 'Vendor Assessment Questionnaires',
      items: [
        'Comprehensive security questionnaires',
        'Industry-specific assessment templates',
        'Cloud service provider assessments',
        'Data processor evaluation forms',
        'Vendor risk scoring matrices'
      ]
    },
    {
      category: 'Risk Scoring Frameworks',
      items: [
        'Vendor risk tiering methodology',
        'Risk scoring calculation templates',
        'Criticality assessment frameworks',
        'Risk appetite alignment guides',
        'Portfolio risk analysis templates'
      ]
    },
    {
      category: 'Third-Party Risk Management',
      items: [
        'Vendor onboarding checklists',
        'Ongoing monitoring templates',
        'Vendor offboarding procedures',
        'Risk review and reassessment guides',
        'Vendor performance tracking templates'
      ]
    },
    {
      category: 'Contract Security Clauses',
      items: [
        'Security requirements clause library',
        'Data protection agreement templates',
        'Breach notification clauses',
        'Right to audit provisions',
        'Liability and indemnification templates'
      ]
    },
    {
      category: 'Supply Chain Risk',
      items: [
        'Supply chain mapping templates',
        'Concentration risk analysis',
        'Business continuity assessments',
        'Geographic risk evaluation',
        'Dependency analysis frameworks'
      ]
    },
    {
      category: 'Platform Integration',
      items: [
        'VendorSoluce setup guides',
        'Automated assessment workflows',
        'Risk scoring automation templates',
        'Dashboard configuration guides',
        'Integration with CyberCaution alerts'
      ]
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
          <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
            <span className="text-orange-700 dark:text-orange-400 font-semibold flex items-center gap-2">
              <FileText size={18} />
              Template Package
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Vendor Risk Management Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-4">
            Downloadable vendor risk assessment templates, questionnaires, and frameworks for third-party risk management
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            3 comprehensive template files • Customize for your needs • Works offline • One-time purchase
          </p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-navy dark:text-white">$179</div>
              <div className="text-gray-500 dark:text-gray-400">One-time purchase</div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="primary"
                size="md"
                icon={<Download size={20} />}
                onClick={() => window.open('https://gumroad.com/ermits/vendor-risk-toolkit', '_blank')}
              >
                Download Templates
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => window.location.href = '/toolkits'}
              >
                Compare Options
              </Button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Want interactive tools with auto-calculations?
              </p>
              <button
                onClick={() => window.location.href = '/vendor-risk-scorer-premium'}
                className="text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline"
              >
                Try Interactive Version →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Toolkit Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
            Toolkit Coverage Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toolkitAreas.map((area, index) => (
              <Card key={index} variant="glass" padding="md" className="text-center">
                <div className="text-orange-600 dark:text-orange-400 mb-2 flex justify-center">
                  {area.icon}
                </div>
                <div className="text-sm font-semibold dark:text-white">{area.name}</div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Toolkit Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolkitContents.map((section, index) => (
              <Card key={index} variant="glass" padding="lg" className="h-full">
                <h3 className="text-xl font-bold mb-4 dark:text-white">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <CheckCircle size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Standardize vendor risk assessments',
                'Accelerate vendor onboarding by 50%',
                'Ensure consistent risk scoring',
                'Protect your organization with contract clauses',
                'Integrate with VendorSoluce platform',
                'Manage supply chain risks effectively'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Download Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Download Your Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Vendor Security Questionnaire', file: 'vendor-security-questionnaire.md', desc: '150 questions across 15 security domains' },
              { name: 'Vendor Risk Scoring Framework', file: 'vendor-risk-scoring-framework.md', desc: '3-dimensional risk assessment and tiering model' },
              { name: 'Getting Started Guide', file: 'README.md', desc: 'Complete vendor risk management program guide' }
            ].map((template, index) => (
              <Card key={index} variant="glass" padding="md" className="hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-orange-600 dark:text-orange-400 mt-1">
                    <FileText size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">{template.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{template.desc}</p>
                    <a
                      href={`/templates/vendor-risk-toolkit/${template.file}`}
                      download
                      className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
                    >
                      <Download size={16} />
                      Download Template
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card variant="glass" padding="lg" className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Strengthen Your Vendor Risk Program
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
              Get instant access to all vendor risk management templates and frameworks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                icon={<Download size={20} />}
                iconPosition="right"
                onClick={() => window.open('https://ermits.gumroad.com/l/vendor-risk-toolkit', '_blank')}
                className="transform hover:scale-105 transition-transform"
              >
                Purchase on Gumroad - $179
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Download size={20} />}
                iconPosition="right"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/zips/vendor-risk-management-toolkit.zip';
                  link.download = 'vendor-risk-management-toolkit.zip';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="transform hover:scale-105 transition-transform"
              >
                Download Sample ZIP
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Instant digital download • Lifetime access • Free updates
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              Sample ZIP includes preview templates. Full toolkit available on Gumroad.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

