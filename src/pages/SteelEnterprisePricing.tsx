import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  CheckCircle,
  Zap,
  Shield,
  Users,
  BarChart3,
  Link as LinkIcon,
  ArrowRight,
  Mail,
  Phone,
  Building,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SteelEnterprisePricing: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    requirements: '',
    budget: '',
    timeline: '',
  });

  const enterpriseFeatures = [
    {
      icon: <LinkIcon size={24} className="text-navy dark:text-silver" />,
      title: 'ERMITS Platform Integration',
      description: 'Seamless integration with all ERMITS platforms (CyberCaution, CyberCorrect, VendorSoluce, etc.)',
    },
    {
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      title: 'Multi-User Collaboration',
      description: 'Unlimited users with role-based access control and team management',
    },
    {
      icon: <BarChart3 size={24} className="text-navy dark:text-silver" />,
      title: 'Advanced Analytics',
      description: 'Custom dashboards, benchmarking, trend analysis, and predictive insights',
    },
    {
      icon: <Zap size={24} className="text-navy dark:text-silver" />,
      title: 'API Access',
      description: 'RESTful API for custom integrations and automated workflows',
    },
    {
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      title: 'Priority Support',
      description: 'Dedicated account manager, 24/7 support, and strategic consultation',
    },
    {
      icon: <Building size={24} className="text-navy dark:text-silver" />,
      title: 'Custom Implementation',
      description: 'Tailored deployment, training, and ongoing optimization services',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend API
    console.log('Enterprise inquiry submitted:', formData);
    alert(
      'Thank you for your interest! Our team will contact you within 24 hours to discuss your requirements.'
    );
    // Optionally navigate to a thank you page
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <span className="text-gold font-semibold">Enterprise Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            STEEL™ Professional & Enterprise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            Custom pricing and enterprise features tailored to your organization's requirements.
            Get ERMITS platform integration, advanced analytics, and dedicated support.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold dark:text-white mb-8 text-center">
            Enterprise Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Card variant="glass" padding="md" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/20 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg">
            <h2 className="text-2xl font-bold dark:text-white mb-8 text-center">
              Freemium vs Professional vs Enterprise
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4 font-semibold dark:text-white">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold dark:text-white">Free</th>
                    <th className="text-center py-4 px-4 font-semibold dark:text-white bg-gold/10">
                      Professional
                    </th>
                    <th className="text-center py-4 px-4 font-semibold dark:text-white bg-navy/10">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">46-Question Assessment</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">Basic Results & Scores</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">PDF/JSON Export</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">Dashboard Integration</td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">ERMITS Platform Integration</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">Multi-User Collaboration</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <span className="text-gray-400">Limited</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">API Access</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">Advanced Analytics</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">Custom Pricing</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-4 dark:text-gray-200">Dedicated Support</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <span className="text-gray-400">Email</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <CheckCircle size={20} className="mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 dark:text-gray-200 font-semibold">Pricing</td>
                    <td className="text-center py-4 px-4">
                      <span className="font-bold text-green-600 dark:text-green-400">Free</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-gold/5">
                      <span className="font-bold text-navy dark:text-white">From $29</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-navy/5">
                      <span className="font-bold text-navy dark:text-white">Custom</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Card variant="glass" padding="lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold dark:text-white mb-4">
                Request Enterprise Pricing
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the form below and our team will contact you within 24 hours to discuss
                your requirements and provide a custom quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-navy dark:focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-navy dark:focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-navy dark:focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-navy dark:focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companySize"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Company Size *
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    required
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-navy dark:focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-navy dark:focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k+">$250,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Requirements & Use Case *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  required
                  rows={5}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Tell us about your organization's needs, specific requirements, and how you plan to use STEEL Professional..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-navy dark:focus:ring-gold focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Implementation Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card-bg text-gray-900 dark:text-white focus:ring-2 focus:ring-navy dark:focus:ring-gold focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (within 30 days)</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6months+">6+ months</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              <div className="flex gap-4 justify-center pt-4">
                <Button type="submit" variant="primary" size="lg">
                  <Mail size={18} className="mr-2" />
                  Submit Request
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/contact')}
                >
                  <Phone size={18} className="mr-2" />
                  Contact Sales
                </Button>
              </div>

              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                By submitting this form, you agree to be contacted by ERMITS Advisory regarding
                your enterprise inquiry. We respect your privacy and will never share your
                information.
              </p>
            </form>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy/10 to-gold/10">
            <h3 className="text-2xl font-bold dark:text-white mb-4">
              Not ready for Enterprise? Start with Professional
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Get started with STEEL Professional for a one-time purchase. Upgrade to Enterprise
              anytime for advanced features.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="primary" onClick={() => navigate('/steel/premium')}>
                View Professional Pricing
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" onClick={() => navigate('/steel/index.html')}>
                Try Free Assessment
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

