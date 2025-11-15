import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, Search, Users, UserCheck, CheckCircle, ArrowRight, 
  Mail, Phone, MapPin, Presentation, Activity, Lightbulb,
  BarChart2, FileText, DollarSign, Clock
} from 'lucide-react';

export const ServiceOffering: React.FC = () => {
  const navigate = useNavigate();
  
  // Enhanced Advisory Process based on STEEL methodology
  const advisoryProcessItems = [
    {
      id: 'strategicDiscovery',
      icon: <Search size={32} className="text-navy dark:text-silver" />,
      title: 'Strategic Discovery',
      description: 'Comprehensive assessment of your organization\'s security posture and risk landscape'
    },
    {
      id: 'modeling',
      icon: <Activity size={32} className="text-navy dark:text-silver" />,
      title: 'Risk Modeling',
      description: 'STEEL framework analysis across all six dimensions to quantify risk exposure'
    },
    {
      id: 'synthesis',
      icon: <Lightbulb size={32} className="text-navy dark:text-silver" />,
      title: 'Strategic Synthesis',
      description: 'Integration of findings into actionable recommendations and platform roadmap'
    },
    {
      id: 'briefing',
      icon: <Presentation size={32} className="text-navy dark:text-silver" />,
      title: 'Executive Briefing',
      description: 'Board-ready presentations with clear priorities and implementation pathways'
    }
  ];
  
  // Service offerings with pricing from documentation
  const services = [
    {
      id: 'steel',
      icon: 'shield',
      title: 'STEEL Strategic Assessments',
      description: 'Comprehensive risk assessment using our proprietary STEEL framework to identify gaps and create clear pathways to ERMITS platform adoption.',
      price: '$25K - $125K',
      timeline: '2-8 weeks',
      features: [
        'Rapid, Comprehensive, or Industry-Specific assessments',
        'Composite risk scoring across PESTEL factors',
        'NIST CSF maturity baseline',
        'ERMITS platform recommendations',
        'Executive briefing presentation'
      ],
      link: '/pricing'
    },
    {
      id: 'vCISO',
      icon: 'user',
      title: 'Strategic vCISO Services',
      description: 'Fractional CISO leadership leveraging ERMITS platform capabilities. Three tiers from strategic advisory to full executive leadership.',
      price: '$8K - $70K/month',
      timeline: 'Ongoing',
      features: [
        'Strategic, Operational, or Executive tiers',
        'Platform-enabled efficiency',
        'Board presentations and strategic planning',
        'Team leadership and program management',
        '60-70% cost savings vs full-time CISO'
      ],
      link: '/vciso-kit'
    },
    {
      id: 'compliance',
      icon: 'file',
      title: 'Compliance Advisory',
      description: 'Framework implementation feeding directly into CyberCorrect automation. Comprehensive compliance readiness, audit preparation, and continuous compliance programs.',
      price: '$3.5K - $30K',
      timeline: '3-5 weeks or ongoing',
      features: [
        'Compliance readiness assessment and gap analysis',
        'Audit preparation support and evidence validation',
        'Continuous compliance program with monthly health checks',
        'NIST, ISO 27001, SOC 2, HIPAA, CMMC, PCI-DSS support',
        'Seamless CyberCorrect platform integration',
        'Regulatory change monitoring and control effectiveness reviews'
      ],
      link: '/compliance'
    },
    {
      id: 'governance',
      icon: 'presentation',
      title: 'Governance & Risk Strategy',
      description: 'Strategic planning that implements through CyberSoluce platform. Build security program foundations, risk management frameworks, and board governance programs.',
      price: '$12K - $40K',
      timeline: '3-8 weeks',
      features: [
        'Security program foundation and organizational design',
        'Risk management program with appetite definition',
        'Board governance framework and reporting',
        'Policy framework architecture (25+ policies)',
        'CyberSoluce platform implementation and configuration',
        'Executive dashboard design and risk visualization'
      ],
      link: '/pricing'
    },
    {
      id: 'vendor-risk',
      icon: 'users',
      title: 'Vendor Risk Advisory',
      description: 'Strategic guidance implementing through VendorSoluce platform. Design vendor risk programs, assess critical vendors, and manage supply chain risks.',
      price: '$5K - $35K',
      timeline: '3-5 weeks or per vendor',
      features: [
        'Vendor risk program design and framework development',
        'Critical vendor security assessments and validation',
        'Supply chain risk strategy and portfolio optimization',
        'Vendor classification and tiering methodology',
        'VendorSoluce platform implementation and automation',
        'Continuous vendor monitoring and risk scoring'
      ],
      link: '/pricing'
    },
    {
      id: 'incident-response',
      icon: 'shield',
      title: 'Incident Response Advisory',
      description: 'Crisis leadership leveraging ERMITS platform for coordination. Develop incident response plans, playbooks, and provide crisis management leadership.',
      price: '$12K - $100K',
      timeline: '3-6 weeks or crisis response',
      features: [
        'Incident response plan development and playbook creation',
        'Tabletop exercise facilitation and scenario planning',
        'Crisis leadership and breach response support',
        'Stakeholder communication and regulatory notification',
        'Platform-enabled response workflows in CyberSoluce',
        'Post-incident analysis and recovery planning'
      ],
      link: '/pricing'
    }
  ];
  
  // What Makes STEEL Different items
  const whatMakesDifferentItems = [
    {
      id: 'predictiveIntelligence',
      icon: <Lightbulb size={24} className="text-navy dark:text-silver" />,
      title: 'Predictive Intelligence',
      description: 'STEEL scoring system provides unique quantified risk methodology with measurable before/after metrics',
      link: 'Learn more about STEEL'
    },
    {
      id: 'enhancedPestel',
      icon: <BarChart2 size={24} className="text-navy dark:text-silver" />,
      title: 'Enhanced PESTEL Framework',
      description: 'Quantified risk scoring across Political, Economic, Social, Technological, Environmental, and Legal factors',
      link: 'Explore methodology'
    },
    {
      id: 'expertPartnership',
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      title: 'Expert Partnership',
      description: 'Advisory insights become operational tools through ERMITS platform integration, not just recommendations',
      link: 'View ecosystem'
    },
    {
      id: 'frameworkIntegration',
      icon: <FileText size={24} className="text-navy dark:text-silver" />,
      title: 'Framework Integration',
      description: 'Unified ecosystem approach vs fragmented point solutions, with 80-90% implementation rate vs typical 30-40%',
      link: 'See integration'
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
      case 'file':
        return <FileText size={size} className="text-navy dark:text-silver" />;
      case 'users':
        return <Users size={size} className="text-navy dark:text-silver" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-silver-light dark:bg-dark-bg">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy text-white pt-16 pb-10 md:pt-20 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy-dark/90 to-navy/95"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-silver">
                <Shield size={16} className="mr-2" />
                Professional Advisory Services
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
                ERMITS Advisory Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-silver/90 max-w-3xl mx-auto leading-relaxed">
              Strategic Cybersecurity Intelligence That Implements. Transform risk assessment into risk reduction through STEEL-powered insights and ERMITS ecosystem integration.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">

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
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">60-70%</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Cost Savings vs Full-Time CISO
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">80-90%</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Implementation Rate (vs 30-40% typical)
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">50%</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Faster Time to Compliance
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">3x</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Higher Client Success Rate
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">The ERMITS Advisory Advantage</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              What makes our approach different from traditional cybersecurity consulting
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
              A proven methodology that transforms assessment into actionable implementation
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Core Service Offerings</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Strategic intelligence that implements through the ERMITS ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} variant="glass" padding="lg" className="h-full hover:shadow-xl transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 dark:text-white">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center font-semibold text-navy dark:text-white">
                          <DollarSign size={16} className="mr-1" />
                          {service.price}
                        </span>
                        <span className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {service.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-200 mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-navy dark:text-silver">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button 
                      variant="primary" 
                      size="sm"
                      icon={<ArrowRight size={16} />}
                      iconPosition="right"
                      onClick={() => navigate(service.link)}
                      className="w-full"
                    >
                      {service.id === 'compliance' ? 'Explore Compliance' : service.id === 'vCISO' ? 'View vCISO Toolkit' : 'View Pricing'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/pricing')}
              icon={<DollarSign size={20} />}
              iconPosition="right"
            >
              View Complete Pricing Guide
            </Button>
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
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  <Mail size={24} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    advisory@ermits.com
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
                    1-800-ERMITS-1
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                  <MapPin size={24} className="text-navy dark:text-silver" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 dark:text-white">Schedule Consultation</h3>
                  <p className="text-gray-600 dark:text-gray-200">
                    Book a call to discuss your needs
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Request Consultation
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};