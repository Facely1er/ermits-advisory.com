import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowRight, CheckCircle, FileText, Clock, 
  DollarSign, Target, Zap, Settings,
  Activity, CheckSquare, Download,
  Briefcase
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createCheckoutSession, hasValidStripePriceId } from '../services/stripe';

export const VcisoProfessional: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'templates'>('overview');
  const [loading, setLoading] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(0);
  
  // Check if Stripe is configured for this product
  const hasStripe = hasValidStripePriceId('vciso-professional');

  const handlePurchase = async () => {
    setLoading(true);
    
    // Try Stripe first if configured
    if (hasStripe) {
      try {
        await createCheckoutSession({
          productType: 'vciso-professional',
          successUrl: `${window.location.origin}/purchase-success`,
          cancelUrl: window.location.href,
        });
        // If successful, user will be redirected, so we don't set loading to false
        return;
      } catch (error: unknown) {
        console.error('Stripe checkout error:', error);
        setLoading(false);
        const errorMessage = error instanceof Error ? error.message : 'Stripe checkout is currently unavailable';
        alert(`Checkout Error: ${errorMessage}\n\nPlease try again or contact support.`);
      }
    } else {
      setLoading(false);
      alert('Stripe checkout is not configured. Please contact support.');
    }
  };

  // Workflow Steps - Full Access
  const workflowSteps = [
    {
      title: 'Discovery & Proposal',
      duration: 'Week -2 to -1',
      activities: [
        'Initial discovery call (60 min)',
        'Current state assessment',
        'Needs analysis',
        'Tier recommendation',
        'Proposal development',
        'Proposal presentation'
      ],
      deliverables: ['Discovery notes', 'Proposal document', 'Service agreement']
    },
    {
      title: 'Contract & Kickoff',
      duration: 'Week 0-1',
      activities: [
        'Contract execution',
        'ERMITS platform provisioning',
        'Client workspace setup',
        'Kickoff meeting (90-120 min)',
        'Stakeholder introductions',
        'Communication setup'
      ],
      deliverables: ['Signed contract', 'Kickoff notes', '30/60/90 roadmap', 'Platform access']
    },
    {
      title: 'Initial Assessment',
      duration: 'Weeks 1-4',
      activities: [
        'Stakeholder interviews',
        'Documentation review',
        'STEEL assessment',
        'Gap analysis',
        'Platform deployment',
        'User training'
      ],
      deliverables: ['30-day assessment report', 'STEEL score baseline', 'Gap analysis', '90-day roadmap']
    },
    {
      title: 'Ongoing Delivery',
      duration: 'Month 2+',
      activities: [
        'Monthly executive briefings',
        'Weekly team meetings (Operational/Executive)',
        'Platform optimization',
        'Strategic initiatives',
        'Quarterly business reviews',
        'Continuous improvement'
      ],
      deliverables: ['Monthly reports', 'Quarterly board presentations', 'Platform analytics', 'Progress metrics']
    }
  ];

  // Templates Library
  const templates = [
    {
      category: 'Monthly Deliverables',
      items: [
        { name: 'Monthly Executive Briefing Template', description: 'Complete monthly report template with all sections' },
        { name: 'Quarterly Board Presentation', description: 'Board-ready presentation template' },
        { name: 'Monthly Metrics Dashboard', description: 'Key performance indicators and metrics' }
      ]
    },
    {
      category: 'Onboarding',
      items: [
        { name: 'Client Kickoff Agenda', description: '90-120 minute kickoff meeting template' },
        { name: 'Discovery Call Template', description: 'Initial discovery call agenda and questions' },
        { name: '30-Day Assessment Report', description: 'Comprehensive assessment report template' }
      ]
    },
    {
      category: 'Governance',
      items: [
        { name: 'Security Program Charter', description: 'Program foundation and charter template' },
        { name: 'Risk Management Framework', description: 'Risk assessment methodology template' },
        { name: 'Board Governance Program', description: 'Board reporting framework template' }
      ]
    },
    {
      category: 'Operations',
      items: [
        { name: 'Incident Response Plan', description: 'Complete IR plan template' },
        { name: 'Policy Framework Template', description: '25+ policy templates' },
        { name: 'Vendor Risk Assessment', description: 'Vendor evaluation template' }
      ]
    }
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
          <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
            <span className="text-gold font-semibold">Professional vCISO Toolkit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            vCISO Professional Kit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            Complete vCISO toolkit with 37+ templates, full delivery workflow guide, service delivery methodology, and ERMITS platform integration workflows
          </p>
          
          {/* Price Badge */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-4xl font-bold text-navy dark:text-silver">$499</div>
            <div className="text-gray-600 dark:text-gray-400">One-time purchase</div>
          </div>

          {/* Value Proposition */}
          <div className="max-w-2xl mx-auto mb-8">
            <Card variant="glass" padding="lg" className="bg-gradient-to-r from-gold/10 to-navy/10 border-2 border-gold/30">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 dark:text-white">Includes Starter Kit ($299 value) + Complete Workflow Guide</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm">
                  Everything you need to deliver professional vCISO services with proven methodologies and templates
                </p>
              </div>
            </Card>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: Briefcase },
              { id: 'templates', label: 'Template Library', icon: FileText },
              { id: 'workflow', label: 'Delivery Workflow', icon: Activity }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'workflow' | 'templates')}
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
                {[
                  { value: '37+', label: 'Professional Templates', icon: FileText },
                  { value: '4', label: 'Workflow Steps', icon: Activity },
                  { value: 'Complete', label: 'Delivery Methodology', icon: Target },
                  { value: '$499', label: 'One-Time Purchase', icon: DollarSign }
                ].map((metric, index) => {
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

              {/* What's Included */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
                  Everything in Professional Kit
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      title: '37+ Professional Templates',
                      description: 'All templates from Starter Kit included',
                      icon: FileText,
                      included: true
                    },
                    {
                      title: 'Complete Delivery Workflow',
                      description: 'Full 4-step vCISO service delivery methodology',
                      icon: Activity,
                      included: true
                    },
                    {
                      title: 'Service Delivery Methodology',
                      description: 'Proven processes for client engagement',
                      icon: Settings,
                      included: true
                    },
                    {
                      title: 'Client Engagement Templates',
                      description: 'Discovery, kickoff, and proposal templates',
                      icon: Briefcase,
                      included: true
                    },
                    {
                      title: 'ERMITS Integration Workflows',
                      description: 'Guides for platform integration',
                      icon: Zap,
                      included: true
                    },
                    {
                      title: 'Pricing & Scoping Guides',
                      description: 'Tier recommendations and pricing frameworks',
                      icon: DollarSign,
                      included: true
                    }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card variant="glass" padding="lg" className="h-full">
                          <div className="p-3 rounded-full bg-navy/20 dark:bg-navy/40 inline-flex mb-4">
                            <Icon size={24} className="text-navy dark:text-silver" />
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold dark:text-white">{item.title}</h3>
                            {item.included && <CheckCircle size={18} className="text-green-500 flex-shrink-0" />}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Comparison */}
              <Card variant="glass" padding="lg" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white text-center">Starter vs Professional</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300 dark:border-gray-600">
                        <th className="text-left py-4 px-4 font-bold dark:text-white">Feature</th>
                        <th className="text-center py-4 px-4 font-bold dark:text-white">Starter ($299)</th>
                        <th className="text-center py-4 px-4 font-bold dark:text-white bg-gold/20">Professional ($499)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">37+ Templates</td>
                        <td className="text-center"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                        <td className="text-center bg-gold/10"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Complete Workflow Guide</td>
                        <td className="text-center">-</td>
                        <td className="text-center bg-gold/10"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Service Delivery Methodology</td>
                        <td className="text-center">-</td>
                        <td className="text-center bg-gold/10"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Client Engagement Templates</td>
                        <td className="text-center">-</td>
                        <td className="text-center bg-gold/10"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">ERMITS Integration Workflows</td>
                        <td className="text-center">-</td>
                        <td className="text-center bg-gold/10"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-200">Pricing & Scoping Guides</td>
                        <td className="text-center">-</td>
                        <td className="text-center bg-gold/10"><CheckCircle size={20} className="text-green-500 mx-auto" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Workflow Tab - Full Access */}
          {activeTab === 'workflow' && (
            <motion.div
              key="workflow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <Activity size={48} className="text-navy dark:text-silver mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-2 dark:text-white">Complete vCISO Delivery Workflow</h2>
                  <p className="text-gray-600 dark:text-gray-200 mb-4">
                    Full access to all 4 workflow steps and complete service delivery methodology
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-400 font-semibold">
                    <CheckCircle size={16} />
                    <span>Full Access - All Steps Unlocked</span>
                  </div>
                </div>

                {/* Step Navigation */}
                <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
                  {workflowSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setWorkflowStep(index)}
                      className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                        workflowStep === index
                          ? 'bg-navy text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-navy/10'
                      }`}
                    >
                      Step {index + 1}
                    </button>
                  ))}
                </div>

                {/* Current Step Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={workflowStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Card variant="glass" padding="lg">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 dark:text-white">
                            {workflowSteps[workflowStep].title}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Clock size={16} />
                            <span>{workflowSteps[workflowStep].duration}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Step {workflowStep + 1} of {workflowSteps.length}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 dark:text-white flex items-center gap-2">
                            <CheckSquare size={18} />
                            Key Activities
                          </h4>
                          <ul className="space-y-2">
                            {workflowSteps[workflowStep].activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{activity}</span>
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
                            {workflowSteps[workflowStep].deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <FileText size={16} className="text-navy mt-0.5 flex-shrink-0" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <Button
                          variant="outline"
                          onClick={() => setWorkflowStep(Math.max(0, workflowStep - 1))}
                          disabled={workflowStep === 0}
                        >
                          Previous
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => setWorkflowStep(Math.min(workflowSteps.length - 1, workflowStep + 1))}
                          disabled={workflowStep === workflowSteps.length - 1}
                          icon={<ArrowRight size={16} />}
                          iconPosition="right"
                        >
                          Next Step
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <motion.div
              key="templates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <FileText size={48} className="text-navy dark:text-silver mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2 dark:text-white">Complete Template Library</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  37+ professional templates organized by category for vCISO service delivery
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-400 text-sm font-semibold">
                  <CheckCircle size={16} />
                  All templates included in your purchase
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {templates.map((category, catIndex) => (
                  <Card key={catIndex} variant="glass" padding="lg">
                    <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center gap-2">
                      <FileText size={20} />
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="border-l-2 border-navy pl-4">
                          <div className="font-semibold text-sm dark:text-white">{item.name}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
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
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy to-dark text-white">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-silver mb-6">
              Get instant access to complete vCISO toolkit with workflow guide and delivery methodology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {hasStripe ? (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handlePurchase}
                  disabled={loading}
                  icon={<Download size={18} />}
                  iconPosition="right"
                  className="bg-white text-navy hover:bg-gray-100 dark:bg-white dark:text-navy dark:hover:bg-silver font-semibold shadow-lg transition-colors"
                >
                  {loading ? 'Processing...' : 'Buy with Stripe - $499'}
                </Button>
              ) : null}
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/vciso-kit')}
                className="bg-white/20 text-white border-white/40 hover:bg-white/30 dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20 font-semibold transition-colors"
              >
                View Starter Kit ($299)
              </Button>
            </div>
            <p className="text-silver/70 text-xs mt-4">
              Secure checkout • Instant access • Lifetime updates
            </p>
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

export default VcisoProfessional;

