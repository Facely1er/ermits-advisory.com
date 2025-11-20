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
    
    // Create a download link - Update with actual PDF URL when available
    // For now, navigate to contact page to request the guide
    navigate('/contact?subject=STEEL Implementation Guide');
    
    // Reset after animation
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  const implementationPhases = [
    {
      phase: 1,
      title: 'STEEL Assessment Completion',
      duration: '25-30 minutes',
      description: 'Complete the 46-question executive assessment',
      deliverables: ['46-question PESTEL assessment completed', 'Initial risk scores calculated', 'Factor-level breakdowns', 'Composite STEEL score (0-100)'],
      keyActivities: ['Answer Political questions (Q1-Q7, Q43)', 'Answer Economic questions (Q8-Q14)', 'Answer Social questions (Q15-Q21)', 'Answer Technological questions (Q22-Q28, Q44-Q45)', 'Answer Environmental questions (Q29-Q35, Q46)', 'Answer Legal questions (Q36-Q42)']
    },
    {
      phase: 2,
      title: 'Results Analysis & Interpretation',
      duration: '1-2 weeks',
      description: 'Understand your STEEL scores and risk categorization',
      deliverables: ['PESTEL factor score analysis', 'Risk category determination (Low/Moderate/Elevated/High)', 'Gap identification across factors', 'Visual dashboard with radar charts'],
      keyActivities: ['Review composite score (0-100)', 'Analyze weighted factor scores', 'Identify highest-risk PESTEL dimensions', 'Benchmark against industry standards']
    },
    {
      phase: 3,
      title: 'Strategic Recommendations',
      duration: '2-4 weeks',
      description: 'Develop prioritized action plan based on STEEL results',
      deliverables: ['Prioritized recommendations by factor', 'Quick-win opportunities (30/60/90 day)', 'ERMITS platform integration roadmap', 'Executive presentation deck'],
      keyActivities: ['Prioritize gaps by risk level', 'Map recommendations to PESTEL factors', 'Identify ERMITS product integrations', 'Create implementation timeline']
    },
    {
      phase: 4,
      title: 'ERMITS Platform Integration',
      duration: '4-8 weeks',
      description: 'Integrate STEEL intelligence with ERMITS products',
      deliverables: ['CyberCaution threat intelligence integration', 'CyberCorrect privacy compliance mapping', 'VendorSoluce third-party risk scoring', 'Platform-specific STEEL score consumption'],
      keyActivities: ['Configure STEEL data feeds', 'Set up automated scoring updates', 'Integrate with existing GRC tools', 'Train teams on STEEL-powered insights']
    },
    {
      phase: 5,
      title: 'Continuous Monitoring & Improvement',
      duration: 'Ongoing',
      description: 'Maintain and evolve STEEL-based risk intelligence',
      deliverables: ['Quarterly STEEL reassessments', 'Trend analysis and score evolution', 'Updated risk categorizations', 'Maturity advancement tracking'],
      keyActivities: ['Reassess every 90 days', 'Track score improvements', 'Update PESTEL factor priorities', 'Refine integration with ERMITS products']
    }
  ];

  const guideContents = [
    {
      section: 'STEEL Methodology Overview',
      items: ['PESTEL-based assessment framework', '46-question executive intelligence questionnaire', 'Weighted scoring algorithm (Technological 1.2x, Legal 1.1x)', 'Composite score calculation (0-100 scale)', 'Risk categorization: Low/Moderate/Elevated/High']
    },
    {
      section: 'Assessment Structure',
      items: ['Political Factor: 8 questions (Q1-Q7, Q43)', 'Economic Factor: 7 questions (Q8-Q14)', 'Social Factor: 7 questions (Q15-Q21)', 'Technological Factor: 9 questions (Q22-Q28, Q44-Q45)', 'Environmental Factor: 8 questions (Q29-Q35, Q46)', 'Legal Factor: 7 questions (Q36-Q42)']
    },
    {
      section: 'Scoring & Analysis',
      items: ['Factor score calculation (0-100 per PESTEL dimension)', 'Weighted composite STEEL score', 'Risk level determination methodology', 'Industry benchmarking and calibration', 'Visual dashboard with PESTEL radar charts']
    },
    {
      section: 'ERMITS Product Integration',
      items: ['CyberCaution: Threat intelligence powered by STEEL', 'CyberCorrect: Privacy compliance with STEEL scoring', 'VendorSoluce: Third-party risk using STEEL factors', 'CyberSoluce: NIST CSF alignment with STEEL maturity', 'TechnoSoluce: SBOM analysis enhanced by STEEL']
    },
    {
      section: 'Implementation Best Practices',
      items: ['25-30 minute assessment completion tips', 'Executive stakeholder engagement strategies', 'Interpreting and presenting STEEL scores', 'Prioritizing recommendations by PESTEL gaps', 'Quarterly reassessment cadence']
    },
    {
      section: 'Deliverables & Reporting',
      items: ['Board-ready executive presentation', 'PDF assessment report with visualizations', 'Strategic recommendations prioritized by factor', '30/60/90 day quick-win action plans', 'Integration roadmap for ERMITS platforms']
    }
  ];

  const benefits = [
    {
      icon: <Shield size={24} className="text-blue-500" />,
      title: 'Risk Reduction',
      description: 'Strategic risk assessment and mitigation'
    },
    {
      icon: <TrendingUp size={24} className="text-green-500" />,
      title: 'ROI Focus',
      description: 'Business-aligned security investments'
    },
    {
      icon: <Clock size={24} className="text-purple-500" />,
      title: 'Rapid Response',
      description: 'Improved threat detection and response'
    },
    {
      icon: <Target size={24} className="text-orange-500" />,
      title: 'Executive Alignment',
      description: 'Board-ready risk intelligence'
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
            Your comprehensive roadmap to implementing STEEL™ strategic cybersecurity intelligence through the 46-question PESTEL assessment
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
                    <span>46-question PESTEL assessment guide</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>STEEL scoring algorithm explained</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>ERMITS product integration roadmap</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>Board-ready presentation templates</span>
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
                  Complete Guide • Available on Request • Version 2.0
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* STEEL Assessment Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-br from-navy/5 to-silver/5 dark:from-navy/20 dark:to-silver/10">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">STEEL™ Assessment Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 dark:text-white">The 46-Question Assessment</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  STEEL™ uses a comprehensive 46-question executive assessment organized across six PESTEL factors. 
                  Complete the assessment in 25-30 minutes to receive your personalized risk intelligence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-navy dark:text-white">Political:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">8 questions (Q1-Q7, Q43)</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-navy dark:text-white">Economic:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">7 questions (Q8-Q14)</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-navy dark:text-white">Social:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">7 questions (Q15-Q21)</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-navy dark:text-white">Technological:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">9 questions (Q22-Q28, Q44-Q45) - Weighted 1.2x</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-navy dark:text-white">Environmental:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">8 questions (Q29-Q35, Q46)</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-navy dark:text-white">Legal:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">7 questions (Q36-Q42) - Weighted 1.1x</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Scoring Methodology</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  Each question is scored 1-10, with factor scores calculated and weighted to produce your composite STEEL score (0-100).
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-white/50 dark:bg-dark-surface/50 rounded-lg">
                    <div className="font-semibold text-navy dark:text-white mb-1">Composite Score Calculation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Weighted average across all 6 PESTEL factors, with Technological (1.2x) and Legal (1.1x) receiving higher weights
                    </div>
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-dark-surface/50 rounded-lg">
                    <div className="font-semibold text-navy dark:text-white mb-1">Risk Categories</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <div>• <strong>80-100:</strong> LOW RISK (Resilient)</div>
                      <div>• <strong>60-79:</strong> MODERATE RISK (Managed)</div>
                      <div>• <strong>40-59:</strong> ELEVATED RISK (Gaps Present)</div>
                      <div>• <strong>0-39:</strong> HIGH RISK (Critical Action Needed)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong className="text-navy dark:text-white">Note:</strong> STEEL™ is the intelligence engine that powers all ERMITS products. 
                Your assessment results can be integrated with CyberCaution, CyberCorrect, VendorSoluce, and other ERMITS platforms 
                to provide unified risk intelligence across your organization.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Guide Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
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
                Achieved STEEL composite score improvement from 52 to 78 through targeted PESTEL factor enhancements, 
                reducing cyber risk exposure by 45% while improving board reporting clarity
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Timeline: 6 months • STEEL Score: 52→78 • ROI: 3.2x
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
                Improved Legal and Political PESTEL factors from STEEL assessment, achieving HIPAA compliance excellence 
                and reducing incident response time by 60% through integrated CyberCorrect implementation
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Timeline: 4 months • Legal Factor: 45→82 • ROI: 2.8x
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
                Leveraged STEEL assessment to identify Technological and Environmental factor gaps, enhancing threat detection 
                capabilities through CyberCaution integration and streamlining compliance reporting
              </p>
              <div className="text-xs text-navy dark:text-silver font-medium">
                Timeline: 8 months • Tech Factor: 38→75 • ROI: 4.1x
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