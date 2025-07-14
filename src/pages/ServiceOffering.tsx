import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, Search, Users, UserCheck, CheckCircle, ArrowRight, 
  Mail, Phone, MapPin, Presentation, Activity, Lightbulb,
  BarChart2, FileText, Calendar, Download
} from 'lucide-react';

export const ServiceOffering: React.FC = () => {
  const { t, getNestedTranslation } = useLanguage();
  const navigate = useNavigate();
  
  // Enhanced Advisory Process based on STEEL methodology
  const advisoryProcessItems = [
    {
      id: 'strategicDiscovery',
      icon: <Search size={32} className="text-navy dark:text-silver" />,
      title: t('steelPage.advisoryProcess.strategicDiscovery.title'),
      description: t('steelPage.advisoryProcess.strategicDiscovery.description')
    },
    {
      id: 'modeling',
      icon: <Activity size={32} className="text-navy dark:text-silver" />,
      title: t('steelPage.advisoryProcess.modeling.title'),
      description: t('steelPage.advisoryProcess.modeling.description')
    },
    {
      id: 'synthesis',
      icon: <Lightbulb size={32} className="text-navy dark:text-silver" />,
      title: t('steelPage.advisoryProcess.synthesis.title'),
      description: t('steelPage.advisoryProcess.synthesis.description')
    },
    {
      id: 'briefing',
      icon: <Presentation size={32} className="text-navy dark:text-silver" />,
      title: t('steelPage.advisoryProcess.briefing.title'),
      description: t('steelPage.advisoryProcess.briefing.description')
    }
  ];
  
  // Define service information with IDs matching the exact keys in translations.ts
  const services = [
    { id: 'boardBriefings', icon: 'presentation' },
    { id: 'mAndA', icon: 'search' },
    { id: 'crisis', icon: 'shield' },
    { id: 'vCISO', icon: 'user' }
  ];
  
  // What Makes STEEL Different items
  const whatMakesDifferentItems = [
    {
      id: 'predictiveIntelligence',
      icon: <Lightbulb size={24} className="text-navy dark:text-silver" />,
      title: t('steelPage.whatMakesDifferent.predictiveIntelligence.title'),
      description: t('steelPage.whatMakesDifferent.predictiveIntelligence.description'),
      link: t('steelPage.whatMakesDifferent.predictiveIntelligence.link')
    },
    {
      id: 'enhancedPestel',
      icon: <BarChart2 size={24} className="text-navy dark:text-silver" />,
      title: t('steelPage.whatMakesDifferent.enhancedPestel.title'),
      description: t('steelPage.whatMakesDifferent.enhancedPestel.description'),
      link: t('steelPage.whatMakesDifferent.enhancedPestel.link')
    },
    {
      id: 'expertPartnership',
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      title: t('steelPage.whatMakesDifferent.expertPartnership.title'),
      description: t('steelPage.whatMakesDifferent.expertPartnership.description'),
      link: t('steelPage.whatMakesDifferent.expertPartnership.link')
    },
    {
      id: 'frameworkIntegration',
      icon: <FileText size={24} className="text-navy dark:text-silver" />,
      title: t('steelPage.whatMakesDifferent.frameworkIntegration.title'),
      description: t('steelPage.whatMakesDifferent.frameworkIntegration.description'),
      link: t('steelPage.whatMakesDifferent.frameworkIntegration.link')
    }
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
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">{t('services.title')}</h1>
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

        {/* What Makes STEEL Different Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('steelPage.whatMakesDifferent.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {t('steelPage.whatMakesDifferent.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatMakesDifferentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <Card variant="glass" padding="lg" className="h-full">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4">{item.description}</p>
                      <button className="text-navy dark:text-silver font-medium hover:underline text-sm flex items-center">
                        {item.link}
                        <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Advisory Process Section - Main Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('steelPage.advisoryProcess.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {t('steelPage.advisoryProcess.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryProcessItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <Card variant="glass" padding="lg" className="h-full text-center">
                  <div className="p-4 rounded-full bg-silver/20 dark:bg-navy/40 inline-flex mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('services.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
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
                        onClick={() => navigate('/contact')}
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
          transition={{ delay: 0.5 }}
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
                  onClick={() => navigate('/steel')}
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
                      <BarChart2 size={24} className="mx-auto mb-2" />
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

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
                onClick={() => navigate('/contact')}
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