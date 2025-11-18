import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { InteractiveCard } from '../components/shared/InteractiveCard';
import {
  Shield, ArrowRight,
  Zap, Target, Layers, CheckCircle, AlertCircle,
  FileCheck, Search, Rocket, ArrowDown,
  Network, Server, Users
} from 'lucide-react';

// Import ecosystem logos
import cyberCautionLogo from '../assets/cybercaution.png';
import cyberCorrectLogo from '../assets/cybercorrect.png';
import vendorSoluceLogo from '../assets/vendorsoluce.png';
import technoSoluceLogo from '../assets/technosoluce.png';
import socialCautionLogo from '../assets/socialcaution.png';
import cyberCertitudeLogo from '../assets/CyberCertitude.png';
import ermitsAdvisoryLogo from '../assets/ermits-advisory.png';

export const EcosystemPage: React.FC = () => {
  const navigate = useNavigate();

  const ecosystemComponents = [
    {
      id: 'cyberCaution',
      icon: <AlertCircle size={32} className="text-navy dark:text-silver" />,
      title: 'CyberCaution™',
      description: 'Real-time threat monitoring and intelligence platform for continuous security awareness',
      link: 'https://cybercaution.com',
      color: 'from-red-500 to-red-600',
      logo: cyberCautionLogo,
      integration: {
        advisoryIdentifies: 'High threat exposure',
        advisoryConfigures: 'Real-time monitoring',
        platformDelivers: 'Continuous threat intelligence',
        result: '24/7 threat awareness and alerts'
      }
    },
    {
      id: 'cyberCorrect',
      icon: <FileCheck size={32} className="text-navy dark:text-silver" />,
      title: 'CyberCorrect™',
      description: 'Automated compliance management and evidence collection for continuous compliance monitoring',
      link: 'https://cybercorrect.com',
      color: 'from-green-500 to-green-600',
      logo: cyberCorrectLogo,
      integration: {
        advisoryIdentifies: 'Compliance gaps',
        advisoryConfigures: 'Remediation plan',
        platformDelivers: 'Evidence collection',
        result: 'Continuous compliance monitoring'
      }
    },
    {
      id: 'vendorSoluce',
      icon: <Network size={32} className="text-navy dark:text-silver" />,
      title: 'VendorSoluce™',
      description: 'Comprehensive vendor risk management and supply chain security platform',
      link: 'https://vendorsoluce.com',
      color: 'from-orange-500 to-orange-600',
      logo: vendorSoluceLogo,
      integration: {
        advisoryIdentifies: 'Vendor risk approach',
        advisoryConfigures: 'Assessment process',
        platformDelivers: 'Vendor portfolio',
        result: 'Continuous vendor monitoring'
      }
    },
    {
      id: 'technoSoluce',
      icon: <Server size={32} className="text-navy dark:text-silver" />,
      title: 'TechnoSoluce™',
      description: 'Technology operations and IT risk management platform for infrastructure and systems security',
      link: 'https://technosoluce.com',
      color: 'from-blue-500 to-blue-600',
      logo: technoSoluceLogo,
      integration: {
        advisoryIdentifies: 'Technology infrastructure risks',
        advisoryConfigures: 'IT operations framework',
        platformDelivers: 'Infrastructure and systems security',
        result: 'Continuous technology risk monitoring'
      }
    },
    {
      id: 'cyberCertitude',
      icon: <Shield size={32} className="text-navy dark:text-silver" />,
      title: 'CyberCertitude™',
      description: 'Certification and assurance platform for security validation and confidence verification',
      link: 'https://cybercertitude.com',
      color: 'from-yellow-500 to-orange-600',
      logo: cyberCertitudeLogo,
      integration: {
        advisoryIdentifies: 'Security posture and controls',
        advisoryConfigures: 'Certification readiness',
        platformDelivers: 'Assurance and validation services',
        result: 'Certified security confidence'
      }
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
              {/* Ecosystem Logo */}
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                  <img src={ermitsAdvisoryLogo} alt="ERMITS Ecosystem" className="w-24 h-24 object-contain" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                The ERMITS Platform Ecosystem
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-silver">
                Integrated Security Platforms That Transform Strategy Into Operations
              </p>
              <p className="text-lg mb-4 text-silver">
                Five powerful platforms working together: CyberCaution™ for threats, CyberCorrect™ for compliance, VendorSoluce™ for supply chain security, TechnoSoluce™ for technology operations, and CyberCertitude™ for certification and assurance.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
                <p className="text-sm text-silver/90 leading-relaxed">
                  <strong className="text-white">Note:</strong> These platforms are offered independently and can be used standalone. They also serve as supporting tools for ERMITS Advisory Professional Services, with optional STEEL™ integration available as a premium add-on to enhance advisory delivery and implementation success.
                </p>
              </div>
              
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

        {/* Platform Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Platform Ecosystem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-4">
              Five integrated platforms that automate security operations and transform strategic recommendations into operational reality. These platforms are offered independently and can be used standalone, or serve as supporting tools for ERMITS Advisory Professional Services.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-3xl mx-auto">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-navy dark:text-white">Platform Integration with Advisory:</strong> When used with ERMITS Advisory services, these platforms enhance delivery efficiency and implementation success. Optional STEEL™ integration is available as a premium add-on to connect strategic assessments with platform operations.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="group"
              >
                <InteractiveCard 
                  hover3D={true}
                  glowEffect={true}
                  className="h-full bg-white dark:bg-dark-surface p-6 cursor-pointer overflow-hidden"
                  onClick={() => window.open(component.link, '_blank', 'noopener,noreferrer')}
                >
                  <div className="flex items-start mb-4">
                    {component.logo ? (
                      <div className="mr-4 flex-shrink-0">
                        <img 
                          src={component.logo} 
                          alt={`${component.title} Logo`} 
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4 flex-shrink-0">
                        {component.icon}
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 dark:text-white">
                        {component.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-200 mb-4">
                        {component.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Integration Details - Shown on hover */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-semibold text-navy dark:text-silver mb-2 uppercase tracking-wide">Integration with Advisory</p>
                    <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                      <p><strong className="text-navy dark:text-white">Advisory identifies:</strong> {component.integration.advisoryIdentifies}</p>
                      <p><strong className="text-navy dark:text-white">Advisory configures:</strong> {component.integration.advisoryConfigures}</p>
                      <p><strong className="text-navy dark:text-white">{component.title} delivers:</strong> {component.integration.platformDelivers}</p>
                      <p><strong className="text-navy dark:text-white">Result:</strong> {component.integration.result}</p>
                    </div>
                  </div>
                  
                  <button 
                    type="button"
                    className="text-navy dark:text-silver font-medium hover:underline text-sm flex items-center transition-colors mt-4"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(component.link, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Learn More
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Human Layer - SocialCaution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 dark:bg-silver/20 mb-4">
              <Users size={20} className="text-navy dark:text-silver mr-2" />
              <span className="text-sm font-semibold text-navy dark:text-white">Human Layer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              SocialCaution™
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
              Human-centric security awareness and social engineering protection platform
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Distinct from the platform ecosystem, SocialCaution™ addresses the human layer of security through awareness, training, and behavioral analytics.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <InteractiveCard 
              hover3D={true}
              glowEffect={true}
              className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-2 border-teal-200 dark:border-teal-800 p-8 cursor-pointer"
              onClick={() => window.open('https://socialcaution.com', '_blank', 'noopener,noreferrer')}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={socialCautionLogo} 
                    alt="SocialCaution Logo" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">
                    SocialCaution™
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-4 text-lg">
                    Comprehensive human layer security platform that protects organizations from social engineering attacks, phishing, and human error through continuous awareness, training, and behavioral monitoring.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-navy dark:text-white mb-2">Key Capabilities:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Phishing simulation and training</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Social engineering awareness programs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Behavioral analytics and risk scoring</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy dark:text-white mb-2">Benefits:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Reduce human error incidents</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Build security-aware culture</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Continuous human risk monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className="text-teal-600 dark:text-teal-400 font-medium hover:underline text-base flex items-center transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open('https://socialcaution.com', '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Learn More About SocialCaution™
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </InteractiveCard>
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

        {/* Advisory-to-Platform Pathway */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              How ERMITS Advisory Connects to Platform Implementation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Strategic intelligence from ERMITS Advisory can be enhanced through optional platform integration, transforming recommendations into automated operations
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 max-w-3xl mx-auto">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-navy dark:text-white">Note:</strong> ERMITS Advisory services are offered independently. Platform integration is an optional premium add-on that enhances service delivery and implementation success. STEEL™ integration connects strategic assessments with platform operations.
              </p>
            </div>
          </div>

          <Card className="p-8 mb-8 bg-gradient-to-br from-white to-gray-50 dark:from-dark-surface dark:to-dark-bg">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced Integration Flow */}
              <div className="relative">
                {/* Top Row - First 3 Steps */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
                  <motion.div 
                    className="text-center flex-1 max-w-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-navy to-navy-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg luxury-glass">
                      <Search size={40} className="text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 dark:text-white">ERMITS Advisory</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Strategic assessment and recommendations
                    </p>
                  </motion.div>
                  
                  <div className="hidden md:flex items-center justify-center">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <ArrowRight size={40} className="text-navy dark:text-silver" />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="text-center flex-1 max-w-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg luxury-glass">
                      <Target size={40} className="text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 dark:text-white">Platform Selection</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Maps findings to platform solutions
                    </p>
                  </motion.div>
                  
                  <div className="hidden md:flex items-center justify-center">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                    >
                      <ArrowRight size={40} className="text-navy dark:text-silver" />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="text-center flex-1 max-w-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg luxury-glass">
                      <Rocket size={40} className="text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 dark:text-white">Platform Implementation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Automated tools deployed
                    </p>
                  </motion.div>
                  
                  {/* Mobile arrows */}
                  <div className="md:hidden flex items-center justify-center my-2 w-full">
                    <ArrowDown size={32} className="text-navy dark:text-silver" />
                  </div>
                </div>
                
                {/* Arrow Down */}
                <div className="hidden md:flex items-center justify-center mb-6">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <ArrowDown size={40} className="text-navy dark:text-silver" />
                  </motion.div>
                </div>
                
                {/* Bottom Step - Ongoing Optimization */}
                <motion.div 
                  className="text-center max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg luxury-glass">
                    <Layers size={40} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 dark:text-white">Ongoing Optimization</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Continuous platform optimization and maturity growth
                  </p>
                </motion.div>
              </div>
              
              {/* Info Note */}
              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  <strong className="text-navy dark:text-white">💡 Tip:</strong> Hover over any platform card above to see detailed integration information with ERMITS Advisory services.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Platform Multipliers Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Platform Multipliers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See the difference between traditional point solutions and the integrated ERMITS platform ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Without Platform */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <AlertCircle size={32} className="text-red-500 mr-3" />
                <h3 className="text-2xl font-bold dark:text-white">Traditional Point Solutions</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Manual data collection</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Spreadsheet tracking and manual updates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Quarterly assessments</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Point-in-time snapshots, not continuous</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Lower implementation rates typical</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Many recommendations may not get implemented without platform support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400 text-sm">✗</span>
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Reactive posture</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Responding to issues after they occur</p>
                  </div>
                </li>
              </ul>
            </Card>

            {/* With Platform */}
            <Card className="p-8 border-2 border-green-500/30 bg-green-50/50 dark:bg-green-900/10">
              <div className="flex items-center mb-6">
                <CheckCircle size={32} className="text-green-500 mr-3" />
                <h3 className="text-2xl font-bold dark:text-white">ERMITS Platform Ecosystem</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Automated data aggregation</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Real-time dashboards from all sources</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Continuous monitoring</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">24/7 threat intelligence and compliance tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Higher implementation rates possible</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Recommendations can be implemented through automated platform tools. Results vary by organization.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">Proactive intelligence</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Predictive analytics and early warning</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <Card className="p-8 bg-gradient-to-br from-navy to-navy-dark text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-silver/90 max-w-3xl mx-auto">
                Integrated platform ecosystem delivers significantly better outcomes than disconnected point solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-silver">Point Solutions</h3>
                <ul className="space-y-3 text-silver/90">
                  <li className="flex items-center">
                    <AlertCircle size={20} className="mr-3" />
                    <span>Disconnected tools and data silos</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle size={20} className="mr-3" />
                    <span>12-18 months to maturity</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle size={20} className="mr-3" />
                    <span>Manual integration and reporting</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-silver">ERMITS Platform Ecosystem</h3>
                <ul className="space-y-3 text-silver/90">
                  <li className="flex items-center">
                    <CheckCircle size={20} className="mr-3 text-green-400" />
                    <span>Integrated platforms with unified data</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="mr-3 text-green-400" />
                    <span>Faster path to maturity possible (results vary)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={20} className="mr-3 text-green-400" />
                    <span>Automated integration and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* How Components Work Together */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
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
                        ERMITS Advisory conducts strategic assessment
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        2
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Deploy recommended platform solutions
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        3
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Monitor and optimize via integrated dashboards
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        4
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Unified reporting across all platforms
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center mr-3 flex-shrink-0 font-bold">
                        5
                      </div>
                      <p className="text-gray-600 dark:text-gray-200 pt-1">
                        Continuous optimization and platform maturity
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
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-200">
                        Higher implementation success rates possible (results vary by organization)
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
                Ready to Transform Your Security Operations?
              </h3>
              <p className="text-lg mb-6 text-silver max-w-2xl mx-auto">
                Let us show you how the ERMITS platform ecosystem can automate and strengthen your security posture
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
                  onClick={() => navigate('/services')}
                >
                  Learn About ERMITS Advisory
                </Button>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* FTC Compliance Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-16"
        >
          <Card className="p-6 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                <strong className="text-gray-800 dark:text-gray-300">Disclaimer:</strong> Results, outcomes, and timelines may vary based on individual organization circumstances, size, complexity, industry, and implementation efforts. Performance claims are based on typical experiences and are not guarantees. Case studies and examples are illustrative and may not reflect all client experiences. Pricing is subject to change and final pricing will be confirmed in written proposals. ERMITS Advisory services are advisory in nature and do not guarantee specific security outcomes or compliance certifications.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

