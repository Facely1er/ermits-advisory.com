import type { Language } from '../types';

// Define the translation objects
interface TranslationObj {
  [key: string]: any;
}

// English translations
const en: TranslationObj = {
  common: {
    tagline: 'Strategic Insight for Resilience',
    copyright: '© 2025 ERMITS Advisory + STEEL™. All rights reserved.',
    learnMore: 'Learn More',
    viewDashboard: 'View Dashboard',
    demo: 'This is a demonstration of the ERMITS Advisory + STEEL™ platform',
  },
  navigation: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    resources: 'Resources',
    steel: 'STEEL™',
    riskRadar: 'Risk Radar',
    dashboard: 'Dashboard',
    presentation: 'Presentation',
    contact: 'Contact',
  },
  notFound: {
    title: 'Page Not Found',
    message: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    returnHome: 'Return Home',
    goBack: 'Go Back',
    lookingFor: 'Looking for something specific?',
    searchPlaceholder: 'Search our site...',
    popularPages: 'Popular pages',
    needAssistance: 'Need assistance?',
    contactUs: 'Contact our team'
  },
  footer: {
    services: {
      title: 'Services',
      boardBriefings: 'Board Briefings',
      mAndA: 'M&A Due Diligence',
      crisis: 'Crisis Leadership',
      vCISO: 'Virtual CISO',
    },
    resources: {
      title: 'Resources',
      steel: 'STEEL™ Framework',
      riskRadar: 'Risk Radar',
      dashboard: 'Executive Dashboard',
      library: 'Resource Library',
      about: 'About Us',
    },
    contact: {
      title: 'Contact',
      emailLabel: 'Email:',
      phoneLabel: 'Phone:',
      headquartersLabel: 'HQ:',
    },
    policy: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookie: 'Cookie Policy',
    },
  },
  landing: {
    hero: {
      title: 'Strategic Cyber Risk Leadership',
      subtitle: 'Empowering executives to navigate the complex landscape of cyber risk with clarity and confidence.',
      cta: 'Explore the STEEL™ Framework',
    },
    metrics: {
      title: 'Real Results for Executives',
      riskReduction: 'Average Risk Reduction',
      timeToInsight: 'Faster Time to Insight',
      boardConfidence: 'Increased Board Confidence',
      roiImprovement: 'ROI Improvement',
    },
    steelOverview: {
      title: 'The STEEL™ Methodology',
      subtitle: 'A holistic approach to cyber risk that considers all aspects of your organization.',
      political: {
        title: 'Political',
        description: 'Regulatory landscape, compliance requirements, and geopolitical factors that impact cybersecurity posture.',
      },
      economic: {
        title: 'Economic',
        description: 'Financial impact, market conditions, and competitive landscape that influence security investments.',
      },
      social: {
        title: 'Social',
        description: 'Reputation management, public perception, and social responsibility factors.',
      },
      technology: {
        title: 'Technology',
        description: 'Infrastructure, digital transformation, and technical vulnerabilities.',
      },
      environmental: {
        title: 'Environmental',
        description: 'Physical security, natural risks, and environmental factors.',
      },
      legal: {
        title: 'Legal',
        description: 'Contractual obligations, liability, and legal requirements.',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Tailored advisory services to meet your specific needs.',
      boardBriefings: {
        title: 'Board Briefings',
        description: 'Clear, actionable cybersecurity briefings for board members.',
      },
      mAndA: {
        title: 'M&A Due Diligence',
        description: 'Comprehensive cyber risk assessment for acquisitions and mergers.',
      },
      crisis: {
        title: 'Crisis Leadership',
        description: 'Strategic guidance during cybersecurity incidents.',
      },
      vCISO: {
        title: 'Virtual CISO',
        description: 'Executive-level security leadership without the full-time commitment.',
      },
    },
    trust: {
      title: 'Trusted by Industry Leaders',
      subtitle: 'Our expertise is recognized by leading organizations and institutions.',
      cert1: 'ISO 27001 Certified',
      cert2: 'CMMC Assessor',
      cert3: 'CISSP Certified Team',
      cert4: 'NIST CSF Practitioners',
    },
    cta: {
      title: 'Ready to Transform Your Cyber Risk Strategy?',
      subtitle: 'Schedule a consultation with our expert team to discuss your specific needs and challenges.',
      button: 'Request a Consultation',
    },
  },
  steel: {
    title: 'STEEL™ Framework',
    subtitle: 'A comprehensive methodology for holistic cyber risk management',
    overview: 'The STEEL™ Framework addresses cyber risk across six critical dimensions: Social, Technology, Economic, Environmental, Legal, and Political factors. This integrated approach ensures a comprehensive view of your organization\'s risk landscape.',
    dimensions: {
      political: {
        title: 'Political',
        description: 'Regulatory landscape, compliance requirements, and geopolitical factors that impact cybersecurity posture.',
      },
      economic: {
        title: 'Economic',
        description: 'Financial impact, market conditions, and competitive landscape that influence security investments.',
      },
      social: {
        title: 'Social',
        description: 'Reputation management, public perception, and social responsibility factors.',
      },
      technology: {
        title: 'Technology',
        description: 'Infrastructure, digital transformation, and technical vulnerabilities.',
      },
      environmental: {
        title: 'Environmental',
        description: 'Physical security, natural risks, and environmental factors.',
      },
      legal: {
        title: 'Legal',
        description: 'Contractual obligations, liability, and legal requirements.',
      },
    },
    integration: {
      title: 'Integrating STEEL™ Into Your Risk Program',
      description: 'Our systematic approach ensures the STEEL™ framework enhances your existing risk management processes with minimal disruption and maximum impact.',
      step1: 'Assessment',
      step2: 'Analysis',
      step3: 'Strategy',
      step4: 'Implementation',
      step5: 'Monitoring',
      step6: 'Optimization',
      downloadGuide: 'Download Integration Guide',
    },
    cta: {
      title: 'Transform Your Approach to Cyber Risk',
      description: 'Discover how the STEEL™ framework can provide clarity and confidence in your cybersecurity program.',
      scheduleConsultation: 'Schedule a Consultation',
      requestCaseStudy: 'Request Case Study',
    },
  },
  dashboard: {
    title: 'Executive Dashboard',
    subtitle: 'A comprehensive view of your organization\'s cybersecurity posture.',
    riskScore: {
      title: 'Overall Risk Score',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      critical: 'Critical',
    },
    metrics: {
      title: 'Key Metrics',
      vulnerabilities: 'Active Vulnerabilities',
      threats: 'Emerging Threats',
      incidents: 'Recent Incidents',
      compliance: 'Compliance Status',
    },
    radar: {
      title: 'Risk Radar',
      description: 'Visualization of risk across all STEEL™ dimensions',
    },
    threats: {
      title: 'Threat Intelligence',
      type: 'Type',
      source: 'Source',
      impact: 'Impact',
      timeline: 'Timeline',
    },
    actions: {
      title: 'Strategic Actions',
      details: 'View Details',
      items: [
        {
          priority: 'Critical',
          action: 'Implement multi-factor authentication across all systems',
          impact: 'Reduces account compromise risk by 99%',
          status: 'In Progress',
        },
        {
          priority: 'High',
          action: 'Update incident response plan for ransomware scenarios',
          impact: 'Reduces potential downtime by 72%',
          status: 'Completed',
        },
        {
          priority: 'Medium',
          action: 'Conduct executive tabletop exercise',
          impact: 'Improves executive decision-making during incidents',
          status: 'Not Started',
        },
        {
          priority: 'High',
          action: 'Review and update third-party security requirements',
          impact: 'Reduces supply chain risk exposure',
          status: 'In Progress',
        },
        {
          priority: 'Medium',
          action: 'Implement enhanced email security controls',
          impact: 'Reduces successful phishing attempts by 85%',
          status: 'Not Started',
        },
      ],
    },
  },
  riskRadar: {
    title: 'Risk Radar',
    subtitle: 'Visualize and analyze risk across all STEEL™ dimensions.',
    dimensions: 'Risk Dimensions',
    visualization: 'Risk Visualization',
    scenarios: {
      title: 'Scenarios',
      current: 'Current State',
      breach: 'Post-Breach',
      investment: 'Post-Investment',
      industry: 'Industry Average',
    },
    recommendations: {
      title: 'Recommendations',
      generateReport: 'Generate Report',
      impactLabel: 'Impact',
      immediateAction: 'Immediate action required',
      quickWin: 'Quick win opportunity',
      items: [
        {
          priority: 'Critical',
          action: 'Implement enhanced data protection for sensitive customer information',
          impact: 'Reduces data breach risk by 78%',
          effort: 'Medium',
        },
        {
          priority: 'High',
          action: 'Establish third-party risk management program',
          impact: 'Improves visibility into supply chain risks',
          effort: 'High',
        },
        {
          priority: 'Medium',
          action: 'Update security awareness training with industry-specific scenarios',
          impact: 'Reduces successful social engineering attempts by 62%',
          effort: 'Low',
        },
        {
          priority: 'High',
          action: 'Implement compliance monitoring automation',
          impact: 'Reduces manual effort and improves accuracy',
          effort: 'Medium',
        },
        {
          priority: 'Critical',
          action: 'Enhance network segmentation to isolate critical systems',
          impact: 'Limits lateral movement during compromise',
          effort: 'High',
        },
      ],
    },
  },
  presentation: {
    title: 'Board Presentation',
    subtitle: 'A customizable presentation template for board-level cybersecurity briefings.',
    navigation: {
      previous: 'Previous',
      next: 'Next',
      fullscreen: 'Toggle Fullscreen',
    },
    download: 'Download Presentation',
    keyboardShortcuts: 'Keyboard shortcuts: Arrow keys to navigate, F for fullscreen, Escape to exit',
    slides: {
      slide1: {
        title: 'Cybersecurity Executive Briefing',
        subtitle: 'Strategic analysis and recommendations',
        content: 'Comprehensive overview of the organization\'s cybersecurity posture with executive-level insights.'
      },
      slide2: {
        title: 'Current Risk Landscape',
        subtitle: 'Overview of the threat environment',
        content: 'Analysis of the current cyber threat landscape and its potential impact on the organization.'
      },
      slide3: {
        title: 'STEEL™ Risk Assessment',
        subtitle: 'Holistic view of organizational risk',
        content: 'Detailed assessment of risk across all six STEEL dimensions with comparative industry benchmarks.'
      },
      slide4: {
        title: 'Strategic Vulnerabilities',
        subtitle: 'Key areas requiring attention',
        content: 'Identification of critical vulnerabilities that pose significant risk to strategic objectives.'
      },
      slide5: {
        title: 'Recommended Actions',
        subtitle: 'Prioritized initiatives for risk reduction',
        content: 'Prioritized recommendations for addressing identified risks with expected outcomes.'
      },
      slide6: {
        title: 'Investment Considerations',
        subtitle: 'Resource allocation for maximum impact',
        content: 'Analysis of investment options with expected return on security investment calculations.'
      },
      slide7: {
        title: 'Next Steps and Timeline',
        subtitle: 'Implementation roadmap',
        content: 'Proposed implementation roadmap with key milestones and resource requirements.'
      }
    }
  },
  services: {
    title: 'Our Services',
    subtitle: 'Tailored cybersecurity advisory services for executive leadership',
    keyFeatures: 'Key Features',
    boardBriefings: {
      title: 'Board Briefings',
      description: 'Clear, actionable cybersecurity briefings for board members.',
      features: [
        'Non-technical language for clear understanding',
        'Strategic focus on business impact',
        'Actionable recommendations',
        'Benchmark comparisons',
        'Trend analysis and forecasting'
      ]
    },
    mAndA: {
      title: 'M&A Due Diligence',
      description: 'Comprehensive cyber risk assessment for acquisitions and mergers.',
      features: [
        'Pre-acquisition security assessment',
        'Technical and non-technical risk evaluation',
        'Integration risk analysis',
        'Post-merger security strategy',
        'Value protection recommendations'
      ]
    },
    crisis: {
      title: 'Crisis Leadership',
      description: 'Strategic guidance during cybersecurity incidents.',
      features: [
        'Executive crisis communication',
        'Strategic decision support',
        'Stakeholder management',
        'Regulatory and legal guidance',
        'Reputation management'
      ]
    },
    vCISO: {
      title: 'Virtual CISO',
      description: 'Executive-level security leadership without the full-time commitment.',
      features: [
        'Strategic security planning',
        'Board and executive communication',
        'Security program development',
        'Vendor and technology selection',
        'Compliance oversight'
      ]
    },
    steelFramework: {
      title: 'The STEEL™ Framework',
      description1: 'Our proprietary STEEL™ framework provides a holistic approach to cyber risk management that addresses all aspects of your organization\'s security posture.',
      description2: 'Unlike traditional frameworks that focus primarily on technical controls, STEEL™ incorporates Social, Technology, Economic, Environmental, Legal, and Political factors for a comprehensive view of your risk landscape.',
      exploreButton: 'Explore STEEL™',
    },
    process: {
      title: 'Our Engagement Process',
      step1: 'Initial Assessment',
      step2: 'Strategic Planning',
      step3: 'Implementation',
      step4: 'Monitoring',
      step5: 'Optimization',
    },
    contact: {
      title: 'Get in Touch',
      email: 'advisory@ermits.com',
      phone: '+1 (888) 618-6160',
      headquarters: '8300 McCullough Lan, Suite 203, Gaithersburg, MD 20877',
      requestConsultation: 'Request a Consultation',
    },
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Get in touch with our experts to discuss your cybersecurity needs',
    form: {
      title: 'Send Us a Message',
      nameLabel: 'Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'Enter your email address',
      companyLabel: 'Company',
      companyPlaceholder: 'Enter your company name',
      phoneLabel: 'Phone Number (optional)',
      phonePlaceholder: 'Enter your phone number',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us about your needs or questions',
      submitButton: 'Send Message',
      requiredFields: 'Required fields',
      successTitle: 'Message Sent Successfully',
      successMessage: 'Thank you for contacting us. We\'ll get back to you as soon as possible.',
      errorTitle: 'Message Could Not Be Sent',
      errorMessage: 'There was a problem sending your message. Please try again later or contact us directly.',
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email address is required',
        emailInvalid: 'Please enter a valid email address',
        companyRequired: 'Company name is required',
        messageRequired: 'Message is required',
        messageTooShort: 'Message must be at least 10 characters long',
        phoneInvalid: 'Please enter a valid phone number',
      },
    },
    info: {
      title: 'Contact Information',
      emailTitle: 'Email',
      emailDescription: 'For general inquiries and information:',
      phoneTitle: 'Phone',
      phoneDescription: 'For immediate assistance:',
      addressTitle: 'Headquarters',
      addressDescription: 'Visit our main office:',
      hoursTitle: 'Business Hours',
      weekdays: 'Monday - Friday',
      weekends: 'Saturday - Sunday',
      closed: 'Closed',
    },
    map: {
      title: 'Find Us',
      placeholder: 'Interactive map would be displayed here in production',
      apiNote: 'Requires Google Maps API integration',
    },
    faq: {
      title: 'Frequently Asked Questions',
      response: {
        title: 'How quickly can I expect a response?',
        content: 'We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.',
      },
      international: {
        title: 'Do you work with international clients?',
        content: 'Yes, we work with organizations around the world. Our team has experience with global regulatory frameworks and security standards.',
      },
      confidentiality: {
        title: 'How do you handle confidential information?',
        content: 'All client information is treated with the highest level of confidentiality. We utilize secure communication channels and can sign NDAs before detailed discussions.',
      },
      preparation: {
        title: 'What should I prepare for an initial consultation?',
        content: 'It\'s helpful to have a general overview of your current security program, key concerns, and specific goals you\'d like to achieve through our partnership.'
      }
    }
  },
  about: {
    title: 'About ERMITS Advisory',
    subtitle: 'Strategic cybersecurity guidance for executive leadership',
    hero: {
      meetTeam: 'Meet Our Team',
      bookCall: 'Book a Call',
    },
    story: {
      title: 'Our Story',
      paragraph1: 'ERMITS Advisory was founded in 2018 by Dr. Eleanor Richards, a former CISO with over 20 years of experience in the financial services sector. She recognized a critical gap between technical security practitioners and executive leadership that often resulted in misaligned strategies and poor risk decisions.',
      paragraph2: 'Our mission is to bridge this gap by providing strategic cybersecurity guidance that executives can understand and act upon. We developed the STEEL™ methodology to provide a holistic framework for cyber risk that considers all aspects of an organization, not just technology.',
      paragraph3: 'Today, we work with Fortune 500 companies, government agencies, and high-growth organizations to transform their approach to cyber risk management.',
      clients: 'Global Clients',
      countries: 'Countries',
      projects: 'Projects Completed',
    },
    values: {
      title: 'Our Values',
      integrity: {
        title: 'Integrity',
        description: 'We uphold the highest standards of integrity and ethics in all our client engagements and business practices.',
      },
      excellence: {
        title: 'Excellence',
        description: 'We are committed to delivering excellence in every aspect of our work, from research to client deliverables.',
      },
      collaboration: {
        title: 'Collaboration',
        description: 'We believe in the power of collaboration, both within our team and with our clients, to achieve the best outcomes.',
      },
      innovation: {
        title: 'Innovation',
        description: 'We continuously innovate our methodologies and approaches to stay ahead of emerging risks and challenges.',
      },
    },
    team: {
      title: 'Our Leadership Team',
      viewProfile: 'View Profile',
      viewAll: 'View All Team Members',
    },
    timeline: {
      title: 'Our Journey',
      founding: {
        title: 'Founding',
        description: 'ERMITS Advisory was founded by Dr. Eleanor Richards to bridge the gap between technical security and executive leadership.',
      },
      methodology: {
        title: 'STEEL™ Methodology',
        description: 'Development and introduction of our proprietary STEEL™ methodology for holistic cyber risk management.',
      },
      expansion: {
        title: 'Global Expansion',
        description: 'Expansion into European and Asian markets with office openings in London and Singapore.',
      },
      global: {
        title: 'Global Recognition',
        description: 'Recognition as a leader in executive cybersecurity advisory by major industry analysts.',
      },
      today: {
        title: 'Today',
        description: 'Continuing to innovate and expand our services to meet the evolving needs of our global client base.',
      },
    },
    global: {
      title: 'Global Presence',
      description: 'With offices in key global locations, we serve clients around the world with localized expertise and global insights.',
      offices: {
        us: 'Gaithersburg, MD, USA (Headquarters)',
        uk: 'London, UK',
        sg: 'Singapore',
        au: 'Sydney, Australia',
      },
      mapPlaceholder: 'Interactive global map would be displayed here',
      contact: 'Contact Your Nearest Office',
    },
    cta: {
      title: 'Ready to Work Together?',
      description: 'Schedule a call with our team to discuss how we can help you transform your approach to cybersecurity risk.',
      schedule: 'Schedule a Call',
      learn: 'Learn More About Our Approach',
    },
  },
  resources: {
    title: 'Resource Library',
    subtitle: 'Insights, guides, and tools to enhance your cybersecurity strategy',
    featured: 'Featured Resource',
    download: 'Download',
    view: 'View Resource',
    searchPlaceholder: 'Search resources...',
    filters: 'Filters',
    clearFilters: 'Clear Filters',
    categories: {
      title: 'Categories',
      all: 'All Resources',
      whitepapers: 'Whitepapers',
      articles: 'Articles',
      casestudies: 'Case Studies',
      webinars: 'Webinars',
    },
    tags: {
      title: 'Topics',
      compliance: 'Compliance',
      risk: 'Risk Management',
      leadership: 'Leadership',
      technology: 'Technology',
    },
    noResults: {
      title: 'No Results Found',
      message: 'We couldn\'t find any resources matching your criteria. Try adjusting your filters or search query.',
    },
    newsletter: {
      title: 'Stay Informed',
      description: 'Subscribe to our newsletter for the latest insights on cybersecurity risk management for executives.',
      emailPlaceholder: 'Your email address',
      subscribe: 'Subscribe',
      privacy: 'We respect your privacy and will never share your information. You can unsubscribe at any time.',
    },
  },
};

