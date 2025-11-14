import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowRight, CheckCircle, FileText, Shield, Users, BarChart2, Clock, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VcisoKit: React.FC = () => {
  const kitContents = [
    {
      section: "Security Policies (10 templates)",
      items: [
        "Information Security Policy",
        "Access Control Policy",
        "Data Protection & Privacy Policy",
        "Incident Response Policy",
        "Business Continuity & Disaster Recovery",
        "Acceptable Use Policy",
        "Password Management Policy",
        "Remote Access Security Policy",
        "Third-party Risk Management",
        "Vendor Management Policy"
      ]
    },
    {
      section: "Incident Response (5 playbooks)",
      items: [
        "Ransomware Response Playbook",
        "Data Breach Playbook",
        "Credential Compromise Response",
        "Malware Outbreak Response",
        "Insider Threat Response"
      ]
    },
    {
      section: "Board Materials (4 templates)",
      items: [
        "Monthly Security Executive Summary",
        "Quarterly Board Briefing Presentation",
        "Annual Risk Assessment Report",
        "Incident Crisis Communication Template"
      ]
    },
    {
      section: "Compliance & Checklists (8 templates)",
      items: [
        "SOC 2 Type II Audit Checklist",
        "ISO 27001 Implementation Checklist",
        "NIST CSF Assessment Checklist",
        "GDPR Compliance Checklist",
        "Vendor Security Assessment Form",
        "Security Awareness Training Tracker",
        "Penetration Testing RFP Template",
        "Annual Security Roadmap Template"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock size={24} className="text-navy dark:text-silver" />,
      title: "Save 40+ Hours",
      description: "Pre-built templates eliminate starting from scratch"
    },
    {
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      title: "Industry Standards",
      description: "Aligned with SOC 2, ISO 27001, NIST, and GDPR"
    },
    {
      icon: <Users size={24} className="text-navy dark:text-silver" />,
      title: "Customize Easily",
      description: "Word/PDF format - edit for your organization"
    },
    {
      icon: <BarChart2 size={24} className="text-navy dark:text-silver" />,
      title: "Professional Quality",
      description: "Impress boards and executives immediately"
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
            <span className="text-navy dark:text-silver font-semibold">Complete vCISO Toolkit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            vCISO Starter Kit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
            30 ready-to-use security policies, playbooks, and templates to establish executive-level security leadership
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <Card variant="glass" padding="lg" className="border-2 border-navy">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-navy dark:text-white mb-2">
                $299
              </div>
              <p className="text-gray-600 dark:text-gray-200">One-time purchase • 30 templates • Lifetime access</p>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.open('https://gumroad.com/ermits/vciso-kit', '_blank');
              }}
              className="w-full mb-4"
            >
              <Lock size={18} className="mr-2" />
              Get vCISO Starter Kit
            </Button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Secure payment via Gumroad • Instant digital delivery
            </p>
          </Card>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Why Get This Kit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="glass" padding="lg" className="text-center h-full">
                <div className="p-3 rounded-full bg-navy/20 dark:bg-navy/40 inline-flex mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Kit Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Kit Contents (37 Templates)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kitContents.map((category, index) => (
              <Card key={index} variant="glass" padding="lg">
                <div className="flex items-start gap-3 mb-4">
                  <FileText size={24} className="text-navy dark:text-silver flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold dark:text-white">{category.section}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-200">
                      <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Who Should Get This?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: "Interim CISO",
                description: "Establish security governance quickly in a new role"
              },
              {
                role: "Security Manager",
                description: "Create professional policies without hiring consultants"
              },
              {
                role: "Consultant",
                description: "Customize and resell to your clients"
              }
            ].map((usecase, index) => (
              <Card key={index} variant="glass" padding="lg">
                <h3 className="text-lg font-bold mb-2 dark:text-white">{usecase.role}</h3>
                <p className="text-gray-600 dark:text-gray-200">{usecase.description}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-navy to-dark">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Security Program?</h3>
            <p className="text-silver mb-6">Get instant access to all 30+ templates</p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.open('https://gumroad.com/ermits/vciso-kit', '_blank');
              }}
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Get vCISO Starter Kit - $299
            </Button>
          </Card>
        </motion.div>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link to="/services" className="text-navy dark:text-silver hover:underline inline-flex items-center gap-2">
            ← Back to Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
