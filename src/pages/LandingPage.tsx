import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/shared/Button';
import { Card } from '../components/shared/Card';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { HeroCarousel } from '../components/shared/HeroCarousel';
import { ArrowRight, CheckCircle, Zap, Eye, Target, Calendar, Layers, Rocket, Search, Shield, Network, Settings, AlertCircle } from 'lucide-react';
import { SteelArchitectureDiagram } from '../components/diagrams/SteelArchitectureDiagram';
import { ErmitsBridgeDiagram } from '../components/diagrams/ErmitsBridgeDiagram';
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
                description: '46 strategic indicators across 3 evaluation layers'
              },
              {
                icon: <Eye size={32} className="text-blue-500" />,
                title: 'Executive Ready',
                description: 'Board-ready guidance backed by PESTEL methodology'
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

      {/* The ERMITS Bridge Section */}
      <section className="py-20 bg-gradient-to-b from-white via-silver-lighter to-white dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Integration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              The ERMITS Bridge
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategic governance connects seamlessly to operational execution through the ERMITS ecosystem
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* 2-Column Bridge Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: ERMITS Advisory */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full p-8 bg-gradient-to-br from-navy/5 to-navy/10 dark:from-navy/20 dark:to-navy/30 border-2 border-navy/20 dark:border-navy/40">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-navy/20 dark:bg-navy/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield size={32} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy dark:text-white mb-1">
                        ERMITS Advisory
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Strategic Governance Layer
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                      <span>Interprets and prioritizes using STEEL™ methodology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                      <span>Provides strategic intelligence and executive guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                      <span>Designs governance, risk, and compliance architectures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                      <span>Offers ongoing vCISO stewardship and oversight</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>

              {/* Bridge Icon/Arrow */}
              <div className="hidden lg:flex items-center justify-center -mx-4 z-10 relative">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <ArrowRight size={40} className="text-white" />
                </motion.div>
              </div>

              {/* Mobile Bridge Icon */}
              <div className="lg:hidden flex items-center justify-center my-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg rotate-90"
                >
                  <ArrowRight size={32} className="text-white" />
                </motion.div>
              </div>

              {/* Right: ERMITS Ecosystem */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings size={32} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy dark:text-white mb-1">
                        ERMITS Ecosystem
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        Execution & Automation Layer
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span>Executes and automates where appropriate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span>CyberCaution™, CyberCorrect™, VendorSoluce™, and more</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span>Operational tools for continuous monitoring and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-3 mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span>Platform capabilities for implementation and automation</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>

            {/* ERMITS Bridge Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 mb-8"
            >
              <Card className="p-8 bg-white dark:bg-gray-800">
                <ErmitsBridgeDiagram />
              </Card>
            </motion.div>

            {/* Explanation Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-start gap-4 mb-4">
                    <Target size={24} className="text-navy dark:text-silver mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-navy dark:text-white mb-3">
                        Your Navigation Layer for the Entire ERMITS Ecosystem
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        ERMITS Advisory is your navigation layer for the entire ERMITS ecosystem.
                      </p>
                      <div className="bg-white dark:bg-gray-800/50 rounded-lg p-6 mb-6 border-l-4 border-navy dark:border-silver">
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 italic">
                          Instead of asking, <span className="text-gray-400 dark:text-gray-500">"Which product should we buy?"</span> you start with:
                        </p>
                        <p className="text-lg font-bold text-navy dark:text-white">
                          "What outcome do we need?"
                        </p>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Our advisors use the STEEL™ method to map your needs to the right mix of:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/30 rounded-lg">
                          <div className="w-8 h-8 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Shield size={16} className="text-red-600 dark:text-red-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-navy dark:text-white text-sm mb-1">CyberCaution™</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Threat, incident, readiness, and operational resilience</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/30 rounded-lg">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-navy dark:text-white text-sm mb-1">CyberCorrect™</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Compliance, privacy, and control implementation</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/30 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Settings size={16} className="text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-navy dark:text-white text-sm mb-1">CyberSoluce™</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Solution architecture and integration</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-white/50 dark:bg-gray-800/30 rounded-lg">
                          <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Network size={16} className="text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <p className="font-semibold text-navy dark:text-white text-sm mb-1">VendorSoluce™</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Vendor and supply chain risk</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-navy/5 dark:bg-navy/20 rounded-lg p-6 border border-navy/20 dark:border-navy/40">
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                          You don't have to learn our catalog. You get one strategic partner who steers you through it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How We Evaluate: The STEEL™ Method Section */}
      <section className="py-20 bg-gradient-to-b from-white via-silver-lighter to-white dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Evaluation Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              How We Evaluate: The STEEL™ Method
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
              <strong className="text-navy dark:text-white">STEEL™</strong> — the Strategic Threat & Enterprise Evaluation Layer, ERMITS' multi-layer evaluation architecture used to understand your organization's security, governance, resilience, and enterprise context.
            </p>
          </motion.div>

          {/* Three Evaluation Sublayers */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Strategic Evaluation Layer */}
            <motion.div variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow border-l-4 border-l-navy">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-navy/10 dark:bg-navy/30 rounded-full flex items-center justify-center mb-4">
                    <Target size={32} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    Strategic Evaluation Layer
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Business alignment & governance maturity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Risk appetite & executive expectations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Regulatory and market context</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Threat Evaluation Layer */}
            <motion.div variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow border-l-4 border-l-red-500">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle size={32} className="text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    Threat Evaluation Layer
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Current and emerging threat landscape</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Ransomware readiness and exposure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Attack surface & vulnerability posture</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Enterprise Evaluation Layer */}
            <motion.div variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <Layers size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    Enterprise Evaluation Layer
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Controls & architecture maturity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Vendor & supply chain dependencies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Operational resilience & workflow readiness</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          {/* STEEL Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="p-8 bg-white dark:bg-gray-800">
              <SteelArchitectureDiagram />
            </Card>
          </motion.div>

          {/* Explanation Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  All three evaluation sublayers form a single method: <strong className="text-navy dark:text-white">STEEL™ = Strategic Threat & Enterprise Evaluation Layer</strong>, not an acronym with individual letters.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  ERMITS Advisory interprets STEEL™ evaluations to set priorities, while the ERMITS ecosystem (CyberCaution™, CyberCorrect™, CyberSoluce™, VendorSoluce™, etc.) executes and automates those priorities.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/method/steel')}
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Learn More About STEEL™
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How We Prioritize Using the STEEL™ Index */}
      <section className="py-20 bg-gradient-to-b from-white via-silver-lighter to-white dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
              Prioritization Framework
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              How We Prioritize Using the STEEL™ Index
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              ERMITS Advisory generates a STEEL™ Index to determine what matters most for your organization. This prioritized view guides strategy, sequencing, governance decisions, and activation of ERMITS ecosystem capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-navy/10 dark:bg-navy/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-navy dark:text-silver" />
                </div>
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">
                  Advisory Interprets It
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our advisors translate STEEL™ Index scores into strategic priorities and actionable governance decisions.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings size={32} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">
                  The Ecosystem Feeds It
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ERMITS ecosystem capabilities provide continuous telemetry and evidence that updates your STEEL™ Index.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">
                  Leadership Consumes It
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Executive teams use the STEEL™ Index to drive prioritization, not compliance checklists.
                </p>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-r from-navy/5 to-cyan/5 dark:from-navy/20 dark:to-cyan/20 border border-navy/20 dark:border-navy/40">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                <strong className="text-navy dark:text-white">The STEEL™ Index drives prioritization, not compliance checklists.</strong> It provides a unified view of what matters most, enabling strategic decision-making and focused resource allocation across your organization's security, risk, and governance initiatives.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced STEEL Methodology Section - Luxury */}
      <section id="steel" className="py-20 bg-gradient-to-b from-silver-lighter via-white to-silver-light dark:from-dark-luxury-bg dark:via-dark-luxury-surface dark:to-dark-luxury-bg steel-section">
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
                    STEEL™ Assessment
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
                    <span>Quarterly STEEL™ reassessments</span>
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