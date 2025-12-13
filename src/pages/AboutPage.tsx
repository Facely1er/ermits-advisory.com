import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  ArrowRight, Shield,
  Scale, Globe, Building2,
  CheckCircle2, Gauge
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  // Business Experience data
  const businessExperience = {
    description: "Operational and commercial leadership across Fortune 500 organizations, international trade, and supply chains.",
    sections: [
      {
        category: "INTERNATIONAL TRADE",
        title: "Global Commerce",
        description: "Experience in cross-border operations, customs requirements, and the governance of international trade and compliance frameworks."
      },
      {
        category: "SUPPLY CHAIN & LOGISTICS",
        items: [
          {
            title: "Agro-Industries",
            description: "Work in agricultural and food-sector supply chains, focusing on traceability, export obligations, and alignment with global standards."
          },
          {
            title: "Operations Management",
            description: "Oversight of complex logistics networks, inventory flows, and end-to-end performance with an emphasis on resilience and process integrity."
          }
        ]
      }
    ]
  };

  // Technical Certifications data
  const technicalCertifications = {
    description: "Credentials supporting security governance, risk, and compliance programs.",
    sections: [
      {
        category: "SECURITY",
        items: [
          {
            name: "CISSP",
            description: "Security architecture, governance, and risk-driven control design for enterprise environments."
          },
          {
            name: "CISA",
            description: "Information systems auditing, control evaluation, and regulatory alignment."
          }
        ]
      },
      {
        category: "PROJECT MANAGEMENT",
        items: [
          {
            name: "PMP",
            description: "Structuring and delivering high-impact initiatives with disciplined execution."
          },
          {
            name: "PMI-ACP",
            description: "Agile delivery across dynamic operational and compliance-focused programs."
          }
        ]
      }
    ]
  };

  // Legal Credentials data
  const legalCredentials = {
    description: "Legal and regulatory fluency at the intersection of privacy, cybersecurity, and public law.",
    items: [
      {
        name: "J.D. & LL.M.",
        description: "Background in federal litigation, public records laws, and regulatory frameworks with advanced knowledge of privacy and cybersecurity legislation."
      }
    ]
  };

  // Professional Memberships
  const professionalMemberships = [
    "International Association of Privacy Professionals (IAPP)",
    "Association for Computing Machinery (ACM)",
    "Information Systems Audit and Control Association (ISACA)",
    "International Information System Security Certification Consortium (ISC2)",
    "Project Management Institute (PMI)"
  ];

  // Strategic Capabilities
  const strategicCapabilities = [
    {
      title: "Cybersecurity Governance",
      description: "Design and evaluation of governance frameworks aligned with NIST, ISO, and sector-specific requirements."
    },
    {
      title: "Privacy Compliance Architecture",
      description: "Program blueprints grounded in GDPR, CCPA, LGPD, and ISO 27701 to operationalize privacy-by-design."
    },
    {
      title: "Operational Risk Management",
      description: "Identification, mitigation, and monitoring of enterprise risk across people, process, and technology."
    },
    {
      title: "Supply Chain Resilience",
      description: "Risk modeling and assurance for multi-tier supply chains with reference to NIST SP 800-161 and related standards."
    },
    {
      title: "Global Regulatory Alignment",
      description: "Cross-jurisdiction mapping of cybersecurity, privacy, and trade obligations into coherent, executable requirements."
    }
  ];


  return (
    <div className="pb-8 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Leadership Excellence Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Leadership Excellence</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto">
            Our founding leadership brings together decades of cybersecurity expertise, legal knowledge, and strategic advisory experience.
          </p>
        </motion.div>

        {/* Main Content: Three Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Column 1: Business Experience */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                    <Building2 size={24} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">Business Experience</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {businessExperience.description}
                </p>
                
                <div className="space-y-6">
                  {/* International Trade */}
                  <div>
                    <p className="text-xs font-semibold text-navy/70 dark:text-silver/70 uppercase tracking-wide mb-2">
                      {businessExperience.sections[0].category}
                    </p>
                    <h4 className="font-semibold text-navy dark:text-white mb-2">
                      {businessExperience.sections[0].title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {businessExperience.sections[0].description}
                    </p>
                  </div>

                  {/* Supply Chain & Logistics */}
                  <div>
                    <p className="text-xs font-semibold text-navy/70 dark:text-silver/70 uppercase tracking-wide mb-2">
                      {businessExperience.sections[1].category}
                    </p>
                    {businessExperience.sections[1].items?.map((item, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-semibold text-navy dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Technical Certifications */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                    <Shield size={24} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">Technical Certifications</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {technicalCertifications.description}
                </p>
                
                <div className="space-y-6">
                  {technicalCertifications.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx}>
                      <p className="text-xs font-semibold text-navy/70 dark:text-silver/70 uppercase tracking-wide mb-3">
                        {section.category}
                      </p>
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="mb-4">
                          <h4 className="font-semibold text-navy dark:text-white mb-2">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Legal Credentials */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                    <Scale size={24} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">Legal Credentials</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {legalCredentials.description}
                </p>
                
                <div className="space-y-4">
                  {legalCredentials.items.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-navy dark:text-white mb-2">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Professional Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
            <h2 className="text-2xl font-bold mb-3 dark:text-white">Professional Memberships</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Our team members maintain active memberships in leading professional associations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {professionalMemberships.map((membership, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 size={18} className="text-navy dark:text-silver mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{membership}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Cross-Sector Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
            <h2 className="text-2xl font-bold mb-6 dark:text-white uppercase tracking-wide">Cross-Sector Insight</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Where legal understanding, cybersecurity expertise, and global trade experience intersect to solve real-world risk challenges.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                ERMITS-Advisory combines technical certifications, legal training, and operational leadership to design practical, compliance-aligned solutions for complex environments.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Strategic Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
            <h2 className="text-2xl font-bold mb-3 dark:text-white">Strategic Capabilities</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-8">
              Integrated services that connect governance, privacy, and operational resilience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicCapabilities.map((capability, idx) => (
                <div key={idx} className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                  <h4 className="font-semibold text-navy dark:text-white mb-2">
                    {capability.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Global Reach, Local Sensibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card variant="glass" padding="lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Global Reach, Local Sensibility</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  While headquartered in the United States, our advisory services extend worldwide, providing strategic cybersecurity guidance to organizations across diverse markets and regulatory environments.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Globe size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Global Threat Intelligence</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive threat landscape monitoring across all major regions</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Scale size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">International Legal Framework</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Knowledge of global cybersecurity regulations and compliance requirements</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Gauge size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Strategic Implementation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Methodologies adapted to local business and cultural contexts</p>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={() => navigate('/contact')}
                >
                  Contact Our Team
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden h-80 relative">
                  <img
                    src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Executive cybersecurity advisory"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">Worldwide Advisory Excellence</h3>
                      <p className="text-sm opacity-90">Strategic cybersecurity guidance across global markets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};