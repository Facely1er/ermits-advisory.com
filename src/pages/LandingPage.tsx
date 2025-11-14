import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/shared/Button';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { TypewriterText } from '../components/shared/TypewriterText';
import { Shield, TrendingUp, Users, Server, Leaf, Scale, ArrowRight, CheckCircle, Zap, Eye, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { steelDimensions } from '../data/mockData';
import { LiveMetrics } from '../components/interactive/LiveMetrics';

export const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  
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

  // Carousel auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % enhancedFeatures.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [enhancedFeatures.length]);

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) => (prev + 1) % enhancedFeatures.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) => (prev - 1 + enhancedFeatures.length) % enhancedFeatures.length);
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section - Reduced size */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy text-white pt-12 pb-8 md:pt-16 md:pb-12 overflow-hidden">
        {/* Enhanced background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy-dark/90 to-navy/95"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover bg-no-repeat"></div>
        
        {/* Animated background elements - enhanced */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-silver/30 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, -150],
                opacity: [0, 0.8, 0],
                scale: [1, 1.5, 0.5]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
            onAnimationComplete={() => setShowTypewriter(true)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-silver mb-6">
                <Shield size={16} className="mr-2" />
                Enterprise Risk Management
              </span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
                {t('landing.hero.title')}
              </span>
            </h1>
            <div className="text-base sm:text-lg md:text-xl mb-8 text-silver/90 min-h-[2em] max-w-3xl mx-auto leading-relaxed">
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                variant="secondary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                onClick={() => navigate('/steel')}
                className="transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                aria-label="Explore STEEL Framework"
              >
                {t('landing.hero.cta')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contact')}
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all"
                aria-label="Get Started - Contact Us"
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Metrics Section - Now with translations */}
      <section className="py-16 md:py-20 bg-silver-light dark:bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-16 md:py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          
          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Navigation Buttons */}
            <button
              onClick={prevFeature}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-dark-card-bg p-2 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="Previous feature"
            >
              <ChevronLeft size={24} className="text-navy dark:text-white" />
            </button>
            <button
              onClick={nextFeature}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-dark-card-bg p-2 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
              aria-label="Next feature"
            >
              <ChevronRight size={24} className="text-navy dark:text-white" />
            </button>

            {/* Carousel Content */}
            <div className="overflow-hidden px-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatureIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {enhancedFeatures.map((feature, index) => {
                    const position = (index - currentFeatureIndex + enhancedFeatures.length) % enhancedFeatures.length;
                    const isActive = index === currentFeatureIndex;
                    
                    return (
                      <motion.div 
                        key={`${currentFeatureIndex}-${index}`}
                        initial={{ opacity: 0.5, scale: 0.9 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0.6,
                          scale: isActive ? 1 : 0.95
                        }}
                        transition={{ duration: 0.4 }}
                        className={isActive ? 'z-10' : ''}
                      >
                        <InteractiveCard 
                          hover3D={true}
                          glowEffect={isActive}
                          className={`bg-white dark:bg-dark-card-bg p-6 text-center h-full transition-all ${
                            isActive ? 'ring-2 ring-navy dark:ring-white shadow-xl' : ''
                          }`}
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
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {enhancedFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatureIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentFeatureIndex
                      ? 'w-8 bg-navy dark:bg-white'
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced STEEL Methodology Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-navy-dark/80 steel-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-16 md:py-20 bg-silver-light dark:bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  {t('landing.services.steel.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  {t('landing.services.steel.description')}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/steel')}
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

            <motion.div variants={item}>
              <InteractiveCard
                hover3D={true}
                glowEffect={true}
                className="h-full bg-white dark:bg-dark-card-bg p-6"
              >
                <h3 className="text-xl font-bold mb-3 dark:text-white card-title">
                  {t('landing.services.dashboard.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  {t('landing.services.dashboard.description')}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/dashboard')}
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
      <section className="py-16 md:py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Enhanced CTA Section */}
      <section className={`py-16 md:py-20 ${theme === 'dark' ? 'bg-gradient-to-r from-navy to-navy-dark' : 'bg-gradient-to-r from-black to-gray-900'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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