import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  ArrowRight, Target, Shield, CheckCircle, FileCheck, Network, Gavel, TrendingUp
} from 'lucide-react';

export const ServiceOffering: React.FC = () => {
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

  const servicesData = t('services.items', { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
    whatWeDo: string[];
    whoItsFor: string;
  }>;

  const iconMap: Record<string, any> = {
    'steel-eval': Target,
    'roadmap': TrendingUp,
    'vciso': Shield,
    'grc': FileCheck,
    'vendor': Network,
    'exec-board': Gavel
  };

  const colorMap: Record<string, string> = {
    'steel-eval': 'cyan',
    'roadmap': 'purple',
    'vciso': 'navy',
    'grc': 'green',
    'vendor': 'orange',
    'exec-board': 'blue'
  };

  const services = servicesData.map(service => ({
    ...service,
    icon: iconMap[service.id],
    color: colorMap[service.id]
  }));

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
              {t('services.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {t('services.hero.subtitle')}
            </p>
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
                          {t('services.whatWeDo')}
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
                          {t('services.whoItsFor')}
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
                {t('services.finalCta.title')}
              </h2>
              <p className="text-lg text-silver/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('services.finalCta.description')}
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="bg-white text-navy hover:bg-silver"
              >
                {t('services.finalCta.button')}
              </Button>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
