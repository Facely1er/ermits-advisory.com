import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  ArrowRight, Target, Shield, CheckCircle, FileCheck, Network, Gavel, TrendingUp
} from 'lucide-react';

export const ServiceOffering: React.FC = () => {
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

  const services = [
    {
      id: 'steel-eval',
      title: 'STEEL™ Diagnostic',
      description: 'A structured diagnostic that uses STEEL™—the Strategic Threat & Enterprise Evaluation Layer—to understand your current posture and generate a STEEL™ Index.',
      icon: Target,
      color: 'cyan',
      whatWeDo: [
        'Run a STEEL™ Diagnostic across strategic, threat, and enterprise dimensions',
        'Generate a STEEL™ Index (Strategic, Threat, and Enterprise scores)',
        'Identify priority gaps, dependencies, and quick wins',
        'Provide baseline diagnostic for governance and transformation planning'
      ],
      whoItsFor: 'Organizations that need a structured baseline diagnostic, often at the start of a transformation or in response to heightened regulatory, customer, or board pressure.'
    },
    {
      id: 'roadmap',
      title: 'Strategic Roadmap Development',
      description: 'Transform STEEL™ Diagnostic results into an actionable, prioritized governance and transformation roadmap aligned with your business objectives and risk appetite.',
      icon: TrendingUp,
      color: 'purple',
      whatWeDo: [
        'Translate STEEL™ Index scores into strategic priorities',
        'Develop sequenced implementation roadmap with timelines',
        'Prioritize initiatives based on business impact and risk severity',
        'Map roadmap to ERMITS ecosystem capabilities',
        'Create governance structures to support execution'
      ],
      whoItsFor: 'Organizations that have completed a STEEL™ Diagnostic and need a clear, prioritized path forward for cyber governance and risk management transformation.'
    },
    {
      id: 'vciso',
      title: 'vCISO Stewardship',
      description: 'Fractional or part-time executive security leadership focused on governance, risk, and resilience—not just technology and alerts.',
      icon: Shield,
      color: 'navy',
      whatWeDo: [
        'Provide vCISO leadership operating on top of the STEEL™ Diagnostic layer',
        'Translate technical and threat realities into board-ready narratives',
        'Oversee execution of the STEEL™-aligned roadmap',
        'Coordinate internal teams and external vendors across the ERMITS ecosystem',
        'Continuously update leadership on risk posture using the STEEL™ Index'
      ],
      whoItsFor: 'Organizations that require dedicated security leadership but don\'t have—or don\'t want to start with—a full-time CISO, and that value governance and stewardship over purely operational metrics.'
    },
    {
      id: 'grc',
      title: 'GRC+ Advisory',
      description: 'Strategic guidance for aligning governance, risk management, and compliance with your business model, risk appetite, and regulatory context—enhanced with STEEL™ intelligence.',
      icon: FileCheck,
      color: 'green',
      whatWeDo: [
        'Design and refine governance structures and decision rights',
        'Align risk management with business and regulatory expectations',
        'Support frameworks such as ISO, NIST, SOC 2, and sector-specific regimes',
        'Connect GRC work to STEEL™ Diagnostic and the ERMITS ecosystem',
        'Enhance traditional GRC with threat intelligence and enterprise context'
      ],
      whoItsFor: 'Organizations facing growing regulatory complexity, customer due diligence pressure, or internal fragmentation around risk and compliance responsibilities.'
    },
    {
      id: 'vendor',
      title: 'Vendor & Ecosystem Governance',
      description: 'Advisory support focused on managing risk across vendors, partners, and supply chains, aligned with the Enterprise Evaluation Layer in STEEL™.',
      icon: Network,
      color: 'orange',
      whatWeDo: [
        'Assess vendor and third-party risk posture using STEEL™ inputs',
        'Define governance models and requirements for vendors and partners',
        'Align contract expectations, due diligence, and monitoring',
        'Coordinate with VendorSoluce™ and other ERMITS capabilities as needed'
      ],
      whoItsFor: 'Organizations with complex supply chains, critical vendors, or regulatory expectations around third-party and ecosystem risk.'
    },
    {
      id: 'exec-board',
      title: 'Executive & Board Reporting',
      description: 'Structured reporting and facilitation that helps executives and boards understand, question, and act on cyber risk information anchored in the STEEL™ Index.',
      icon: Gavel,
      color: 'blue',
      whatWeDo: [
        'Design reporting that maps STEEL™ outcomes into business language',
        'Support leadership meetings, board sessions, and critical decision points',
        'Provide external perspective on risk, resilience, and ecosystem dependencies',
        'Align messaging to regulatory and stakeholder expectations'
      ],
      whoItsFor: 'Organizations where cyber has become a board-level topic and leadership needs structured, credible, and non-technical framing of complex realities.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; icon: string }> = {
      cyan: {
        bg: 'bg-cyan-100 dark:bg-cyan-900/30',
        text: 'text-cyan-700 dark:text-cyan-400',
        border: 'border-cyan-500',
        icon: 'text-cyan-600 dark:text-cyan-400'
      },
      navy: {
        bg: 'bg-navy/10 dark:bg-navy/30',
        text: 'text-navy dark:text-silver',
        border: 'border-navy',
        icon: 'text-navy dark:text-silver'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-700 dark:text-green-400',
        border: 'border-green-500',
        icon: 'text-green-600 dark:text-green-400'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-700 dark:text-orange-400',
        border: 'border-orange-500',
        icon: 'text-orange-600 dark:text-orange-400'
      },
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-700 dark:text-blue-400',
        border: 'border-blue-500',
        icon: 'text-blue-600 dark:text-blue-400'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-700 dark:text-purple-400',
        border: 'border-purple-500',
        icon: 'text-purple-600 dark:text-purple-400'
      }
    };
    return colors[color] || colors.navy;
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white">
              ERMITS Advisory Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed">
              A focused set of governance and stewardship services built on top of the STEEL™ Diagnostic framework.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 dark:text-gray-400">
              <span>Learn more:</span>
              <button
                onClick={() => navigate('/method/steel')}
                className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
              >
                About STEEL™
              </button>
              <span>•</span>
              <button
                onClick={() => navigate('/method/steel')}
                className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
              >
                ERMITS Ecosystem
              </button>
            </div>
          </motion.div>
        </section>

        {/* Services */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16 mb-16"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={service.id}
                id={`service-${service.id}`}
                variants={item}
              >
                <Card className="p-8 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon size={32} className={colors.icon} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                          {service.title}
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <h3 className="text-xl font-bold text-navy dark:text-white mb-4 flex items-center gap-2">
                          <CheckCircle size={20} className={colors.icon} />
                          What We Do
                        </h3>
                        <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                          {service.whatWeDo.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle size={18} className={`mr-3 mt-0.5 ${colors.icon} flex-shrink-0`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-navy dark:text-white mb-4 flex items-center gap-2">
                          <Target size={20} className={colors.icon} />
                          Who It's For
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          {service.whoItsFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Final CTA */}
        <section id="final-cta" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-r from-navy to-navy-dark text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Design the Right Engagement with ERMITS Advisory
              </h2>
              <p className="text-lg text-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Every engagement starts with understanding your context. From a focused STEEL™ Diagnostic to an ongoing vCISO stewardship model, ERMITS Advisory can be calibrated to your scale, sector, and urgency.
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
