import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/shared/Button';
import { 
  ChevronLeft, ChevronRight, Maximize, Minimize, 
  Download, ArrowRight, ArrowLeft
} from 'lucide-react';

export const BoardPresentation: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Get the total number of slides from translations
  const totalSlides = 7; // There are 7 slides in total as per the translations

  // Background images for each slide
  const slideBackgrounds = [
    'https://images.pexels.com/photos/5466780/pexels-photo-5466780.jpeg?auto=compress&cs=tinysrgb&w=1600', // Executive briefing - modern office/meeting room
    'https://images.pexels.com/photos/12303090/pexels-photo-12303090.jpeg?auto=compress&cs=tinysrgb&w=1600', // Risk landscape - cyber security concept
    'https://images.pexels.com/photos/6229187/pexels-photo-6229187.jpeg?auto=compress&cs=tinysrgb&w=1600', // STEEL assessment - data visualization
    'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1600', // Strategic vulnerabilities - security concept
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600', // Recommended actions - team planning
    'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1600', // Investment considerations - finance concept
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600', // Next steps - roadmap/planning
  ];

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
  }, [currentSlide, isFullscreen]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Function to generate slide background style
  const getSlideBackground = (index: number) => {
    return {
      backgroundImage: `url(${slideBackgrounds[index]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  };

  return (
    <div className={`pt-16 ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'min-h-screen bg-silver-light dark:bg-dark-bg presentation-container'}`}>
      <div className={`container mx-auto px-4 ${isFullscreen ? 'h-full flex flex-col' : ''}`}>
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 pt-8"
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
              
              <div className="relative h-full flex flex-col text-white p-8 md:p-12">
                <div className="flex-grow flex flex-col justify-center max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {t(`presentation.slides.slide${currentSlide + 1}.title`)}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-silver mb-8">
                    {t(`presentation.slides.slide${currentSlide + 1}.subtitle`)}
                  </h3>
                  
                  <div className="text-left">
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
                                <div className="bg-silver h-2 rounded-full" style={{ width: '65%' }}></div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.economic.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-silver h-2 rounded-full" style={{ width: '78%' }}></div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.social.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-silver h-2 rounded-full" style={{ width: '82%' }}></div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.technology.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-silver h-2 rounded-full" style={{ width: '45%' }}></div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.environmental.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-silver h-2 rounded-full" style={{ width: '72%' }}></div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <span className="text-sm text-silver">{t('steel.dimensions.legal.title')}</span>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-silver h-2 rounded-full" style={{ width: '58%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {currentSlide === 4 && (
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mr-3">1</div>
                          <span className="font-medium">{t('dashboard.actions.items.0.action')}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">2</div>
                          <span className="font-medium">{t('dashboard.actions.items.1.action')}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">3</div>
                          <span className="font-medium">{t('dashboard.actions.items.4.action')}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-8">
                  <span className="text-sm text-silver">ERMITS Advisory + STEEL™</span>
                  <span className="text-sm text-silver">{currentSlide + 1} / {totalSlides}</span>
                </div>
              </div>
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