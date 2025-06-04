import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, Search, Users, UserCheck, CheckCircle, ArrowRight, 
  Mail, Phone, MapPin, Presentation
} from 'lucide-react';

export const ServiceOffering: React.FC = () => {
  const { t, getNestedTranslation } = useLanguage();
  
  // Define service information with IDs matching the exact keys in translations.ts
  const services = [
    { id: 'boardBriefings', icon: 'presentation' },
    { id: 'mAndA', icon: 'search' },          // Changed from maDueDiligence to mAndA
    { id: 'crisis', icon: 'shield' },
    { id: 'vCISO', icon: 'user' }            // Changed from vciso to vCISO
  ];
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getServiceIcon = (icon: string, size = 24) => {
    switch (icon) {
      case 'presentation':
        return <Presentation size={size} className="text-navy dark:text-silver" />;
      case 'search':
        return <Search size={size} className="text-navy dark:text-silver" />;
      case 'shield':
        return <Shield size={size} className="text-navy dark:text-silver" />;
      case 'user':
        return <UserCheck size={size} className="text-navy dark:text-silver" />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('services.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">67%</h3>
              <p className="text-gray-600 dark:text-gray-200">
                {t('landing.metrics.riskReduction')}
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">83%</h3>
              <p className="text-gray-600 dark:text-gray-200">
                {t('landing.metrics.timeToInsight')}
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">92%</h3>
              <p className="text-gray-600 dark:text-gray-200">
                {t('landing.metrics.boardConfidence')}
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">3.4x</h3>
              <p className="text-gray-600 dark:text-gray-200">
                {t('landing.metrics.roiImprovement')}
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              // Get the translated service data using getNestedTranslation
              const serviceData = getNestedTranslation(`services.${service.id}`);
              
              return (
                <Card key={service.id} variant="glass" padding="lg" className="h-full">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 dark:text-white card-title">
                        {serviceData.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                        {serviceData.description}
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-2 dark:text-gray-100">{t('services.keyFeatures')}</h4>
                      <ul className="space-y-2 mb-6">
                        {Array.isArray(serviceData.features) && serviceData.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle size={16} className="text-navy dark:text-silver mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        icon={<ArrowRight size={16} />}
                        iconPosition="right"
                      >
                        {t('common.learnMore')}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* STEEL Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">{t('services.steelFramework.title')}</h2>
                <p className="text-gray-600 dark:text-gray-100 mb-6">
                  {t('services.steelFramework.description1')}
                </p>
                <p className="text-gray-600 dark:text-gray-100 mb-6">
                  {t('services.steelFramework.description2')}
                </p>
                <Button 
                  variant="primary" 
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  {t('services.steelFramework.exploreButton')}
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="grid grid-cols-3 gap-4 max-w-md">
                  <div className="aspect-square hexagon bg-[#4c72b0] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">{t('steel.dimensions.political.title')}</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-[#dd8452] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Search size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">{t('steel.dimensions.economic.title')}</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-[#55a868] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Users size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">{t('steel.dimensions.social.title')}</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-[#c44e52] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">{t('steel.dimensions.technology.title')}</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-navy text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <span className="text-sm font-bold">STEEL™</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-[#8172b3] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">{t('steel.dimensions.environmental.title')}</span>
                    </div>
                  </div>
                  <div className="col-start-2 aspect-square hexagon bg-[#937860] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">{t('steel.dimensions.legal.title')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Engagement Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">{t('services.process.title')}</h2>
            
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-10/12 relative">
                {/* Connection line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-navy/20 dark:bg-silver/20 transform -translate-y-1/2 z-0"></div>
                
                {/* Steps */}
                <div className="flex justify-between relative z-10">
                  {[
                    t('services.process.step1'),
                    t('services.process.step2'),
                    t('services.process.step3'),
                    t('services.process.step4'),
                    t('services.process.step5')
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center mb-2">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-center max-w-[100px] dark:text-gray-200">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('services.contact.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  <Mail size={24} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    {t('services.contact.email')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  <Phone size={24} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    {t('services.contact.phone')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  <MapPin size={24} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">Headquarters</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    {t('services.contact.headquarters')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                variant="primary" 
                size="lg"
              >
                {t('services.contact.requestConsultation')}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};