import { Language } from '../types';

// Translations object with all supported languages
export const translations: Record<Language, any> = {
  en: {
    common: {
      tagline: 'Strategic Insight for Resilience',
      learnMore: 'Learn More',
      viewDashboard: 'View Dashboard',
      copyright: '© 2025 ERMITS Advisory + STEEL™. All rights reserved.',
      demo: 'This is a demonstration website.'
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
      contact: 'Contact Us'
    },
    landing: {
      hero: {
        title: 'Strategic Intelligence for Cyber Resilience',
        subtitle: 'ERMITS Advisory leverages the STEEL™ methodology to provide holistic cybersecurity insights for executive leadership.',
        cta: 'Explore STEEL™'
      },
      metrics: {
        title: 'Measurable Impact',
        riskReduction: 'Risk Reduction',
        timeToInsight: 'Faster Time to Insight',
        boardConfidence: 'Board Confidence',
        roiImprovement: 'ROI Improvement'
      },
      steelOverview: {
        title: 'The STEEL™ Methodology',
        subtitle: 'A comprehensive framework for understanding and addressing cybersecurity risk across six critical dimensions.',
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
        subtitle: 'Specialized advisory services tailored to executive leadership needs.',
        boardBriefings: {
          title: 'Board Briefings',
          description: 'Clear, actionable cybersecurity briefings for board members and executive leadership.'
        },
        mAndA: {
          title: 'M&A Due Diligence',
          description: 'Comprehensive cyber risk assessment for acquisitions and mergers.'
        },
        crisis: {
          title: 'Crisis Leadership',
          description: 'Strategic guidance during cybersecurity incidents and breaches.'
        },
        vCISO: {
          title: 'Virtual CISO',
          description: 'Executive-level security leadership without the full-time commitment.'
        }
      },
      trust: {
        title: 'Trusted Expertise',
        subtitle: 'Our team includes former CISOs, board advisors, and cybersecurity leaders.',
        cert1: 'CISSP Certified',
        cert2: 'ISO 27001 Lead Auditor',
        cert3: 'CISM Certified',
        cert4: 'Board Governance Certified'
      },
      cta: {
        title: 'Ready to strengthen your cyber resilience?',
        subtitle: 'Schedule a consultation with our advisory team.',
        button: 'Request Consultation'
      }
    },
    steel: {
      title: 'STEEL™ Methodology',
      subtitle: 'A holistic framework for understanding and addressing cybersecurity risk.',
      overview: 'The STEEL™ methodology evaluates risk across six interconnected dimensions, providing a comprehensive view of your organization\'s cyber resilience posture.',
      dimensions: {
        political: {
          title: 'Political',
          description: 'Evaluate regulatory landscapes, compliance requirements, and geopolitical factors that impact your cybersecurity posture.'
        },
        economic: {
          title: 'Economic',
          description: 'Assess financial impact, market conditions, and competitive landscape that influence security investments and risk tolerance.'
        },
        social: {
          title: 'Social',
          description: 'Analyze reputation management, public perception, workforce dynamics, and social responsibility factors.'
        },
        technology: {
          title: 'Technology',
          description: 'Examine infrastructure resilience, digital transformation initiatives, and technical vulnerabilities across your ecosystem.'
        },
        environmental: {
          title: 'Environmental',
          description: 'Consider physical security, natural disaster risks, and operational environment factors that could impact security.'
        },
        legal: {
          title: 'Legal',
          description: 'Review contractual obligations, liability considerations, and legal requirements related to data protection and privacy.'
        }
      },
      integration: {
        title: 'Implementation Process',
        description: 'Integrating the STEEL™ methodology into your organization follows a structured, collaborative approach.',
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
        description: 'Our advisory team can help you apply the STEEL™ methodology to your specific organizational context.',
        scheduleConsultation: 'Schedule a Consultation',
        requestCaseStudy: 'Request Case Study'
      }
    },
    riskRadar: {
      title: 'Risk Radar',
      subtitle: 'Visualize and simulate your organization\'s risk exposure across all STEEL™ dimensions.',
      dimensions: 'Dimensions',
      visualization: 'Risk Visualization',
      scenarios: {
        title: 'Risk Scenarios',
        current: 'Current State',
        breach: 'Post-Breach',
        investment: 'Post-Investment',
        industry: 'Industry Benchmark'
      },
      recommendations: {
        title: 'Recommendations',
        generateReport: 'Generate Report',
        impactLabel: 'Impact',
        immediateAction: 'Immediate action required',
        quickWin: 'Quick win, low effort',
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
      subtitle: 'Comprehensive view of your organization\'s cybersecurity posture.',
      riskScore: {
        title: 'Risk Score',
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
        title: 'Risk Radar',
        description: 'Visualization of risk across all STEEL™ dimensions.'
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
        details: 'View Details',
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
    presentation: {
      title: 'Board Presentation',
      subtitle: 'Interactive cybersecurity briefing materials for executive and board presentations.',
      navigation: {
        previous: 'Previous',
        next: 'Next',
        fullscreen: 'Toggle Fullscreen'
      },
      download: 'Download Presentation',
      keyboardShortcuts: 'Keyboard shortcuts: Arrow keys to navigate, F for fullscreen, ESC to exit',
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
      subtitle: 'Specialized advisory services tailored to executive leadership needs.',
      keyFeatures: 'Key Features',
      boardBriefings: {
        title: 'Board Briefings',
        description: 'Clear, actionable cybersecurity briefings for board members',
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
        description: 'Comprehensive cyber risk assessment for acquisitions and mergers',
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
        description: 'Strategic guidance during cybersecurity incidents',
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
        description: 'Executive-level security leadership without the full-time commitment',
        features: [
          'Strategic security planning',
          'Board and executive communication',
          'Security program development',
          'Vendor and technology selection',
          'Compliance oversight'
        ]
      },
      steelFramework: {
        title: 'STEEL™ Framework',
        description1: 'At the core of our advisory services is the STEEL™ methodology, a comprehensive approach to understanding and addressing cybersecurity risk.',
        description2: 'This framework evaluates risk across six interconnected dimensions: Political, Economic, Social, Technology, Environmental, and Legal, providing a holistic view of your organization\'s resilience posture.',
        exploreButton: 'Explore STEEL™'
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
        title: 'Contact Us',
        email: 'advisory@ermits.com',
        phone: '+1 (888) 618-6160',
        headquarters: '8300 McCullough Ln, Suite 203, Gaithersburg, MD 20877',
        requestConsultation: 'Request a Consultation'
      }
    },
    about: {
      title: 'About ERMITS Advisory',
      subtitle: 'Strategic insight for cyber resilience since 2018.',
      hero: {
        meetTeam: 'Meet Our Team',
        bookCall: 'Book a Call'
      },
      story: {
        title: 'Our Story',
        paragraph1: 'ERMITS Advisory was founded in 2018 by former CISOs and security leaders who recognized the gap between technical security teams and executive leadership.',
        paragraph2: 'Our mission is to provide strategic cybersecurity insights that bridge this gap, helping organizations build resilience while enabling business growth.',
        paragraph3: 'Today, we work with organizations across industries, from Fortune 500 companies to growing enterprises, providing the strategic guidance needed to navigate complex cyber challenges.',
        clients: 'Organizations Served',
        countries: 'Countries',
        projects: 'Advisory Projects'
      },
      values: {
        title: 'Our Values',
        integrity: {
          title: 'Integrity',
          description: 'We maintain the highest ethical standards in all our engagements and recommendations.'
        },
        excellence: {
          title: 'Excellence',
          description: 'We strive for excellence in our advisory services, methodologies, and client outcomes.'
        },
        collaboration: {
          title: 'Collaboration',
          description: 'We work closely with our clients to ensure solutions align with their unique contexts.'
        },
        innovation: {
          title: 'Innovation',
          description: 'We continuously evolve our methodologies to address emerging challenges.'
        }
      },
      team: {
        title: 'Our Team',
        viewProfile: 'View Profile',
        viewExpertise: 'View Expertise',
        viewAll: 'View All Team Members'
      },
      timeline: {
        title: 'Our Journey',
        founding: {
          title: 'Company Founding',
          description: 'ERMITS Advisory was established to bridge the gap between technical security teams and executive leadership.'
        },
        methodology: {
          title: 'STEEL™ Methodology',
          description: 'Development of our proprietary STEEL™ methodology for holistic risk assessment.'
        },
        expansion: {
          title: 'Team Expansion',
          description: 'Expansion of our advisory team to include experts across all STEEL™ dimensions.'
        },
        global: {
          title: 'Global Reach',
          description: 'Extension of our services to organizations across North America, Europe, and Asia.'
        },
        today: {
          title: 'Today',
          description: 'Recognized as a trusted advisor to boards and executive teams worldwide.'
        }
      },
      global: {
        title: 'Global Presence',
        description: 'Our advisory team operates globally, with team members and clients across multiple regions.',
        offices: {
          us: 'Headquarters - Gaithersburg, MD, USA',
          uk: 'London, United Kingdom',
          sg: 'Singapore',
          au: 'Sydney, Australia'
        },
        contact: 'Contact Your Regional Office',
        mapPlaceholder: 'Interactive global office map would appear here'
      },
      cta: {
        title: 'Ready to strengthen your cyber resilience?',
        description: 'Schedule a consultation with our advisory team to learn how we can help your organization.',
        schedule: 'Schedule a Consultation',
        learn: 'Learn More About Our Services'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Reach out to discuss how we can help strengthen your cyber resilience.',
      form: {
        title: 'Send Us a Message',
        nameLabel: 'Full Name',
        namePlaceholder: 'Enter your full name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'Enter your email address',
        companyLabel: 'Company',
        companyPlaceholder: 'Enter your company name',
        phoneLabel: 'Phone Number (optional)',
        phonePlaceholder: 'Enter your phone number',
        messageLabel: 'Message',
        messagePlaceholder: 'How can we help you?',
        submitButton: 'Send Message',
        requiredFields: 'Required fields',
        successTitle: 'Message Sent Successfully',
        successMessage: 'Thank you for contacting us. Our team will get back to you within 24 hours.',
        errorTitle: 'Error Sending Message',
        errorMessage: 'There was an error sending your message. Please try again or contact us directly.',
        errors: {
          nameRequired: 'Please enter your name',
          emailRequired: 'Please enter your email address',
          emailInvalid: 'Please enter a valid email address',
          companyRequired: 'Please enter your company name',
          messageRequired: 'Please enter a message',
          messageTooShort: 'Message must be at least 10 characters',
          phoneInvalid: 'Please enter a valid phone number'
        }
      },
      info: {
        title: 'Contact Information',
        emailTitle: 'Email Us',
        emailDescription: 'For general inquiries and information:',
        phoneTitle: 'Call Us',
        phoneDescription: 'Monday to Friday, 9am - 6pm EST:',
        addressTitle: 'Visit Us',
        addressDescription: 'Our headquarters:',
        hoursTitle: 'Office Hours',
        weekdays: 'Monday - Friday',
        weekends: 'Saturday - Sunday',
        closed: 'Closed'
      },
      map: {
        title: 'Office Location',
        placeholder: 'Interactive map would appear here',
        apiNote: 'Map integration requires API key configuration'
      },
      faq: {
        title: 'Frequently Asked Questions',
        response: {
          title: 'How quickly can I expect a response?',
          content: 'We typically respond to all inquiries within 24 business hours. For urgent matters, please indicate this in your message subject.'
        },
        international: {
          title: 'Do you work with international clients?',
          content: 'Yes, we work with organizations globally. Our team has experience across multiple regions and regulatory environments.'
        },
        confidentiality: {
          title: 'How do you handle confidential information?',
          content: 'We maintain strict confidentiality for all client information. We can sign NDAs before detailed discussions if required.'
        },
        preparation: {
          title: 'How should I prepare for an initial consultation?',
          content: 'Having a general understanding of your current security challenges and objectives will help us make the most of our initial conversation.'
        }
      }
    },
    resources: {
      title: 'Resources',
      subtitle: 'Insights, tools, and research to help you strengthen your cyber resilience.',
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
        title: 'Tags',
        compliance: 'Compliance',
        risk: 'Risk Management',
        leadership: 'Executive Leadership',
        technology: 'Technology'
      },
      noResults: {
        title: 'No Results Found',
        message: 'Try adjusting your search or filter criteria to find what you\'re looking for.'
      },
      newsletter: {
        title: 'Subscribe to Our Newsletter',
        description: 'Stay updated with the latest insights, research, and resources directly to your inbox.',
        emailPlaceholder: 'Your email address',
        subscribe: 'Subscribe',
        privacy: 'We respect your privacy and will never share your information.'
      }
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
        dashboard: 'Executive Dashboard',
        library: 'Resource Library',
        about: 'About Us'
      },
      contact: {
        title: 'Contact',
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        headquartersLabel: 'HQ:'
      },
      policy: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        cookie: 'Cookie Policy'
      }
    },
    notFound: {
      title: 'Page Not Found',
      message: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
      returnHome: 'Return to Homepage',
      goBack: 'Go Back',
      lookingFor: 'Looking for something specific?',
      searchPlaceholder: 'Search our website',
      popularPages: 'Popular Pages',
      needAssistance: 'Need assistance?',
      contactUs: 'Contact our team'
    }
  },
  es: {
    common: {
      tagline: 'Perspectiva Estratégica para la Resiliencia',
      learnMore: 'Saber Más',
      viewDashboard: 'Ver Panel',
      copyright: '© 2025 ERMITS Advisory + STEEL™. Todos los derechos reservados.',
      demo: 'Este es un sitio web de demostración.'
    },
    navigation: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      resources: 'Recursos',
      steel: 'STEEL™',
      riskRadar: 'Radar de Riesgo',
      dashboard: 'Panel Ejecutivo',
      presentation: 'Presentación',
      contact: 'Contacto'
    },
    landing: {
      hero: {
        title: 'Inteligencia Estratégica para la Resiliencia Cibernética',
        subtitle: 'ERMITS Advisory utiliza la metodología STEEL™ para proporcionar visiones holísticas de ciberseguridad para el liderazgo ejecutivo.',
        cta: 'Explorar STEEL™'
      },
      metrics: {
        title: 'Impacto Medible',
        riskReduction: 'Reducción de Riesgo',
        timeToInsight: 'Tiempo de Análisis Reducido',
        boardConfidence: 'Confianza de la Junta',
        roiImprovement: 'Mejora del ROI'
      },
      steelOverview: {
        title: 'La Metodología STEEL™',
        subtitle: 'Un marco integral para comprender y abordar el riesgo de ciberseguridad en seis dimensiones críticas.',
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
          description: 'Gestión de la reputación, percepción pública y factores de responsabilidad social.'
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
        subtitle: 'Servicios de asesoría especializados adaptados a las necesidades del liderazgo ejecutivo.',
        boardBriefings: {
          title: 'Informes para Juntas',
          description: 'Informes claros y accionables sobre ciberseguridad para miembros de la junta y liderazgo ejecutivo.'
        },
        mAndA: {
          title: 'Diligencia Debida M&A',
          description: 'Evaluación integral de riesgos cibernéticos para adquisiciones y fusiones.'
        },
        crisis: {
          title: 'Liderazgo en Crisis',
          description: 'Orientación estratégica durante incidentes y brechas de ciberseguridad.'
        },
        vCISO: {
          title: 'CISO Virtual',
          description: 'Liderazgo de seguridad a nivel ejecutivo sin el compromiso a tiempo completo.'
        }
      },
      trust: {
        title: 'Experiencia Confiable',
        subtitle: 'Nuestro equipo incluye ex CISOs, asesores de juntas y líderes de ciberseguridad.',
        cert1: 'Certificado CISSP',
        cert2: 'Auditor Líder ISO 27001',
        cert3: 'Certificado CISM',
        cert4: 'Certificado en Gobernanza'
      },
      cta: {
        title: '¿Listo para fortalecer tu resiliencia cibernética?',
        subtitle: 'Programa una consulta con nuestro equipo de asesores.',
        button: 'Solicitar Consulta'
      }
    },
    steel: {
      title: 'Metodología STEEL™',
      subtitle: 'Un marco holístico para comprender y abordar el riesgo de ciberseguridad.',
      overview: 'La metodología STEEL™ evalúa el riesgo en seis dimensiones interconectadas, proporcionando una visión integral de la postura de resiliencia cibernética de su organización.',
      dimensions: {
        political: {
          title: 'Político',
          description: 'Evalúe panoramas regulatorios, requisitos de cumplimiento y factores geopolíticos que impactan su postura de ciberseguridad.'
        },
        economic: {
          title: 'Económico',
          description: 'Evalúe el impacto financiero, las condiciones del mercado y el panorama competitivo que influyen en las inversiones de seguridad y la tolerancia al riesgo.'
        },
        social: {
          title: 'Social',
          description: 'Analice la gestión de la reputación, la percepción pública, la dinámica de la fuerza laboral y los factores de responsabilidad social.'
        },
        technology: {
          title: 'Tecnológico',
          description: 'Examine la resiliencia de la infraestructura, las iniciativas de transformación digital y las vulnerabilidades técnicas en todo su ecosistema.'
        },
        environmental: {
          title: 'Ambiental',
          description: 'Considere la seguridad física, los riesgos de desastres naturales y los factores del entorno operativo que podrían afectar la seguridad.'
        },
        legal: {
          title: 'Legal',
          description: 'Revise obligaciones contractuales, consideraciones de responsabilidad y requisitos legales relacionados con la protección de datos y la privacidad.'
        }
      },
      integration: {
        title: 'Proceso de Implementación',
        description: 'La integración de la metodología STEEL™ en su organización sigue un enfoque estructurado y colaborativo.',
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
        description: 'Nuestro equipo de asesores puede ayudarlo a aplicar la metodología STEEL™ a su contexto organizacional específico.',
        scheduleConsultation: 'Programar una Consulta',
        requestCaseStudy: 'Solicitar Caso de Estudio'
      }
    },
    riskRadar: {
      title: 'Radar de Riesgo',
      subtitle: 'Visualice y simule la exposición al riesgo de su organización en todas las dimensiones STEEL™.',
      dimensions: 'Dimensiones',
      visualization: 'Visualización de Riesgo',
      scenarios: {
        title: 'Escenarios de Riesgo',
        current: 'Estado Actual',
        breach: 'Post-Brecha',
        investment: 'Post-Inversión',
        industry: 'Punto de Referencia de la Industria'
      },
      recommendations: {
        title: 'Recomendaciones',
        generateReport: 'Generar Informe',
        impactLabel: 'Impacto',
        immediateAction: 'Acción inmediata requerida',
        quickWin: 'Victoria rápida, poco esfuerzo',
        items: [
          {
            priority: 'Crítico',
            action: 'Implementar protección de datos mejorada para información sensible de clientes',
            impact: 'Reduce el riesgo de filtración de datos en un 78%',
            effort: 'Medio'
          },
          {
            priority: 'Alto',
            action: 'Establecer programa de gestión de riesgos de terceros',
            impact: 'Mejora la visibilidad de los riesgos de la cadena de suministro',
            effort: 'Alto'
          },
          {
            priority: 'Medio',
            action: 'Actualizar la capacitación de concientización sobre seguridad con escenarios específicos de la industria',
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
            impact: 'Limita el movimiento lateral durante el compromiso',
            effort: 'Alto'
          }
        ]
      }
    },
    dashboard: {
      title: 'Panel Ejecutivo',
      subtitle: 'Vista integral de la postura de ciberseguridad de su organización.',
      riskScore: {
        title: 'Puntuación de Riesgo',
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
        title: 'Radar de Riesgo',
        description: 'Visualización del riesgo en todas las dimensiones STEEL™.'
      },
      threats: {
        title: 'Inteligencia de Amenazas',
        type: 'Tipo de Amenaza',
        source: 'Origen',
        impact: 'Impacto',
        timeline: 'Cronología'
      },
      actions: {
        title: 'Acciones Estratégicas',
        details: 'Ver Detalles',
        items: [
          {
            priority: 'Crítico',
            action: 'Implementar autenticación multifactor en todos los sistemas',
            impact: 'Reduce el riesgo de compromiso de cuentas en un 99%',
            status: 'En Progreso'
          },
          {
            priority: 'Alto',
            action: 'Actualizar plan de respuesta a incidentes para escenarios de ransomware',
            impact: 'Reduce el tiempo de inactividad potencial en un 72%',
            status: 'Completado'
          },
          {
            priority: 'Medio',
            action: 'Realizar ejercicio de simulación ejecutiva',
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
    presentation: {
      title: 'Presentación para Juntas',
      subtitle: 'Materiales interactivos de información sobre ciberseguridad para presentaciones ejecutivas y de juntas.',
      navigation: {
        previous: 'Anterior',
        next: 'Siguiente',
        fullscreen: 'Alternar Pantalla Completa'
      },
      download: 'Descargar Presentación',
      keyboardShortcuts: 'Atajos de teclado: Teclas de flecha para navegar, F para pantalla completa, ESC para salir',
      slides: {
        slide1: {
          title: 'Informe Ejecutivo de Ciberseguridad',
          subtitle: 'Análisis estratégico y recomendaciones',
          content: 'Visión integral de la postura de ciberseguridad de la organización con información a nivel ejecutivo.'
        },
        slide2: {
          title: 'Panorama Actual de Riesgos',
          subtitle: 'Descripción del entorno de amenazas',
          content: 'Análisis del panorama actual de amenazas cibernéticas y su impacto potencial en la organización.'
        },
        slide3: {
          title: 'Evaluación de Riesgo STEEL™',
          subtitle: 'Vista holística del riesgo organizacional',
          content: 'Evaluación detallada del riesgo en las seis dimensiones STEEL con puntos de referencia comparativos de la industria.'
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
          subtitle: 'Asignación de recursos para el máximo impacto',
          content: 'Análisis de opciones de inversión con cálculos esperados de retorno de inversión en seguridad.'
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
      subtitle: 'Servicios de asesoría especializados adaptados a las necesidades del liderazgo ejecutivo.',
      keyFeatures: 'Características Clave',
      boardBriefings: {
        title: 'Informes para Juntas',
        description: 'Informes claros y accionables sobre ciberseguridad para miembros de la junta',
        features: [
          'Lenguaje no técnico para una comprensión clara',
          'Enfoque estratégico en el impacto empresarial',
          'Recomendaciones accionables',
          'Comparaciones con puntos de referencia',
          'Análisis de tendencias y pronósticos'
        ]
      },
      mAndA: {
        title: 'Diligencia Debida M&A',
        description: 'Evaluación integral de riesgos cibernéticos para adquisiciones y fusiones',
        features: [
          'Evaluación de seguridad previa a la adquisición',
          'Evaluación de riesgos técnicos y no técnicos',
          'Análisis de riesgo de integración',
          'Estrategia de seguridad post-fusión',
          'Recomendaciones de protección de valor'
        ]
      },
      crisis: {
        title: 'Liderazgo en Crisis',
        description: 'Orientación estratégica durante incidentes de ciberseguridad',
        features: [
          'Comunicación de crisis ejecutiva',
          'Apoyo a la decisión estratégica',
          'Gestión de partes interesadas',
          'Orientación regulatoria y legal',
          'Gestión de la reputación'
        ]
      },
      vCISO: {
        title: 'CISO Virtual',
        description: 'Liderazgo de seguridad a nivel ejecutivo sin el compromiso a tiempo completo',
        features: [
          'Planificación estratégica de seguridad',
          'Comunicación con la junta y ejecutivos',
          'Desarrollo de programa de seguridad',
          'Selección de proveedores y tecnología',
          'Supervisión de cumplimiento'
        ]
      },
      steelFramework: {
        title: 'Marco STEEL™',
        description1: 'En el núcleo de nuestros servicios de asesoría está la metodología STEEL™, un enfoque integral para comprender y abordar el riesgo de ciberseguridad.',
        description2: 'Este marco evalúa el riesgo en seis dimensiones interconectadas: Política, Económica, Social, Tecnológica, Ambiental y Legal, proporcionando una visión holística de la postura de resiliencia de su organización.',
        exploreButton: 'Explorar STEEL™'
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
        title: 'Contáctenos',
        email: 'advisory@ermits.com',
        phone: '+1 (888) 618-6160',
        headquarters: '8300 McCullough Ln, Suite 203, Gaithersburg, MD 20877',
        requestConsultation: 'Solicitar una Consulta'
      }
    },
    about: {
      title: 'Acerca de ERMITS Advisory',
      subtitle: 'Perspectiva estratégica para la resiliencia cibernética desde 2018.',
      hero: {
        meetTeam: 'Conoce a Nuestro Equipo',
        bookCall: 'Programar una Llamada'
      },
      story: {
        title: 'Nuestra Historia',
        paragraph1: 'ERMITS Advisory fue fundada en 2018 por ex CISOs y líderes de seguridad que reconocieron la brecha entre los equipos técnicos de seguridad y el liderazgo ejecutivo.',
        paragraph2: 'Nuestra misión es proporcionar perspectivas estratégicas de ciberseguridad que cierren esta brecha, ayudando a las organizaciones a desarrollar resiliencia mientras permiten el crecimiento del negocio.',
        paragraph3: 'Hoy, trabajamos con organizaciones en todas las industrias, desde empresas Fortune 500 hasta empresas en crecimiento, proporcionando la orientación estratégica necesaria para navegar por desafíos cibernéticos complejos.',
        clients: 'Organizaciones Atendidas',
        countries: 'Países',
        projects: 'Proyectos de Asesoría'
      },
      values: {
        title: 'Nuestros Valores',
        integrity: {
          title: 'Integridad',
          description: 'Mantenemos los más altos estándares éticos en todos nuestros compromisos y recomendaciones.'
        },
        excellence: {
          title: 'Excelencia',
          description: 'Nos esforzamos por la excelencia en nuestros servicios de asesoría, metodologías y resultados para los clientes.'
        },
        collaboration: {
          title: 'Colaboración',
          description: 'Trabajamos estrechamente con nuestros clientes para garantizar que las soluciones se alineen con sus contextos únicos.'
        },
        innovation: {
          title: 'Innovación',
          description: 'Evolucionamos continuamente nuestras metodologías para abordar los desafíos emergentes.'
        }
      },
      team: {
        title: 'Nuestro Equipo',
        viewProfile: 'Ver Perfil',
        viewExpertise: 'Ver Experiencia',
        viewAll: 'Ver Todos los Miembros del Equipo'
      },
      timeline: {
        title: 'Nuestra Trayectoria',
        founding: {
          title: 'Fundación de la Empresa',
          description: 'ERMITS Advisory se estableció para cerrar la brecha entre los equipos técnicos de seguridad y el liderazgo ejecutivo.'
        },
        methodology: {
          title: 'Metodología STEEL™',
          description: 'Desarrollo de nuestra metodología propietaria STEEL™ para la evaluación holística de riesgos.'
        },
        expansion: {
          title: 'Expansión del Equipo',
          description: 'Expansión de nuestro equipo de asesores para incluir expertos en todas las dimensiones STEEL™.'
        },
        global: {
          title: 'Alcance Global',
          description: 'Extensión de nuestros servicios a organizaciones en América del Norte, Europa y Asia.'
        },
        today: {
          title: 'Hoy',
          description: 'Reconocidos como asesores de confianza para juntas y equipos ejecutivos en todo el mundo.'
        }
      },
      global: {
        title: 'Presencia Global',
        description: 'Nuestro equipo de asesores opera globalmente, con miembros del equipo y clientes en múltiples regiones.',
        offices: {
          us: 'Sede Central - Gaithersburg, MD, EE. UU.',
          uk: 'Londres, Reino Unido',
          sg: 'Singapur',
          au: 'Sídney, Australia'
        },
        contact: 'Contacte a Su Oficina Regional',
        mapPlaceholder: 'Aquí aparecería un mapa interactivo de oficinas globales'
      },
      cta: {
        title: '¿Listo para fortalecer su resiliencia cibernética?',
        description: 'Programe una consulta con nuestro equipo de asesores para conocer cómo podemos ayudar a su organización.',
        schedule: 'Programar una Consulta',
        learn: 'Más Información Sobre Nuestros Servicios'
      }
    },
    contact: {
      title: 'Contáctenos',
      subtitle: 'Comuníquese con nosotros para discutir cómo podemos ayudar a fortalecer su resiliencia cibernética.',
      form: {
        title: 'Envíenos un Mensaje',
        nameLabel: 'Nombre Completo',
        namePlaceholder: 'Ingrese su nombre completo',
        emailLabel: 'Dirección de Correo Electrónico',
        emailPlaceholder: 'Ingrese su dirección de correo electrónico',
        companyLabel: 'Empresa',
        companyPlaceholder: 'Ingrese el nombre de su empresa',
        phoneLabel: 'Número de Teléfono (opcional)',
        phonePlaceholder: 'Ingrese su número de teléfono',
        messageLabel: 'Mensaje',
        messagePlaceholder: '¿Cómo podemos ayudarle?',
        submitButton: 'Enviar Mensaje',
        requiredFields: 'Campos requeridos',
        successTitle: 'Mensaje Enviado Exitosamente',
        successMessage: 'Gracias por contactarnos. Nuestro equipo se pondrá en contacto con usted dentro de las 24 horas.',
        errorTitle: 'Error al Enviar el Mensaje',
        errorMessage: 'Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo o contáctenos directamente.',
        errors: {
          nameRequired: 'Por favor ingrese su nombre',
          emailRequired: 'Por favor ingrese su dirección de correo electrónico',
          emailInvalid: 'Por favor ingrese una dirección de correo electrónico válida',
          companyRequired: 'Por favor ingrese el nombre de su empresa',
          messageRequired: 'Por favor ingrese un mensaje',
          messageTooShort: 'El mensaje debe tener al menos 10 caracteres',
          phoneInvalid: 'Por favor ingrese un número de teléfono válido'
        }
      },
      info: {
        title: 'Información de Contacto',
        emailTitle: 'Envíenos un Correo Electrónico',
        emailDescription: 'Para consultas generales e información:',
        phoneTitle: 'Llámenos',
        phoneDescription: 'Lunes a viernes, 9 am - 6 pm EST:',
        addressTitle: 'Visítenos',
        addressDescription: 'Nuestra sede:',
        hoursTitle: 'Horario de Oficina',
        weekdays: 'Lunes - Viernes',
        weekends: 'Sábado - Domingo',
        closed: 'Cerrado'
      },
      map: {
        title: 'Ubicación de la Oficina',
        placeholder: 'Aquí aparecería un mapa interactivo',
        apiNote: 'La integración del mapa requiere configuración de clave API'
      },
      faq: {
        title: 'Preguntas Frecuentes',
        response: {
          title: '¿Qué tan rápido puedo esperar una respuesta?',
          content: 'Típicamente respondemos a todas las consultas dentro de las 24 horas hábiles. Para asuntos urgentes, por favor indíquelo en el asunto de su mensaje.'
        },
        international: {
          title: '¿Trabajan con clientes internacionales?',
          content: 'Sí, trabajamos con organizaciones globalmente. Nuestro equipo tiene experiencia en múltiples regiones y entornos regulatorios.'
        },
        confidentiality: {
          title: '¿Cómo manejan la información confidencial?',
          content: 'Mantenemos estricta confidencialidad para toda la información del cliente. Podemos firmar acuerdos de confidencialidad antes de discusiones detalladas si es necesario.'
        },
        preparation: {
          title: '¿Cómo debo prepararme para una consulta inicial?',
          content: 'Tener una comprensión general de sus desafíos y objetivos de seguridad actuales nos ayudará a aprovechar al máximo nuestra conversación inicial.'
        }
      }
    },
    resources: {
      title: 'Recursos',
      subtitle: 'Conocimientos, herramientas e investigación para ayudarle a fortalecer su resiliencia cibernética.',
      featured: 'Destacado',
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
        webinars: 'Webinars'
      },
      tags: {
        title: 'Etiquetas',
        compliance: 'Cumplimiento',
        risk: 'Gestión de Riesgos',
        leadership: 'Liderazgo Ejecutivo',
        technology: 'Tecnología'
      },
      noResults: {
        title: 'No Se Encontraron Resultados',
        message: 'Intente ajustar su búsqueda o criterios de filtro para encontrar lo que está buscando.'
      },
      newsletter: {
        title: 'Suscríbase a Nuestro Boletín',
        description: 'Manténgase actualizado con los últimos conocimientos, investigaciones y recursos directamente en su bandeja de entrada.',
        emailPlaceholder: 'Su dirección de correo electrónico',
        subscribe: 'Suscribirse',
        privacy: 'Respetamos su privacidad y nunca compartiremos su información.'
      }
    },
    footer: {
      services: {
        title: 'Servicios',
        boardBriefings: 'Informes para Juntas',
        mAndA: 'Diligencia Debida M&A',
        crisis: 'Liderazgo en Crisis',
        vCISO: 'CISO Virtual'
      },
      resources: {
        title: 'Recursos',
        steel: 'Marco STEEL™',
        riskRadar: 'Radar de Riesgo',
        dashboard: 'Panel Ejecutivo',
        library: 'Biblioteca de Recursos',
        about: 'Acerca de Nosotros'
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
    },
    notFound: {
      title: 'Página No Encontrada',
      message: 'La página que está buscando puede haber sido eliminada, cambió de nombre o no está disponible temporalmente.',
      returnHome: 'Volver a la Página de Inicio',
      goBack: 'Volver Atrás',
      lookingFor: '¿Buscando algo específico?',
      searchPlaceholder: 'Buscar en nuestro sitio web',
      popularPages: 'Páginas Populares',
      needAssistance: '¿Necesita ayuda?',
      contactUs: 'Contacte a nuestro equipo'
    }
  },
  fr: {
    common: {
      tagline: 'Perspectives Stratégiques pour la Résilience',
      learnMore: 'En Savoir Plus',
      viewDashboard: 'Voir le Tableau de Bord',
      copyright: '© 2025 ERMITS Advisory + STEEL™. Tous droits réservés.',
      demo: 'Ceci est un site web de démonstration.'
    },
    navigation: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      resources: 'Ressources',
      steel: 'STEEL™',
      riskRadar: 'Radar de Risque',
      dashboard: 'Tableau de Bord',
      presentation: 'Présentation',
      contact: 'Contact'
    },
    landing: {
      hero: {
        title: 'Intelligence Stratégique pour la Résilience Cyber',
        subtitle: 'ERMITS Advisory utilise la méthodologie STEEL™ pour fournir des perspectives holistiques de cybersécurité pour les dirigeants.',
        cta: 'Explorer STEEL™'
      },
      metrics: {
        title: 'Impact Mesurable',
        riskReduction: 'Réduction des Risques',
        timeToInsight: 'Temps d\'Analyse Réduit',
        boardConfidence: 'Confiance du Conseil',
        roiImprovement: 'Amélioration du ROI'
      },
      steelOverview: {
        title: 'La Méthodologie STEEL™',
        subtitle: 'Un cadre complet pour comprendre et aborder le risque de cybersécurité à travers six dimensions critiques.',
        political: {
          title: 'Politique',
          description: 'Paysage réglementaire, exigences de conformité et facteurs géopolitiques qui impactent la posture de cybersécurité.'
        },
        economic: {
          title: 'Économique',
          description: 'Impact financier, conditions du marché et paysage concurrentiel qui influencent les investissements de sécurité.'
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
        subtitle: 'Services de conseil spécialisés adaptés aux besoins des dirigeants.',
        boardBriefings: {
          title: 'Briefings pour Conseils',
          description: 'Briefings de cybersécurité clairs et exploitables pour les membres du conseil et les dirigeants.'
        },
        mAndA: {
          title: 'Due Diligence M&A',
          description: 'Évaluation complète des risques cyber pour les acquisitions et fusions.'
        },
        crisis: {
          title: 'Leadership de Crise',
          description: 'Orientation stratégique pendant les incidents et brèches de cybersécurité.'
        },
        vCISO: {
          title: 'RSSI Virtuel',
          description: 'Leadership de sécurité au niveau exécutif sans l\'engagement à temps plein.'
        }
      },
      trust: {
        title: 'Expertise de Confiance',
        subtitle: 'Notre équipe comprend d\'anciens RSSI, conseillers de conseil et leaders en cybersécurité.',
        cert1: 'Certifié CISSP',
        cert2: 'Auditeur Principal ISO 27001',
        cert3: 'Certifié CISM',
        cert4: 'Certifié en Gouvernance'
      },
      cta: {
        title: 'Prêt à renforcer votre résilience cyber?',
        subtitle: 'Planifiez une consultation avec notre équipe de conseillers.',
        button: 'Demander une Consultation'
      }
    },
    steel: {
      title: 'Méthodologie STEEL™',
      subtitle: 'Un cadre holistique pour comprendre et aborder le risque de cybersécurité.',
      overview: 'La méthodologie STEEL™ évalue le risque à travers six dimensions interconnectées, fournissant une vue complète de la posture de résilience cyber de votre organisation.',
      dimensions: {
        political: {
          title: 'Politique',
          description: 'Évaluez les paysages réglementaires, les exigences de conformité et les facteurs géopolitiques qui impactent votre posture de cybersécurité.'
        },
        economic: {
          title: 'Économique',
          description: 'Évaluez l\'impact financier, les conditions du marché et le paysage concurrentiel qui influencent les investissements de sécurité et la tolérance au risque.'
        },
        social: {
          title: 'Social',
          description: 'Analysez la gestion de la réputation, la perception publique, la dynamique de la main-d\'œuvre et les facteurs de responsabilité sociale.'
        },
        technology: {
          title: 'Technologique',
          description: 'Examinez la résilience de l\'infrastructure, les initiatives de transformation numérique et les vulnérabilités techniques dans tout votre écosystème.'
        },
        environmental: {
          title: 'Environnemental',
          description: 'Considérez la sécurité physique, les risques de catastrophes naturelles et les facteurs environnementaux opérationnels qui pourraient affecter la sécurité.'
        },
        legal: {
          title: 'Juridique',
          description: 'Passez en revue les obligations contractuelles, les considérations de responsabilité et les exigences légales liées à la protection des données et à la vie privée.'
        }
      },
      integration: {
        title: 'Processus d\'Implémentation',
        description: 'L\'intégration de la méthodologie STEEL™ dans votre organisation suit une approche structurée et collaborative.',
        step1: 'Évaluation',
        step2: 'Analyse',
        step3: 'Stratégie',
        step4: 'Implémentation',
        step5: 'Surveillance',
        step6: 'Optimisation',
        downloadGuide: 'Télécharger le Guide d\'Implémentation'
      },
      cta: {
        title: 'Prêt à implémenter STEEL™?',
        description: 'Notre équipe de conseillers peut vous aider à appliquer la méthodologie STEEL™ à votre contexte organisationnel spécifique.',
        scheduleConsultation: 'Planifier une Consultation',
        requestCaseStudy: 'Demander une Étude de Cas'
      }
    },
    riskRadar: {
      title: 'Radar de Risque',
      subtitle: 'Visualisez et simulez l\'exposition au risque de votre organisation à travers toutes les dimensions STEEL™.',
      dimensions: 'Dimensions',
      visualization: 'Visualisation des Risques',
      scenarios: {
        title: 'Scénarios de Risque',
        current: 'État Actuel',
        breach: 'Post-Brèche',
        investment: 'Post-Investissement',
        industry: 'Référence Sectorielle'
      },
      recommendations: {
        title: 'Recommandations',
        generateReport: 'Générer un Rapport',
        impactLabel: 'Impact',
        immediateAction: 'Action immédiate requise',
        quickWin: 'Gain rapide, faible effort',
        items: [
          {
            priority: 'Critique',
            action: 'Mettre en œuvre une protection des données améliorée pour les informations sensibles des clients',
            impact: 'Réduit le risque de fuite de données de 78%',
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
            action: 'Mettre en œuvre l\'automatisation de la surveillance de la conformité',
            impact: 'Réduit l\'effort manuel et améliore la précision',
            effort: 'Moyen'
          },
          {
            priority: 'Critique',
            action: 'Améliorer la segmentation réseau pour isoler les systèmes critiques',
            impact: 'Limite le mouvement latéral lors d\'un compromis',
            effort: 'Élevé'
          }
        ]
      }
    },
    dashboard: {
      title: 'Tableau de Bord Exécutif',
      subtitle: 'Vue complète de la posture de cybersécurité de votre organisation.',
      riskScore: {
        title: 'Score de Risque',
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
        title: 'Radar de Risque',
        description: 'Visualisation du risque à travers toutes les dimensions STEEL™.'
      },
      threats: {
        title: 'Intelligence des Menaces',
        type: 'Type de Menace',
        source: 'Source',
        impact: 'Impact',
        timeline: 'Calendrier'
      },
      actions: {
        title: 'Actions Stratégiques',
        details: 'Voir les Détails',
        items: [
          {
            priority: 'Critique',
            action: 'Mettre en œuvre l\'authentification multifacteur sur tous les systèmes',
            impact: 'Réduit le risque de compromission de compte de 99%',
            status: 'En Cours'
          },
          {
            priority: 'Élevé',
            action: 'Mettre à jour le plan de réponse aux incidents pour les scénarios de ransomware',
            impact: 'Réduit le temps d\'arrêt potentiel de 72%',
            status: 'Terminé'
          },
          {
            priority: 'Moyen',
            action: 'Conduire un exercice de simulation exécutif',
            impact: 'Améliore la prise de décision exécutive pendant les incidents',
            status: 'Non Démarré'
          },
          {
            priority: 'Élevé',
            action: 'Revoir et mettre à jour les exigences de sécurité des tiers',
            impact: 'Réduit l\'exposition au risque de la chaîne d\'approvisionnement',
            status: 'En Cours'
          },
          {
            priority: 'Moyen',
            action: 'Mettre en œuvre des contrôles de sécurité de messagerie améliorés',
            impact: 'Réduit les tentatives réussies de phishing de 85%',
            status: 'Non Démarré'
          }
        ]
      }
    },
    presentation: {
      title: 'Présentation pour Conseils',
      subtitle: 'Matériels de briefing interactifs sur la cybersécurité pour les présentations exécutives et de conseil.',
      navigation: {
        previous: 'Précédent',
        next: 'Suivant',
        fullscreen: 'Basculer en Plein Écran'
      },
      download: 'Télécharger la Présentation',
      keyboardShortcuts: 'Raccourcis clavier: Touches fléchées pour naviguer, F pour plein écran, ESC pour quitter',
      slides: {
        slide1: {
          title: 'Briefing Exécutif de Cybersécurité',
          subtitle: 'Analyse stratégique et recommandations',
          content: 'Aperçu complet de la posture de cybersécurité de l\'organisation avec des insights au niveau exécutif.'
        },
        slide2: {
          title: 'Paysage Actuel des Risques',
          subtitle: 'Aperçu de l\'environnement des menaces',
          content: 'Analyse du paysage actuel des menaces cyber et de son impact potentiel sur l\'organisation.'
        },
        slide3: {
          title: 'Évaluation des Risques STEEL™',
          subtitle: 'Vue holistique du risque organisationnel',
          content: 'Évaluation détaillée du risque à travers les six dimensions STEEL avec des références comparatives sectorielles.'
        },
        slide4: {
          title: 'Vulnérabilités Stratégiques',
          subtitle: 'Domaines clés nécessitant attention',
          content: 'Identification des vulnérabilités critiques qui posent un risque significatif pour les objectifs stratégiques.'
        },
        slide5: {
          title: 'Actions Recommandées',
          subtitle: 'Initiatives priorisées pour la réduction des risques',
          content: 'Recommandations priorisées pour aborder les risques identifiés avec les résultats attendus.'
        },
        slide6: {
          title: 'Considérations d\'Investissement',
          subtitle: 'Allocation des ressources pour un impact maximal',
          content: 'Analyse des options d\'investissement avec des calculs de retour sur investissement de sécurité attendus.'
        },
        slide7: {
          title: 'Prochaines Étapes et Calendrier',
          subtitle: 'Feuille de route d\'implémentation',
          content: 'Feuille de route d\'implémentation proposée avec des jalons clés et des exigences de ressources.'
        }
      }
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Services de conseil spécialisés adaptés aux besoins des dirigeants.',
      keyFeatures: 'Caractéristiques Clés',
      boardBriefings: {
        title: 'Briefings pour Conseils',
        description: 'Briefings de cybersécurité clairs et exploitables pour les membres du conseil',
        features: [
          'Langage non technique pour une compréhension claire',
          'Focus stratégique sur l\'impact commercial',
          'Recommandations exploitables',
          'Comparaisons de référence',
          'Analyse des tendances et prévisions'
        ]
      },
      mAndA: {
        title: 'Due Diligence M&A',
        description: 'Évaluation complète des risques cyber pour les acquisitions et fusions',
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
        description: 'Orientation stratégique pendant les incidents de cybersécurité',
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
        description: 'Leadership de sécurité au niveau exécutif sans l\'engagement à temps plein',
        features: [
          'Planification stratégique de sécurité',
          'Communication avec le conseil et les exécutifs',
          'Développement de programme de sécurité',
          'Sélection de fournisseurs et de technologie',
          'Supervision de conformité'
        ]
      },
      steelFramework: {
        title: 'Cadre STEEL™',
        description1: 'Au cœur de nos services de conseil se trouve la méthodologie STEEL™, une approche complète pour comprendre et aborder le risque de cybersécurité.',
        description2: 'Ce cadre évalue le risque à travers six dimensions interconnectées : Politique, Économique, Sociale, Technologique, Environnementale et Juridique, fournissant une vue holistique de la posture de résilience de votre organisation.',
        exploreButton: 'Explorer STEEL™'
      },
      process: {
        title: 'Notre Processus d\'Engagement',
        step1: 'Découverte',
        step2: 'Évaluation',
        step3: 'Stratégie',
        step4: 'Implémentation',
        step5: 'Optimisation'
      },
      contact: {
        title: 'Contactez-Nous',
        email: 'advisory@ermits.com',
        phone: '+1 (888) 618-6160',
        headquarters: '8300 McCullough Ln, Suite 203, Gaithersburg, MD 20877',
        requestConsultation: 'Demander une Consultation'
      }
    },
    about: {
      title: 'À Propos d\'ERMITS Advisory',
      subtitle: 'Perspective stratégique pour la résilience cyber depuis 2018.',
      hero: {
        meetTeam: 'Rencontrer Notre Équipe',
        bookCall: 'Réserver un Appel'
      },
      story: {
        title: 'Notre Histoire',
        paragraph1: 'ERMITS Advisory a été fondée en 2018 par d\'anciens RSSI et leaders de sécurité qui ont reconnu l\'écart entre les équipes techniques de sécurité et le leadership exécutif.',
        paragraph2: 'Notre mission est de fournir des perspectives stratégiques de cybersécurité qui comblent cet écart, aidant les organisations à développer la résilience tout en permettant la croissance des affaires.',
        paragraph3: 'Aujourd\'hui, nous travaillons avec des organisations dans tous les secteurs, des entreprises Fortune 500 aux entreprises en croissance, fournissant l\'orientation stratégique nécessaire pour naviguer dans les défis cyber complexes.',
        clients: 'Organisations Servies',
        countries: 'Pays',
        projects: 'Projets de Conseil'
      },
      values: {
        title: 'Nos Valeurs',
        integrity: {
          title: 'Intégrité',
          description: 'Nous maintenons les plus hauts standards éthiques dans tous nos engagements et recommandations.'
        },
        excellence: {
          title: 'Excellence',
          description: 'Nous visons l\'excellence dans nos services de conseil, méthodologies et résultats clients.'
        },
        collaboration: {
          title: 'Collaboration',
          description: 'Nous travaillons étroitement avec nos clients pour assurer que les solutions s\'alignent avec leurs contextes uniques.'
        },
        innovation: {
          title: 'Innovation',
          description: 'Nous faisons évoluer continuellement nos méthodologies pour aborder les défis émergents.'
        }
      },
      team: {
        title: 'Notre Équipe',
        viewProfile: 'Voir le Profil',
        viewExpertise: 'Voir Expertise',
        viewAll: 'Voir Tous les Membres de l\'Équipe'
      },
      timeline: {
        title: 'Notre Parcours',
        founding: {
          title: 'Fondation de l\'Entreprise',
          description: 'ERMITS Advisory a été établie pour combler l\'écart entre les équipes techniques de sécurité et le leadership exécutif.'
        },
        methodology: {
          title: 'Méthodologie STEEL™',
          description: 'Développement de notre méthodologie propriétaire STEEL™ pour l\'évaluation holistique des risques.'
        },
        expansion: {
          title: 'Expansion de l\'Équipe',
          description: 'Expansion de notre équipe de conseillers pour inclure des experts dans toutes les dimensions STEEL™.'
        },
        global: {
          title: 'Portée Mondiale',
          description: 'Extension de nos services aux organisations en Amérique du Nord, Europe et Asie.'
        },
        today: {
          title: 'Aujourd\'hui',
          description: 'Reconnus comme conseillers de confiance pour les conseils d\'administration et les équipes exécutives dans le monde entier.'
        }
      },
      global: {
        title: 'Présence Mondiale',
        description: 'Notre équipe de conseillers opère mondialement, avec des membres d\'équipe et des clients dans plusieurs régions.',
        offices: {
          us: 'Siège - Gaithersburg, MD, États-Unis',
          uk: 'Londres, Royaume-Uni',
          sg: 'Singapour',
          au: 'Sydney, Australie'
        },
        contact: 'Contactez Votre Bureau Régional',
        mapPlaceholder: 'Une carte interactive des bureaux mondiaux apparaîtrait ici'
      },
      cta: {
        title: 'Prêt à renforcer votre résilience cyber?',
        description: 'Planifiez une consultation avec notre équipe de conseillers pour apprendre comment nous pouvons aider votre organisation.',
        schedule: 'Planifier une Consultation',
        learn: 'En Savoir Plus Sur Nos Services'
      }
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Prenez contact pour discuter de la façon dont nous pouvons aider à renforcer votre résilience cyber.',
      form: {
        title: 'Envoyez-Nous un Message',
        nameLabel: 'Nom Complet',
        namePlaceholder: 'Entrez votre nom complet',
        emailLabel: 'Adresse Email',
        emailPlaceholder: 'Entrez votre adresse email',
        companyLabel: 'Entreprise',
        companyPlaceholder: 'Entrez le nom de votre entreprise',
        phoneLabel: 'Numéro de Téléphone (optionnel)',
        phonePlaceholder: 'Entrez votre numéro de téléphone',
        messageLabel: 'Message',
        messagePlaceholder: 'Comment pouvons-nous vous aider?',
        submitButton: 'Envoyer le Message',
        requiredFields: 'Champs obligatoires',
        successTitle: 'Message Envoyé avec Succès',
        successMessage: 'Merci de nous avoir contactés. Notre équipe vous répondra dans les 24 heures.',
        errorTitle: 'Erreur lors de l\'Envoi du Message',
        errorMessage: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer ou nous contacter directement.',
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
        phoneDescription: 'Du lundi au vendredi, de 9h à 18h EST:',
        addressTitle: 'Visitez-Nous',
        addressDescription: 'Notre siège:',
        hoursTitle: 'Heures de Bureau',
        weekdays: 'Lundi - Vendredi',
        weekends: 'Samedi - Dimanche',
        closed: 'Fermé'
      },
      map: {
        title: 'Emplacement du Bureau',
        placeholder: 'Une carte interactive apparaîtrait ici',
        apiNote: 'L\'intégration de la carte nécessite une configuration de clé API'
      },
      faq: {
        title: 'Questions Fréquemment Posées',
        response: {
          title: 'À quelle vitesse puis-je attendre une réponse?',
          content: 'Nous répondons généralement à toutes les demandes dans les 24 heures ouvrables. Pour les questions urgentes, veuillez l\'indiquer dans l\'objet de votre message.'
        },
        international: {
          title: 'Travaillez-vous avec des clients internationaux?',
          content: 'Oui, nous travaillons avec des organisations globalement. Notre équipe a de l\'expérience dans plusieurs régions et environnements réglementaires.'
        },
        confidentiality: {
          title: 'Comment gérez-vous les informations confidentielles?',
          content: 'Nous maintenons une stricte confidentialité pour toutes les informations des clients. Nous pouvons signer des accords de confidentialité avant des discussions détaillées si nécessaire.'
        },
        preparation: {
          title: 'Comment dois-je me préparer pour une consultation initiale?',
          content: 'Avoir une compréhension générale de vos défis et objectifs de sécurité actuels nous aidera à tirer le meilleur parti de notre conversation initiale.'
        }
      }
    },
    resources: {
      title: 'Ressources',
      subtitle: 'Insights, outils et recherche pour vous aider à renforcer votre résilience cyber.',
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
        title: 'Tags',
        compliance: 'Conformité',
        risk: 'Gestion des Risques',
        leadership: 'Leadership Exécutif',
        technology: 'Technologie'
      },
      noResults: {
        title: 'Aucun Résultat Trouvé',
        message: 'Essayez d\'ajuster votre recherche ou vos critères de filtre pour trouver ce que vous cherchez.'
      },
      newsletter: {
        title: 'Abonnez-vous à Notre Newsletter',
        description: 'Restez informé des derniers insights, recherches et ressources directement dans votre boîte de réception.',
        emailPlaceholder: 'Votre adresse email',
        subscribe: 'S\'abonner',
        privacy: 'Nous respectons votre vie privée et ne partagerons jamais vos informations.'
      }
    },
    footer: {
      services: {
        title: 'Services',
        boardBriefings: 'Briefings pour Conseils',
        mAndA: 'Due Diligence M&A',
        crisis: 'Leadership de Crise',
        vCISO: 'RSSI Virtuel'
      },
      resources: {
        title: 'Ressources',
        steel: 'Cadre STEEL™',
        riskRadar: 'Radar de Risque',
        dashboard: 'Tableau de Bord Exécutif',
        library: 'Bibliothèque de Ressources',
        about: 'À Propos de Nous'
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
    },
    notFound: {
      title: 'Page Non Trouvée',
      message: 'La page que vous recherchez a peut-être été supprimée, a changé de nom ou est temporairement indisponible.',
      returnHome: 'Retourner à la Page d\'Accueil',
      goBack: 'Revenir en Arrière',
      lookingFor: 'Vous cherchez quelque chose de spécifique?',
      searchPlaceholder: 'Rechercher sur notre site web',
      popularPages: 'Pages Populaires',
      needAssistance: 'Besoin d\'aide?',
      contactUs: 'Contactez notre équipe'
    }
  }
};