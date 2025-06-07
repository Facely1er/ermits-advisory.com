import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, Briefcase, BookOpen, Target, Users, 
  MapPin, ExternalLink, Mail, Award, ChevronRight
} from 'lucide-react';

export const TeamPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // Team categories with expertise areas
  const teamCategories = [
    {
      id: 'leadership',
      title: 'Executive Leadership',
      description: 'Strategic vision and industry expertise',
      icon: <Users size={32} className="text-navy dark:text-silver" />,
      members: [
        {
          name: 'Chief Executive Officer',
          title: 'Strategic Leadership & Vision',
          expertise: ['C-Suite Advisory', 'Board Communications', 'Strategic Planning', 'Industry Leadership'],
          background: '25+ years in cybersecurity leadership, former CISO at Fortune 500 companies',
          image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
        },
        {
          name: 'Chief Technology Officer',
          title: 'Technology Strategy & Innovation',
          expertise: ['Technical Architecture', 'Innovation Strategy', 'Product Development', 'R&D Leadership'],
          background: 'PhD in Computer Science, former VP of Engineering at leading security firms',
          image: 'https://images.pexels.com/photos/3182818/pexels-photo-3182818.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Experts',
      description: 'Deep technical knowledge and threat intelligence',
      icon: <Shield size={32} className="text-navy dark:text-silver" />,
      members: [
        {
          name: 'Principal Security Architect',
          title: 'Enterprise Security Architecture',
          expertise: ['Zero Trust Architecture', 'Cloud Security', 'Identity Management', 'Threat Modeling'],
          background: 'CISSP, SABSA, 20+ years designing enterprise security solutions',
          image: 'https://images.pexels.com/photos/3182824/pexels-photo-3182824.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
        },
        {
          name: 'Senior Threat Intelligence Analyst',
          title: 'Advanced Threat Research',
          expertise: ['Threat Intelligence', 'Malware Analysis', 'Incident Response', 'Cyber Threat Hunting'],
          background: 'Former government analyst, specialized in APT groups and nation-state threats',
          image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
        }
      ]
    },
    {
      id: 'advisory',
      title: 'Strategic Advisors',
      description: 'Business strategy and risk management',
      icon: <Briefcase size={32} className="text-navy dark:text-silver" />,
      members: [
        {
          name: 'Managing Director, Risk Advisory',
          title: 'Enterprise Risk Management',
          expertise: ['Business Risk Assessment', 'Regulatory Compliance', 'M&A Due Diligence', 'Crisis Management'],
          background: 'MBA, CPA, former Big 4 consulting partner with 18+ years in risk advisory',
          image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
        },
        {
          name: 'Senior Vice President, Client Relations',
          title: 'Strategic Client Advisory',
          expertise: ['Executive Communications', 'Stakeholder Management', 'Strategic Planning', 'Change Management'],
          background: 'Former Fortune 100 executive, specialized in digital transformation and security strategy',
          image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
        }
      ]
    },
    {
      id: 'research',
      title: 'Research & Analytics',
      description: 'Data science and methodology development',
      icon: <BookOpen size={32} className="text-navy dark:text-silver" />,
      members: [
        {
          name: 'Head of Research & Development',
          title: 'STEEL™ Methodology Lead',
          expertise: ['Methodology Development', 'Data Analytics', 'Research Design', 'Statistical Analysis'],
          background: 'PhD in Applied Mathematics, former academic researcher in risk modeling',
          image: 'https://images.pexels.com/photos/3183163/pexels-photo-3183163.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
        },
        {
          name: 'Senior Data Scientist',
          title: 'Advanced Analytics & Machine Learning',
          expertise: ['Machine Learning', 'Predictive Analytics', 'Data Visualization', 'Statistical Modeling'],
          background: 'MS in Data Science, specialized in cybersecurity analytics and threat prediction',
          image: 'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
        }
      ]
    }
  ];

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

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Expert Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            World-class cybersecurity professionals dedicated to protecting your organization 
            and advancing the field of cyber risk management.
          </p>
        </motion.div>

        {/* Team Overview Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <div className="p-3 rounded-full bg-navy/10 dark:bg-navy/40 inline-flex mb-4">
                <Users size={24} className="text-navy dark:text-silver" />
              </div>
              <h3 className="text-3xl font-bold text-navy dark:text-white mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-200">Expert Professionals</p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <div className="p-3 rounded-full bg-navy/10 dark:bg-navy/40 inline-flex mb-4">
                <Award size={24} className="text-navy dark:text-silver" />
              </div>
              <h3 className="text-3xl font-bold text-navy dark:text-white mb-2">200+</h3>
              <p className="text-gray-600 dark:text-gray-200">Industry Certifications</p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <div className="p-3 rounded-full bg-navy/10 dark:bg-navy/40 inline-flex mb-4">
                <Target size={24} className="text-navy dark:text-silver" />
              </div>
              <h3 className="text-3xl font-bold text-navy dark:text-white mb-2">15+</h3>
              <p className="text-gray-600 dark:text-gray-200">Years Average Experience</p>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card variant="glass" className="text-center h-full">
              <div className="p-3 rounded-full bg-navy/10 dark:bg-navy/40 inline-flex mb-4">
                <MapPin size={24} className="text-navy dark:text-silver" />
              </div>
              <h3 className="text-3xl font-bold text-navy dark:text-white mb-2">12</h3>
              <p className="text-gray-600 dark:text-gray-200">Countries Represented</p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Team Categories */}
        <div className="space-y-16">
          {teamCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-silver/20 dark:bg-navy/40 mb-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2 dark:text-white">{category.title}</h2>
                <p className="text-gray-600 dark:text-gray-200">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: memberIndex * 0.1 }}
                  >
                    <Card variant="glass" padding="lg" className="h-full">
                      <div className="flex flex-col sm:flex-row gap-6">
                        <div className="sm:w-1/3">
                          <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="sm:w-2/3">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold dark:text-white">{member.name}</h3>
                              <p className="text-navy dark:text-silver font-medium">{member.title}</p>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              icon={<Mail size={16} />}
                              onClick={() => navigate('/contact')}
                            >
                              Contact
                            </Button>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                            {member.background}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">Key Expertise:</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.expertise.map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className="bg-navy/10 dark:bg-navy/30 text-navy dark:text-silver text-xs font-medium px-2.5 py-1 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <Card variant="glass" padding="lg" className="bg-navy text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-3">Advisory Board</h2>
              <p className="text-silver max-w-2xl mx-auto">
                Our distinguished advisory board includes former CISOs, government officials, 
                and industry leaders who guide our strategic direction and ensure we remain 
                at the forefront of cybersecurity innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <Shield size={32} />
                </div>
                <h4 className="font-semibold mb-1">Former Government CISO</h4>
                <p className="text-silver text-sm">National cybersecurity strategy and policy</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <Briefcase size={32} />
                </div>
                <h4 className="font-semibold mb-1">Fortune 500 Security Leader</h4>
                <p className="text-silver text-sm">Enterprise security transformation</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen size={32} />
                </div>
                <h4 className="font-semibold mb-1">Academic Research Director</h4>
                <p className="text-silver text-sm">Cybersecurity research and innovation</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <Card variant="glass" padding="lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-3 dark:text-white">Join Our Growing Team</h2>
                <p className="text-gray-600 dark:text-gray-100 mb-6">
                  We're always looking for exceptional cybersecurity professionals who share our passion 
                  for protecting organizations and advancing the industry. Join us in making a meaningful 
                  impact on global cybersecurity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary" 
                    icon={<ChevronRight size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/contact')}
                  >
                    View Open Positions
                  </Button>
                  <Button 
                    variant="outline" 
                    icon={<ExternalLink size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/contact')}
                  >
                    Submit Your Resume
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy dark:text-white">Remote-First</div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">Global opportunities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy dark:text-white">Competitive</div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">Compensation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy dark:text-white">Continuing</div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">Education</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-navy dark:text-white">Innovation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-200">Culture</div>
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