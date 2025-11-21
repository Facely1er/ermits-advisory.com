import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowRight, CheckCircle, FileText, Clock, 
  DollarSign, Target, Zap, Settings,
  Activity, CheckSquare, Download,
  Briefcase, Lock
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { createCheckoutSession } from '../services/stripe';

export const VcisoKit: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'templates'>('overview');
  const [loading, setLoading] = useState(false);
  const [professionalLoading, setProfessionalLoading] = useState(false);

  const handlePurchase = async (e?: React.MouseEvent) => {
    // Prevent any default behavior
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log('Purchase button clicked for vCISO Kit');
    setLoading(true);
    
    try {
      console.log('Creating checkout session...');
      await createCheckoutSession({
        productType: 'vciso-kit',
        successUrl: `${window.location.origin}/purchase-success`,
        cancelUrl: window.location.href,
      });
      console.log('Checkout session created, redirecting...');
      // Note: If successful, user will be redirected, so we don't set loading to false
    } catch (error) {
      console.error('Checkout error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to start checkout. Please try again or contact support.';
      
      // Show user-friendly error with option to use Gumroad
      const useGumroad = confirm(
        `Stripe checkout is currently unavailable.\n\nError: ${errorMessage}\n\nWould you like to use Gumroad checkout instead?`
      );
      
      if (useGumroad) {
        window.open('https://gumroad.com/ermits/vciso-kit', '_blank');
      }
      
      setLoading(false);
    }
  };

  const handleProfessionalPurchase = async () => {
    setProfessionalLoading(true);
    
    // Always try Stripe first (even if Price ID is placeholder - API will handle validation)
    try {
      await createCheckoutSession({
        productType: 'vciso-professional',
        successUrl: `${window.location.origin}/purchase-success`,
        cancelUrl: window.location.href,
      });
      // If successful, user will be redirected, so we don't set loading to false
      return;
    } catch (error) {
      console.error('Stripe checkout error:', error);
      
      // Fallback to Gumroad if Stripe failed
      setProfessionalLoading(false);
      const errorMessage = error instanceof Error ? error.message : 'Stripe checkout is currently unavailable';
      const useGumroad = confirm(`${errorMessage}\n\nWould you like to use Gumroad checkout instead?`);
      
      if (useGumroad) {
        window.open('https://gumroad.com/ermits/vciso-professional', '_blank');
      }
    }
  };
  const [workflowStep, setWorkflowStep] = useState(0);

  // Workflow Steps
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
          <div className="inline-block px-4 py-2 bg-navy/20 rounded-full mb-6">
            <span className="text-navy dark:text-silver font-semibold">Interactive vCISO Toolkit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            vCISO Starter Kit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            Self-service toolkit with 37+ professional templates, playbooks, and delivery guides for vCISO practitioners
          </p>
          
          {/* Price Badge */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-4xl font-bold text-navy dark:text-silver">$299</div>
            <div className="text-gray-600 dark:text-gray-400">One-time purchase</div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: Briefcase },
              { id: 'templates', label: 'Template Library', icon: FileText },
              { id: 'workflow', label: 'Delivery Guides', icon: Activity }
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
                  { value: '4', label: 'Template Categories', icon: Target },
                  { value: 'Instant', label: 'Digital Download', icon: Zap },
                  { value: '$299', label: 'One-Time Purchase', icon: DollarSign }
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
                  What's Included in the Toolkit
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      title: '37+ Professional Templates',
                      description: 'Ready-to-use templates for all vCISO service delivery needs',
                      icon: FileText
                    },
                    {
                      title: 'Service Delivery Guides',
                      description: 'Complete workflows and processes for vCISO engagements',
                      icon: Activity
                    },
                    {
                      title: 'ERMITS Platform Integration',
                      description: 'Guides for integrating ERMITS platforms into your services',
                      icon: Settings
                    },
                    {
                      title: 'Board Presentation Templates',
                      description: 'Executive-ready presentation templates for board meetings',
                      icon: Briefcase
                    },
                    {
                      title: 'Policy Templates & Frameworks',
                      description: 'Comprehensive policy templates and governance frameworks',
                      icon: CheckSquare
                    },
                    {
                      title: 'Instant Digital Download',
                      description: 'Get immediate access after purchase - no waiting',
                      icon: Download
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
                          <h3 className="text-lg font-bold mb-2 dark:text-white">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Why This Toolkit */}
              <Card variant="glass" padding="lg" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Why Choose the vCISO Starter Kit?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Save Time & Effort',
                      description: 'Skip creating templates from scratch - use proven, professional formats',
                      icon: Clock
                    },
                    {
                      title: 'Professional Quality',
                      description: 'Board-ready templates used by experienced vCISO practitioners',
                      icon: CheckCircle
                    },
                    {
                      title: 'Complete Coverage',
                      description: 'Everything you need for vCISO service delivery in one package',
                      icon: Target
                    },
                    {
                      title: 'ERMITS Integration',
                      description: 'Includes guides for integrating ERMITS platforms into your services',
                      icon: Settings
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

              {/* Upgrade CTA */}
              <Card variant="glass" padding="lg" className="mb-12 bg-gradient-to-r from-gold/10 to-navy/10 border-2 border-gold/30">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Need More? Upgrade to Professional Kit</h3>
                    <p className="text-gray-600 dark:text-gray-200 mb-4">
                      Get everything in Starter Kit PLUS complete vCISO delivery workflow guide, service delivery methodology, client engagement templates, and ERMITS platform integration workflows.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-200">
                      <li>✓ All Starter Kit templates ($299 value)</li>
                      <li>✓ Complete 4-step delivery workflow guide</li>
                      <li>✓ Client engagement & onboarding templates</li>
                      <li>✓ ERMITS platform integration workflows</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-navy dark:text-white">$499</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">One-time purchase</div>
                    </div>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleProfessionalPurchase}
                      disabled={professionalLoading}
                      icon={<ArrowRight size={18} />}
                      iconPosition="right"
                    >
                      {professionalLoading ? 'Processing...' : 'Upgrade to Professional'}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate('/vciso-professional')}
                      className="text-navy dark:text-silver"
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Workflow Tab - Locked Content with Preview */}
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
                  <h2 className="text-3xl font-bold mb-2 dark:text-white">vCISO Delivery Workflow</h2>
                  <p className="text-gray-600 dark:text-gray-200 mb-4">
                    Complete guide through the vCISO service delivery process
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold font-semibold mb-4">
                    <Lock size={16} />
                    <span>Full workflow guide included in Professional Kit</span>
                  </div>
                </div>

                {/* Preview - First Step Only */}
                <Card variant="glass" padding="lg" className="relative">
                  {/* Locked Overlay for steps beyond first */}
                  {workflowStep > 0 && (
                    <div className="absolute inset-0 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm z-10 rounded-lg flex items-center justify-center">
                      <div className="text-center p-8">
                        <Lock size={48} className="text-navy dark:text-silver mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2 dark:text-white">Unlock Full Workflow Guide</h3>
                        <p className="text-gray-600 dark:text-gray-200 mb-6 max-w-md">
                          Get access to all 4 workflow steps, complete service delivery methodology, client engagement templates, and ERMITS platform integration guides.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button
                            variant="primary"
                            size="lg"
                            onClick={handleProfessionalPurchase}
                            disabled={professionalLoading}
                            icon={<ArrowRight size={18} />}
                            iconPosition="right"
                          >
                            {professionalLoading ? 'Processing...' : 'Upgrade to Professional Kit - $499'}
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => navigate('/vciso-professional')}
                          >
                            Learn More
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                          Includes Starter Kit ($299 value) + Complete Workflow Guide
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step Navigation */}
                  <div className="flex justify-center gap-4 mb-8 overflow-x-auto pb-4">
                    {workflowSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setWorkflowStep(index)}
                        className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all relative ${
                          workflowStep === index
                            ? 'bg-navy text-white'
                            : index > 0
                            ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-navy/10'
                        }`}
                        disabled={index > 0}
                      >
                        Step {index + 1}
                        {index > 0 && (
                          <Lock size={12} className="absolute -top-1 -right-1 text-gold" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Current Step Display - Only First Step Visible */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={workflowStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
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
                          {workflowStep === 0 && <span className="ml-2 text-green-600">(Preview)</span>}
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
                        {workflowStep === 0 ? (
                          <Button
                            variant="primary"
                            onClick={handleProfessionalPurchase}
                            disabled={professionalLoading}
                            icon={<Lock size={16} />}
                            iconPosition="right"
                          >
                            {professionalLoading ? 'Processing...' : 'Unlock All Steps - Upgrade to Professional'}
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            onClick={() => setWorkflowStep(Math.min(workflowSteps.length - 1, workflowStep + 1))}
                            disabled={workflowStep === workflowSteps.length - 1}
                            icon={<ArrowRight size={16} />}
                            iconPosition="right"
                          >
                            Next Step
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </Card>

                {/* Upgrade CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8"
                >
                  <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy to-dark text-white">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">Unlock Complete vCISO Delivery Workflow</h3>
                      <p className="text-silver mb-6">
                        Get the Professional Kit and access all 4 workflow steps, complete methodology, client engagement templates, and ERMITS integration guides.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <div className="text-left">
                          <div className="text-sm text-silver/80 mb-1">Professional Kit includes:</div>
                          <div className="text-sm">✓ Starter Kit ($299 value)</div>
                          <div className="text-sm">✓ Complete Workflow Guide</div>
                          <div className="text-sm">✓ Service Delivery Methodology</div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <Button
                            variant="secondary"
                            size="lg"
                            onClick={handleProfessionalPurchase}
                            disabled={professionalLoading}
                            className="bg-white text-navy hover:bg-silver font-semibold"
                            icon={<ArrowRight size={18} />}
                            iconPosition="right"
                          >
                            {professionalLoading ? 'Processing...' : 'Get Professional Kit - $499'}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate('/vciso-professional')}
                            className="text-white hover:bg-white/10"
                          >
                            View Full Details →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
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
                <h2 className="text-3xl font-bold mb-2 dark:text-white">Template Library</h2>
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

              <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy to-dark text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Get the Complete vCISO Starter Kit</h3>
                <p className="text-silver mb-1 text-lg font-semibold">$299 - One-Time Purchase</p>
                <p className="text-silver/90 mb-6 text-sm">
                  Instant digital download • 37+ templates • All delivery guides included
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={(e) => handlePurchase(e)}
                    disabled={loading}
                    icon={<Download size={18} />}
                    iconPosition="right"
                    className="bg-white text-navy hover:bg-silver"
                    type="button"
                  >
                    {loading ? 'Processing...' : 'Purchase Now - $299'}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://gumroad.com/ermits/vciso-kit', '_blank')}
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                    icon={<Download size={18} />}
                    iconPosition="right"
                  >
                    Buy on Gumroad
                  </Button>
                </div>
                <p className="text-silver/70 text-xs mt-4">
                  Secure checkout • Instant access • Lifetime updates
                </p>
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
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-navy dark:to-navy-dark">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Purchase?</h3>
            <p className="text-blue-50 dark:text-silver mb-6">
              Get instant access to 37+ professional templates and delivery guides
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={(e) => handlePurchase(e)}
                disabled={loading}
                icon={<Download size={18} />}
                iconPosition="right"
                className="bg-white text-navy hover:bg-gray-100 dark:bg-white dark:text-navy dark:hover:bg-silver font-semibold shadow-lg transition-colors"
                type="button"
              >
                {loading ? 'Processing...' : 'Buy Now - $299'}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://gumroad.com/ermits/vciso-kit', '_blank')}
                className="bg-white/20 text-white border-white/40 hover:bg-white/30 dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20 font-semibold transition-colors"
                icon={<Download size={18} />}
                iconPosition="right"
              >
                Buy on Gumroad
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/services')}
                className="bg-white/20 text-white border-white/40 hover:bg-white/30 dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20 font-semibold transition-colors"
              >
                View All Services
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

export default VcisoKit;