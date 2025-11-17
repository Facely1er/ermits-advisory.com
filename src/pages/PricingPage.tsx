import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, DollarSign, Clock, CheckCircle, ArrowRight, Zap
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  const navigate = useNavigate();

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

  // Assessment Services (One-Time)
  const assessmentServices = [
    {
      name: 'STEEL™ Strategic Assessment',
      price: '$25K - $125K',
      duration: '2-8 weeks',
      description: 'Expert risk assessment and strategic recommendations',
      deliverables: [
        'Professional STEEL™ assessment',
        'Strategic recommendations',
        'Executive briefing'
      ],
      idealFor: 'First engagement, annual reviews, board prep, budget planning'
    },
    {
      name: 'Compliance Advisory',
      price: '$3.5K - $30K',
      duration: '3-5 weeks or ongoing',
      description: 'Expert compliance guidance for major frameworks',
      deliverables: [
        'Gap analysis and readiness assessment',
        'Audit preparation support',
        'Framework guidance (NIST, ISO 27001, SOC 2, HIPAA, CMMC, PCI-DSS)'
      ],
      idealFor: 'NIST CSF, ISO 27001, SOC 2, HIPAA, CMMC, PCI-DSS'
    },
    {
      name: 'Governance & Risk Strategy',
      price: '$12K - $40K',
      duration: '3-8 weeks',
      description: 'Security program design and risk management',
      deliverables: [
        'Security program foundation',
        'Risk management program',
        'Board governance framework'
      ],
      idealFor: 'Organizations building security programs from scratch'
    },
    {
      name: 'Vendor Risk Advisory',
      price: '$5K - $35K',
      duration: '3-5 weeks or per vendor',
      description: 'Third-party risk management program design',
      deliverables: [
        'Vendor risk program design',
        'Critical vendor assessments',
        'Supply chain risk strategy'
      ],
      idealFor: 'Organizations managing third-party risk'
    },
    {
      name: 'Incident Response Advisory',
      price: '$12K - $100K',
      duration: '3-6 weeks or crisis response',
      description: 'Crisis leadership and response planning',
      deliverables: [
        'IR plan development',
        'Tabletop exercises',
        'Crisis leadership support'
      ],
      idealFor: 'Organizations needing incident response capabilities'
    },
    {
      name: 'GDPR/CCPA Privacy Compliance',
      price: '$15K - $75K',
      duration: '4-10 weeks or ongoing',
      description: 'Data protection and privacy compliance expertise',
      deliverables: [
        'GDPR/CCPA compliance assessment',
        'Privacy impact assessments',
        'Data subject rights procedures'
      ],
      idealFor: 'Organizations handling personal data'
    },
    {
      name: 'M&A Legal Advisory',
      price: '$25K - $150K',
      duration: '2-12 weeks per transaction',
      description: 'Legal counsel for technology transactions',
      deliverables: [
        'Technology transaction due diligence',
        'Cybersecurity risk assessment',
        'Post-merger integration planning'
      ],
      idealFor: 'Technology M&A transactions'
    }
  ];

  // Retainer Services (Monthly)
  const retainerServices = [
    {
      name: 'Strategic Advisory vCISO',
      price: '$8K - $15K',
      hours: '10-15 hours/month',
      description: 'Executive strategy + board support',
      features: [
        'Monthly executive strategy sessions',
        'Quarterly board presentations',
        'Annual security roadmap development',
        'Budget planning and justification'
      ],
      idealFor: 'Organizations needing executive guidance and board support'
    },
    {
      name: 'Operational vCISO',
      price: '$18K - $35K',
      hours: '25-45 hours/month',
      description: 'Program management + team guidance',
      features: [
        'All Strategic Advisory services',
        'Weekly team meetings and guidance',
        'Security program management',
        'Policy development and review'
      ],
      idealFor: 'Organizations needing program management and team leadership'
    },
    {
      name: 'Executive vCISO',
      price: '$40K - $70K',
      hours: '80+ hours/month',
      description: 'Full leadership + ecosystem orchestration',
      features: [
        'All Operational vCISO services',
        'Daily security operations oversight',
        'Direct team leadership',
        'Real-time crisis management'
      ],
      idealFor: 'Organizations needing near full-time CISO leadership'
    },
    {
      name: 'Continuous Compliance Program',
      price: '$3.5K - $10K',
      hours: 'As needed',
      description: 'Ongoing compliance + CyberCorrect optimization',
      features: [
        'Monthly compliance health checks',
        'Regulatory change monitoring',
        'Control effectiveness reviews',
        'Internal audit coordination'
      ],
      idealFor: 'Organizations maintaining ongoing compliance requirements'
    }
  ];

  // Bundled Packages
  const bundledPackages = [
    {
      name: 'Startup Security Package',
      price: '$45K - $85K',
      description: 'Complete security foundation for growing organizations',
      includes: [
        'Rapid STEEL Assessment',
        'Security Program Foundation',
        '3-month Strategic Advisory vCISO',
        'Complete ERMITS platform setup',
        'Investor presentation materials'
      ],
      idealFor: 'Startups and growing organizations ($10M-$50M revenue)'
    },
    {
      name: 'Enterprise Resilience Program',
      price: '$180K - $420K/year',
      description: 'Comprehensive security program for established enterprises',
      includes: [
        'Quarterly Comprehensive STEEL assessments',
        'Operational vCISO services (monthly)',
        'Continuous compliance program',
        'Quarterly board presentations',
        'Full ERMITS ecosystem implementation',
        'Unlimited strategic advisory access'
      ],
      idealFor: 'Mid-market to enterprise organizations ($50M-$500M revenue)'
    },
    {
      name: 'Compliance Acceleration Package',
      price: '$35K - $75K',
      description: 'Fast-track path to compliance certification',
      includes: [
        'Compliance Readiness Assessment',
        'Audit Preparation Support',
        'CyberCorrect full implementation',
        'Policy framework deployment in CyberSoluce',
        '3-month compliance monitoring'
      ],
      idealFor: 'Organizations pursuing SOC 2, ISO 27001, or HIPAA certification'
    }
  ];

  return (
    <div className="min-h-screen bg-silver-light dark:bg-dark-bg">
      {/* Hero Section */}
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
                <DollarSign size={16} className="mr-2" />
                Transparent Pricing
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
                Investment & Pricing
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-silver/90 max-w-3xl mx-auto leading-relaxed">
              Strategic cybersecurity intelligence that implements. Transparent pricing for all advisory services and platform integration.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Assessment Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Assessment Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              One-time strategic assessments to establish your security foundation
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {assessmentServices.map((service, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <DollarSign size={16} className="mr-1" />
                          {service.price}
                        </span>
                        <span className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-navy dark:text-silver mb-2">
                      Deliverables:
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Ideal for:</span> {service.idealFor}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="primary"
                      onClick={() => navigate('/contact')}
                      className="w-full"
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                    >
                      Schedule Assessment
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Retainer Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Retainer Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ongoing strategic leadership and program management
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {retainerServices.map((service, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="flex items-center font-semibold text-lg text-navy dark:text-white">
                        <DollarSign size={18} className="mr-1" />
                        {service.price}/month
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {service.hours}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {service.description}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-navy dark:text-silver mb-2">
                      What's Included:
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Ideal for:</span> {service.idealFor}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="primary"
                      onClick={() => navigate('/contact')}
                      className="w-full"
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Bundled Packages Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Bundled Packages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions combining assessments, advisory, and platform implementation
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {bundledPackages.map((pkg, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full p-6 hover:shadow-xl transition-shadow border-2 border-navy/20 dark:border-silver/20">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-navy dark:text-white">
                        {pkg.name}
                      </h3>
                      <Zap size={24} className="text-yellow-500" />
                    </div>
                    <p className="text-2xl font-bold text-navy dark:text-white mb-2">
                      {pkg.price}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {pkg.description}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-navy dark:text-silver mb-2">
                      Package Includes:
                    </p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Ideal for:</span> {pkg.idealFor}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="primary"
                      onClick={() => navigate('/contact')}
                      className="w-full"
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-navy to-navy-dark text-white">
            <Shield size={48} className="mx-auto mb-6 text-silver" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-silver/90 max-w-2xl mx-auto mb-8">
              Schedule a consultation to discuss your organization's specific needs and receive a customized proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/services')}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                View All Services
              </Button>
            </div>
          </Card>
        </motion.section>

        {/* FTC Compliance Disclaimer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="p-6 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                <strong className="text-gray-800 dark:text-gray-300">Pricing Disclaimer:</strong> All pricing shown is estimated and subject to change. Final pricing will be confirmed in written proposals based on specific project scope, requirements, and organizational factors. Pricing ranges reflect typical engagements and may vary based on organization size, complexity, industry, geographic location, and specific service requirements. Services are provided on a best-efforts basis and outcomes may vary. No guarantees are made regarding specific results, timelines, or compliance certifications.
              </p>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

