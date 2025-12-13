import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { SteelIndexCard } from '../components/steel/SteelIndexCard';
import { 
  ArrowRight, Target, Layers, 
  CheckCircle, AlertCircle
} from 'lucide-react';

// Import brand logos
import cyberCautionLogo from '../assets/cybercaution.png';
import cyberCorrectLogo from '../assets/cybercorrect.png';
import cyberSoluceLogo from '../assets/cybersoluce.png';
import vendorSoluceLogo from '../assets/vendorsoluce.png';

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
        {/* What Is STEEL */}
        <section id="what-is-steel" className="pt-16 mb-16">
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
                    <strong className="text-navy dark:text-white">STEEL™</strong> stands for <strong className="text-navy dark:text-white">Strategic Threat & Enterprise Evaluation Layer</strong>. It is not a checklist or a single score—it is a structured diagnostic architecture that ERMITS Advisory uses to understand where you are, what pressures you face, and what needs to happen next.
                  </p>
                  <p>
                    STEEL™ combines three internal diagnostic sublayers into one coherent method: the <strong className="text-navy dark:text-white">Strategic Diagnostic Layer</strong>, the <strong className="text-navy dark:text-white">Threat Diagnostic Layer</strong>, and the <strong className="text-navy dark:text-white">Enterprise Diagnostic Layer</strong>.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* PESTEL Foundation & STEEL Enhancement */}
        <section id="pestel-foundation" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-700/50">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-center">
                  Built on PESTEL, Enhanced for Cybersecurity
                </h2>
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    STEEL™ is built on the proven foundation of <strong className="text-navy dark:text-white">PESTEL analysis</strong> (Political, Economic, Social, Technological, Environmental, Legal) — a strategic framework used by organizations worldwide to understand external factors affecting their business.
                  </p>
                  <p>
                    ERMITS enhanced PESTEL specifically for <strong className="text-navy dark:text-white">cybersecurity and enterprise risk management</strong> by adding three critical evaluation dimensions that PESTEL alone doesn't address:
                  </p>
                  <ul className="space-y-3 my-6 ml-6">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span><strong className="text-navy dark:text-white">Strategic Layer</strong> — How cyber risk integrates with business strategy, governance, and board-level decision-making</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span><strong className="text-navy dark:text-white">Threat Layer</strong> — Real-time threat intelligence, attack surface analysis, and incident readiness specific to your sector</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span><strong className="text-navy dark:text-white">Enterprise Layer</strong> — Internal capabilities, vendor dependencies, controls maturity, and operational resilience</span>
                    </li>
                  </ul>
                  <p className="pt-4 border-t border-cyan-200 dark:border-cyan-700">
                    <strong className="text-navy dark:text-white">The result:</strong> STEEL™ maintains PESTEL's strategic rigor while adding the cyber-specific depth that executives need to make informed security investments and understand their true risk posture.
                  </p>
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
                  ERMITS Advisory operates on top of the STEEL™ layer. We run STEEL™ Diagnostics to establish: where you are today, what pressures matter most, and what the next moves should be.
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

        {/* Three Evaluation Sublayers */}
        <section id="steel-sublayers" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              The STEEL™ Diagnostic Sublayers
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
                    1. Strategic Diagnostic Layer
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  The Strategic Diagnostic Layer examines how cyber risk and resilience intersect with your business and governance model.
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
                    2. Threat Diagnostic Layer
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  The Threat Diagnostic Layer evaluates the external pressure on your organization from current and emerging threats.
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
                    3. Enterprise Diagnostic Layer
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  The Enterprise Diagnostic Layer assesses the internal reality of your organization: capabilities, dependencies, and resilience under stress.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                Together, these sublayers form a single method: <strong className="text-navy dark:text-white">STEEL™</strong>, the Strategic Threat & Enterprise Evaluation Layer. It is one diagnostic layer with internal structure—not a list of independent acronym pillars.
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
                  To make STEEL™ actionable, ERMITS Advisory expresses the diagnostic as the <strong className="text-navy dark:text-white">STEEL™ Index</strong>: a unified view of where you stand and what must happen next.
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

        {/* How Ecosystem Connects to STEEL */}
        <section id="ecosystem-connection" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              How STEEL™ Connects Advisory to the ERMITS Ecosystem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              STEEL™ is the bridge between ERMITS Advisory and the ERMITS ecosystem capabilities. It determines where attention, budget, and effort should go, and which capabilities should be activated.
            </p>
          </motion.div>

          {/* Ecosystem Capabilities Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-12"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 dark:text-white text-center">
                Mapping STEEL™ Layers to the ERMITS Ecosystem
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Each layer of the STEEL™ diagnostic framework connects directly to specialized capabilities within the ERMITS ecosystem. Together, they create a closed-loop system for governance, risk management, and resilience.
              </p>
              
              <div className="space-y-6">
                {/* Strategic Layer */}
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h4 className="text-xl font-bold text-navy dark:text-white mb-3">Strategic Diagnostic Layer</h4>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    Assesses business context, governance maturity, stakeholder alignment, and risk appetite.
                  </p>
                  <div className="flex items-start mb-2">
                    <ArrowRight size={18} className="mr-2 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">Maps to:</strong> ERMITS Advisory Services – vCISO Stewardship, GRC+ Advisory, Executive & Board Reporting</span>
                  </div>
                </div>

                {/* Threat Layer */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h4 className="text-xl font-bold text-navy dark:text-white mb-3">Threat Diagnostic Layer</h4>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    Evaluates threat landscape, adversary tactics, operational readiness, and incident response capability.
                  </p>
                  <div className="flex items-center gap-3 mb-2">
                    <img src={cyberCautionLogo} alt="CyberCaution" className="w-10 h-10 object-contain flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">Maps to:</strong> <strong className="text-red-600 dark:text-red-400">CyberCaution™</strong> – Threat intelligence, incident response, and operational readiness capabilities</span>
                  </div>
                </div>

                {/* Enterprise Layer */}
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="text-xl font-bold text-navy dark:text-white mb-3">Enterprise Diagnostic Layer</h4>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    Examines technology architecture, vendor ecosystem, operational dependencies, and control implementation.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img src={cyberCorrectLogo} alt="CyberCorrect" className="w-10 h-10 object-contain flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">Maps to:</strong> <strong className="text-green-600 dark:text-green-400">CyberCorrect™</strong> – Compliance, privacy, and control implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={cyberSoluceLogo} alt="CyberSoluce" className="w-10 h-10 object-contain flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">Maps to:</strong> <strong className="text-blue-600 dark:text-blue-400">CyberSoluce™</strong> – Solution design, architecture, and technology enablement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={vendorSoluceLogo} alt="VendorSoluce" className="w-10 h-10 object-contain flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">Maps to:</strong> <strong className="text-orange-600 dark:text-orange-400">VendorSoluce™</strong> – Vendor and supply chain risk governance</span>
                    </div>
                  </div>
                </div>
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how STEEL™ and the ERMITS ecosystem can strengthen your organization's risk posture.
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="bg-white text-navy hover:bg-silver"
              >
                Contact Our Team
              </Button>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
