import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowRight, CheckCircle, FileText, Shield, Users, Clock, 
  DollarSign, TrendingUp, Zap, Settings,
  AlertCircle, CheckSquare,
  ChevronRight, Briefcase,
  Award, FileCheck, RefreshCw, Building2, Heart,
  Briefcase as BriefcaseIcon, Network, CreditCard
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const ComplianceAdvisory: React.FC = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'frameworks' | 'services' | 'platform'>('overview');

  // ERMITS Platform Products
  const ermitsProducts = [
    {
      id: 'cybercorrect',
      name: 'CyberCorrect™',
      description: 'Automated compliance management and evidence collection',
      icon: FileCheck,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500',
      features: [
        'Automated evidence collection and validation',
        'Real-time compliance dashboards',
        'Regulatory change notifications',
        'Control testing automation',
        'Audit-ready documentation generation',
        'Multi-framework support (NIST, ISO, SOC 2, HIPAA, CMMC, PCI-DSS)'
      ],
      integration: 'Primary platform for all compliance advisory services'
    },
    {
      id: 'cybersoluce',
      name: 'CyberSoluce™',
      description: 'Unified governance and policy management',
      icon: Settings,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500',
      features: [
        'Policy framework deployment',
        'Governance workflow automation',
        'Risk register management',
        'Board-ready reporting',
        'Unified compliance governance'
      ],
      integration: 'Policy templates and governance workflows'
    },
    {
      id: 'cybercaution',
      name: 'CyberCaution™',
      description: 'Threat intelligence and monitoring',
      icon: AlertCircle,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-500',
      features: [
        'Compliance-related threat intelligence',
        'Regulatory breach monitoring',
        'Threat-driven compliance alerts',
        'Security incident correlation'
      ],
      integration: 'Threat intelligence for compliance risk assessment'
    },
    {
      id: 'vendorsoluce',
      name: 'VendorSoluce™',
      description: 'Vendor risk and supply chain security',
      icon: Network,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500',
      features: [
        'Vendor compliance tracking',
        'Third-party evidence management',
        'Supply chain compliance monitoring',
        'Vendor risk assessment'
      ],
      integration: 'Vendor compliance and third-party evidence'
    }
  ];

  // Compliance Frameworks
  const frameworks = [
    {
      id: 'nist',
      name: 'NIST CSF',
      description: 'Cybersecurity Framework 2.0',
      icon: Shield,
      color: 'bg-blue-500'
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      description: 'Information Security Management',
      icon: Award,
      color: 'bg-green-500'
    },
    {
      id: 'soc2',
      name: 'SOC 2',
      description: 'Service Organization Control',
      icon: FileCheck,
      color: 'bg-purple-500'
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      description: 'Healthcare Data Protection',
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      id: 'cmmc',
      name: 'CMMC',
      description: 'Cybersecurity Maturity Model',
      icon: Building2,
      color: 'bg-orange-500'
    },
    {
      id: 'pci',
      name: 'PCI-DSS',
      description: 'Payment Card Industry',
      icon: CreditCard,
      color: 'bg-indigo-500'
    }
  ];

  // Service Options with Platform Integration
  const services = [
    {
      id: 'readiness',
      name: 'Compliance Readiness Assessment',
      price: '$12K - $30K',
      timeline: '3-5 weeks',
      description: 'Comprehensive gap analysis and remediation roadmap',
      features: [
        'Current state assessment',
        'Framework gap analysis',
        'Control mapping and prioritization',
        'Evidence requirements documentation',
        'Phased remediation roadmap',
        'CyberCorrect™ configuration plan'
      ],
      deliverables: [
        'Gap analysis report',
        'Prioritized remediation roadmap',
        'Control implementation guides',
        'Evidence collection templates',
        'CyberCorrect™ automation setup',
        'Timeline and resource estimates'
      ],
      platformIntegration: {
        primary: 'CyberCorrect',
        setup: 'Full CyberCorrect™ platform configuration and automation setup',
        features: [
          'Evidence collection workflows configured',
          'Compliance dashboards customized',
          'Control testing automation enabled',
          'Regulatory change monitoring activated'
        ],
        secondary: ['CyberSoluce', 'CyberCaution'],
        secondaryFeatures: [
          'Policy templates loaded into CyberSoluce™',
          'Threat intelligence feeds configured in CyberCaution™',
          'Vendor compliance tracking in VendorSoluce™ (if applicable)'
        ]
      },
      idealFor: 'Organizations preparing for first-time certification or major framework adoption'
    },
    {
      id: 'audit',
      name: 'Audit Preparation Support',
      price: '$8K - $20K',
      timeline: '2-4 weeks',
      description: 'Evidence validation and mock audit execution',
      features: [
        'Evidence collection review',
        'Control testing verification',
        'Documentation gap remediation',
        'Mock audit execution',
        'Auditor communication preparation',
        'CyberCorrect™ audit trail validation'
      ],
      deliverables: [
        'Audit readiness checklist',
        'Evidence repository organization',
        'Control testing results',
        'Pre-audit findings report',
        'Auditor response templates',
        'CyberCorrect™ compliance dashboard'
      ],
      platformIntegration: {
        primary: 'CyberCorrect',
        setup: 'CyberCorrect™ evidence management and audit trail validation',
        features: [
          'Evidence repository organized in CyberCorrect™',
          'Audit trail validated and documented',
          'Compliance dashboard prepared for auditor review',
          'Control testing results automated'
        ],
        secondary: ['CyberSoluce', 'VendorSoluce'],
        secondaryFeatures: [
          'Policy documentation validated in CyberSoluce™',
          'Vendor evidence reviewed in VendorSoluce™',
          'CyberCaution™ monitoring coverage confirmed'
        ]
      },
      idealFor: 'Organizations with upcoming audits or renewals'
    },
    {
      id: 'continuous',
      name: 'Continuous Compliance Program',
      price: '$3.5K - $10K/month',
      timeline: 'Ongoing',
      description: 'Monthly monitoring and regulatory updates',
      features: [
        'Monthly compliance health checks',
        'Regulatory change monitoring',
        'Control effectiveness reviews',
        'Evidence management oversight',
        'Internal audit coordination',
        'CyberCorrect™ optimization'
      ],
      deliverables: [
        'Monthly compliance dashboards',
        'Regulatory update briefings',
        'Control test results',
        'Audit-ready evidence packages',
        'Compliance trend analysis',
        'Platform optimization recommendations'
      ],
      platformIntegration: {
        primary: 'CyberCorrect',
        setup: 'Ongoing CyberCorrect™ optimization and monitoring',
        features: [
          'Continuous monitoring via CyberCorrect™ dashboards',
          'Real-time regulatory change notifications',
          'Automated evidence collection and validation',
          'Monthly compliance health reports generated'
        ],
        secondary: ['CyberSoluce', 'CyberCaution', 'VendorSoluce'],
        secondaryFeatures: [
          'Real-time policy updates in CyberSoluce™',
          'Compliance-driven alerts from CyberCaution™',
          'Vendor compliance tracking in VendorSoluce™',
          'Unified compliance governance across all platforms'
        ]
      },
      idealFor: 'Organizations maintaining ongoing compliance requirements'
    }
  ];

  // Industry-Specific Compliance
  const industryCompliance = [
    {
      industry: 'Healthcare',
      frameworks: ['HIPAA', 'HITECH', 'State Privacy Laws'],
      icon: Heart,
      description: 'Patient data protection and healthcare compliance'
    },
    {
      industry: 'Financial Services',
      frameworks: ['SOX', 'GLBA', 'FFIEC', 'PCI-DSS'],
      icon: BriefcaseIcon,
      description: 'Financial regulations and data security'
    },
    {
      industry: 'Government/Defense',
      frameworks: ['CMMC', 'NIST 800-171', 'FedRAMP'],
      icon: Building2,
      description: 'Federal cybersecurity requirements'
    }
  ];

  // Results Metrics
  const resultsMetrics = [
    { value: '50%', label: 'Faster Time to Certification', icon: Zap },
    { value: '70%', label: 'Reduction in Audit Prep Time', icon: TrendingUp },
    { value: '90%+', label: 'First-Time Pass Rate', icon: Award },
    { value: '100%', label: 'Automated Evidence Collection', icon: Settings }
  ];

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-12 text-center"
        >
          <div className="inline-block px-4 py-2 bg-navy/20 rounded-full mb-6">
            <span className="text-navy dark:text-silver font-semibold">Compliance Advisory Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Framework-Driven Compliance
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            Transform compliance from burden to competitive advantage with CyberCorrect™-powered automation
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: Briefcase },
              { id: 'frameworks', label: 'Frameworks', icon: Shield },
              { id: 'services', label: 'Services', icon: FileText },
              { id: 'platform', label: 'Platform Integration', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'frameworks' | 'services' | 'platform')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-navy text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-navy/10'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Overview Tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {resultsMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card variant="glass" padding="lg" className="text-center h-full">
                        <div className="p-3 rounded-full bg-navy/20 dark:bg-navy/40 inline-flex mb-4">
                          <Icon size={24} className="text-navy dark:text-silver" />
                        </div>
                        <div className="text-3xl font-bold text-navy dark:text-white mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-200">
                          {metric.label}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* CyberCorrect Integration */}
              <Card variant="glass" padding="lg" className="mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                        <FileCheck size={32} />
                      </div>
                      <h2 className="text-3xl font-bold dark:text-white">
                        CyberCorrect™ Platform Integration
                      </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-200 mb-6">
                      Our compliance advisory services seamlessly integrate with CyberCorrect™, 
                      transforming manual compliance processes into automated, continuous monitoring.
                    </p>
                    <div className="space-y-4">
                      {[
                        'Automated evidence collection and validation',
                        'Real-time compliance dashboards',
                        'Regulatory change notifications',
                        'Control testing automation',
                        'Audit-ready documentation generation'
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button
                        variant="primary"
                        onClick={() => setActiveTab('platform')}
                        icon={<ArrowRight size={18} />}
                        iconPosition="right"
                      >
                        Learn About Platform Integration
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-br from-navy to-dark rounded-lg p-8 text-white">
                      <h3 className="text-xl font-bold mb-4">Compliance Workflow</h3>
                      <div className="space-y-4">
                        {[
                          { step: '1', title: 'Assessment', desc: 'Gap analysis & roadmap' },
                          { step: '2', title: 'Implementation', desc: 'Control deployment' },
                          { step: '3', title: 'Automation', desc: 'CyberCorrect™ setup' },
                          { step: '4', title: 'Monitoring', desc: 'Continuous compliance' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gold text-navy font-bold flex items-center justify-center flex-shrink-0">
                              {item.step}
                            </div>
                            <div>
                              <div className="font-semibold">{item.title}</div>
                              <div className="text-sm text-silver">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Service Options Preview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
                  Three Service Options
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        variant="glass"
                        padding="lg"
                        className="h-full cursor-pointer hover:shadow-xl transition-all"
                        onClick={() => {
                          setActiveTab('services');
                          setSelectedService(service.id);
                        }}
                      >
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{service.name}</h3>
                        <div className="flex items-center gap-3 text-sm mb-4">
                          <span className="font-semibold text-navy dark:text-white">{service.price}</span>
                          <span className="text-gray-600 dark:text-gray-400">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{service.timeline}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 mb-4">
                          <FileCheck size={14} />
                          <span>CyberCorrect™ Integration</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab('services');
                            setSelectedService(service.id);
                          }}
                        >
                          Learn More <ArrowRight size={14} className="ml-2" />
                        </Button>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why Choose Compliance Advisory */}
              <Card variant="glass" padding="lg" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Why Choose Compliance Advisory?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Platform Automation',
                      description: 'CyberCorrect™ eliminates 70% of manual compliance work',
                      icon: Zap
                    },
                    {
                      title: 'Expert Guidance',
                      description: 'Framework specialists guide you through every step',
                      icon: Users
                    },
                    {
                      title: 'Faster Certification',
                      description: '50% faster time to certification vs. traditional approaches',
                      icon: TrendingUp
                    },
                    {
                      title: 'Continuous Monitoring',
                      description: 'Ongoing compliance via automated platform dashboards',
                      icon: RefreshCw
                    }
                  ].map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-navy/20 dark:bg-navy/40 flex-shrink-0">
                          <Icon size={24} className="text-navy dark:text-silver" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 dark:text-white">{benefit.title}</h3>
                          <p className="text-gray-600 dark:text-gray-200 text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          )}

          {/* Frameworks Tab */}
          {activeTab === 'frameworks' && (
            <motion.div
              key="frameworks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <Shield size={48} className="text-navy dark:text-silver mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2 dark:text-white">Supported Frameworks</h2>
                <p className="text-gray-600 dark:text-gray-200">
                  Comprehensive compliance support across major security frameworks
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {frameworks.map((framework, index) => {
                  const Icon = framework.icon;
                  return (
                    <motion.div
                      key={framework.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        variant="glass"
                        padding="lg"
                        className={`h-full cursor-pointer transition-all ${
                          selectedFramework === framework.id
                            ? 'ring-2 ring-navy shadow-xl'
                            : 'hover:shadow-lg'
                        }`}
                        onClick={() => setSelectedFramework(
                          selectedFramework === framework.id ? null : framework.id
                        )}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${framework.color} text-white`}>
                            <Icon size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-1 dark:text-white">
                              {framework.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {framework.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Industry-Specific */}
              <Card variant="glass" padding="lg">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">
                  Industry-Specific Compliance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {industryCompliance.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <div key={index} className="border-l-4 border-navy pl-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon size={24} className="text-navy dark:text-silver" />
                          <h3 className="font-bold dark:text-white">{industry.industry}</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                          {industry.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {industry.frameworks.map((fw, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-navy/10 dark:bg-navy/30 text-xs rounded text-navy dark:text-silver"
                            >
                              {fw}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <FileText size={48} className="text-navy dark:text-silver mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2 dark:text-white">Service Options</h2>
                <p className="text-gray-600 dark:text-gray-200">
                  Choose the compliance service that fits your needs
                </p>
              </div>

              <div className="space-y-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      variant="glass"
                      padding="lg"
                      className={`${
                        selectedService === service.id ? 'ring-2 ring-navy' : ''
                      }`}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-2/3">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold mb-2 dark:text-white">
                                {service.name}
                              </h3>
                              <div className="flex items-center gap-4 text-sm mb-3">
                                <span className="font-semibold text-navy dark:text-white flex items-center gap-1">
                                  <DollarSign size={16} />
                                  {service.price}
                                </span>
                                <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                  <Clock size={16} />
                                  {service.timeline}
                                </span>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedService(
                                selectedService === service.id ? null : service.id
                              )}
                            >
                              {selectedService === service.id ? 'Hide' : 'Show'} Details
                            </Button>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {service.description}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            {service.idealFor}
                          </p>
                        </div>
                      </div>

                      {selectedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="font-semibold mb-3 dark:text-white flex items-center gap-2">
                                <CheckSquare size={18} />
                                Key Features
                              </h4>
                              <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 dark:text-white flex items-center gap-2">
                                <FileText size={18} />
                                Deliverables
                              </h4>
                              <ul className="space-y-2">
                                {service.deliverables.map((deliverable, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                    <FileText size={16} className="text-navy mt-0.5 flex-shrink-0" />
                                    <span>{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Platform Integration Section */}
                          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold mb-4 dark:text-white flex items-center gap-2">
                              <Settings size={18} />
                              ERMITS Platform Integration
                            </h4>
                            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <FileCheck size={20} className="text-green-600" />
                                <span className="font-semibold text-green-700 dark:text-green-300">
                                  Primary Platform: {service.platformIntegration.primary}
                                </span>
                              </div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                {service.platformIntegration.setup}
                              </p>
                              <ul className="space-y-2">
                                {service.platformIntegration.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {service.platformIntegration.secondary.length > 0 && (
                              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <div className="text-sm font-semibold mb-2 dark:text-white">
                                  Supporting Platforms: {service.platformIntegration.secondary.join(', ')}
                                </div>
                                <ul className="space-y-1">
                                  {service.platformIntegration.secondaryFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                      <ChevronRight size={12} className="text-navy mt-0.5 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Platform Integration Tab */}
          {activeTab === 'platform' && (
            <motion.div
              key="platform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <Settings size={48} className="text-navy dark:text-silver mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2 dark:text-white">ERMITS Platform Integration</h2>
                <p className="text-gray-600 dark:text-gray-200">
                  How Compliance Advisory services integrate with ERMITS platform ecosystem
                </p>
              </div>

              {/* Primary Platform: CyberCorrect */}
              <Card variant="glass" padding="lg" className="mb-8 border-2 border-green-500">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <FileCheck size={48} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold dark:text-white">CyberCorrect™</h3>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
                        Primary Platform
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Automated compliance management and evidence collection platform
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ermitsProducts.find(p => p.id === 'cybercorrect')?.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold mb-2 dark:text-white">How Compliance Advisory Uses CyberCorrect™:</h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <ChevronRight size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Assessment findings configure CyberCorrect™ evidence collection workflows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Remediation roadmaps become automated control testing schedules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Gap analysis results populate compliance dashboards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Audit preparation leverages automated evidence repository</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Supporting Platforms */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {ermitsProducts.filter(p => p.id !== 'cybercorrect').map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card variant="glass" padding="lg" className="h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${product.color} text-white`}>
                            <Icon size={24} />
                          </div>
                          <h4 className="font-bold dark:text-white">{product.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                          {product.description}
                        </p>
                        <div className="text-xs text-gray-500 dark:text-gray-400 italic mb-3">
                          {product.integration}
                        </div>
                        <ul className="space-y-1">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <CheckCircle size={12} className="text-navy mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Integration Workflow */}
              <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy to-dark text-white mb-8">
                <h3 className="text-2xl font-bold mb-6">Compliance Advisory → Platform Integration Workflow</h3>
                <div className="space-y-4">
                  {[
                    { 
                      step: '1', 
                      title: 'Assessment', 
                      desc: 'Compliance readiness assessment identifies gaps', 
                      platform: 'CyberCorrect™ configuration planned',
                      advisory: 'Advisory team conducts gap analysis',
                      platformAction: 'CyberCorrect™ workflows designed'
                    },
                    { 
                      step: '2', 
                      title: 'Remediation', 
                      desc: 'Advisory guides control implementation', 
                      platform: 'CyberCorrect™ automates evidence collection',
                      advisory: 'Expert guidance on control deployment',
                      platformAction: 'Evidence collection automated'
                    },
                    { 
                      step: '3', 
                      title: 'Automation', 
                      desc: 'Platform setup and workflow configuration', 
                      platform: 'CyberCorrect™ + CyberSoluce™ + supporting platforms',
                      advisory: 'Platform configuration oversight',
                      platformAction: 'Full ecosystem integration'
                    },
                    { 
                      step: '4', 
                      title: 'Monitoring', 
                      desc: 'Continuous compliance via platform dashboards', 
                      platform: 'Ongoing CyberCorrect™ optimization',
                      advisory: 'Monthly compliance reviews',
                      platformAction: 'Automated compliance monitoring'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                      <div className="w-12 h-12 rounded-full bg-gold text-navy font-bold flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold mb-2 text-lg">{item.title}</div>
                        <div className="text-sm text-silver mb-2">{item.desc}</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                          <div className="bg-white/10 rounded p-2">
                            <div className="text-xs text-silver/80 mb-1">Advisory Role:</div>
                            <div className="text-sm">{item.advisory}</div>
                          </div>
                          <div className="bg-white/10 rounded p-2">
                            <div className="text-xs text-silver/80 mb-1">Platform Action:</div>
                            <div className="text-sm">{item.platformAction}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Platform Comparison */}
              <Card variant="glass" padding="lg">
                <h3 className="text-2xl font-bold mb-6 dark:text-white">Without vs. With ERMITS Platform</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold mb-3 text-red-600 dark:text-red-400">Traditional Approach</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Manual evidence collection (weeks of work)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Spreadsheet tracking and documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Quarterly compliance assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Reactive compliance posture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span>30-40% recommendation implementation rate</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold mb-3 text-green-600 dark:text-green-400">ERMITS Platform Approach</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Automated evidence collection (real-time)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Real-time compliance dashboards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Continuous compliance monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Proactive compliance intelligence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>80-90% recommendation implementation rate</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy to-dark">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Achieve Compliance?</h3>
            <p className="text-silver mb-6">
              Schedule a consultation to discuss your compliance needs and CyberCorrect™ integration
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="bg-gold text-navy hover:bg-gold/90"
              >
                Schedule Compliance Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/toolkits-premium')}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                View Pricing
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/method/steel')}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                Explore ERMITS Platform
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <Link to="/services" className="text-navy dark:text-silver hover:underline inline-flex items-center gap-2">
            ← Back to Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

