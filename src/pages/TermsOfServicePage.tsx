import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  FileText, Scale, AlertTriangle, CheckCircle, 
  ArrowLeft, ExternalLink, Shield, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsOfServicePage: React.FC = () => {
  const { t } = useLanguage();
  
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <CheckCircle size={24} className="text-navy dark:text-silver" />,
      content: [
        'By accessing or using ERMITS Advisory services, you agree to be bound by these Terms of Service',
        'These terms apply to all visitors, users, and clients of our services',
        'If you disagree with any part of these terms, you may not access our services',
        'We reserve the right to update these terms at any time with notice'
      ]
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      content: [
        'Cybersecurity advisory and consulting services',
        'Board briefings and executive communications',
        'Risk assessment using our proprietary STEEL™ methodology',
        'Crisis management and incident response guidance',
        'Virtual CISO and strategic security leadership',
        'Merger and acquisition due diligence services'
      ]
    },
    {
      id: 'responsibilities',
      title: 'User Responsibilities',
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      content: [
        'Provide accurate and complete information when requested',
        'Maintain the confidentiality of any access credentials',
        'Use our services only for lawful business purposes',
        'Comply with all applicable laws and regulations',
        'Notify us immediately of any security breaches or unauthorized access'
      ]
    },
    {
      id: 'limitations',
      title: 'Limitations and Disclaimers',
      icon: <AlertTriangle size={24} className="text-orange-500" />,
      content: [
        'Services are provided "as is" without warranties of any kind',
        'We do not guarantee specific outcomes or results',
        'Our liability is limited to the amount paid for services',
        'We are not responsible for third-party actions or breaches',
        'Force majeure events may affect service delivery'
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4">
            <ArrowLeft size={16} className="mr-2" />
            {t('terms.backToHome')}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Terms of Service</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            These Terms of Service govern your use of ERMITS Advisory's services and website. 
            Please read them carefully before engaging our services.
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
                  ERMITS Advisory provides professional cybersecurity advisory services to enterprises, 
                  government agencies, and other organizations. These terms establish the framework for 
                  our professional relationship.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-silver">
                  <div>
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Professional advisory services</li>
                      <li>• Access to our STEEL™ methodology</li>
                      <li>• Confidential consultation</li>
                      <li>• Expert guidance and recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Your Obligations:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Provide necessary information</li>
                      <li>• Maintain confidentiality</li>
                      <li>• Pay fees as agreed</li>
                      <li>• Use services lawfully</li>
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
                  We maintain strict confidentiality of all client information and will not disclose 
                  any confidential information without written consent, except as required by law.
                </p>
                
                <h4 className="font-semibold mb-2 dark:text-gray-100">Work Product</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Deliverables created specifically for clients belong to the client. Our methodologies, 
                  tools, and general knowledge remain our intellectual property.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 dark:text-gray-100">STEEL™ Methodology</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Our proprietary STEEL™ methodology is protected intellectual property. 
                  Use is granted only for the specific engagement scope.
                </p>
                
                <h4 className="font-semibold mb-2 dark:text-gray-100">Non-Disclosure</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Separate NDAs may be required for specific engagements involving 
                  highly sensitive information or advanced threat intelligence.
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
                    Invoices are due within 30 days of issuance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Late payments may incur interest charges
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Disputed charges must be reported within 60 days
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    Travel expenses billed separately when applicable
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
                    Immediate termination for material breach
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                    Outstanding fees remain due after termination
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
                <h3 className="text-xl font-bold mb-4 dark:text-white">Questions About These Terms</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  If you have questions about these Terms of Service, please contact our legal team:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FileText size={16} className="text-navy dark:text-silver mr-2" />
                    <span className="text-gray-600 dark:text-gray-200">legal@ermits.com</span>
                  </div>
                  <div className="flex items-center">
                    <Scale size={16} className="text-navy dark:text-silver mr-2" />
                    <span className="text-gray-600 dark:text-gray-200">+1 (888) 618-6160</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">Governing Law</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  These terms are governed by the laws of Maryland, United States. Any disputes will be 
                  resolved through arbitration in Gaithersburg, Maryland.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  For international clients, specific jurisdictional terms may apply as outlined 
                  in individual service agreements.
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