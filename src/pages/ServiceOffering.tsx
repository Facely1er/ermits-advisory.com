import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, Search, Users, UserCheck, CheckCircle, ArrowRight, 
  Mail, Phone, MapPin, Presentation, Activity, Lightbulb,
  BarChart2, FileText
} from 'lucide-react';

export const ServiceOffering: React.FC = () => {
  const navigate = useNavigate();
  
  // Enhanced Advisory Process based on STEEL methodology
  const advisoryProcessItems = [
    {
      id: 'strategicDiscovery',
      icon: <Search size={32} className="text-navy dark:text-silver" />,
      title: 'Strategic Discovery',
      description: 'Deep dive into your threat landscape and risk exposure across all dimensions'
    },
    {
      id: 'modeling',
      icon: <Activity size={32} className="text-navy dark:text-silver" />,
      title: 'Risk Modeling',
      description: 'Data-driven analysis and quantification of threats, vulnerabilities, and impacts'
    },
    {
      id: 'synthesis',
      icon: <Lightbulb size={32} className="text-navy dark:text-silver" />,
      title: 'Strategic Synthesis',
      description: 'Actionable recommendations tailored to your organizational context and priorities'
    },
    {
      id: 'briefing',
      icon: <Presentation size={32} className="text-navy dark:text-silver" />,
      title: 'Executive Briefing',
      description: 'Clear communication of findings and strategic roadmap to leadership'
    }
  ];
  
  // Define service information with IDs matching the exact keys in translations.ts
  const services = [
    { id: 'steel', icon: 'shield' },
    { id: 'vCISO', icon: 'user' },
    { id: 'dashboard', icon: 'presentation' }
  ];
  
  // What Makes STEEL Different items
  const whatMakesDifferentItems = [
    {
      id: 'predictiveIntelligence',
      icon: <Lightbulb size={24} className="text-navy dark:text-silver" />,
      title: 'Predictive Intelligence',
      description: 'Anticipate emerging threats before they materialize with forward-looking risk analysis',
      link: 'Explore predictive capabilities'
    },
    {
      id: 'enhancedPestel',
      icon: <BarChart2 size={24} className="text-navy dark:text-silver" />,
      title: 'Enhanced PESTEL Framework',
      description: 'Strategic environmental analysis specifically adapted for cybersecurity risk assessment',
      link: 'Learn about PESTEL enhancement'
    },
    {
      id: 'expertPartnership',
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      title: 'Expert Partnership',
      description: 'Dedicated team of cybersecurity and strategic risk professionals guiding your journey',
      link: 'Meet our experts'
    },
    {
      id: 'frameworkIntegration',
      icon: <FileText size={24} className="text-navy dark:text-silver" />,
      title: 'Framework Integration',
      description: 'Seamlessly integrates with NIST, ISO 27001, and other established security frameworks',
      link: 'View integrations'
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

  const getServiceIcon = (icon: string, size = 24) => {
    switch (icon) {
      case 'presentation':
        return <Presentation size={size} className="text-navy dark:text-silver" />;
      case 'shield':
        return <Shield size={size} className="text-navy dark:text-silver" />;
      case 'user':
        return <UserCheck size={size} className="text-navy dark:text-silver" />;
      default:
        return null;
    }
  };

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-8 dark:text-white">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            Comprehensive cybersecurity risk intelligence and strategic advisory services
          </p>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">Significant</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Risk Reduction
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">Faster</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Time to Insight
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">Improved</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Board Confidence
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">Positive</h3>
              <p className="text-gray-600 dark:text-gray-200">
                ROI Improvement
              </p>
            </Card>
          </motion.div>
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
              A unique approach to cybersecurity risk intelligence that goes beyond traditional assessments
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
                <Card variant="glass" padding="lg" className="h-full">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4">{item.description}</p>
                      <button className="text-navy dark:text-silver font-medium hover:underline text-sm flex items-center">
                        {item.link}
                        <ArrowRight size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Advisory Process Section - Main Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Advisory Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              A structured approach to deliver actionable cybersecurity intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryProcessItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
              >
                <Card variant="glass" padding="lg" className="h-full text-center">
                  <div className="p-4 rounded-full bg-silver/20 dark:bg-navy/40 inline-flex mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Comprehensive cybersecurity risk intelligence and strategic advisory services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="glass" padding="lg" className="h-full">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  {getServiceIcon('shield')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 dark:text-white card-title">
                    STEEL™ Framework Assessment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                    Comprehensive strategic risk assessment across all six STEEL dimensions
                  </p>

                  <h4 className="text-lg font-semibold mb-2 dark:text-gray-100">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-navy dark:text-silver mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-200">Multi-dimensional risk analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-navy dark:text-silver mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-200">Real-time threat intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-navy dark:text-silver mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-200">Executive-ready reporting</span>
                    </li>
                  </ul>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/contact')}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>

            <Card variant="glass" padding="lg" className="h-full">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  {getServiceIcon('user')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 dark:text-white card-title">
                    Virtual CISO Services
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200 mb-4 card-text">
                    Strategic cybersecurity leadership without the full-time commitment
                  </p>

                  <h4 className="text-lg font-semibold mb-2 dark:text-gray-100">Key Features</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-navy dark:text-silver mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-200">Strategic security planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-navy dark:text-silver mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-200">Board-level advisory</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-navy dark:text-silver mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-200">Compliance oversight</span>
                    </li>
                  </ul>

                  <Button
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/contact')}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* STEEL Framework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">{'The STEEL™ Framework'}</h2>
                <p className="text-gray-600 dark:text-gray-100 mb-6">
                  {'Our proprietary STEEL™ methodology transforms traditional risk assessment by integrating cybersecurity intelligence into strategic environmental analysis.'}
                </p>
                <p className="text-gray-600 dark:text-gray-100 mb-6">
                  "This approach provides comprehensive visibility into how external factors impact your organization's cybersecurity posture."
                </p>
                <Button 
                  variant="primary" 
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={() => navigate('/steel')}
                >
                  {'Explore STEEL™'}
                </Button>
              </div>
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="grid grid-cols-3 gap-4 max-w-md">
                  <div className="aspect-square hexagon bg-[#4c72b0] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Political</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-[#dd8452] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <BarChart2 size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Economic</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-[#55a868] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Users size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Social</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-[#c44e52] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Technology</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-navy text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <span className="text-sm font-bold">STEEL™</span>
                    </div>
                  </div>
                  <div className="aspect-square hexagon bg-[#8172b3] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Environmental</span>
                    </div>
                  </div>
                  <div className="col-start-2 aspect-square hexagon bg-[#937860] text-white flex items-center justify-center p-4 text-center">
                    <div>
                      <Shield size={24} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">Legal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Get in Touch</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  <Mail size={24} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    contact@ermits.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  <Phone size={24} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  <MapPin size={24} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">Headquarters</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Request a Consultation
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};