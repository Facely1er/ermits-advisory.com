import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Shield, CheckCircle, ArrowRight, FileText, Users,
  DollarSign, Clock, Star, TrendingUp
} from 'lucide-react';

export const PricingPage: React.FC = () => {
  const navigate = useNavigate();

  const steelPlans = [
    {
      name: 'Free Assessment',
      description: 'Get started with our comprehensive risk assessment',
      price: 'Free',
      period: '',
      features: [
        '46-question STEEL™ assessment',
        'PESTEL dimension scores',
        'Basic recommendations',
        'Visual dashboard',
        'No credit card required'
      ],
      cta: 'Start Free Assessment',
      link: '/steel',
      variant: 'outline' as const,
      highlight: false
    },
    {
      name: 'Premium',
      description: 'Professional reports and advanced features',
      price: '$29',
      period: 'one-time',
      features: [
        'Everything in Free, plus:',
        'Detailed PDF reports (20+ pages)',
        'Executive summary templates',
        'Custom visualizations',
        'Multiple export formats',
        'Unlimited assessments'
      ],
      cta: 'View Premium Features',
      link: '/steel/premium',
      variant: 'primary' as const,
      highlight: true
    },
    {
      name: 'Professional',
      description: 'Expert-guided assessment with strategic recommendations',
      price: 'Custom',
      period: 'per engagement',
      features: [
        'Everything in Premium, plus:',
        'Professional STEEL™ assessment',
        'Strategic recommendations',
        'Executive briefing',
        'Customized action plan',
        'Ongoing support'
      ],
      cta: 'Request Quote',
      link: '/steel/professional',
      variant: 'outline' as const,
      highlight: false
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive enterprise solutions',
      price: 'Custom',
      period: 'per engagement',
      features: [
        'Everything in Professional, plus:',
        'Multi-organization assessments',
        'API integration',
        'Custom reporting',
        'Dedicated account manager',
        'Priority support',
        'Training and onboarding'
      ],
      cta: 'View Enterprise Pricing',
      link: '/steel/enterprise',
      variant: 'outline' as const,
      highlight: false
    }
  ];

  const toolkitPlans = [
    {
      name: 'Compliance Toolkit',
      basicPrice: '$199',
      premiumPrice: '$499',
      premiumLifetime: '$899',
      link: '/toolkits-premium',
      description: 'Streamline your compliance journey'
    },
    {
      name: 'Incident Response Toolkit',
      basicPrice: '$149',
      premiumPrice: '$349',
      premiumLifetime: '$599',
      link: '/toolkits-premium',
      description: 'Be ready for any security incident'
    },
    {
      name: 'Vendor Risk Toolkit',
      basicPrice: '$249',
      premiumPrice: '$449',
      premiumLifetime: '$799',
      link: '/toolkits-premium',
      description: 'Manage third-party risk effectively'
    }
  ];

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-16 text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 dark:bg-silver/10 text-navy dark:text-silver text-sm font-medium mb-4">
              <DollarSign size={16} className="mr-2" />
              Pricing & Plans
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">
            Choose the Right Plan for Your Needs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            From free assessments to enterprise solutions, we offer flexible pricing options to fit organizations of all sizes.
          </p>
        </motion.div>

        {/* STEEL™ Assessment Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield size={24} className="text-navy dark:text-silver" />
              <h2 className="text-2xl md:text-3xl font-bold dark:text-white">STEEL™ Assessment Plans</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Comprehensive risk assessment solutions from free self-service to expert-guided enterprise engagements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {steelPlans.map((plan, index) => (
              <Card
                key={index}
                variant="glass"
                padding="lg"
                className={`bg-white dark:bg-dark-surface h-full flex flex-col ${plan.highlight ? 'border-2 border-gold ring-2 ring-gold/20' : ''}`}
              >
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold dark:text-white mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-navy dark:text-white">{plan.price}</span>
                      {plan.period && (
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={plan.variant}
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    if (plan.link.startsWith('/')) {
                      navigate(plan.link);
                    } else {
                      window.open(plan.link, '_blank');
                    }
                  }}
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Toolkits Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <FileText size={24} className="text-navy dark:text-silver" />
              <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Premium Toolkits</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Professional-grade toolkits with interactive features and comprehensive templates.
            </p>
          </div>

          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-3">
              {toolkitPlans.map((toolkit, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-bold dark:text-white mb-2">{toolkit.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{toolkit.description}</p>
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Basic: </span>
                      <span className="font-semibold text-navy dark:text-white">{toolkit.basicPrice}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Premium (Annual): </span>
                      <span className="font-semibold text-navy dark:text-white">{toolkit.premiumPrice}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Premium (Lifetime): </span>
                      <span className="font-semibold text-navy dark:text-white">{toolkit.premiumLifetime}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => navigate(toolkit.link)}
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button
                variant="primary"
                onClick={() => navigate('/toolkits-premium')}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                View All Toolkit Pricing
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Advisory Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users size={24} className="text-navy dark:text-silver" />
              <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Advisory Services</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Custom strategic consulting and expert guidance tailored to your organization's needs.
            </p>
          </div>

          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-navy dark:text-silver" />
                  <h3 className="text-xl font-bold dark:text-white">STEEL™ Strategic Assessment</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Expert-guided professional assessment with strategic recommendations and executive briefings.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Timeline: 2-8 weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Pricing: $25K - $125K</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Pricing scales based on company size and complexity
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => navigate('/contact?type=quote&service=steel-assessment')}
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Request Quote
                </Button>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp size={24} className="text-navy dark:text-silver" />
                  <h3 className="text-xl font-bold dark:text-white">On-Demand Advisory</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Flexible expert guidance for specific cybersecurity challenges and strategic initiatives.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Timeline: As needed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Pricing: Custom</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Hourly or project-based engagement
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => navigate('/contact?type=consultation&service=on-demand-advisory')}
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Request Consultation
                </Button>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button
                variant="ghost"
                onClick={() => navigate('/services')}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                View All Advisory Services
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy/10 to-gold/10 dark:from-navy/20 dark:to-gold/20 border-2 border-navy/20 dark:border-gold/20">
            <div className="text-center">
              <Star size={48} className="text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold dark:text-white mb-4">
                Not Sure Which Plan is Right for You?
              </h3>
              <p className="text-gray-600 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
                Our team is here to help you choose the best solution for your organization's needs. 
                Schedule a consultation to discuss your requirements.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/services')}
                >
                  View Services
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