// Spanish translations
const es: TranslationObj = {
  common: {
    tagline: 'Perspectiva Estratégica para la Resiliencia',
    copyright: '© 2025 ERMITS Advisory + STEEL™. Todos los derechos reservados.',
    learnMore: 'Saber Más',
    viewDashboard: 'Ver Dashboard',
    demo: 'Esta es una demostración de la plataforma ERMITS Advisory + STEEL™',
  },
  navigation: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    resources: 'Recursos',
    steel: 'STEEL™',
    riskRadar: 'Radar de Riesgo',
    dashboard: 'Dashboard',
    presentation: 'Presentación',
    contact: 'Contacto',
  },
  notFound: {
    title: 'Página No Encontrada',
    message: 'La página que estás buscando puede haber sido eliminada, cambió de nombre o no está disponible temporalmente.',
    returnHome: 'Volver al Inicio',
    goBack: 'Regresar',
    lookingFor: '¿Buscas algo específico?',
    searchPlaceholder: 'Buscar en nuestro sitio...',
    popularPages: 'Páginas populares',
    needAssistance: '¿Necesitas ayuda?',
    contactUs: 'Contacta a nuestro equipo'
  },
  footer: {
    services: {
      title: 'Servicios',
      boardBriefings: 'Informes para Directorio',
      mAndA: 'Debida Diligencia M&A',
      crisis: 'Liderazgo en Crisis',
      vCISO: 'CISO Virtual',
    },
    resources: {
      title: 'Recursos',
      steel: 'Metodología STEEL™',
      riskRadar: 'Radar de Riesgo',
      dashboard: 'Dashboard Ejecutivo',
      library: 'Biblioteca de Recursos',
      about: 'Sobre Nosotros',
    },
    contact: {
      title: 'Contacto',
      emailLabel: 'Email:',
      phoneLabel: 'Teléfono:',
      headquartersLabel: 'Sede:',
    },
    policy: {
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      cookie: 'Política de Cookies',
    },
  },
  landing: {
    hero: {
      title: 'Liderazgo Estratégico en Ciberriesgo',
      subtitle: 'Empoderando a ejecutivos para navegar el complejo panorama del ciberriesgo con claridad y confianza.',
      cta: 'Explorar la Metodología STEEL™',
    },
    metrics: {
      title: 'Resultados Reales para Ejecutivos',
      riskReduction: 'Reducción Promedio de Riesgo',
      timeToInsight: 'Tiempo a Perspectiva Más Rápido',
      boardConfidence: 'Mayor Confianza del Directorio',
      roiImprovement: 'Mejora del ROI',
    },
    steelOverview: {
      title: 'La Metodología STEEL™',
      subtitle: 'Un enfoque holístico del ciberriesgo que considera todos los aspectos de su organización.',
      political: {
        title: 'Político',
        description: 'Panorama regulatorio, requisitos de cumplimiento y factores geopolíticos que impactan la postura de ciberseguridad.',
      },
      economic: {
        title: 'Económico',
        description: 'Impacto financiero, condiciones del mercado y panorama competitivo que influyen en las inversiones de seguridad.',
      },
      social: {
        title: 'Social',
        description: 'Gestión de reputación, percepción pública y factores de responsabilidad social.',
      },
      technology: {
        title: 'Tecnológico',
        description: 'Infraestructura, transformación digital y vulnerabilidades técnicas.',
      },
      environmental: {
        title: 'Ambiental',
        description: 'Seguridad física, riesgos naturales y factores ambientales.',
      },
      legal: {
        title: 'Legal',
        description: 'Obligaciones contractuales, responsabilidad y requisitos legales.',
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Servicios de asesoría adaptados para satisfacer sus necesidades específicas.',
      boardBriefings: {
        title: 'Informes para Directorio',
        description: 'Informes de ciberseguridad claros y accionables para miembros del directorio.',
      },
      mAndA: {
        title: 'Debida Diligencia M&A',
        description: 'Evaluación integral de riesgos cibernéticos para adquisiciones y fusiones.',
      },
      crisis: {
        title: 'Liderazgo en Crisis',
        description: 'Orientación estratégica durante incidentes de ciberseguridad.',
      },
      vCISO: {
        title: 'CISO Virtual',
        description: 'Liderazgo de seguridad a nivel ejecutivo sin el compromiso de tiempo completo.',
      },
    },
    trust: {
      title: 'Confianza de Líderes de la Industria',
      subtitle: 'Nuestra experiencia es reconocida por organizaciones e instituciones líderes.',
      cert1: 'Certificado ISO 27001',
      cert2: 'Evaluador CMMC',
      cert3: 'Equipo Certificado CISSP',
      cert4: 'Practicantes NIST CSF',
    },
    cta: {
      title: '¿Listo para Transformar su Estrategia de Ciberriesgo?',
      subtitle: 'Programe una consulta con nuestro equipo de expertos para discutir sus necesidades y desafíos específicos.',
      button: 'Solicitar una Consulta',
    },
  },
  steel: {
    title: 'Metodología STEEL™',
    subtitle: 'Una metodología integral para la gestión holística del ciberriesgo',
    overview: 'La Metodología STEEL™ aborda el ciberriesgo a través de seis dimensiones críticas: factores Sociales, Tecnológicos, Económicos, Ambientales, Legales y Políticos. Este enfoque integrado asegura una visión completa del panorama de riesgos de su organización.',
    dimensions: {
      political: {
        title: 'Político',
        description: 'Panorama regulatorio, requisitos de cumplimiento y factores geopolíticos que impactan la postura de ciberseguridad.',
      },
      economic: {
        title: 'Económico',
        description: 'Impacto financiero, condiciones del mercado y panorama competitivo que influyen en las inversiones de seguridad.',
      },
      social: {
        title: 'Social',
        description: 'Gestión de reputación, percepción pública y factores de responsabilidad social.',
      },
      technology: {
        title: 'Tecnológico',
        description: 'Infraestructura, transformación digital y vulnerabilidades técnicas.',
      },
      environmental: {
        title: 'Ambiental',
        description: 'Seguridad física, riesgos naturales y factores ambientales.',
      },
      legal: {
        title: 'Legal',
        description: 'Obligaciones contractuales, responsabilidad y requisitos legales.',
      },
    },
    integration: {
      title: 'Integrando STEEL™ en su Programa de Riesgo',
      description: 'Nuestro enfoque sistemático asegura que la metodología STEEL™ mejore sus procesos existentes de gestión de riesgos con mínima interrupción y máximo impacto.',
      step1: 'Evaluación',
      step2: 'Análisis',
      step3: 'Estrategia',
      step4: 'Implementación',
      step5: 'Monitoreo',
      step6: 'Optimización',
      downloadGuide: 'Descargar Guía de Integración',
    },
    cta: {
      title: 'Transforme su Enfoque del Ciberriesgo',
      description: 'Descubra cómo la metodología STEEL™ puede proporcionar claridad y confianza en su programa de ciberseguridad.',
      scheduleConsultation: 'Programar una Consulta',
      requestCaseStudy: 'Solicitar Caso de Estudio',
    },
  },
  dashboard: {
    title: 'Dashboard Ejecutivo',
    subtitle: 'Una visión integral de la postura de ciberseguridad de su organización.',
    riskScore: {
      title: 'Puntuación de Riesgo General',
      low: 'Bajo',
      medium: 'Medio',
      high: 'Alto',
      critical: 'Crítico',
    },
    metrics: {
      title: 'Métricas Clave',
      vulnerabilities: 'Vulnerabilidades Activas',
      threats: 'Amenazas Emergentes',
      incidents: 'Incidentes Recientes',
      compliance: 'Estado de Cumplimiento',
    },
    radar: {
      title: 'Radar de Riesgo',
      description: 'Visualización del riesgo a través de todas las dimensiones STEEL™',
    },
    threats: {
      title: 'Inteligencia de Amenazas',
      type: 'Tipo',
      source: 'Fuente',
      impact: 'Impacto',
      timeline: 'Cronología',
    },
    actions: {
      title: 'Acciones Estratégicas',
      details: 'Ver Detalles',
      items: [
        {
          priority: 'Crítico',
          action: 'Implementar autenticación multifactor en todos los sistemas',
          impact: 'Reduce el riesgo de compromiso de cuentas en un 99%',
          status: 'En Progreso',
        },
        {
          priority: 'Alto',
          action: 'Actualizar plan de respuesta a incidentes para escenarios de ransomware',
          impact: 'Reduce el tiempo de inactividad potencial en un 72%',
          status: 'Completado',
        },
        {
          priority: 'Medio',
          action: 'Realizar ejercicio de simulación para ejecutivos',
          impact: 'Mejora la toma de decisiones ejecutivas durante incidentes',
          status: 'No Iniciado',
        },
        {
          priority: 'Alto',
          action: 'Revisar y actualizar requisitos de seguridad para terceros',
          impact: 'Reduce la exposición al riesgo de la cadena de suministro',
          status: 'En Progreso',
        },
        {
          priority: 'Medio',
          action: 'Implementar controles mejorados de seguridad de correo electrónico',
          impact: 'Reduce los intentos de phishing exitosos en un 85%',
          status: 'No Iniciado',
        },
      ],
    },
  },
  riskRadar: {
    title: 'Radar de Riesgo',
    subtitle: 'Visualice y analice el riesgo a través de todas las dimensiones STEEL™.',
    dimensions: 'Dimensiones de Riesgo',
    visualization: 'Visualización de Riesgo',
    scenarios: {
      title: 'Escenarios',
      current: 'Estado Actual',
      breach: 'Post-Brecha',
      investment: 'Post-Inversión',
      industry: 'Promedio de la Industria',
    },
    recommendations: {
      title: 'Recomendaciones',
      generateReport: 'Generar Informe',
      impactLabel: 'Impacto',
      immediateAction: 'Acción inmediata requerida',
      quickWin: 'Oportunidad de victoria rápida',
      items: [
        {
          priority: 'Crítico',
          action: 'Implementar protección de datos mejorada para información sensible de clientes',
          impact: 'Reduce el riesgo de filtración de datos en un 78%',
          effort: 'Medio',
        },
        {
          priority: 'Alto',
          action: 'Establecer programa de gestión de riesgos de terceros',
          impact: 'Mejora la visibilidad de los riesgos de la cadena de suministro',
          effort: 'Alto',
        },
        {
          priority: 'Medio',
          action: 'Actualizar capacitación de concientización de seguridad con escenarios específicos de la industria',
          impact: 'Reduce los intentos exitosos de ingeniería social en un 62%',
          effort: 'Bajo',
        },
        {
          priority: 'Alto',
          action: 'Implementar automatización de monitoreo de cumplimiento',
          impact: 'Reduce el esfuerzo manual y mejora la precisión',
          effort: 'Medio',
        },
        {
          priority: 'Crítico',
          action: 'Mejorar la segmentación de red para aislar sistemas críticos',
          impact: 'Limita el movimiento lateral durante un compromiso',
          effort: 'Alto',
        },
      ],
    },
  },
  presentation: {
    title: 'Presentación para Directorio',
    subtitle: 'Una plantilla de presentación personalizable para informes de ciberseguridad a nivel de directorio.',
    navigation: {
      previous: 'Anterior',
      next: 'Siguiente',
      fullscreen: 'Alternar Pantalla Completa',
    },
    download: 'Descargar Presentación',
    keyboardShortcuts: 'Atajos de teclado: Flechas para navegar, F para pantalla completa, Escape para salir',
    slides: {
      slide1: {
        title: 'Informe Ejecutivo de Ciberseguridad',
        subtitle: 'Análisis estratégico y recomendaciones',
        content: 'Visión integral de la postura de ciberseguridad de la organización con perspectivas a nivel ejecutivo.'
      },
      slide2: {
        title: 'Panorama Actual de Riesgos',
        subtitle: 'Visión general del entorno de amenazas',
        content: 'Análisis del panorama actual de amenazas cibernéticas y su impacto potencial en la organización.'
      },
      slide3: {
        title: 'Evaluación de Riesgo STEEL™',
        subtitle: 'Visión holística del riesgo organizacional',
        content: 'Evaluación detallada del riesgo a través de las seis dimensiones STEEL con comparativas de referencia de la industria.'
      },
      slide4: {
        title: 'Vulnerabilidades Estratégicas',
        subtitle: 'Áreas clave que requieren atención',
        content: 'Identificación de vulnerabilidades críticas que representan un riesgo significativo para los objetivos estratégicos.'
      },
      slide5: {
        title: 'Acciones Recomendadas',
        subtitle: 'Iniciativas priorizadas para la reducción de riesgos',
        content: 'Recomendaciones priorizadas para abordar los riesgos identificados con resultados esperados.'
      },
      slide6: {
        title: 'Consideraciones de Inversión',
        subtitle: 'Asignación de recursos para máximo impacto',
        content: 'Análisis de opciones de inversión con cálculos de retorno esperado de inversión en seguridad.'
      },
      slide7: {
        title: 'Próximos Pasos y Cronograma',
        subtitle: 'Hoja de ruta de implementación',
        content: 'Hoja de ruta de implementación propuesta con hitos clave y requisitos de recursos.'
      }
    }
  },
  services: {
    title: 'Nuestros Servicios',
    subtitle: 'Servicios de asesoría en ciberseguridad adaptados para liderazgo ejecutivo',
    keyFeatures: 'Características Clave',
    boardBriefings: {
      title: 'Informes para Directorio',
      description: 'Informes de ciberseguridad claros y accionables para miembros del directorio.',
      features: [
        'Lenguaje no técnico para una comprensión clara',
        'Enfoque estratégico en el impacto empresarial',
        'Recomendaciones accionables',
        'Comparaciones de referencia',
        'Análisis de tendencias y previsión'
      ]
    },
    mAndA: {
      title: 'Debida Diligencia M&A',
      description: 'Evaluación integral de riesgos cibernéticos para adquisiciones y fusiones.',
      features: [
        'Evaluación de seguridad previa a la adquisición',
        'Evaluación de riesgos técnicos y no técnicos',
        'Análisis de riesgos de integración',
        'Estrategia de seguridad post-fusión',
        'Recomendaciones de protección de valor'
      ]
    },
    crisis: {
      title: 'Liderazgo en Crisis',
      description: 'Orientación estratégica durante incidentes de ciberseguridad.',
      features: [
        'Comunicación de crisis ejecutiva',
        'Apoyo a decisiones estratégicas',
        'Gestión de partes interesadas',
        'Orientación regulatoria y legal',
        'Gestión de reputación'
      ]
    },
    vCISO: {
      title: 'CISO Virtual',
      description: 'Liderazgo de seguridad a nivel ejecutivo sin el compromiso de tiempo completo.',
      features: [
        'Planificación estratégica de seguridad',
        'Comunicación con directorio y ejecutivos',
        'Desarrollo de programa de seguridad',
        'Selección de proveedores y tecnología',
        'Supervisión de cumplimiento'
      ]
    },
    steelFramework: {
      title: 'La Metodología STEEL™',
      description1: 'Nuestra metodología propietaria STEEL™ proporciona un enfoque holístico para la gestión del ciberriesgo que aborda todos los aspectos de la postura de seguridad de su organización.',
      description2: 'A diferencia de los marcos tradicionales que se centran principalmente en controles técnicos, STEEL™ incorpora factores Sociales, Tecnológicos, Económicos, Ambientales, Legales y Políticos para una visión integral de su panorama de riesgos.',
      exploreButton: 'Explorar STEEL™',
    },
    process: {
      title: 'Nuestro Proceso de Compromiso',
      step1: 'Evaluación Inicial',
      step2: 'Planificación Estratégica',
      step3: 'Implementación',
      step4: 'Monitoreo',
      step5: 'Optimización',
    },
    contact: {
      title: 'Póngase en Contacto',
      email: 'advisory@ermits.com',
      phone: '+1 (888) 618-6160',
      headquarters: '8300 McCullough Lan, Suite 203, Gaithersburg, MD 20877',
      requestConsultation: 'Solicitar una Consulta',
    },
  },
  contact: {
    title: 'Contáctenos',
    subtitle: 'Póngase en contacto con nuestros expertos para discutir sus necesidades de ciberseguridad',
    form: {
      title: 'Envíenos un Mensaje',
      nameLabel: 'Nombre',
      namePlaceholder: 'Ingrese su nombre completo',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'Ingrese su dirección de correo electrónico',
      companyLabel: 'Empresa',
      companyPlaceholder: 'Ingrese el nombre de su empresa',
      phoneLabel: 'Número de Teléfono (opcional)',
      phonePlaceholder: 'Ingrese su número de teléfono',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Cuéntenos sobre sus necesidades o preguntas',
      submitButton: 'Enviar Mensaje',
      requiredFields: 'Campos requeridos',
      successTitle: 'Mensaje Enviado Exitosamente',
      successMessage: 'Gracias por contactarnos. Nos comunicaremos con usted lo antes posible.',
      errorTitle: 'No Se Pudo Enviar el Mensaje',
      errorMessage: 'Hubo un problema al enviar su mensaje. Intente nuevamente más tarde o contáctenos directamente.',
      errors: {
        nameRequired: 'El nombre es requerido',
        emailRequired: 'La dirección de correo electrónico es requerida',
        emailInvalid: 'Por favor, ingrese una dirección de correo electrónico válida',
        companyRequired: 'El nombre de la empresa es requerido',
        messageRequired: 'El mensaje es requerido',
        messageTooShort: 'El mensaje debe tener al menos 10 caracteres',
        phoneInvalid: 'Por favor, ingrese un número de teléfono válido',
      },
    },
    info: {
      title: 'Información de Contacto',
      emailTitle: 'Correo Electrónico',
      emailDescription: 'Para consultas generales e información:',
      phoneTitle: 'Teléfono',
      phoneDescription: 'Para asistencia inmediata:',
      addressTitle: 'Sede Central',
      addressDescription: 'Visite nuestra oficina principal:',
      hoursTitle: 'Horario de Atención',
      weekdays: 'Lunes - Viernes',
      weekends: 'Sábado - Domingo',
      closed: 'Cerrado',
    },
    map: {
      title: 'Encuéntrenos',
      placeholder: 'El mapa interactivo se mostraría aquí en producción',
      apiNote: 'Requiere integración con API de Google Maps',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      response: {
        title: '¿Qué tan rápido puedo esperar una respuesta?',
        content: 'Típicamente respondemos a todas las consultas dentro de 24 horas hábiles. Para asuntos urgentes, por favor llame directamente a nuestra oficina.',
      },
      international: {
        title: '¿Trabajan con clientes internacionales?',
        content: 'Sí, trabajamos con organizaciones de todo el mundo. Nuestro equipo tiene experiencia con marcos regulatorios globales y estándares de seguridad.',
      },
      confidentiality: {
        title: '¿Cómo manejan la información confidencial?',
        content: 'Toda la información del cliente se trata con el más alto nivel de confidencialidad. Utilizamos canales de comunicación seguros y podemos firmar acuerdos de confidencialidad antes de discusiones detalladas.',
      },
      preparation: {
        title: '¿Qué debería preparar para una consulta inicial?',
        content: 'Es útil tener una visión general de su programa de seguridad actual, preocupaciones clave y objetivos específicos que le gustaría lograr a través de nuestra asociación.'
      }
    }
  },
  about: {
    title: 'Sobre ERMITS Advisory',
    subtitle: 'Orientación estratégica en ciberseguridad para liderazgo ejecutivo',
    hero: {
      meetTeam: 'Conocer a Nuestro Equipo',
      bookCall: 'Agendar una Llamada',
    },
    story: {
      title: 'Nuestra Historia',
      paragraph1: 'ERMITS Advisory fue fundada en 2018 por la Dra. Eleanor Richards, ex CISO con más de 20 años de experiencia en el sector de servicios financieros. Ella reconoció una brecha crítica entre los profesionales técnicos de seguridad y el liderazgo ejecutivo que a menudo resultaba en estrategias desalineadas y decisiones de riesgo deficientes.',
      paragraph2: 'Nuestra misión es cerrar esta brecha proporcionando orientación estratégica en ciberseguridad que los ejecutivos puedan entender y actuar en consecuencia. Desarrollamos la metodología STEEL™ para proporcionar un marco holístico para el ciberriesgo que considere todos los aspectos de una organización, no solo la tecnología.',
      paragraph3: 'Hoy, trabajamos con empresas Fortune 500, agencias gubernamentales y organizaciones de alto crecimiento para transformar su enfoque de la gestión del ciberriesgo.',
      clients: 'Clientes Globales',
      countries: 'Países',
      projects: 'Proyectos Completados',
    },
    values: {
      title: 'Nuestros Valores',
      integrity: {
        title: 'Integridad',
        description: 'Mantenemos los más altos estándares de integridad y ética en todos nuestros compromisos con clientes y prácticas comerciales.',
      },
      excellence: {
        title: 'Excelencia',
        description: 'Estamos comprometidos a entregar excelencia en cada aspecto de nuestro trabajo, desde la investigación hasta los entregables del cliente.',
      },
      collaboration: {
        title: 'Colaboración',
        description: 'Creemos en el poder de la colaboración, tanto dentro de nuestro equipo como con nuestros clientes, para lograr los mejores resultados.',
      },
      innovation: {
        title: 'Innovación',
        description: 'Innovamos continuamente nuestras metodologías y enfoques para mantenernos adelante de los riesgos y desafíos emergentes.',
      },
    },
    team: {
      title: 'Nuestro Equipo de Liderazgo',
      viewProfile: 'Ver Perfil',
      viewAll: 'Ver Todos los Miembros del Equipo',
    },
    timeline: {
      title: 'Nuestra Trayectoria',
      founding: {
        title: 'Fundación',
        description: 'ERMITS Advisory fue fundada por la Dra. Eleanor Richards para cerrar la brecha entre la seguridad técnica y el liderazgo ejecutivo.',
      },
      methodology: {
        title: 'Metodología STEEL™',
        description: 'Desarrollo e introducción de nuestra metodología propietaria STEEL™ para la gestión holística del ciberriesgo.',
      },
      expansion: {
        title: 'Expansión Global',
        description: 'Expansión a mercados europeos y asiáticos con apertura de oficinas en Londres y Singapur.',
      },
      global: {
        title: 'Reconocimiento Global',
        description: 'Reconocimiento como líder en asesoría de ciberseguridad ejecutiva por principales analistas de la industria.',
      },
      today: {
        title: 'Hoy',
        description: 'Continuamos innovando y expandiendo nuestros servicios para satisfacer las necesidades en evolución de nuestra base de clientes global.',
      },
    },
    global: {
      title: 'Presencia Global',
      description: 'Con oficinas en ubicaciones globales clave, servimos a clientes en todo el mundo con experiencia localizada y perspectivas globales.',
      offices: {
        us: 'Gaithersburg, MD, EE.UU. (Sede Central)',
        uk: 'Londres, Reino Unido',
        sg: 'Singapur',
        au: 'Sídney, Australia',
      },
      mapPlaceholder: 'Aquí se mostraría un mapa global interactivo',
      contact: 'Contacte a Su Oficina Más Cercana',
    },
    cta: {
      title: '¿Listo para Trabajar Juntos?',
      description: 'Programe una llamada con nuestro equipo para discutir cómo podemos ayudarlo a transformar su enfoque del riesgo de ciberseguridad.',
      schedule: 'Programar una Llamada',
      learn: 'Más Sobre Nuestro Enfoque',
    },
  },
  resources: {
    title: 'Biblioteca de Recursos',
    subtitle: 'Perspectivas, guías y herramientas para mejorar su estrategia de ciberseguridad',
    featured: 'Recurso Destacado',
    download: 'Descargar',
    view: 'Ver Recurso',
    searchPlaceholder: 'Buscar recursos...',
    filters: 'Filtros',
    clearFilters: 'Limpiar Filtros',
    categories: {
      title: 'Categorías',
      all: 'Todos los Recursos',
      whitepapers: 'Libros Blancos',
      articles: 'Artículos',
      casestudies: 'Casos de Estudio',
      webinars: 'Webinars',
    },
    tags: {
      title: 'Temas',
      compliance: 'Cumplimiento',
      risk: 'Gestión de Riesgos',
      leadership: 'Liderazgo',
      technology: 'Tecnología',
    },
    noResults: {
      title: 'No Se Encontraron Resultados',
      message: 'No pudimos encontrar recursos que coincidan con sus criterios. Intente ajustar sus filtros o consulta de búsqueda.',
    },
    newsletter: {
      title: 'Manténgase Informado',
      description: 'Suscríbase a nuestro boletín para obtener las últimas perspectivas sobre gestión de riesgos de ciberseguridad para ejecutivos.',
      emailPlaceholder: 'Su dirección de correo electrónico',
      subscribe: 'Suscribirse',
      privacy: 'Respetamos su privacidad y nunca compartiremos su información. Puede darse de baja en cualquier momento.',
    },
  },
};

