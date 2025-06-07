import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowLeft, Download, Share2, BookOpen, Clock, Calendar,
  User, Tag, ExternalLink, ChevronRight, Mail
} from 'lucide-react';

// Sample resource data - in a real app, this would come from an API or database
const resourcesData = [
  {
    id: 'wp-001',
    title: 'The Executive\'s Guide to Modern Cyber Risk Management',
    description: 'A comprehensive guide for C-suite executives on implementing effective cyber risk management strategies using the STEEL methodology.',
    category: 'whitepapers',
    tags: ['steel', 'risk', 'leadership'],
    date: '2025-04-15',
    readTime: '25 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'ERMITS Advisory Research Team',
    content: {
      summary: 'In today\'s rapidly evolving threat landscape, executives need a comprehensive framework for understanding and managing cyber risk across all dimensions of their organization. This whitepaper introduces the STEEL™ methodology and provides practical guidance for C-suite leaders.',
      sections: [
        {
          title: 'Executive Summary',
          content: 'Cybersecurity is no longer just an IT concern—it\'s a business imperative that requires executive attention and strategic planning. Traditional risk assessment approaches often fall short in addressing the complex, interconnected nature of modern cyber threats.'
        },
        {
          title: 'The STEEL™ Framework',
          content: 'Our proprietary STEEL™ methodology examines cyber risk across six critical dimensions: Political, Economic, Social, Technology, Environmental, and Legal. This holistic approach ensures that organizations consider all factors that could impact their cybersecurity posture.'
        },
        {
          title: 'Implementation Strategies',
          content: 'This section provides step-by-step guidance for implementing the STEEL™ methodology within your organization, including how to establish governance structures, metrics, and reporting mechanisms that enable effective decision-making.'
        },
        {
          title: 'Case Studies',
          content: 'Real-world examples demonstrate how organizations across various industries have successfully implemented the STEEL™ framework to improve their cyber risk management capabilities and achieve measurable business outcomes.'
        },
        {
          title: 'Recommendations',
          content: 'Based on our research and practical experience, we provide specific recommendations for executives looking to enhance their organization\'s cyber risk management approach and build resilience against emerging threats.'
        }
      ],
      keyTakeaways: [
        'Cyber risk management requires a holistic approach that considers all dimensions of organizational exposure',
        'The STEEL™ methodology provides a comprehensive framework for assessing and managing cyber risk',
        'Executive leadership and governance are critical success factors for effective cyber risk management',
        'Regular assessment and continuous improvement are essential for maintaining cyber resilience',
        'Investment in cybersecurity should be aligned with business objectives and risk tolerance'
      ]
    }
  },
  {
    id: 'art-001',
    title: 'Five Critical Questions Every Board Should Ask About Cybersecurity',
    description: 'Learn the essential questions board members should be asking to fulfill their cyber governance responsibilities effectively.',
    category: 'articles',
    tags: ['leadership', 'compliance'],
    date: '2025-03-22',
    readTime: '12 min',
    imageUrl: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sarah Johnson, Managing Director',
    content: {
      summary: 'Board members have a fiduciary responsibility to ensure their organization is adequately protected against cyber threats. This article outlines the key questions directors should be asking to fulfill their governance responsibilities.',
      sections: [
        {
          title: 'Question 1: What is our current cyber risk posture?',
          content: 'Understanding your organization\'s current cybersecurity posture is fundamental to effective governance. This involves knowing your key assets, threat landscape, and existing controls.'
        },
        {
          title: 'Question 2: How do we compare to industry peers?',
          content: 'Benchmarking against industry standards and peer organizations helps identify gaps and opportunities for improvement in your cybersecurity program.'
        },
        {
          title: 'Question 3: What are our most critical vulnerabilities?',
          content: 'Focus on understanding the vulnerabilities that pose the greatest risk to your business operations and strategic objectives.'
        },
        {
          title: 'Question 4: How would we respond to a major incident?',
          content: 'Ensure your organization has a comprehensive incident response plan and that leadership understands their roles during a crisis.'
        },
        {
          title: 'Question 5: Are we investing appropriately in cybersecurity?',
          content: 'Evaluate whether your cybersecurity investments are aligned with your risk tolerance and business objectives.'
        }
      ],
      keyTakeaways: [
        'Board oversight of cybersecurity is a critical governance responsibility',
        'Directors should ask probing questions to understand their organization\'s cyber risk posture',
        'Regular briefings and updates help maintain board awareness of evolving threats',
        'Investment decisions should be based on risk assessment and business impact analysis',
        'Incident response planning requires board-level attention and preparation'
      ]
    }
  },
  {
    id: 'cs-001',
    title: 'How a Global Financial Institution Reduced Risk Exposure by 67%',
    description: 'A detailed case study of how our STEEL methodology helped a major financial institution transform their cyber risk posture.',
    category: 'casestudies',
    tags: ['steel', 'risk', 'compliance'],
    date: '2025-02-10',
    readTime: '18 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Michael Chen, Principal Consultant',
    content: {
      summary: 'This case study examines how a Fortune 500 financial services company partnered with ERMITS Advisory to implement the STEEL™ methodology, resulting in significant risk reduction and improved regulatory compliance posture.',
      sections: [
        {
          title: 'The Challenge',
          content: 'The client, a global financial institution with operations in 15 countries, was struggling with fragmented risk assessment processes and increasing regulatory pressure. Traditional risk frameworks were not providing the holistic view needed for effective decision-making.'
        },
        {
          title: 'The STEEL™ Implementation',
          content: 'We implemented our comprehensive STEEL™ assessment across all six dimensions, revealing critical interdependencies between political, economic, and technology risks that had previously been overlooked.'
        },
        {
          title: 'Political Dimension Analysis',
          content: 'The political assessment revealed significant regulatory compliance gaps across different jurisdictions, particularly in emerging markets where the institution was expanding operations.'
        },
        {
          title: 'Economic Impact Assessment',
          content: 'Our economic analysis quantified the potential financial impact of various threat scenarios, enabling the client to make more informed investment decisions in cybersecurity controls.'
        },
        {
          title: 'Technology Risk Evaluation',
          content: 'The technology assessment identified critical infrastructure vulnerabilities and provided a roadmap for modernization that balanced security improvements with operational efficiency.'
        },
        {
          title: 'Results and Outcomes',
          content: 'Within 18 months, the client achieved a 67% reduction in overall risk exposure, improved regulatory compliance scores by 45%, and realized $12M in avoided incident costs.'
        }
      ],
      keyTakeaways: [
        'Holistic risk assessment reveals hidden interdependencies between risk factors',
        'Quantifying economic impact enables better investment prioritization',
        'Regulatory compliance improves significantly with comprehensive risk visibility',
        'Technology modernization can be aligned with risk reduction objectives',
        'Continuous monitoring and adjustment are essential for sustained improvement'
      ]
    }
  },
  {
    id: 'web-001',
    title: 'Navigating Geopolitical Cyber Risks in a Turbulent World',
    description: 'An on-demand webinar featuring experts discussing how political factors impact cybersecurity strategy and resilience.',
    category: 'webinars',
    tags: ['steel', 'risk'],
    date: '2025-01-30',
    readTime: '45 min',
    imageUrl: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'ERMITS Advisory Expert Panel',
    content: {
      summary: 'Join our panel of geopolitical and cybersecurity experts as they explore the intersection of global politics and cyber risk, providing insights into how organizations can build resilience against nation-state threats and geopolitical instability.',
      sections: [
        {
          title: 'Webinar Overview',
          content: 'This 45-minute expert panel discussion brings together former government officials, cybersecurity leaders, and geopolitical analysts to examine the growing impact of international relations on organizational cyber risk.'
        },
        {
          title: 'Current Geopolitical Threat Landscape',
          content: 'Our experts analyze the current state of nation-state cyber activities, discussing recent trends in state-sponsored attacks and their implications for private sector organizations.'
        },
        {
          title: 'The Political Dimension of STEEL™',
          content: 'Deep dive into how the Political dimension of our STEEL™ methodology helps organizations assess and prepare for geopolitically-motivated cyber threats and regulatory changes.'
        },
        {
          title: 'Regional Risk Variations',
          content: 'Examination of how geopolitical risks vary by region and industry, with specific focus on critical infrastructure, financial services, and technology sectors.'
        },
        {
          title: 'Building Organizational Resilience',
          content: 'Practical strategies for building resilience against geopolitical cyber risks, including threat intelligence integration, scenario planning, and stakeholder communication.'
        },
        {
          title: 'Q&A Session',
          content: 'Extended question and answer session where panelists address specific audience questions about geopolitical risk management and practical implementation strategies.'
        }
      ],
      keyTakeaways: [
        'Geopolitical tensions directly impact organizational cyber risk exposure',
        'Nation-state threats require specialized detection and response capabilities',
        'Supply chain risks are amplified during periods of geopolitical instability',
        'Regulatory requirements vary significantly across geopolitical boundaries',
        'Scenario planning is essential for preparing for geopolitical cyber events'
      ]
    }
  },
  {
    id: 'art-002',
    title: 'Emerging Technology Risks: What You Need to Know About AI Security',
    description: 'An analysis of the rapidly evolving security landscape around artificial intelligence and machine learning technologies.',
    category: 'articles',
    tags: ['technology', 'risk'],
    date: '2025-03-05',
    readTime: '15 min',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Dr. Elena Rodriguez, Chief Technology Officer',
    content: {
      summary: 'As organizations increasingly adopt artificial intelligence and machine learning technologies, new security challenges emerge. This article explores the unique risks associated with AI systems and provides guidance for building secure AI implementations.',
      sections: [
        {
          title: 'The AI Security Challenge',
          content: 'Artificial intelligence systems introduce novel attack vectors and security considerations that traditional cybersecurity frameworks may not adequately address. Organizations must adapt their security strategies to account for these emerging risks.'
        },
        {
          title: 'AI-Specific Threat Vectors',
          content: 'From adversarial attacks that can fool machine learning models to data poisoning attacks that corrupt training datasets, AI systems face unique threats that require specialized defensive measures.'
        },
        {
          title: 'Data Privacy and AI Ethics',
          content: 'The use of AI systems raises significant privacy and ethical concerns, particularly around bias, transparency, and the responsible use of personal data in machine learning algorithms.'
        },
        {
          title: 'Securing AI Development Pipelines',
          content: 'Organizations must implement security controls throughout the AI development lifecycle, from data collection and model training to deployment and ongoing monitoring.'
        },
        {
          title: 'Regulatory Considerations',
          content: 'Emerging regulations around AI use and data protection create compliance challenges that organizations must navigate while maintaining security and operational effectiveness.'
        },
        {
          title: 'Best Practices for AI Security',
          content: 'Practical recommendations for securing AI systems, including model validation, adversarial testing, data governance, and continuous monitoring approaches.'
        }
      ],
      keyTakeaways: [
        'AI systems introduce novel security risks that require specialized approaches',
        'Data quality and integrity are critical for AI security and reliability',
        'Regulatory compliance for AI is an evolving landscape that requires ongoing attention',
        'Security must be integrated throughout the AI development lifecycle',
        'Organizations need specialized expertise to manage AI-related risks effectively'
      ]
    }
  },
  {
    id: 'wp-002',
    title: 'Building Cyber Resilience Through the STEEL Framework',
    description: 'A detailed technical paper on implementing the STEEL methodology to enhance organizational resilience against cyber threats.',
    category: 'whitepapers',
    tags: ['steel', 'technology'],
    date: '2025-02-28',
    readTime: '30 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'ERMITS Advisory Technical Team',
    content: {
      summary: 'This comprehensive technical whitepaper provides detailed guidance on implementing the STEEL™ framework to build organizational cyber resilience. It includes technical implementation details, measurement frameworks, and real-world application examples.',
      sections: [
        {
          title: 'Introduction to Cyber Resilience',
          content: 'Cyber resilience goes beyond traditional cybersecurity by focusing on an organization\'s ability to continue operating effectively during and after cyber attacks. This requires a comprehensive approach that considers all aspects of organizational risk.'
        },
        {
          title: 'The STEEL™ Resilience Model',
          content: 'Our STEEL™ framework provides a structured approach to building resilience by examining risk across six critical dimensions and their interdependencies. This holistic view enables organizations to identify and address systemic vulnerabilities.'
        },
        {
          title: 'Technical Implementation Architecture',
          content: 'Detailed technical guidance for implementing STEEL™ assessments, including data collection methodologies, risk calculation algorithms, and integration with existing security tools and processes.'
        },
        {
          title: 'Measurement and Metrics Framework',
          content: 'Comprehensive framework for measuring resilience across STEEL™ dimensions, including key performance indicators, risk scoring methodologies, and reporting mechanisms for different stakeholder audiences.'
        },
        {
          title: 'Technology Integration Strategies',
          content: 'Practical guidance for integrating STEEL™ assessments with existing technology infrastructure, including SIEM platforms, risk management systems, and business intelligence tools.'
        },
        {
          title: 'Continuous Improvement Process',
          content: 'Framework for establishing continuous improvement processes that enable organizations to adapt their resilience strategies as threats evolve and business requirements change.'
        }
      ],
      keyTakeaways: [
        'Cyber resilience requires a holistic approach that goes beyond traditional security controls',
        'The STEEL™ framework provides a comprehensive structure for building organizational resilience',
        'Technical implementation requires integration with existing security and business systems',
        'Measurement and metrics are essential for demonstrating resilience improvement',
        'Continuous improvement processes ensure resilience strategies remain effective over time'
      ]
    }
  },
  {
    id: 'cs-002',
    title: 'Securing the Supply Chain: A Manufacturing Success Story',
    description: 'How a global manufacturing firm secured their complex supply chain using our advisory services and STEEL methodology.',
    category: 'casestudies',
    tags: ['risk', 'technology'],
    date: '2025-01-15',
    readTime: '14 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Jennifer Park, Senior Security Consultant',
    content: {
      summary: 'This case study examines how a global manufacturing company with a complex international supply chain implemented comprehensive security measures to protect against cyber threats and ensure business continuity.',
      sections: [
        {
          title: 'The Supply Chain Challenge',
          content: 'The client, a Fortune 100 manufacturing company, operated a complex global supply chain involving hundreds of suppliers across multiple countries. Traditional security approaches were inadequate for managing the distributed nature of their operations.'
        },
        {
          title: 'STEEL™ Assessment Approach',
          content: 'We conducted a comprehensive STEEL™ assessment that examined not only the client\'s internal operations but also the risk exposure from their extended supply chain network.'
        },
        {
          title: 'Technology Risk Analysis',
          content: 'Our technology assessment revealed critical vulnerabilities in industrial control systems and identified gaps in network segmentation between operational technology and information technology systems.'
        },
        {
          title: 'Supply Chain Risk Mapping',
          content: 'We developed a detailed risk map of the client\'s supply chain, identifying critical suppliers and potential points of failure that could disrupt operations or compromise security.'
        },
        {
          title: 'Implementation of Security Controls',
          content: 'Working with the client, we implemented a comprehensive set of security controls including supplier security requirements, network segmentation, and continuous monitoring capabilities.'
        },
        {
          title: 'Results and Business Impact',
          content: 'The implementation resulted in improved supply chain visibility, reduced cyber risk exposure, and enhanced operational resilience, with measurable improvements in security metrics and operational efficiency.'
        }
      ],
      keyTakeaways: [
        'Supply chain security requires visibility and control beyond organizational boundaries',
        'Industrial control systems present unique security challenges that require specialized approaches',
        'Supplier security requirements must be clearly defined and regularly assessed',
        'Network segmentation is critical for protecting operational technology systems',
        'Continuous monitoring provides essential visibility into supply chain security posture'
      ]
    }
  },
  {
    id: 'web-002',
    title: 'Regulatory Landscape 2025: Preparing for New Compliance Requirements',
    description: 'Expert panel discussion on upcoming regulatory changes and how organizations can prepare effectively.',
    category: 'webinars',
    tags: ['compliance', 'leadership'],
    date: '2025-03-18',
    readTime: '50 min',
    imageUrl: 'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'ERMITS Advisory Compliance Panel',
    content: {
      summary: 'Join our expert panel as they discuss the evolving regulatory landscape for cybersecurity and data protection, providing insights into upcoming requirements and practical guidance for achieving compliance.',
      sections: [
        {
          title: 'Regulatory Update Overview',
          content: 'Comprehensive review of new and upcoming cybersecurity and privacy regulations across major jurisdictions, including their implications for different industry sectors.'
        },
        {
          title: 'GDPR Evolution and Global Impact',
          content: 'Discussion of how GDPR continues to influence global privacy regulations and what organizations need to know about evolving enforcement trends.'
        },
        {
          title: 'Sector-Specific Requirements',
          content: 'Analysis of industry-specific regulatory requirements, including financial services, healthcare, critical infrastructure, and emerging technology sectors.'
        },
        {
          title: 'Compliance Strategy Development',
          content: 'Practical guidance for developing effective compliance strategies that balance regulatory requirements with business objectives and operational efficiency.'
        },
        {
          title: 'Technology Solutions for Compliance',
          content: 'Overview of technology tools and platforms that can help organizations achieve and maintain compliance with evolving regulatory requirements.'
        },
        {
          title: 'Interactive Q&A',
          content: 'Extended question and answer session addressing specific compliance challenges and implementation questions from the audience.'
        }
      ],
      keyTakeaways: [
        'Regulatory requirements continue to evolve rapidly across all major jurisdictions',
        'Compliance strategies must be integrated with overall business and risk management strategies',
        'Technology solutions can significantly improve compliance efficiency and effectiveness',
        'Industry-specific requirements require specialized knowledge and approach',
        'Proactive compliance planning is essential for managing regulatory risk'
      ]
    }
  },
  {
    id: 'art-003',
    title: 'The Economics of Cybersecurity: ROI Metrics That Matter',
    description: 'Understanding how to measure and communicate the return on investment for cybersecurity initiatives.',
    category: 'articles',
    tags: ['risk', 'leadership'],
    date: '2025-04-02',
    readTime: '10 min',
    imageUrl: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Robert Kim, Financial Risk Analyst',
    content: {
      summary: 'Measuring the return on investment for cybersecurity initiatives remains a significant challenge for many organizations. This article provides practical frameworks and metrics for quantifying cybersecurity value and communicating ROI to stakeholders.',
      sections: [
        {
          title: 'The Challenge of Cybersecurity ROI',
          content: 'Traditional ROI calculations don\'t always apply directly to cybersecurity investments, which often focus on risk reduction and loss prevention rather than direct revenue generation.'
        },
        {
          title: 'Economic Impact Assessment Framework',
          content: 'A structured approach to assessing the economic impact of cyber risks and the value of security investments, incorporating both quantitative and qualitative factors.'
        },
        {
          title: 'Key Metrics for Cybersecurity ROI',
          content: 'Overview of the most important metrics for measuring cybersecurity return on investment, including risk reduction metrics, efficiency improvements, and avoided costs.'
        },
        {
          title: 'Cost-Benefit Analysis Methodologies',
          content: 'Practical approaches to conducting cost-benefit analysis for cybersecurity investments, including how to account for uncertainty and intangible benefits.'
        },
        {
          title: 'Communicating Value to Stakeholders',
          content: 'Strategies for effectively communicating cybersecurity ROI to different stakeholder audiences, from technical teams to executive leadership and board members.'
        }
      ],
      keyTakeaways: [
        'Cybersecurity ROI requires specialized measurement approaches beyond traditional financial metrics',
        'Risk reduction and loss prevention are key value drivers that must be quantified',
        'Stakeholder communication should focus on business impact rather than technical details',
        'Regular measurement and reporting help demonstrate ongoing value creation',
        'Economic frameworks provide structure for consistent ROI assessment'
      ]
    }
  },
  {
    id: 'cs-003',
    title: 'Healthcare System Transforms Cyber Defense Against Patient Data Threats',
    description: 'How a multi-hospital health system implemented comprehensive cybersecurity measures to protect patient data and ensure HIPAA compliance.',
    category: 'casestudies',
    tags: ['compliance', 'risk', 'technology'],
    date: '2025-03-12',
    readTime: '16 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Dr. Amanda Foster, Healthcare Security Specialist',
    content: {
      summary: 'This case study details how a regional healthcare system with five hospitals and dozens of clinics transformed their cybersecurity posture to protect sensitive patient data while maintaining operational efficiency and regulatory compliance.',
      sections: [
        {
          title: 'Healthcare Security Challenges',
          content: 'The healthcare industry faces unique cybersecurity challenges, including legacy medical devices, complex regulatory requirements, and the critical need to maintain patient care continuity during security incidents.'
        },
        {
          title: 'Initial Risk Assessment',
          content: 'Our comprehensive assessment revealed significant vulnerabilities in medical device networks, inadequate data encryption practices, and gaps in employee security awareness training.'
        },
        {
          title: 'HIPAA Compliance Framework',
          content: 'We developed a comprehensive HIPAA compliance framework that addressed administrative, physical, and technical safeguards while ensuring minimal disruption to patient care operations.'
        },
        {
          title: 'Medical Device Security',
          content: 'Implementation of specialized security controls for medical devices, including network segmentation, device inventory management, and vulnerability assessment programs tailored for healthcare environments.'
        },
        {
          title: 'Incident Response Planning',
          content: 'Development of healthcare-specific incident response procedures that prioritize patient safety while ensuring effective containment and recovery from cyber incidents.'
        },
        {
          title: 'Results and Patient Impact',
          content: 'The implementation achieved 95% HIPAA compliance scores, reduced security incidents by 78%, and enabled the organization to maintain continuous patient care during two major cybersecurity incidents.'
        }
      ],
      keyTakeaways: [
        'Healthcare cybersecurity requires specialized approaches that prioritize patient safety',
        'Medical device security presents unique challenges that require dedicated strategies',
        'HIPAA compliance can be achieved without compromising operational efficiency',
        'Employee training is critical for healthcare cybersecurity success',
        'Incident response plans must account for patient care continuity requirements'
      ]
    }
  },
  {
    id: 'web-003',
    title: 'Crisis Management Masterclass: Leading Through Cyber Incidents',
    description: 'Interactive webinar focused on executive leadership strategies during major cybersecurity incidents and crisis communication.',
    category: 'webinars',
    tags: ['leadership', 'risk'],
    date: '2025-04-08',
    readTime: '55 min',
    imageUrl: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'ERMITS Advisory Crisis Leadership Panel',
    content: {
      summary: 'Join our expert panel of former CISOs, crisis management specialists, and executive leaders as they share insights from real-world cyber incidents and provide practical guidance for effective crisis leadership.',
      sections: [
        {
          title: 'Crisis Leadership Fundamentals',
          content: 'Essential principles of effective crisis leadership during cybersecurity incidents, including decision-making frameworks, communication strategies, and stakeholder management approaches.'
        },
        {
          title: 'The First 24 Hours: Critical Decisions',
          content: 'Detailed walkthrough of the critical decisions that must be made in the first 24 hours of a major cyber incident, including tactical and strategic considerations.'
        },
        {
          title: 'Stakeholder Communication Strategies',
          content: 'Best practices for communicating with various stakeholders during a crisis, including employees, customers, regulators, media, and law enforcement agencies.'
        },
        {
          title: 'Legal and Regulatory Considerations',
          content: 'Understanding the legal and regulatory landscape during cyber incidents, including notification requirements, evidence preservation, and coordination with authorities.'
        },
        {
          title: 'Business Continuity and Recovery',
          content: 'Strategies for maintaining business operations during extended cyber incidents and planning for effective recovery and restoration of normal operations.'
        },
        {
          title: 'Post-Incident Leadership',
          content: 'Leading the organization through the recovery and lessons-learned phases, including reputation management, process improvements, and organizational resilience building.'
        },
        {
          title: 'Interactive Crisis Simulation',
          content: 'Participants engage in a real-time crisis simulation exercise, making decisions and experiencing the challenges of leading through a major cyber incident.'
        }
      ],
      keyTakeaways: [
        'Crisis leadership requires pre-planning and regular practice through simulations',
        'Clear communication is essential for maintaining stakeholder confidence during incidents',
        'Legal and regulatory considerations must be integrated into crisis response planning',
        'Business continuity decisions often require balancing security and operational needs',
        'Post-incident leadership is critical for building long-term organizational resilience'
      ]
    }
  },
  {
    id: 'wp-003',
    title: 'M&A Cybersecurity Due Diligence: A Comprehensive Framework',
    description: 'Complete guide to cybersecurity considerations in mergers and acquisitions, including assessment methodologies and integration strategies.',
    category: 'whitepapers',
    tags: ['risk', 'compliance', 'leadership'],
    date: '2025-01-25',
    readTime: '35 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Marcus Thompson, M&A Security Director',
    content: {
      summary: 'This comprehensive whitepaper provides a detailed framework for conducting cybersecurity due diligence in M&A transactions, covering pre-acquisition assessment, risk valuation, and post-merger integration strategies.',
      sections: [
        {
          title: 'M&A Cybersecurity Landscape',
          content: 'Overview of the current M&A cybersecurity landscape, including common risks, regulatory considerations, and the financial impact of cybersecurity issues on deal valuations.'
        },
        {
          title: 'Pre-Acquisition Assessment Framework',
          content: 'Comprehensive framework for assessing target company cybersecurity posture, including technical assessments, governance reviews, and risk quantification methodologies.'
        },
        {
          title: 'Risk Valuation Methodologies',
          content: 'Detailed approaches for quantifying cybersecurity risks in financial terms, enabling informed decision-making about deal structure, pricing, and risk allocation.'
        },
        {
          title: 'Legal and Regulatory Considerations',
          content: 'Analysis of legal and regulatory factors that can impact M&A transactions, including data protection laws, industry regulations, and cross-border considerations.'
        },
        {
          title: 'Integration Planning and Execution',
          content: 'Strategic guidance for planning and executing cybersecurity integration following M&A transactions, including cultural integration, technology consolidation, and risk management alignment.'
        },
        {
          title: 'Post-Merger Optimization',
          content: 'Best practices for optimizing cybersecurity posture following M&A integration, including synergy realization, risk reduction, and long-term strategic planning.'
        }
      ],
      keyTakeaways: [
        'Cybersecurity due diligence is essential for successful M&A transactions',
        'Risk quantification enables better deal structuring and pricing decisions',
        'Integration planning must begin during the due diligence phase',
        'Regulatory compliance considerations vary significantly across jurisdictions',
        'Post-merger optimization requires ongoing attention and investment'
      ]
    }
  },
  {
    id: 'art-004',
    title: 'Zero Trust Architecture: Beyond the Buzzword',
    description: 'A practical guide to implementing Zero Trust principles in modern enterprise environments with real-world examples and lessons learned.',
    category: 'articles',
    tags: ['technology', 'steel'],
    date: '2025-02-18',
    readTime: '13 min',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Alex Chen, Principal Security Architect',
    content: {
      summary: 'Zero Trust has become a security industry buzzword, but successful implementation requires careful planning and a deep understanding of organizational needs. This article provides practical guidance for moving beyond the hype to build effective Zero Trust architectures.',
      sections: [
        {
          title: 'Demystifying Zero Trust',
          content: 'Zero Trust is not a product or single technology, but rather a security model that requires verification for every user and device attempting to access resources, regardless of their location relative to the network perimeter.'
        },
        {
          title: 'Core Zero Trust Principles',
          content: 'Examination of the fundamental principles that underpin Zero Trust architecture, including never trust always verify, least privilege access, and assume breach scenarios.'
        },
        {
          title: 'Implementation Roadmap',
          content: 'Step-by-step guidance for implementing Zero Trust principles, starting with identity and access management, progressing through network segmentation, and culminating in full architecture maturity.'
        },
        {
          title: 'Technology Components and Integration',
          content: 'Overview of the key technology components required for Zero Trust implementation, including identity providers, network access controls, endpoint protection, and data security solutions.'
        },
        {
          title: 'Common Implementation Challenges',
          content: 'Analysis of the most common challenges organizations face when implementing Zero Trust, including legacy system integration, user experience considerations, and organizational change management.'
        },
        {
          title: 'Measuring Zero Trust Success',
          content: 'Frameworks and metrics for measuring the effectiveness of Zero Trust implementations, including security metrics, operational efficiency indicators, and business impact assessments.'
        }
      ],
      keyTakeaways: [
        'Zero Trust is a security model, not a technology product',
        'Successful implementation requires a phased approach with clear milestones',
        'Identity and access management forms the foundation of Zero Trust architecture',
        'User experience must be carefully considered to ensure adoption success',
        'Measurement and continuous improvement are essential for long-term success'
      ]
    }
  },
  {
    id: 'cs-004',
    title: 'Government Agency Achieves 99.9% Uptime During Cyber Modernization',
    description: 'How a federal agency successfully modernized their cybersecurity infrastructure while maintaining critical service availability.',
    category: 'casestudies',
    tags: ['technology', 'compliance', 'steel'],
    date: '2025-01-08',
    readTime: '20 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/5466271/pexels-photo-5466271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Patricia Williams, Government Security Consultant',
    content: {
      summary: 'This case study examines how a large federal agency with over 50,000 employees successfully modernized their cybersecurity infrastructure while maintaining 99.9% service availability and achieving FedRAMP compliance.',
      sections: [
        {
          title: 'The Modernization Challenge',
          content: 'The agency faced the complex challenge of modernizing legacy cybersecurity infrastructure while maintaining critical services that support millions of citizens and ensuring compliance with federal security requirements.'
        },
        {
          title: 'STEEL™ Assessment for Government',
          content: 'Our STEEL™ assessment was adapted for the government environment, incorporating unique political, regulatory, and operational considerations specific to federal agencies.'
        },
        {
          title: 'Phased Modernization Approach',
          content: 'Implementation of a carefully planned phased approach that minimized service disruption while progressively enhancing security capabilities across the agency\'s diverse technology portfolio.'
        },
        {
          title: 'FedRAMP Compliance Achievement',
          content: 'Detailed process for achieving and maintaining FedRAMP compliance throughout the modernization process, including continuous monitoring and security control implementation.'
        },
        {
          title: 'Change Management and Training',
          content: 'Comprehensive change management program that ensured successful adoption of new security technologies and processes across the large, distributed federal workforce.'
        },
        {
          title: 'Results and Citizen Impact',
          content: 'The modernization achieved 99.9% service availability, improved security posture by 85%, and enhanced citizen service delivery while reducing operational costs by 23%.'
        }
      ],
      keyTakeaways: [
        'Government cybersecurity modernization requires specialized approaches and compliance considerations',
        'Phased implementation strategies are essential for maintaining service availability',
        'FedRAMP compliance can be achieved alongside modernization efforts with proper planning',
        'Change management is critical for success in large government organizations',
        'Citizen service improvement can be achieved alongside security enhancements'
      ]
    }
  },
  {
    id: 'web-004',
    title: 'The Future of Cybersecurity: Trends and Predictions for 2025-2030',
    description: 'Forward-looking discussion with industry experts about emerging cybersecurity trends, technologies, and threats over the next five years.',
    category: 'webinars',
    tags: ['technology', 'leadership', 'steel'],
    date: '2025-04-20',
    readTime: '48 min',
    imageUrl: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'ERMITS Advisory Future Trends Panel',
    content: {
      summary: 'Join our panel of cybersecurity visionaries, technology leaders, and policy experts as they explore the future of cybersecurity, discussing emerging threats, technological advances, and the evolving role of security in business strategy.',
      sections: [
        {
          title: 'Emerging Threat Landscape',
          content: 'Analysis of how the threat landscape is evolving, including new attack vectors, the weaponization of emerging technologies, and the changing motivations of threat actors.'
        },
        {
          title: 'Artificial Intelligence in Cybersecurity',
          content: 'Exploration of how AI and machine learning are transforming both offensive and defensive cybersecurity capabilities, including automation, threat detection, and response optimization.'
        },
        {
          title: 'Quantum Computing Impact',
          content: 'Discussion of the potential impact of quantum computing on cybersecurity, including implications for encryption, security protocols, and long-term strategic planning.'
        },
        {
          title: 'Regulatory Evolution',
          content: 'Examination of how cybersecurity regulations are expected to evolve over the next five years, including privacy laws, industry standards, and international cooperation frameworks.'
        },
        {
          title: 'Workforce and Skills Development',
          content: 'Analysis of the changing cybersecurity workforce requirements, skills gaps, and strategies for developing the next generation of security professionals.'
        },
        {
          title: 'Strategic Business Integration',
          content: 'Discussion of how cybersecurity is becoming increasingly integrated with business strategy, including its role in digital transformation, competitive advantage, and business model evolution.'
        }
      ],
      keyTakeaways: [
        'The cybersecurity landscape will continue to evolve rapidly over the next five years',
        'AI and automation will transform both attack and defense capabilities',
        'Quantum computing presents both opportunities and challenges for cybersecurity',
        'Regulatory frameworks will become more complex and internationally coordinated',
        'Cybersecurity will become increasingly integrated with business strategy'
      ]
    }
  },
  {
    id: 'art-005',
    title: 'Building a Cyber-Resilient Remote Workforce',
    description: 'Strategies for securing distributed teams and maintaining productivity while protecting sensitive data in remote work environments.',
    category: 'articles',
    tags: ['technology', 'risk', 'leadership'],
    date: '2025-03-28',
    readTime: '11 min',
    imageUrl: 'https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Lisa Chang, Remote Security Specialist',
    content: {
      summary: 'The shift to remote and hybrid work models has fundamentally changed the cybersecurity landscape. This article provides practical strategies for building security into distributed work environments while maintaining productivity and employee satisfaction.',
      sections: [
        {
          title: 'The Remote Security Challenge',
          content: 'Remote work introduces unique security challenges, including endpoint security, network protection, data access controls, and maintaining security culture across distributed teams.'
        },
        {
          title: 'Secure Remote Infrastructure',
          content: 'Building secure infrastructure for remote work, including VPN strategies, cloud security, endpoint protection, and secure communication platforms.'
        },
        {
          title: 'Identity and Access Management',
          content: 'Implementing robust identity and access management solutions for remote workers, including multi-factor authentication, privileged access management, and zero trust principles.'
        },
        {
          title: 'Data Protection Strategies',
          content: 'Protecting sensitive data in remote environments through encryption, data loss prevention, cloud security controls, and secure file sharing solutions.'
        },
        {
          title: 'Security Culture and Training',
          content: 'Building and maintaining a strong security culture among remote teams through targeted training, regular communication, and engagement strategies.'
        },
        {
          title: 'Monitoring and Incident Response',
          content: 'Adapting monitoring and incident response capabilities for distributed environments, including endpoint detection and response, user behavior analytics, and remote investigation procedures.'
        }
      ],
      keyTakeaways: [
        'Remote work security requires a comprehensive, multi-layered approach',
        'Zero trust principles are especially important for distributed environments',
        'Employee engagement and training are critical for remote security success',
        'Technology solutions must balance security with user experience',
        'Continuous monitoring and adaptation are essential for maintaining security posture'
      ]
    }
  }
];

