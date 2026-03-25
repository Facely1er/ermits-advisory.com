import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Mail, Send, AlertCircle, CheckCircle,
  Briefcase, User, MessageSquare
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { contactService } from '../services/localDataService';

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const interestParam = searchParams.get('interest') || '';
  const typeParam = searchParams.get('type') || 'contact'; // 'contact' or 'quote'
  const { t } = useTranslation();
  
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    service: serviceParam, // Pre-fill from URL
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Service options for quote requests
  const serviceOptions = [
    { value: '', label: t('contact.services.select') },
    { value: 'rapid-steel', label: t('contact.services.rapidSteel') },
    { value: 'comprehensive-steel', label: t('contact.services.comprehensiveSteel') },
    { value: 'industry-steel', label: t('contact.services.industrySteel') },
    { value: 'compliance-readiness', label: t('contact.services.complianceReadiness') },
    { value: 'audit-preparation', label: t('contact.services.auditPreparation') },
    { value: 'strategic-vciso', label: t('contact.services.strategicVciso') },
    { value: 'operational-vciso', label: t('contact.services.operationalVciso') },
    { value: 'executive-vciso', label: t('contact.services.executiveVciso') },
    { value: 'security-program', label: t('contact.services.securityProgram') },
    { value: 'risk-management', label: t('contact.services.riskManagement') },
    { value: 'board-governance', label: t('contact.services.boardGovernance') },
    { value: 'vendor-risk', label: t('contact.services.vendorRisk') },
    { value: 'incident-response', label: t('contact.services.incidentResponse') },
    { value: 'other', label: t('contact.services.other') }
  ];

  // Update page title based on type
  useEffect(() => {
    if (typeParam === 'quote' && serviceParam) {
      const serviceName = serviceOptions.find(s => s.value === serviceParam)?.label || serviceParam;
      document.title = `Request Quote - ${serviceName} | ERMITS Advisory`;
    } else if (typeParam === 'quote') {
      document.title = 'Request a Quote | ERMITS Advisory';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeParam, serviceParam]);

  // Update service when URL param changes
  useEffect(() => {
    if (serviceParam) {
      setFormState(prev => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  // Pre-fill message for toolkit / product purchase intents (e.g. Stripe checkout request)
  useEffect(() => {
    if (!interestParam) return;
    const decoded = decodeURIComponent(interestParam.replace(/\+/g, ' '));
    setFormState((prev) => {
      if (prev.message.trim()) return prev;
      return {
        ...prev,
        message: `${decoded}\n\nPlease send me a Stripe checkout link to complete this purchase.`,
      };
    });
  }, [interestParam]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Required fields
    if (!formState.name.trim()) {
      newErrors.name = t('contact.validation.nameRequired');
    }
    
    if (!formState.email.trim()) {
      newErrors.email = t('contact.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = t('contact.validation.emailInvalid');
    }
    
    if (!formState.company.trim()) {
      newErrors.company = t('contact.validation.companyRequired');
    }
    
    if (!formState.message.trim()) {
      newErrors.message = t('contact.validation.messageRequired');
    } else if (formState.message.length < 10) {
      newErrors.message = t('contact.validation.messageMinLength');
    }
    
    // Require service for quote requests
    if (typeParam === 'quote' && !formState.service.trim()) {
      newErrors.service = t('contact.validation.serviceRequired');
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
      // Include service information in message for quote requests
      const messageText = typeParam === 'quote' && formState.service
        ? `Service: ${serviceOptions.find(s => s.value === formState.service)?.label || formState.service}\n\n${formState.message}`
        : formState.message;
      
      await contactService.submitContact({
        name: formState.name,
        email: formState.email,
        company: formState.company,
        message: messageText
      });
      
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {typeParam === 'quote' ? t('contact.hero.titleQuote') : t('contact.hero.titleContact')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            {typeParam === 'quote' 
              ? t('contact.hero.subtitleQuote')
              : t('contact.hero.subtitleContact')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">
                {typeParam === 'quote' ? t('contact.form.titleQuote') : t('contact.form.titleContact')}
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-900 rounded-lg flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-400">{t('contact.status.successTitle')}</h3>
                    <p className="text-green-700 dark:text-green-300">{t('contact.status.successMessage')}</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-900 rounded-lg flex items-start">
                  <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-400">{t('contact.status.errorTitle')}</h3>
                    <p className="text-red-700 dark:text-red-300">{t('contact.status.errorMessage')}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.name')} *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white`}
                        placeholder={t('contact.form.placeholderName')}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.email')} *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white`}
                        placeholder={t('contact.form.placeholderEmail')}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.company')} *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.company ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white`}
                        placeholder={t('contact.form.placeholderCompany')}
                      />
                    </div>
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                    )}
                  </div>
                  
                  {/* Service Selection Field (for quote requests) */}
                  {typeParam === 'quote' && (
                    <div className="md:col-span-2">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t('contact.form.service')} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Briefcase size={18} className="text-gray-400" />
                        </div>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border ${errors.service ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white`}
                        >
                          {serviceOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.service}</p>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.message')} *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare size={18} className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2 border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white`}
                      placeholder={typeParam === 'quote' ? t('contact.form.placeholderMessageQuote') : t('contact.form.placeholderMessageContact')}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    * {t('contact.form.required')}
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                    icon={<Send size={16} />}
                    iconPosition="right"
                  >
                    {typeParam === 'quote' ? t('contact.form.buttonQuote') : t('contact.form.buttonContact')}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card variant="glass" padding="lg" className="h-full">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('contact.info.title')}</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-navy dark:bg-navy/80 rounded-full flex items-center justify-center mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{t('contact.info.emailTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('contact.info.emailDescription')}</p>
                    <a href="mailto:advisory@ermits.com" className="text-navy dark:text-silver font-medium hover:underline">
                      advisory@ermits.com
                    </a>
                  </div>
                </div>
                
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('contact.faq.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('contact.faq.q1.question')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{t('contact.faq.q1.answer')}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('contact.faq.q2.question')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{t('contact.faq.q2.answer')}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('contact.faq.q3.question')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{t('contact.faq.q3.answer')}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('contact.faq.q4.question')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{t('contact.faq.q4.answer')}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
