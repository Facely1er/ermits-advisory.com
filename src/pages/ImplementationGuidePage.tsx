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
    
    // Simulate download
    const link = document.createElement('a');
    link.href = '#'; // In real implementation, this would be the actual file URL
    link.download = 'STEEL-Implementation-Guide-Complete.pdf';
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
      title: "Assessment & Planning",
      duration: "2-4 weeks",
      description: "Comprehensive baseline assessment and strategic planning phase",
      deliverables: [
        "Current state security assessment",
        "STEEL dimension mapping",
        "Stakeholder identification",
        "Implementation roadmap",
        "Resource allocation plan"
      ],
      keyActivities: [
        "Executive workshops",
        "Technical assessments",
        "Risk baseline establishment",
        "Team formation"
      ]
    },
    {
      phase: 2,
      title: "Foundation Setup",
      duration: "3-6 weeks",
      description: "Establish the foundational elements of the STEEL framework",
      deliverables: [
        "STEEL governance structure",
        "Risk measurement framework",
        "Reporting templates",
        "Communication protocols",
        "Training materials"
      ],
      keyActivities: [
        "Framework customization",
        "Tool configuration",
        "Process documentation",
        "Team training"
      ]
    },
    {
      phase: 3,
      title: "Pilot Implementation",
      duration: "4-8 weeks",
      description: "Deploy STEEL methodology in controlled pilot environment",
      deliverables: [
        "Pilot assessment results",
        "Process refinements",
        "Lessons learned",
        "Success metrics",
        "Rollout plan"
      ],
      keyActivities: [
        "Pilot execution",
        "Data collection",
        "Stakeholder feedback",
        "Process optimization"
      ]
    },
    {
      phase: 4,
      title: "Full Deployment",
      duration: "6-12 weeks",
      description: "Organization-wide rollout of STEEL framework",
      deliverables: [
        "Complete STEEL implementation",
        "Executive dashboards",
        "Regular reporting cycle",
        "Integration with existing systems",
        "Change management support"
      ],
      keyActivities: [
        "Full-scale deployment",
        "System integration",
        "User onboarding",
        "Process monitoring"
      ]
    },
    {
      phase: 5,
      title: "Optimization & Maturity",
      duration: "3-6 months",
      description: "Continuous improvement and maturity enhancement",
      deliverables: [
        "Maturity assessment",
        "Optimization recommendations",
        "Advanced analytics",
        "Benchmarking reports",
        "Future roadmap"
      ],
      keyActivities: [
        "Performance analysis",
        "Best practice identification",
        "Advanced feature deployment",
        "Continuous improvement"
      ]
    }
  ];

  const guideContents = [
    {
      section: "Executive Summary",
      items: [
        "STEEL™ methodology overview",
        "Business case and ROI analysis", 
        "Implementation timeline",
        "Success criteria and metrics"
      ]
    },
    {
      section: "Framework Foundation",
      items: [
        "Six STEEL dimensions explained",
        "Risk assessment methodology",
        "Scoring and measurement systems",
        "Integration with existing frameworks"
      ]
    },
    {
      section: "Implementation Roadmap",
      items: [
        "Phase-by-phase implementation guide",
        "Resource requirements and planning",
        "Stakeholder engagement strategies",
        "Change management best practices"
      ]
    },
    {
      section: "Tools & Templates",
      items: [
        "Assessment worksheets and checklists",
        "Executive presentation templates",
        "Risk reporting dashboards",
        "Training materials and guides"
      ]
    },
    {
      section: "Industry Applications",
      items: [
        "Financial services implementation",
        "Healthcare sector adaptations",
        "Manufacturing industry specifics",
        "Government and public sector"
      ]
    },
    {
      section: "Success Stories",
      items: [
        "Case study: Fortune 500 transformation",
        "Government agency modernization",
        "Mid-market company implementation",
        "Lessons learned and best practices"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield size={24} className="text-blue-500" />,
      title: "67% Risk Reduction",
      description: "Average reduction in overall cyber risk exposure"
    },
    {
      icon: <TrendingUp size={24} className="text-green-500" />,
      title: "3.4x ROI",
      description: "Return on security investment within 18 months"
    },
    {
      icon: <Clock size={24} className="text-purple-500" />,
      title: "83% Faster",
      description: "Time to actionable risk insights"
    },
    {
      icon: <Target size={24} className="text-orange-500" />,
      title: "92% Confidence",
      description: "Board confidence in security posture"
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
            Back to STEEL™ Framework
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            STEEL™ Implementation Guide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl">
            Your comprehensive roadmap to implementing the STEEL™ methodology in your organization. 
            Transform your approach to cyber risk management with our proven framework.
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
                  Download our comprehensive 120-page implementation guide with templates, 
                  checklists, and industry-specific guidance to ensure successful STEEL™ deployment.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>120+ pages of detailed guidance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>25+ templates and worksheets</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>Industry-specific adaptations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>Executive presentation decks</span>
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
                  PDF • 120 pages • 15.2 MB
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
                      {section.items.map((item, itemIndex) => (
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
          <h2 className="text-2xl font-bold mb-6 dark:text-white">5-Phase Implementation Roadmap</h2>
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
                              {phase.deliverables.map((deliverable, dIndex) => (
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
                              {phase.keyActivities.map((activity, aIndex) => (
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
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Fortune 500 Financial</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                Global Bank Achieves 78% Risk Reduction
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                Major international bank implements STEEL™ across 40+ countries, 
                reducing cyber risk exposure while improving regulatory compliance.
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Implementation time: 6 months • ROI: 340%
              </div>
            </Card>

            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Healthcare System</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                Regional Healthcare Network Transformation
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                Multi-hospital system deploys STEEL™ to protect patient data 
                and ensure HIPAA compliance across all facilities.
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Implementation time: 4 months • Compliance: 99.8%
              </div>
            </Card>

            <Card variant="glass" padding="md">
              <div className="flex items-center mb-3">
                <Star size={20} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Government Agency</span>
              </div>
              <h3 className="font-semibold mb-2 dark:text-white">
                Federal Agency Modernization Success
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm mb-3">
                Large federal agency modernizes cybersecurity approach using STEEL™, 
                achieving FedRAMP authorization and zero-trust architecture.
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Implementation time: 8 months • Uptime: 99.9%
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
                Ready to Start Your STEEL™ Implementation?
              </h2>
              <p className="text-gray-600 dark:text-gray-100 max-w-2xl mx-auto mb-8">
                Our implementation experts are standing by to help you successfully deploy 
                the STEEL™ methodology in your organization. Schedule a consultation to discuss 
                your specific requirements and timeline.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<Users size={18} />}
                  onClick={() => navigate('/contact')}
                >
                  Schedule Implementation Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  icon={<AlertCircle size={18} />}
                  onClick={() => navigate('/resources')}
                >
                  View Additional Resources
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};