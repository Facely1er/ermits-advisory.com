import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Award, Target,
  Calendar, ArrowRight, Shield,
  GraduationCap, Scale
} from 'lucide-react';

// ERMITS-Style Icon Components
const TechnicalCertificationsIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6 text-amber-400" }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
    <path fill="none" stroke="currentColor" strokeWidth="2"
      d="M16 4.5 8.5 7v8.5c0 4.1 2.6 7.8 7.5 10 4.9-2.2 7.5-5.9 7.5-10V7L16 4.5z" />
    <ellipse cx="16" cy="17" rx="7" ry="3.5"
      fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3" />
  </svg>
);

const LegalCredentialsIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6 text-sky-400" }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
    <path fill="none" stroke="currentColor" strokeWidth="2"
      d="M16 4.5 8.5 7v8.5c0 4.1 2.6 7.8 7.5 10 4.9-2.2 7.5-5.9 7.5-10V7L16 4.5z" />
    <path fill="none" stroke="currentColor" strokeWidth="1.5"
      d="M16 10v7.5" />
    <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      d="M11 12.5h10" />
    <path fill="none" stroke="currentColor" strokeWidth="1.2"
      d="M11 12.5 9.5 15h3L11 12.5zM21 12.5 19.5 15h3L21 12.5z" />
  </svg>
);

const BusinessExperienceIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6 text-emerald-400" }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
    <path fill="none" stroke="currentColor" strokeWidth="2"
      d="M16 4.5 8.5 7v8.5c0 4.1 2.6 7.8 7.5 10 4.9-2.2 7.5-5.9 7.5-10V7L16 4.5z" />
    <circle cx="16" cy="17" r="5" fill="none" stroke="currentColor" strokeWidth="1.3" />
    <path fill="none" stroke="currentColor" strokeWidth="1"
      d="M16 12c-1.7 1.7-2.5 3.3-2.5 5s.8 3.3 2.5 5c1.7-1.7 2.5-3.3 2.5-5S17.7 13.7 16 12z" />
    <path fill="none" stroke="currentColor" strokeWidth="1"
      d="M11.5 17h9" />
  </svg>
);

const StrategicCapabilitiesIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6 text-indigo-400" }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
    <path fill="none" stroke="currentColor" strokeWidth="2"
      d="M16 4.5 8.5 7v8.5c0 4.1 2.6 7.8 7.5 10 4.9-2.2 7.5-5.9 7.5-10V7L16 4.5z" />
    <circle cx="16" cy="17" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path fill="currentColor"
      d="M16 13.5 14.5 18l3.5-1.5L16 13.5z" />
    <circle cx="16" cy="17" r="0.9" fill="currentColor" />
  </svg>
);

const CrossSectorInsightIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5 text-amber-400" }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
    <circle cx="16" cy="10" r="3" fill="currentColor" />
    <circle cx="10" cy="20" r="2.3" fill="currentColor" />
    <circle cx="22" cy="20" r="2.3" fill="currentColor" />
    <path fill="none" stroke="currentColor" strokeWidth="1.3"
      d="M16 13v3.5M13 18l-2.1 1.3M19 18l2.1 1.3" />
  </svg>
);

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  // Strategic Capabilities data
  const strategicCapabilities = [
    {
      name: "Cybersecurity Governance",
      description: "Design and evaluation of governance frameworks aligned with NIST, ISO, and sector-specific requirements."
    },
    {
      name: "Privacy Compliance Architecture",
      description: "Program blueprints grounded in GDPR, CCPA, LGPD, and ISO 27701 to operationalize privacy-by-design."
    },
    {
      name: "Operational Risk Management",
      description: "Identification, mitigation, and monitoring of enterprise risk across people, process, and technology."
    },
    {
      name: "Supply Chain Resilience",
      description: "Risk modeling and assurance for multi-tier supply chains with reference to NIST SP 800-161 and related standards."
    },
    {
      name: "Global Regulatory Alignment",
      description: "Cross-jurisdiction mapping of cybersecurity, privacy, and trade obligations into coherent, executable requirements."
    }
  ];


  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 dark:bg-silver/10 text-navy dark:text-silver text-sm font-medium mb-4">
              <Award size={16} className="mr-2" />
              Industry Leadership
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Worldclass Cybersecurity Leadership</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-4xl mx-auto mb-8">
            Combining deep technical expertise with legal acumen to deliver unparalleled strategic cybersecurity advisory services worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={<Calendar size={18} />}
              onClick={() => navigate('/contact')}
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              onClick={() => navigate('/services')}
            >
              Explore Services
            </Button>
          </div>
        </motion.div>

        {/* Leadership Excellence Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Leadership Excellence</h2>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              Our founding leadership brings together decades of cybersecurity expertise, legal knowledge, and strategic advisory experience.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
              {/* Cross-Sector Insight Tagline */}
              <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10">
                    <CrossSectorInsightIcon className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-500 dark:text-amber-400">
                      Cross-Sector Insight
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      Where legal understanding, cybersecurity expertise, and global trade experience intersect
                      to solve real-world risk challenges.
                    </p>
                  </div>
                </div>
                <p className="max-w-md text-sm text-gray-600 dark:text-gray-400">
                  ERMITS-Advisory combines technical certifications, legal training, and operational leadership
                  to design practical, compliance-aligned solutions for complex environments.
                </p>
              </div>

              {/* 4-column grid */}
              <div className="grid gap-10 border-t border-gray-200 dark:border-gray-700 pt-10 lg:grid-cols-4 lg:gap-12">
                {/* Column 1: Technical Certifications */}
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                      <TechnicalCertificationsIcon className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">Technical Certifications</h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Credentials supporting security governance, risk, and compliance programs.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
                        Security
                      </h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                          <h5 className="font-semibold text-navy dark:text-white mb-1">CISSP</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Security architecture, governance, and risk-driven control design for enterprise environments.
                          </p>
                        </div>
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                          <h5 className="font-semibold text-navy dark:text-white mb-1">CISA</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Information systems auditing, control evaluation, and regulatory alignment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
                        Project Management
                      </h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                          <h5 className="font-semibold text-navy dark:text-white mb-1">PMP</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Structuring and delivering high-impact initiatives with disciplined execution.
                          </p>
                        </div>
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                          <h5 className="font-semibold text-navy dark:text-white mb-1">PMI-ACP</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Agile delivery across dynamic operational and compliance-focused programs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Legal Credentials */}
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                      <LegalCredentialsIcon className="h-6 w-6 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">Legal Credentials</h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Legal and regulatory fluency at the intersection of privacy, cybersecurity, and public law.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                      <h4 className="font-semibold text-navy dark:text-white mb-1">J.D. & LL.M.</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Background in federal litigation, public records laws, and regulatory frameworks
                        with advanced depth in privacy and cybersecurity legislation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 3: Business Experience */}
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                      <BusinessExperienceIcon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">Business Experience</h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Operational and commercial leadership across international trade and supply chains.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
                        International Trade
                      </h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                          <h5 className="font-semibold text-navy dark:text-white mb-1">Global Commerce</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Experience in cross-border operations, customs requirements, and the governance of
                            international trade and compliance frameworks.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-4">
                        Supply Chain & Logistics
                      </h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                          <h5 className="font-semibold text-navy dark:text-white mb-1">Agro-Industries</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Work in agricultural and food-sector supply chains, focusing on traceability,
                            export obligations, and alignment with global standards.
                          </p>
                        </div>
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                          <h5 className="font-semibold text-navy dark:text-white mb-1">Operations Management</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Oversight of complex logistics networks, inventory flows, and end-to-end performance
                            with an emphasis on resilience and process integrity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 4: Strategic Capabilities */}
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                      <StrategicCapabilitiesIcon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">Strategic Capabilities</h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Integrated services that connect governance, privacy, and operational resilience.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {strategicCapabilities.map((capability, index) => (
                      <div key={index} className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                        <h4 className="font-semibold text-navy dark:text-white mb-1">{capability.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Enhanced Global Presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
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
                      <Shield size={16} className="text-navy dark:text-silver" />
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
                      <Target size={16} className="text-navy dark:text-silver" />
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
                  onClick={() => navigate('/services')}
                >
                  Explore Global Services
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
                      <GraduationCap size={48} className="mx-auto mb-3 opacity-80" />
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