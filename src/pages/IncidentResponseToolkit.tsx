import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowRight, CheckCircle, Shield, Download,
  DollarSign, AlertTriangle, FileText, Users, MessageSquare
} from 'lucide-react';

export const IncidentResponseToolkit: React.FC = () => {
  const playbooks = [
    { name: 'Ransomware Response', icon: <Shield size={24} /> },
    { name: 'Data Breach', icon: <AlertTriangle size={24} /> },
    { name: 'DDoS Attack', icon: <FileText size={24} /> },
    { name: 'Credential Compromise', icon: <Users size={24} /> },
    { name: 'Insider Threat', icon: <AlertTriangle size={24} /> },
    { name: 'Malware Outbreak', icon: <Shield size={24} /> }
  ];

  const toolkitContents = [
    {
      category: 'Incident Response Playbooks',
      items: [
        'Scenario-specific response playbooks (6+ scenarios)',
        'Step-by-step response procedures',
        'Decision trees and escalation paths',
        'Recovery and remediation guides'
      ]
    },
    {
      category: 'Communication Templates',
      items: [
        'Internal stakeholder notifications',
        'Customer breach notification letters',
        'Regulatory notification templates',
        'Media response templates',
        'Legal counsel communication guides'
      ]
    },
    {
      category: 'Incident Tracking',
      items: [
        'Incident log templates',
        'Timeline tracking worksheets',
        'Evidence collection forms',
        'Post-incident analysis templates'
      ]
    },
    {
      category: 'Tabletop Exercises',
      items: [
        'Exercise scenario templates',
        'Facilitation guides',
        'Participant materials',
        'After-action review templates'
      ]
    },
    {
      category: 'Crisis Management',
      items: [
        'Crisis management checklists',
        'Stakeholder contact lists',
        'Business continuity procedures',
        'Recovery planning templates'
      ]
    },
    {
      category: 'Platform Integration',
      items: [
        'CyberSoluce workflow configuration',
        'Incident automation setup guides',
        'Dashboard customization templates',
        'Integration with CyberCaution alerts'
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
          <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <span className="text-red-700 dark:text-red-400 font-semibold flex items-center gap-2">
              <FileText size={18} />
              Template Package
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Incident Response Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-4">
            Downloadable incident response playbooks, templates, and checklists for security operations teams
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            4 comprehensive template files • Customize for your needs • Works offline • One-time purchase
          </p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-navy dark:text-white">$149</div>
              <div className="text-gray-500 dark:text-gray-400">One-time purchase</div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="primary"
                size="md"
                icon={<Download size={20} />}
                onClick={() => window.open('https://gumroad.com/ermits/incident-response-toolkit', '_blank')}
              >
                Download Templates
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => window.location.href = '/toolkits'}
              >
                Compare Options
              </Button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Want interactive tools? (Coming soon)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Response Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
            Response Playbooks Included
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {playbooks.map((playbook, index) => (
              <Card key={index} variant="glass" padding="md" className="text-center">
                <div className="text-red-600 dark:text-red-400 mb-2 flex justify-center">
                  {playbook.icon}
                </div>
                <div className="text-sm font-semibold dark:text-white">{playbook.name}</div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Toolkit Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolkitContents.map((section, index) => (
              <Card key={index} variant="glass" padding="lg" className="h-full">
                <h3 className="text-xl font-bold mb-4 dark:text-white">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <CheckCircle size={16} className="text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Respond faster with pre-built playbooks',
                'Ensure consistent response procedures',
                'Meet regulatory notification requirements',
                'Reduce incident response time by 40%',
                'Integrate with CyberSoluce workflows',
                'Improve post-incident learning and recovery'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Download Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Download Your Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Ransomware Response Playbook', file: 'ransomware-response-playbook.md', desc: 'Step-by-step playbook for ransomware attacks' },
              { name: 'Communication Templates', file: 'communication-templates.md', desc: '12+ templates for stakeholders, customers, and regulators' },
              { name: 'Incident Tracking Form', file: 'incident-tracking-form.md', desc: 'Comprehensive incident documentation and tracking' },
              { name: 'Getting Started Guide', file: 'README.md', desc: 'Complete guide with all playbooks and procedures' }
            ].map((template, index) => (
              <Card key={index} variant="glass" padding="md" className="hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-red-600 dark:text-red-400 mt-1">
                    <FileText size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">{template.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{template.desc}</p>
                    <a
                      href={`/templates/incident-response-toolkit/${template.file}`}
                      download
                      className="inline-flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                    >
                      <Download size={16} />
                      Download Template
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Card variant="glass" padding="lg" className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Be Ready for Any Incident
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
              Get instant access to all incident response templates and playbooks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                icon={<Download size={20} />}
                iconPosition="right"
                onClick={() => window.open('https://ermits.gumroad.com/l/incident-response-toolkit', '_blank')}
                className="transform hover:scale-105 transition-transform"
              >
                Purchase on Gumroad - $149
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Download size={20} />}
                iconPosition="right"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/zips/incident-response-toolkit.zip';
                  link.download = 'incident-response-toolkit.zip';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="transform hover:scale-105 transition-transform"
              >
                Download Sample ZIP
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Instant digital download • Lifetime access • Free updates
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              Sample ZIP includes preview templates. Full toolkit available on Gumroad.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

