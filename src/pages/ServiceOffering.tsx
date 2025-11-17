import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, Users, UserCheck, CheckCircle, ArrowRight, 
  Mail, MapPin, Presentation, FileText, DollarSign, Clock, Server, Database,
  Layers, Network, Sparkles, Download, Scale, Lock
} from 'lucide-react';

export const ServiceOffering: React.FC = () => {
  const navigate = useNavigate();
  

  // Simplified Professional Advisory Services
  const premiumAdvisoryServices = [
    {
      id: 'steel-assessment',
      icon: 'shield',
      title: 'STEEL™ Strategic Assessment',
      description: 'Expert risk assessment and strategic recommendations.',
      price: '$25K - $125K',
      timeline: '2-8 weeks',
      features: [
        'Professional STEEL™ assessment',
        'Strategic recommendations',
        'Executive briefing'
      ],
      link: '/pricing'
    },
    {
      id: 'vCISO',
      icon: 'user',
      title: 'Strategic vCISO Services',
      description: 'Fractional CISO leadership with three tiers available.',
      price: '$8K - $70K/month',
      timeline: 'Ongoing',
      features: [
        'Strategic, Operational, or Executive tiers',
        'Board presentations',
        '60-70% cost savings vs full-time CISO'
      ],
      link: '/vciso-kit'
    },
    {
      id: 'compliance-advisory',
      icon: 'file',
      title: 'Compliance Advisory',
      description: 'Expert compliance guidance for major frameworks.',
      price: '$3.5K - $30K',
      timeline: '3-5 weeks or ongoing',
      features: [
        'Gap analysis and readiness assessment',
        'Audit preparation support',
        'Framework guidance (NIST, ISO 27001, SOC 2, HIPAA, CMMC, PCI-DSS)'
      ],
      link: '/compliance'
    },
    {
      id: 'governance-advisory',
      icon: 'presentation',
      title: 'Governance & Risk Strategy',
      description: 'Security program design and risk management.',
      price: '$12K - $40K',
      timeline: '3-8 weeks',
      features: [
        'Security program foundation',
        'Risk management program',
        'Board governance framework'
      ],
      link: '/pricing'
    },
    {
      id: 'vendor-risk-advisory',
      icon: 'users',
      title: 'Vendor Risk Advisory',
      description: 'Third-party risk management program design.',
      price: '$5K - $35K',
      timeline: '3-5 weeks or per vendor',
      features: [
        'Vendor risk program design',
        'Critical vendor assessments',
        'Supply chain risk strategy'
      ],
      link: '/pricing'
    },
    {
      id: 'incident-response',
      icon: 'shield',
      title: 'Incident Response Advisory',
      description: 'Crisis leadership and response planning.',
      price: '$12K - $100K',
      timeline: '3-6 weeks or crisis response',
      features: [
        'IR plan development',
        'Tabletop exercises',
        'Crisis leadership support'
      ],
      link: '/pricing'
    },
    {
      id: 'privacy-compliance',
      icon: 'lock',
      title: 'GDPR/CCPA Privacy Compliance',
      description: 'Data protection and privacy compliance expertise.',
      price: '$15K - $75K',
      timeline: '4-10 weeks or ongoing',
      features: [
        'GDPR/CCPA compliance assessment',
        'Privacy impact assessments',
        'Data subject rights procedures'
      ],
      link: '/pricing'
    },
    {
      id: 'ma-legal-advisory',
      icon: 'scale',
      title: 'M&A Legal Advisory',
      description: 'Legal counsel for technology transactions.',
      price: '$25K - $150K',
      timeline: '2-12 weeks per transaction',
      features: [
        'Technology transaction due diligence',
        'Cybersecurity risk assessment',
        'Post-merger integration planning'
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
      case 'lock':
        return <Lock size={size} className="text-navy dark:text-silver" />;
      case 'scale':
        return <Scale size={size} className="text-navy dark:text-silver" />;
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
              Professional templates and expert advisory services for cybersecurity practitioners.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">

        {/* TOOLKITS - Moved to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-4">
              <Download size={16} className="mr-2" />
              SELF-SERVICE TOOLKITS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Professional Templates & Guides</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Instant access to professional templates, playbooks, and guides for cybersecurity practitioners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-200 mb-4 flex-grow text-sm">
                    {toolkit.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-navy dark:text-silver">Includes:</h4>
                    <ul className="space-y-1">
                      {toolkit.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle size={14} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
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
                      {toolkit.id === 'vciso-kit' ? 'View Toolkit' : 
                       toolkit.id === 'compliance-toolkit' ? 'View Toolkit' :
                       toolkit.id === 'incident-response-toolkit' ? 'View Toolkit' :
                       toolkit.id === 'vendor-risk-toolkit' ? 'View Toolkit' :
                       'View Toolkit'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Professional Advisory Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-semibold mb-4">
              <Sparkles size={16} className="mr-2" />
              EXPERT ADVISORY SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Professional Advisory Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Expert strategic guidance and leadership services for your cybersecurity needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <ul className="space-y-1.5">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle size={14} className="text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
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
                          'incident-response-advisory': 'incident-response',
                          'privacy-compliance': 'privacy-compliance',
                          'ma-legal-advisory': 'ma-legal-advisory'
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
                      {service.id === 'compliance-advisory' ? 'Explore Compliance' : 
                       service.id === 'vCISO' ? 'View vCISO Services' : 
                       service.id === 'privacy-compliance' ? 'Request Privacy Compliance Quote' :
                       service.id === 'ma-legal-advisory' ? 'Request M&A Legal Quote' :
                       'Request Quote'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/pricing')}
              icon={<DollarSign size={20} />}
              iconPosition="right"
            >
              View Pricing
            </Button>
          </div>
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