import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { TypewriterText } from '../components/shared/TypewriterText';
import { Shield, TrendingUp, Users, Server, Leaf, Scale, ArrowRight, CheckCircle, Zap, Eye, Target } from 'lucide-react';
import { steelDimensions } from '../data/mockData';
import { LiveMetrics } from '../components/interactive/LiveMetrics';

export const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [showTypewriter, setShowTypewriter] = useState(false);

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

  // Enhanced features for interactive display - now using translations
  const enhancedFeatures = [
    {
      icon: <Zap size={24} className="text-yellow-500" />,
      title: t('landing.advancedCapabilities.realTimeIntelligence.title'),
      description: t('landing.advancedCapabilities.realTimeIntelligence.description'),
      metric: t('landing.advancedCapabilities.realTimeIntelligence.metric')
    },
    {
      icon: <Eye size={24} className="text-blue-500" />,
      title: t('landing.advancedCapabilities.predictiveAnalytics.title'),
      description: t('landing.advancedCapabilities.predictiveAnalytics.description'),
      metric: t('landing.advancedCapabilities.predictiveAnalytics.metric')
    },
    {
      icon: <Target size={24} className="text-green-500" />,
      title: t('landing.advancedCapabilities.strategicFocus.title'),
      description: t('landing.advancedCapabilities.strategicFocus.description'),
      metric: t('landing.advancedCapabilities.strategicFocus.metric')
    },
    {
      icon: <Shield size={24} className="text-purple-500" />,
      title: t('landing.advancedCapabilities.comprehensiveCoverage.title'),
      description: t('landing.advancedCapabilities.comprehensiveCoverage.description'),
      metric: t('landing.advancedCapabilities.comprehensiveCoverage.metric')
    }
  ];

  return (
    <div>
      {/* Enhanced Hero Section - Remove top padding to eliminate gap */}
      <section className="relative bg-gradient-to-b from-navy to-navy-dark text-white pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-silver/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
            onAnimationComplete={() => setShowTypewriter(true)}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('landing.hero.title')}
            </h1>
            <div className="text-xl md:text-2xl mb-8 text-silver min-h-[2em]">
              {showTypewriter && (
                <TypewriterText
                  text={t('landing.hero.subtitle')}
                  delay={500}
                  speed={10}
                />
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                onClick={() => navigate('/steel')}
                className="transform hover:scale-105 transition-transform"
              >
                {t('landing.hero.cta')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Metrics Section - Now with translations */}
      <section className="py-16 bg-silver-light dark:bg-dark-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              {t('landing.realTimeIntelligence.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {t('landing.realTimeIntelligence.subtitle')}
            </p>
          </motion.div>

          <LiveMetrics />
        </div>
      </section>

      {/* Enhanced Features Section - Now with translations */}
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
              {t('landing.advancedCapabilities.title')}
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {t('landing.advancedCapabilities.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {enhancedFeatures.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <InteractiveCard
                  hover3D={true}
                  glowEffect={true}
                  className="bg-white dark:bg-dark-card-bg p-6 text-center h-full"
                >
                  <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-800 inline-flex mb-4">
                    {feature.icon}
                  </div>
                  <div className="text-3xl font-bold text-navy dark:text-white mb-2">
                    {feature.metric}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">
                    {feature.description}
                  </p>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced STEEL Methodology Section */}
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
            {steelDimensions.map((dimension, index) => (
              <motion.div
                key={dimension.id}
                variants={item}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <InteractiveCard
                  hover3D={true}
                  className="relative overflow-hidden steel-card bg-white dark:bg-dark-card-bg"
                >
                  <div className="p-6">
                    <div
                      className="absolute top-0 right-0 w-24 h-24 hexagon"
                      style={{ backgroundColor: dimension.color, opacity: 0.1 }}
                    ></div>
                    <div className="flex items-start relative z-10">
                      <div className="mr-4">
                        {renderSteelIcon(dimension.id)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white steel-dimension-title">
                          {t(`landing.steelOverview.${dimension.id}.title`)}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-100 steel-dimension-desc mb-4">
                          {t(`landing.steelOverview.${dimension.id}.description`)}
                        </p>

                        {/* Risk Score Indicator */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Risk Level</span>
                          <span className="text-sm font-bold" style={{ color: dimension.color }}>
                            {dimension.value}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full"
                            style={{ backgroundColor: dimension.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${dimension.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => navigate('/steel')}
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              className="transform hover:scale-105 transition-transform"
            >
              {t('common.learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
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
              <InteractiveCard
                hover3D={true}
                glowEffect={true}
                className="h-full bg-white dark:bg-dark-card-bg p-6"
              >
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
                  className="transform hover:scale-105 transition-transform"
                >
                  {t('common.learnMore')}
                </Button>
              </InteractiveCard>
            </motion.div>

            <motion.div variants={item}>
              <InteractiveCard
                hover3D={true}
                glowEffect={true}
                className="h-full bg-white dark:bg-dark-card-bg p-6"
              >
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
                  className="transform hover:scale-105 transition-transform"
                >
                  {t('common.learnMore')}
                </Button>
              </InteractiveCard>
            </motion.div>

            <motion.div variants={item}>
              <InteractiveCard
                hover3D={true}
                glowEffect={true}
                className="h-full bg-white dark:bg-dark-card-bg p-6"
              >
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
                  className="transform hover:scale-105 transition-transform"
                >
                  {t('common.learnMore')}
                </Button>
              </InteractiveCard>
            </motion.div>

            <motion.div variants={item}>
              <InteractiveCard
                hover3D={true}
                glowEffect={true}
                className="h-full bg-white dark:bg-dark-card-bg p-6"
              >
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
                  className="transform hover:scale-105 transition-transform"
                >
                  {t('common.learnMore')}
                </Button>
              </InteractiveCard>
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
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                {t('landing.trust.cert1')}
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                {t('landing.trust.cert2')}
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                {t('landing.trust.cert3')}
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                {t('landing.trust.cert4')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section - Reduced padding */}
      <section className={`py-12 ${theme === 'dark' ? 'bg-navy' : 'bg-black'} text-white`}>
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
            <p className="text-xl mb-6 text-silver">
              {t('landing.cta.subtitle')}
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="transform hover:scale-105 transition-transform"
            >
              {t('landing.cta.button')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
