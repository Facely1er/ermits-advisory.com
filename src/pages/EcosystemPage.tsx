import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import {
  Shield, BarChart2, Eye, Presentation, Users, ArrowRight,
  Zap, Target, Layers, CheckCircle
} from 'lucide-react';

// Import ecosystem logo - user should add this file
// import ecosystemLogo from '../assets/ermits-ecosystem.png';

export const EcosystemPage: React.FC = () => {
  const navigate = useNavigate();

  const ecosystemComponents = [
    {
      id: 'steel',
      icon: <Shield size={32} className="text-navy dark:text-silver" />,
      title: 'STEEL Assessment',
      description: 'Strategic risk assessment framework for comprehensive threat analysis',
      link: '/steel',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'riskRadar',
      icon: <Eye size={32} className="text-navy dark:text-silver" />,
      title: 'Risk Radar',
      description: 'Real-time threat monitoring and intelligence dashboard',
      link: '/risk-radar',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'dashboard',
      icon: <BarChart2 size={32} className="text-navy dark:text-silver" />,
      title: 'Executive Dashboard',
      description: 'Comprehensive analytics and reporting platform',
      link: '/dashboard',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'presentations',
      icon: <Presentation size={32} className="text-navy dark:text-silver" />,
      title: 'Board Presentations',
      description: 'Executive-ready security briefings and reports',
      link: '/presentation',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'advisory',
      icon: <Users size={32} className="text-navy dark:text-silver" />,
      title: 'Advisory Services',
      description: 'Expert guidance and strategic security consulting',
      link: '/services',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const ecosystemBenefits = [
    {
      icon: <Layers size={24} className="text-navy dark:text-silver" />,
      title: 'Integrated Platform',
      description: 'All tools work seamlessly together for maximum efficiency'
    },
    {
      icon: <Target size={24} className="text-navy dark:text-silver" />,
      title: 'Comprehensive Coverage',
      description: 'Address all aspects of enterprise risk management'
    },
    {
      icon: <Zap size={24} className="text-navy dark:text-silver" />,
      title: 'Efficient Workflow',
      description: 'Streamlined processes that save time and resources'
    },
    {
      icon: <CheckCircle size={24} className="text-navy dark:text-silver" />,
      title: 'Proven Results',
      description: 'Trusted by leading organizations worldwide'
    }
  ];

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Card variant="solid" padding="lg" className="bg-navy text-white">
            <div className="text-center max-w-4xl mx-auto">
              {/* Ecosystem Logo Placeholder */}
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                  {/* Replace with actual logo image when available */}
                  {/* <img src={ecosystemLogo} alt="ERMITS Ecosystem" className="w-24 h-24 object-contain" /> */}
                  <Layers size={64} className="text-white opacity-80" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                ERMITS Ecosystem
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-silver">
                Comprehensive Risk Management Solutions
              </p>
              <p className="text-lg mb-8 text-silver">
                An integrated suite of tools and services designed to protect your organization from strategic threats
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                  onClick={() => navigate('/contact')}
                  className="transform hover:scale-105 transition-transform"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Ecosystem Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Ecosystem Components
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Powerful tools working together to strengthen your security posture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <InteractiveCard 
                  hover3D={true}
                  glowEffect={true}
                  className="h-full bg-white dark:bg-dark-surface p-6 cursor-pointer"
                  onClick={() => navigate(component.link)}
                >
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4 flex-shrink-0">
                      {component.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 dark:text-white">
                        {component.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4">
                        {component.description}
                      </p>
                      <button className="text-navy dark:text-silver font-medium hover:underline text-sm flex items-center transition-colors">
                        Learn More
                        <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ecosystem Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Why Choose Our Ecosystem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Experience the power of an integrated risk management platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                <InteractiveCard 
                  hover3D={true}
                  className="h-full text-center bg-white dark:bg-dark-surface p-6"
                >
                  <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 inline-flex mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200 text-sm">
                    {benefit.description}
                  </p>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How Components Work Together */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <InteractiveCard 
            glowEffect={true}
            className="bg-white dark:bg-dark-surface p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                How Components Work Together
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
                Our integrated approach ensures maximum effectiveness and efficiency
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold dark:text-white mb-4">
                    Implementation Workflow
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        1
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Conduct comprehensive STEEL assessment
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        2
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Monitor threats with Risk Radar
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        3
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Track metrics on Executive Dashboard
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        4
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Present findings to leadership
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        5
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Receive ongoing advisory support
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold dark:text-white mb-4">
                    Value Delivered
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-200">
                        Unified view of organizational risk
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-200">
                        Data-driven decision making
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-200">
                        Improved stakeholder communication
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-200">
                        Continuous risk monitoring and adaptation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <InteractiveCard 
            glowEffect={true}
            className="bg-navy text-white p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Risk Management?
              </h3>
              <p className="text-lg mb-6 text-silver max-w-2xl mx-auto">
                Let us show you how the ERMITS ecosystem can strengthen your security posture
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={() => navigate('/contact')}
                  className="transform hover:scale-105 transition-transform"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-transform"
                  onClick={() => navigate('/steel')}
                >
                  Explore STEEL Framework
                </Button>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>
      </div>
    </div>
  );
};

