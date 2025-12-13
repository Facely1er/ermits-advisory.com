import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  ArrowRight, Shield,
  Scale, Globe, Building2,
  CheckCircle2, Gauge
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Business Experience data
  const businessExperience = {
    description: t('about.businessExperience.description'),
    sections: [
      {
        category: t('about.businessExperience.internationalTrade.category'),
        title: t('about.businessExperience.internationalTrade.title'),
        description: t('about.businessExperience.internationalTrade.description')
      },
      {
        category: t('about.businessExperience.supplyChain.category'),
        items: [
          {
            title: t('about.businessExperience.supplyChain.agroIndustries.title'),
            description: t('about.businessExperience.supplyChain.agroIndustries.description')
          },
          {
            title: t('about.businessExperience.supplyChain.operations.title'),
            description: t('about.businessExperience.supplyChain.operations.description')
          }
        ]
      }
    ]
  };

  // Technical Certifications data
  const technicalCertifications = {
    description: t('about.technicalCertifications.description'),
    sections: [
      {
        category: t('about.technicalCertifications.security.category'),
        items: [
          {
            name: t('about.technicalCertifications.security.cissp.name'),
            description: t('about.technicalCertifications.security.cissp.description')
          },
          {
            name: t('about.technicalCertifications.security.cisa.name'),
            description: t('about.technicalCertifications.security.cisa.description')
          }
        ]
      },
      {
        category: t('about.technicalCertifications.projectManagement.category'),
        items: [
          {
            name: t('about.technicalCertifications.projectManagement.pmp.name'),
            description: t('about.technicalCertifications.projectManagement.pmp.description')
          },
          {
            name: t('about.technicalCertifications.projectManagement.pmiacp.name'),
            description: t('about.technicalCertifications.projectManagement.pmiacp.description')
          }
        ]
      }
    ]
  };

  // Legal Credentials data
  const legalCredentials = {
    description: t('about.legalCredentials.description'),
    items: [
      {
        name: t('about.legalCredentials.jdllm.name'),
        description: t('about.legalCredentials.jdllm.description')
      }
    ]
  };

  // Professional Memberships
  const professionalMemberships = t('about.professionalMemberships.list', { returnObjects: true }) as string[];

  // Strategic Capabilities
  const strategicCapabilities = t('about.strategicCapabilities.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;


  return (
    <div className="pb-8 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Leadership Excellence Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">{t('about.hero.title')}</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
        </motion.div>

        {/* Main Content: Three Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Column 1: Business Experience */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                    <Building2 size={24} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">{t('about.businessExperience.title')}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {businessExperience.description}
                </p>
                
                <div className="space-y-6">
                  {/* International Trade */}
                  <div>
                    <p className="text-xs font-semibold text-navy/70 dark:text-silver/70 uppercase tracking-wide mb-2">
                      {businessExperience.sections[0].category}
                    </p>
                    <h4 className="font-semibold text-navy dark:text-white mb-2">
                      {businessExperience.sections[0].title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {businessExperience.sections[0].description}
                    </p>
                  </div>

                  {/* Supply Chain & Logistics */}
                  <div>
                    <p className="text-xs font-semibold text-navy/70 dark:text-silver/70 uppercase tracking-wide mb-2">
                      {businessExperience.sections[1].category}
                    </p>
                    {businessExperience.sections[1].items?.map((item, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-semibold text-navy dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Technical Certifications */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                    <Shield size={24} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">{t('about.technicalCertifications.title')}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {technicalCertifications.description}
                </p>
                
                <div className="space-y-6">
                  {technicalCertifications.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx}>
                      <p className="text-xs font-semibold text-navy/70 dark:text-silver/70 uppercase tracking-wide mb-3">
                        {section.category}
                      </p>
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="mb-4">
                          <h4 className="font-semibold text-navy dark:text-white mb-2">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Legal Credentials */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                    <Scale size={24} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">{t('about.legalCredentials.title')}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {legalCredentials.description}
                </p>
                
                <div className="space-y-4">
                  {legalCredentials.items.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-navy dark:text-white mb-2">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Professional Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
            <h2 className="text-2xl font-bold mb-3 dark:text-white">{t('about.professionalMemberships.title')}</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              {t('about.professionalMemberships.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {professionalMemberships.map((membership, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 size={18} className="text-navy dark:text-silver mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{membership}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Cross-Sector Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
            <h2 className="text-2xl font-bold mb-6 dark:text-white uppercase tracking-wide">{t('about.crossSector.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.crossSector.text1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.crossSector.text2')}
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Strategic Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
            <h2 className="text-2xl font-bold mb-3 dark:text-white">{t('about.strategicCapabilities.title')}</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-8">
              {t('about.strategicCapabilities.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicCapabilities.map((capability, idx) => (
                <div key={idx} className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                  <h4 className="font-semibold text-navy dark:text-white mb-2">
                    {capability.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Global Reach, Local Sensibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">{t('about.globalReach.title')}</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  {t('about.globalReach.description')}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Globe size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('about.globalReach.globalThreat.title')}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.globalReach.globalThreat.description')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Scale size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('about.globalReach.legalFramework.title')}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.globalReach.legalFramework.description')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Gauge size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('about.globalReach.strategicImplementation.title')}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.globalReach.strategicImplementation.description')}</p>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={() => navigate('/contact')}
                >
                  {t('about.globalReach.cta')}
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden h-80 relative">
                  <img
                    src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={t('about.globalReach.imageAlt')}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">{t('about.globalReach.imageTitle')}</h3>
                      <p className="text-sm opacity-90">{t('about.globalReach.imageSubtitle')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};