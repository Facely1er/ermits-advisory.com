import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Mail, Send, AlertCircle, CheckCircle, ArrowRight, ArrowLeft, Shield
} from 'lucide-react';
import { contactService } from '../services/localDataService';

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  primaryConcern: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

type OnboardingData = {
  role: string;
  primaryConcern: string;
  organizationContext: string;
};

export const ContactPage: React.FC = () => {
  const [mode, setMode] = useState<'demo' | 'form'>('demo');
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    role: '',
    primaryConcern: '',
    organizationContext: ''
  });
  
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    role: '',
    primaryConcern: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const roleOptions = [
    { value: '', label: 'Select your role...' },
    { value: 'board', label: 'Board' },
    { value: 'c-suite', label: 'C-Suite' },
    { value: 'risk-compliance', label: 'Risk/Compliance' },
    { value: 'legal', label: 'Legal' },
    { value: 'investor', label: 'Investor' },
    { value: 'other', label: 'Other' }
  ];

  const concernOptions = [
    { value: '', label: 'Select primary concern...' },
    { value: 'regulatory-exposure', label: 'Regulatory exposure' },
    { value: 'board-liability', label: 'Board liability / governance' },
    { value: 'vendor-supply-chain', label: 'Vendor & supply chain risk' },
    { value: 'investment-ma', label: 'Investment / M&A diligence' },
    { value: 'other', label: 'Other' }
  ];

  const handleOnboardingChange = (field: keyof OnboardingData, value: string) => {
    setOnboardingData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleOnboardingComplete = () => {
    // Pre-fill form with onboarding data
    setFormState(prev => ({
      ...prev,
      role: onboardingData.role,
      primaryConcern: onboardingData.primaryConcern,
      message: `Role: ${roleOptions.find(r => r.value === onboardingData.role)?.label || onboardingData.role}\nPrimary Concern: ${concernOptions.find(c => c.value === onboardingData.primaryConcern)?.label || onboardingData.primaryConcern}\n\n${onboardingData.organizationContext || ''}`
    }));
    setMode('form');
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.company.trim()) {
      newErrors.company = 'Company is required';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await contactService.submitContact({
        name: formState.name,
        email: formState.email,
        company: formState.company,
        message: formState.message
      });
      
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        company: '',
        role: '',
        primaryConcern: '',
        message: ''
      });
      setOnboardingData({
        role: '',
        primaryConcern: '',
        organizationContext: ''
      });
      setCurrentStep(1);
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderOnboardingStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <Shield size={48} className="mx-auto mb-6 text-navy dark:text-silver" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
              Welcome to STEEL Executive Diagnostic
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              This interactive demo will walk you through how STEEL works and help us understand your needs. 
              You'll see key concepts, explore the six PESTEL dimensions, and preview what you would receive.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              This takes about 3-5 minutes.
            </p>
          </div>
        );
      
      case 2:
        return (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
              Understanding STEEL
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">What STEEL Does</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  STEEL is a decision-grade diagnostic that evaluates risk across six dimensions: Political, Economic, Social, Technological, Environmental, and Legal. It does not count controls or tools—instead, it reveals structural asymmetries that traditional audits miss.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">Sample Output</h3>
                <Card className="p-4 bg-silver-light dark:bg-dark-surface">
                  <div className="space-y-2 text-sm">
                    <div><strong>STEEL Classification:</strong> Imbalanced</div>
                    <div><strong>Six-Dimension Scores:</strong> Political (65), Economic (72), Social (58), Technological (81), Environmental (45), Legal (69)</div>
                    <div><strong>Structural Asymmetries:</strong> 1) Privacy governance lags technology adoption, 2) Supply chain risk not mapped to geopolitical exposure</div>
                    <div><strong>Enterprise Priorities:</strong> 1) Establish privacy-by-design program, 2) Map vendor stack to geopolitical risk zones, 3) Board-level cyber risk reporting</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
              Tell Us About Your Needs
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="onboarding-role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Role *
                </label>
                <select
                  id="onboarding-role"
                  value={onboardingData.role}
                  onChange={(e) => handleOnboardingChange('role', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white"
                >
                  {roleOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="onboarding-concern" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Primary Concern *
                </label>
                <select
                  id="onboarding-concern"
                  value={onboardingData.primaryConcern}
                  onChange={(e) => handleOnboardingChange('primaryConcern', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white"
                >
                  {concernOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="onboarding-context" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Organization Context (optional)
                </label>
                <textarea
                  id="onboarding-context"
                  value={onboardingData.organizationContext}
                  onChange={(e) => handleOnboardingChange('organizationContext', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white"
                  placeholder="Tell us about your organization size, industry, or specific challenges..."
                />
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
              What You Would Receive
            </h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">Based on your inputs:</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>STEEL classification (Exposed, Reactive, Imbalanced, Aligned, or Resilient)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Six-dimension radar and scores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Up to 3 structural asymmetries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>3-5 enterprise priorities for the next 12-24 months</span>
                  </li>
                </ul>
              </Card>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ready to schedule your STEEL Briefing? We'll collect your contact information on the next step.
              </p>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
              Request STEEL Briefing
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We'll use the information below to schedule your briefing. You can edit any fields.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md dark:bg-dark-surface dark:text-white`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md dark:bg-dark-surface dark:text-white`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleFormChange}
                  className={`w-full px-4 py-2 border ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md dark:bg-dark-surface dark:text-white`}
                  placeholder="Acme Corp"
                />
                {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleFormChange}
                  rows={5}
                  className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md dark:bg-dark-surface dark:text-white`}
                  placeholder="Additional details about your needs..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Request STEEL Briefing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            Book a STEEL executive session, governance briefing, or discuss regulatory and investor diligence support.
          </p>
        </motion.div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-surface p-1">
            <button
              onClick={() => {
                setMode('demo');
                setCurrentStep(1);
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === 'demo'
                  ? 'bg-navy text-white dark:bg-silver dark:text-navy'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg'
              }`}
            >
              Interactive Demo
            </button>
            <button
              onClick={() => setMode('form')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === 'form'
                  ? 'bg-navy text-white dark:bg-silver dark:text-navy'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-bg'
              }`}
            >
              Quick Contact Form
            </button>
          </div>
        </div>

        {mode === 'demo' ? (
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Step {currentStep} of 5
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {Math.round((currentStep / 5) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-navy dark:bg-silver h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / 5) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[400px]"
              >
                {renderOnboardingStep()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                icon={<ArrowLeft size={16} />}
              >
                Previous
              </Button>
              {currentStep < 5 ? (
                <Button
                  variant="primary"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 3 && (!onboardingData.role || !onboardingData.primaryConcern))
                  }
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleOnboardingComplete}
                  icon={<Send size={16} />}
                  iconPosition="right"
                >
                  Complete & Submit
                </Button>
              )}
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card variant="glass" padding="lg">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">
                  Send Us a Message
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-900 rounded-lg flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-800 dark:text-green-400">Message Sent Successfully!</h3>
                      <p className="text-green-700 dark:text-green-300">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-900 rounded-lg flex items-start">
                    <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-800 dark:text-red-400">Error Sending Message</h3>
                      <p className="text-red-700 dark:text-red-300">Please try again or contact us directly</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleFormChange}
                        className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md dark:bg-dark-surface dark:text-white`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleFormChange}
                        className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md dark:bg-dark-surface dark:text-white`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleFormChange}
                        className={`w-full px-4 py-2 border ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md dark:bg-dark-surface dark:text-white`}
                        placeholder="Acme Corp"
                      />
                      {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formState.role}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-dark-surface dark:text-white"
                      >
                        {roleOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="primaryConcern" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Primary Concern
                      </label>
                      <select
                        id="primaryConcern"
                        name="primaryConcern"
                        value={formState.primaryConcern}
                        onChange={handleFormChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-dark-surface dark:text-white"
                      >
                        {concernOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md dark:bg-dark-surface dark:text-white`}
                      placeholder="Tell us about your security needs..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      * Required fields
                    </p>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={isSubmitting}
                      icon={<Send size={16} />}
                      iconPosition="right"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card variant="glass" padding="lg" className="h-full">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 bg-navy dark:bg-navy/80 rounded-full flex items-center justify-center mr-4">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">Send us an email anytime</p>
                      <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver font-medium hover:underline">
                        advisory@ermits.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
