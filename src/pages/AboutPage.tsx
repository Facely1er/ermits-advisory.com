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

        {/* Leadership Excellence Section - Enhanced with ERMITS Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-950 dark:bg-slate-950 rounded-lg p-6 sm:p-8 lg:p-12">
              {/* Cross-Sector Insight Tagline */}
              <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-amber-500/40 bg-amber-500/10">
                    <CrossSectorInsightIcon />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400">
                      Cross-Sector Insight
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Where legal understanding, cybersecurity expertise, and global trade experience intersect
                      to solve real-world risk challenges.
                    </p>
                  </div>
                </div>
                <p className="max-w-md text-sm text-slate-400">
                  ERMITS-Advisory combines technical certifications, legal training, and operational leadership
                  to design practical, compliance-aligned solutions for complex environments.
                </p>
              </div>

              {/* 4-column grid */}
              <div className="grid gap-10 border-t border-slate-800 pt-10 lg:grid-cols-4 lg:gap-12">
                {/* Column 1: Technical Certifications */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/60">
                      <TechnicalCertificationsIcon />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                        Technical Certifications
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Credentials supporting security governance, risk, and compliance programs.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div>
                      <p className="font-semibold text-slate-100">Security</p>
                      <div className="mt-2 space-y-2 text-sm text-slate-300">
                        <div>
                          <p className="font-medium">CISSP</p>
                          <p className="text-xs text-slate-400">
                            Security architecture, governance, and risk-driven control design for enterprise environments.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">CISA</p>
                          <p className="text-xs text-slate-400">
                            Information systems auditing, control evaluation, and regulatory alignment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="font-semibold text-slate-100">Project Management</p>
                      <div className="mt-2 space-y-2 text-sm text-slate-300">
                        <div>
                          <p className="font-medium">PMP</p>
                          <p className="text-xs text-slate-400">
                            Structuring and delivering high-impact initiatives with disciplined execution.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">PMI-ACP</p>
                          <p className="text-xs text-slate-400">
                            Agile delivery across dynamic operational and compliance-focused programs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Legal Credentials */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/60">
                      <LegalCredentialsIcon />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                        Legal Credentials
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Legal and regulatory fluency at the intersection of privacy, cybersecurity, and public law.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-slate-300">
                    <div>
                      <p className="font-medium">J.D. & LL.M.</p>
                      <p className="mt-1 text-xs text-slate-400">
                        Background in federal litigation, public records laws, and regulatory frameworks
                        with advanced depth in privacy and cybersecurity legislation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 3: Business Experience */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/60">
                      <BusinessExperienceIcon />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                        Business Experience
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Operational and commercial leadership across international trade and supply chains.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 text-sm text-slate-300">
                    <div>
                      <p className="font-semibold text-slate-100">International Trade</p>
                      <div className="mt-2 space-y-2">
                        <div>
                          <p className="font-medium">Global Commerce</p>
                          <p className="text-xs text-slate-400">
                            Experience in cross-border operations, customs requirements, and the governance of
                            international trade and compliance frameworks.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-100">Supply Chain & Logistics</p>
                      <div className="mt-2 space-y-2">
                        <div>
                          <p className="font-medium">Agro-Industries</p>
                          <p className="text-xs text-slate-400">
                            Work in agricultural and food-sector supply chains, focusing on traceability,
                            export obligations, and alignment with global standards.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Operations Management</p>
                          <p className="text-xs text-slate-400">
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
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/60">
                      <StrategicCapabilitiesIcon />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                        Strategic Capabilities
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Integrated services that connect governance, privacy, and operational resilience.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-slate-300">
                    {strategicCapabilities.map((capability, index) => (
                      <div key={index}>
                        <p className="font-medium">{capability.name}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                  onClick={() => navigate('/contact')}
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