import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowRight, CheckCircle, FileText, Clock, 
  Target, Settings,
  Activity, CheckSquare,
  Briefcase
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const VcisoKit: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'services'>('overview');
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
        'STEEL™ assessment',
        'Gap analysis',
        'Platform deployment',
        'User training'
      ],
      deliverables: ['30-day assessment report', 'STEEL™ score baseline', 'Gap analysis', '90-day roadmap']
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


  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-16 text-center"
        >
          <div className="inline-block px-4 py-2 bg-navy/20 rounded-full mb-6">
            <span className="text-navy dark:text-silver font-semibold">Strategic Cyber Governance & Stewardship</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            vCISO Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            ERMITS Advisory provides strategic cyber governance and stewardship through expert virtual CISO leadership, comprehensive risk assessments, and executive-ready guidance tailored to your organization's unique risk profile.
          </p>
          
          {/* Service Focus */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-4xl font-bold text-navy dark:text-silver">Strategic Advisory</div>
            <div className="text-gray-600 dark:text-gray-400">Expert Governance Services</div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: Briefcase },
              { id: 'services', label: 'Service Approach', icon: FileText },
              { id: 'workflow', label: 'Engagement Model', icon: Activity }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overview' | 'workflow' | 'services')}
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
                  { value: 'Strategic', label: 'Governance Leadership', icon: Briefcase },
                  { value: 'STEEL™', label: 'Risk Assessment', icon: Target },
                  { value: 'Executive', label: 'Board-Ready Guidance', icon: FileText },
                  { value: 'Ongoing', label: 'Continuous Stewardship', icon: Activity }
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
                  Strategic Governance Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      title: 'Strategic Risk Assessment',
                      description: 'Comprehensive STEEL™ framework assessments to identify and prioritize cyber risks',
                      icon: Target
                    },
                    {
                      title: 'Executive Leadership',
                      description: 'Virtual CISO leadership providing strategic guidance and board-ready insights',
                      icon: Briefcase
                    },
                    {
                      title: 'Governance Framework Development',
                      description: 'Establish and mature your cyber governance program with expert guidance',
                      icon: Settings
                    },
                    {
                      title: 'Board & Executive Reporting',
                      description: 'Executive-ready briefings and strategic recommendations for leadership',
                      icon: FileText
                    },
                    {
                      title: 'Compliance Advisory',
                      description: 'Strategic compliance guidance aligned with your risk profile and business objectives',
                      icon: CheckSquare
                    },
                    {
                      title: 'Platform Integration Support',
                      description: 'Strategic guidance on implementing ERMITS platform solutions for operational excellence',
                      icon: Activity
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

              {/* Why ERMITS Advisory */}
              <Card variant="glass" padding="lg" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Why Choose ERMITS Advisory for vCISO Services?</h2>
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-navy dark:text-white">Our vCISO role operates on top of the STEEL™ evaluation layer and the broader ERMITS ecosystem, using internal frameworks and playbooks as instruments—not as standalone products.</strong> We provide fractional security leadership and governance oversight through strategic stewardship, not product delivery.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Strategic Intelligence',
                      description: 'STEEL™ framework provides data-driven risk intelligence, not generic checklists',
                      icon: Target
                    },
                    {
                      title: 'Executive-Ready Guidance',
                      description: 'Board-level strategic recommendations tailored to your organization\'s unique risk profile',
                      icon: CheckCircle
                    },
                    {
                      title: 'Platform-Enabled Implementation',
                      description: 'Strategic guidance connected to ERMITS platform solutions for operational execution',
                      icon: Settings
                    },
                    {
                      title: 'Ongoing Stewardship',
                      description: 'Continuous strategic leadership and governance support, not just point-in-time assessments',
                      icon: Clock
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
                  <h2 className="text-3xl font-bold mb-2 dark:text-white">vCISO Engagement Model</h2>
                  <p className="text-gray-600 dark:text-gray-200">
                    Strategic governance engagement model for comprehensive cyber stewardship
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

          {/* Services Tab */}
          {activeTab === 'services' && (
            <motion.div
              key="templates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-8">
                <Briefcase size={48} className="text-navy dark:text-silver mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2 dark:text-white">Service Delivery Approach</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  ERMITS Advisory delivers strategic cyber governance through a structured, outcome-driven engagement model
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-400 text-sm font-semibold">
                  <CheckCircle size={16} />
                  Strategic governance & stewardship services
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {workflowSteps.map((step, stepIndex) => (
                  <Card key={stepIndex} variant="glass" padding="lg">
                    <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center gap-2">
                      <Activity size={20} />
                      {step.title}
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{step.duration}</div>
                    <ul className="space-y-2">
                      {step.activities.slice(0, 3).map((activity, itemIndex) => (
                        <li key={itemIndex} className="border-l-2 border-navy pl-4">
                          <div className="text-sm dark:text-white">{activity}</div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>

              <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy to-dark text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Strategic Cyber Governance Services</h3>
                <p className="text-silver mb-1 text-lg font-semibold">Expert Advisory & Stewardship</p>
                <p className="text-silver/90 mb-6 text-sm">
                  Comprehensive risk assessment • Executive leadership • Ongoing strategic guidance
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate('/contact')}
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                    className="bg-white text-navy hover:bg-silver"
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate('/services')}
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    View All Services
                  </Button>
                </div>
                <p className="text-silver/70 text-xs mt-4">
                  Strategic governance • Platform integration • Executive-ready outcomes
                </p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STEEL Evaluation Entry Point Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-gold/10 to-navy/10 dark:from-gold/20 dark:to-navy/20 border border-gold/30 dark:border-gold/50">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">vCISO Engagement Entry Point</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Most ERMITS vCISO engagements begin with a STEEL™ Evaluation that establishes
              the initial STEEL™ Index and governance roadmap.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/steel-evaluation')}
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="bg-navy text-white hover:bg-navy-dark dark:bg-gold dark:text-navy dark:hover:bg-gold/90 font-semibold shadow-lg transition-colors"
            >
              Request a STEEL™ Evaluation
            </Button>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-navy dark:to-navy-dark">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Strategic Cyber Governance?</h3>
            <p className="text-blue-50 dark:text-silver mb-6">
              ERMITS Advisory provides strategic intelligence and executive-ready guidance through comprehensive risk assessments, vCISO services, and compliance advisory
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="bg-white text-navy hover:bg-gray-100 dark:bg-white dark:text-navy dark:hover:bg-silver font-semibold shadow-lg transition-colors"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/services')}
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-navy font-semibold transition-colors"
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