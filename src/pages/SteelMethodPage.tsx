import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
                  {t('steel.whatIsSteel.title')}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-navy dark:text-white">STEEL™</strong> {t('steel.whatIsSteel.intro')} <strong className="text-navy dark:text-white">{t('steel.whatIsSteel.fullName')}</strong>. {t('steel.whatIsSteel.description1')}
                  </p>
                  <p>
                    {t('steel.whatIsSteel.description2')} <strong className="text-navy dark:text-white">{t('steel.whatIsSteel.strategic')}</strong>, {t('steel.whatIsSteel.threat')}, {t('steel.whatIsSteel.enterprise')}.
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
                  {t('steel.pestelFoundation.title')}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    {t('steel.pestelFoundation.description1')} <strong className="text-navy dark:text-white">{t('steel.pestelFoundation.pestel')}</strong> {t('steel.pestelFoundation.pestelDescription')}
                  </p>
                  <p>
                    {t('steel.pestelFoundation.description2')} <strong className="text-navy dark:text-white">{t('steel.pestelFoundation.focus')}</strong> {t('steel.pestelFoundation.description3')}
                  </p>
                  <ul className="space-y-3 my-6 ml-6">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span><strong className="text-navy dark:text-white">{t('steel.pestelFoundation.strategicLayer.title')}</strong> — {t('steel.pestelFoundation.strategicLayer.description')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span><strong className="text-navy dark:text-white">{t('steel.pestelFoundation.threatLayer.title')}</strong> — {t('steel.pestelFoundation.threatLayer.description')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 text-cyan-500 flex-shrink-0" />
                      <span><strong className="text-navy dark:text-white">{t('steel.pestelFoundation.enterpriseLayer.title')}</strong> — {t('steel.pestelFoundation.enterpriseLayer.description')}</span>
                    </li>
                  </ul>
                  <p className="pt-4 border-t border-cyan-200 dark:border-cyan-700">
                    <strong className="text-navy dark:text-white">{t('steel.pestelFoundation.result')}</strong> {t('steel.pestelFoundation.conclusion')}
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
                  {t('steel.advisoryUses.title')}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('steel.advisoryUses.description')}
                </p>
                <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 mb-6">
                  {(t('steel.advisoryUses.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={20} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              {t('steel.sublayers.title')}
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
                <div className="mb-4 text-center">
                  <div className="w-16 h-16 bg-navy/10 dark:bg-navy/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target size={32} className="text-navy dark:text-silver" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    {t('steel.sublayers.strategic.number')} {t('steel.sublayers.strategic.title')}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {t('steel.sublayers.strategic.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {(t('steel.sublayers.strategic.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={16} className="mr-2 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Threat Evaluation Layer */}
            <motion.div variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow border-l-4 border-l-red-500">
                <div className="mb-4 text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <AlertCircle size={32} className="text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    {t('steel.sublayers.threat.number')} {t('steel.sublayers.threat.title')}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {t('steel.sublayers.threat.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {(t('steel.sublayers.threat.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={16} className="mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Enterprise Evaluation Layer */}
            <motion.div variants={item}>
              <Card className="h-full p-6 hover:shadow-xl transition-shadow border-l-4 border-l-blue-500">
                <div className="mb-4 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Layers size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">
                    {t('steel.sublayers.enterprise.number')} {t('steel.sublayers.enterprise.title')}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {t('steel.sublayers.enterprise.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {(t('steel.sublayers.enterprise.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
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
                {t('steel.sublayers.conclusion')} <strong className="text-navy dark:text-white">STEEL™</strong>, {t('steel.sublayers.conclusionText')}
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
              {t('steel.steelIndex.title')}
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
                  {t('steel.steelIndex.intro')} <strong className="text-navy dark:text-white">{t('steel.steelIndex.indexName')}</strong>: {t('steel.steelIndex.description')}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400">{t('steel.steelIndex.combines')}</p>
                <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-navy dark:text-silver flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">{t('steel.steelIndex.scores.strategic.name')}</strong> – {t('steel.steelIndex.scores.strategic.description')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">{t('steel.steelIndex.scores.threat.name')}</strong> – {t('steel.steelIndex.scores.threat.description')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span><strong className="text-navy dark:text-white">{t('steel.steelIndex.scores.enterprise.name')}</strong> – {t('steel.steelIndex.scores.enterprise.description')}</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {t('steel.steelIndex.purpose')}
                  </p>
                  <ul className="space-y-2 text-base text-gray-600 dark:text-gray-400">
                    {(t('steel.steelIndex.guidance', { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={18} className="mr-2 mt-0.5 text-cyan-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
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
              {t('steel.ecosystem.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              {t('steel.ecosystem.subtitle')}
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
                {t('steel.ecosystem.mappingTitle')}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t('steel.ecosystem.mappingDescription')}
              </p>
              
              <div className="space-y-6">
                {/* Strategic Layer */}
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h4 className="text-xl font-bold text-navy dark:text-white mb-3">{t('steel.ecosystem.strategicLayer.title')}</h4>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    {t('steel.ecosystem.strategicLayer.description')}
                  </p>
                  <div className="flex items-start mb-2">
                    <ArrowRight size={18} className="mr-2 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">{t('steel.ecosystem.strategicLayer.mapsTo')}</strong> {t('steel.ecosystem.strategicLayer.capabilities')}</span>
                  </div>
                </div>

                {/* Threat Layer */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h4 className="text-xl font-bold text-navy dark:text-white mb-3">{t('steel.ecosystem.threatLayer.title')}</h4>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    {t('steel.ecosystem.threatLayer.description')}
                  </p>
                  <div className="flex items-center gap-3 mb-2">
                    <img src={cyberCautionLogo} alt="CyberCaution" className="w-10 h-10 object-contain flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">{t('steel.ecosystem.threatLayer.mapsTo')}</strong> <strong className="text-red-600 dark:text-red-400">CyberCaution™</strong> – {t('steel.ecosystem.threatLayer.capabilities')}</span>
                  </div>
                </div>

                {/* Enterprise Layer */}
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="text-xl font-bold text-navy dark:text-white mb-3">{t('steel.ecosystem.enterpriseLayer.title')}</h4>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    {t('steel.ecosystem.enterpriseLayer.description')}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img src={cyberCorrectLogo} alt="CyberCorrect" className="w-10 h-10 object-contain flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">{t('steel.ecosystem.enterpriseLayer.mapsTo')}</strong> <strong className="text-green-600 dark:text-green-400">CyberCorrect™</strong> – {t('steel.ecosystem.enterpriseLayer.cyberCorrect')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={cyberSoluceLogo} alt="CyberSoluce" className="w-10 h-10 object-contain flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">{t('steel.ecosystem.enterpriseLayer.mapsTo')}</strong> <strong className="text-blue-600 dark:text-blue-400">CyberSoluce™</strong> – {t('steel.ecosystem.enterpriseLayer.cyberSoluce')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={vendorSoluceLogo} alt="VendorSoluce" className="w-10 h-10 object-contain flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300"><strong className="text-navy dark:text-white">{t('steel.ecosystem.enterpriseLayer.mapsTo')}</strong> <strong className="text-orange-600 dark:text-orange-400">VendorSoluce™</strong> – {t('steel.ecosystem.enterpriseLayer.vendorSoluce')}</span>
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
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-6">
                {t('steel.ecosystem.closedLoop')}
              </p>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => window.open('https://www.ermits.com', '_blank')}
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  {t('steel.ecosystem.exploreButton')}
                </Button>
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
                {t('steel.finalCta.title')}
              </h2>
              <p className="text-lg text-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('steel.finalCta.description')}
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="bg-white text-navy hover:bg-silver"
              >
                {t('steel.finalCta.button')}
              </Button>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