// French translations
const fr: TranslationObj = {
  common: {
    tagline: 'Perspective Stratégique pour la Résilience',
    copyright: '© 2025 ERMITS Advisory + STEEL™. Tous droits réservés.',
    learnMore: 'En Savoir Plus',
    viewDashboard: 'Voir le Tableau de Bord',
    demo: 'Ceci est une démonstration de la plateforme ERMITS Advisory + STEEL™',
  },
  navigation: {
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    resources: 'Ressources',
    steel: 'STEEL™',
    riskRadar: 'Radar des Risques',
    dashboard: 'Tableau de Bord',
    presentation: 'Présentation',
    contact: 'Contact',
  },
  notFound: {
    title: 'Page Non Trouvée',
    message: 'La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.',
    returnHome: 'Retour à l\'Accueil',
    goBack: 'Retour',
    lookingFor: 'Vous cherchez quelque chose de spécifique?',
    searchPlaceholder: 'Rechercher sur notre site...',
    popularPages: 'Pages populaires',
    needAssistance: 'Besoin d\'aide?',
    contactUs: 'Contactez notre équipe'
  },
  footer: {
    services: {
      title: 'Services',
      boardBriefings: 'Briefings Conseil',
      mAndA: 'Due Diligence M&A',
      crisis: 'Leadership de Crise',
      vCISO: 'RSSI Virtuel',
    },
    resources: {
      title: 'Ressources',
      steel: 'Méthodologie STEEL™',
      riskRadar: 'Radar des Risques',
      dashboard: 'Tableau de Bord Exécutif',
      library: 'Bibliothèque de Ressources',
      about: 'À Propos de Nous',
    },
    contact: {
      title: 'Contact',
      emailLabel: 'Email:',
      phoneLabel: 'Téléphone:',
      headquartersLabel: 'Siège:',
    },
    policy: {
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      cookie: 'Politique des Cookies',
    },
  },
  landing: {
    hero: {
      title: 'Leadership Stratégique en Cyberrisque',
      subtitle: 'Donner aux dirigeants les moyens de naviguer dans le paysage complexe du cyberrisque avec clarté et confiance.',
      cta: 'Explorer la Méthodologie STEEL™',
    },
    metrics: {
      title: 'Résultats Réels pour les Dirigeants',
      riskReduction: 'Réduction Moyenne des Risques',
      timeToInsight: 'Temps d\'Analyse Plus Rapide',
      boardConfidence: 'Confiance Accrue du Conseil',
      roiImprovement: 'Amélioration du ROI',
    },
    steelOverview: {
      title: 'La Méthodologie STEEL™',
      subtitle: 'Une approche holistique du cyberrisque qui prend en compte tous les aspects de votre organisation.',
      political: {
        title: 'Politique',
        description: 'Paysage réglementaire, exigences de conformité et facteurs géopolitiques qui impactent la posture de cybersécurité.',
      },
      economic: {
        title: 'Économique',
        description: 'Impact financier, conditions du marché et paysage concurrentiel qui influencent les investissements en sécurité.',
      },
      social: {
        title: 'Social',
        description: 'Gestion de la réputation, perception publique et facteurs de responsabilité sociale.',
      },
      technology: {
        title: 'Technologique',
        description: 'Infrastructure, transformation numérique et vulnérabilités techniques.',
      },
      environmental: {
        title: 'Environnemental',
        description: 'Sécurité physique, risques naturels et facteurs environnementaux.',
      },
      legal: {
        title: 'Légal',
        description: 'Obligations contractuelles, responsabilité et exigences légales.',
      },
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Services de conseil adaptés pour répondre à vos besoins spécifiques.',
      boardBriefings: {
        title: 'Briefings Conseil',
        description: 'Briefings de cybersécurité clairs et exploitables pour les membres du conseil.',
      },
      mAndA: {
        title: 'Due Diligence M&A',
        description: 'Évaluation complète des risques cyber pour les acquisitions et fusions.',
      },
      crisis: {
        title: 'Leadership de Crise',
        description: 'Orientation stratégique lors d\'incidents de cybersécurité.',
      },
      vCISO: {
        title: 'RSSI Virtuel',
        description: 'Leadership de sécurité au niveau exécutif sans l\'engagement à temps plein.',
      },
    },
    trust: {
      title: 'Reconnu par les Leaders de l\'Industrie',
      subtitle: 'Notre expertise est reconnue par des organisations et institutions de premier plan.',
      cert1: 'Certifié ISO 27001',
      cert2: 'Évaluateur CMMC',
      cert3: 'Équipe Certifiée CISSP',
      cert4: 'Praticiens NIST CSF',
    },
    cta: {
      title: 'Prêt à Transformer Votre Stratégie de Cyberrisque?',
      subtitle: 'Planifiez une consultation avec notre équipe d\'experts pour discuter de vos besoins et défis spécifiques.',
      button: 'Demander une Consultation',
    },
  },
  steel: {
    title: 'Méthodologie STEEL™',
    subtitle: 'Une méthodologie complète pour la gestion holistique du cyberrisque',
    overview: 'La Méthodologie STEEL™ aborde le cyberrisque à travers six dimensions critiques: facteurs Sociaux, Technologiques, Économiques, Environnementaux, Légaux et Politiques. Cette approche intégrée assure une vision complète du paysage des risques de votre organisation.',
    dimensions: {
      political: {
        title: 'Politique',
        description: 'Paysage réglementaire, exigences de conformité et facteurs géopolitiques qui impactent la posture de cybersécurité.',
      },
      economic: {
        title: 'Économique',
        description: 'Impact financier, conditions du marché et paysage concurrentiel qui influencent les investissements en sécurité.',
      },
      social: {
        title: 'Social',
        description: 'Gestion de la réputation, perception publique et facteurs de responsabilité sociale.',
      },
      technology: {
        title: 'Technologique',
        description: 'Infrastructure, transformation numérique et vulnérabilités techniques.',
      },
      environmental: {
        title: 'Environnemental',
        description: 'Sécurité physique, risques naturels et facteurs environnementaux.',
      },
      legal: {
        title: 'Légal',
        description: 'Obligations contractuelles, responsabilité et exigences légales.',
      },
    },
    integration: {
      title: 'Intégrer STEEL™ Dans Votre Programme de Risque',
      description: 'Notre approche systématique garantit que la méthodologie STEEL™ améliore vos processus existants de gestion des risques avec un minimum de perturbation et un impact maximal.',
      step1: 'Évaluation',
      step2: 'Analyse',
      step3: 'Stratégie',
      step4: 'Implémentation',
      step5: 'Surveillance',
      step6: 'Optimisation',
      downloadGuide: 'Télécharger le Guide d\'Intégration',
    },
    cta: {
      title: 'Transformez Votre Approche du Cyberrisque',
      description: 'Découvrez comment la méthodologie STEEL™ peut apporter clarté et confiance à votre programme de cybersécurité.',
      scheduleConsultation: 'Planifier une Consultation',
      requestCaseStudy: 'Demander une Étude de Cas',
    },
  },
  dashboard: {
    title: 'Tableau de Bord Exécutif',
    subtitle: 'Une vue complète de la posture de cybersécurité de votre organisation.',
    riskScore: {
      title: 'Score de Risque Global',
      low: 'Faible',
      medium: 'Moyen',
      high: 'Élevé',
      critical: 'Critique',
    },
    metrics: {
      title: 'Métriques Clés',
      vulnerabilities: 'Vulnérabilités Actives',
      threats: 'Menaces Émergentes',
      incidents: 'Incidents Récents',
      compliance: 'Statut de Conformité',
    },
    radar: {
      title: 'Radar des Risques',
      description: 'Visualisation des risques à travers toutes les dimensions STEEL™',
    },
    threats: {
      title: 'Intelligence des Menaces',
      type: 'Type',
      source: 'Source',
      impact: 'Impact',
      timeline: 'Chronologie',
    },
    actions: {
      title: 'Actions Stratégiques',
      details: 'Voir les Détails',
      items: [
        {
          priority: 'Critique',
          action: 'Mettre en œuvre l\'authentification multifacteur sur tous les systèmes',
          impact: 'Réduit le risque de compromission de compte de 99%',
          status: 'En Cours',
        },
        {
          priority: 'Élevé',
          action: 'Mettre à jour le plan de réponse aux incidents pour les scénarios de ransomware',
          impact: 'Réduit les temps d\'arrêt potentiels de 72%',
          status: 'Terminé',
        },
        {
          priority: 'Moyen',
          action: 'Conduire un exercice de simulation pour les dirigeants',
          impact: 'Améliore la prise de décision des dirigeants pendant les incidents',
          status: 'Non Démarré',
        },
        {
          priority: 'Élevé',
          action: 'Revoir et mettre à jour les exigences de sécurité des tiers',
          impact: 'Réduit l\'exposition aux risques de la chaîne d\'approvisionnement',
          status: 'En Cours',
        },
        {
          priority: 'Moyen',
          action: 'Mettre en œuvre des contrôles de sécurité améliorés pour les emails',
          impact: 'Réduit les tentatives réussies de phishing de 85%',
          status: 'Non Démarré',
        },
      ],
    },
  },
  riskRadar: {
    title: 'Radar des Risques',
    subtitle: 'Visualisez et analysez les risques à travers toutes les dimensions STEEL™.',
    dimensions: 'Dimensions des Risques',
    visualization: 'Visualisation des Risques',
    scenarios: {
      title: 'Scénarios',
      current: 'État Actuel',
      breach: 'Post-Violation',
      investment: 'Post-Investissement',
      industry: 'Moyenne de l\'Industrie',
    },
    recommendations: {
      title: 'Recommandations',
      generateReport: 'Générer un Rapport',
      impactLabel: 'Impact',
      immediateAction: 'Action immédiate requise',
      quickWin: 'Opportunité de gain rapide',
      items: [
        {
          priority: 'Critique',
          action: 'Mettre en œuvre une protection des données améliorée pour les informations sensibles des clients',
          impact: 'Réduit le risque de violation de données de 78%',
          effort: 'Moyen',
        },
        {
          priority: 'Élevé',
          action: 'Établir un programme de gestion des risques tiers',
          impact: 'Améliore la visibilité sur les risques de la chaîne d\'approvisionnement',
          effort: 'Élevé',
        },
        {
          priority: 'Moyen',
          action: 'Mettre à jour la formation de sensibilisation à la sécurité avec des scénarios spécifiques à l\'industrie',
          impact: 'Réduit les tentatives réussies d\'ingénierie sociale de 62%',
          effort: 'Faible',
        },
        {
          priority: 'Élevé',
          action: 'Mettre en œuvre l\'automatisation de la surveillance de la conformité',
          impact: 'Réduit l\'effort manuel et améliore la précision',
          effort: 'Moyen',
        },
        {
          priority: 'Critique',
          action: 'Améliorer la segmentation du réseau pour isoler les systèmes critiques',
          impact: 'Limite les mouvements latéraux lors d\'une compromission',
          effort: 'Élevé',
        },
      ],
    },
  },
  presentation: {
    title: 'Présentation au Conseil',
    subtitle: 'Un modèle de présentation personnalisable pour les briefings de cybersécurité au niveau du conseil.',
    navigation: {
      previous: 'Précédent',
      next: 'Suivant',
      fullscreen: 'Basculer en Plein Écran',
    },
    download: 'Télécharger la Présentation',
    keyboardShortcuts: 'Raccourcis clavier: Flèches pour naviguer, F pour plein écran, Échap pour quitter',
    slides: {
      slide1: {
        title: 'Briefing Exécutif de Cybersécurité',
        subtitle: 'Analyse stratégique et recommandations',
        content: 'Aperçu complet de la posture de cybersécurité de l\'organisation avec des insights au niveau exécutif.'
      },
      slide2: {
        title: 'Paysage Actuel des Risques',
        subtitle: 'Aperçu de l\'environnement des menaces',
        content: 'Analyse du paysage actuel des cybermenaces et de son impact potentiel sur l\'organisation.'
      },
      slide3: {
        title: 'Évaluation des Risques STEEL™',
        subtitle: 'Vue holistique du risque organisationnel',
        content: 'Évaluation détaillée des risques à travers les six dimensions STEEL avec des benchmarks comparatifs de l\'industrie.'
      },
      slide4: {
        title: 'Vulnérabilités Stratégiques',
        subtitle: 'Domaines clés nécessitant attention',
        content: 'Identification des vulnérabilités critiques qui posent un risque significatif pour les objectifs stratégiques.'
      },
      slide5: {
        title: 'Actions Recommandées',
        subtitle: 'Initiatives priorisées pour la réduction des risques',
        content: 'Recommandations priorisées pour adresser les risques identifiés avec les résultats attendus.'
      },
      slide6: {
        title: 'Considérations d\'Investissement',
        subtitle: 'Allocation des ressources pour un impact maximal',
        content: 'Analyse des options d\'investissement avec calculs de retour sur investissement en sécurité attendu.'
      },
      slide7: {
        title: 'Prochaines Étapes et Calendrier',
        subtitle: 'Feuille de route d\'implémentation',
        content: 'Feuille de route d\'implémentation proposée avec jalons clés et besoins en ressources.'
      }
    }
  },
  services: {
    title: 'Nos Services',
    subtitle: 'Services de conseil en cybersécurité adaptés pour le leadership exécutif',
    keyFeatures: 'Caractéristiques Clés',
    boardBriefings: {
      title: 'Briefings Conseil',
      description: 'Briefings de cybersécurité clairs et exploitables pour les membres du conseil.',
      features: [
        'Langage non technique pour une compréhension claire',
        'Focus stratégique sur l\'impact business',
        'Recommandations exploitables',
        'Comparaisons de référence',
        'Analyse des tendances et prévisions'
      ]
    },
    mAndA: {
      title: 'Due Diligence M&A',
      description: 'Évaluation complète des risques cyber pour les acquisitions et fusions.',
      features: [
        'Évaluation de sécurité pré-acquisition',
        'Évaluation des risques techniques et non techniques',
        'Analyse des risques d\'intégration',
        'Stratégie de sécurité post-fusion',
        'Recommandations de protection de valeur'
      ]
    },
    crisis: {
      title: 'Leadership de Crise',
      description: 'Orientation stratégique lors d\'incidents de cybersécurité.',
      features: [
        'Communication de crise exécutive',
        'Support de décision stratégique',
        'Gestion des parties prenantes',
        'Orientation réglementaire et légale',
        'Gestion de la réputation'
      ]
    },
    vCISO: {
      title: 'RSSI Virtuel',
      description: 'Leadership de sécurité au niveau exécutif sans l\'engagement à temps plein.',
      features: [
        'Planification stratégique de sécurité',
        'Communication avec le conseil et les dirigeants',
        'Développement de programme de sécurité',
        'Sélection de fournisseurs et de technologie',
        'Supervision de la conformité'
      ]
    },
    steelFramework: {
      title: 'La Méthodologie STEEL™',
      description1: 'Notre méthodologie propriétaire STEEL™ fournit une approche holistique pour la gestion du cyberrisque qui aborde tous les aspects de la posture de sécurité de votre organisation.',
      description2: 'Contrairement aux cadres traditionnels qui se concentrent principalement sur les contrôles techniques, STEEL™ incorpore des facteurs Sociaux, Technologiques, Économiques, Environnementaux, Légaux et Politiques pour une vision complète de votre paysage de risques.',
      exploreButton: 'Explorer STEEL™',
    },
    process: {
      title: 'Notre Processus d\'Engagement',
      step1: 'Évaluation Initiale',
      step2: 'Planification Stratégique',
      step3: 'Implémentation',
      step4: 'Surveillance',
      step5: 'Optimisation',
    },
    contact: {
      title: 'Contactez-Nous',
      email: 'advisory@ermits.com',
      phone: '+1 (888) 618-6160',
      headquarters: '8300 McCullough Lan, Suite 203, Gaithersburg, MD 20877',
      requestConsultation: 'Demander une Consultation',
    },
  },
  contact: {
    title: 'Contactez-Nous',
    subtitle: 'Entrez en contact avec nos experts pour discuter de vos besoins en cybersécurité',
    form: {
      title: 'Envoyez-Nous un Message',
      nameLabel: 'Nom',
      namePlaceholder: 'Entrez votre nom complet',
      emailLabel: 'Adresse Email',
      emailPlaceholder: 'Entrez votre adresse email',
      companyLabel: 'Entreprise',
      companyPlaceholder: 'Entrez le nom de votre entreprise',
      phoneLabel: 'Numéro de Téléphone (optionnel)',
      phonePlaceholder: 'Entrez votre numéro de téléphone',
      messageLabel: 'Message',
      messagePlaceholder: 'Parlez-nous de vos besoins ou questions',
      submitButton: 'Envoyer le Message',
      requiredFields: 'Champs obligatoires',
      successTitle: 'Message Envoyé avec Succès',
      successMessage: 'Merci de nous avoir contactés. Nous vous répondrons dès que possible.',
      errorTitle: 'Le Message n\'a Pas Pu Être Envoyé',
      errorMessage: 'Il y a eu un problème lors de l\'envoi de votre message. Veuillez réessayer plus tard ou nous contacter directement.',
      errors: {
        nameRequired: 'Le nom est obligatoire',
        emailRequired: 'L\'adresse email est obligatoire',
        emailInvalid: 'Veuillez entrer une adresse email valide',
        companyRequired: 'Le nom de l\'entreprise est obligatoire',
        messageRequired: 'Le message est obligatoire',
        messageTooShort: 'Le message doit comporter au moins 10 caractères',
        phoneInvalid: 'Veuillez entrer un numéro de téléphone valide',
      },
    },
    info: {
      title: 'Informations de Contact',
      emailTitle: 'Email',
      emailDescription: 'Pour les demandes générales et informations:',
      phoneTitle: 'Téléphone',
      phoneDescription: 'Pour une assistance immédiate:',
      addressTitle: 'Siège Social',
      addressDescription: 'Visitez notre bureau principal:',
      hoursTitle: 'Heures d\'Ouverture',
      weekdays: 'Lundi - Vendredi',
      weekends: 'Samedi - Dimanche',
      closed: 'Fermé',
    },
    map: {
      title: 'Nous Trouver',
      placeholder: 'Une carte interactive serait affichée ici en production',
      apiNote: 'Nécessite l\'intégration de l\'API Google Maps',
    },
    faq: {
      title: 'Questions Fréquemment Posées',
      response: {
        title: 'À quelle vitesse puis-je m\'attendre à une réponse?',
        content: 'Nous répondons généralement à toutes les demandes dans les 24 heures ouvrables. Pour les questions urgentes, veuillez appeler directement notre bureau.',
      },
      international: {
        title: 'Travaillez-vous avec des clients internationaux?',
        content: 'Oui, nous travaillons avec des organisations du monde entier. Notre équipe a de l\'expérience avec les cadres réglementaires mondiaux et les normes de sécurité.',
      },
      confidentiality: {
        title: 'Comment gérez-vous les informations confidentielles?',
        content: 'Toutes les informations des clients sont traitées avec le plus haut niveau de confidentialité. Nous utilisons des canaux de communication sécurisés et pouvons signer des accords de confidentialité avant des discussions détaillées.',
      },
      preparation: {
        title: 'Que devrais-je préparer pour une consultation initiale?',
        content: 'Il est utile d\'avoir un aperçu général de votre programme de sécurité actuel, des préoccupations clés et des objectifs spécifiques que vous aimeriez atteindre à travers notre partenariat.'
      }
    }
  },
  about: {
    title: 'À Propos d\'ERMITS Advisory',
    subtitle: 'Conseils stratégiques en cybersécurité pour le leadership exécutif',
    hero: {
      meetTeam: 'Rencontrer Notre Équipe',
      bookCall: 'Réserver un Appel',
    },
    story: {
      title: 'Notre Histoire',
      paragraph1: 'ERMITS Advisory a été fondée en 2018 par le Dr Eleanor Richards, ancienne RSSI avec plus de 20 ans d\'expérience dans le secteur des services financiers. Elle a reconnu un écart critique entre les praticiens techniques de la sécurité et le leadership exécutif qui entraînait souvent des stratégies mal alignées et de mauvaises décisions en matière de risque.',
      paragraph2: 'Notre mission est de combler cet écart en fournissant des conseils stratégiques en cybersécurité que les dirigeants peuvent comprendre et sur lesquels ils peuvent agir. Nous avons développé la méthodologie STEEL™ pour fournir un cadre holistique pour le cyberrisque qui considère tous les aspects d\'une organisation, pas seulement la technologie.',
      paragraph3: 'Aujourd\'hui, nous travaillons avec des entreprises du Fortune 500, des agences gouvernementales et des organisations à forte croissance pour transformer leur approche de la gestion du cyberrisque.',
      clients: 'Clients Mondiaux',
      countries: 'Pays',
      projects: 'Projets Réalisés',
    },
    values: {
      title: 'Nos Valeurs',
      integrity: {
        title: 'Intégrité',
        description: 'Nous maintenons les plus hauts standards d\'intégrité et d\'éthique dans tous nos engagements clients et pratiques commerciales.',
      },
      excellence: {
        title: 'Excellence',
        description: 'Nous nous engageons à livrer l\'excellence dans tous les aspects de notre travail, de la recherche aux livrables clients.',
      },
      collaboration: {
        title: 'Collaboration',
        description: 'Nous croyons en la puissance de la collaboration, tant au sein de notre équipe qu\'avec nos clients, pour atteindre les meilleurs résultats.',
      },
      innovation: {
        title: 'Innovation',
        description: 'Nous innovons continuellement nos méthodologies et approches pour rester en avance sur les risques et défis émergents.',
      },
    },
    team: {
      title: 'Notre Équipe de Direction',
      viewProfile: 'Voir le Profil',
      viewAll: 'Voir Tous les Membres de l\'Équipe',
    },
    timeline: {
      title: 'Notre Parcours',
      founding: {
        title: 'Fondation',
        description: 'ERMITS Advisory a été fondée par le Dr Eleanor Richards pour combler l\'écart entre la sécurité technique et le leadership exécutif.',
      },
      methodology: {
        title: 'Méthodologie STEEL™',
        description: 'Développement et introduction de notre méthodologie propriétaire STEEL™ pour la gestion holistique du cyberrisque.',
      },
      expansion: {
        title: 'Expansion Mondiale',
        description: 'Expansion vers les marchés européens et asiatiques avec l\'ouverture de bureaux à Londres et Singapour.',
      },
      global: {
        title: 'Reconnaissance Mondiale',
        description: 'Reconnaissance en tant que leader dans le conseil exécutif en cybersécurité par les principaux analystes de l\'industrie.',
      },
      today: {
        title: 'Aujourd\'hui',
        description: 'Continuer à innover et à étendre nos services pour répondre aux besoins évolutifs de notre clientèle mondiale.',
      },
    },
    global: {
      title: 'Présence Mondiale',
      description: 'Avec des bureaux dans des emplacements mondiaux clés, nous servons des clients du monde entier avec une expertise localisée et des perspectives mondiales.',
      offices: {
        us: 'Gaithersburg, MD, USA (Siège Social)',
        uk: 'Londres, Royaume-Uni',
        sg: 'Singapour',
        au: 'Sydney, Australie',
      },
      mapPlaceholder: 'Une carte mondiale interactive serait affichée ici',
      contact: 'Contactez Votre Bureau le Plus Proche',
    },
    cta: {
      title: 'Prêt à Travailler Ensemble?',
      description: 'Planifiez un appel avec notre équipe pour discuter de comment nous pouvons vous aider à transformer votre approche du risque de cybersécurité.',
      schedule: 'Planifier un Appel',
      learn: 'En Savoir Plus Sur Notre Approche',
    },
  },
  resources: {
    title: 'Bibliothèque de Ressources',
    subtitle: 'Insights, guides et outils pour améliorer votre stratégie de cybersécurité',
    featured: 'Ressource en Vedette',
    download: 'Télécharger',
    view: 'Voir la Ressource',
    searchPlaceholder: 'Rechercher des ressources...',
    filters: 'Filtres',
    clearFilters: 'Effacer les Filtres',
    categories: {
      title: 'Catégories',
      all: 'Toutes les Ressources',
      whitepapers: 'Livres Blancs',
      articles: 'Articles',
      casestudies: 'Études de Cas',
      webinars: 'Webinaires',
    },
    tags: {
      title: 'Sujets',
      compliance: 'Conformité',
      risk: 'Gestion des Risques',
      leadership: 'Leadership',
      technology: 'Technologie',
    },
    noResults: {
      title: 'Aucun Résultat Trouvé',
      message: 'Nous n\'avons pas pu trouver de ressources correspondant à vos critères. Essayez d\'ajuster vos filtres ou votre requête de recherche.',
    },
    newsletter: {
      title: 'Restez Informé',
      description: 'Abonnez-vous à notre newsletter pour les derniers insights sur la gestion des risques de cybersécurité pour les dirigeants.',
      emailPlaceholder: 'Votre adresse email',
      subscribe: 'S\'abonner',
      privacy: 'Nous respectons votre vie privée et ne partagerons jamais vos informations. Vous pouvez vous désabonner à tout moment.',
    },
  },
};

// Full translations object
export const translations = {
  en,
  es,
  fr,
};