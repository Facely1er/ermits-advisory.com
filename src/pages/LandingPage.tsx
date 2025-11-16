import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/shared/Button';
import { Card } from '../components/shared/Card';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { HeroCarousel } from '../components/shared/HeroCarousel';
import { EcosystemCard } from '../components/shared/EcosystemCard';
import { ArrowRight, CheckCircle, Zap, Eye, Target, Calendar, Layers, Rocket, Search, Shield } from 'lucide-react';
import { LiveMetrics } from '../components/interactive/LiveMetrics';
// Import brand logos
import cyberCautionLogo from '../assets/cybercaution.png';
import cyberCorrectLogo from '../assets/cybercorrect.png';
import cyberSoluceLogo from '../assets/cybersoluce.png';
import vendorSoluceLogo from '../assets/vendorsoluce.png';
import technoSoluceLogo from '../assets/technosoluce.png';
import socialCautionLogo from '../assets/socialcaution.png';
import ermitsAdvisoryLogo from '../assets/ermits-advisory.png';

export const LandingPage: React.FC = () => {
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

  // Enhanced features for interactive display
  const enhancedFeatures = [
    {
      icon: <Zap size={24} className="text-yellow-500" />,
      title: 'Real-Time Intelligence',
      description: 'Monitor threats and risks as they emerge with live data feeds',
      metric: 'Continuous'
    },
    {
      icon: <Eye size={24} className="text-blue-500" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights that forecast potential security threats',
      metric: 'Advanced'
    },
    {
      icon: <Target size={24} className="text-green-500" />,
      title: 'Strategic Focus',
      description: 'Prioritize actions based on business impact and risk severity',
      metric: '6D'
    },
    {
      icon: <Shield size={24} className="text-purple-500" />,
      title: 'Comprehensive Coverage',
      description: 'Visibility across all critical risk dimensions',
      metric: 'Multi-D'
    }
  ];

  return (
    <div>
      {/* Hero Section - Enhanced STEEL Risk Assessment Framework */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center hero-background-image"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/97 via-navy-dark/94 to-navy/97" />
          {/* Animated gradient overlay for depth */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              x: ['-50%', '50%', '-50%'],
            }}
            transition={{
              duration: 8,
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
            {/* Badge/Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 via-slate-900/80 to-transparent backdrop-blur-sm text-cyan-200 text-sm uppercase tracking-wider mb-6 shadow-lg"
            >
              <Shield size={16} className="text-cyan-400" />
              <span className="font-semibold">STEEL™</span>
              <span className="text-xs">Strategic Threat & Enterprise Evaluation Layer</span>
            </motion.div>

            {/* Main Heading with Enhanced Carousel */}
            <div className="mb-8 min-h-[140px] md:min-h-[180px] flex items-center justify-center">
              <HeroCarousel
                slides={[
                  {
                    id: '1',
                    headline: 'Navigate Risks. Unlock Growth. Future-Proof Your Organization with ',
                    highlight: 'ERMITS Advisory STEEL™ Diagnostic'
                  },
                  {
                    id: '2',
                    headline: 'Transform open-source intelligence into ',
                    highlight: 'strategic board-ready decisions.'
                  },
                  {
                    id: '3',
                    headline: '46 strategic questions. ',
                    highlight: 'Comprehensive insights. Actionable outcomes.'
                  },
                  {
                    id: '4',
                    headline: 'From threat assessment to ',
                    highlight: 'implementation in weeks, not months.'
                  }
                ]}
                autoRotateInterval={3500}
              />
            </div>

            {/* Enhanced Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
            >
              A comprehensive cybersecurity risk assessment framework that maps geopolitical, cyber, privacy, and supply-chain exposure to actionable implementation tools.
            </motion.p>

            {/* Key Benefits Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90">
                <CheckCircle size={16} className="text-cyan-400" />
                <span>46 Strategic Indicators</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90">
                <Zap size={16} className="text-yellow-400" />
                <span>Real-Time Intelligence</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90">
                <Target size={16} className="text-green-400" />
                <span>Actionable Outcomes</span>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                variant="secondary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                onClick={() => navigate('/steel')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-10 py-5 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 hover:scale-105 text-lg"
              >
                Explore STEEL™ →
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => navigate('/pricing')}
                className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold px-10 py-5 rounded-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                View Pricing
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Metrics Section - Now with translations */}
      <section className="py-16 bg-silver-light dark:bg-dark-surface">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
              Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {'Real-Time Cyber Intelligence'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {'Monitor threats and risk indicators across all critical dimensions'}
            </p>
          </motion.div>
          
          <LiveMetrics />
        </div>
      </section>

      {/* Enhanced Features Section - Now with translations */}
      <section className="py-16 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.div variants={item} className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
              Capabilities
            </motion.div>
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Advanced Capabilities
            </motion.h2>
            <motion.p variants={item} className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Powerful tools and insights to transform your security posture
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

      {/* STEEL-to-Platform Pathway Section */}
      <section className="py-16 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
              Implementation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              From Assessment to Implementation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategic insights that become operational reality through the ERMITS ecosystem. Typical implementation timelines vary by organization size and complexity.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {/* Week 1-3 */}
            <motion.div variants={item}>
              <Card className="h-full p-6 text-center hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-navy/10 dark:bg-silver/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={32} className="text-navy dark:text-silver" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar size={18} className="text-navy dark:text-silver" />
                    <span className="text-sm font-semibold text-navy dark:text-white">Week 1-3</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    STEEL Assessment
                  </h3>
                </div>
                <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Risk scoring and gap identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>ERMITS platform recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Quick-win prioritization</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Week 4-8 */}
            <motion.div variants={item}>
              <Card className="h-full p-6 text-center hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-navy/10 dark:bg-silver/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target size={32} className="text-navy dark:text-silver" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar size={18} className="text-navy dark:text-silver" />
                    <span className="text-sm font-semibold text-navy dark:text-white">Week 4-8</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    Strategic Planning
                  </h3>
                </div>
                <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Implementation roadmap development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Platform configuration design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Resource planning and budgeting</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Week 9-12 */}
            <motion.div variants={item}>
              <Card className="h-full p-6 text-center hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-navy/10 dark:bg-silver/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket size={32} className="text-navy dark:text-silver" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar size={18} className="text-navy dark:text-silver" />
                    <span className="text-sm font-semibold text-navy dark:text-white">Week 9-12</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    Platform Deployment
                  </h3>
                </div>
                <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Tool implementation and integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Policy and workflow configuration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Team training and adoption</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Week 13+ */}
            <motion.div variants={item}>
              <Card className="h-full p-6 text-center hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-navy/10 dark:bg-silver/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers size={32} className="text-navy dark:text-silver" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar size={18} className="text-navy dark:text-silver" />
                    <span className="text-sm font-semibold text-navy dark:text-white">Week 13+</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    Continuous Advisory
                  </h3>
                </div>
                <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Monthly vCISO strategic guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Quarterly STEEL reassessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>Ongoing optimization support</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/ecosystem')}
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Explore ERMITS Ecosystem
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced STEEL Methodology Section - Luxury */}
      <section id="steel" className="py-20 bg-gradient-to-b from-silver-lighter via-white to-silver-light dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg steel-section">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            {/* Left Column - Methodology Description */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
                  Methodology
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                  STEEL™ – Strategic Threat & Enterprise Evaluation Layer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                  STEEL™ fuses <strong className="text-gray-900 dark:text-white">PESTEL analysis</strong> with cyber threat intelligence,
                  privacy regulation tracking, and supply-chain indicators. It turns
                  noisy open data into a structured risk landscape you can act on.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <strong className="text-gray-900 dark:text-white">Note:</strong> STEEL™ is built upon the PESTEL methodology (Political, Economic, Social, Technological, Environmental, Legal) as its foundational framework, extending it specifically for enterprise risk and cybersecurity intelligence.
                </p>
              </motion.div>

              {/* STEEL Letter Breakdown - Luxury */}
              <Card className="luxury-card p-8 bg-white/95 dark:bg-dark-luxury-surface/95 border-luxury-gold/20 dark:border-luxury-gold/30 shadow-luxury-lg mb-8 backdrop-blur-xl">
                <div className="text-sm text-slate-400 mb-4">
                  Each STEEL™ scan passes through five lenses:
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {/* S - Strategic */}
                  <div className="luxury-hover p-4 rounded-luxury bg-gradient-to-br from-blue-500/20 via-white/5 to-transparent dark:from-blue-500/25 dark:via-dark-luxury-surface/50 dark:to-transparent border border-luxury-gold/30 dark:border-luxury-gold/40 shadow-luxury">
                    <div className="text-xl font-bold mb-1 luxury-text-gradient">S</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">Strategic</div>
                    <div className="text-xs text-slate-400">Macro-trends, regulation, conflict, critical infrastructure.</div>
                  </div>
                  {/* T - Threat */}
                  <div className="luxury-hover p-4 rounded-luxury bg-gradient-to-br from-blue-500/20 via-white/5 to-transparent dark:from-blue-500/25 dark:via-dark-luxury-surface/50 dark:to-transparent border border-luxury-gold/30 dark:border-luxury-gold/40 shadow-luxury">
                    <div className="text-xl font-bold mb-1 luxury-text-gradient">T</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">Threat</div>
                    <div className="text-xs text-slate-400">Ransomware, data breaches, vendor incidents, insider risk.</div>
                  </div>
                  {/* E - Enterprise */}
                  <div className="luxury-hover p-4 rounded-luxury bg-gradient-to-br from-blue-500/20 via-white/5 to-transparent dark:from-blue-500/25 dark:via-dark-luxury-surface/50 dark:to-transparent border border-luxury-gold/30 dark:border-luxury-gold/40 shadow-luxury">
                    <div className="text-xl font-bold mb-1 luxury-text-gradient">E</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">Enterprise</div>
                    <div className="text-xs text-slate-400">Your sector, footprint, data flows, and critical vendors.</div>
                  </div>
                  {/* E - Evaluation */}
                  <div className="luxury-hover p-4 rounded-luxury bg-gradient-to-br from-blue-500/20 via-white/5 to-transparent dark:from-blue-500/25 dark:via-dark-luxury-surface/50 dark:to-transparent border border-luxury-gold/30 dark:border-luxury-gold/40 shadow-luxury">
                    <div className="text-xl font-bold mb-1 luxury-text-gradient">E</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">Evaluation</div>
                    <div className="text-xs text-slate-400">Scored scenarios, risk appetite, and readiness gaps.</div>
                  </div>
                  {/* L - Landscape */}
                  <div className="luxury-hover p-4 rounded-luxury bg-gradient-to-br from-blue-500/20 via-white/5 to-transparent dark:from-blue-500/25 dark:via-dark-luxury-surface/50 dark:to-transparent border border-luxury-gold/30 dark:border-luxury-gold/40 shadow-luxury">
                    <div className="text-xl font-bold mb-1 luxury-text-gradient">L</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">Landscape</div>
                    <div className="text-xs text-slate-400">Visual maps, risk clusters, and ERMITS product mapping.</div>
                  </div>
                  {/* + PESTEL */}
                  <div className="luxury-hover p-4 rounded-luxury bg-gradient-to-br from-blue-500/20 via-white/5 to-transparent dark:from-blue-500/25 dark:via-dark-luxury-surface/50 dark:to-transparent border border-luxury-gold/30 dark:border-luxury-gold/40 shadow-luxury">
                    <div className="text-xl font-bold mb-1 luxury-text-gradient">+</div>
                    <div className="text-xs font-semibold text-slate-300 mb-1">PESTEL</div>
                    <div className="text-xs text-slate-400">Political · Economic · Social · Technological · Environmental · Legal.</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>Threat Weather & ransomware (→ CyberCaution)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    <span>Privacy & AI data risk (→ CyberCorrect, SocialCaution)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Vendor & SBOM exposure (→ VendorSoluce, VendorTal, TechnoSoluce)</span>
                  </div>
                </div>

                {/* Mini Timeline */}
                <div className="pt-4 border-t border-dashed border-slate-600/60 text-xs text-slate-400">
                  <div className="mb-2">
                    <strong className="text-slate-300">Standard engagement (2–4 weeks):</strong>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-slate-300">Week 1:</strong> Scoping, data sources, PESTEL profiles, baseline STEEL score.</li>
                    <li><strong className="text-slate-300">Week 2:</strong> Sector-specific dashboards, ransomware & privacy overlays.</li>
                    <li><strong className="text-slate-300">Week 3–4:</strong> Roadmap tied to ERMITS tools (CyberCaution, CyberCorrect, VendorSoluce, CyberSoluce, SocialCaution, TechnoSoluce).</li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Right Column - Inputs & Outputs - Luxury */}
            <div>
              <Card className="luxury-card p-8 bg-white/95 dark:bg-dark-luxury-surface/95 border-luxury-gold/20 dark:border-luxury-gold/30 shadow-luxury-lg backdrop-blur-xl">
                <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
                  Inputs & Outputs
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  From signals to controls
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  STEEL™ is <strong className="text-white">tool-agnostic on ingestion</strong> (RSS feeds, open data portals,
                  regulators, research institutes) but <strong className="text-white">opinionated on execution</strong>:
                  it routes findings into the ERMITS ecosystem for implementation.
                </p>
                <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
                  <li>Open data from regulators, CERTs, NGOs, and market data.</li>
                  <li>Sector-specific alerts (healthcare, education, defense, agriculture, etc.).</li>
                  <li>Vendor exposure & SBOM signals (for VendorSoluce & TechnoSoluce).</li>
                  <li>Privacy and AI-governance updates (for CyberCorrect & SocialCaution).</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Mapping Section - Luxury */}
      <section id="ecosystem" className="py-20 bg-gradient-to-b from-white via-silver-lighter to-white dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Ecosystem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              How STEEL™ feeds the ERMITS ecosystem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ERMITS Advisory acts as the <strong className="text-gray-900 dark:text-white">intelligence layer</strong>. Once STEEL™ identifies
              exposures, each theme is mapped to a concrete product in the ERMITS family.
            </p>
          </motion.div>

          <Card className="luxury-card p-8 bg-white/95 dark:bg-dark-luxury-surface/95 border-luxury-gold/20 dark:border-luxury-gold/30 shadow-luxury-lg mb-8 backdrop-blur-xl">
            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Ecosystem mapping (current scope):
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <motion.div variants={item}>
                <EcosystemCard
                  name="CyberCaution"
                  tag="Ransomware & Threat Weather"
                  description="Converts STEEL™ ransomware and threat-weather signals into playbooks, tabletop exercises, and continuous monitoring dashboards."
                  steelFeeds="threat clusters, geography, sector exposure, priority controls."
                  logo={cyberCautionLogo}
                />
              </motion.div>
              <motion.div variants={item}>
                <EcosystemCard
                  name="CyberCorrect"
                  tag="Privacy & Data Rights"
                  description="Turns privacy-heavy STEEL™ findings (GDPR, CCPA, DPDP, AI rules) into data mapping, DPIA/PIA workflow, and request automation."
                  steelFeeds="regulation radar, sector rules, cross-border data paths."
                  logo={cyberCorrectLogo}
                />
              </motion.div>
              <motion.div variants={item}>
                <EcosystemCard
                  name="VendorSoluce"
                  tag="Vendor & Supply Chain"
                  description="Uses vendor-centric STEEL™ outputs to rank suppliers, contracts, and critical services by risk level and regulatory impact."
                  steelFeeds="vendor geography, concentration risk, incident history."
                  logo={vendorSoluceLogo}
                />
              </motion.div>
              <motion.div variants={item}>
                <EcosystemCard
                  name="VendorTal"
                  tag="Vendor Discovery"
                  description="Leverages STEEL™ to help you find vendors that fit your risk appetite, not just the cheapest or fastest option."
                  steelFeeds="country-level risk, regulatory friction, ESG constraints."
                />
              </motion.div>
              <motion.div variants={item}>
                <EcosystemCard
                  name="CyberSoluce"
                  tag="NIST CSF & Ransomware Readiness"
                  description="Maps STEEL™ gaps to concrete controls using NIST CSF and ransomware profiles, turning high-level risk into maturity roadmaps."
                  steelFeeds="function-by-function control priorities and sector baselines."
                  logo={cyberSoluceLogo}
                />
              </motion.div>
              <motion.div variants={item}>
                <EcosystemCard
                  name="SocialCaution"
                  tag="Human Layer & Citizens"
                  description="Converts societal and behavioral patterns from STEEL™ (mis-/dis-information, scams, social engineering trends) into awareness campaigns and tools."
                  steelFeeds="narrative themes, target demographics, risk personas."
                  logo={socialCautionLogo}
                />
              </motion.div>
              <motion.div variants={item}>
                <EcosystemCard
                  name="TechnoSoluce"
                  tag="SBOM & Software Risk"
                  description="Uses STEEL™ to prioritize SBOM findings and software supply-chain risks in line with EO 14028, NIST SP 800-161, and similar references."
                  steelFeeds="technology stacks, vulnerability heat, regulatory expectations."
                  logo={technoSoluceLogo}
                />
              </motion.div>
              <motion.div variants={item}>
                <EcosystemCard
                  name="ERMITS Advisory"
                  tag="Intelligence & Roadmaps"
                  description="Remains the neutral advisory brain: it runs STEEL™, orchestrates the analysis, and guides which ERMITS tools you should deploy first."
                  steelFeeds="one integrated narrative, not six disconnected projects."
                  logo={ermitsAdvisoryLogo}
                />
              </motion.div>
            </motion.div>
          </Card>
        </div>
      </section>

      {/* Use Cases Section - Luxury */}
      <section id="use-cases" className="py-20 bg-gradient-to-b from-silver-lighter via-white to-silver-lighter dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg">
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
                  CyberCaution · CyberSoluce
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
                  CyberCorrect · SocialCaution
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
                  VendorSoluce · VendorTal · TechnoSoluce
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
                  CyberCaution · SocialCaution
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use STEEL™ to translate national threat bulletins and policy changes into pragmatic steps for municipalities, schools, and agencies.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Model / How It Works Section - Luxury */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-white via-silver-lighter to-white dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Engagement model
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              A compact, outcome-driven engagement — not another endless audit
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ERMITS Advisory is built by practitioners who have lived inside GRC, cyber, and
              supply-chain teams. The process is designed to be <strong className="text-gray-900 dark:text-white">lean</strong>, <strong className="text-gray-900 dark:text-white">transparent</strong>,
              and <strong className="text-gray-900 dark:text-white">immediately actionable</strong>.
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
                  Step 1
                </div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  Scope & signal design
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  We define your STEEL™ profile (sector, regions, data types, vendors, regulatory
                  perimeter) and select relevant open data & RSS sources.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                  <li>Threat & regulation inventory.</li>
                  <li>Vendor & SBOM footprint sketch.</li>
                  <li>Risk appetite & board expectations.</li>
                </ul>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="luxury-card luxury-hover h-full p-8 bg-white/95 dark:bg-dark-luxury-surface/95 border-luxury-gold/20 dark:border-luxury-gold/30">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                  Step 2
                </div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  STEEL™ run & workshop
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  We execute STEEL™, build the landscape dashboards, and run an interactive session
                  with your stakeholders.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                  <li>Visual threat weather & PESTEL overlays.</li>
                  <li>Scenario-based risk scores.</li>
                  <li>Pre-mapping to ERMITS tools.</li>
                </ul>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="luxury-card luxury-hover h-full p-8 bg-white/95 dark:bg-dark-luxury-surface/95 border-luxury-gold/20 dark:border-luxury-gold/30">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                  Step 3
                </div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">
                  Execution pack with ERMITS mapping
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  You receive a concise pack that links each priority finding to the relevant ERMITS
                  product or playbook.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                  <li>Ranked recommendations (90-day view).</li>
                  <li>Which ERMITS tools to deploy first and why.</li>
                  <li>Options for ongoing STEEL™ monitoring if you want a live dashboard.</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white dark:bg-dark-bg">
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
      <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-br from-dark-luxury-bg via-navy-darker to-dark-luxury-bg' : 'bg-gradient-to-br from-navy-dark via-navy to-navy-darker'} text-white relative overflow-hidden`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="luxury-card p-10 md:p-12 bg-gradient-to-br from-luxury-gold/25 via-white/95 to-white/95 dark:from-luxury-gold/20 dark:via-dark-luxury-surface/95 dark:to-dark-luxury-surface/95 border-luxury-gold/40 dark:border-luxury-gold/50 shadow-luxury-gold-lg backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                    Book an initial STEEL™ discovery call
                  </h2>
                  <p className="text-base text-navy-dark dark:text-slate-300 mb-4">
                    Use one <strong className="text-navy-dark dark:text-white">STEEL™ run</strong> to clarify where your next euros or dollars of
                    cyber and privacy budget should go — and which ERMITS tools can deliver the most impact.
                  </p>
                  <div className="space-y-2 text-sm text-navy-dark dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span>No generic boilerplate risk report</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span>Open-data driven, tool-integrated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span>Designed for small and mid-size organizations</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="w-full bg-navy-dark text-white hover:bg-navy-dark/90 shadow-lg"
                    icon={<ArrowRight size={20} />}
                    iconPosition="right"
                  >
                    Request STEEL™ Discovery
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FTC Compliance Disclaimer */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
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