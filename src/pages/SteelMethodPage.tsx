import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { SteelIndexCard } from '../components/steel/SteelIndexCard';
import { SteelArchitectureDiagram } from '../components/diagrams/SteelArchitectureDiagram';
import { 
  ArrowRight, Target, Layers, 
  CheckCircle, AlertCircle
} from 'lucide-react';

export const SteelMethodPage: React.FC = () => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
            <div className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-6">
              <span className="text-cyan-700 dark:text-cyan-400 font-semibold">ERMITS Method</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white">
              STEEL™ – The ERMITS Strategic Threat & Enterprise Evaluation Layer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
              STEEL™ is the evaluation layer ERMITS uses to understand your organization's cyber risk, governance, and resilience across the entire enterprise. It turns strategic intent, live threat dynamics, and enterprise realities into a single decision layer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Talk to an Advisor
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/services')}
                className="border-2 border-navy text-navy dark:border-silver dark:text-silver hover:bg-navy/10 dark:hover:bg-silver/10"
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
        </section>

        {/* What Is STEEL */}
        <section id="what-is-steel" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-center">
                  What Is STEEL™?
                </h2>
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-navy dark:text-white">STEEL™</strong> stands for <strong className="text-navy dark:text-white">Strategic Threat & Enterprise Evaluation Layer</strong>. It is not a checklist or a single score—it is a structured evaluation architecture that ERMITS Advisory uses to understand where you are, what pressures you face, and what needs to happen next.
                  </p>
                  <p>
                    STEEL™ combines three internal evaluation sublayers into one coherent method: the <strong className="text-navy dark:text-white">Strategic Evaluation Layer</strong>, the <strong className="text-navy dark:text-white">Threat Evaluation Layer</strong>, and the <strong className="text-navy dark:text-white">Enterprise Evaluation Layer</strong>.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Three Evaluation Sublayers */}
        <section id="steel-sublayers" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              The STEEL™ Evaluation Sublayers
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {/* Strategic Evaluation Layer */}
            <motion.div variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow border-l-4 border-l-navy">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-navy/10 dark:bg-navy/30 rounded-full flex items-center justify-center mb-4">
                    <Target size={32} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    1. Strategic Evaluation Layer
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  The Strategic Evaluation Layer examines how cyber risk and resilience intersect with your business and governance model.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Business and mission alignment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Governance structures and accountability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Risk appetite, tolerance, and decision thresholds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Regulatory and market expectations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Executive and board priorities</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Threat Evaluation Layer */}
            <motion.div variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow border-l-4 border-l-red-500">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle size={32} className="text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    2. Threat Evaluation Layer
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  The Threat Evaluation Layer evaluates the external pressure on your organization from current and emerging threats.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Sector-specific threat landscape and actor profiles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Ransomware, data breach, and fraud exposure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Attack surface and vulnerability posture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Incident readiness and response scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Impact of emerging vulnerabilities and campaigns</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Enterprise Evaluation Layer */}
            <motion.div variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <Layers size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    3. Enterprise Evaluation Layer
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  The Enterprise Evaluation Layer assesses the internal reality of your organization: capabilities, dependencies, and resilience under stress.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Controls, architecture, and security engineering maturity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Processes and workflows across teams and business units</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Data flows, critical assets, and "crown jewels"</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Vendor, partner, and supply chain dependencies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>Operational resilience, continuity, and recovery capabilities</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          {/* STEEL Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-8"
          >
            <Card className="p-8 bg-white dark:bg-gray-800">
              <SteelArchitectureDiagram />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                Together, these sublayers form a single method: <strong className="text-navy dark:text-white">STEEL™</strong>, the Strategic Threat & Enterprise Evaluation Layer. It is one evaluation layer with internal structure—not a list of independent acronym pillars.
              </p>
            </Card>
          </motion.div>
        </section>

        {/* STEEL Index */}
        <section id="steel-index" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              The STEEL™ Index
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mb-8"
          >
            <SteelIndexCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To make STEEL™ actionable, ERMITS Advisory expresses the evaluation as the <strong className="text-navy dark:text-white">STEEL™ Index</strong>: a unified view of where you stand and what must happen next.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">The STEEL™ Index combines three underlying scores:</p>
                <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">Strategic Score (S-score)</strong> – governance alignment, risk appetite clarity, and integration of cyber into business decision-making.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">Threat Score (T-score)</strong> – exposure to active and emerging threats, attack surface readiness, and incident readiness.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">Enterprise Score (E-score)</strong> – capability maturity across controls, architecture, workflows, vendors, and resilience.</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    The STEEL™ Index is a weighted aggregation of these scores. Its purpose is not to chase a perfect number, but to guide:
                  </p>
                  <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-2 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span>Prioritization and sequencing of initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-2 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span>Governance and oversight focus at leadership level</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-2 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span>Which ERMITS ecosystem capabilities should be activated first</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="mr-2 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span>Reporting to executives and boards based on evidence, not anecdotes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* How Advisory Uses STEEL */}
        <section id="advisory-uses-steel" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-center">
                  How ERMITS Advisory Uses STEEL™
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  ERMITS Advisory operates on top of the STEEL™ layer. We run STEEL™ evaluations to establish: where you are today, what pressures matter most, and what the next moves should be.
                </p>
                <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 mb-6">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Assess your posture across the three STEEL™ sublayers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Generate a STEEL™ Index that reflects your real exposure and readiness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Translate the STEEL™ Index into a governance and transformation roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Support executives and boards with STEEL™-aligned reporting and decision support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span>Govern ongoing execution using STEEL™ as the reference layer</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  STEEL™ is therefore the central method that connects strategy, threat, and enterprise realities into one advisory view.
                </p>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* How Ecosystem Connects to STEEL */}
        <section id="ecosystem-connection" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              How the ERMITS Ecosystem Connects to STEEL™
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              The ERMITS ecosystem provides the capabilities that execute on STEEL™-driven priorities. STEEL™ decides <em className="text-navy dark:text-white">what matters</em>; the ecosystem delivers <em className="text-navy dark:text-white">how it gets done</em>.
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
                        STEEL™ Evaluation Sublayer
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-navy dark:text-white">
                        Advisory Focus
                      </th>
                      <th className="text-left py-4 px-4 font-bold text-navy dark:text-white">
                        Activated ERMITS Capabilities
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="py-4 px-4">
                        <div className="flex items-start gap-3">
                          <Target size={20} className="text-navy dark:text-silver mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-navy dark:text-white">Strategic Evaluation Layer</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Governance design, risk appetite definition, executive and board alignment, roadmap and prioritization.
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        ERMITS Advisory (core), strategic reporting, governance structures.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="py-4 px-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-navy dark:text-white">Threat Evaluation Layer</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Threat modelling, ransomware exposure assessment, incident readiness reviews, scenario planning.
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        CyberCaution (threat intelligence, readiness, incident playbooks).
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="py-4 px-4">
                        <div className="flex items-start gap-3">
                          <Layers size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-navy dark:text-white">Enterprise Evaluation Layer</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        Controls and architecture maturity assessment, vendor risk review, workflow and resilience analysis.
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-300">
                        CyberCorrect, CyberSoluce, VendorSoluce and related integrations.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-8"
          >
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                As these capabilities execute and generate evidence, telemetry flows back into STEEL™. This keeps your STEEL™ Index—and your decision-making—continuously current.
              </p>
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
                Start with a STEEL™ Evaluation
              </h2>
              <p className="text-lg text-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Use the STEEL™ Questionnaire and Radar to derive a STEEL™ Index for your
                organization and identify prioritized actions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/steel-evaluation')}
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  className="bg-white text-navy hover:bg-silver"
                >
                  Launch STEEL™ Evaluation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/20"
                >
                  Talk to an Advisor
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
