import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Download, ArrowLeft, CheckCircle, Clock, Users, 
  FileText, Shield, TrendingUp, Target, AlertCircle,
  ChevronRight, Play, BookOpen, Clipboard, Star
} from 'lucide-react';

export const ImplementationGuidePage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const handleDownload = () => {
    setDownloadStarted(true);
    
    // Create a download link with actual file URL
    const link = document.createElement('a');
    link.href = 'https://www.africau.edu/images/default/sample.pdf';
    link.download = 'STEEL-Implementation-Guide-Complete.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset after animation
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  const implementationPhases = [
    {
      phase: 1,
      title: t('implementationGuide.implementationPhases.phase1.title'),
      duration: t('implementationGuide.implementationPhases.phase1.duration'),
      description: t('implementationGuide.implementationPhases.phase1.description'),
      deliverables: t('implementationGuide.implementationPhases.phase1.deliverables'),
      keyActivities: t('implementationGuide.implementationPhases.phase1.keyActivities')
    },
    {
      phase: 2,
      title: t('implementationGuide.implementationPhases.phase2.title'),
      duration: t('implementationGuide.implementationPhases.phase2.duration'),
      description: t('implementationGuide.implementationPhases.phase2.description'),
      deliverables: t('implementationGuide.implementationPhases.phase2.deliverables'),
      keyActivities: t('implementationGuide.implementationPhases.phase2.keyActivities')
    },
    {
      phase: 3,
      title: t('implementationGuide.implementationPhases.phase3.title'),
      duration: t('implementationGuide.implementationPhases.phase3.duration'),
      description: t('implementationGuide.implementationPhases.phase3.description'),
      deliverables: t('implementationGuide.implementationPhases.phase3.deliverables'),
      keyActivities: t('implementationGuide.implementationPhases.phase3.keyActivities')
    },
    {
      phase: 4,
      title: t('implementationGuide.implementationPhases.phase4.title'),
      duration: t('implementationGuide.implementationPhases.phase4.duration'),
      description: t('implementationGuide.implementationPhases.phase4.description'),
      deliverables: t('implementationGuide.implementationPhases.phase4.deliverables'),
      keyActivities: t('implementationGuide.implementationPhases.phase4.keyActivities')
    },
    {
      phase: 5,
      title: t('implementationGuide.implementationPhases.phase5.title'),
      duration: t('implementationGuide.implementationPhases.phase5.duration'),
      description: t('implementationGuide.implementationPhases.phase5.description'),
      deliverables: t('implementationGuide.implementationPhases.phase5.deliverables'),
      keyActivities: t('implementationGuide.implementationPhases.phase5.keyActivities')
    }
  ];

  const guideContents = [
    {
      section: t('implementationGuide.guideContents.executiveSummary.title'),
      items: t('implementationGuide.guideContents.executiveSummary.items')
    },
    {
      section: t('implementationGuide.guideContents.frameworkFoundation.title'),
      items: t('implementationGuide.guideContents.frameworkFoundation.items')
    },
    {
      section: t('implementationGuide.guideContents.implementationRoadmap.title'),
      items: t('implementationGuide.guideContents.implementationRoadmap.items')
    },
    {
      section: t('implementationGuide.guideContents.toolsTemplates.title'),
      items: t('implementationGuide.guideContents.toolsTemplates.items')
    },
    {
      section: t('implementationGuide.guideContents.industryApplications.title'),
      items: t('implementationGuide.guideContents.industryApplications.items')
    },
    {
      section: t('implementationGuide.guideContents.successStories.title'),
      items: t('implementationGuide.guideContents.successStories.items')
    }
  ];

  const benefits = [
    {
      icon: <Shield size={24} className="text-blue-500" />,
      title: t('implementationGuide.benefits.riskReduction'),
      description: t('implementationGuide.benefits.riskReductionDesc')
    },
    {
      icon: <TrendingUp size={24} className="text-green-500" />,
      title: t('implementationGuide.benefits.roi'),
      description: t('implementationGuide.benefits.roiDesc')
    },
    {
      icon: <Clock size={24} className="text-purple-500" />,
      title: t('implementationGuide.benefits.faster'),
      description: t('implementationGuide.benefits.fasterDesc')
    },
    {
      icon: <Target size={24} className="text-orange-500" />,
      title: t('implementationGuide.benefits.confidence'),
      description: t('implementationGuide.benefits.confidenceDesc')
    }
  ];

  // Animation variants
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
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate('/steel')}
            className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            {t('implementationGuide.backToSteel')}
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {t('implementationGuide.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl">
            {t('implementationGuide.subtitle')}
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={item}>
              <Card variant="glass" padding="md" className="text-center h-full">
                <div className="flex justify-center mb-3">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card variant="solid" padding="lg" className="bg-navy text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-3">{t('implementationGuide.completePackage.title')}</h2>
                <p className="text-silver mb-6">
                  {t('implementationGuide.completePackage.description')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>{t('implementationGuide.completePackage.features.pages')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>{t('implementationGuide.completePackage.features.templates')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>{t('implementationGuide.completePackage.features.industry')}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>{t('implementationGuide.completePackage.features.presentations')}</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 text-center">
                <motion.div
                  animate={downloadStarted ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Button 
                    variant="secondary" 
                    size="lg"
                    icon={downloadStarted ? <CheckCircle size={20} /> : <Download size={20} />}
                    iconPosition="left"
                    onClick={handleDownload}
                    disabled={downloadStarted}
                    className="w-full mb-4"
                  >
                    {downloadStarted ? t('implementationGuide.completePackage.downloadStarted') : t('implementationGuide.completePackage.downloadButton')}
                  </Button>
                </motion.div>
                <p className="text-xs text-silver">
                  {t('implementationGuide.completePackage.fileInfo')}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Guide Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('implementationGuide.guideContents.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guideContents.map((section, index) => (
              <Card key={index} variant="glass" padding="md">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-navy/10 dark:bg-navy/30 mr-3 mt-1">
                    <BookOpen size={20} className="text-navy dark:text-silver" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 dark:text-white">
                      {section.section}
                    </h3>
                    <ul className="space-y-1">
                      {Array.isArray(section.items) && section.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="text-gray-600 dark:text-gray-200 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-navy dark:bg-silver mt-2 mr-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Implementation Phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('implementationGuide.implementationPhases.title')}</h2>
          <div className="space-y-4">
            {implementationPhases.map((phase, index) => (
              <Card key={index} variant="glass" padding="none" className="overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-silver/10 dark:hover:bg-navy/10 transition-colors"
                  onClick={() => setSelectedPhase(selectedPhase === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center mr-4 font-bold">
                        {phase.phase}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold dark:text-white">{phase.title}</h3>
                        <p className="text-gray-600 dark:text-gray-200 text-sm">
                          {phase.duration} • {phase.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight 
                      size={20} 
                      className={`text-gray-400 transition-transform ${
                        selectedPhase === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                </div>
                
                <AnimatePresence>
                  {selectedPhase === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="p-6 bg-silver/5 dark:bg-navy/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 dark:text-white flex items-center">
                              <FileText size={16} className="mr-2" />
                              {t('implementationGuide.implementationPhases.keyDeliverables')}
                            </h4>
                            <ul className="space-y-2">
                              {Array.isArray(phase.deliverables) && phase.deliverables.map((deliverable: string, dIndex: number) => (
                                <li key={dIndex} className="text-gray-600 dark:text-gray-200 text-sm flex items-start">
                                  <CheckCircle size={14} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 dark:text-white flex items-center">
                              <Clipboard size={16} className="mr-2" />
                              {t('implementationGuide.implementationPhases.keyActivities')}
                            </h4>
                            <ul className="space-y-2">
                              {Array.isArray(phase.keyActivities) && phase.keyActivities.map((activity: string, aIndex: number) => (
                                <li key={aIndex} className="text-gray-600 dark:text-gray-200 text-sm flex items-start">
                                  <Play size={14} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('implementationGuide.successStoriesPreview.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('implementationGuide.successStoriesPreview.fortune500.category')}</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                {t('implementationGuide.successStoriesPreview.fortune500.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                {t('implementationGuide.successStoriesPreview.fortune500.description')}
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                {t('implementationGuide.successStoriesPreview.fortune500.metrics')}
              </div>
            </Card>

            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('implementationGuide.successStoriesPreview.healthcare.category')}</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                {t('implementationGuide.successStoriesPreview.healthcare.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                {t('implementationGuide.successStoriesPreview.healthcare.description')}
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                {t('implementationGuide.successStoriesPreview.healthcare.metrics')}
              </div>
            </Card>

            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('implementationGuide.successStoriesPreview.government.category')}</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                {t('implementationGuide.successStoriesPreview.government.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                {t('implementationGuide.successStoriesPreview.government.description')}
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                {t('implementationGuide.successStoriesPreview.government.metrics')}
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card variant="glass" padding="lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                {t('implementationGuide.cta.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-100 max-w-2xl mx-auto mb-8">
                {t('implementationGuide.cta.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<Users size={18} />}
                  onClick={() => navigate('/contact')}
                >
                  {t('implementationGuide.cta.scheduleConsultation')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  icon={<AlertCircle size={18} />}
                  onClick={() => navigate('/resources')}
                >
                  {t('implementationGuide.cta.viewResources')}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};