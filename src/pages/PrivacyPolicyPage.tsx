import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, Mail, Phone, Clock, Eye, Database, 
  UserCheck, ArrowLeft, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();
  
  const sections = [
    {
      id: 'information-collection',
      title: t('privacy.sections.informationCollection.title'),
      icon: <Database size={24} className="text-navy dark:text-silver" />,
      content: Array.isArray(t('privacy.sections.informationCollection.items')) 
        ? t('privacy.sections.informationCollection.items') as string[]
        : [
          'Personal identification information (name, email address, phone number, company)',
          'Professional information (job title, company size, industry)',
          'Technical information (IP address, browser type, device information)',
          'Usage data (pages visited, time spent, interactions)',
          'Cookies and tracking technologies data'
        ]
    },
    {
      id: 'information-use',
      title: t('privacy.sections.informationUse.title'),
      icon: <UserCheck size={24} className="text-navy dark:text-silver" />,
      content: Array.isArray(t('privacy.sections.informationUse.items'))
        ? t('privacy.sections.informationUse.items') as string[]
        : [
          'Provide and improve our advisory services',
          'Communicate with you about our services and updates',
          'Customize your experience on our website',
          'Conduct research and analysis to improve our offerings',
          'Comply with legal obligations and protect our rights'
        ]
    },
    {
      id: 'information-sharing',
      title: t('privacy.sections.informationSharing.title'),
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      content: Array.isArray(t('privacy.sections.informationSharing.items'))
        ? t('privacy.sections.informationSharing.items') as string[]
        : [
          'We do not sell, trade, or rent your personal information',
          'Information may be shared with trusted service providers under strict confidentiality',
          'Legal compliance: we may disclose information when required by law',
          'Business transfers: information may be transferred in merger or acquisition scenarios',
          'With your explicit consent for specific purposes'
        ]
    },
    {
      id: 'data-security',
      title: t('privacy.sections.dataSecurity.title'),
      icon: <Eye size={24} className="text-navy dark:text-silver" />,
      content: Array.isArray(t('privacy.sections.dataSecurity.items'))
        ? t('privacy.sections.dataSecurity.items') as string[]
        : [
          'Industry-standard encryption for data transmission and storage',
          'Regular security assessments and vulnerability testing',
          'Access controls and authentication measures',
          'Employee training on data protection and privacy',
          'Incident response procedures for potential breaches'
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
            {t('privacy.backToHome')}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('privacy.title')}</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            {t('privacy.subtitle')}
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
                <Shield size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">{t('privacy.commitment.title')}</h2>
                <p className="text-silver mb-4">
                  {t('privacy.commitment.description')}
                </p>
                <ul className="space-y-2 text-silver">
                  {Array.isArray(t('privacy.commitment.features')) 
                    ? (t('privacy.commitment.features') as string[]).map((feature: string, index: number) => (
                        <li key={index}>• {feature}</li>
                      ))
                    : [
                        '• GDPR and CCPA compliant data handling',
                        '• SOC 2 Type II certified security controls',
                        '• Regular third-party security audits',
                        '• Transparent data processing practices'
                      ].map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))
                  }
                </ul>
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
                    <h3 className="text-xl font-bol mb-4 dark:text-white">{section.title}</h3>
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

        {/* Your Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">{t('privacy.rights.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 dark:text-gray-100">{t('privacy.rights.access.title')}</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  {t('privacy.rights.access.description')}
                </p>
                
                <h4 className="font-semibold mb-2 dark:text-gray-100">{t('privacy.rights.deletion.title')}</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  {t('privacy.rights.deletion.description')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 dark:text-gray-100">{t('privacy.rights.marketing.title')}</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  {t('privacy.rights.marketing.description')}
                </p>
                
                <h4 className="font-semibold mb-2 dark:text-gray-100">{t('privacy.rights.cookies.title')}</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  {t('privacy.rights.cookies.description')}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">{t('privacy.contact.title')}</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              {t('privacy.contact.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-silver/20 dark:bg-navy/40 mr-3">
                  <Mail size={20} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">{t('privacy.contact.email')}</h4>
                  <p className="text-gray-600 dark:text-gray-200">privacy@ermits.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-silver/20 dark:bg-navy/40 mr-3">
                  <Phone size={20} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">{t('privacy.contact.phone')}</h4>
                  <p className="text-gray-600 dark:text-gray-200">+1 (240) 599-0102</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-silver/20 dark:bg-navy/40 mr-3">
                  <Clock size={20} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">{t('privacy.contact.responseTime')}</h4>
                  <p className="text-gray-600 dark:text-gray-200">{t('privacy.contact.responseTimeValue')}</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/terms">
              <Button variant="outline" size="sm">
                Terms of Service
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
              GDPR Information
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};