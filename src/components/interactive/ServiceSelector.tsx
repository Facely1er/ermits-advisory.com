import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { ArrowRight, Search, Shield, DraftingCompass, Network } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  whoItsFor: string;
  link?: string;
}

const services: Service[] = [
  {
    id: 'assess',
    icon: <Search size={32} />,
    title: 'Assess',
    tagline: 'STEEL™ Diagnostic',
    description: 'Structured diagnostic across strategic, threat, and enterprise dimensions to establish your security baseline',
    details: [
      'Run STEEL™ Diagnostic across strategic, threat, and enterprise dimensions',
      'Generate STEEL™ Index (Strategic, Threat, and Enterprise scores)',
      'Identify priority gaps, dependencies, and quick wins',
      'Provide baseline diagnostic for governance and transformation planning'
    ],
    whoItsFor: 'Organizations needing a structured baseline diagnostic at the start of transformation or in response to regulatory, customer, or board pressure.',
    link: '/services'
  },
  {
    id: 'architect',
    icon: <DraftingCompass size={32} />,
    title: 'Architect',
    tagline: 'Strategic Roadmap',
    description: 'Transform STEEL™ Diagnostic results into actionable, prioritized governance roadmap',
    details: [
      'Translate STEEL™ Index scores into strategic priorities',
      'Develop sequenced implementation roadmap with timelines',
      'Prioritize based on business impact and risk severity',
      'Map roadmap to ERMITS ecosystem capabilities',
      'Create governance structures to support execution'
    ],
    whoItsFor: 'Organizations that completed STEEL™ Diagnostic and need a clear, prioritized path forward for cyber governance transformation.',
    link: '/services'
  },
  {
    id: 'govern',
    icon: <Shield size={32} />,
    title: 'Govern',
    tagline: 'vCISO Stewardship',
    description: 'Fractional executive security leadership focused on governance, risk, and resilience',
    details: [
      'Provide vCISO leadership operating on STEEL™ foundation',
      'Translate technical and threat realities into board-ready narratives',
      'Oversee execution of STEEL™-aligned roadmap',
      'Coordinate internal teams and external vendors across ERMITS ecosystem',
      'Continuously update leadership on risk posture using STEEL™ Index'
    ],
    whoItsFor: 'Organizations requiring dedicated security leadership but prefer fractional engagement over full-time CISO, valuing governance over purely operational metrics.',
    link: '/vciso-kit'
  },
  {
    id: 'orchestrate',
    icon: <Network size={32} />,
    title: 'Orchestrate',
    tagline: 'GRC+ & Ecosystem',
    description: 'Strategic guidance for GRC alignment, vendor governance, and ecosystem integration',
    details: [
      'Design and refine governance structures aligned with STEEL™',
      'Manage vendor and third-party risk across supply chains',
      'Support frameworks: ISO, NIST, SOC 2, sector-specific regimes',
      'Connect to ERMITS capabilities when technology is needed',
      'Enhance traditional GRC with threat intelligence and enterprise context'
    ],
    whoItsFor: 'Organizations facing regulatory complexity, vendor risk challenges, or needing ecosystem integration guidance.',
    link: '/services'
  }
];

export const ServiceSelector: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const selectedService = services.find(s => s.id === selected);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Service tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {services.map(service => (
          <motion.button
            key={service.id}
            onClick={() => setSelected(service.id === selected ? null : service.id)}
            className={`p-6 rounded-xl transition-all text-center ${
              selected === service.id
                ? 'bg-navy dark:bg-navy-dark text-white shadow-2xl'
                : 'bg-white dark:bg-gray-800 hover:shadow-lg hover:bg-navy/5 dark:hover:bg-gray-700'
            }`}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`mb-3 flex justify-center ${selected === service.id ? 'text-gold' : 'text-navy dark:text-silver'}`}>
              {service.icon}
            </div>
            <h3 className={`font-bold mb-1 ${selected === service.id ? 'text-white' : 'text-navy dark:text-white'}`}>
              {service.title}
            </h3>
            <p className={`text-xs ${selected === service.id ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
              {service.tagline}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Details panel */}
      <AnimatePresence mode="wait">
        {selectedService && (
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Overview */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-navy dark:text-white mb-3">
                    {selectedService.title}: {selectedService.tagline}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                    {selectedService.description}
                  </p>

                  <h4 className="font-bold text-navy dark:text-white mb-3">What We Do:</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-cyan-500 mr-2 mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Who it's for + CTA */}
                <div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-4">
                    <h4 className="font-bold text-navy dark:text-white mb-3">Who It's For:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedService.whoItsFor}
                    </p>
                  </div>

                  <Button
                    variant="primary"
                    className="w-full"
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                    onClick={() => selectedService.link && navigate(selectedService.link)}
                  >
                    Learn More
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full mt-3"
                    onClick={() => navigate('/contact')}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint text when nothing selected */}
      {!selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <p className="text-gray-500 dark:text-gray-400 italic">
            👆 Click any service above to learn more
          </p>
        </motion.div>
      )}
    </div>
  );
};

