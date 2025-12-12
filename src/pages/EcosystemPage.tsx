import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ErmitsBridgeDiagram } from '../components/diagrams/ErmitsBridgeDiagram';
import {
  ArrowRight,
  AlertCircle,
  FileCheck,
  Network,
  Settings
} from 'lucide-react';

export const EcosystemPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <section id="hero" className="pt-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white">
              The ERMITS Ecosystem
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
              The ERMITS ecosystem is a set of focused capabilities—CyberCaution™, CyberCorrect™, CyberSoluce™, VendorSoluce™, and more—that execute on priorities defined by ERMITS Advisory through the STEEL™ method.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/ermits-advisory')}
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Explore ERMITS Advisory
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/method/steel')}
                className="border-2 border-navy text-navy dark:border-silver dark:text-silver hover:bg-navy/10 dark:hover:bg-silver/10"
              >
                Learn About STEEL™
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Ecosystem Overview */}
        <section id="ecosystem-overview" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-center">
                  A Connected Set of Capabilities
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  Each ERMITS capability has a specific role. They are designed to be orchestrated, not purchased in isolation. ERMITS Advisory uses the STEEL™ evaluation layer to decide which capabilities matter most for your context.
                </p>
                <ul className="space-y-4 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <AlertCircle size={20} className="mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">CyberCaution™</strong> – threat, incident, and operational readiness capabilities informed by real-world attack dynamics.</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck size={20} className="mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">CyberCorrect™</strong> – compliance, privacy, and control implementation capabilities for standards and regulatory expectations.</span>
                  </li>
                  <li className="flex items-start">
                    <Settings size={20} className="mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">CyberSoluce™</strong> – solution and architecture design, integration, and enablement across your technology stack.</span>
                  </li>
                  <li className="flex items-start">
                    <Network size={20} className="mr-3 mt-0.5 text-orange-500 flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">VendorSoluce™</strong> – vendor, partner, and supply chain risk governance across your external ecosystem.</span>
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* STEEL Bridge Section */}
        <section id="steel-bridge" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-center">
                  How STEEL™ Connects ERMITS Advisory and the ERMITS Ecosystem
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  STEEL™—the Strategic Threat & Enterprise Evaluation Layer—is the bridge between ERMITS Advisory and the ERMITS ecosystem. It determines where attention, budget, and effort should go, and which capabilities should be activated.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-semibold">The interaction is simple:</p>
                <ol className="space-y-4 text-base text-gray-700 dark:text-gray-300 mb-8 list-decimal list-inside">
                  <li>
                    <strong className="text-navy dark:text-white">ERMITS Advisory runs a STEEL™ evaluation.</strong> Strategic, threat, and enterprise realities are assessed and expressed as a STEEL™ Index.
                  </li>
                  <li>
                    <strong className="text-navy dark:text-white">STEEL™ defines priorities.</strong> Which risks matter most, what must happen first, and where governance focus is required.
                  </li>
                  <li>
                    <strong className="text-navy dark:text-white">The ERMITS ecosystem executes.</strong> The relevant capabilities—such as CyberCaution™, CyberCorrect™, CyberSoluce™, or VendorSoluce™—are activated to carry out those priorities.
                  </li>
                  <li>
                    <strong className="text-navy dark:text-white">Telemetry flows back into STEEL™.</strong> Evidence from these capabilities updates the STEEL™ evaluation and Index, reinforcing governance with real data.
                  </li>
                </ol>

                {/* ERMITS Bridge Diagram */}
                <div className="mt-8">
                  <Card className="p-8 bg-white dark:bg-gray-800">
                    <ErmitsBridgeDiagram />
                  </Card>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* STEEL Mapping Table */}
        <section id="ecosystem-mapping" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Mapping the Ecosystem to STEEL™
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each ERMITS capability aligns with aspects of the STEEL™ evaluation sublayers. This mapping keeps execution grounded in the same method used for evaluation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="p-6 md:p-8 overflow-x-auto">
              <div className="min-w-full">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                      <th className="text-left py-4 px-4 font-bold text-navy dark:text-white">
                        ERMITS Capability
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-navy dark:text-white">
                        Role Under STEEL™
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-navy dark:text-white">
                        Typical Outcomes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                          <span className="font-semibold text-navy dark:text-white">CyberCaution™</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Acts on priorities surfaced by the Threat Evaluation Layer: threat modelling, ransomware readiness, incident response improvement.
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Improved readiness, clearer playbooks, reduced time to detect and respond, higher confidence under real-world attack scenarios.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <FileCheck size={20} className="text-green-500 flex-shrink-0" />
                          <span className="font-semibold text-navy dark:text-white">CyberCorrect™</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Acts on priorities from the Strategic and Enterprise Evaluation Layers: regulatory alignment, control implementation, privacy and assurance work.
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Evidence-based compliance, better control coverage, more credible posture with regulators, auditors, and key customers.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Settings size={20} className="text-blue-500 flex-shrink-0" />
                          <span className="font-semibold text-navy dark:text-white">CyberSoluce™</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Acts on architecture and integration needs identified in the Enterprise Evaluation Layer.
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        More coherent security architecture, rationalized tooling, and improved alignment of technology to governance and risk priorities.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <Network size={20} className="text-orange-500 flex-shrink-0" />
                          <span className="font-semibold text-navy dark:text-white">VendorSoluce™</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Acts on vendor and supply chain risk gaps surfaced in the Enterprise Evaluation Layer.
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Stronger vendor governance, clearer contractual requirements, and better visibility into third-party risk.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Callout: Don't start with tools */}
        <section id="tools-callout" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-300 dark:border-yellow-700">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                  Don't Start with Tools
                </h2>
                <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed italic border-l-4 border-navy dark:border-silver pl-6">
                  Instead of guessing which product to buy, organizations enter ERMITS through Advisory. STEEL™ evaluations define what matters most, and only then do we activate the right mix of ERMITS capabilities.
                </blockquote>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This approach keeps your ecosystem lean, purposeful, and aligned with real business and threat realities.
                </p>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Final CTA */}
        <section id="final-cta" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-r from-navy to-navy-dark text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Navigate the Ecosystem Through ERMITS Advisory
              </h2>
              <p className="text-lg text-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                You do not have to learn the entire ERMITS catalog. ERMITS Advisory serves as your navigation layer, using STEEL™ to connect your priorities to the right capabilities in the ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/ermits-advisory')}
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  className="bg-white text-navy hover:bg-silver"
                >
                  Talk to ERMITS Advisory
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/method/steel')}
                  className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/20"
                >
                  Learn About STEEL™
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
