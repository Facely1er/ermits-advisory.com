import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowRight, Shield, CheckCircle, FileText, Users, Briefcase, Target } from 'lucide-react';

export const SteelExecutiveDiagnostic: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* SECTION A - Hero */}
        <section className="py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/10 dark:bg-silver/10 text-navy dark:text-silver text-sm font-medium mb-6">
              <Shield size={16} />
              <span>STEEL™ Executive Diagnostic</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              STEEL™ Executive Diagnostic
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              A single diagnostic that tells your board whether your cyber and privacy posture is Exposed, Reactive, Imbalanced, Aligned, or Resilient.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Request STEEL Session
            </Button>
          </motion.div>
        </section>

        {/* SECTION B - What STEEL Measures */}
        <section id="steel-overview" className="py-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                What STEEL Measures
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                STEEL does NOT count controls or tools. Instead, it reveals structural asymmetries by evaluating risk across six dimensions:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  dimension: 'Political',
                  description: 'Regulatory changes, policy shifts, geopolitical conflict, and critical infrastructure exposure.'
                },
                {
                  dimension: 'Economic',
                  description: 'Market forces, trade dependencies, financial sector risks, and economic disruption patterns.'
                },
                {
                  dimension: 'Social',
                  description: 'Behavioral trends, cultural shifts, trust dynamics, and social engineering vectors.'
                },
                {
                  dimension: 'Technological',
                  description: 'Innovation cycles, threat evolution, technology adoption risks, and digital transformation exposure.'
                },
                {
                  dimension: 'Environmental',
                  description: 'Climate-related risks, resource constraints, and environmental regulation impacts.'
                },
                {
                  dimension: 'Legal',
                  description: 'Compliance obligations, liability exposure, regulatory enforcement trends, and legal framework changes.'
                }
              ].map((dim, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full p-6">
                    <h3 className="text-lg font-semibold mb-3 dark:text-white">
                      {dim.dimension}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {dim.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION C - How STEEL Works */}
        <section className="py-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                How STEEL Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Input',
                  description: 'Executive questionnaire (18 questions) and optional data signals from ERMITS platforms (CyberCaution, CyberCorrect, VendorSoluce, CyberSoluce, TechnoSoluce).'
                },
                {
                  step: '2',
                  title: 'Computation',
                  description: 'Weighted dimension scores across all six PESTEL dimensions, composite score (0–100), and classification (Exposed → Reactive → Imbalanced → Aligned → Resilient).'
                },
                {
                  step: '3',
                  title: 'Diagnosis',
                  description: 'Up to 3 structural asymmetries identified. 3–5 enterprise priorities for the next 12–24 months, ranked by impact and feasibility.'
                },
                {
                  step: '4',
                  title: 'Execution',
                  description: 'Outputs drive governance changes and platform configuration. High-level mapping to ERMITS ecosystem tools for implementation.'
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full p-6">
                    <div className="text-3xl font-bold text-navy dark:text-silver mb-3">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION D - Typical Use Cases */}
        <section className="py-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                Typical Use Cases
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Users size={24} className="text-navy dark:text-silver" />,
                  title: 'Board Readiness',
                  description: 'Pre- and post-incident board presentations. Demonstrate governance maturity and risk awareness to directors.'
                },
                {
                  icon: <FileText size={24} className="text-navy dark:text-silver" />,
                  title: 'Regulatory & Enforcement Scrutiny Readiness',
                  description: 'Prepare for regulatory examinations, enforcement actions, or legal discovery. Show evidence of due diligence and oversight.'
                },
                {
                  icon: <Briefcase size={24} className="text-navy dark:text-silver" />,
                  title: 'Investor & M&A Diligence',
                  description: 'Due diligence for investments, acquisitions, or divestitures. Quantify cyber and privacy risk exposure.'
                },
                {
                  icon: <Target size={24} className="text-navy dark:text-silver" />,
                  title: 'Multi-Region Expansion Planning',
                  description: 'When regulatory and supply-chain risk explodes across jurisdictions. Map risk before entering new markets.'
                }
              ].map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full p-6">
                    <div className="mb-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 dark:text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {useCase.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION E - What You Receive */}
        <section className="py-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-navy/5 to-silver-light dark:from-dark-surface dark:to-dark-bg">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">
                  What You Receive
                </h2>
                <ul className="space-y-4">
                  {[
                    'STEEL classification: Your organization\'s posture rated as Exposed, Reactive, Imbalanced, Aligned, or Resilient.',
                    'Six-dimension radar and scores: Visual representation and numerical scores for each PESTEL dimension (Political, Economic, Social, Technological, Environmental, Legal).',
                    'Up to 3 structural asymmetries: The most critical gaps that traditional audits miss, explained in board-ready language.',
                    '3–5 enterprise priorities: Ranked recommendations for the next 12–24 months, with impact and feasibility assessments.'
                  ].map((item, idx) => (
                    <li key={idx}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* SECTION F - Call to Action */}
        <section className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 md:p-12 bg-white dark:bg-dark-surface">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a STEEL Briefing to see how the diagnostic works and discuss how it can address your organization's specific needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                >
                  Schedule a STEEL Briefing
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/contact')}
                >
                  Discuss Integration with ERMITS Platforms
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

