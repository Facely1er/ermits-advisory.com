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
          
          <div className="max-w-7xl mx-auto">
            <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface p-8 sm:p-10 lg:p-12">
              {/* 3-column grid */}
              <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
                {/* Column 1: Business Experience */}
                <div className="space-y-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold dark:text-white mb-2">Business Experience</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Operational and commercial leadership across Fortune 500 organizations, international trade, and supply chains.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-5">
                        International Trade
                      </h4>
                      <div className="space-y-5">
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                          <h5 className="font-semibold text-navy dark:text-white mb-2">Global Commerce</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Experience in cross-border operations, customs requirements, and the governance of
                            international trade and compliance frameworks.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-5">
                        Supply Chain & Logistics
                      </h4>
                      <div className="space-y-5">
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                          <h5 className="font-semibold text-navy dark:text-white mb-2">Agro-Industries</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Work in agricultural and food-sector supply chains, focusing on traceability,
                            export obligations, and alignment with global standards.
                          </p>
                        </div>
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                          <h5 className="font-semibold text-navy dark:text-white mb-2">Operations Management</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Oversight of complex logistics networks, inventory flows, and end-to-end performance
                            with an emphasis on resilience and process integrity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2: Technical Certifications */}
                <div className="space-y-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold dark:text-white mb-2">Technical Certifications</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Credentials supporting security governance, risk, and compliance programs.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-5">
                        Security
                      </h4>
                      <div className="space-y-5">
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                          <h5 className="font-semibold text-navy dark:text-white mb-2">CISSP</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Security architecture, governance, and risk-driven control design for enterprise environments.
                          </p>
                        </div>
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                          <h5 className="font-semibold text-navy dark:text-white mb-2">CISA</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Information systems auditing, control evaluation, and regulatory alignment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-5">
                        Project Management
                      </h4>
                      <div className="space-y-5">
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                          <h5 className="font-semibold text-navy dark:text-white mb-2">PMP</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Structuring and delivering high-impact initiatives with disciplined execution.
                          </p>
                        </div>
                        <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                          <h5 className="font-semibold text-navy dark:text-white mb-2">PMI-ACP</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            Agile delivery across dynamic operational and compliance-focused programs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Legal Credentials */}
                <div className="space-y-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold dark:text-white mb-2">Legal Credentials</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Legal and regulatory fluency at the intersection of privacy, cybersecurity, and public law.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                      <h4 className="font-semibold text-navy dark:text-white mb-2">J.D. & LL.M.</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Background in federal litigation, public records laws, and regulatory frameworks
                        with advanced depth in privacy and cybersecurity legislation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Professional Memberships - Separate Card */}
            <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface p-8 sm:p-10 lg:p-12 mt-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold dark:text-white mb-2">Professional Memberships</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our team members maintain active memberships in leading professional associations.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">International Association of Privacy Professionals (IAPP)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Association for Computing Machinery (ACM)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Information Systems Audit and Control Association (ISACA)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">International Information System Security Certification Consortium (ISC2)</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Project Management Institute (PMI)</p>
              </div>
            </Card>

            {/* Cross-Sector Insight - Separate Card with darker background */}
            <Card variant="glass" padding="lg" className="bg-gray-50 dark:bg-gray-900/50 p-8 sm:p-10 lg:p-12 mt-8">
              <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-500 dark:text-amber-400 mb-2">
                    Cross-Sector Insight
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Where legal understanding, cybersecurity expertise, and global trade experience intersect
                    to solve real-world risk challenges.
                  </p>
                </div>
                <p className="max-w-md text-sm text-gray-600 dark:text-gray-400 leading-relaxed sm:mt-8">
                  ERMITS-Advisory combines technical certifications, legal training, and operational leadership
                  to design practical, compliance-aligned solutions for complex environments.
                </p>
              </div>
            </Card>

            {/* Strategic Capabilities - Separate Card */}
            <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface p-8 sm:p-10 lg:p-12 mt-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold dark:text-white mb-2">Strategic Capabilities</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Integrated services that connect governance, privacy, and operational resilience.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {strategicCapabilities.map((capability, index) => (
                  <div key={index} className="border-l-4 border-navy/30 dark:border-silver/30 pl-5 py-3">
                    <h4 className="font-semibold text-navy dark:text-white mb-2">{capability.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                ))}
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
          <Card variant="glass" padding="lg" className="bg-gray-50 dark:bg-gray-900/50">
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