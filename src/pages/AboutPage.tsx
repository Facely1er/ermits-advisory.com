import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Award, Target,
  Calendar, ArrowRight, Shield,
  GraduationCap, Scale
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  // Leadership credentials
  const leadershipCredentials = [
    {
      category: "Technical Certifications",
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      credentials: [
        { name: "CISSP", description: "Certified Information Systems Security Professional - Advanced cybersecurity expertise" },
        { name: "CISA", description: "Certified Information Systems Auditor - Risk assessment and compliance" },
        { name: "PMP", description: "Project Management Professional - Strategic implementation leadership" },
        { name: "PMI-ACP", description: "PMI Agile Certified Practitioner - Modern delivery methodologies" }
      ]
    },
    {
      category: "Legal Credentials",
      icon: <Scale size={24} className="text-navy dark:text-silver" />,
      credentials: [
        { name: "J.D. & LL.M.", description: "Legal Background - Focus on federal litigation, public records laws, and regulatory compliance with advanced knowledge of privacy and cybersecurity laws" }
      ]
    }
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Worldclass Cybersecurity Leadership</h1>
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
          
          <div className="max-w-5xl mx-auto">
            <Card variant="glass" padding="lg" className="bg-white dark:bg-dark-surface">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Technical Certifications */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                      {leadershipCredentials[0].icon}
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">{leadershipCredentials[0].category}</h3>
                  </div>
                  <div className="space-y-4">
                    {leadershipCredentials[0].credentials.map((cred, credIndex) => (
                      <div key={credIndex} className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                        <h4 className="font-semibold text-navy dark:text-white mb-1">{cred.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{cred.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal Credentials */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                      {leadershipCredentials[1].icon}
                    </div>
                    <h3 className="text-xl font-bold dark:text-white">{leadershipCredentials[1].category}</h3>
                  </div>
                  <div className="space-y-4">
                    {leadershipCredentials[1].credentials.map((cred, credIndex) => (
                      <div key={credIndex} className="border-l-4 border-navy/30 dark:border-silver/30 pl-4 py-2">
                        <h4 className="font-semibold text-navy dark:text-white mb-1">{cred.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{cred.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Global Reach, Local Sensibility</h2>
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
                      <p className="text-sm text-gray-600 dark:text-gray-300">Knowledge of global cybersecurity regulations and compliance requirements</p>
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
      </div>
    </div>
  );
};