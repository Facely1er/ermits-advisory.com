import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, TrendingUp, Users, Server, Leaf, Scale, 
  Info, X, ArrowRight, ExternalLink, Download
} from 'lucide-react';
import { steelDimensions } from '../data/mockData';

export const STEELVisualization: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  
  const handleDimensionClick = (id: string) => {
    setSelectedDimension(id === selectedDimension ? null : id);
  };

  const getDimensionIcon = (id: string, size = 24) => {
    switch (id) {
      case 'political':
        return <Shield size={size} />;
      case 'economic':
        return <TrendingUp size={size} />;
      case 'social':
        return <Users size={size} />;
      case 'technology':
        return <Server size={size} />;
      case 'environmental':
        return <Leaf size={size} />;
      case 'legal':
        return <Scale size={size} />;
      default:
        return null;
    }
  };

  // Integration steps for animation
  const integrationSteps = [
    { id: 'assessment', label: t('steel.integration.step1') },
    { id: 'analysis', label: t('steel.integration.step2') },
    { id: 'strategy', label: t('steel.integration.step3') },
    { id: 'implementation', label: t('steel.integration.step4') },
    { id: 'monitoring', label: t('steel.integration.step5') },
    { id: 'optimization', label: t('steel.integration.step6') }
  ];

  // Handle download implementation guide
  const handleDownloadGuide = () => {
    setShowDownloadModal(true);
  };

  const handleDownloadConfirm = () => {
    // In a real implementation, this would trigger the actual download
    // For now, we'll simulate a download and redirect to contact for follow-up
    setShowDownloadModal(false);
    
    // Simulate download
    const link = document.createElement('a');
    link.href = '#'; // In real implementation, this would be the actual file URL
    link.download = 'STEEL-Implementation-Guide.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message and redirect to contact for follow-up
    setTimeout(() => {
      alert('Download started! Our team will contact you shortly to schedule a consultation.');
      navigate('/contact');
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const hexagonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      } 
    },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95
    }
  };

  // Download button animation
  const downloadButtonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 75, 135, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  // Glowing effect animation
  const glowingEffectVariants = {
    initial: { opacity: 0.5 },
    animate: { 
      opacity: [0.5, 0.8, 0.5],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('steel.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            {t('steel.subtitle')}
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="glass" padding="lg">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
                  {t('steel.overview')}
                </p>
              </div>
              
              <div className="flex justify-center mb-8">
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="relative"
                >
                  {/* Center hexagon */}
                  <motion.div 
                    variants={hexagonVariants}
                    className="w-32 h-28 hexagon bg-navy text-white flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <span className="text-lg font-bold">STEEL™</span>
                  </motion.div>
                  
                  {/* Surrounding hexagons */}
                  {steelDimensions.map((dimension, index) => {
                    // Position each hexagon around the center
                    const angle = (index * 60) * (Math.PI / 180);
                    const radius = 120; // Distance from center
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    
                    return (
                      <motion.button
                        key={dimension.id}
                        variants={hexagonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handleDimensionClick(dimension.id)}
                        className="w-24 h-20 hexagon flex flex-col items-center justify-center absolute transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-offset-dark-bg focus:ring-offset-white dark:focus:ring-silver"
                        style={{ 
                          left: `calc(50% + ${x}px - 3rem)`, 
                          top: `calc(50% + ${y}px - 2.5rem)`,
                          backgroundColor: dimension.color,
                          color: '#fff'
                        }}
                        aria-label={`Select ${t(`steel.dimensions.${dimension.id}.title`)} dimension`}
                        type="button"
                      >
                        <div className="flex flex-col items-center justify-center pointer-events-none">
                          {getDimensionIcon(dimension.id, 16)}
                          <span className="text-xs font-medium mt-1">{t(`steel.dimensions.${dimension.id}.title`)}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </div>
              
              <AnimatePresence>
                {selectedDimension && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-silver/20 dark:bg-navy/30 rounded-lg p-6 relative"
                  >
                    <button 
                      onClick={() => setSelectedDimension(null)}
                      className="absolute top-4 right-4 p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 dark:focus:ring-offset-dark-bg dark:focus:ring-silver"
                      aria-label="Close dimension details"
                      type="button"
                    >
                      <X size={16} className="dark:text-white" />
                    </button>
                    
                    <div className="flex items-start">
                      <div className="p-3 rounded-full mr-4" style={{ backgroundColor: steelDimensions.find(d => d.id === selectedDimension)?.color }}>
                        {getDimensionIcon(selectedDimension)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white">
                          {t(`steel.dimensions.${selectedDimension}.title`)}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-100 mb-4">
                          {t(`steel.dimensions.${selectedDimension}.description`)}
                        </p>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium dark:text-gray-200">Risk Score</span>
                            <span className="text-sm font-bold dark:text-white">
                              {steelDimensions.find(d => d.id === selectedDimension)?.value}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="h-2.5 rounded-full" 
                              style={{ 
                                width: `${steelDimensions.find(d => d.id === selectedDimension)?.value}%`,
                                backgroundColor: steelDimensions.find(d => d.id === selectedDimension)?.color
                              }}
                            ></div>
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          icon={<ArrowRight size={16} />}
                          iconPosition="right"
                          onClick={() => navigate('/contact')}
                        >
                          View Detailed Analysis
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('steel.integration.title')}</h2>
            <p className="text-gray-600 dark:text-gray-100 mb-8">
              {t('steel.integration.description')}
            </p>
            
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-10/12 relative">
                {/* Connection line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-navy/20 dark:bg-silver/20 transform -translate-y-1/2 z-0"></div>
                
                {/* Steps */}
                <div className="flex justify-between relative z-10">
                  {integrationSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center mb-2">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-center dark:text-gray-200">{step.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <motion.div
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={downloadButtonVariants}
                className="relative"
              >
                <motion.div
                  variants={glowingEffectVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 rounded-btn bg-navy opacity-30 blur-md"
                ></motion.div>
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<Download size={20} />}
                  iconPosition="left"
                  className="relative z-10 px-6 py-3 shadow-lg"
                  onClick={handleDownloadGuide}
                >
                  {t('steel.integration.downloadGuide')}
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Info size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('steel.cta.title')}</h3>
                <p className="mb-4">
                  {t('steel.cta.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="secondary" 
                    icon={<ExternalLink size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/contact')}
                  >
                    {t('steel.cta.scheduleConsultation')}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => navigate('/resources')}
                  >
                    {t('steel.cta.requestCaseStudy')}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Download Modal */}
        <AnimatePresence>
          {showDownloadModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowDownloadModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-dark-surface rounded-lg p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold dark:text-white">Download Implementation Guide</h3>
                  <button
                    onClick={() => setShowDownloadModal(false)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X size={20} className="dark:text-white" />
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  Our comprehensive STEEL™ Implementation Guide includes detailed frameworks, best practices, 
                  and step-by-step instructions for deploying the methodology in your organization.
                </p>
                
                <div className="bg-silver/20 dark:bg-navy/20 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-2 dark:text-white">What's Included:</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-200">
                    <li>• Complete STEEL™ framework documentation</li>
                    <li>• Implementation templates and checklists</li>
                    <li>• Risk assessment worksheets</li>
                    <li>• Executive presentation templates</li>
                    <li>• Industry-specific guidance</li>
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowDownloadModal(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleDownloadConfirm}
                    icon={<Download size={16} />}
                    iconPosition="left"
                    className="flex-1"
                  >
                    Download Now
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};