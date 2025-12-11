import React, { useEffect } from 'react';

export const ComplianceToolkit: React.FC = () => {
  useEffect(() => {
    // Redirect to ERMITS Landing page products section
    window.location.href = 'https://ermits.com/products';
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
      <div className="text-center p-8">
        <p className="text-gray-600 dark:text-gray-200 mb-4">
          Redirecting to products section...
        </p>
      </div>
    </div>
  );
  const frameworks = [
    { name: 'NIST CSF', icon: <Shield size={24} /> },
    { name: 'ISO 27001', icon: <FileCheck size={24} /> },
    { name: 'SOC 2', icon: <Layers size={24} /> },
    { name: 'HIPAA', icon: <FileText size={24} /> },
    { name: 'GDPR', icon: <Shield size={24} /> },
    { name: 'CMMC', icon: <Target size={24} /> },
    { name: 'PCI-DSS', icon: <FileCheck size={24} /> }
  ];

  const toolkitContents = [
    {
      category: 'Gap Analysis Templates',
      items: [
        'Multi-framework gap analysis worksheets',
        'Control mapping matrices',
        'Maturity assessment templates',
        'Risk-based prioritization frameworks'
      ]
    },
    {
      category: 'Evidence Collection',
      items: [
        'Evidence collection checklists by framework',
        'Documentation templates',
        'Evidence repository organization guides',
        'Audit trail templates'
      ]
    },
    {
      category: 'Audit Preparation',
      items: [
        'Pre-audit readiness checklists',
        'Auditor interview preparation guides',
        'Evidence validation workflows',
        'Remediation tracking templates'
      ]
    },
    {
      category: 'Compliance Programs',
      items: [
        'Compliance program charter templates',
        'Continuous monitoring frameworks',
        'Control testing procedures',
        'Compliance reporting templates'
      ]
    },
    {
      category: 'Platform Integration',
      items: [
        'CyberCorrect setup guides',
        'Workflow configuration templates',
        'Automation setup instructions',
        'Dashboard customization guides'
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
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <span className="text-green-700 dark:text-green-400 font-semibold flex items-center gap-2">
              <FileText size={18} />
              Template Package
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Compliance Framework Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-4">
            Downloadable compliance templates for NIST, ISO 27001, SOC 2, HIPAA, GDPR, CMMC, and PCI-DSS frameworks
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            4 comprehensive template files • Customize for your needs • Works offline • One-time purchase
          </p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-navy dark:text-white">$199</div>
              <div className="text-gray-500 dark:text-gray-400">One-time purchase</div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="primary"
                size="md"
                icon={<Download size={20} />}
                onClick={() => window.open('https://gumroad.com/ermits/compliance-toolkit', '_blank')}
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
                Want interactive tools with auto-calculations?
              </p>
              <button
                onClick={() => window.location.href = '/compliance-gap-analysis-premium'}
                className="text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
              >
                Try Interactive Version →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Supported Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
            Supported Compliance Frameworks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {frameworks.map((framework, index) => (
              <Card key={index} variant="glass" padding="md" className="text-center">
                <div className="text-navy dark:text-silver mb-2 flex justify-center">
                  {framework.icon}
                </div>
                <div className="text-sm font-semibold dark:text-white">{framework.name}</div>
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
                      <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
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
          <Card variant="glass" padding="lg" className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Save 50+ hours of template creation time',
                'Ensure consistency across all frameworks',
                'Accelerate audit preparation by 60%',
                'Integrate seamlessly with CyberCorrect platform',
                'Maintain compliance with automated workflows',
                'Reduce audit findings with comprehensive checklists'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
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
              { name: 'Gap Analysis Template', file: 'gap-analysis-template.md', desc: 'Multi-framework gap analysis with NIST, ISO 27001, and more' },
              { name: 'Control Mapping Matrix', file: 'control-mapping-matrix.md', desc: '50+ pre-mapped controls across all major frameworks' },
              { name: 'Evidence Collection Checklist', file: 'evidence-collection-checklist.md', desc: '200+ evidence items organized by category' },
              { name: 'Getting Started Guide', file: 'README.md', desc: 'Complete guide to using the compliance toolkit' }
            ].map((template, index) => (
              <Card key={index} variant="glass" padding="md" className="hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-green-600 dark:text-green-400 mt-1">
                    <FileText size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 dark:text-white">{template.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{template.desc}</p>
                    <a
                      href={`/templates/compliance-toolkit/${template.file}`}
                      download
                      className="inline-flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
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
              Ready to Streamline Your Compliance?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
              Get instant access to all compliance templates and start preparing for your next audit today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                icon={<Download size={20} />}
                iconPosition="right"
                onClick={() => window.open('https://ermits.gumroad.com/l/compliance-toolkit', '_blank')}
                className="transform hover:scale-105 transition-transform"
              >
                Purchase on Gumroad - $199
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Download size={20} />}
                iconPosition="right"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/zips/compliance-framework-toolkit.zip';
                  link.download = 'compliance-framework-toolkit.zip';
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

