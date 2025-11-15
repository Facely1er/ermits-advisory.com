import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Download, ArrowLeft, CheckCircle, Clock, Users, 
  FileText, Shield, TrendingUp, Target, AlertCircle,
  ChevronRight, Play, BookOpen, Clipboard, Star
} from 'lucide-react';

export const ImplementationGuidePage: React.FC = () => {
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
      title: 'Assessment & Planning',
      duration: '2-4 weeks',
      description: 'Initial discovery and strategic planning',
      deliverables: ['Current state assessment', 'Risk landscape mapping', 'Implementation roadmap', 'Stakeholder alignment plan'],
      keyActivities: ['Executive interviews', 'Technical environment review', 'Gap analysis', 'Resource planning']
    },
    {
      phase: 2,
      title: 'Foundation Building',
      duration: '4-6 weeks',
      description: 'Establish STEEL framework foundation',
      deliverables: ['STEEL dimension baselines', 'Metrics framework', 'Reporting templates', 'Tool configuration'],
      keyActivities: ['Data source integration', 'Baseline measurements', 'Process documentation', 'Team training']
    },
    {
      phase: 3,
      title: 'Full Deployment',
      duration: '6-8 weeks',
      description: 'Roll out comprehensive monitoring',
      deliverables: ['Live dashboard', 'Automated alerts', 'Risk scoring models', 'Integration complete'],
      keyActivities: ['System deployment', 'Workflow integration', 'User onboarding', 'Pilot program']
    },
    {
      phase: 4,
      title: 'Optimization',
      duration: '4-6 weeks',
      description: 'Refine and enhance operations',
      deliverables: ['Tuned algorithms', 'Enhanced reporting', 'Process improvements', 'Best practices guide'],
      keyActivities: ['Performance analysis', 'Feedback incorporation', 'Process refinement', 'Advanced training']
    },
    {
      phase: 5,
      title: 'Continuous Improvement',
      duration: 'Ongoing',
      description: 'Maintain and evolve the framework',
      deliverables: ['Quarterly reviews', 'Framework updates', 'Capability expansions', 'Maturity advancement'],
      keyActivities: ['Regular assessments', 'Trend analysis', 'Capability building', 'Strategic planning']
    }
  ];

  const guideContents = [
    {
      section: 'Executive Summary',
      items: ['Framework overview', 'Business value proposition', 'Implementation approach', 'Expected outcomes']
    },
    {
      section: 'Framework Foundation',
      items: ['STEEL methodology explained', 'Six dimension breakdown', 'Risk assessment approach', 'Integration with existing frameworks']
    },
    {
      section: 'Implementation Roadmap',
      items: ['Phase-by-phase guide', 'Timeline and milestones', 'Resource requirements', 'Success metrics']
    },
    {
      section: 'Tools & Templates',
      items: ['Assessment templates', 'Reporting dashboards', 'Workflow diagrams', 'Measurement frameworks']
    },
    {
      section: 'Industry Applications',
      items: ['Financial services', 'Healthcare', 'Manufacturing', 'Government & public sector']
    },
    {
      section: 'Success Stories',
      items: ['Case studies', 'Lessons learned', 'Best practices', 'ROI examples']
    }
  ];

  const benefits = [
    {
      icon: <Shield size={24} className="text-blue-500" />,
      title: '40%',
      description: 'Average risk reduction'
    },
    {
      icon: <TrendingUp size={24} className="text-green-500" />,
      title: '3x',
      description: 'Return on investment'
    },
    {
      icon: <Clock size={24} className="text-purple-500" />,
      title: '60%',
      description: 'Faster threat response'
    },
    {
      icon: <Target size={24} className="text-orange-500" />,
      title: '95%',
      description: 'Board confidence increase'
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
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
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
            Back to STEEL™
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            STEEL™ Implementation Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl">
            Your comprehensive roadmap to implementing strategic cybersecurity intelligence
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
                <h2 className="text-2xl font-bold mb-3">Complete Implementation Package</h2>
                <p className="text-silver mb-6">
                  Download the comprehensive guide with everything you need to successfully implement STEEL™
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>120+ pages of detailed guidance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>25+ ready-to-use templates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>Industry-specific examples</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>Executive presentations</span>
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
                    {downloadStarted ? 'Download Started!' : 'Download Complete Guide'}
                  </Button>
                </motion.div>
                <p className="text-xs text-silver">
                  PDF Format • 15 MB • Version 2.0
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
          <h2 className="text-2xl font-bold mb-6 dark:text-white">What's Inside the Guide</h2>
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
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Implementation Phases</h2>
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
                              Key Deliverables
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
                              Key Activities
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
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Financial Services</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                Fortune 500 Bank
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                Reduced cyber risk exposure by 45% while improving board reporting clarity
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Timeline: 6 months • ROI: 3.2x
              </div>
            </Card>

            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Healthcare</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                Regional Health System
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                Achieved HIPAA compliance excellence and reduced incident response time by 60%
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Timeline: 4 months • ROI: 2.8x
              </div>
            </Card>

            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Government</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                State Government Agency
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                Enhanced threat detection capabilities and streamlined compliance reporting
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Timeline: 8 months • ROI: 4.1x
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
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 dark:text-gray-100 max-w-2xl mx-auto mb-8">
                Our team of experts is ready to help you implement STEEL™ and transform your cybersecurity strategy
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Users size={18} />}
                  onClick={() => navigate('/contact')}
                >
                  Schedule a Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<AlertCircle size={18} />}
                  onClick={() => navigate('/contact')}
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};