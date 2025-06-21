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
      category: "Technical Excellence",
      icon: <Shield size={24} className="text-navy dark:text-silver" />,
      credentials: [
        { name: "CISSP", description: "Certified Information Systems Security Professional" },
        { name: "CISA", description: "Certified Information Systems Auditor" },
        { name: "PMP", description: "Project Management Professional" },
        { name: "PMI-ACP", description: "PMI Agile Certified Practitioner" },
        { name: "ITIL", description: "Information Technology Infrastructure Library" }
      ]
    },
    {
      category: "Legal Expertise",
      icon: <Scale size={24} className="text-navy dark:text-silver" />,
      credentials: [
        { name: "J.D.", description: "Juris Doctor - Technology Law" },
        { name: "Privacy Law", description: "Advanced Privacy Law Specialization" },
        { name: "GDPR/CCPA", description: "Global Privacy Regulation Expert" },
        { name: "M&A Legal", description: "Technology M&A Due Diligence" }
      ]
    }
  ];

  // Enhanced company values with professional focus
  const companyValues = [
    {
      icon: <UserCheck size={24} className="text-navy dark:text-silver" />,
      title: "Certified Excellence",
      description: "Industry-leading certifications combined with specialized legal expertise ensure unmatched professional standards and credibility."
    },
    {
      icon: <Brain size={24} className="text-navy dark:text-silver" />,
      title: "Intelligence-Driven",
      description: "Strategic cybersecurity intelligence backed by CISSP expertise and attorney-reviewed frameworks for complete business confidence."
    },
    {
      icon: <Scale size={24} className="text-navy dark:text-silver" />,
      title: "Legal Precision",
      description: "Technology law specialization ensures all deliverables are legally defensible and compliant with global privacy regulations."
    },
    {
      icon: <Target size={24} className="text-navy dark:text-silver" />,
      title: "Strategic Focus",
      description: "STEEL™ methodology transforms complex cyber risks into clear, actionable insights for executive decision-making."
    }
  ];

  // Professional achievements
  const professionalStats = [
    {
      icon: <Award size={24} className="text-navy dark:text-silver" />,
      value: "5+",
      label: "Industry Certifications",
      description: "Premier technical credentials"
    },
    {
      icon: <Globe size={24} className="text-navy dark:text-silver" />,
      value: "100+",
      label: "Strategic Assessments",
      description: "Executive risk evaluations"
    },
    {
      icon: <Briefcase size={24} className="text-navy dark:text-silver" />,
      value: "92%",
      label: "Board Confidence",
      description: "Increase in governance clarity"
    },
    {
      icon: <CheckCircle size={24} className="text-navy dark:text-silver" />,
      value: "67%",
      label: "Risk Reduction",
      description: "Average client improvement"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
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
              Certified Technical Excellence + Legal Expertise
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 dark:text-white">Strategic Cybersecurity Intelligence</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-4xl mx-auto mb-8">
            The only cybersecurity advisory firm combining CISSP-level technical strategy with in-house technology law expertise, 
            delivering both strategic security excellence and legally-defensible compliance frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon={<Calendar size={18} />}
              onClick={() => navigate('/contact')}
            >
              Schedule Executive Briefing
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              onClick={() => navigate('/services')}
            >
              Explore STEEL™ Framework
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Unparalleled Leadership Excellence</h2>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              ERMITS Advisory combines the cybersecurity industry's most respected technical certifications with specialized legal expertise 
              in technology and privacy law—a unique combination that delivers complete protection and legal certainty.
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Strategic Intelligence for Executive Decision Making</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  Founded with the vision to transform cybersecurity from technical complexity into strategic intelligence, 
                  ERMITS Advisory bridges the gap between cybersecurity technology and business strategy through our proprietary STEEL™ methodology.
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  Our leadership team uniquely combines industry-leading technical certifications (CISSP, CISA, PMP, PMI-ACP, ITIL) 
                  with specialized technology law expertise, ensuring clients receive both technical excellence and legal certainty.
                </p>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  We deliver board-ready cybersecurity intelligence that quantifies business impact, demonstrates ROI, and provides 
                  legally-defensible compliance frameworks that executives can understand and act upon with confidence.
                </p>
                
                {/* Enhanced metrics */}
                <div className="bg-navy/5 dark:bg-silver/5 rounded-lg p-4">
                  <h4 className="font-semibold text-navy dark:text-white mb-3">Our Unique Value Proposition</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      The only firm combining CISSP-level strategy with technology law expertise
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      Attorney-reviewed compliance frameworks for legal defensibility
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={16} className="text-navy dark:text-silver mr-2" />
                      Executive-focused intelligence that drives business decisions
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
                      <h3 className="text-lg font-bold mb-2">Certified Leadership Excellence</h3>
                      <p className="text-sm opacity-90">Technical expertise + Legal precision = Executive confidence</p>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">Our Professional Excellence Standards</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The STEEL™ Methodology</h2>
              <p className="text-silver max-w-3xl mx-auto mb-8">
                Our proprietary Strategic Technology Executive Evaluation Lens transforms complex cyber risks into clear, 
                actionable insights across six critical business dimensions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {[
                { letter: "S", word: "Social", color: "bg-blue-500" },
                { letter: "T", word: "Technology", color: "bg-green-500" },
                { letter: "E", word: "Economic", color: "bg-yellow-500" },
                { letter: "E", word: "Environmental", color: "bg-purple-500" },
                { letter: "L", word: "Legal", color: "bg-red-500" },
                { letter: "L", word: "Leadership", color: "bg-indigo-500" }
              ].map((dimension, index) => (
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">Executive Advisory Excellence</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  From our headquarters in the greater Washington D.C. area, we provide strategic cybersecurity intelligence 
                  to executives, board members, and decision-makers across regulated industries worldwide.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Shield size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Board-Ready Intelligence</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">CISSP-certified strategy with attorney-reviewed frameworks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Scale size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Legal Certainty</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Technology law expertise for regulatory compliance and M&A</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-navy/10 dark:bg-silver/10 mr-3 mt-1">
                      <Target size={16} className="text-navy dark:text-silver" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Strategic Focus</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Business-aligned cybersecurity that drives competitive advantage</p>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={() => navigate('/contact')}
                >
                  Schedule Leadership Consultation
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
                      <h3 className="text-xl font-bold mb-2">Certified Excellence</h3>
                      <p className="text-sm opacity-90">Technical + Legal + Executive Focus</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience Certified Excellence + Legal Certainty</h2>
              <p className="text-silver max-w-3xl mx-auto mb-8">
                Transform your cybersecurity strategy with the only advisory firm that combines industry-leading technical certifications 
                with specialized technology law expertise. Get board-ready intelligence that drives business decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  icon={<Calendar size={18} />}
                  onClick={() => navigate('/contact')}
                >
                  Schedule Executive Briefing
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  icon={<Shield size={18} />}
                  iconPosition="right"
                  onClick={() => navigate('/services')}
                >
                  Explore STEEL™ Framework
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};