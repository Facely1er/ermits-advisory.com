import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Award, Target, Globe,
  Calendar, Briefcase, ArrowRight, Shield,
  GraduationCap, Scale, UserCheck, Brain, CheckCircle
} from 'lucide-react';
import teamImage from '../assets/image.png';

export const AboutPage: React.FC = () => {
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
      category: "Technical Certifications",
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      credentials: [
        { name: "CISSP", description: "Certified Information Systems Security Professional - Advanced cybersecurity expertise" },
        { name: "CISA", description: "Certified Information Systems Auditor - Risk assessment and compliance" },
        { name: "PMP", description: "Project Management Professional - Strategic implementation leadership" },
        { name: "PMI-ACP", description: "PMI Agile Certified Practitioner - Modern delivery methodologies" },
        { name: "ITIL", description: "ITIL Foundation - Service management excellence" }
      ]
    },
    {
      category: "Legal Credentials",
      icon: <Scale size={24} className="text-navy dark:text-silver" />,
      credentials: [
        { name: "J.D.", description: "Juris Doctor - Legal expertise in cybersecurity law and compliance" },
        { name: "Privacy Law Specialist", description: "Expert in GDPR, CCPA, and international privacy regulations" },
        { name: "GDPR/CCPA", description: "Data protection and privacy compliance expertise" },
        { name: "M&A Legal Advisory", description: "Specialized legal counsel for technology transactions" }
      ]
    }
  ];

  // Enhanced company values with professional focus
  const companyValues = [
    {
      icon: <UserCheck size={24} className="text-navy dark:text-silver" />,
      title: "Excellence",
      description: "Delivering exceptional results through technical mastery and strategic insight"
    },
    {
      icon: <Brain size={24} className="text-navy dark:text-silver" />,
      title: "Intelligence",
      description: "Leveraging global threat intelligence to inform strategic decision-making"
    },
    {
      icon: <Scale size={24} className="text-navy dark:text-silver" />,
      title: "Legal Precision",
      description: "Ensuring compliance and risk mitigation through legal expertise"
    },
    {
      icon: <Target size={24} className="text-navy dark:text-silver" />,
      title: "Strategic Focus",
      description: "Connecting cybersecurity initiatives to business objectives and outcomes"
    }
  ];

  // Professional achievements
  const professionalStats = [
    {
      icon: <Award size={24} className="text-navy dark:text-silver" />,
      value: "5+",
      label: "Professional Certifications",
      description: "Professional credentials"
    },
    {
      icon: <Globe size={24} className="text-navy dark:text-silver" />,
      value: "100+",
      label: "Risk Assessments Completed",
      description: "Strategic evaluations delivered"
    },
    {
      icon: <Briefcase size={24} className="text-navy dark:text-silver" />,
      value: "Improved",
      label: "Board Confidence Improvement",
      description: "Enhanced decision-making capability"
    },
    {
      icon: <CheckCircle size={24} className="text-navy dark:text-silver" />,
      value: "Significant",
      label: "Average Risk Reduction",
      description: "Measurable security improvement"
    }
  ];

  // STEEL methodology dimensions
  const steelDimensions = [
    { letter: "S", word: "Social", color: "bg-blue-500" },
    { letter: "T", word: "Technology", color: "bg-green-500" },
    { letter: "E", word: "Economic", color: "bg-yellow-500" },
    { letter: "E", word: "Environmental", color: "bg-purple-500" },
    { letter: "L", word: "Legal", color: "bg-red-500" },
    { letter: "L", word: "Political", color: "bg-indigo-500" }
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Global Cybersecurity Leadership</h1>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  ERMITS Advisory was founded on the principle that cybersecurity strategy requires both technical depth and legal sophistication. Traditional cybersecurity consulting often lacks the legal perspective necessary for comprehensive risk management.
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  Our unique combination of advanced cybersecurity certifications and legal expertise positions us to address the complex intersection of technology, law, and business strategy.
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  The STEEL™ framework represents our commitment to innovation, extending traditional PESTEL analysis with cybersecurity-specific factors to provide comprehensive strategic visibility.
                </p>

                {/* Enhanced metrics */}
                <div className="bg-navy/5 dark:bg-silver/5 rounded-lg p-4">
                  <h4 className="font-semibold text-navy dark:text-white mb-3">Value We Deliver:</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      Technical expertise backed by legal knowledge
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      Strategic insights that connect security to business objectives
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      Global perspective with local implementation capability
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
                      <h3 className="text-lg font-bold mb-2">Strategic Advisory Excellence</h3>
                      <p className="text-sm opacity-90">Where cybersecurity meets legal expertise</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">Our Core Values</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The STEEL™ Innovation</h2>
              <p className="text-silver max-w-3xl mx-auto mb-8">
                Our proprietary methodology revolutionizes strategic risk assessment by integrating cybersecurity intelligence into environmental analysis
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Global Reach, Local Expertise</h2>
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
                      <p className="text-sm text-gray-600 dark:text-gray-300">Expertise in global cybersecurity regulations and compliance requirements</p>
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
                  onClick={() => navigate('/contact')}
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

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card variant="solid" padding="lg" className="bg-gradient-to-r from-navy to-navy-dark text-white">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner with Industry Leaders</h2>
              <p className="text-silver max-w-3xl mx-auto mb-8">
                Join organizations worldwide who trust ERMITS Advisory for strategic cybersecurity guidance that connects technical excellence with legal precision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Calendar size={18} />}
                  onClick={() => navigate('/contact')}
                >
                  Schedule Strategic Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  icon={<Shield size={18} />}
                  iconPosition="right"
                  onClick={() => navigate('/services')}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};