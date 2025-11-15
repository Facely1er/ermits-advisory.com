import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  FileText, Scale, AlertTriangle, CheckCircle, 
  ArrowLeft, ExternalLink, Shield, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsOfServicePage: React.FC = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <CheckCircle size={24} className="text-navy dark:text-silver" />,
      content: [
        'By accessing and using our services, you accept and agree to be bound by these terms',
        'These terms constitute a legally binding agreement between you and ERMITS Advisory',
        'If you do not agree to these terms, please do not use our services',
        'We reserve the right to modify these terms at any time with appropriate notice'
      ]
    },
    {
      id: 'services',
      title: 'Services Provided',
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      content: [
        'Strategic security advisory and consulting services',
        'STEEL framework risk assessments and analysis',
        'Virtual CISO (vCISO) services and ongoing security guidance',
        'Custom security strategy development and implementation support',
        'Board-level security presentations and executive briefings'
      ]
    },
    {
      id: 'responsibilities',
      title: 'Client Responsibilities',
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      content: [
        'Provide accurate and complete information for assessments',
        'Implement recommended security measures in a timely manner',
        'Maintain confidentiality of proprietary methodologies and tools',
        'Comply with all applicable laws and regulations',
        'Pay fees according to agreed payment terms'
      ]
    },
    {
      id: 'limitations',
      title: 'Limitations of Liability',
      icon: <AlertTriangle size={24} className="text-orange-500" />,
      content: [
        'Services are provided on an "as is" basis without warranties',
        'We are not liable for indirect, incidental, or consequential damages',
        'Total liability shall not exceed fees paid for services in the preceding 12 months',
        'Recommendations are advisory in nature and implementation is at client discretion',
        'We do not guarantee specific security outcomes or prevention of all threats'
      ]
    }
  ];

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            Please read these terms carefully before using our services
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Scale size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Professional Services Agreement</h2>
                <p className="text-silver mb-4">
                  These terms govern your use of ERMITS Advisory professional services and establish the framework for our professional relationship.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-silver">
                  <div>
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Professional advisory services</li>
                      <li>• STEEL framework assessments</li>
                      <li>• Strategic guidance and recommendations</li>
                      <li>• Confidential analysis and reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Your Obligations:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Provide accurate information</li>
                      <li>• Timely payment of fees</li>
                      <li>• Maintain confidentiality</li>
                      <li>• Implement recommendations responsibly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8 mb-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              <Card variant="glass" padding="lg">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 dark:text-white">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Confidentiality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Confidentiality and Intellectual Property</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 dark:text-gray-100">Client Confidentiality</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  All client information and assessment results are kept strictly confidential
                </p>
                
                <h4 className="font-semibold mb-2 dark:text-gray-100">Work Product Ownership</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Deliverables become client property upon payment, subject to our methodology rights
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 dark:text-gray-100">STEEL™ Methodology</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  The STEEL framework and methodology remain proprietary to ERMITS Advisory
                </p>
                
                <h4 className="font-semibold mb-2 dark:text-gray-100">Non-Disclosure</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Both parties agree to maintain confidentiality of proprietary information
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Payment and Termination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Payment Terms</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-200">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Fees are due according to agreed payment schedule
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Late payments may incur interest charges
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Travel and expenses billed separately when applicable
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    All fees are non-refundable once services commence
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Termination</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-200">
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                    Either party may terminate with 30 days written notice
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                    Immediate termination for material breach of terms
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                    Client remains liable for fees for services rendered
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                    Confidentiality obligations survive termination
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact and Governing Law */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Questions About Terms?</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  Contact our legal team for clarification or questions about these terms
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FileText size={16} className="text-navy dark:text-silver mr-2" />
                    <span className="text-gray-600 dark:text-gray-200">legal@ermits.com</span>
                  </div>
                  <div className="flex items-center">
                    <Scale size={16} className="text-navy dark:text-silver mr-2" />
                    <span className="text-gray-600 dark:text-gray-200">+1 (240) 599-0102</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Governing Law</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  These terms are governed by the laws of Maryland, United States, without regard to conflict of law principles
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  International clients: Additional terms may apply based on local jurisdiction
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
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
            <Button 
              variant="outline" 
              size="sm"
              icon={<ExternalLink size={16} />}
              iconPosition="right"
            >
              Master Service Agreement
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
