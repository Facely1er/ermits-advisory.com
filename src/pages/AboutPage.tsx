import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Award, Users, Target, Clock, ChevronRight, Globe,
  Calendar, BookOpen, Briefcase, ArrowRight, Shield
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
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

  // Company values
  const companyValues = [
    {
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    },
    {
      icon: <Target size={24} className="text-navy dark:text-silver" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: <BookOpen size={24} className="text-navy dark:text-silver" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">{t('about.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            {t('about.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              icon={<Calendar size={18} />}
              onClick={() => navigate('/contact')}
            >
              {t('about.hero.bookCall')}
            </Button>
          </div>
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">{t('about.story.title')}</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {t('about.story.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {t('about.story.paragraph2')}
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  {t('about.story.paragraph3')}
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center">
                    <Award size={24} className="text-navy dark:text-silver mr-2" />
                    <div>
                      <p className="text-2xl font-bold text-navy dark:text-white">50+</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('about.story.clients')}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe size={24} className="text-navy dark:text-silver mr-2" />
                    <div>
                      <p className="text-2xl font-bold text-navy dark:text-white">12</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('about.story.countries')}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={24} className="text-navy dark:text-silver mr-2" />
                    <div>
                      <p className="text-2xl font-bold text-navy dark:text-white">200+</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('about.story.projects')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden h-80 relative">
                  <img 
                    src="/src/assets/image.png" 
                    alt="ERMITS Advisory team" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div key={index} variants={item}>
                <Card variant="glass" padding="md" className="h-full">
                  <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 inline-flex mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">{t('about.global.title')}</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {t('about.global.description')}
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Globe size={16} className="text-navy dark:text-silver" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-200">{t('about.global.offices.us')}</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={() => navigate('/contact')}
                >
                  {t('about.global.contact')}
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden h-80 bg-gray-200 dark:bg-gray-700 relative">
                  {/* This would be a map component in a real implementation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      {t('about.global.mapPlaceholder')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card variant="solid" padding="lg" className="bg-navy text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
              <p className="text-silver max-w-2xl mx-auto mb-8">
                {t('about.cta.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  icon={<Calendar size={18} />}
                  onClick={() => navigate('/contact')}
                >
                  {t('about.cta.schedule')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                  onClick={() => navigate('/services')}
                >
                  {t('about.cta.learn')}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};