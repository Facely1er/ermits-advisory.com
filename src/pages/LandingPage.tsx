import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Shield, TrendingUp, Users, Server, Leaf, Scale, ArrowRight, CheckCircle } from 'lucide-react';
import { steelDimensions } from '../data/mockData';

export const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();
  
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

  const renderSteelIcon = (id: string) => {
    switch (id) {
      case 'political':
        return <Shield size={32} className="text-[#4c72b0]" />;
      case 'economic':
        return <TrendingUp size={32} className="text-[#dd8452]" />;
      case 'social':
        return <Users size={32} className="text-[#55a868]" />;
      case 'technology':
        return <Server size={32} className="text-[#c44e52]" />;
      case 'environmental':
        return <Leaf size={32} className="text-[#8172b3]" />;
      case 'legal':
        return <Scale size={32} className="text-[#937860]" />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-navy to-navy-dark text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('landing.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-silver">
              {t('landing.hero.subtitle')}
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              onClick={() => navigate('/steel')}
            >
              {t('landing.hero.cta')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-silver-light dark:bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2 variants={item} className="text-3xl font-bold mb-4 dark:text-white">
              {t('landing.metrics.title')}
            </motion.h2>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
        </div>
      </section>

      {/* STEEL Methodology Section */}
      <section className="py-16 bg-white dark:bg-navy-dark/80 steel-section">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2 variants={item} className="text-3xl font-bold mb-4 dark:text-white steel-title">
              {t('landing.steelOverview.title')}
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto steel-subtitle">
              {t('landing.steelOverview.subtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {steelDimensions.map((dimension) => (
              <motion.div 
                key={dimension.id}
                variants={item}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card variant="glass" className="relative overflow-hidden steel-card">
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 hexagon" 
                    style={{ backgroundColor: dimension.color, opacity: 0.1 }}
                  ></div>
                  <div className="flex items-start">
                    <div className="mr-4">
                      {renderSteelIcon(dimension.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white steel-dimension-title">
                        {t(`landing.steelOverview.${dimension.id}.title`)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-100 steel-dimension-desc">
                        {t(`landing.steelOverview.${dimension.id}.description`)}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              onClick={() => navigate('/steel')}
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              {t('common.learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-silver-light dark:bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2 variants={item} className="text-3xl font-bold mb-4 dark:text-white">
              {t('landing.services.title')}
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {t('landing.services.subtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={item}>
              <Card variant="glass" className="h-full">
                <h3 className="text-xl font-bold mb-3 dark:text-white card-title">
                  {t('landing.services.boardBriefings.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  {t('landing.services.boardBriefings.description')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/services')}
                >
                  {t('common.learnMore')}
                </Button>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card variant="glass" className="h-full">
                <h3 className="text-xl font-bold mb-3 dark:text-white card-title">
                  {t('landing.services.mAndA.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  {t('landing.services.mAndA.description')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/services')}
                >
                  {t('common.learnMore')}
                </Button>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card variant="glass" className="h-full">
                <h3 className="text-xl font-bold mb-3 dark:text-white card-title">
                  {t('landing.services.crisis.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  {t('landing.services.crisis.description')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/services')}
                >
                  {t('common.learnMore')}
                </Button>
              </Card>
            </motion.div>
            
            <motion.div variants={item}>
              <Card variant="glass" className="h-full">
                <h3 className="text-xl font-bold mb-3 dark:text-white card-title">
                  {t('landing.services.vCISO.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  {t('landing.services.vCISO.description')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/services')}
                >
                  {t('common.learnMore')}
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2 variants={item} className="text-3xl font-bold mb-4 dark:text-white">
              {t('landing.trust.title')}
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {t('landing.trust.subtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <p className="text-center font-medium dark:text-gray-100">
                {t('landing.trust.cert1')}
              </p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <p className="text-center font-medium dark:text-gray-100">
                {t('landing.trust.cert2')}
              </p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <p className="text-center font-medium dark:text-gray-100">
                {t('landing.trust.cert3')}
              </p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <p className="text-center font-medium dark:text-gray-100">
                {t('landing.trust.cert4')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-navy' : 'bg-black'} text-white`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('landing.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-silver">
              {t('landing.cta.subtitle')}
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/contact')}
            >
              {t('landing.cta.button')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};