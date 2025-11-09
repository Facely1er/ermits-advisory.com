import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/shared/Button';
import { 
  ChevronLeft, ChevronRight, Maximize, Minimize, 
  Download, ArrowRight, ArrowLeft, Shield, 
  TrendingUp, Target, FileText, Clock, DollarSign
} from 'lucide-react';

// Import slide images
import slide1 from '../assets/slides/BP-Slide1.jpg';
import slide2 from '../assets/slides/BP-Slide2.jpg';
import slide3 from '../assets/slides/BP-Slide3.jpg';
import slide4 from '../assets/slides/BP-Slide4.jpg';
import slide5 from '../assets/slides/BP-Slide5.jpg';
import slide6 from '../assets/slides/BP-Slide6.jpg';
import slide7 from '../assets/slides/BP-Slide7.jpg';

export const BoardPresentation: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Get the total number of slides from translations
  const totalSlides = 7; // There are 7 slides in total as per the translations

  // Background images for each slide
  const slideBackgrounds = [
    slide1, // Executive briefing - modern office/meeting room
    slide2, // Risk landscape - cyber security concept
    slide3, // STEEL assessment - data visualization
    slide4, // Strategic vulnerabilities - security concept
    slide5, // Recommended actions - team planning
    slide6, // Investment considerations - finance concept
    slide7, // Next steps - roadmap/planning
  ];

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      exitFullscreen();
    }
  }, [exitFullscreen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'f') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, toggleFullscreen, exitFullscreen, isFullscreen]);

  // Function to generate slide background style
  const getSlideBackground = (index: number) => {
    return {
      backgroundImage: `url(${slideBackgrounds[index]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  };

  // Function to get the appropriate icon for each slide
  const getSlideIcon = (index: number) => {
    switch(index) {
      case 0: return <Shield className="text-white/80" size={48} />;
      case 1: return <TrendingUp className="text-white/80" size={48} />;
      case 2: return <Shield className="text-white/80" size={48} />;
      case 3: return <Target className="text-white/80" size={48} />;
      case 4: return <FileText className="text-white/80" size={48} />;
      case 5: return <DollarSign className="text-white/80" size={48} />;
      case 6: return <Clock className="text-white/80" size={48} />;
      default: return <Shield className="text-white/80" size={48} />;
    }
  };

  // Animation variants for slide content
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 0.8, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Decorative elements animation variants
  const decorativeElementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.3, 
      scale: 1,
      transition: { 
        duration: 1,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Progress bar animation variants
  const progressBarVariants = {
    hidden: { width: "0%" },
    visible: (custom: number) => ({ 
      width: `${(custom + 1) / totalSlides * 100}%`,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    })
  };

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'min-h-screen bg-silver-light dark:bg-dark-bg presentation-container'}`}>
      <div className={`container mx-auto px-4 ${isFullscreen ? 'h-full flex flex-col' : ''}`}>
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-16 mb-8"
          >
            <h1 className="text-3xl font-bold mb-2 dark:text-white">{t('presentation.title')}</h1>
            <p className="text-gray-600 dark:text-gray-200">{t('presentation.subtitle')}</p>
          </motion.div>
        )}

        <div className={`relative ${isFullscreen ? 'flex-grow flex items-center justify-center' : 'h-[600px]'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full rounded-lg overflow-hidden shadow-xl presentation-slide"
              style={getSlideBackground(currentSlide)}
            >
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-70"></div>
              
              {/* Animated decorative elements based on slide content */}
              <div className="absolute inset-0 overflow-hidden">
                {currentSlide === 0 && (
                  <>
                    <motion.div 
                      variants={decorativeElementVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/5 blur-lg"
                    ></motion.div>
                    <motion.div 
                      variants={decorativeElementVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-navy/10 blur-md"
                    ></motion.div>
                  </>
                )}
                
                {currentSlide === 1 && (
                  <>
                    <motion.div 
                      variants={decorativeElementVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-red-500/10 blur-xl"
                    ></motion.div>
                    <motion.div 
                      variants={decorativeElementVariants}
                      initial="hidden"
                      animate="visible"
                      custom={1.2}
                      className="absolute bottom-1/3 left-1/5 w-28 h-28 rounded-full bg-orange-500/10 blur-lg"
                    ></motion.div>
                  </>
                )}
                
                {currentSlide === 2 && (
                  <>
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                      <motion.path
                        d="M20,50 A30,30 0 0,1 80,50 A30,30 0 0,1 20,50 Z"
                        stroke="white"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M30,50 A20,20 0 0,1 70,50 A20,20 0 0,1 30,50 Z"
                        stroke="white"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                      />
                    </svg>
                  </>
                )}
                
                {currentSlide === 3 && (
                  <>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0"
                    >
                      <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
                        {Array.from({ length: 100 }).map((_, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: Math.random() * 0.5 }}
                            transition={{ duration: 0.5, delay: i * 0.005 }}
                            className="border border-white/5"
                          ></motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
                
                {currentSlide === 4 && (
                  <>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2 }}
                      className="absolute top-1/3 left-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    ></motion.div>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="absolute top-2/3 left-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    ></motion.div>
                  </>
                )}
                
                {currentSlide === 5 && (
                  <>
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 1 }}
                      className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-green-500/20 blur-xl"
                    ></motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 0.1, y: 0 }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900/30 to-transparent"
                    ></motion.div>
                  </>
                )}
                
                {currentSlide === 6 && (
                  <>
                    <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
                      <motion.line
                        x1="10" y1="50" x2="90" y2="50"
                        stroke="white"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5 }}
                      />
                      {[20, 30, 40, 50, 60, 70, 80].map((x, i) => (
                        <motion.circle
                          key={i}
                          cx={x}
                          cy="50"
                          r="2"
                          fill="white"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                        />
                      ))}
                    </svg>
                  </>
                )}
              </div>
              
              <div className="relative h-full flex flex-col text-white p-8 md:p-12">
                <div className="flex-grow flex flex-col justify-center max-w-3xl mx-auto text-center">
                  {/* Slide icon */}
                  <motion.div 
                    className="mx-auto mb-6"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {getSlideIcon(currentSlide)}
                  </motion.div>
                  
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {t(`presentation.slides.slide${currentSlide + 1}.title`)}
                  </motion.h2>
                  
                  <motion.h3 
                    className="text-xl md:text-2xl text-silver mb-8"
                    variants={subtitleVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {t(`presentation.slides.slide${currentSlide + 1}.subtitle`)}
                  </motion.h3>
                  
                  <motion.div 
                    className="text-left"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="text-lg mb-6">
                      {t(`presentation.slides.slide${currentSlide + 1}.content`)}
                    </p>
                    
                    {/* Demo content for slides */}
                    {currentSlide === 2 && (
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                        <h4 className="text-xl font-semibold mb-4">STEEL™ Risk Assessment</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.political.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div 
                                  className="bg-silver h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '65%' }}
                                  transition={{ duration: 1, delay: 0.3 }}
                                ></motion.div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.economic.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div 
                                  className="bg-silver h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '78%' }}
                                  transition={{ duration: 1, delay: 0.4 }}
                                ></motion.div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.social.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div 
                                  className="bg-silver h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '82%' }}
                                  transition={{ duration: 1, delay: 0.5 }}
                                ></motion.div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.technology.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div 
                                  className="bg-silver h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '45%' }}
                                  transition={{ duration: 1, delay: 0.6 }}
                                ></motion.div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.environmental.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div 
                                  className="bg-silver h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '72%' }}
                                  transition={{ duration: 1, delay: 0.7 }}
                                ></motion.div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.legal.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <motion.div 
                                  className="bg-silver h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '58%' }}
                                  transition={{ duration: 1, delay: 0.8 }}
                                ></motion.div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentSlide === 4 && (
                      <div className="space-y-4 mb-6">
                        <motion.div 
                          className="flex items-center"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">1</div>
                          <span className="font-medium">{t('dashboard.actions.items.0.action')}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">2</div>
                          <span className="font-medium">{t('dashboard.actions.items.1.action')}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">3</div>
                          <span className="font-medium">{t('dashboard.actions.items.4.action')}</span>
                        </motion.div>
                      </div>
                    )}
                    
                    {currentSlide === 5 && (
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                        <h4 className="text-xl font-semibold mb-4">Investment Analysis</h4>
                        <div className="grid grid-cols-2 gap-6">
                          <motion.div 
                            className="bg-white/10 p-4 rounded-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <h5 className="text-lg font-medium mb-2">Current Spend</h5>
                            <p className="text-2xl font-bold">$1.2M</p>
                            <p className="text-sm text-silver">Annual budget</p>
                          </motion.div>
                          <motion.div 
                            className="bg-white/10 p-4 rounded-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <h5 className="text-lg font-medium mb-2">Recommended</h5>
                            <p className="text-2xl font-bold">$1.8M</p>
                            <p className="text-sm text-silver">+50% increase</p>
                          </motion.div>
                          <motion.div 
                            className="bg-white/10 p-4 rounded-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <h5 className="text-lg font-medium mb-2">ROI</h5>
                            <p className="text-2xl font-bold">342%</p>
                            <p className="text-sm text-silver">3-year projection</p>
                          </motion.div>
                          <motion.div 
                            className="bg-white/10 p-4 rounded-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                          >
                            <h5 className="text-lg font-medium mb-2">Risk Reduction</h5>
                            <p className="text-2xl font-bold">67%</p>
                            <p className="text-sm text-silver">Expected improvement</p>
                          </motion.div>
                        </div>
                      </div>
                    )}
                    
                    {currentSlide === 6 && (
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                        <h4 className="text-xl font-semibold mb-4">Implementation Timeline</h4>
                        <div className="relative pt-4">
                          {/* Timeline line */}
                          <div className="absolute left-4 top-6 bottom-2 w-0.5 bg-silver/30"></div>
                          
                          <motion.div 
                            className="relative pl-10 mb-6"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                              <span className="text-white font-medium">1</span>
                            </div>
                            <h5 className="text-lg font-medium">Phase 1: Immediate Actions</h5>
                            <p className="text-sm text-silver">30 days | High impact, low effort initiatives</p>
                          </motion.div>
                          
                          <motion.div 
                            className="relative pl-10 mb-6"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                              <span className="text-white font-medium">2</span>
                            </div>
                            <h5 className="text-lg font-medium">Phase 2: Security Framework</h5>
                            <p className="text-sm text-silver">90 days | Foundational improvements</p>
                          </motion.div>
                          
                          <motion.div 
                            className="relative pl-10"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                          >
                            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                              <span className="text-white font-medium">3</span>
                            </div>
                            <h5 className="text-lg font-medium">Phase 3: Advanced Capabilities</h5>
                            <p className="text-sm text-silver">180 days | Sophisticated security enhancements</p>
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
                
                <div className="flex justify-between items-center mt-8">
                  <span className="text-sm text-silver">ERMITS Advisory + STEEL™</span>
                  <span className="text-sm text-silver">{currentSlide + 1} / {totalSlides}</span>
                </div>
              </div>
              
              {/* Progress bar at the bottom of the slide */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-silver"
                variants={progressBarVariants}
                initial="hidden"
                animate="visible"
                custom={currentSlide}
              ></motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
            <Button
              variant="secondary"
              className="rounded-full p-3"
              onClick={goToPrevSlide}
              aria-label={t('presentation.navigation.previous')}
            >
              <ChevronLeft size={24} />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
            <Button
              variant="secondary"
              className="rounded-full p-3"
              onClick={goToNextSlide}
              aria-label={t('presentation.navigation.next')}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        {/* Presentation controls */}
        <div className={`mt-8 flex justify-center ${isFullscreen ? 'mb-8' : ''} presentation-controls`}>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowLeft size={16} />}
              onClick={goToPrevSlide}
            >
              {t('presentation.navigation.previous')}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              icon={isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
              onClick={toggleFullscreen}
            >
              {t('presentation.navigation.fullscreen')}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              icon={<Download size={16} />}
            >
              {t('presentation.download')}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
              onClick={goToNextSlide}
            >
              {t('presentation.navigation.next')}
            </Button>
          </div>
        </div>

        {!isFullscreen && (
          <div className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
            <p>{t('presentation.keyboardShortcuts')}</p>
            <p className="mt-2">{t('common.demo')} - {new Date().toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};