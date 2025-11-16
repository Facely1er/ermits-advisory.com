import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, Search, Users, UserCheck, CheckCircle, ArrowRight, 
  Mail, Phone, MapPin, Presentation, Activity, Lightbulb,
  BarChart2, FileText, DollarSign, Clock, Server, Database,
  Layers, Network, Sparkles, Download, Zap
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
      description: 'STEEL™ framework analysis across all six dimensions to quantify risk exposure'
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
  
  // PRIMARY PRODUCT: Platform Services (Self-Service)
  const platformServices = [
    {
      id: 'cybercaution',
      icon: 'shield',
      name: 'CyberCaution',
      title: 'Threat Intelligence Platform',
      description: 'Self-service threat intelligence and risk monitoring platform with automated alerts and risk scoring.',
      setupAssistance: '2-4 hours included',
      premiumSetup: 'Additional hours available',
      features: [
        'Real-time threat intelligence feeds',
        'Automated risk scoring and alerts',
        'STEEL dimension monitoring',
        'Self-service dashboard and reporting',
        'Limited professional setup assistance (2-4 hours)',
        'Premium setup assistance available'
      ],
      link: '/cybercaution'
    },
    {
      id: 'cybercorrect',
      icon: 'file',
      name: 'CyberCorrect',
      title: 'Compliance Automation Platform',
      description: 'Self-service compliance management platform with automated evidence collection and framework support.',
      setupAssistance: '2-4 hours included',
      premiumSetup: 'Additional hours available',
      features: [
        'Multi-framework support (NIST, ISO 27001, SOC 2, HIPAA, CMMC, PCI-DSS)',
        'Automated evidence collection',
        'Compliance dashboards and reporting',
        'Self-service workflow configuration',
        'Limited professional setup assistance (2-4 hours)',
        'Premium setup assistance available'
      ],
      link: '/cybercorrect'
    },
    {
      id: 'cybersoluce',
      icon: 'presentation',
      name: 'CyberSoluce',
      title: 'Governance & Risk Management Platform',
      description: 'Self-service governance, risk, and policy management platform with board-ready reporting.',
      setupAssistance: '2-4 hours included',
      premiumSetup: 'Additional hours available',
      features: [
        'Risk management workflows',
        'Policy lifecycle management',
        'Board-ready executive dashboards',
        'Self-service program configuration',
        'Limited professional setup assistance (2-4 hours)',
        'Premium setup assistance available'
      ],
      link: '/cybersoluce'
    },
    {
      id: 'vendorsoluce',
      icon: 'users',
      name: 'VendorSoluce',
      title: 'Vendor Risk Management Platform',
      description: 'Self-service vendor risk assessment and monitoring platform with supply chain visibility.',
      setupAssistance: '2-4 hours included',
      premiumSetup: 'Additional hours available',
      features: [
        'Vendor risk assessments and scoring',
        'Supply chain risk monitoring',
        'Vendor portfolio management',
        'Self-service workflow automation',
        'Limited professional setup assistance (2-4 hours)',
        'Premium setup assistance available'
      ],
      link: '/vendorsoluce'
    },
    {
      id: 'technosoluce',
      icon: 'server',
      name: 'TechnoSoluce',
      title: 'Technology Risk Management Platform',
      description: 'Self-service technology risk and SBOM management platform with component vulnerability tracking.',
      setupAssistance: '2-4 hours included',
      premiumSetup: 'Additional hours available',
      features: [
        'SBOM risk and component vulnerability management',
        'Technology stack risk assessment',
        'Component vulnerability prioritization',
        'Self-service technology risk workflows',
        'Limited professional setup assistance (2-4 hours)',
        'Premium setup assistance available'
      ],
      link: '/technosoluce'
    },
    {
      id: 'steel-tool',
      icon: 'shield',
      name: 'STEEL™ Assessment Tool',
      title: 'Strategic Risk Assessment Tool',
      description: 'Self-service STEEL™ framework assessment tool with automated scoring and platform recommendations.',
      setupAssistance: 'Self-service',
      premiumSetup: 'Professional review available',
      features: [
        'Automated STEEL™ scoring across 6 dimensions',
        'Platform recommendations based on results',
        'Self-service assessment workflow',
        'Executive-ready reports',
        'Self-service (no setup required)',
        'Premium professional review available'
      ],
      link: '/steel'
    }
  ];

  // PRIMARY PRODUCT: Professional Advisory Services
  const premiumAdvisoryServices = [
    {
      id: 'steel-assessment',
      icon: 'shield',
      title: 'STEEL™ Strategic Assessment',
      description: 'Premium professional assessment with expert analysis and strategic recommendations. Optional platform integration available for enhanced delivery.',
      price: '$25K - $125K',
      timeline: '2-8 weeks',
      requiresPlatform: false,
      type: 'on-demand-project',
      features: [
        'Professional STEEL™ assessment by experts',
        'Deep-dive analysis and strategic recommendations',
        'Executive briefing and board presentation',
        'Optional platform integration guidance',
        'Ongoing strategic support',
        'Platform integration available as premium add-on'
      ],
      link: '/pricing'
    },
    {
      id: 'vCISO',
      icon: 'user',
      title: 'Strategic vCISO Services',
      description: 'Premium fractional CISO leadership. Three tiers from strategic advisory to full executive leadership. Optional platform integration enhances efficiency.',
      price: '$8K - $70K/month',
      timeline: 'Ongoing',
      requiresPlatform: false,
      type: 'on-demand-retainer',
      features: [
        'Strategic, Operational, or Executive tiers',
        'Optional platform-enabled efficiency and orchestration',
        'Board presentations and strategic planning',
        'Team leadership and program management',
        '60-70% cost savings vs full-time CISO',
        'Platform integration available as premium add-on'
      ],
      link: '/vciso-kit'
    },
    {
      id: 'compliance-advisory',
      icon: 'file',
      title: 'Compliance Advisory',
      description: 'Premium compliance services with expert guidance. Optional CyberCorrect platform integration available for enhanced delivery.',
      price: '$3.5K - $30K',
      timeline: '3-5 weeks or ongoing',
      requiresPlatform: false,
      type: 'on-demand-project',
      features: [
        'Compliance readiness assessment and gap analysis',
        'Audit preparation support and evidence validation',
        'Continuous compliance program with monthly health checks',
        'Expert framework guidance (NIST, ISO 27001, SOC 2, HIPAA, CMMC, PCI-DSS)',
        'Optional CyberCorrect platform integration',
        'Platform integration available as premium add-on'
      ],
      link: '/compliance'
    },
    {
      id: 'governance-advisory',
      icon: 'presentation',
      title: 'Governance & Risk Strategy',
      description: 'Premium governance services with expert program design. Optional CyberSoluce platform integration available for enhanced delivery.',
      price: '$12K - $40K',
      timeline: '3-8 weeks',
      requiresPlatform: false,
      type: 'on-demand-project',
      features: [
        'Security program foundation and organizational design',
        'Risk management program with appetite definition',
        'Board governance framework and reporting',
        'Policy framework architecture (25+ policies)',
        'Optional CyberSoluce platform integration',
        'Platform integration available as premium add-on'
      ],
      link: '/pricing'
    },
    {
      id: 'vendor-risk-advisory',
      icon: 'users',
      title: 'Vendor Risk Advisory',
      description: 'Premium vendor risk services with expert program design. Optional VendorSoluce platform integration available for enhanced delivery.',
      price: '$5K - $35K',
      timeline: '3-5 weeks or per vendor',
      requiresPlatform: false,
      type: 'on-demand-project',
      features: [
        'Vendor risk program design and framework development',
        'Critical vendor security assessments and validation',
        'Supply chain risk strategy and portfolio optimization',
        'Vendor classification and tiering methodology',
        'Optional VendorSoluce platform integration',
        'Platform integration available as premium add-on'
      ],
      link: '/pricing'
    },
    {
      id: 'incident-response',
      icon: 'shield',
      title: 'Incident Response Advisory',
      description: 'Premium crisis leadership and response planning. Optional platform integration available for enhanced response workflows.',
      price: '$12K - $100K',
      timeline: '3-6 weeks or crisis response',
      requiresPlatform: false,
      type: 'on-demand-crisis',
      features: [
        'Incident response plan development and playbook creation',
        'Tabletop exercise facilitation and scenario planning',
        'Crisis leadership and breach response support',
        'Stakeholder communication and regulatory notification',
        'Optional platform-enabled response workflows',
        'Platform integration available as premium add-on'
      ],
      link: '/pricing'
    }
  ];

  // SUPPORTING PRODUCTS: Toolkits
  const toolkitServices = [
    {
      id: 'vciso-kit',
      icon: 'file',
      title: 'vCISO Starter Kit',
      description: 'Self-service toolkit with 37+ templates, playbooks, and delivery guides for practitioners.',
      price: '$299',
      timeline: 'One-time purchase',
      features: [
        '37+ professional templates and playbooks',
        'Service delivery guides and workflows',
        'ERMITS platform integration guides',
        'Board presentation templates',
        'Policy templates and frameworks',
        'Instant digital download'
      ],
      link: '/vciso-kit'
    },
    {
      id: 'compliance-toolkit',
      icon: 'file',
      title: 'Compliance Framework Toolkit',
      description: 'Complete compliance templates for NIST, ISO 27001, SOC 2, HIPAA, GDPR, CMMC, and PCI-DSS frameworks.',
      price: '$199',
      timeline: 'One-time purchase',
      features: [
        'Multi-framework gap analysis templates',
        'Control mapping matrices for all major frameworks',
        'Evidence collection checklists and guides',
        'Audit preparation templates and workflows',
        'Compliance program templates',
        'CyberCorrect platform integration guides',
        'Instant digital download'
      ],
      link: '/compliance-toolkit'
    },
    {
      id: 'incident-response-toolkit',
      icon: 'shield',
      title: 'Incident Response Toolkit',
      description: 'Comprehensive incident response playbooks, templates, and checklists for security operations teams.',
      price: '$149',
      timeline: 'One-time purchase',
      features: [
        'Scenario-specific IR playbooks (ransomware, breach, DDoS)',
        'Communication templates (internal, customer, regulatory)',
        'Incident tracking and reporting templates',
        'Tabletop exercise scenarios and guides',
        'Post-incident analysis templates',
        'Crisis management checklists',
        'Instant digital download'
      ],
      link: '/incident-response-toolkit'
    },
    {
      id: 'vendor-risk-toolkit',
      icon: 'users',
      title: 'Vendor Risk Management Toolkit',
      description: 'Complete vendor risk assessment templates, questionnaires, and frameworks for third-party risk management.',
      price: '$179',
      timeline: 'One-time purchase',
      features: [
        'Vendor security assessment questionnaires',
        'Vendor risk scoring frameworks and matrices',
        'Third-party risk assessment templates',
        'Vendor contract security clauses library',
        'Supply chain risk assessment templates',
        'Vendor monitoring and review templates',
        'VendorSoluce platform integration guides',
        'Instant digital download'
      ],
      link: '/vendor-risk-toolkit'
    }
  ];
  
  // What Makes STEEL Different items
  const whatMakesDifferentItems = [
    {
      id: 'predictiveIntelligence',
      icon: <Lightbulb size={24} className="text-navy dark:text-silver" />,
      title: 'Predictive Intelligence',
      description: 'STEEL™ scoring system provides unique quantified risk methodology with measurable before/after metrics',
      link: 'Learn more about STEEL™'
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
      description: 'Advisory insights can be enhanced through optional ERMITS platform integration, transforming recommendations into operational tools',
      link: 'View ecosystem'
    },
    {
      id: 'frameworkIntegration',
      icon: <FileText size={24} className="text-navy dark:text-silver" />,
      title: 'Framework Integration',
      description: 'Optional platform integration enables unified ecosystem approach vs fragmented point solutions, supporting higher implementation success rates',
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
      case 'server':
        return <Server size={size} className="text-navy dark:text-silver" />;
      case 'database':
        return <Database size={size} className="text-navy dark:text-silver" />;
      case 'layers':
        return <Layers size={size} className="text-navy dark:text-silver" />;
      case 'network':
        return <Network size={size} className="text-navy dark:text-silver" />;
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
              Expert strategic guidance powered by STEEL™ methodology. Professional advisory services that transform assessment into actionable implementation, with optional platform integration for enhanced delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">

        {/* Key benefits */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">Cost-Effective</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Flexible pricing compared to full-time CISO
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">Focused Approach</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Structured methodology for implementation
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">Streamlined Process</h3>
              <p className="text-gray-600 dark:text-gray-200">
                Efficient path to compliance readiness
              </p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <h3 className="text-4xl font-bold text-navy dark:text-white mb-2">Proven Framework</h3>
              <p className="text-gray-600 dark:text-gray-200">
                STEEL™ methodology for strategic risk assessment
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
              Strategic expertise powered by STEEL™ methodology, with optional platform integration for enhanced delivery
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

        {/* PRIMARY PRODUCT: Professional Advisory Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-semibold mb-4">
              <Sparkles size={16} className="mr-2" />
              PRIMARY PRODUCT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Professional Advisory Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Expert strategic guidance and leadership services. Our advisory services are offered independently and can be enhanced with optional platform integration for improved delivery efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumAdvisoryServices.map((service) => (
              <Card key={service.id} variant="glass" padding="lg" className="h-full hover:shadow-xl transition-shadow border-2 border-purple-200 dark:border-purple-800">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">PROFESSIONAL</span>
                      </div>
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
                  
                  <p className="text-gray-600 dark:text-gray-200 mb-4 flex-grow text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-navy dark:text-silver">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle size={16} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button 
                      variant="outline" 
                      size="sm"
                      icon={<ArrowRight size={16} />}
                      iconPosition="right"
                      onClick={() => {
                        // Map service IDs to quote form values
                        const serviceMap: Record<string, string> = {
                          'steel-assessment': 'comprehensive-steel',
                          'vCISO': 'strategic-vciso',
                          'compliance-advisory': 'compliance-readiness',
                          'governance-advisory': 'security-program',
                          'vendor-risk-advisory': 'vendor-risk',
                          'incident-response': 'incident-response',
                          'incident-response-advisory': 'incident-response'
                        };
                        
                        const serviceValue = serviceMap[service.id] || service.id;
                        
                        if (service.id === 'compliance-advisory') {
                          navigate('/compliance-advisory');
                        } else if (service.id === 'vCISO') {
                          navigate('/vciso-kit');
                        } else {
                          // Navigate to quote form with service pre-selected
                          navigate(`/contact?type=quote&service=${serviceValue}`);
                        }
                      }}
                      className="w-full"
                    >
                      {service.id === 'compliance-advisory' ? 'Explore Compliance' : service.id === 'vCISO' ? 'View vCISO Services' : 'Request Quote'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Professional advisory services are offered independently. Platform integration is available as an optional premium add-on to enhance service delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/pricing')}
                icon={<DollarSign size={20} />}
                iconPosition="right"
              >
                View Complete Pricing Guide
              </Button>
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => navigate('/ecosystem')}
                icon={<Layers size={20} />}
                iconPosition="right"
              >
                Explore Platform Ecosystem
              </Button>
            </div>
          </div>
        </motion.div>

        {/* SUPPORTING PRODUCTS: Toolkits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-4">
              <Download size={16} className="mr-2" />
              SUPPORTING PRODUCTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Self-Service Toolkits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Professional templates and guides for practitioners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {toolkitServices.map((toolkit) => (
              <Card key={toolkit.id} variant="glass" padding="lg" className="h-full hover:shadow-xl transition-shadow border-2 border-blue-200 dark:border-blue-800">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
                      {getServiceIcon(toolkit.icon)}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">TOOLKIT</div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white">
                        {toolkit.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span className="flex items-center font-semibold text-navy dark:text-white">
                          <DollarSign size={16} className="mr-1" />
                          {toolkit.price}
                        </span>
                        <span className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {toolkit.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-200 mb-4 flex-grow text-sm">
                    {toolkit.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-navy dark:text-silver">Includes:</h4>
                    <ul className="space-y-2">
                      {toolkit.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button 
                      variant="primary" 
                      size="sm"
                      icon={<Download size={16} />}
                      iconPosition="right"
                      onClick={() => navigate(toolkit.link)}
                      className="w-full"
                    >
                      {toolkit.id === 'vciso-kit' ? 'View vCISO Toolkit' : 
                       toolkit.id === 'compliance-toolkit' ? 'View Compliance Toolkit' :
                       toolkit.id === 'incident-response-toolkit' ? 'View IR Toolkit' :
                       toolkit.id === 'vendor-risk-toolkit' ? 'View Vendor Risk Toolkit' :
                       'View Toolkit'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
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