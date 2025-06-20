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
      title: t('terms.sections.acceptance.title'),
      icon: <CheckCircle size={24} className="text-navy dark:text-silver" />,
      content: t('terms.sections.acceptance.items')
    },
    {
      id: 'services',
      title: t('terms.sections.services.title'),
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      content: t('terms.sections.services.items')
    },
    {
      id: 'responsibilities',
      title: t('terms.sections.responsibilities.title'),
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      content: t('terms.sections.responsibilities.items')
    },
    {
      id: 'limitations',
      title: t('terms.sections.limitations.title'),
      icon: <AlertTriangle size={24} className="text-orange-500" />,
      content: t('terms.sections.limitations.items')
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('terms.title')}</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            {t('terms.lastUpdated')}: {new Date().toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            {t('terms.subtitle')}
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
                <h2 className="text-2xl font-bold mb-3">{t('terms.professionalAgreement.title')}</h2>
                <p className="text-silver mb-4">
                  {t('terms.professionalAgreement.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-silver">
                  <div>
                    <h4 className="font-semibold mb-2">{t('terms.professionalAgreement.included.title')}:</h4>
                    <ul className="space-y-1 text-sm">
                      {Array.isArray(t('terms.professionalAgreement.included.items')) 
                        ? (t('terms.professionalAgreement.included.items') as string[]).map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))
                        : null
                      }
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t('terms.professionalAgreement.obligations.title')}:</h4>
                    <ul className="space-y-1 text-sm">
                      {Array.isArray(t('terms.professionalAgreement.obligations.items')) 
                        ? (t('terms.professionalAgreement.obligations.items') as string[]).map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                          ))
                        : null
                      }
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
                      {Array.isArray(section.content) && section.content.map((item: string, itemIndex: number) => (
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
            <h3 className="text-xl font-bold mb-4 dark:text-white">{t('terms.confidentiality.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 dark:text-gray-100">{t('terms.confidentiality.clientConfidentiality.title')}</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  {t('terms.confidentiality.clientConfidentiality.description')}
                </p>
                
                <h4 className="font-semibold mb-2 dark:text-gray-100">{t('terms.confidentiality.workProduct.title')}</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  {t('terms.confidentiality.workProduct.description')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 dark:text-gray-100">{t('terms.confidentiality.steelMethodology.title')}</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  {t('terms.confidentiality.steelMethodology.description')}
                </p>
                
                <h4 className="font-semibold mb-2 dark:text-gray-100">{t('terms.confidentiality.nonDisclosure.title')}</h4>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  {t('terms.confidentiality.nonDisclosure.description')}
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
                <h3 className="text-xl font-bold mb-4 dark:text-white">{t('terms.payment.title')}</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-200">
                  {Array.isArray(t('terms.payment.items')) && (t('terms.payment.items') as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{t('terms.termination.title')}</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-200">
                  {Array.isArray(t('terms.termination.items')) && (t('terms.termination.items') as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <AlertTriangle size={16} className="text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
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
                <h3 className="text-xl font-bold mb-4 dark:text-white">{t('terms.contact.title')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {t('terms.contact.description')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FileText size={16} className="text-navy dark:text-silver mr-2" />
                    <span className="text-gray-600 dark:text-gray-200">{t('terms.contact.email')}</span>
                  </div>
                  <div className="flex items-center">
                    <Scale size={16} className="text-navy dark:text-silver mr-2" />
                    <span className="text-gray-600 dark:text-gray-200">{t('terms.contact.phone')}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{t('terms.governingLaw.title')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {t('terms.governingLaw.description')}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('terms.governingLaw.international')}
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
                {t('footer.legal.privacy')}
              </Button>
            </Link>
            <Link to="/cookies">
              <Button variant="outline" size="sm">
                {t('footer.legal.cookies')}
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