export const ResourceDetailPage: React.FC = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the resource by ID
  const resource = resourcesData.find(r => r.id === id);

  // If resource not found, show error
  if (!resource) {
    return (
      <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Resource Not Found</h1>
            <p className="text-gray-600 dark:text-gray-200 mb-8">
              The resource you're looking for doesn't exist or has been moved.
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/resources')}
              icon={<ArrowLeft size={16} />}
              iconPosition="left"
            >
              Back to Resources
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    // In a real implementation, this would trigger the actual download
    console.log('Downloading resource:', resource.title);
    alert(`Download started for: ${resource.title}`);
  };

  const handleShare = () => {
    // In a real implementation, this would open share options
    if (navigator.share) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    }
  };

  // Get category label
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'whitepapers':
        return t('resources.categories.whitepapers');
      case 'articles':
        return t('resources.categories.articles');
      case 'casestudies':
        return t('resources.categories.casestudies');
      case 'webinars':
        return t('resources.categories.webinars');
      default:
        return category;
    }
  };

  // Get tag label
  const getTagLabel = (tag: string) => {
    switch(tag) {
      case 'steel':
        return 'STEEL™';
      case 'compliance':
        return t('resources.tags.compliance');
      case 'risk':
        return t('resources.tags.risk');
      case 'leadership':
        return t('resources.tags.leadership');
      case 'technology':
        return t('resources.tags.technology');
      default:
        return tag;
    }
  };

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              to="/resources" 
              className="text-navy dark:text-silver hover:underline flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              {t('resources.title')}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300">{getCategoryLabel(resource.category)}</span>
          </nav>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="mb-4">
                <span className="bg-navy dark:bg-navy/80 text-white text-sm font-medium px-3 py-1 rounded-md">
                  {getCategoryLabel(resource.category)}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                {resource.title}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">
                {resource.description}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{resource.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{new Date(resource.date).toLocaleDateString()}</span>
                </div>
                {resource.readTime && (
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{resource.readTime}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {resource.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-full flex items-center"
                  >
                    <Tag size={12} className="mr-1" />
                    {getTagLabel(tag)}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {resource.downloadUrl && (
                  <Button 
                    variant="primary" 
                    onClick={handleDownload}
                    icon={<Download size={16} />}
                    iconPosition="left"
                  >
                    {t('resources.download')}
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  onClick={handleShare}
                  icon={<Share2 size={16} />}
                  iconPosition="left"
                >
                  Share
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => window.print()}
                  icon={<BookOpen size={16} />}
                  iconPosition="left"
                >
                  Print
                </Button>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="glass" padding="lg">
                {/* Summary */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Overview</h2>
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                    {resource.content.summary}
                  </p>
                </div>

                {/* Sections */}
                {resource.content.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">{section.title}</h3>
                    <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}

                {/* Key Takeaways */}
                <div className="bg-silver/20 dark:bg-navy/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 dark:text-white">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {resource.content.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-200">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Download CTA */}
              {resource.downloadUrl && (
                <Card variant="glass\" padding="lg\" className="bg-navy text-white">
                  <h3 className="text-lg font-bold mb-3">Download This Resource</h3>
                  <p className="text-silver mb-4 text-sm">
                    Get the complete guide with detailed analysis, implementation strategies, and actionable recommendations.
                  </p>
                  <Button 
                    variant="secondary" 
                    fullWidth
                    onClick={handleDownload}
                    icon={<Download size={16} />}
                    iconPosition="left"
                  >
                    {t('resources.download')} PDF
                  </Button>
                </Card>
              )}

              {/* Related Resources */}
              <Card variant="glass" padding="md">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Related Resources</h3>
                <div className="space-y-4">
                  {resourcesData
                    .filter(r => r.id !== resource.id && r.tags.some(tag => resource.tags.includes(tag)))
                    .slice(0, 3)
                    .map(relatedResource => (
                      <Link 
                        key={relatedResource.id}
                        to={`/resources/${relatedResource.id}`}
                        className="block p-3 rounded-lg bg-silver/10 dark:bg-navy/10 hover:bg-silver/20 dark:hover:bg-navy/20 transition-colors"
                      >
                        <h4 className="font-medium text-sm dark:text-white mb-1">
                          {relatedResource.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {getCategoryLabel(relatedResource.category)}
                        </p>
                      </Link>
                    ))}
                </div>
              </Card>

              {/* Contact CTA */}
              <Card variant="glass" padding="md">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Need Expert Guidance?</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Our cybersecurity experts are here to help you implement these strategies in your organization.
                </p>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    fullWidth
                    icon={<Mail size={16} />}
                    iconPosition="left"
                  >
                    Contact Our Experts
                  </Button>
                </Link>
              </Card>

              {/* Newsletter Signup */}
              <Card variant="glass" padding="md">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Stay Updated</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Get the latest cybersecurity insights and resources delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white"
                    placeholder="Enter your email"
                  />
                  <Button 
                    variant="primary" 
                    size="sm"
                    fullWidth
                    icon={<Mail size={14} />}
                    iconPosition="left"
                  >
                    Subscribe
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};