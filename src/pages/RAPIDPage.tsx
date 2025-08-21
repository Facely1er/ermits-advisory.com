import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Rocket, Clock, Settings, Layers, Database, BarChart3, Cog as Cogs, Monitor, Cloud, X, ArrowRight, Calendar, Download, Info } from 'lucide-react';

interface RAPIDPhase {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  automationPercentage: number;
  icon: React.ReactNode;
  color: string;
  position: { x: number; y: number };
}

export const RAPIDPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  // RAPID Phases positioned in a circle with golden colors
  const rapidPhases: RAPIDPhase[] = [
    {
      id: 'recognize',
      title: t('rapid.interactiveFramework.phases.recognize.title'),
      description: t('rapid.interactiveFramework.phases.recognize.description'),
      detailedDescription: t('rapid.interactiveFramework.phases.recognize.detailedDescription'),
      automationPercentage: 98,
      icon: <Monitor size={20} className="text-white" />,
      color: '#F5A623',
      position: { x: 0, y: -140 }
    },
    {
      id: 'analyze',
      title: t('rapid.interactiveFramework.phases.analyze.title'),
      description: t('rapid.interactiveFramework.phases.analyze.description'),
      detailedDescription: t('rapid.interactiveFramework.phases.analyze.detailedDescription'),
      automationPercentage: 95,
      icon: <BarChart3 size={20} className="text-white" />,
      color: '#E8931A',
      position: { x: 133, y: -43 }
    },
    {
      id: 'plan',
      title: t('rapid.interactiveFramework.phases.plan.title'),
      description: t('rapid.interactiveFramework.phases.plan.description'),
      detailedDescription: t('rapid.interactiveFramework.phases.plan.detailedDescription'),
      automationPercentage: 92,
      icon: <Cogs size={20} className="text-white" />,
      color: '#D68910',
      position: { x: 82, y: 113 }
    },
    {
      id: 'implement',
      title: t('rapid.interactiveFramework.phases.implement.title'),
      description: t('rapid.interactiveFramework.phases.implement.description'),
      detailedDescription: t('rapid.interactiveFramework.phases.implement.detailedDescription'),
      automationPercentage: 97,
      icon: <Rocket size={20} className="text-white" />,
      color: '#F5A623',
      position: { x: -82, y: 113 }
    },
    {
      id: 'deploy',
      title: t('rapid.interactiveFramework.phases.deploy.title'),
      description: t('rapid.interactiveFramework.phases.deploy.description'),
      detailedDescription: t('rapid.interactiveFramework.phases.deploy.detailedDescription'),
      automationPercentage: 94,
      icon: <Cloud size={20} className="text-white" />,
      color: '#E8931A',
      position: { x: -133, y: -43 }
    }
  ];

  // Revolutionary Features
  const revolutionaryFeatures = [
    {
      icon: <Rocket size={32} className="text-white" />,
      title: t('rapid.revolutionaryFeatures.automatedIntelligence.title'),
      description: t('rapid.revolutionaryFeatures.automatedIntelligence.description')
    },
    {
      icon: <Clock size={32} className="text-white" />,
      title: t('rapid.revolutionaryFeatures.zeroDowntime.title'),
      description: t('rapid.revolutionaryFeatures.zeroDowntime.description')
    },
    {
      icon: <Settings size={32} className="text-white" />,
      title: t('rapid.revolutionaryFeatures.selfHealing.title'),
      description: t('rapid.revolutionaryFeatures.selfHealing.description')
    },
    {
      icon: <Layers size={32} className="text-white" />,
      title: t('rapid.revolutionaryFeatures.ecosystemIntegration.title'),
      description: t('rapid.revolutionaryFeatures.ecosystemIntegration.description')
    }
  ];

  // Implementation Process
  const implementationProcess = [
    {
      icon: <Database size={24} className="text-white" />,
      title: t('rapid.implementationProcess.environmentMapping.title'),
      description: t('rapid.implementationProcess.environmentMapping.description')
    },
    {
      icon: <BarChart3 size={24} className="text-white" />,
      title: t('rapid.implementationProcess.intelligentPlanning.title'),
      description: t('rapid.implementationProcess.intelligentPlanning.description')
    },
    {
      icon: <Cogs size={24} className="text-white" />,
      title: t('rapid.implementationProcess.orchestratedDeployment.title'),
      description: t('rapid.implementationProcess.orchestratedDeployment.description')
    },
    {
      icon: <Monitor size={24} className="text-white" />,
      title: t('rapid.implementationProcess.continuousOptimization.title'),
      description: t('rapid.implementationProcess.continuousOptimization.description')
    }
  ];

  // Timeline Steps
  const timelineSteps = [
    t('rapid.deploymentTimeline.steps.assessment'),
    t('rapid.deploymentTimeline.steps.automation'),
    t('rapid.deploymentTimeline.steps.orchestration'),
    t('rapid.deploymentTimeline.steps.validation'),
    t('rapid.deploymentTimeline.steps.optimization'),
    t('rapid.deploymentTimeline.steps.monitoring')
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const phaseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 20
      } 
    },
    hover: { 
      scale: 1.1,
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const centerPulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handlePhaseClick = (phaseId: string) => {
    setSelectedPhase(selectedPhase === phaseId ? null : phaseId);
  };

  const selectedPhaseData = rapidPhases.find(phase => phase.id === selectedPhase);

  return (
    <div className="bg-gray-50 dark:bg-dark-bg min-h-screen">
      <div className="w-full">
        {/* Hero Section with Golden Theme */}
        <section className="relative bg-gradient-to-r from-golden-dark to-golden text-white py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8"
              >
                <Rocket size={64} className="mx-auto mb-4 text-white/90" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('rapid.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-golden-light">
                {t('rapid.hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  icon={<Calendar size={20} />}
                  iconPosition="left"
                  onClick={() => navigate('/contact')}
                  className="bg-white text-golden-dark hover:bg-golden-light"
                >
                  {t('rapid.hero.scheduleDeployment')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigate('/contact')}
                >
                  {t('rapid.hero.requestDemo')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  icon={<Download size={20} />}
                  iconPosition="left"
                >
                  {t('rapid.hero.downloadGuide')}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Revolutionary Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">
                {t('rapid.revolutionaryFeatures.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
                {t('rapid.revolutionaryFeatures.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {revolutionaryFeatures.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card 
                    variant="glass" 
                    padding="lg" 
                    className="h-full bg-gradient-to-br from-golden to-golden-dark text-white hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="p-3 rounded-full bg-white/10 mr-4 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-golden-light">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 md:py-24 bg-white dark:bg-navy-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">
                {t('rapid.implementationProcess.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
                {t('rapid.implementationProcess.subtitle')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {implementationProcess.map((process, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card variant="glass" padding="md" className="h-full text-center">
                    <div className="p-4 rounded-full bg-gradient-to-r from-golden to-golden-dark inline-flex mb-6">
                      {process.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 dark:text-white">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-200 text-sm">{process.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Interactive RAPID Visualization */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">
                {t('rapid.interactiveFramework.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
                {t('rapid.interactiveFramework.subtitle')}
              </p>
            </motion.div>

            {/* RAPID Visualization */}
            <div className="flex justify-center mb-12">
              <div className="relative w-96 h-96">
                {/* Center RAPID Circle */}
                <motion.div
                  variants={centerPulseVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-golden-dark to-golden flex items-center justify-center cursor-pointer shadow-lg z-10"
                >
                  <div className="text-center">
                    <Rocket size={24} className="text-white mx-auto mb-1" />
                    <span className="text-white font-bold text-xs">RAPID™</span>
                  </div>
                </motion.div>

                {/* Phase Circles */}
                {rapidPhases.map((phase) => (
                  <motion.button
                    key={phase.id}
                    variants={phaseVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => handlePhaseClick(phase.id)}
                    className="absolute w-20 h-20 rounded-full flex flex-col items-center justify-center text-white font-medium text-xs transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-golden-light shadow-lg"
                    style={{
                      backgroundColor: phase.color,
                      left: `calc(50% + ${phase.position.x}px - 2.5rem)`,
                      top: `calc(50% + ${phase.position.y}px - 2.5rem)`,
                    }}
                    type="button"
                  >
                    <div className="mb-1">{phase.icon}</div>
                    <span className="text-center leading-tight">{phase.title}</span>
                  </motion.button>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {rapidPhases.map((phase, index) => {
                    const nextPhase = rapidPhases[(index + 1) % rapidPhases.length];
                    return (
                      <motion.line
                        key={`line-${index}`}
                        x1={`calc(50% + ${phase.position.x}px)`}
                        y1={`calc(50% + ${phase.position.y}px)`}
                        x2={`calc(50% + ${nextPhase.position.x}px)`}
                        y2={`calc(50% + ${nextPhase.position.y}px)`}
                        stroke="url(#goldenGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="goldenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F5A623" />
                      <stop offset="100%" stopColor="#E8931A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Selected Phase Details */}
            <AnimatePresence>
              {selectedPhaseData && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-4xl mx-auto"
                >
                  <Card variant="glass" padding="lg" className="relative">
                    <button 
                      onClick={() => setSelectedPhase(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      aria-label="Close details"
                    >
                      <X size={16} className="dark:text-white" />
                    </button>
                    
                    <div className="flex items-start">
                      <div 
                        className="p-4 rounded-full mr-6 flex-shrink-0"
                        style={{ backgroundColor: selectedPhaseData.color }}
                      >
                        {selectedPhaseData.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 dark:text-white">
                          {selectedPhaseData.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-200 mb-4">
                          {selectedPhaseData.description}
                        </p>
                        <p className="text-gray-600 dark:text-gray-200 mb-6">
                          {selectedPhaseData.detailedDescription}
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium dark:text-gray-200">{t('rapid.interactiveFramework.automationLevel')}</span>
                            <span className="text-sm font-bold dark:text-white">
                              {selectedPhaseData.automationPercentage}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <motion.div 
                              className="h-3 rounded-full bg-gradient-to-r from-golden to-golden-dark"
                              initial={{ width: 0 }}
                              animate={{ width: `${selectedPhaseData.automationPercentage}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                        
                        <Button 
                          variant="primary" 
                          size="sm"
                          icon={<ArrowRight size={16} />}
                          iconPosition="right"
                          className="bg-gradient-to-r from-golden-dark to-golden hover:from-golden-darker hover:to-golden-dark"
                        >
                          {t('rapid.interactiveFramework.learnMore')}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Deployment Timeline */}
        <section className="py-16 md:py-24 bg-white dark:bg-navy-dark">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">
                {t('rapid.deploymentTimeline.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
                {t('rapid.deploymentTimeline.subtitle')}
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-golden to-golden-dark rounded-full"></div>
                
                {/* Timeline Steps */}
                <div className="flex justify-between relative z-10">
                  {timelineSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-golden to-golden-dark text-white flex items-center justify-center mb-4 font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-center dark:text-gray-200 max-w-20">
                        {step}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button 
                  variant="primary"
                  size="lg"
                  icon={<Download size={20} />}
                  iconPosition="left"
                  className="bg-gradient-to-r from-golden-dark to-golden hover:from-golden-darker hover:to-golden-dark"
                >
                  {t('rapid.deploymentTimeline.downloadImplementationGuide')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Reduced size */}
        <section className="relative bg-gradient-to-r from-golden-dark to-golden text-white py-12 md:py-16">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="p-3 rounded-full bg-white/10 inline-flex mb-6">
                <Info size={36} />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('rapid.cta.title')}
              </h2>
              <p className="text-lg mb-6 text-golden-light max-w-2xl mx-auto">
                {t('rapid.cta.description')}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-white text-golden-dark hover:bg-golden-light"
                >
                  {t('rapid.cta.scheduleDeployment')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigate('/resources')}
                >
                  {t('rapid.cta.viewCaseStudies')}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};