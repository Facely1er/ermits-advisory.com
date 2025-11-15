import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import { InteractiveSTEELViz } from '../components/interactive/InteractiveSTEELViz';
import { 
  Users, 
  Info, ArrowRight, ExternalLink, Download,
  Lightbulb, BarChart2, FileText, Search, Activity, Presentation
} from 'lucide-react';
// import { steelDimensions } from '../data/mockData';

export const STEELVisualization: React.FC = () => {
  const navigate = useNavigate();
  // const [selectedDimension, setSelectedDimension] = useState<string | null>(null);
  
  // const handleDimensionClick = (id: string) => {
  //   setSelectedDimension(id === selectedDimension ? null : id);
  // };

  // const getDimensionIcon = (id: string, size = 24) => {
  //   switch (id) {
  //     case 'political':
  //       return <Shield size={size} />;
  //     case 'economic':
  //       return <TrendingUp size={size} />;
  //     case 'social':
  //       return <Users size={size} />;
  //     case 'technology':
  //       return <Server size={size} />;
  //     case 'environmental':
  //       return <Leaf size={size} />;
  //     case 'legal':
  //       return <Scale size={size} />;
  //     default:
  //       return null;
  //   }
  // };

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
      description: "Real-time threat intelligence feeds directly into environmental analysis",
      link: "Learn about our intelligence sources"
    },
    {
      id: 'enhancedPestel',
      icon: <BarChart2 size={24} className="text-navy dark:text-silver" />,
      title: "Enhanced PESTEL Framework",
      description: "Traditional PESTEL analysis enhanced with cybersecurity-specific factors",
      link: "Compare with traditional PESTEL"
    },
    {
      id: 'expertPartnership',
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      title: "Expert Partnership Model",
      description: "Legal and cybersecurity experts working together on every assessment",
      link: "Meet our expert team"
    },
    {
      id: 'frameworkIntegration',
      icon: <FileText size={24} className="text-navy dark:text-silver" />,
      title: "Framework Integration",
      description: "Seamless integration with existing risk management frameworks",
      link: "View integration options"
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
      <div className="container mx-auto px-4">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Card variant="solid" padding="lg" className="bg-navy text-white">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">STEEL™ Strategic Risk Assessment</h1>
              <p className="text-xl md:text-2xl mb-4 text-silver">
                Beyond Traditional PESTEL Analysis
              </p>
              <p className="text-lg mb-8 text-silver">
                A cybersecurity-focused strategic environment assessment framework
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                  onClick={() => window.location.href = '/steel/index.html'}
                  className="transform hover:scale-105 transition-transform"
                >
                  Start Free Assessment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform"
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
              </div>
            </div>
          </Card>
        </motion.div>

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
                      <p className="text-gray-600 dark:text-gray-200 mb-4">{item.description}</p>
                      <button className="text-navy dark:text-silver font-medium hover:underline text-sm flex items-center transition-colors">
                        {item.link}
                        <ArrowRight size={14} className="ml-1" />
                      </button>
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

        {/* Enhanced STEEL Methodology Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <InteractiveCard 
              glowEffect={true}
              className="bg-white dark:bg-dark-surface p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">STEEL™ Risk Assessment Framework</h2>
                <p className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
                  An innovative approach to cybersecurity risk assessment that extends traditional PESTEL analysis with cybersecurity-specific factors
                </p>
              </div>
              
              {/* Interactive STEEL Visualization */}
              <InteractiveSTEELViz />

              {/* Call to Action for Assessment */}
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-100 mb-4">
                  Ready to assess your organization's strategic threat environment?
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                  onClick={() => window.location.href = '/steel/index.html'}
                  className="transform hover:scale-105 transition-transform"
                >
                  Take the Free STEEL Assessment
                </Button>
              </div>
            </InteractiveCard>
          </motion.div>
        </div>

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
                    onClick={() => window.location.href = '/steel/index.html'}
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
      </div>
    </div>
  );
};