import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/shared/Button';
import { Card } from '../components/shared/Card';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { HeroCarousel } from '../components/shared/HeroCarousel';
import { ArrowRight, CheckCircle, Zap, Eye, Target, Shield } from 'lucide-react';
import { ServiceSelector } from '../components/interactive/ServiceSelector';
import heroBackground from '../assets/background.jpg';

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
                    headline: 'Strategic Consulting & Advisory Services Powered by ',
                    highlight: 'STEEL™ Framework'
                  },
                  {
                    id: '2',
                    headline: 'Expert guidance that transforms intelligence into ',
                    highlight: 'executive-ready strategic decisions.'
                  },
                  {
                    id: '3',
                    headline: 'vCISO leadership, compliance advisory, and ',
                    highlight: 'governance strategy tailored to your organization.'
                  },
                  {
                    id: '4',
                    headline: 'From strategic assessment to ',
                    highlight: 'operational implementation with expert support.'
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
              We provide strategic intelligence and executive-ready guidance through compliance advisory and virtual CISO leadership. Our consulting approach integrates seamlessly with the ERMITS ecosystem, delivering actionable roadmaps and implementation support tailored to your organization's unique risk profile.
            </motion.p>

            {/* Key Benefits Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-sm text-white/90">
                <CheckCircle size={16} className="text-cyan-400" />
                <span>18 Strategic Questions</span>
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
                Talk to an Advisor
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => navigate('/services')}
                className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold px-10 py-5 rounded-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Value Props */}
      <section className="py-12 bg-white dark:bg-dark-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} className="text-yellow-500" />,
                title: 'STEEL™ Powered',
                description: '18 strategic questions across 3 evaluation layers'
              },
              {
                icon: <Eye size={32} className="text-blue-500" />,
                title: 'Executive Ready',
                description: 'Board-ready guidance backed by proven strategic frameworks'
              },
              {
                icon: <Target size={32} className="text-green-500" />,
                title: 'Action Oriented',
                description: 'Prioritized roadmaps with clear implementation paths'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Architecture */}
      <section className="py-20 bg-gradient-to-b from-white via-silver-lighter to-white dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Service Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              How ERMITS Advisory Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Strategic cyber governance delivered in four integrated services. Click to explore each:
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

      {/* Our Methodology: STEEL™ - Simplified */}
      <section className="py-20 bg-gradient-to-b from-white via-silver-lighter to-white dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Powered by STEEL™
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Strategic Threat & Enterprise Evaluation Layer — a comprehensive framework that evaluates your organization across strategic, threat, and enterprise dimensions to deliver prioritized, actionable intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800 mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">
                  From Assessment to Action
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  STEEL™ evaluates 18 strategic questions across multiple layers to create a prioritized roadmap for your cybersecurity and risk management initiatives. No generic checklists — only what matters for your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Strategic Alignment</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Threat Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Enterprise Context</span>
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
                Explore the STEEL™ Framework
              </Button>
            </div>
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
                  <li>Visual threat weather & strategic risk overlays.</li>
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
                  Strategic roadmap with ERMITS ecosystem mapping
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  You receive a concise strategic roadmap that links each priority finding to the relevant ERMITS ecosystem capabilities and implementation approach.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
                  <li>Ranked recommendations (90-day view).</li>
                  <li>Which ERMITS ecosystem capabilities to activate first and why.</li>
                  <li>Options for ongoing STEEL™ monitoring if you want a live dashboard.</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
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

      {/* Enhanced Features Section - Capabilities */}
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
                    cyber and privacy budget should go — and which ERMITS ecosystem capabilities can deliver the most impact.
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
                <div className="space-y-3">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => navigate('/steel-evaluation')}
                    className="w-full bg-navy-dark text-white hover:bg-navy-dark/90 shadow-lg"
                    icon={<ArrowRight size={20} />}
                    iconPosition="right"
                  >
                    Run a STEEL™ Evaluation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="w-full border-2 border-white/30 text-white bg-white/10 hover:bg-white/20"
                  >
                    Request Professional Assessment
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