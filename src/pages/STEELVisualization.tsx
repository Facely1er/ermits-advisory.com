import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { Card } from '../components/shared/Card';
import { 
  Users, 
  Info, ArrowRight, ExternalLink, Download, Link as LinkIcon,
  Lightbulb, BarChart2, FileText, Search, Activity, Presentation, Shield,
  TrendingUp, Server, Leaf, Scale, Radar
} from 'lucide-react';
import backgroundNodeAnalysis from '../assets/background-node-analysis.png';
import { getSteelAssessmentFromStorage, watchSteelStorage } from '../services/steelAssessmentService';
import { SteelAssessmentData } from '../types/steelAssessment';
import { steelDimensions } from '../data/mockData';

// Progress bar component that uses refs to set CSS variables
const ProgressBar: React.FC<{ value: number; color: string }> = ({ value, color }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.setProperty('--progress-width', `${value}%`);
      progressRef.current.style.setProperty('--progress-color', color);
    }
  }, [value, color]);

  return <div ref={progressRef} className="steel-progress-fill" />;
};

export const STEELVisualization: React.FC = () => {
  const navigate = useNavigate();
  const [assessmentData, setAssessmentData] = useState<SteelAssessmentData | null>(null);

  const getDimensionIcon = (id: string) => {
    switch (id) {
      case 'political':
        return <Shield size={24} className="text-navy dark:text-silver" />;
      case 'economic':
        return <TrendingUp size={24} className="text-navy dark:text-silver" />;
      case 'social':
        return <Users size={24} className="text-navy dark:text-silver" />;
      case 'technology':
        return <Server size={24} className="text-navy dark:text-silver" />;
      case 'environmental':
        return <Leaf size={24} className="text-navy dark:text-silver" />;
      case 'legal':
        return <Scale size={24} className="text-navy dark:text-silver" />;
      default:
        return null;
    }
  };

  const getRiskLevel = (value: number) => {
    if (value < 40) return { label: 'Low', color: 'text-green-600 dark:text-green-400' };
    if (value < 60) return { label: 'Medium', color: 'text-yellow-600 dark:text-yellow-400' };
    if (value < 80) return { label: 'High', color: 'text-orange-600 dark:text-orange-400' };
    return { label: 'Critical', color: 'text-red-600 dark:text-red-400' };
  };

  // Load assessment data
  useEffect(() => {
    const data = getSteelAssessmentFromStorage();
    setAssessmentData(data);
    
    // Watch for changes
    const unwatch = watchSteelStorage((newData) => {
      setAssessmentData(newData);
    });
    
    return unwatch;
  }, []);

  // Integration steps for animation
  const integrationSteps = [
    { id: 'assessment', label: "Assessment" },
    { id: 'analysis', label: "Analysis" },
    { id: 'strategy', label: "Strategy" },
    { id: 'implementation', label: "Implementation" },
    { id: 'monitoring', label: "Monitoring" },
    { id: 'optimization', label: "Optimization" }
  ];

  // What Makes STEEL Different items
  const whatMakesDifferentItems = [
    {
      id: 'predictiveIntelligence',
      icon: <Lightbulb size={24} className="text-navy dark:text-silver" />,
      title: "Predictive Intelligence Integration",
      description: "Real-time threat intelligence feeds directly into environmental analysis"
    },
    {
      id: 'enhancedPestel',
      icon: <BarChart2 size={24} className="text-navy dark:text-silver" />,
      title: "Enhanced PESTEL Framework",
      description: "Traditional PESTEL analysis enhanced with cybersecurity-specific factors"
    },
    {
      id: 'expertPartnership',
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      title: "Expert Partnership Model",
      description: "Legal and cybersecurity experts working together on every assessment"
    },
    {
      id: 'frameworkIntegration',
      icon: <FileText size={24} className="text-navy dark:text-silver" />,
      title: "Framework Integration",
      description: "Seamless integration with existing risk management frameworks"
    }
  ];

  // Advisory Process items
  const advisoryProcessItems = [
    {
      id: 'strategicDiscovery',
      icon: <Search size={24} className="text-navy dark:text-silver" />,
      title: "Strategic Discovery",
      description: "Understanding your business context, objectives, and current risk posture"
    },
    {
      id: 'modeling',
      icon: <Activity size={24} className="text-navy dark:text-silver" />,
      title: "STEEL™ Modeling",
      description: "Applying the STEEL™ framework to identify and assess strategic risks"
    },
    {
      id: 'synthesis',
      icon: <Lightbulb size={24} className="text-navy dark:text-silver" />,
      title: "Strategic Synthesis",
      description: "Integrating findings into actionable strategic recommendations"
    },
    {
      id: 'briefing',
      icon: <Presentation size={24} className="text-navy dark:text-silver" />,
      title: "Executive Briefing",
      description: "Presenting insights and recommendations to executive leadership"
    }
  ];

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden mb-16">
        <style>{`
          .steel-hero-background {
            background-image: url(${backgroundNodeAnalysis});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}</style>
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 steel-hero-background" />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-dark/85 to-navy/90" />
          {/* Animated gradient overlay for depth */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              x: ['-50%', '50%', '-50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
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

            <h1 className="text-3xl md:text-5xl font-bold mb-4">STEEL™ Strategic Risk Diagnostic</h1>
            <p className="text-xl md:text-2xl mb-4 text-silver/90">
              Beyond Traditional PESTEL Analysis
            </p>
            <p className="text-lg mb-8 text-silver/80 max-w-3xl mx-auto">
              A cybersecurity-focused strategic environment assessment framework that maps geopolitical, cyber, privacy, and supply-chain exposure to actionable implementation tools.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                onClick={() => window.open('/steel/index.html', '_blank')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                Start Free Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1"
                onClick={() => navigate('/contact')}
              >
                Schedule Consultation
              </Button>
              <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform"
                  onClick={() => navigate('/contact')}
                >
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform"
                  icon={<Download size={18} />}
                  iconPosition="left"
                  onClick={() => navigate('/steel/implementation-guide')}
                >
                  Download Methodology
                </Button>
                <Button
                  variant="luxury"
                  size="lg"
                  className="border-gold text-gold hover:bg-gold/10 transform hover:scale-105 transition-transform"
                  icon={<Radar size={18} />}
                  iconPosition="left"
                  onClick={() => navigate('/steel/radar')}
                >
                  STEEL™ Radar
                  <span className="ml-2 text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">Premium</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      <div className="container mx-auto px-4">
        {/* What Makes STEEL Different Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Makes STEEL™ Different</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Four key innovations that set STEEL™ apart from traditional risk assessment frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatMakesDifferentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <InteractiveCard 
                  hover3D={true}
                  glowEffect={true}
                  className="h-full bg-white dark:bg-dark-surface p-6"
                >
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Advisory Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Advisory Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              A systematic approach to strategic cybersecurity assessment and planning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryProcessItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                <InteractiveCard 
                  hover3D={true}
                  className="h-full text-center bg-white dark:bg-dark-surface p-6"
                >
                  <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 inline-flex mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">{item.description}</p>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* STEEL Framework Dimensions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">STEEL™ Risk Assessment Framework</h2>
            <p className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              An innovative approach to cybersecurity risk assessment that extends traditional PESTEL analysis with cybersecurity-specific factors
            </p>
          </div>

          {/* STEEL Dimensions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {steelDimensions.map((dimension, index) => {
              const riskLevel = getRiskLevel(dimension.value);
              return (
                <motion.div
                  key={dimension.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                >
                  <div className="bg-white dark:bg-dark-surface rounded-lg p-6 border border-gray-200 dark:border-gray-700 h-full">
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-lg bg-silver/20 dark:bg-navy/40 mr-4 flex-shrink-0">
                        {getDimensionIcon(dimension.id)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{dimension.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-2xl font-bold ${riskLevel.color}`}>
                            {dimension.value}
                          </span>
                          <span className={`text-sm font-medium ${riskLevel.color}`}>
                            {riskLevel.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {dimension.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <ProgressBar value={dimension.value} color={dimension.color} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Assessment Status */}
          <div className="mt-8">
            {assessmentData ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <p className="text-green-800 dark:text-green-200 font-semibold mb-2 text-lg">
                  ✓ Assessment Complete
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mb-6">
                  Your assessment was completed on {new Date(assessmentData.timestamp).toLocaleDateString()}. 
                  View your full results and recommendations in the dashboard.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/dashboard')}
                  >
                    View Dashboard
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    icon={<LinkIcon size={16} />}
                    iconPosition="right"
                    onClick={() => window.open('/steel/index.html', '_blank')}
                  >
                    Retake Assessment
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 text-center">
                <p className="text-amber-800 dark:text-amber-200 font-semibold mb-2 text-lg">
                  No Assessment Data Found
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-6">
                  Complete the STEEL™ assessment to see your personalized risk scores. 
                  The framework evaluates your organization across six critical dimensions.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                  onClick={() => window.open('/steel/index.html', '_blank')}
                >
                  Take the Free STEEL Assessment
                </Button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Enhanced Integration Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <InteractiveCard 
            glowEffect={true}
            className="bg-white dark:bg-dark-surface p-8"
          >
            <h2 className="text-2xl font-bold mb-6 dark:text-white">STEEL™ Integration Process</h2>
            <p className="text-gray-600 dark:text-gray-100 mb-8">
              Our methodology for implementing STEEL™ within your organization
            </p>
            
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-10/12 relative">
                {/* Connection line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-navy via-silver to-navy transform -translate-y-1/2 z-0"></div>
                
                {/* Steps */}
                <div className="flex justify-between relative z-10">
                  {integrationSteps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center mb-2 shadow-lg"
                        whileHover={{ 
                          boxShadow: '0 10px 25px rgba(0, 75, 135, 0.4)',
                          y: -2 
                        }}
                      >
                        <span className="font-bold">{index + 1}</span>
                      </motion.div>
                      <span className="text-sm font-medium text-center dark:text-gray-200 max-w-20">
                        {step.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<Download size={20} />}
                  iconPosition="left"
                  className="px-6 py-3 shadow-lg transform transition-transform"
                  onClick={() => navigate('/steel/implementation-guide')}
                >
                  Download Implementation Guide
                </Button>
              </motion.div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <InteractiveCard 
            glowEffect={true}
            className="bg-navy text-white p-8"
          >
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4 flex-shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transform Your Risk Assessment Approach</h3>
                <p className="mb-4">
                  Discover how STEEL™ can revolutionize your organization's cybersecurity strategy
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="secondary"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    onClick={() => window.open('/steel/index.html', '_blank')}
                    className="transform hover:scale-105 transition-transform"
                  >
                    Start Free Assessment
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform"
                    icon={<ExternalLink size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/contact')}
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform"
                    onClick={() => navigate('/contact')}
                  >
                    Request Case Study
                  </Button>
                </div>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* STEEL Radar Promotion Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <Card variant="luxury-glass" padding="lg" className="bg-gradient-to-br from-navy/10 to-gold/10 dark:from-navy/20 dark:to-gold/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Radar size={32} className="text-gold" />
                  <h3 className="text-2xl font-bold dark:text-white">STEEL™ Radar</h3>
                  <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">Premium</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  Continuous monitoring with automated data ingestion. Import data from your security tools 
                  to automatically calculate and track your STEEL scores over time.
                </p>
                <Button
                  variant="luxury"
                  onClick={() => navigate('/steel/radar')}
                  icon={<Radar size={18} />}
                  iconPosition="right"
                >
                  Launch STEEL™ Radar
                </Button>
              </div>
              <div className="flex-shrink-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-navy dark:text-white">Auto-Scoring</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">From Data</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-navy dark:text-white">Trends</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Over Time</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-navy dark:text-white">Confidence</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Scoring</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-navy dark:text-white">Evidence</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Based</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};