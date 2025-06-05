import type { Language } from '../types';

type TranslationRecord = Record<string, any>;

interface Translations extends Record<Language, TranslationRecord> {
  en: TranslationRecord;
  es: TranslationRecord;
  fr: TranslationRecord;
}

export const translations: Translations = {
  en: {
    common: {
      learnMore: 'Learn More',
      viewDetails: 'View Details',
      viewDashboard: 'View Dashboard',
      copyright: '© 2025 ERMITS Advisory + STEEL™. All rights reserved.',
      demo: 'Demo data for demonstration purposes only',
      tagline: 'Global Intelligence. Resilient Strategy. Streamlined for Success.'
    },
    navigation: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      resources: 'Resources',
      steel: 'STEEL™',
      riskRadar: 'Risk Radar',
      dashboard: 'Dashboard',
      presentation: 'Board Presentation',
      contact: 'Contact Us'
    },
    landing: {
      hero: {
        title: 'Strategic Risk Intelligence for Executive Leadership',
        subtitle: 'Global Intelligence. Resilient Strategy. Streamlined for Success.',
        cta: 'Explore the STEEL™ Framework'
      },
      metrics: {
        title: 'Proven Results for Our Clients',
        riskReduction: 'Average Risk Reduction',
        timeToInsight: 'Faster Time to Insight',
        boardConfidence: 'Board Confidence Improvement',
        roiImprovement: 'Return on Security Investment'
      },
      steelOverview: {
        title: 'The STEEL™ Methodology',
        subtitle: 'A comprehensive framework for evaluating and mitigating strategic risks across six critical dimensions',
        political: {
          title: 'Political',
          description: 'Regulatory landscape, compliance requirements, and geopolitical factors that impact cybersecurity posture.'
        },
        economic: {
          title: 'Economic',
          description: 'Financial impact, market conditions, and competitive landscape that influence security investments.'
        },
        social: {
          title: 'Social',
          description: 'Reputation management, public perception, and social responsibility factors.'
        },
        technology: {
          title: 'Technology',
          description: 'Infrastructure, digital transformation, and technical vulnerabilities.'
        },
        environmental: {
          title: 'Environmental',
          description: 'Physical security, natural risks, and environmental factors.'
        },
        legal: {
          title: 'Legal',
          description: 'Contractual obligations, liability, and legal requirements.'
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Expertly designed solutions for modern risk challenges',
        boardBriefings: {
          title: 'Board Briefings',
          description: 'Clear, actionable cybersecurity briefings for board members and executive leadership that translate technical risks into business impact.'
        },
        mAndA: {
          title: 'M&A Due Diligence',
          description: 'Comprehensive cyber risk assessment for acquisitions and mergers to identify hidden liabilities and integration challenges.'
        },
        crisis: {
          title: 'Crisis Leadership',
          description: 'Strategic guidance during cybersecurity incidents to minimize impact, manage stakeholders, and protect reputation.'
        },
        vCISO: {
          title: 'Virtual CISO',
          description: 'Executive-level security leadership without the full-time commitment, providing strategic direction and oversight.'
        }
      },
      trust: {
        title: 'Trusted by Global Organizations',
        subtitle: 'Our expert team brings decades of experience and industry certifications',
        cert1: 'ISO 27001 Certified',
        cert2: 'CISSP Security Professionals',
        cert3: 'NIST Framework Experts',
        cert4: 'GDPR Compliance Certified'
      },
      cta: {
        title: 'Ready to Transform Your Risk Strategy?',
        subtitle: 'Schedule a consultation with our team to discuss your specific needs',
        button: 'Schedule a Consultation'
      }
    },
    steel: {
      title: 'The STEEL™ Framework',
      subtitle: 'Our comprehensive methodology for holistic risk assessment and management',
      overview: 'The STEEL™ framework provides a comprehensive, multi-dimensional approach to assessing and managing organizational risk. By examining six key dimensions, we deliver a complete view of your risk landscape.',
      dimensions: {
        political: {
          title: 'Political',
          description: 'Regulatory landscape, compliance requirements, and geopolitical factors that impact cybersecurity posture.'
        },
        economic: {
          title: 'Economic',
          description: 'Financial impact, market conditions, and competitive landscape that influence security investments.'
        },
        social: {
          title: 'Social',
          description: 'Reputation management, public perception, and social responsibility factors.'
        },
        technology: {
          title: 'Technology',
          description: 'Infrastructure, digital transformation, and technical vulnerabilities.'
        },
        environmental: {
          title: 'Environmental',
          description: 'Physical security, natural risks, and environmental factors.'
        },
        legal: {
          title: 'Legal',
          description: 'Contractual obligations, liability, and legal requirements.'
        }
      },
      integration: {
        title: 'Integration Process',
        description: 'Our proven six-step methodology for implementing the STEEL™ framework in your organization',
        step1: 'Assessment',
        step2: 'Analysis',
        step3: 'Strategy',
        step4: 'Implementation',
        step5: 'Monitoring',
        step6: 'Optimization',
        downloadGuide: 'Download Implementation Guide'
      },
      cta: {
        title: 'Ready to implement STEEL™?',
        description: 'Our team can help you apply this framework to your specific business context and challenges.',
        scheduleConsultation: 'Schedule a Consultation',
        requestCaseStudy: 'Request Case Study'
      }
    },
    riskRadar: {
      title: 'Risk Radar',
      subtitle: 'Interactive visualization and simulation of your organization\'s risk landscape',
      dimensions: 'Risk Dimensions',
      visualization: 'STEEL™ Risk Visualization',
      scenarios: {
        title: 'Scenarios',
        current: 'Current State',
        breach: 'Data Breach',
        investment: 'Post-Investment',
        industry: 'Industry Average'
      },
      recommendations: {
        title: 'Recommended Actions',
        generateReport: 'Generate Full Report',
        impactLabel: 'Impact',
        immediateAction: 'Immediate action required',
        quickWin: 'Quick win opportunity',
        items: [
          {
            priority: 'Critical',
            action: 'Implement enhanced data protection for sensitive customer information',
            impact: 'Reduces data breach risk by 78%',
            effort: 'Medium'
          },
          {
            priority: 'High',
            action: 'Establish third-party risk management program',
            impact: 'Improves visibility into supply chain risks',
            effort: 'High'
          },
          {
            priority: 'Medium',
            action: 'Update security awareness training with industry-specific scenarios',
            impact: 'Reduces successful social engineering attempts by 62%',
            effort: 'Low'
          },
          {
            priority: 'High',
            action: 'Implement compliance monitoring automation',
            impact: 'Reduces manual effort and improves accuracy',
            effort: 'Medium'
          },
          {
            priority: 'Critical',
            action: 'Enhance network segmentation to isolate critical systems',
            impact: 'Limits lateral movement during compromise',
            effort: 'High'
          }
        ]
      }
    },
    dashboard: {
      title: 'Executive Dashboard',
      subtitle: 'Strategic overview of your organization\'s cybersecurity posture',
      riskScore: {
        title: 'Overall Risk Score',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
        critical: 'Critical'
      },
      metrics: {
        title: 'Key Metrics',
        vulnerabilities: 'Active Vulnerabilities',
        threats: 'Emerging Threats',
        incidents: 'Recent Incidents',
        compliance: 'Compliance Status'
      },
      radar: {
        title: 'STEEL™ Risk Radar',
        description: 'Multi-dimensional view of risk across all six STEEL dimensions'
      },
      threats: {
        title: 'Threat Intelligence',
        type: 'Threat Type',
        source: 'Source',
        impact: 'Impact',
        timeline: 'Timeline'
      },
      actions: {
        title: 'Strategic Actions',
        details: 'Details',
        items: [
          {
            priority: 'Critical',
            action: 'Implement multi-factor authentication across all systems',
            impact: 'Reduces account compromise risk by 99%',
            status: 'In Progress'
          },
          {
            priority: 'High',
            action: 'Update incident response plan for ransomware scenarios',
            impact: 'Reduces potential downtime by 72%',
            status: 'Completed'
          },
          {
            priority: 'Medium',
            action: 'Conduct executive tabletop exercise',
            impact: 'Improves executive decision-making during incidents',
            status: 'Not Started'
          },
          {
            priority: 'High',
            action: 'Review and update third-party security requirements',
            impact: 'Reduces supply chain risk exposure',
            status: 'In Progress'
          },
          {
            priority: 'Medium',
            action: 'Implement enhanced email security controls',
            impact: 'Reduces successful phishing attempts by 85%',
            status: 'Not Started'
          }
        ]
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Tailored cybersecurity advisory services for executive leadership',
      keyFeatures: 'Key Features',
      boardBriefings: {
        title: 'Board Briefings',
        description: 'Clear, actionable cybersecurity briefings for board members and executive leadership that translate technical risks into business impact.',
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
        description: 'Comprehensive cyber risk assessment for acquisitions and mergers to identify hidden liabilities and integration challenges.',
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
        description: 'Strategic guidance during cybersecurity incidents to minimize impact, manage stakeholders, and protect reputation.',
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
        description: 'Executive-level security leadership without the full-time commitment, providing strategic direction and oversight.',
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
        description1: 'Our proprietary methodology for comprehensive risk assessment addresses the full spectrum of organizational risk factors.',
        description2: 'By analyzing Political, Economic, Social, Technology, Environmental, and Legal dimensions, we provide a holistic view of your risk landscape and actionable recommendations for improvement.',
        exploreButton: 'Explore the Framework'
      },
      process: {
        title: 'Our Engagement Process',
        step1: 'Discovery',
        step2: 'Assessment',
        step3: 'Strategy',
        step4: 'Implementation',
        step5: 'Optimization'
      },
      contact: {
        title: 'Get In Touch',
        email: 'advisory@ermits.com',
        phone: '+1 (888) 618-6160',
        headquarters: '8300 McCullough Lan, Suite 203, Gaithersburg, MD 20877',
        requestConsultation: 'Request a Consultation'
      }
    },
    about: {
      title: 'About ERMITS Advisory',
      subtitle: 'Global leaders in strategic risk intelligence and advisory services',
      hero: {
        meetTeam: 'Meet Our Team',
        bookCall: 'Book a Call'
      },
      story: {
        title: 'Our Story',
        paragraph1: 'ERMITS Advisory was founded by a team of cybersecurity veterans and business leaders who recognized a critical gap between technical security operations and executive decision-making.',
        paragraph2: 'Our mission is to bridge this gap by providing clear, actionable intelligence that enables leadership teams to make informed strategic decisions about cyber risk.',
        paragraph3: 'Today, we serve global clients across multiple industries, bringing our unique STEEL™ methodology to organizations seeking to transform their approach to cyber risk management.',
        clients: 'Global Clients',
        countries: 'Countries',
        projects: 'Completed Projects'
      },
      values: {
        title: 'Our Values',
        integrity: {
          title: 'Integrity',
          description: 'We maintain the highest ethical standards in all our engagements, ensuring transparency and trustworthiness.'
        },
        excellence: {
          title: 'Excellence',
          description: 'We strive for excellence in every aspect of our work, delivering high-quality results that exceed expectations.'
        },
        collaboration: {
          title: 'Collaboration',
          description: 'We work closely with our clients, becoming trusted partners in their success journey.'
        },
        innovation: {
          title: 'Innovation',
          description: 'We continuously develop new approaches and methodologies to address evolving risk challenges.'
        }
      },
      team: {
        title: 'Our Expertise',
        viewExpertise: 'View Expertise',
        viewAll: 'View All Team Members',
        cybersecurity: {
          title: 'Cybersecurity Leadership',
          subtitle: 'Former CISOs & Security Executives',
          description: 'Our cybersecurity leadership team brings decades of experience from CISO and executive security roles at Fortune 500 companies and government agencies.'
        },
        strategic: {
          title: 'Strategic Advisory',
          subtitle: 'Business & Risk Experts',
          description: 'Our strategic advisors bridge the gap between technical security concepts and business imperatives, with backgrounds in risk management and executive leadership.'
        },
        research: {
          title: 'Research & Analytics',
          subtitle: 'Data Scientists & Analysts',
          description: 'Our research team continuously analyzes global threat landscapes and industry trends to provide data-driven insights and recommendations.'
        },
        mAndA: {
          title: 'M&A Security',
          subtitle: 'Deal Security Specialists',
          description: 'Our M&A security specialists have supported hundreds of transactions, identifying security risks and integration challenges for acquirers and targets.'
        }
      },
      global: {
        title: 'Global Presence',
        description: 'With offices in key locations worldwide, we provide consistent, high-quality advisory services to our global client base.',
        offices: {
          us: 'United States (HQ): Gaithersburg, MD',
          uk: 'United Kingdom: London',
          sg: 'Singapore',
          au: 'Australia: Sydney'
        },
        contact: 'Contact Nearest Office',
        mapPlaceholder: 'Interactive global office map would be displayed here'
      },
      cta: {
        title: 'Ready to Transform Your Risk Strategy?',
        description: 'Schedule a consultation with our expert team to discuss your specific challenges and how ERMITS Advisory can help.',
        schedule: 'Schedule a Consultation',
        learn: 'Learn More About Our Approach'
      }
    },
    resources: {
      title: 'Resource Library',
      subtitle: 'Insights, research, and tools to enhance your understanding of strategic risk',
      featured: 'Featured',
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
        webinars: 'Webinars'
      },
      tags: {
        title: 'Topics',
        compliance: 'Compliance',
        risk: 'Risk Management',
        leadership: 'Leadership',
        technology: 'Technology'
      },
      noResults: {
        title: 'No Results Found',
        message: 'Please try adjusting your search criteria or clear filters to see all resources.'
      },
      newsletter: {
        title: 'Subscribe to Our Newsletter',
        description: 'Stay informed with the latest insights, research, and resources delivered straight to your inbox.',
        emailPlaceholder: 'Your email address',
        subscribe: 'Subscribe',
        privacy: 'We respect your privacy. You can unsubscribe at any time.'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team for any inquiries or to schedule a consultation',
      form: {
        title: 'Send Us a Message',
        nameLabel: 'Name',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email',
        emailPlaceholder: 'Your email address',
        companyLabel: 'Company',
        companyPlaceholder: 'Your company name',
        phoneLabel: 'Phone (optional)',
        phonePlaceholder: 'Your phone number',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell us how we can help you',
        submitButton: 'Send Message',
        requiredFields: 'Required fields',
        successTitle: 'Message Sent!',
        successMessage: 'Thank you for contacting us. We\'ll get back to you shortly.',
        errorTitle: 'Error Sending Message',
        errorMessage: 'There was a problem sending your message. Please try again later.',
        errors: {
          nameRequired: 'Please enter your name',
          emailRequired: 'Please enter your email address',
          emailInvalid: 'Please enter a valid email address',
          companyRequired: 'Please enter your company name',
          messageRequired: 'Please enter a message',
          messageTooShort: 'Message should be at least 10 characters',
          phoneInvalid: 'Please enter a valid phone number'
        }
      },
      info: {
        title: 'Contact Information',
        emailTitle: 'Email Us',
        emailDescription: 'For general inquiries and information:',
        phoneTitle: 'Call Us',
        phoneDescription: 'Monday to Friday, 9am-6pm EST:',
        addressTitle: 'Visit Us',
        addressDescription: 'Our headquarters:',
        hoursTitle: 'Business Hours',
        weekdays: 'Monday-Friday',
        weekends: 'Saturday-Sunday',
        closed: 'Closed'
      },
      map: {
        title: 'Our Location',
        placeholder: 'Interactive map would be displayed here',
        apiNote: 'Google Maps integration in production version'
      },
      faq: {
        title: 'Frequently Asked Questions',
        response: {
          title: 'What is your typical response time?',
          content: 'We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.'
        },
        international: {
          title: 'Do you work with international clients?',
          content: 'Yes, we serve clients globally with offices in the United States, United Kingdom, Singapore, and Australia.'
        },
        confidentiality: {
          title: 'How do you handle confidential information?',
          content: 'All client information is handled with the utmost confidentiality. We maintain strict data protection protocols and can provide NDAs upon request.'
        },
        preparation: {
          title: 'How should I prepare for an initial consultation?',
          content: 'It's helpful to have a general understanding of your current security posture and specific challenges you'd like to address. Our team will guide you through the rest of the process.'
        }
      }
    },
    presentation: {
      title: 'Board Presentation',
      subtitle: 'Interactive executive briefing on cybersecurity strategy and risk',
      download: 'Download Presentation',
      keyboardShortcuts: 'Keyboard shortcuts: Arrow keys to navigate, "F" for fullscreen, "ESC" to exit',
      navigation: {
        previous: 'Previous',
        next: 'Next',
        fullscreen: 'Fullscreen'
      },
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
    notFound: {
      title: 'Page Not Found',
      message: 'The page you are looking for doesn\'t exist or has been moved.',
      returnHome: 'Return Home',
      goBack: 'Go Back',
      lookingFor: 'What are you looking for?',
      searchPlaceholder: 'Search...',
      popularPages: 'Popular Pages',
      needAssistance: 'Need assistance?',
      contactUs: 'Contact our team'
    },
    footer: {
      services: {
        title: 'Services',
        boardBriefings: 'Board Briefings',
        mAndA: 'M&A Due Diligence',
        crisis: 'Crisis Leadership',
        vCISO: 'Virtual CISO'
      },
      resources: {
        title: 'Resources',
        steel: 'STEEL™ Framework',
        riskRadar: 'Risk Radar',
        dashboard: 'Dashboard',
        library: 'Resource Library',
        about: 'About Us'
      },
      contact: {
        title: 'Contact',
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        headquartersLabel: 'Headquarters:'
      },
      policy: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        cookie: 'Cookie Policy'
      }
    }
  },
  
  es: {
    common: {
      learnMore: 'Saber Más',
      viewDetails: 'Ver Detalles',
      viewDashboard: 'Ver Panel',
      copyright: '© 2025 ERMITS Advisory + STEEL™. Todos los derechos reservados.',
      demo: 'Datos de demostración únicamente',
      tagline: 'Inteligencia Global. Estrategia Resiliente. Optimizado para el Éxito.'
    },
    navigation: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      resources: 'Recursos',
      steel: 'STEEL™',
      riskRadar: 'Radar de Riesgo',
      dashboard: 'Panel',
      presentation: 'Presentación Directiva',
      contact: 'Contacto'
    },
    landing: {
      hero: {
        title: 'Inteligencia de Riesgo Estratégico para Liderazgo Ejecutivo',
        subtitle: 'Inteligencia Global. Estrategia Resiliente. Optimizado para el Éxito.',
        cta: 'Explorar el Marco STEEL™'
      },
      metrics: {
        title: 'Resultados Probados para Nuestros Clientes',
        riskReduction: 'Reducción Promedio de Riesgo',
        timeToInsight: 'Mayor Rapidez de Análisis',
        boardConfidence: 'Mejora de Confianza Directiva',
        roiImprovement: 'Retorno de Inversión en Seguridad'
      },
      steelOverview: {
        title: 'La Metodología STEEL™',
        subtitle: 'Un marco integral para evaluar y mitigar riesgos estratégicos a través de seis dimensiones críticas',
        political: {
          title: 'Político',
          description: 'Panorama regulatorio, requisitos de cumplimiento y factores geopolíticos que impactan la postura de ciberseguridad.'
        },
        economic: {
          title: 'Económico',
          description: 'Impacto financiero, condiciones del mercado y panorama competitivo que influyen en las inversiones de seguridad.'
        },
        social: {
          title: 'Social',
          description: 'Gestión de reputación, percepción pública y factores de responsabilidad social.'
        },
        technology: {
          title: 'Tecnológico',
          description: 'Infraestructura, transformación digital y vulnerabilidades técnicas.'
        },
        environmental: {
          title: 'Ambiental',
          description: 'Seguridad física, riesgos naturales y factores ambientales.'
        },
        legal: {
          title: 'Legal',
          description: 'Obligaciones contractuales, responsabilidad y requisitos legales.'
        }
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones diseñadas expertamente para desafíos de riesgo modernos',
        boardBriefings: {
          title: 'Informes para Directivos',
          description: 'Informes de ciberseguridad claros y accionables para miembros del consejo y liderazgo ejecutivo que traducen riesgos técnicos en impacto empresarial.'
        },
        mAndA: {
          title: 'Due Diligence para M&A',
          description: 'Evaluación integral de riesgo cibernético para adquisiciones y fusiones para identificar pasivos ocultos y desafíos de integración.'
        },
        crisis: {
          title: 'Liderazgo en Crisis',
          description: 'Orientación estratégica durante incidentes de ciberseguridad para minimizar el impacto, gestionar partes interesadas y proteger la reputación.'
        },
        vCISO: {
          title: 'CISO Virtual',
          description: 'Liderazgo de seguridad a nivel ejecutivo sin el compromiso de tiempo completo, proporcionando dirección y supervisión estratégica.'
        }
      },
      trust: {
        title: 'Confiado por Organizaciones Globales',
        subtitle: 'Nuestro equipo de expertos aporta décadas de experiencia y certificaciones de la industria',
        cert1: 'Certificado ISO 27001',
        cert2: 'Profesionales de Seguridad CISSP',
        cert3: 'Expertos en Marco NIST',
        cert4: 'Certificado de Cumplimiento GDPR'
      },
      cta: {
        title: '¿Listo para Transformar tu Estrategia de Riesgo?',
        subtitle: 'Programa una consulta con nuestro equipo para discutir tus necesidades específicas',
        button: 'Programar una Consulta'
      }
    },
    steel: {
      title: 'El Marco STEEL™',
      subtitle: 'Nuestra metodología integral para la evaluación y gestión holística de riesgos',
      overview: 'El marco STEEL™ proporciona un enfoque integral y multidimensional para evaluar y gestionar el riesgo organizacional. Al examinar seis dimensiones clave, ofrecemos una visión completa de su panorama de riesgos.',
      dimensions: {
        political: {
          title: 'Político',
          description: 'Panorama regulatorio, requisitos de cumplimiento y factores geopolíticos que impactan la postura de ciberseguridad.'
        },
        economic: {
          title: 'Económico',
          description: 'Impacto financiero, condiciones del mercado y panorama competitivo que influyen en las inversiones de seguridad.'
        },
        social: {
          title: 'Social',
          description: 'Gestión de reputación, percepción pública y factores de responsabilidad social.'
        },
        technology: {
          title: 'Tecnológico',
          description: 'Infraestructura, transformación digital y vulnerabilidades técnicas.'
        },
        environmental: {
          title: 'Ambiental',
          description: 'Seguridad física, riesgos naturales y factores ambientales.'
        },
        legal: {
          title: 'Legal',
          description: 'Obligaciones contractuales, responsabilidad y requisitos legales.'
        }
      },
      integration: {
        title: 'Proceso de Integración',
        description: 'Nuestra metodología probada de seis pasos para implementar el marco STEEL™ en tu organización',
        step1: 'Evaluación',
        step2: 'Análisis',
        step3: 'Estrategia',
        step4: 'Implementación',
        step5: 'Monitoreo',
        step6: 'Optimización',
        downloadGuide: 'Descargar Guía de Implementación'
      },
      cta: {
        title: '¿Listo para implementar STEEL™?',
        description: 'Nuestro equipo puede ayudarte a aplicar este marco a tu contexto y desafíos empresariales específicos.',
        scheduleConsultation: 'Programar una Consulta',
        requestCaseStudy: 'Solicitar Caso de Estudio'
      }
    },
    riskRadar: {
      title: 'Radar de Riesgo',
      subtitle: 'Visualización interactiva y simulación del panorama de riesgos de tu organización',
      dimensions: 'Dimensiones de Riesgo',
      visualization: 'Visualización de Riesgo STEEL™',
      scenarios: {
        title: 'Escenarios',
        current: 'Estado Actual',
        breach: 'Violación de Datos',
        investment: 'Post-Inversión',
        industry: 'Promedio de la Industria'
      },
      recommendations: {
        title: 'Acciones Recomendadas',
        generateReport: 'Generar Informe Completo',
        impactLabel: 'Impacto',
        immediateAction: 'Acción inmediata requerida',
        quickWin: 'Oportunidad de victoria rápida',
        items: [
          {
            priority: 'Crítico',
            action: 'Implementar protección de datos mejorada para información sensible de clientes',
            impact: 'Reduce el riesgo de violación de datos en un 78%',
            effort: 'Medio'
          },
          {
            priority: 'Alto',
            action: 'Establecer programa de gestión de riesgos de terceros',
            impact: 'Mejora la visibilidad de los riesgos en la cadena de suministro',
            effort: 'Alto'
          },
          {
            priority: 'Medio',
            action: 'Actualizar capacitación de concienciación de seguridad con escenarios específicos de la industria',
            impact: 'Reduce los intentos exitosos de ingeniería social en un 62%',
            effort: 'Bajo'
          },
          {
            priority: 'Alto',
            action: 'Implementar automatización de monitoreo de cumplimiento',
            impact: 'Reduce el esfuerzo manual y mejora la precisión',
            effort: 'Medio'
          },
          {
            priority: 'Crítico',
            action: 'Mejorar la segmentación de red para aislar sistemas críticos',
            impact: 'Limita el movimiento lateral durante compromisos',
            effort: 'Alto'
          }
        ]
      }
    },
    dashboard: {
      title: 'Panel Ejecutivo',
      subtitle: 'Visión estratégica de la postura de ciberseguridad de tu organización',
      riskScore: {
        title: 'Puntuación General de Riesgo',
        low: 'Bajo',
        medium: 'Medio',
        high: 'Alto',
        critical: 'Crítico'
      },
      metrics: {
        title: 'Métricas Clave',
        vulnerabilities: 'Vulnerabilidades Activas',
        threats: 'Amenazas Emergentes',
        incidents: 'Incidentes Recientes',
        compliance: 'Estado de Cumplimiento'
      },
      radar: {
        title: 'Radar de Riesgo STEEL™',
        description: 'Vista multidimensional del riesgo a través de las seis dimensiones STEEL'
      },
      threats: {
        title: 'Inteligencia de Amenazas',
        type: 'Tipo de Amenaza',
        source: 'Fuente',
        impact: 'Impacto',
        timeline: 'Cronología'
      },
      actions: {
        title: 'Acciones Estratégicas',
        details: 'Detalles',
        items: [
          {
            priority: 'Crítico',
            action: 'Implementar autenticación multifactor en todos los sistemas',
            impact: 'Reduce el riesgo de compromiso de cuenta en un 99%',
            status: 'En Progreso'
          },
          {
            priority: 'Alto',
            action: 'Actualizar el plan de respuesta a incidentes para escenarios de ransomware',
            impact: 'Reduce el tiempo potencial de inactividad en un 72%',
            status: 'Completado'
          },
          {
            priority: 'Medio',
            action: 'Realizar ejercicio de simulacro ejecutivo',
            impact: 'Mejora la toma de decisiones ejecutivas durante incidentes',
            status: 'No Iniciado'
          },
          {
            priority: 'Alto',
            action: 'Revisar y actualizar requisitos de seguridad de terceros',
            impact: 'Reduce la exposición al riesgo de la cadena de suministro',
            status: 'En Progreso'
          },
          {
            priority: 'Medio',
            action: 'Implementar controles mejorados de seguridad de correo electrónico',
            impact: 'Reduce los intentos exitosos de phishing en un 85%',
            status: 'No Iniciado'
          }
        ]
      }
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Servicios de asesoría en ciberseguridad adaptados para liderazgo ejecutivo',
      keyFeatures: 'Características Clave',
      boardBriefings: {
        title: 'Informes para Directivos',
        description: 'Informes de ciberseguridad claros y accionables para miembros del consejo y liderazgo ejecutivo que traducen riesgos técnicos en impacto empresarial.',
        features: [
          'Lenguaje no técnico para comprensión clara',
          'Enfoque estratégico en impacto empresarial',
          'Recomendaciones accionables',
          'Comparaciones de referencia',
          'Análisis de tendencias y pronósticos'
        ]
      },
      mAndA: {
        title: 'Due Diligence para M&A',
        description: 'Evaluación integral de riesgo cibernético para adquisiciones y fusiones para identificar pasivos ocultos y desafíos de integración.',
        features: [
          'Evaluación de seguridad previa a la adquisición',
          'Evaluación de riesgo técnico y no técnico',
          'Análisis de riesgo de integración',
          'Estrategia de seguridad posterior a la fusión',
          'Recomendaciones de protección de valor'
        ]
      },
      crisis: {
        title: 'Liderazgo en Crisis',
        description: 'Orientación estratégica durante incidentes de ciberseguridad para minimizar el impacto, gestionar partes interesadas y proteger la reputación.',
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
        description: 'Liderazgo de seguridad a nivel ejecutivo sin el compromiso de tiempo completo, proporcionando dirección y supervisión estratégica.',
        features: [
          'Planificación estratégica de seguridad',
          'Comunicación con la junta y ejecutivos',
          'Desarrollo de programa de seguridad',
          'Selección de proveedores y tecnología',
          'Supervisión de cumplimiento'
        ]
      },
      steelFramework: {
        title: 'El Marco STEEL™',
        description1: 'Nuestra metodología propietaria para evaluación integral de riesgos aborda el espectro completo de factores de riesgo organizacional.',
        description2: 'Al analizar las dimensiones Política, Económica, Social, Tecnológica, Ambiental y Legal, proporcionamos una visión holística de tu panorama de riesgos y recomendaciones accionables para mejorar.',
        exploreButton: 'Explorar el Marco'
      },
      process: {
        title: 'Nuestro Proceso de Compromiso',
        step1: 'Descubrimiento',
        step2: 'Evaluación',
        step3: 'Estrategia',
        step4: 'Implementación',
        step5: 'Optimización'
      },
      contact: {
        title: 'Ponte en Contacto',
        email: 'advisory@ermits.com',
        phone: '+1 (888) 618-6160',
        headquarters: '8300 McCullough Lan, Suite 203, Gaithersburg, MD 20877',
        requestConsultation: 'Solicitar una Consulta'
      }
    },
    about: {
      title: 'Acerca de ERMITS Advisory',
      subtitle: 'Líderes globales en inteligencia y asesoría de riesgo estratégico',
      hero: {
        meetTeam: 'Conoce a Nuestro Equipo',
        bookCall: 'Programar una Llamada'
      },
      story: {
        title: 'Nuestra Historia',
        paragraph1: 'ERMITS Advisory fue fundada por un equipo de veteranos en ciberseguridad y líderes empresariales que reconocieron una brecha crítica entre las operaciones técnicas de seguridad y la toma de decisiones ejecutivas.',
        paragraph2: 'Nuestra misión es cerrar esta brecha proporcionando inteligencia clara y accionable que permita a los equipos de liderazgo tomar decisiones estratégicas informadas sobre el riesgo cibernético.',
        paragraph3: 'Hoy, servimos a clientes globales en múltiples industrias, llevando nuestra metodología única STEEL™ a organizaciones que buscan transformar su enfoque a la gestión del riesgo cibernético.',
        clients: 'Clientes Globales',
        countries: 'Países',
        projects: 'Proyectos Completados'
      },
      values: {
        title: 'Nuestros Valores',
        integrity: {
          title: 'Integridad',
          description: 'Mantenemos los más altos estándares éticos en todos nuestros compromisos, asegurando transparencia y confiabilidad.'
        },
        excellence: {
          title: 'Excelencia',
          description: 'Nos esforzamos por la excelencia en cada aspecto de nuestro trabajo, entregando resultados de alta calidad que superan las expectativas.'
        },
        collaboration: {
          title: 'Colaboración',
          description: 'Trabajamos estrechamente con nuestros clientes, convirtiéndonos en socios de confianza en su camino hacia el éxito.'
        },
        innovation: {
          title: 'Innovación',
          description: 'Desarrollamos continuamente nuevos enfoques y metodologías para abordar los desafíos de riesgo en evolución.'
        }
      },
      team: {
        title: 'Nuestra Experiencia',
        viewExpertise: 'Ver Experiencia',
        viewAll: 'Ver Todos los Miembros del Equipo',
        cybersecurity: {
          title: 'Liderazgo en Ciberseguridad',
          subtitle: 'Ex CISOs y Ejecutivos de Seguridad',
          description: 'Nuestro equipo de liderazgo en ciberseguridad aporta décadas de experiencia desde roles de CISO y seguridad ejecutiva en empresas Fortune 500 y agencias gubernamentales.'
        },
        strategic: {
          title: 'Asesoría Estratégica',
          subtitle: 'Expertos en Negocios y Riesgos',
          description: 'Nuestros asesores estratégicos conectan los conceptos técnicos de seguridad con los imperativos comerciales, con experiencia en gestión de riesgos y liderazgo ejecutivo.'
        },
        research: {
          title: 'Investigación y Análisis',
          subtitle: 'Científicos de Datos y Analistas',
          description: 'Nuestro equipo de investigación analiza continuamente los panoramas de amenazas globales y las tendencias de la industria para proporcionar información y recomendaciones basadas en datos.'
        },
        mAndA: {
          title: 'Seguridad en M&A',
          subtitle: 'Especialistas en Seguridad de Transacciones',
          description: 'Nuestros especialistas en seguridad de M&A han apoyado cientos de transacciones, identificando riesgos de seguridad y desafíos de integración para adquirentes y objetivos.'
        }
      },
      global: {
        title: 'Presencia Global',
        description: 'Con oficinas en ubicaciones clave en todo el mundo, proporcionamos servicios de asesoría consistentes y de alta calidad a nuestra base de clientes global.',
        offices: {
          us: 'Estados Unidos (HQ): Gaithersburg, MD',
          uk: 'Reino Unido: Londres',
          sg: 'Singapur',
          au: 'Australia: Sydney'
        },
        contact: 'Contactar Oficina más Cercana',
        mapPlaceholder: 'Aquí se mostraría un mapa interactivo de oficinas globales'
      },
      cta: {
        title: '¿Listo para Transformar tu Estrategia de Riesgo?',
        description: 'Programa una consulta con nuestro equipo de expertos para discutir tus desafíos específicos y cómo ERMITS Advisory puede ayudar.',
        schedule: 'Programar una Consulta',
        learn: 'Más Sobre Nuestro Enfoque'
      }
    },
    resources: {
      title: 'Biblioteca de Recursos',
      subtitle: 'Información, investigación y herramientas para mejorar tu comprensión del riesgo estratégico',
      featured: 'Destacado',
      download: 'Descargar',
      view: 'Ver Recurso',
      searchPlaceholder: 'Buscar recursos...',
      filters: 'Filtros',
      clearFilters: 'Borrar Filtros',
      categories: {
        title: 'Categorías',
        all: 'Todos los Recursos',
        whitepapers: 'Documentos Técnicos',
        articles: 'Artículos',
        casestudies: 'Casos de Estudio',
        webinars: 'Webinars'
      },
      tags: {
        title: 'Temas',
        compliance: 'Cumplimiento',
        risk: 'Gestión de Riesgos',
        leadership: 'Liderazgo',
        technology: 'Tecnología'
      },
      noResults: {
        title: 'No se Encontraron Resultados',
        message: 'Por favor, ajusta tus criterios de búsqueda o borra los filtros para ver todos los recursos.'
      },
      newsletter: {
        title: 'Suscríbete a Nuestro Boletín',
        description: 'Mantente informado con los últimos conocimientos, investigaciones y recursos entregados directamente en tu bandeja de entrada.',
        emailPlaceholder: 'Tu dirección de correo electrónico',
        subscribe: 'Suscribirse',
        privacy: 'Respetamos tu privacidad. Puedes darte de baja en cualquier momento.'
      }
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Ponte en contacto con nuestro equipo para cualquier consulta o para programar una asesoría',
      form: {
        title: 'Envíanos un Mensaje',
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        emailLabel: 'Correo Electrónico',
        emailPlaceholder: 'Tu dirección de correo electrónico',
        companyLabel: 'Empresa',
        companyPlaceholder: 'El nombre de tu empresa',
        phoneLabel: 'Teléfono (opcional)',
        phonePlaceholder: 'Tu número de teléfono',
        messageLabel: 'Mensaje',
        messagePlaceholder: 'Cuéntanos cómo podemos ayudarte',
        submitButton: 'Enviar Mensaje',
        requiredFields: 'Campos requeridos',
        successTitle: '¡Mensaje Enviado!',
        successMessage: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        errorTitle: 'Error al Enviar Mensaje',
        errorMessage: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
        errors: {
          nameRequired: 'Por favor, ingresa tu nombre',
          emailRequired: 'Por favor, ingresa tu dirección de correo electrónico',
          emailInvalid: 'Por favor, ingresa una dirección de correo electrónico válida',
          companyRequired: 'Por favor, ingresa el nombre de tu empresa',
          messageRequired: 'Por favor, ingresa un mensaje',
          messageTooShort: 'El mensaje debe tener al menos 10 caracteres',
          phoneInvalid: 'Por favor, ingresa un número de teléfono válido'
        }
      },
      info: {
        title: 'Información de Contacto',
        emailTitle: 'Envíanos un Correo',
        emailDescription: 'Para consultas generales e información:',
        phoneTitle: 'Llámanos',
        phoneDescription: 'Lunes a viernes, 9am-6pm EST:',
        addressTitle: 'Visítanos',
        addressDescription: 'Nuestra sede:',
        hoursTitle: 'Horario Comercial',
        weekdays: 'Lunes-Viernes',
        weekends: 'Sábado-Domingo',
        closed: 'Cerrado'
      },
      map: {
        title: 'Nuestra Ubicación',
        placeholder: 'Aquí se mostraría un mapa interactivo',
        apiNote: 'Integración con Google Maps en versión de producción'
      },
      faq: {
        title: 'Preguntas Frecuentes',
        response: {
          title: '¿Cuál es su tiempo típico de respuesta?',
          content: 'Normalmente respondemos a todas las consultas dentro de las 24 horas laborables. Para asuntos urgentes, por favor llame directamente a nuestra oficina.'
        },
        international: {
          title: '¿Trabajan con clientes internacionales?',
          content: 'Sí, atendemos a clientes globalmente con oficinas en Estados Unidos, Reino Unido, Singapur y Australia.'
        },
        confidentiality: {
          title: '¿Cómo manejan la información confidencial?',
          content: 'Toda la información del cliente se maneja con la máxima confidencialidad. Mantenemos estrictos protocolos de protección de datos y podemos proporcionar NDAs bajo petición.'
        },
        preparation: {
          title: '¿Cómo debo prepararme para una consulta inicial?',
          content: 'Es útil tener una comprensión general de su postura de seguridad actual y los desafíos específicos que le gustaría abordar. Nuestro equipo le guiará a través del resto del proceso.'
        }
      }
    },
    presentation: {
      title: 'Presentación Directiva',
      subtitle: 'Informe ejecutivo interactivo sobre estrategia de ciberseguridad y riesgo',
      download: 'Descargar Presentación',
      keyboardShortcuts: 'Atajos de teclado: Flechas para navegar, "F" para pantalla completa, "ESC" para salir',
      navigation: {
        previous: 'Anterior',
        next: 'Siguiente',
        fullscreen: 'Pantalla Completa'
      },
      slides: {
        slide1: {
          title: 'Informe Ejecutivo de Ciberseguridad',
          subtitle: 'Análisis estratégico y recomendaciones',
          content: 'Visión general completa de la postura de ciberseguridad de la organización con ideas a nivel ejecutivo.'
        },
        slide2: {
          title: 'Panorama de Riesgo Actual',
          subtitle: 'Visión general del entorno de amenazas',
          content: 'Análisis del panorama actual de amenazas cibernéticas y su impacto potencial en la organización.'
        },
        slide3: {
          title: 'Evaluación de Riesgo STEEL™',
          subtitle: 'Visión holística del riesgo organizacional',
          content: 'Evaluación detallada del riesgo en todas las seis dimensiones STEEL con comparativas de referencia de la industria.'
        },
        slide4: {
          title: 'Vulnerabilidades Estratégicas',
          subtitle: 'Áreas clave que requieren atención',
          content: 'Identificación de vulnerabilidades críticas que representan un riesgo significativo para los objetivos estratégicos.'
        },
        slide5: {
          title: 'Acciones Recomendadas',
          subtitle: 'Iniciativas priorizadas para reducción de riesgos',
          content: 'Recomendaciones priorizadas para abordar los riesgos identificados con resultados esperados.'
        },
        slide6: {
          title: 'Consideraciones de Inversión',
          subtitle: 'Asignación de recursos para máximo impacto',
          content: 'Análisis de opciones de inversión con cálculos esperados de retorno de inversión en seguridad.'
        },
        slide7: {
          title: 'Próximos Pasos y Cronograma',
          subtitle: 'Hoja de ruta de implementación',
          content: 'Hoja de ruta de implementación propuesta con hitos clave y requisitos de recursos.'
        }
      }
    },
    notFound: {
      title: 'Página No Encontrada',
      message: 'La página que estás buscando no existe o ha sido movida.',
      returnHome: 'Volver al Inicio',
      goBack: 'Volver Atrás',
      lookingFor: '¿Qué estás buscando?',
      searchPlaceholder: 'Buscar...',
      popularPages: 'Páginas Populares',
      needAssistance: '¿Necesitas ayuda?',
      contactUs: 'Contacta a nuestro equipo'
    },
    footer: {
      services: {
        title: 'Servicios',
        boardBriefings: 'Informes para Directivos',
        mAndA: 'Due Diligence para M&A',
        crisis: 'Liderazgo en Crisis',
        vCISO: 'CISO Virtual'
      },
      resources: {
        title: 'Recursos',
        steel: 'Marco STEEL™',
        riskRadar: 'Radar de Riesgo',
        dashboard: 'Panel',
        library: 'Biblioteca de Recursos',
        about: 'Sobre Nosotros'
      },
      contact: {
        title: 'Contacto',
        emailLabel: 'Correo:',
        phoneLabel: 'Teléfono:',
        headquartersLabel: 'Sede:'
      },
      policy: {
        privacy: 'Política de Privacidad',
        terms: 'Términos de Uso',
        cookie: 'Política de Cookies'
      }
    }
  },
  
  fr: {
    common: {
      learnMore: 'En Savoir Plus',
      viewDetails: 'Voir les Détails',
      viewDashboard: 'Voir le Tableau de Bord',
      copyright: '© 2025 ERMITS Advisory + STEEL™. Tous droits réservés.',
      demo: 'Données de démonstration uniquement',
      tagline: 'Intelligence Globale. Stratégie Résiliente. Optimisé pour le Succès.'
    },
    navigation: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      resources: 'Ressources',
      steel: 'STEEL™',
      riskRadar: 'Radar des Risques',
      dashboard: 'Tableau de Bord',
      presentation: 'Présentation au Conseil',
      contact: 'Contact'
    },
    landing: {
      hero: {
        title: 'Intelligence de Risque Stratégique pour Leadership Exécutif',
        subtitle: 'Intelligence Globale. Stratégie Résiliente. Optimisé pour le Succès.',
        cta: 'Explorer le Cadre STEEL™'
      },
      metrics: {
        title: 'Résultats Prouvés pour Nos Clients',
        riskReduction: 'Réduction Moyenne des Risques',
        timeToInsight: 'Temps d\'Analyse Plus Rapide',
        boardConfidence: 'Amélioration de Confiance du Conseil',
        roiImprovement: 'Retour sur Investissement en Sécurité'
      },
      steelOverview: {
        title: 'La Méthodologie STEEL™',
        subtitle: 'Un cadre complet pour évaluer et atténuer les risques stratégiques à travers six dimensions critiques',
        political: {
          title: 'Politique',
          description: 'Paysage réglementaire, exigences de conformité et facteurs géopolitiques qui impactent la posture de cybersécurité.'
        },
        economic: {
          title: 'Économique',
          description: 'Impact financier, conditions du marché et paysage concurrentiel qui influencent les investissements en sécurité.'
        },
        social: {
          title: 'Social',
          description: 'Gestion de la réputation, perception publique et facteurs de responsabilité sociale.'
        },
        technology: {
          title: 'Technologique',
          description: 'Infrastructure, transformation numérique et vulnérabilités techniques.'
        },
        environmental: {
          title: 'Environnemental',
          description: 'Sécurité physique, risques naturels et facteurs environnementaux.'
        },
        legal: {
          title: 'Juridique',
          description: 'Obligations contractuelles, responsabilité et exigences légales.'
        }
      },
      services: {
        title: 'Nos Services',
        subtitle: 'Solutions conçues par des experts pour les défis de risque modernes',
        boardBriefings: {
          title: 'Briefings pour le Conseil',
          description: 'Briefings de cybersécurité clairs et actionnables pour les membres du conseil et le leadership exécutif qui traduisent les risques techniques en impact commercial.'
        },
        mAndA: {
          title: 'Due Diligence pour M&A',
          description: 'Évaluation complète des risques cyber pour les acquisitions et fusions afin d\'identifier les passifs cachés et les défis d\'intégration.'
        },
        crisis: {
          title: 'Leadership de Crise',
          description: 'Orientation stratégique pendant les incidents de cybersécurité pour minimiser l\'impact, gérer les parties prenantes et protéger la réputation.'
        },
        vCISO: {
          title: 'RSSI Virtuel',
          description: 'Leadership de sécurité au niveau exécutif sans l\'engagement à temps plein, fournissant une direction et une supervision stratégiques.'
        }
      },
      trust: {
        title: 'Faire Confiance par des Organisations Mondiales',
        subtitle: 'Notre équipe d\'experts apporte des décennies d\'expérience et des certifications de l\'industrie',
        cert1: 'Certifié ISO 27001',
        cert2: 'Professionnels de Sécurité CISSP',
        cert3: 'Experts du Cadre NIST',
        cert4: 'Certifié Conformité RGPD'
      },
      cta: {
        title: 'Prêt à Transformer Votre Stratégie de Risque?',
        subtitle: 'Planifiez une consultation avec notre équipe pour discuter de vos besoins spécifiques',
        button: 'Planifier une Consultation'
      }
    },
    steel: {
      title: 'Le Cadre STEEL™',
      subtitle: 'Notre méthodologie complète pour l\'évaluation et la gestion holistique des risques',
      overview: 'Le cadre STEEL™ fournit une approche complète et multidimensionnelle pour évaluer et gérer le risque organisationnel. En examinant six dimensions clés, nous offrons une vue complète de votre paysage de risques.',
      dimensions: {
        political: {
          title: 'Politique',
          description: 'Paysage réglementaire, exigences de conformité et facteurs géopolitiques qui impactent la posture de cybersécurité.'
        },
        economic: {
          title: 'Économique',
          description: 'Impact financier, conditions du marché et paysage concurrentiel qui influencent les investissements en sécurité.'
        },
        social: {
          title: 'Social',
          description: 'Gestion de la réputation, perception publique et facteurs de responsabilité sociale.'
        },
        technology: {
          title: 'Technologique',
          description: 'Infrastructure, transformation numérique et vulnérabilités techniques.'
        },
        environmental: {
          title: 'Environnemental',
          description: 'Sécurité physique, risques naturels et facteurs environnementaux.'
        },
        legal: {
          title: 'Juridique',
          description: 'Obligations contractuelles, responsabilité et exigences légales.'
        }
      },
      integration: {
        title: 'Processus d\'Intégration',
        description: 'Notre méthodologie éprouvée en six étapes pour mettre en œuvre le cadre STEEL™ dans votre organisation',
        step1: 'Évaluation',
        step2: 'Analyse',
        step3: 'Stratégie',
        step4: 'Mise en Œuvre',
        step5: 'Surveillance',
        step6: 'Optimisation',
        downloadGuide: 'Télécharger le Guide d\'Implémentation'
      },
      cta: {
        title: 'Prêt à mettre en œuvre STEEL™?',
        description: 'Notre équipe peut vous aider à appliquer ce cadre à votre contexte d\'entreprise et vos défis spécifiques.',
        scheduleConsultation: 'Planifier une Consultation',
        requestCaseStudy: 'Demander une Étude de Cas'
      }
    },
    riskRadar: {
      title: 'Radar des Risques',
      subtitle: 'Visualisation interactive et simulation du paysage de risque de votre organisation',
      dimensions: 'Dimensions de Risque',
      visualization: 'Visualisation des Risques STEEL™',
      scenarios: {
        title: 'Scénarios',
        current: 'État Actuel',
        breach: 'Violation de Données',
        investment: 'Post-Investissement',
        industry: 'Moyenne de l\'Industrie'
      },
      recommendations: {
        title: 'Actions Recommandées',
        generateReport: 'Générer un Rapport Complet',
        impactLabel: 'Impact',
        immediateAction: 'Action immédiate requise',
        quickWin: 'Opportunité de victoire rapide',
        items: [
          {
            priority: 'Critique',
            action: 'Mettre en place une protection des données renforcée pour les informations sensibles des clients',
            impact: 'Réduit le risque de violation de données de 78%',
            effort: 'Moyen'
          },
          {
            priority: 'Élevé',
            action: 'Établir un programme de gestion des risques tiers',
            impact: 'Améliore la visibilité sur les risques de la chaîne d\'approvisionnement',
            effort: 'Élevé'
          },
          {
            priority: 'Moyen',
            action: 'Mettre à jour la formation de sensibilisation à la sécurité avec des scénarios spécifiques à l\'industrie',
            impact: 'Réduit les tentatives réussies d\'ingénierie sociale de 62%',
            effort: 'Faible'
          },
          {
            priority: 'Élevé',
            action: 'Mettre en œuvre l\'automatisation du suivi de conformité',
            impact: 'Réduit l\'effort manuel et améliore la précision',
            effort: 'Moyen'
          },
          {
            priority: 'Critique',
            action: 'Améliorer la segmentation du réseau pour isoler les systèmes critiques',
            impact: 'Limite le mouvement latéral lors d\'une compromission',
            effort: 'Élevé'
          }
        ]
      }
    },
    dashboard: {
      title: 'Tableau de Bord Exécutif',
      subtitle: 'Aperçu stratégique de la posture de cybersécurité de votre organisation',
      riskScore: {
        title: 'Score de Risque Global',
        low: 'Faible',
        medium: 'Moyen',
        high: 'Élevé',
        critical: 'Critique'
      },
      metrics: {
        title: 'Métriques Clés',
        vulnerabilities: 'Vulnérabilités Actives',
        threats: 'Menaces Émergentes',
        incidents: 'Incidents Récents',
        compliance: 'Statut de Conformité'
      },
      radar: {
        title: 'Radar de Risque STEEL™',
        description: 'Vue multidimensionnelle du risque à travers les six dimensions STEEL'
      },
      threats: {
        title: 'Intelligence des Menaces',
        type: 'Type de Menace',
        source: 'Source',
        impact: 'Impact',
        timeline: 'Chronologie'
      },
      actions: {
        title: 'Actions Stratégiques',
        details: 'Détails',
        items: [
          {
            priority: 'Critique',
            action: 'Mettre en œuvre l\'authentification multi-facteurs sur tous les systèmes',
            impact: 'Réduit le risque de compromission de compte de 99%',
            status: 'En Cours'
          },
          {
            priority: 'Élevé',
            action: 'Mettre à jour le plan de réponse aux incidents pour les scénarios de ransomware',
            impact: 'Réduit le temps d\'arrêt potentiel de 72%',
            status: 'Complété'
          },
          {
            priority: 'Moyen',
            action: 'Mener un exercice de simulation pour les dirigeants',
            impact: 'Améliore la prise de décision des dirigeants pendant les incidents',
            status: 'Non Démarré'
          },
          {
            priority: 'Élevé',
            action: 'Réviser et mettre à jour les exigences de sécurité des tiers',
            impact: 'Réduit l\'exposition au risque de la chaîne d\'approvisionnement',
            status: 'En Cours'
          },
          {
            priority: 'Moyen',
            action: 'Mettre en œuvre des contrôles de sécurité d\'email améliorés',
            impact: 'Réduit les tentatives de phishing réussies de 85%',
            status: 'Non Démarré'
          }
        ]
      }
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Services de conseil en cybersécurité adaptés pour le leadership exécutif',
      keyFeatures: 'Caractéristiques Clés',
      boardBriefings: {
        title: 'Briefings pour le Conseil',
        description: 'Briefings de cybersécurité clairs et actionnables pour les membres du conseil et le leadership exécutif qui traduisent les risques techniques en impact commercial.',
        features: [
          'Langage non technique pour une compréhension claire',
          'Accent stratégique sur l\'impact commercial',
          'Recommandations actionnables',
          'Comparaisons de référence',
          'Analyse des tendances et prévisions'
        ]
      },
      mAndA: {
        title: 'Due Diligence pour M&A',
        description: 'Évaluation complète des risques cyber pour les acquisitions et fusions afin d\'identifier les passifs cachés et les défis d\'intégration.',
        features: [
          'Évaluation de sécurité pré-acquisition',
          'Évaluation des risques techniques et non techniques',
          'Analyse des risques d\'intégration',
          'Stratégie de sécurité post-fusion',
          'Recommandations de protection de la valeur'
        ]
      },
      crisis: {
        title: 'Leadership de Crise',
        description: 'Orientation stratégique pendant les incidents de cybersécurité pour minimiser l\'impact, gérer les parties prenantes et protéger la réputation.',
        features: [
          'Communication de crise exécutive',
          'Support de décision stratégique',
          'Gestion des parties prenantes',
          'Orientation réglementaire et juridique',
          'Gestion de la réputation'
        ]
      },
      vCISO: {
        title: 'RSSI Virtuel',
        description: 'Leadership de sécurité au niveau exécutif sans l\'engagement à temps plein, fournissant une direction et une supervision stratégiques.',
        features: [
          'Planification stratégique de la sécurité',
          'Communication avec le conseil et les dirigeants',
          'Développement du programme de sécurité',
          'Sélection des fournisseurs et des technologies',
          'Supervision de la conformité'
        ]
      },
      steelFramework: {
        title: 'Le Cadre STEEL™',
        description1: 'Notre méthodologie propriétaire pour l\'évaluation complète des risques aborde le spectre complet des facteurs de risque organisationnels.',
        description2: 'En analysant les dimensions Politique, Économique, Sociale, Technologique, Environnementale et Juridique, nous fournissons une vue holistique de votre paysage de risques et des recommandations actionnables pour l\'amélioration.',
        exploreButton: 'Explorer le Cadre'
      },
      process: {
        title: 'Notre Processus d\'Engagement',
        step1: 'Découverte',
        step2: 'Évaluation',
        step3: 'Stratégie',
        step4: 'Mise en Œuvre',
        step5: 'Optimisation'
      },
      contact: {
        title: 'Contactez-Nous',
        email: 'advisory@ermits.com',
        phone: '+1 (888) 618-6160',
        headquarters: '8300 McCullough Lan, Suite 203, Gaithersburg, MD 20877',
        requestConsultation: 'Demander une Consultation'
      }
    },
    about: {
      title: 'À Propos de ERMITS Advisory',
      subtitle: 'Leaders mondiaux en intelligence et conseil de risque stratégique',
      hero: {
        meetTeam: 'Rencontrer Notre Équipe',
        bookCall: 'Réserver un Appel'
      },
      story: {
        title: 'Notre Histoire',
        paragraph1: 'ERMITS Advisory a été fondée par une équipe de vétérans de la cybersécurité et de leaders d\'entreprise qui ont reconnu un écart critique entre les opérations techniques de sécurité et la prise de décision exécutive.',
        paragraph2: 'Notre mission est de combler cet écart en fournissant une intelligence claire et actionnable qui permet aux équipes de direction de prendre des décisions stratégiques éclairées concernant le risque cyber.',
        paragraph3: 'Aujourd\'hui, nous servons des clients mondiaux dans plusieurs industries, apportant notre méthodologie unique STEEL™ aux organisations cherchant à transformer leur approche de la gestion des risques cyber.',
        clients: 'Clients Mondiaux',
        countries: 'Pays',
        projects: 'Projets Complétés'
      },
      values: {
        title: 'Nos Valeurs',
        integrity: {
          title: 'Intégrité',
          description: 'Nous maintenons les plus hauts standards éthiques dans tous nos engagements, assurant transparence et fiabilité.'
        },
        excellence: {
          title: 'Excellence',
          description: 'Nous visons l\'excellence dans chaque aspect de notre travail, livrant des résultats de haute qualité qui dépassent les attentes.'
        },
        collaboration: {
          title: 'Collaboration',
          description: 'Nous travaillons étroitement avec nos clients, devenant des partenaires de confiance dans leur parcours vers le succès.'
        },
        innovation: {
          title: 'Innovation',
          description: 'Nous développons continuellement de nouvelles approches et méthodologies pour répondre aux défis de risque en évolution.'
        }
      },
      team: {
        title: 'Notre Expertise',
        viewExpertise: 'Voir l\'Expertise',
        viewAll: 'Voir Tous les Membres de l\'Équipe',
        cybersecurity: {
          title: 'Leadership en Cybersécurité',
          subtitle: 'Anciens RSSI et Dirigeants de Sécurité',
          description: 'Notre équipe de leadership en cybersécurité apporte des décennies d\'expérience depuis des rôles de RSSI et de sécurité exécutive dans des entreprises du Fortune 500 et des agences gouvernementales.'
        },
        strategic: {
          title: 'Conseil Stratégique',
          subtitle: 'Experts en Affaires et Risques',
          description: 'Nos conseillers stratégiques comblent le fossé entre les concepts techniques de sécurité et les impératifs commerciaux, avec des antécédents en gestion des risques et en leadership exécutif.'
        },
        research: {
          title: 'Recherche et Analyse',
          subtitle: 'Data Scientists et Analystes',
          description: 'Notre équipe de recherche analyse continuellement les paysages de menaces mondiales et les tendances de l\'industrie pour fournir des insights et des recommandations basés sur les données.'
        },
        mAndA: {
          title: 'Sécurité M&A',
          subtitle: 'Spécialistes de la Sécurité des Transactions',
          description: 'Nos spécialistes de la sécurité M&A ont soutenu des centaines de transactions, identifiant les risques de sécurité et les défis d\'intégration pour les acquéreurs et les cibles.'
        }
      },
      global: {
        title: 'Présence Mondiale',
        description: 'Avec des bureaux dans des emplacements clés dans le monde entier, nous fournissons des services de conseil cohérents et de haute qualité à notre clientèle mondiale.',
        offices: {
          us: 'États-Unis (Siège): Gaithersburg, MD',
          uk: 'Royaume-Uni: Londres',
          sg: 'Singapour',
          au: 'Australie: Sydney'
        },
        contact: 'Contacter le Bureau le Plus Proche',
        mapPlaceholder: 'Une carte interactive des bureaux mondiaux serait affichée ici'
      },
      cta: {
        title: 'Prêt à Transformer Votre Stratégie de Risque?',
        description: 'Planifiez une consultation avec notre équipe d\'experts pour discuter de vos défis spécifiques et comment ERMITS Advisory peut aider.',
        schedule: 'Planifier une Consultation',
        learn: 'En Savoir Plus Sur Notre Approche'
      }
    },
    resources: {
      title: 'Bibliothèque de Ressources',
      subtitle: 'Insights, recherche et outils pour améliorer votre compréhension du risque stratégique',
      featured: 'En Vedette',
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
        webinars: 'Webinaires'
      },
      tags: {
        title: 'Sujets',
        compliance: 'Conformité',
        risk: 'Gestion des Risques',
        leadership: 'Leadership',
        technology: 'Technologie'
      },
      noResults: {
        title: 'Aucun Résultat Trouvé',
        message: 'Veuillez ajuster vos critères de recherche ou effacer les filtres pour voir toutes les ressources.'
      },
      newsletter: {
        title: 'Abonnez-vous à Notre Newsletter',
        description: 'Restez informé avec les derniers insights, recherches et ressources livrés directement dans votre boîte de réception.',
        emailPlaceholder: 'Votre adresse email',
        subscribe: 'S\'abonner',
        privacy: 'Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.'
      }
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Entrez en contact avec notre équipe pour toute demande ou pour planifier une consultation',
      form: {
        title: 'Envoyez-Nous un Message',
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom complet',
        emailLabel: 'Email',
        emailPlaceholder: 'Votre adresse email',
        companyLabel: 'Entreprise',
        companyPlaceholder: 'Le nom de votre entreprise',
        phoneLabel: 'Téléphone (optionnel)',
        phonePlaceholder: 'Votre numéro de téléphone',
        messageLabel: 'Message',
        messagePlaceholder: 'Dites-nous comment nous pouvons vous aider',
        submitButton: 'Envoyer le Message',
        requiredFields: 'Champs obligatoires',
        successTitle: 'Message Envoyé!',
        successMessage: 'Merci de nous avoir contactés. Nous vous répondrons bientôt.',
        errorTitle: 'Erreur d\'Envoi du Message',
        errorMessage: 'Un problème est survenu lors de l\'envoi de votre message. Veuillez réessayer plus tard.',
        errors: {
          nameRequired: 'Veuillez entrer votre nom',
          emailRequired: 'Veuillez entrer votre adresse email',
          emailInvalid: 'Veuillez entrer une adresse email valide',
          companyRequired: 'Veuillez entrer le nom de votre entreprise',
          messageRequired: 'Veuillez entrer un message',
          messageTooShort: 'Le message doit comporter au moins 10 caractères',
          phoneInvalid: 'Veuillez entrer un numéro de téléphone valide'
        }
      },
      info: {
        title: 'Informations de Contact',
        emailTitle: 'Envoyez-Nous un Email',
        emailDescription: 'Pour les demandes générales et les informations:',
        phoneTitle: 'Appelez-Nous',
        phoneDescription: 'Du lundi au vendredi, 9h-18h EST:',
        addressTitle: 'Visitez-Nous',
        addressDescription: 'Notre siège:',
        hoursTitle: 'Heures d\'Ouverture',
        weekdays: 'Lundi-Vendredi',
        weekends: 'Samedi-Dimanche',
        closed: 'Fermé'
      },
      map: {
        title: 'Notre Emplacement',
        placeholder: 'Une carte interactive serait affichée ici',
        apiNote: 'Intégration Google Maps dans la version de production'
      },
      faq: {
        title: 'Questions Fréquemment Posées',
        response: {
          title: 'Quel est votre temps de réponse typique?',
          content: 'Nous répondons généralement à toutes les demandes dans les 24 heures ouvrables. Pour les questions urgentes, veuillez appeler directement notre bureau.'
        },
        international: {
          title: 'Travaillez-vous avec des clients internationaux?',
          content: 'Oui, nous servons des clients mondialement avec des bureaux aux États-Unis, au Royaume-Uni, à Singapour et en Australie.'
        },
        confidentiality: {
          title: 'Comment gérez-vous les informations confidentielles?',
          content: 'Toutes les informations des clients sont traitées avec la plus grande confidentialité. Nous maintenons des protocoles stricts de protection des données et pouvons fournir des ANCs sur demande.'
        },
        preparation: {
          title: 'Comment dois-je me préparer pour une consultation initiale?',
          content: 'Il est utile d\'avoir une compréhension générale de votre posture de sécurité actuelle et des défis spécifiques que vous souhaitez aborder. Notre équipe vous guidera à travers le reste du processus.'
        }
      }
    },
    presentation: {
      title: 'Présentation au Conseil',
      subtitle: 'Briefing exécutif interactif sur la stratégie et le risque de cybersécurité',
      download: 'Télécharger la Présentation',
      keyboardShortcuts: 'Raccourcis clavier: Flèches pour naviguer, "F" pour plein écran, "ESC" pour sortir',
      navigation: {
        previous: 'Précédent',
        next: 'Suivant',
        fullscreen: 'Plein Écran'
      },
      slides: {
        slide1: {
          title: 'Briefing Exécutif de Cybersécurité',
          subtitle: 'Analyse stratégique et recommandations',
          content: 'Aperçu complet de la posture de cybersécurité de l\'organisation avec des insights au niveau exécutif.'
        },
        slide2: {
          title: 'Paysage de Risque Actuel',
          subtitle: 'Aperçu de l\'environnement des menaces',
          content: 'Analyse du paysage actuel des menaces cyber et de son impact potentiel sur l\'organisation.'
        },
        slide3: {
          title: 'Évaluation des Risques STEEL™',
          subtitle: 'Vue holistique du risque organisationnel',
          content: 'Évaluation détaillée des risques à travers les six dimensions STEEL avec des comparatifs de référence de l\'industrie.'
        },
        slide4: {
          title: 'Vulnérabilités Stratégiques',
          subtitle: 'Domaines clés nécessitant attention',
          content: 'Identification des vulnérabilités critiques qui posent un risque significatif pour les objectifs stratégiques.'
        },
        slide5: {
          title: 'Actions Recommandées',
          subtitle: 'Initiatives priorisées pour la réduction des risques',
          content: 'Recommandations priorisées pour traiter les risques identifiés avec les résultats attendus.'
        },
        slide6: {
          title: 'Considérations d\'Investissement',
          subtitle: 'Allocation des ressources pour un impact maximum',
          content: 'Analyse des options d\'investissement avec calculs du retour sur investissement de sécurité attendu.'
        },
        slide7: {
          title: 'Prochaines Étapes et Chronologie',
          subtitle: 'Feuille de route d\'implémentation',
          content: 'Feuille de route d\'implémentation proposée avec jalons clés et exigences en ressources.'
        }
      }
    },
    notFound: {
      title: 'Page Non Trouvée',
      message: 'La page que vous cherchez n\'existe pas ou a été déplacée.',
      returnHome: 'Retour à l\'Accueil',
      goBack: 'Retour en Arrière',
      lookingFor: 'Que cherchez-vous?',
      searchPlaceholder: 'Rechercher...',
      popularPages: 'Pages Populaires',
      needAssistance: 'Besoin d\'assistance?',
      contactUs: 'Contactez notre équipe'
    },
    footer: {
      services: {
        title: 'Services',
        boardBriefings: 'Briefings pour le Conseil',
        mAndA: 'Due Diligence pour M&A',
        crisis: 'Leadership de Crise',
        vCISO: 'RSSI Virtuel'
      },
      resources: {
        title: 'Ressources',
        steel: 'Cadre STEEL™',
        riskRadar: 'Radar des Risques',
        dashboard: 'Tableau de Bord',
        library: 'Bibliothèque de Ressources',
        about: 'À Propos'
      },
      contact: {
        title: 'Contact',
        emailLabel: 'Email:',
        phoneLabel: 'Téléphone:',
        headquartersLabel: 'Siège:'
      },
      policy: {
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions d\'Utilisation',
        cookie: 'Politique de Cookies'
      }
    }
  }
};