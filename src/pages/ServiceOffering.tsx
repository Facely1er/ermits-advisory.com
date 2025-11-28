import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, ArrowRight, 
  Mail, MapPin, FileText,
  Layers, Network, Info, ExternalLink
} from 'lucide-react';

export const ServiceOffering: React.FC = () => {
  const navigate = useNavigate();
  

  // Core Advisory Services - 4 main offerings
  const coreServices = [
    {
      id: 'steel-executive-diagnostic',
      icon: 'shield',
      title: 'STEEL Executive Diagnostic',
      description: 'Board and regulator-facing diagnostic using STEEL to expose structural cyber, privacy, and supply chain risk.',
      audience: 'Board, C-suite, Risk/Compliance, Investors',
      problem: 'Traditional audits miss structural asymmetries. STEEL reveals what control checklists cannot.',
      artifacts: 'STEEL report with classification, six-dimension radar, structural asymmetries, and enterprise priorities.',
      cta: 'Request STEEL Briefing',
      link: '/contact'
    },
    {
      id: 'governance-architecture',
      icon: 'layers',
      title: 'Cyber & Privacy Governance Architecture',
      description: 'Uses STEEL outputs to define committees, reporting structures, KPIs, and governance artifacts.',
      audience: 'Board, C-suite, Risk/Compliance',
      problem: 'Governance frameworks often lack connection to actual risk. We align governance with structural risk findings.',
      artifacts: 'Governance blueprint, committee charters, reporting templates, KPI framework.',
      cta: 'Request Consultation',
      link: '/contact'
    },
    {
      id: 'supply-chain-governance',
      icon: 'network',
      title: 'Supply Chain & Vendor Risk Governance',
      description: 'Uses STEEL and VendorSoluce/TechnoSoluce data to restructure third-party oversight.',
      audience: 'Risk/Compliance, Procurement, C-suite',
      problem: 'Vendor risk programs are reactive and fragmented. We restructure oversight based on actual exposure patterns.',
      artifacts: 'Vendor risk governance framework, SBOM risk roadmap, third-party oversight playbook.',
      cta: 'Request Consultation',
      link: '/contact'
    },
    {
      id: 'regulatory-readiness',
      icon: 'file',
      title: 'Regulatory & Board Defense Readiness',
      description: 'Legal defensibility, oversight evidence, and readiness for regulators and litigators.',
      audience: 'Board, Legal, C-suite, Risk/Compliance',
      problem: 'When regulators or litigators ask "what did you know and when," you need evidence of oversight and due diligence.',
      artifacts: 'Oversight evidence package, regulatory readiness assessment, board defense materials.',
      cta: 'Request Consultation',
      link: '/contact'
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
      default:
        return null;
    }
  };

  const handleServiceClick = (service: typeof coreServices[0]) => {
    navigate(service.link);
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
                Professional Advisory Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-silver/90 max-w-3xl mx-auto leading-relaxed">
              Expert strategic guidance and leadership services for your cybersecurity needs.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">

        {/* Free Assessment CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-4">
                <Shield size={16} className="mr-2" />
                START HERE
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white">
                Try STEEL™ Assessment Free
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
                Complete our 46-question executive assessment in 25-30 minutes and receive your personalized STEEL™ risk scores across all six PESTEL dimensions. No credit card required.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/steel/index.html', '_blank')}
                  icon={<ExternalLink size={20} />}
                  iconPosition="right"
                >
                  Take Free Assessment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/steel-executive-diagnostic')}
                  icon={<Info size={20} />}
                  iconPosition="right"
                >
                  Learn About STEEL™
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Core Services - Simplified to 3 offerings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Expert strategic guidance and leadership services for your cybersecurity needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {coreServices.map((service) => (
              <Card 
                key={service.id} 
                variant="glass" 
                padding="lg" 
                className="h-full hover:shadow-xl transition-shadow border-2 border-purple-200 dark:border-purple-800"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm">
                    {service.description}
                  </p>

                  <div className="mb-4 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">Who it's for:</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{service.audience}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">Problem addressed:</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">What you receive:</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{service.artifacts}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button 
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight size={16} />}
                      iconPosition="right"
                      onClick={() => handleServiceClick(service)}
                      className="w-full border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
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
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Not sure which service is right for you? Start with our free assessment or schedule a consultation.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/steel/index.html', '_blank')}
                  icon={<Shield size={20} />}
                  iconPosition="left"
                >
                  Take Free Assessment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};