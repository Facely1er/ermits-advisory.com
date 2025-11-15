import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Cookie, Settings, Eye, BarChart3, Shield, 
  ArrowLeft, ExternalLink, CheckCircle, X
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookiePolicyPage: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: true,
    marketing: false,
    preferences: true
  });

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type !== 'necessary') { // Necessary cookies cannot be disabled
      setCookiePreferences(prev => ({
        ...prev,
        [type]: value
      }));
    }
  };

  const cookieTypes = [
    {
      id: 'necessary',
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. Cannot be disabled.',
      icon: <Shield size={24} className="text-green-500" />,
      required: true,
      examples: ['Session management', 'Security', 'Basic functionality']
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      icon: <BarChart3 size={24} className="text-blue-500" />,
      required: false,
      examples: ['Google Analytics', 'Page views tracking', 'User behavior analysis']
    },
    {
      id: 'preferences',
      title: 'Functional Cookies',
      description: 'Remember your preferences and settings for a personalized experience.',
      icon: <Settings size={24} className="text-purple-500" />,
      required: false,
      examples: ['Language preferences', 'Theme selection', 'Region settings']
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'Track your activity to deliver relevant advertisements.',
      icon: <Eye size={24} className="text-orange-500" />,
      required: false,
      examples: ['LinkedIn Insights', 'Campaign tracking', 'Conversion measurement']
    }
  ];

  const saveCookiePreferences = () => {
    // In a real implementation, this would save to localStorage and update cookie consent
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    
    // Show confirmation
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Cookie Policy</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-4">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            Learn how we use cookies to enhance your experience and protect your privacy
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="flex items-start">
              <div className="p-3 rounded-full bg-white/10 mr-4">
                <Cookie size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">What Are Cookies?</h2>
                <p className="text-silver mb-4">
                  Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience, remember your preferences, and understand how you use our site.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-silver">
                  <div>
                    <h4 className="font-semibold mb-2">Session Cookies</h4>
                    <p className="text-sm">Temporary cookies that expire when you close your browser</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Persistent Cookies</h4>
                    <p className="text-sm">Remain on your device until they expire or you delete them</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Third-Party Cookies</h4>
                    <p className="text-sm">Set by domains other than the one you're visiting</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Cookie Preferences Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Manage Your Cookie Preferences</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Choose which types of cookies you want to allow. You can change these settings at any time.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {cookieTypes.map((type) => (
                <div key={type.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-silver/20 dark:bg-navy/40 mr-3">
                        {type.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold dark:text-white">{type.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-200 mt-1">{type.description}</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      {type.required ? (
                        <div className="flex items-center">
                          <CheckCircle size={20} className="text-green-500" />
                          <span className="text-xs text-green-600 dark:text-green-400 ml-1">Required</span>
                        </div>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookiePreferences[type.id as keyof typeof cookiePreferences]}
                            onChange={(e) => handlePreferenceChange(type.id, e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy/20 dark:peer-focus:ring-navy/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-navy"></div>
                        </label>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Examples:</h5>
                    <ul className="space-y-1">
                      {Array.isArray(type.examples) && type.examples.map((example: string, index: number) => (
                        <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                          <div className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 mr-2 flex-shrink-0"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                onClick={saveCookiePreferences}
                icon={<CheckCircle size={16} />}
                iconPosition="left"
              >
                Save Preferences
              </Button>
              <Button
                variant="outline"
                onClick={() => setCookiePreferences({
                  necessary: true,
                  analytics: false,
                  marketing: false,
                  preferences: false
                })}
                icon={<X size={16} />}
                iconPosition="left"
              >
                Reject Optional Cookies
              </Button>
              <Button
                variant="outline"
                onClick={() => setCookiePreferences({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                  preferences: true
                })}
                icon={<CheckCircle size={16} />}
                iconPosition="left"
              >
                Accept All Cookies
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Third-Party Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Third-Party Services</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              We use the following third-party services that may set cookies on your device:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold dark:text-white">Google Analytics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    Web analytics service to understand site usage and performance
                  </p>
                  <a href="https://policies.google.com/privacy" className="text-navy dark:text-silver text-xs hover:underline">
                    Privacy Policy
                  </a>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold dark:text-white">Microsoft Clarity</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    User behavior analytics for improving user experience
                  </p>
                  <a href="https://privacy.microsoft.com/en-us/privacystatement" className="text-navy dark:text-silver text-xs hover:underline">
                    Privacy Statement
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold dark:text-white">LinkedIn Insights</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    Campaign performance tracking and analytics
                  </p>
                  <a href="https://www.linkedin.com/legal/privacy-policy" className="text-navy dark:text-silver text-xs hover:underline">
                    Privacy Policy
                  </a>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold dark:text-white">HubSpot</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    CRM and marketing automation platform
                  </p>
                  <a href="https://legal.hubspot.com/privacy-policy" className="text-navy dark:text-silver text-xs hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Browser Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Browser Cookie Controls</h3>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Most browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2 dark:text-white">Chrome</h4>
                <p className="text-sm text-gray-600 dark:text-gray-200 mb-3">
                  Settings → Privacy and security → Cookies
                </p>
                <Button variant="outline" size="sm" icon={<ExternalLink size={14} />}>
                  Learn More
                </Button>
              </div>

              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2 dark:text-white">Firefox</h4>
                <p className="text-sm text-gray-600 dark:text-gray-200 mb-3">
                  Options → Privacy & Security → Cookies
                </p>
                <Button variant="outline" size="sm" icon={<ExternalLink size={14} />}>
                  Learn More
                </Button>
              </div>

              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2 dark:text-white">Safari</h4>
                <p className="text-sm text-gray-600 dark:text-gray-200 mb-3">
                  Preferences → Privacy → Manage Website Data
                </p>
                <Button variant="outline" size="sm" icon={<ExternalLink size={14} />}>
                  Learn More
                </Button>
              </div>

              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2 dark:text-white">Edge</h4>
                <p className="text-sm text-gray-600 dark:text-gray-200 mb-3">
                  Settings → Privacy → Cookies and site data
                </p>
                <Button variant="outline" size="sm" icon={<ExternalLink size={14} />}>
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card variant="glass" padding="md">
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              If you have any questions about our use of cookies, please contact us or review our related policies:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy">
                <Button variant="outline" size="sm">
                  Privacy Policy
                </Button>
              </Link>
              <Link to="/terms">
                <Button variant="outline" size="sm">
                  Terms of Service
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                icon={<ExternalLink size={16} />}
                iconPosition="right"
              >
                Cookie Settings
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};