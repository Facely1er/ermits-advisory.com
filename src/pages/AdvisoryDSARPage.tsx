import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Shield, ArrowLeft, Mail, CheckCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvisoryDSARPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    accountUsername: '',
    previousEmails: '',
    verificationInfo: '',
    dataScope: '',
    specificData: '',
    timePeriod: '',
    formatPreference: 'json',
    services: [] as string[],
    jurisdiction: '',
    additionalNotes: '',
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
    const subject = encodeURIComponent('DSAR Request - Advisory Services - Data Subject Access Request');
    let body = encodeURIComponent('DATA SUBJECT ACCESS REQUEST (DSAR) - ERMITS ADVISORY SERVICES\n\n');
    body += encodeURIComponent('Request Type: Data Subject Access Request (DSAR)\n');
    body += encodeURIComponent(`Full Name: ${formData.fullName}\n`);
    body += encodeURIComponent(`Email: ${formData.email}\n`);
    body += encodeURIComponent(`Phone: ${formData.phone || 'Not provided'}\n`);
    body += encodeURIComponent(`Mailing Address: ${formData.address}\n`);
    body += encodeURIComponent(`Jurisdiction: ${formData.jurisdiction || 'Not specified'}\n`);
    body += encodeURIComponent(`Data Scope: ${formData.dataScope || 'Not specified'}\n`);
    body += encodeURIComponent(`Specific Data: ${formData.specificData || 'Not specified'}\n`);
    body += encodeURIComponent(`Time Period: ${formData.timePeriod || 'Not specified'}\n`);
    body += encodeURIComponent(`Format Preference: ${formData.formatPreference || 'Not specified'}\n`);
    body += encodeURIComponent(`Account Username: ${formData.accountUsername || 'Not provided'}\n`);
    body += encodeURIComponent(`Previous Emails: ${formData.previousEmails || 'Not provided'}\n`);
    body += encodeURIComponent(`Verification Info: ${formData.verificationInfo || 'Not provided'}\n`);
    body += encodeURIComponent(`Services: ${formData.services.length > 0 ? formData.services.join(', ') : 'Not specified'}\n`);
    body += encodeURIComponent(`Additional Notes: ${formData.additionalNotes || 'None'}\n`);
    
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
              <h1 className="text-3xl font-bold mb-4 text-navy dark:text-white">DSAR Request Submitted</h1>
              <p className="text-gray-600 dark:text-gray-200 mb-6">
                Your Data Subject Access Request has been prepared. Please check your email client to send the message.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                If your email client didn't open automatically, please send an email to{' '}
                <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">
                  privacy@ermits.com
                </a>{' '}
                with the subject "DSAR Request - Advisory Services".
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/advisory/privacy">
                  <Button variant="outline">Back to Privacy Policy</Button>
                </Link>
                <Button onClick={() => setSubmitted(false)}>Submit Another DSAR</Button>
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">Data Subject Access Request (DSAR)</h1>
          <p className="text-lg text-gray-600 dark:text-gray-100 mb-4">
            Under GDPR and other privacy regulations, you have the right to request access to your personal data related to ERMITS Advisory Services.
          </p>
        </motion.div>

        {/* What is a DSAR Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <FileText size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-3">What is a Data Subject Access Request (DSAR)?</h2>
                <p className="text-sm mb-3">
                  A DSAR is your right under GDPR Article 15 to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Obtain confirmation that we are processing your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access your personal data and receive a copy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Receive information about how your data is processed, including purposes, categories, recipients, and retention periods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Learn about your rights regarding your personal data</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Information Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-xl font-semibold mb-3 text-navy dark:text-white">Important Information</h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Response Timeline:</strong> We will respond to your DSAR within 30 days (GDPR requirement). Complex requests may be extended by up to 2 months with notification.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Identity Verification:</strong> We must verify your identity before processing your DSAR. This protects your privacy and ensures data security.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>No Cost:</strong> DSARs are free of charge, unless your request is manifestly unfounded or excessive.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span><strong>Format:</strong> You will receive your data in a structured, commonly used, and machine-readable format (typically JSON, CSV, or PDF).</span>
              </li>
            </ul>
          </Card>
        </motion.div>

        {/* DSAR Request Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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
                    placeholder="Enter your full legal name"
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
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">We will use this email to send your data and communicate about your request</p>
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
                    Mailing Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver resize-y"
                    rows={3}
                    required
                    placeholder="Street address, City, State/Province, ZIP/Postal Code, Country"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Required for identity verification and to send your data securely</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Identity Verification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">2. Identity Verification</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                To protect your privacy and comply with GDPR requirements, we must verify your identity before processing your DSAR.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="accountUsername" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Account Username or Email (if you have an ERMITS Advisory account)
                  </label>
                  <input
                    type="text"
                    id="accountUsername"
                    name="accountUsername"
                    value={formData.accountUsername}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                    placeholder="Your ERMITS Advisory account username or email"
                  />
                </div>
                <div>
                  <label htmlFor="previousEmails" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Previous Email Addresses (if different from current)
                  </label>
                  <input
                    type="text"
                    id="previousEmails"
                    name="previousEmails"
                    value={formData.previousEmails}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                    placeholder="Previous email addresses you may have used"
                  />
                </div>
                <div>
                  <label htmlFor="verificationInfo" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Additional Verification Information
                  </label>
                  <textarea
                    id="verificationInfo"
                    name="verificationInfo"
                    value={formData.verificationInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver resize-y"
                    rows={4}
                    placeholder="Any additional information that may help us verify your identity (e.g., engagement reference number, company name, transaction IDs, etc.)"
                  />
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    <strong>Note:</strong> We may request additional verification documents (such as a copy of your ID) if we cannot verify your identity with the information provided. This is a security measure to protect your personal data.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Request Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">3. Request Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="dataScope" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    What data would you like to access? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="dataScope"
                    name="dataScope"
                    value={formData.dataScope}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                    required
                  >
                    <option value="">Select an option...</option>
                    <option value="all">All personal data we hold about you</option>
                    <option value="contact">Contact information and business details</option>
                    <option value="engagement">Engagement files and working documents</option>
                    <option value="communications">Communications and correspondence</option>
                    <option value="billing">Billing and payment information</option>
                    <option value="specific">Specific data (please describe below)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="specificData" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Specific Data Description (if applicable)
                  </label>
                  <textarea
                    id="specificData"
                    name="specificData"
                    value={formData.specificData}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver resize-y"
                    rows={4}
                    placeholder="If you selected 'Specific data', please describe what data you are requesting access to. Be as specific as possible to help us process your request efficiently."
                  />
                </div>
                <div>
                  <label htmlFor="timePeriod" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Time Period (Optional)
                  </label>
                  <input
                    type="text"
                    id="timePeriod"
                    name="timePeriod"
                    value={formData.timePeriod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                    placeholder="e.g., 'Last 12 months', 'From January 2024 to present', 'All data'"
                  />
                </div>
                <div>
                  <label htmlFor="formatPreference" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                    Preferred Format for Data Delivery
                  </label>
                  <select
                    id="formatPreference"
                    name="formatPreference"
                    value={formData.formatPreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver"
                  >
                    <option value="json">JSON (Machine-readable)</option>
                    <option value="csv">CSV (Spreadsheet format)</option>
                    <option value="pdf">PDF (Human-readable)</option>
                    <option value="no-preference">No preference</option>
                  </select>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Advisory Service Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">4. Advisory Service Information</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Which ERMITS Advisory service(s) does your DSAR relate to? (Select all that apply)
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

          {/* Jurisdiction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">5. Jurisdiction</h2>
              <div>
                <label htmlFor="jurisdiction" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                  Which privacy regulation applies to your DSAR? <span className="text-red-500">*</span>
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
                  <option value="other">Other (Please specify in additional notes)</option>
                </select>
              </div>
            </Card>
          </motion.div>

          {/* Additional Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card variant="glass" padding="lg">
              <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">6. Additional Notes (Optional)</h2>
              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-medium mb-2 text-navy dark:text-white">
                  Any additional information or special requests
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-silver resize-y"
                  rows={4}
                  placeholder="Any additional information that may help us process your DSAR, or any special requests regarding how you would like to receive your data."
                />
              </div>
            </Card>
          </motion.div>

          {/* Consent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
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
                    I confirm that I am the data subject or an authorized representative acting on behalf of the data subject. I understand that ERMITS may need to verify my identity before processing this request. <span className="text-red-500">*</span>
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
                    {' '}and understand my rights under applicable privacy laws. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button type="submit" variant="primary" fullWidth className="flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4" />
              Submit DSAR Request
            </Button>
            <a
              href="mailto:privacy@ermits.com?subject=DSAR Request - Advisory Services"
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
          transition={{ delay: 1.1 }}
          className="mt-12"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">What Happens After You Submit Your DSAR?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-start">
                <span className="font-bold text-navy dark:text-silver mr-3">1.</span>
                <span><strong>Confirmation:</strong> We will acknowledge receipt of your DSAR within 5 business days.</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-navy dark:text-silver mr-3">2.</span>
                <span><strong>Identity Verification:</strong> We may contact you to verify your identity if additional information is needed.</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-navy dark:text-silver mr-3">3.</span>
                <span><strong>Processing:</strong> We will gather all relevant personal data and prepare your response.</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-navy dark:text-silver mr-3">4.</span>
                <span><strong>Response:</strong> You will receive your data within 30 days (or up to 2 months for complex requests).</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-navy dark:text-silver mr-3">5.</span>
                <span><strong>Format:</strong> Your data will be provided in your preferred format (JSON, CSV, or PDF) via secure delivery.</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Need Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
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
                <strong className="text-navy dark:text-white">Subject Line:</strong> "DSAR Request - Advisory Services"
              </p>
              <p>
                <strong className="text-navy dark:text-white">Response Time:</strong> We will respond to your DSAR within 30 days as required by GDPR. Complex requests may take up to 2 months with notification.
              </p>
              <p className="pt-2 border-t border-gray-300 dark:border-gray-600">
                <strong className="text-navy dark:text-white">Data Protection Officer (EU/UK/Swiss):</strong> For GDPR-specific DSAR inquiries, you can contact our DPO at{' '}
                <a href="mailto:privacy@ermits.com" className="text-navy dark:text-silver hover:underline">
                  privacy@ermits.com
                </a>{' '}
                with subject "GDPR DSAR Inquiry - Advisory Services - DPO".
              </p>
              <p className="pt-2 border-t border-gray-300 dark:border-gray-600">
                <strong className="text-navy dark:text-white">Other Privacy Requests:</strong> For other privacy rights (deletion, rectification, portability, etc.), please use our{' '}
                <Link to="/advisory/privacy-request" className="text-navy dark:text-silver hover:underline">
                  General Privacy Rights Request Form
                </Link>.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

