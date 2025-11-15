import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowRight, CheckCircle, FileText, Clock, 
  DollarSign, TrendingUp, Target, Zap, Settings,
  Activity, CheckSquare, Download,
  ChevronRight, Calculator, Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createCheckoutSession } from '../services/stripe';

export const VcisoKit: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'calculator' | 'workflow' | 'templates'>('overview');
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      await createCheckoutSession({
        productType: 'vciso-kit',
        successUrl: `${window.location.origin}/purchase-success`,
        cancelUrl: window.location.href,
      });
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again or contact support.');
      setLoading(false);
    }
  };
  const [roiInputs, setRoiInputs] = useState({
    companySize: '',
    industry: '',
    currentSpend: '',
    needsLevel: 'strategic'
  });
  const [roiResult, setRoiResult] = useState<{
    fullTimeCost: number;
    vcisoCost: number;
    savings: number;
    savingsPercent: string;
    monthlySavings: string;
  } | null>(null);
  const [workflowStep, setWorkflowStep] = useState(0);

  // vCISO Tiers
  const vcisoTiers = [
    {
      id: 'strategic',
      name: 'Strategic Advisory',
      price: '$8K - $15K',
      hours: '10-15 hrs/month',
      description: 'Executive guidance and board support',
      features: [
        'Monthly executive strategy sessions',
        'Quarterly board presentations',
        'Annual security roadmap',
        'Budget planning support',
        'Vendor evaluation guidance',
        'ERMITS platform strategic oversight'
      ],
      idealFor: 'Organizations needing executive guidance',
      deliverables: [
        'Monthly executive briefing',
        'Quarterly board presentation',
        'Policy reviews and approvals',
        'Strategic recommendations',
        'Platform performance review'
      ]
    },
    {
      id: 'operational',
      name: 'Operational',
      price: '$18K - $35K',
      hours: '25-45 hrs/month',
      description: 'Program management and team leadership',
      features: [
        'All Strategic services',
        'Weekly team meetings',
        'Security program management',
        'Policy development',
        'Incident response oversight',
        'Audit preparation support',
        'ERMITS platform administration'
      ],
      idealFor: 'Organizations building security programs',
      deliverables: [
        'Weekly status updates',
        'Monthly operational reports',
        'Policy documentation',
        'Incident response playbooks',
        'Audit readiness packages',
        'Team performance metrics'
      ]
    },
    {
      id: 'executive',
      name: 'Executive',
      price: '$40K - $70K',
      hours: '80+ hrs/month',
      description: 'Near full-time CISO leadership',
      features: [
        'All Operational services',
        'Daily operations oversight',
        'Direct team leadership',
        'Executive committee participation',
        'Real-time crisis management',
        'Complete ERMITS ecosystem orchestration'
      ],
      idealFor: 'Organizations needing full leadership',
      deliverables: [
        'Daily operational oversight',
        'Weekly executive summaries',
        'Monthly board packages',
        'Real-time incident reporting',
        'Technology strategy documents',
        'Full ecosystem analytics'
      ]
    }
  ];

  // ROI Calculator
  const calculateROI = () => {
    const fullTimeCISO = 450000; // Average full-time CISO cost
    const benefits = 50000; // Benefits and overhead
    
    let vcisoCost = 0;
    if (roiInputs.needsLevel === 'strategic') {
      vcisoCost = 11500 * 12; // Average of range
    } else if (roiInputs.needsLevel === 'operational') {
      vcisoCost = 26500 * 12;
    } else {
      vcisoCost = 55000 * 12;
    }

    const totalFullTime = fullTimeCISO + benefits;
    const annualSavings = totalFullTime - vcisoCost;
    const savingsPercent = ((annualSavings / totalFullTime) * 100).toFixed(1);

    setRoiResult({
      fullTimeCost: totalFullTime,
      vcisoCost: vcisoCost,
      savings: annualSavings,
      savingsPercent: savingsPercent,
      monthlySavings: (annualSavings / 12).toFixed(0)
    });
  };

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
            vCISO Service Toolkit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            Complete interactive toolkit for delivering professional vCISO services with ERMITS platform integration
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: Briefcase },
              { id: 'calculator', label: 'ROI Calculator', icon: Calculator },
              { id: 'workflow', label: 'Delivery Workflow', icon: Activity },
              { id: 'templates', label: 'Templates', icon: FileText }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'calculator' | 'workflow' | 'templates')}
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
                  { value: '60-70%', label: 'Cost Savings vs Full-Time CISO', icon: DollarSign },
                  { value: '80-90%', label: 'Implementation Rate', icon: TrendingUp },
                  { value: '3 Tiers', label: 'Service Options', icon: Target },
                  { value: '24/7', label: 'Platform Support', icon: Zap }
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

              {/* Service Tiers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
                  Choose Your vCISO Tier
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {vcisoTiers.map((tier, index) => (
                    <motion.div
                      key={tier.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card
                        variant="glass"
                        padding="lg"
                        className={`h-full cursor-pointer transition-all ${
                          selectedTier === tier.id
                            ? 'ring-2 ring-navy shadow-xl'
                            : 'hover:shadow-lg'
                        }`}
                        onClick={() => setSelectedTier(selectedTier === tier.id ? null : tier.id)}
                      >
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold mb-2 dark:text-white">{tier.name}</h3>
                          <div className="text-3xl font-bold text-navy dark:text-silver mb-1">
                            {tier.price}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {tier.hours}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-200 mb-4 text-center">
                          {tier.description}
                        </p>
                        <div className="mb-4">
                          <div className="text-sm font-semibold mb-2 dark:text-white">Key Features:</div>
                          <ul className="space-y-2">
                            {tier.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {selectedTier === tier.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                          >
                            <div className="text-sm font-semibold mb-2 dark:text-white">Deliverables:</div>
                            <ul className="space-y-1">
                              {tier.deliverables.map((item, idx) => (
                                <li key={idx} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                  <ChevronRight size={12} className="text-navy mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <Button
                              variant="primary"
                              size="sm"
                              className="w-full mt-4"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTab('calculator');
                              }}
                            >
                              Calculate ROI
                            </Button>
                          </motion.div>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why vCISO */}
              <Card variant="glass" padding="lg" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Why Choose vCISO Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Immediate Expertise',
                      description: 'Get CISO-level leadership without 6-month hiring process',
                      icon: Zap
                    },
                    {
                      title: 'Cost Efficiency',
                      description: '60-70% savings vs full-time CISO with same expertise',
                      icon: DollarSign
                    },
                    {
                      title: 'Platform Integration',
                      description: 'Leverage ERMITS ecosystem for maximum efficiency',
                      icon: Settings
                    },
                    {
                      title: 'Flexible Scaling',
                      description: 'Adjust commitment as your needs evolve',
                      icon: TrendingUp
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

          {/* ROI Calculator Tab */}
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card variant="glass" padding="lg" className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <Calculator size={48} className="text-navy dark:text-silver mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-2 dark:text-white">vCISO ROI Calculator</h2>
                  <p className="text-gray-600 dark:text-gray-200">
                    Compare the cost of vCISO services vs hiring a full-time CISO
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <label htmlFor="company-size" className="block text-sm font-semibold mb-2 dark:text-white">
                      Company Size
                    </label>
                    <select
                      id="company-size"
                      aria-label="Company Size"
                      value={roiInputs.companySize}
                      onChange={(e) => setRoiInputs({ ...roiInputs, companySize: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select size</option>
                      <option value="startup">Startup (10-50 employees)</option>
                      <option value="small">Small (51-200 employees)</option>
                      <option value="medium">Medium (201-1000 employees)</option>
                      <option value="large">Large (1000+ employees)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold mb-2 dark:text-white">
                      Industry
                    </label>
                    <select
                      id="industry"
                      aria-label="Industry"
                      value={roiInputs.industry}
                      onChange={(e) => setRoiInputs({ ...roiInputs, industry: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select industry</option>
                      <option value="tech">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Financial Services</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="current-spend" className="block text-sm font-semibold mb-2 dark:text-white">
                      Current Annual Security Spend (Optional)
                    </label>
                    <input
                      id="current-spend"
                      type="number"
                      value={roiInputs.currentSpend}
                      onChange={(e) => setRoiInputs({ ...roiInputs, currentSpend: e.target.value })}
                      placeholder="Enter amount"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="vciso-tier" className="block text-sm font-semibold mb-2 dark:text-white">
                      Recommended vCISO Tier
                    </label>
                    <select
                      id="vciso-tier"
                      aria-label="Recommended vCISO Tier"
                      value={roiInputs.needsLevel}
                      onChange={(e) => setRoiInputs({ ...roiInputs, needsLevel: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="strategic">Strategic Advisory ($8K-$15K/month)</option>
                      <option value="operational">Operational ($18K-$35K/month)</option>
                      <option value="executive">Executive ($40K-$70K/month)</option>
                    </select>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mb-6"
                  onClick={calculateROI}
                >
                  Calculate ROI
                </Button>

                {roiResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border-2 border-green-500"
                  >
                    <h3 className="text-xl font-bold mb-4 dark:text-white">Your Savings</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Full-Time CISO Cost</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${(roiResult.fullTimeCost / 1000).toFixed(0)}K
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">vCISO Annual Cost</div>
                        <div className="text-2xl font-bold text-navy dark:text-silver">
                          ${(roiResult.vcisoCost / 1000).toFixed(0)}K
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Annual Savings</div>
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        ${(roiResult.savings / 1000).toFixed(0)}K
                      </div>
                      <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                        {roiResult.savingsPercent}% savings
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        Monthly savings: ${roiResult.monthlySavings}
                      </div>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          )}

          {/* Workflow Tab */}
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
                  <p className="text-gray-600 dark:text-gray-200">
                    Interactive guide through the complete vCISO service delivery process
                  </p>
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
                <h2 className="text-3xl font-bold mb-2 dark:text-white">Template Library</h2>
                <p className="text-gray-600 dark:text-gray-200">
                  Professional templates for vCISO service delivery
                </p>
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
                <h3 className="text-2xl font-bold text-white mb-4">Get Full Template Access</h3>
                <p className="text-silver mb-6">
                  Access all templates, playbooks, and delivery guides with the complete vCISO toolkit
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handlePurchase}
                    disabled={loading}
                    icon={<Download size={18} />}
                    iconPosition="right"
                  >
                    {loading ? 'Processing...' : 'Buy with Stripe'}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://gumroad.com/ermits/vciso-kit', '_blank')}
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                    icon={<Download size={18} />}
                    iconPosition="right"
                  >
                    Buy with Gumroad
                  </Button>
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
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-silver mb-6">
              Schedule a consultation to discuss your vCISO needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/services'}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
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
