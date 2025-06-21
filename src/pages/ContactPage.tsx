import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Mail, Phone, MapPin, Send, AlertCircle, CheckCircle,
  Briefcase, User, MessageSquare
} from 'lucide-react';
import { contactService } from '../services/localDataService';

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      newErrors.name = t('contact.form.errors.nameRequired');
    }
    
    if (!formState.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }
    
    if (!formState.company.trim()) {
      newErrors.company = t('contact.form.errors.companyRequired');
    }
    
    if (!formState.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    } else if (formState.message.length < 10) {
      newErrors.message = t('contact.form.errors.messageTooShort');
    }
    
    // Phone is optional but validate format if provided
    if (formState.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formState.phone)) {
      newErrors.phone = t('contact.form.errors.phoneInvalid');
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
        phone: formState.phone || undefined,
        message: formState.message
      });
      
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        company: '',
        phone: '',
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
  
  // Animation variants
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

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            {t('contact.subtitle')}
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
              <h2 className="text-2xl font-bold mb-6 dark:text-white">{t('contact.form.title')}</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-900 rounded-lg flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-400">{t('contact.form.successTitle')}</h3>
                    <p className="text-green-700 dark:text-green-300">{t('contact.form.successMessage')}</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-900 rounded-lg flex items-start">
                  <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-400">{t('contact.form.errorTitle')}</h3>
                    <p className="text-red-700 dark:text-red-300">{t('contact.form.errorMessage')}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.nameLabel')} *
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
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.emailLabel')} *
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
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.companyLabel')} *
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
                        placeholder={t('contact.form.companyPlaceholder')}
                      />
                    </div>
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t('contact.form.phoneLabel')}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border ${errors.phone ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white`}
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.messageLabel')} *
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
                      placeholder={t('contact.form.messagePlaceholder')}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    * {t('contact.form.requiredFields')}
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={isSubmitting}
                    icon={<Send size={16} />}
                    iconPosition="right"
                  >
                    {t('contact.form.submitButton')}
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
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-navy dark:bg-navy/80 rounded-full flex items-center justify-center mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{t('contact.info.phoneTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('contact.info.phoneDescription')}</p>
                    <a href="tel:+15551234567" className="text-navy dark:text-silver font-medium hover:underline">
                      +1 (888) 618-6160
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-navy dark:bg-navy/80 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">{t('contact.info.addressTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('contact.info.addressDescription')}</p>
                    <address className="not-italic text-navy dark:text-silver">
                      8300 McCullough Lane, Suite 203 <br />
                      Gaithersburg, MD 20877<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">{t('contact.info.hoursTitle')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600 dark:text-gray-300">{t('contact.info.weekdays')}</div>
                    <div className="text-navy dark:text-silver font-medium">9:00 AM - 6:00 PM EST</div>
                    <div className="text-gray-600 dark:text-gray-300">{t('contact.info.weekends')}</div>
                    <div className="text-navy dark:text-silver font-medium">{t('contact.info.closed')}</div>
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
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('contact.faq.response.title')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{t('contact.faq.response.content')}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('contact.faq.international.title')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{t('contact.faq.international.content')}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('contact.faq.confidentiality.title')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{t('contact.faq.confidentiality.content')}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('contact.faq.preparation.title')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{t('contact.faq.preparation.content')}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};