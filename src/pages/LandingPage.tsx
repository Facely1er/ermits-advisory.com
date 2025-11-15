import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/shared/Button';
import { Card } from '../components/shared/Card';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { TypewriterText } from '../components/shared/TypewriterText';
import { Shield, TrendingUp, Users, Server, Leaf, Scale, ArrowRight, CheckCircle, Zap, Eye, Target, Calendar, Layers, Rocket, Search } from 'lucide-react';
import { steelDimensions } from '../data/mockData';
import { LiveMetrics } from '../components/interactive/LiveMetrics';

export const LandingPage: React.FC = () => {
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

  // Enhanced features for interactive display
  const enhancedFeatures = [
    {
      icon: <Zap size={24} className="text-yellow-500" />,
      title: 'Real-Time Intelligence',
      description: 'Monitor threats and risks as they emerge with live data feeds',
      metric: '24/7'
    },
    {
      icon: <Eye size={24} className="text-blue-500" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights that forecast potential security threats',
      metric: '95%'
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
      description: 'Complete visibility across all critical risk dimensions',
      metric: '100%'
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
              {'STEEL™ Risk Assessment Framework'}
            </h1>
            <div className="text-xl md:text-2xl mb-8 text-silver min-h-[2em]">
              {showTypewriter && (
                <TypewriterText 
                  text={'A comprehensive cybersecurity intelligence platform that helps organizations understand and manage strategic risk'} 
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
                {'Explore STEEL™'}
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
              {'Real-Time Cyber Intelligence'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {'Monitor threats and risk indicators across all critical dimensions'}
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
              Advanced Capabilities
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              From Assessment to Implementation in 90 Days
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategic insights that become operational reality through the ERMITS ecosystem
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
              {'The STEEL™ Methodology'}
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto steel-subtitle">
              {'Six interconnected dimensions that provide comprehensive risk visibility'}
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
                style={{ '--dimension-color': dimension.color } as React.CSSProperties}
              >
                <InteractiveCard 
                  hover3D={true}
                  className="relative overflow-hidden steel-card bg-white dark:bg-dark-card-bg"
                >
                  <div className="p-6">
                    <div 
                      className="absolute top-0 right-0 w-24 h-24 hexagon hexagon-dimension-bg-opacity"
                    ></div>
                    <div className="flex items-start relative z-10">
                      <div className="mr-4">
                        {renderSteelIcon(dimension.id)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white steel-dimension-title">
                          {dimension.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-100 steel-dimension-desc mb-4">
                          {dimension.description}
                        </p>
                        
                        {/* Risk Score Indicator */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Risk Level</span>
                          <span className="text-sm font-bold dimension-color-text">
                            {dimension.value}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div 
                            className="h-2 rounded-full dimension-progress-bar" 
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
              Learn More
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
              {'ERMITS Ecosystem Products'}
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              {'STEEL-powered strategic risk intelligence and advisory services'}
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
                  {'STEEL™ Framework'}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  {'Comprehensive strategic risk assessment methodology'}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/steel')}
                  className="transform hover:scale-105 transition-transform"
                >
                  Learn More
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
                  Virtual CISO Services
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  Expert security leadership and strategic guidance on demand
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/services')}
                  className="transform hover:scale-105 transition-transform"
                >
                  Learn More
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
                  Executive Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                  Real-time visibility into your security posture and risk metrics
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/dashboard')}
                  className="transform hover:scale-105 transition-transform"
                >
                  Learn More
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
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Certified and compliant with the highest security standards
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
                ISO 27001 Certified
              </p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                SOC 2 Type II
              </p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                GDPR Compliant
              </p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <InteractiveCard className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-white" />
              </InteractiveCard>
              <p className="text-center font-medium dark:text-gray-100">
                NIST Framework
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
              Ready to Transform Your Security Posture?
            </h2>
            <p className="text-xl mb-6 text-silver">
              Get started with a comprehensive STEEL assessment today
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/contact')}
              className="transform hover:scale-105 transition-transform"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};