import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Shield, ArrowLeft, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvisoryPrivacyRequestPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    requestType: '',
    jurisdiction: '',
    description: '',
    verificationInfo: '',
    services: [] as string[],
    consent: false,
    privacyPolicy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'service') {
        const serviceValue = (e.target as HTMLInputElement).value;
        setFormData(prev => ({
          ...prev,
          services: checked
            ? [...prev.services, serviceValue]
            : prev.services.filter(s => s !== serviceValue)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build email
    const subject = encodeURIComponent(`Privacy Rights Request - Advisory Services - ${formData.requestType || 'General'}`);
    let body = encodeURIComponent(`ERMITS Advisory Services Privacy Rights Request\n\n`);
    body += encodeURIComponent(`Request Type: ${formData.requestType || 'Not specified'}\n`);
    body += encodeURIComponent(`Full Name: ${formData.fullName}\n`);
    body += encodeURIComponent(`Email: ${formData.email}\n`);
    body += encodeURIComponent(`Phone: ${formData.phone || 'Not provided'}\n`);
    body += encodeURIComponent(`Address: ${formData.address || 'Not provided'}\n`);
    body += encodeURIComponent(`Jurisdiction: ${formData.jurisdiction || 'Not specified'}\n`);
    body += encodeURIComponent(`Description: ${formData.description}\n`);
    body += encodeURIComponent(`Verification Info: ${formData.verificationInfo || 'Not provided'}\n`);
    body += encodeURIComponent(`Services: ${formData.services.length > 0 ? formData.services.join(', ') : 'Not specified'}\n`);
    
    // Open email client
    window.location.href = `mailto:privacy@ermits.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Card variant="glass" padding="lg" className="max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-navy dark:text-white">Request Submitted</h1>
              <p className="text-gray-600 dark:text-gray-200 mb-6">
                Your privacy rights request has been prepared. Please check your email client to send the message.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                If your email client didn't open automatically, please send an email to{' '}
                <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">
                  privacy@ermits.com
                </a>{' '}
                with the subject "Privacy Rights Request - Advisory Services".
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/advisory/privacy">
                  <Button variant="outline">Back to Privacy Policy</Button>
                </Link>
                <Button onClick={() => setSubmitted(false)}>Submit Another Request</Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/advisory/privacy" className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Back to Privacy Policy
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">Advisory Services Privacy Rights Request</h1>
          <p className="text-lg text-gray-600 dark:text-gray-100 mb-4">
            Exercise your privacy rights related to ERMITS Advisory Services under GDPR, CCPA/CPRA, and other applicable privacy regulations.
          </p>
        </motion.div>

        {/* Information Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white mb-4">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Shield size={32} />
              </div>
              <div className="flex-1">
                <p className="text-sm mb-2">
                  <strong>Looking for a Data Subject Access Request (DSAR)?</strong> If you specifically need to request access to your personal data under GDPR Article 15, use our dedicated <Link to="/advisory/dsar" className="underline hover:no-underline font-semibold">DSAR form</Link> instead.
                </p>
              </div>
            </div>
          </Card>

          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Shield size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3">What You Need to Know</h2>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Response Timeline:</strong> Initial response within 10 business days, complete response within 30-45 days.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>No Cost:</strong> First two requests per year are free. Additional requests may incur reasonable fees if excessive or manifestly unfounded.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Identity Verification:</strong> We may need to verify your identity to protect your privacy and comply with legal requirements.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Advisory-Specific:</strong> This form is for requests related to ERMITS Advisory Services. For product-related requests, use the main <a href="https://www.ermits.com/privacy-request" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">privacy request form</a>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Privacy Rights Request Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">1. Your Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Mailing Address (Optional)
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver resize-y"
                    rows={3}
                    placeholder="Street address, City, State, ZIP Code, Country"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Required for certain types of requests or identity verification
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Request Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">2. Request Type</h2>
              <div className="space-y-3">
                {[
                  { value: 'access', label: 'Right to Access', description: 'Request copies of all information we hold about you or your organization' },
                  { value: 'deletion', label: 'Right to Deletion', description: 'Request deletion of information (subject to legal/professional requirements)' },
                  { value: 'rectification', label: 'Right to Rectification', description: 'Correct inaccurate information in our records' },
                  { value: 'portability', label: 'Right to Data Portability (GDPR)', description: 'Request your data in a structured, machine-readable format' },
                  { value: 'objection', label: 'Right to Object (GDPR)', description: 'Object to processing of your personal information' },
                  { value: 'restriction', label: 'Right to Restriction (GDPR)', description: 'Request restriction of processing of your personal information' },
                  { value: 'other', label: 'Other Request', description: 'Describe your specific privacy request' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      formData.requestType === option.value
                        ? 'border-navy dark:border-silver bg-navy/10 dark:bg-silver/10'
                        : 'border-gray-300 dark:border-gray-600 hover:border-navy dark:hover:border-silver'
                    }`}
                  >
                    <input
                      type="radio"
                      name="requestType"
                      value={option.value}
                      checked={formData.requestType === option.value}
                      onChange={handleInputChange}
                      className="mt-1 mr-3"
                      required
                    />
                    <div>
                      <div className="font-medium text-navy dark:text-white">{option.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Jurisdiction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">3. Applicable Regulation</h2>
              <div>
                <label htmlFor="jurisdiction" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                  Which privacy regulation applies to your request? <span className="text-red-500">*</span>
                </label>
                <select
                  id="jurisdiction"
                  name="jurisdiction"
                  value={formData.jurisdiction}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                  required
                >
                  <option value="">Select a regulation...</option>
                  <option value="gdpr">GDPR (General Data Protection Regulation) - EU/UK/Switzerland</option>
                  <option value="ccpa">CCPA/CPRA (California Consumer Privacy Act) - California, USA</option>
                  <option value="pipeda">PIPEDA (Personal Information Protection and Electronic Documents Act) - Canada</option>
                  <option value="lgpd">LGPD (Lei Geral de Proteção de Dados) - Brazil</option>
                  <option value="other">Other (Please specify in description)</option>
                </select>
              </div>
            </Card>
          </motion.div>

          {/* Request Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">4. Request Details</h2>
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                  Please provide additional details about your request <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver resize-y"
                  rows={6}
                  required
                  placeholder="Please describe your request in detail. Include any specific information you're looking for, engagement details, timeframes, or other relevant details that will help us process your request efficiently."
                />
              </div>
            </Card>
          </motion.div>

          {/* Identity Verification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">5. Identity Verification</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                To protect your privacy, we may need to verify your identity. Please provide any additional information that may help us verify your identity (e.g., engagement reference number, company name, previous email addresses).
              </p>
              <div>
                <label htmlFor="verificationInfo" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                  Additional Verification Information (Optional)
                </label>
                <textarea
                  id="verificationInfo"
                  name="verificationInfo"
                  value={formData.verificationInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver resize-y"
                  rows={4}
                  placeholder="Any information that may help us verify your identity"
                />
              </div>
            </Card>
          </motion.div>

          {/* Advisory Service Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">6. Advisory Service Information</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Which ERMITS Advisory service(s) does your request relate to? (Select all that apply)
              </p>
              <div className="space-y-2">
                {[
                  { value: 'steel-assessment', label: 'STEEL Strategic Diagnostics' },
                  { value: 'vciso', label: 'vCISO Services' },
                  { value: 'compliance-advisory', label: 'Compliance Advisory' },
                  { value: 'governance-risk', label: 'Governance & Risk Strategy' },
                  { value: 'cybersecurity-advisory', label: 'Cybersecurity Advisory Services' },
                  { value: 'privacy-advisory', label: 'Privacy Advisory Services' },
                  { value: 'vendor-risk-advisory', label: 'Third-Party Risk Management Advisory' },
                  { value: 'multiple', label: 'Multiple Services' },
                  { value: 'unknown', label: 'Not Sure' },
                ].map((service) => (
                  <label key={service.value} className="flex items-center">
                    <input
                      type="checkbox"
                      name="service"
                      value={service.value}
                      checked={formData.services.includes(service.value)}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span className="text-gray-700 dark:text-gray-200">{service.label}</span>
                  </label>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Consent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">7. Consent and Confirmation</h2>
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                    required
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    I confirm that the information provided is accurate and that I am the data subject or an authorized representative. <span className="text-red-500">*</span>
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                    required
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    I have read and understand the{' '}
                    <Link to="/advisory/privacy" className="text-navy dark:text-silver hover:underline">
                      ERMITS Advisory Services Privacy Policy
                    </Link>
                    . <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button type="submit" variant="primary" fullWidth className="flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4" />
              Submit Privacy Request
            </Button>
            <a
              href="mailto:privacy@ermits.com?subject=Privacy Rights Request - Advisory Services"
              className="flex-1"
            >
              <Button type="button" variant="outline" fullWidth>
                Submit via Email Instead
              </Button>
            </a>
          </motion.div>
        </form>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Need Help?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <strong className="text-navy dark:text-white">Email:</strong>{' '}
                <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">
                  privacy@ermits.com
                </a>
              </p>
              <p>
                <strong className="text-navy dark:text-white">Subject Line:</strong> "Privacy Rights Request - Advisory Services - [Your Request Type]"
              </p>
              <p>
                <strong className="text-navy dark:text-white">Response Time:</strong> Initial response within 10 business days, complete response within 30-45 days.
              </p>
              <p className="pt-2 border-t border-gray-300 dark:border-gray-600">
                <strong className="text-navy dark:text-white">Data Protection Officer (EU/UK/Swiss):</strong> For GDPR-specific inquiries, you can also contact our DPO at{' '}
                <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">
                  privacy@ermits.com
                </a>{' '}
                with subject "GDPR Inquiry - Advisory Services".
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

