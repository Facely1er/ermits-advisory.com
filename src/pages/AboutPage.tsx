import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Award, Users, Target, Clock, ChevronRight, Globe,
  Calendar, BookOpen, Briefcase, ArrowRight, Shield,
  GraduationCap, Scale, UserCheck, Brain, CheckCircle,
  Zap, Eye, Heart
} from 'lucide-react';
import teamImage from '../assets/image.png';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // Animation variants
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

  // Leadership credentials
  const leadershipCredentials = [
    {
      category: t('about.leadership.technical.title'),
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      credentials: [
        { name: "CISSP", description: t('about.leadership.technical.cissp') },
        { name: "CISA", description: t('about.leadership.technical.cisa') },
        { name: "PMP", description: t('about.leadership.technical.pmp') },
        { name: "PMI-ACP", description: t('about.leadership.technical.pmiacp') },
        { name: "ITIL", description: t('about.leadership.technical.itil') }
      ]
    },
    {
      category: t('about.leadership.legal.title'),
      icon: <Scale size={24} className="text-navy dark:text-silver" />,
      credentials: [
        { name: "J.D.", description: t('about.leadership.legal.jd') },
        { name: t('about.leadership.legal.privacy.name'), description: t('about.leadership.legal.privacy.description') },
        { name: "GDPR/CCPA", description: t('about.leadership.legal.gdpr') },
        { name: t('about.leadership.legal.ma.name'), description: t('about.leadership.legal.ma.description') }
      ]
    }
  ];

  // Enhanced company values with professional focus
  const companyValues = [
    {
      icon: <UserCheck size={24} className="text-navy dark:text-silver" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: <Brain size={24} className="text-navy dark:text-silver" />,
      title: t('about.values.intelligence.title'),
      description: t('about.values.intelligence.description')
    },
    {
      icon: <Scale size={24} className="text-navy dark:text-silver" />,
      title: t('about.values.legal.title'),
      description: t('about.values.legal.description')
    },
    {
      icon: <Target size={24} className="text-navy dark:text-silver" />,
      title: t('about.values.strategic.title'),
      description: t('about.values.strategic.description')
    }
  ];

  // Professional achievements
  const professionalStats = [
    {
      icon: <Award size={24} className="text-navy dark:text-silver" />,
      value: "5+",
      label: t('about.stats.certifications.label'),
      description: t('about.stats.certifications.description')
    },
    {
      icon: <Globe size={24} className="text-navy dark:text-silver" />,
      value: "100+",
      label: t('about.stats.assessments.label'),
      description: t('about.stats.assessments.description')
    },
    {
      icon: <Briefcase size={24} className="text-navy dark:text-silver" />,
      value: "92%",
      label: t('about.stats.confidence.label'),
      description: t('about.stats.confidence.description')
    },
    {
      icon: <CheckCircle size={24} className="text-navy dark:text-silver" />,
      value: "67%",
      label: t('about.stats.reduction.label'),
      description: t('about.stats.reduction.description')
    }
  ];

  // STEEL methodology dimensions
  const steelDimensions = [
    { letter: "S", word: t('steel.dimensions.social.title'), color: "bg-blue-500" },
    { letter: "T", word: t('steel.dimensions.technology.title'), color: "bg-green-500" },
    { letter: "E", word: t('steel.dimensions.economic.title'), color: "bg-yellow-500" },
    { letter: "E", word: t('steel.dimensions.environmental.title'), color: "bg-purple-500" },
    { letter: "L", word: t('steel.dimensions.legal.title'), color: "bg-red-500" },
    { letter: "L", word: t('steel.dimensions.political.title'), color: "bg-indigo-500" }
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
              {t('about.hero.badge')}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">{t('about.hero.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-4xl mx-auto mb-8">
            {t('about.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon={<Calendar size={18} />}
              onClick={() => navigate('/contact')}
            >
              {t('about.hero.cta.schedule')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              onClick={() => navigate('/services')}
            >
              {t('about.hero.cta.explore')}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">{t('about.leadership.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              {t('about.leadership.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {leadershipCredentials.map((category, index) => (
              <motion.div key={index} variants={item}>
                <Card variant="glass" padding="lg" className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.credentials.map((cred, credIndex) => (
                      <div key={credIndex} className="border-l-4 border-navy/20 dark:border-silver/20 pl-4">
                        <h4 className="font-semibold text-navy dark:text-white">{cred.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{cred.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {professionalStats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="text-center"
              >
                <Card variant="glass" padding="md">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 inline-flex mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-navy dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Card variant="glass" padding="lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">{t('about.story.title')}</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {t('about.story.paragraph1')}
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {t('about.story.paragraph2')}
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  {t('about.story.paragraph3')}
                </p>
                
                {/* Enhanced metrics */}
                <div className="bg-navy/5 dark:bg-silver/5 rounded-lg p-4">
                  <h4 className="font-semibold text-navy dark:text-white mb-3">{t('about.story.value.title')}</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      {t('about.story.value.point1')}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      {t('about.story.value.point2')}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      {t('about.story.value.point3')}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden h-80 relative">
                  <img 
                    src={teamImage} 
                    alt="ERMITS Advisory leadership team" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-lg font-bold mb-2">{t('about.story.imageCaption.title')}</h3>
                      <p className="text-sm opacity-90">{t('about.story.imageCaption.subtitle')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Enhanced Our Values Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div key={index} variants={item}>
                <Card variant="glass" padding="md" className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 inline-flex mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* STEEL™ Methodology Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Card variant="solid" padding="lg" className="bg-navy text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('about.steel.title')}</h2>
              <p className="text-silver max-w-3xl mx-auto mb-8">
                {t('about.steel.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {steelDimensions.map((dimension, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${dimension.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-2`}>
                    {dimension.letter}
                  </div>
                  <span className="text-sm font-medium">{dimension.word}</span>
                </div>
              ))}
            </div>
          </Card>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">{t('about.global.title')}</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  {t('about.global.description')}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Shield size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('about.global.features.intelligence.title')}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.global.features.intelligence.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Scale size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('about.global.features.legal.title')}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.global.features.legal.description')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Target size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{t('about.global.features.strategic.title')}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.global.features.strategic.description')}</p>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={() => navigate('/contact')}
                >
                  {t('about.global.cta')}
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
                      <h3 className="text-xl font-bold mb-2">{t('about.global.imageCaption.title')}</h3>
                      <p className="text-sm opacity-90">{t('about.global.imageCaption.subtitle')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card variant="solid" padding="lg" className="bg-gradient-to-r from-navy to-navy-dark text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
              <p className="text-silver max-w-3xl mx-auto mb-8">
                {t('about.cta.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  icon={<Calendar size={18} />}
                  onClick={() => navigate('/contact')}
                >
                  {t('about.cta.schedule')}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  icon={<Shield size={18} />}
                  iconPosition="right"
                  onClick={() => navigate('/services')}
                >
                  {t('about.cta.explore')}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};