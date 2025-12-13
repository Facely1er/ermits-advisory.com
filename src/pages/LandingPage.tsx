import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/shared/Button';
import { Card } from '../components/shared/Card';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { HeroCarousel } from '../components/shared/HeroCarousel';
import { ArrowRight, CheckCircle, Zap, Target } from 'lucide-react';
import { ServiceSelector } from '../components/interactive/ServiceSelector';
import heroBackground from '../assets/background.jpg';

export const LandingPage: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
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

  return (
    <div>
      {/* Hero Section - Enhanced STEEL Risk Diagnostic Framework */}
      <section className="relative min-h-[500px] md:min-h-[600px] py-20 md:py-24 flex items-center justify-center text-white overflow-hidden">
        <style>{`
          .hero-background-image {
            background-image: url(${heroBackground});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}</style>
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-background-image" />
          {/* Dark overlay for better text contrast - lighter to show padlock/network diagram */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy-dark/80 to-navy/85" />
          {/* Subtle animated glow on padlock/connections */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-transparent to-blue-500/15"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        {/* Floating particles for visual interest */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Heading with Enhanced Carousel */}
            <div className="mb-8 min-h-[140px] md:min-h-[180px] flex items-center justify-center">
              <HeroCarousel
                slides={[
                  {
                    id: '1',
                    headline: t('landing.hero.slides.slide1.headline'),
                    highlight: t('landing.hero.slides.slide1.highlight')
                  },
                  {
                    id: '2',
                    headline: t('landing.hero.slides.slide2.headline'),
                    highlight: t('landing.hero.slides.slide2.highlight')
                  },
                  {
                    id: '3',
                    headline: t('landing.hero.slides.slide3.headline'),
                    highlight: t('landing.hero.slides.slide3.highlight')
                  },
                  {
                    id: '4',
                    headline: t('landing.hero.slides.slide4.headline'),
                    highlight: t('landing.hero.slides.slide4.highlight')
                  }
                ]}
                autoRotateInterval={3500}
              />
            </div>

            {/* Purpose Statement */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-white/85 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              {t('landing.hero.purposeStatement')}
            </motion.p>

            {/* Key Benefits Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90">
                <CheckCircle size={16} className="text-cyan-400" />
                <span>{t('landing.hero.benefits.strategicQuestions')}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90">
                <Zap size={16} className="text-yellow-400" />
                <span>{t('landing.hero.benefits.realTimeIntelligence')}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90">
                <Target size={16} className="text-green-400" />
                <span>{t('landing.hero.benefits.actionableOutcomes')}</span>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                variant="secondary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-10 py-5 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 hover:scale-105 text-lg"
              >
                {t('landing.hero.cta.contact')}
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => navigate('/services')}
                className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold px-10 py-5 rounded-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                {t('landing.hero.cta.exploreServices')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Methodology: Powered by STEEL™ */}
      <section className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              {t('landing.methodology.subtitle')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {t('landing.methodology.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              {t('landing.methodology.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-cyan-900/30 dark:via-blue-900/30 dark:to-cyan-900/30 border border-blue-200 dark:border-cyan-700/50 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">
                  {t('landing.methodology.card.title')}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {t('landing.methodology.card.description')}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/80 dark:border dark:border-cyan-500/30 rounded-lg">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('landing.methodology.card.pillars.strategic')}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/80 dark:border dark:border-cyan-500/30 rounded-lg">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('landing.methodology.card.pillars.threat')}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/80 dark:border dark:border-cyan-500/30 rounded-lg">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('landing.methodology.card.pillars.enterprise')}</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/method/steel')}
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                {t('landing.methodology.cta')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Architecture */}
      <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              {t('landing.serviceArchitecture.subtitle')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {t('landing.serviceArchitecture.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              {t('landing.serviceArchitecture.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ServiceSelector />
          </motion.div>
            {/* Layer 1: Assess */}
        </div>
      </section>


      {/* Engagement Model / How It Works Section - Luxury */}
      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              {t('landing.engagement.subtitle')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {t('landing.engagement.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('landing.engagement.description')}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={item}>
              <Card className="luxury-card luxury-hover h-full p-8 bg-white/95 dark:bg-dark-luxury-surface/95 border-luxury-gold/20 dark:border-luxury-gold/30">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                  {t('landing.engagement.steps.step1.label')}
                </div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  {t('landing.engagement.steps.step1.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {t('landing.engagement.steps.step1.description')}
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                  {t('landing.engagement.steps.step1.items', { returnObjects: true }).map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="luxury-card luxury-hover h-full p-8 bg-white/95 dark:bg-dark-luxury-surface/95 border-luxury-gold/20 dark:border-luxury-gold/30">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                  {t('landing.engagement.steps.step2.label')}
                </div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  {t('landing.engagement.steps.step2.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {t('landing.engagement.steps.step2.description')}
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                  {t('landing.engagement.steps.step2.items', { returnObjects: true }).map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="luxury-card luxury-hover h-full p-8 bg-white/95 dark:bg-dark-luxury-surface/95 border-luxury-gold/20 dark:border-luxury-gold/30">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                  {t('landing.engagement.steps.step3.label')}
                </div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  {t('landing.engagement.steps.step3.title')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {t('landing.engagement.steps.step3.description')}
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                  {t('landing.engagement.steps.step3.items', { returnObjects: true }).map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Use Cases Section - Luxury */}
      <section id="use-cases" className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Use cases
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Where STEEL™ delivers outsized value first
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Start where the threat landscape is moving faster than your internal bandwidth.
              ERMITS Advisory focuses STEEL™ on concrete decision points — not academic models.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={item}>
              <Card className="h-full p-5 bg-white dark:bg-slate-900/96 border-slate-700/45 hover:shadow-xl transition-shadow">
                <h3 className="text-base font-semibold mb-2 dark:text-white">
                  SMBs under ransomware pressure
                </h3>
                <div className="text-xs text-slate-400 mb-3">
                  CyberCaution™ · CyberSoluce™
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Identify which ransomware families, regions, and attack chains matter for your sector, then prioritize affordable controls instead of generic checklists.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="h-full p-5 bg-white dark:bg-slate-900/96 border-slate-700/45 hover:shadow-xl transition-shadow">
                <h3 className="text-base font-semibold mb-2 dark:text-white">
                  Privacy-heavy service providers
                </h3>
                <div className="text-xs text-slate-400 mb-3">
                  CyberCorrect™ · SocialCaution™
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Blend regulatory risk (GDPR, CCPA, LGPD, DPDP, etc.) with behavioral trends and data broker exposure to build a realistic privacy roadmap.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="h-full p-5 bg-white dark:bg-slate-900/96 border-slate-700/45 hover:shadow-xl transition-shadow">
                <h3 className="text-base font-semibold mb-2 dark:text-white">
                  Complex vendor & SBOM exposure
                </h3>
                <div className="text-xs text-slate-400 mb-3">
                  VendorSoluce™ · VendorTal · TechnoSoluce™
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Combine geopolitics, regulation, and software supply-chain indicators to see where your vendor stack and SBOMs are most fragile.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="h-full p-5 bg-white dark:bg-slate-900/96 border-slate-700/45 hover:shadow-xl transition-shadow">
                <h3 className="text-base font-semibold mb-2 dark:text-white">
                  Public sector & education
                </h3>
                <div className="text-xs text-slate-400 mb-3">
                  CyberCaution™ · SocialCaution™
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use STEEL™ to translate national threat bulletins and policy changes into pragmatic steps for municipalities, schools, and agencies.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2 variants={item} className="text-3xl font-bold mb-4 dark:text-white">
              Industry-Standard Frameworks
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Our methodology aligns with recognized security and compliance frameworks
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
                ISO 27001 Aligned
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                SOC 2 Compatible
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                GDPR Considerations
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                NIST Framework Based
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section - Luxury */}
      <section id="contact" className={`py-12 ${theme === 'dark' ? 'bg-gradient-to-br from-dark-luxury-bg via-navy-darker to-dark-luxury-bg' : 'bg-gradient-to-br from-navy-dark via-navy to-navy-darker'} text-white relative overflow-hidden`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="luxury-card p-10 md:p-12 bg-gradient-to-br from-luxury-gold/25 via-white/95 to-white/95 dark:from-luxury-gold/20 dark:via-dark-luxury-surface/95 dark:to-dark-luxury-surface/95 border-luxury-gold/40 dark:border-luxury-gold/50 shadow-luxury-gold-lg backdrop-blur-xl">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-navy dark:text-white">
                  Ready to Get Started?
                </h2>
                <p className="text-base text-gray-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                  Let's discuss how ERMITS Advisory can help strengthen your cybersecurity posture and governance.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-400">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span>No generic boilerplate risk report</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-400">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span>Both Exclusive & Open-data driven, tool-integrated</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-400">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                    <span>Designed for small and mid-size organizations</span>
                  </div>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-navy hover:bg-navy-dark text-white shadow-lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                >
                  Contact Our Team
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FTC Compliance Disclaimer */}
      <section className="py-6 bg-gray-50 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-gray-200 dark:border-slate-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-gray-800 dark:text-gray-300">Disclaimer:</strong> Results, outcomes, and timelines may vary based on individual organization circumstances, size, complexity, industry, and implementation efforts. Performance claims are based on typical experiences and are not guarantees. Case studies and examples are illustrative and may not reflect all client experiences. Pricing is subject to change and final pricing will be confirmed in written proposals. ERMITS Advisory services are advisory in nature and do not guarantee specific security outcomes or compliance certifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};