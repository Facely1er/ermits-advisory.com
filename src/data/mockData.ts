import { RiskDimension, Threat, StrategicAction, Metric, Service, SteelDimension, Recommendation } from '../types';

// STEEL Dimensions
export const steelDimensions: SteelDimension[] = [
  {
    id: 'political',
    title: 'Political',
    description: 'Regulatory landscape, compliance requirements, and geopolitical factors that impact cybersecurity posture.',
    value: 65,
    color: '#4c72b0'
  },
  {
    id: 'economic',
    title: 'Economic',
    description: 'Financial impact, market conditions, and competitive landscape that influence security investments.',
    value: 78,
    color: '#dd8452'
  },
  {
    id: 'social',
    title: 'Social',
    description: 'Reputation management, public perception, and social responsibility factors.',
    value: 82,
    color: '#55a868'
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Infrastructure, digital transformation, and technical vulnerabilities.',
    value: 45,
    color: '#c44e52'
  },
  {
    id: 'environmental',
    title: 'Environmental',
    description: 'Physical security, natural risks, and environmental factors.',
    value: 72,
    color: '#8172b3'
  },
  {
    id: 'legal',
    title: 'Legal',
    description: 'Contractual obligations, liability, and legal requirements.',
    value: 58,
    color: '#937860'
  }
];

// Risk Dimensions for Dashboard
export const riskDimensions: RiskDimension[] = [
  {
    id: 'political',
    name: 'Political',
    value: 65,
    trend: 'down',
    color: '#4c72b0'
  },
  {
    id: 'economic',
    name: 'Economic',
    value: 78,
    trend: 'up',
    color: '#dd8452'
  },
  {
    id: 'social',
    name: 'Social',
    value: 82,
    trend: 'down',
    color: '#55a868'
  },
  {
    id: 'technology',
    name: 'Technology',
    value: 45,
    trend: 'up',
    color: '#c44e52'
  },
  {
    id: 'environmental',
    name: 'Environmental',
    value: 72,
    trend: 'stable',
    color: '#8172b3'
  },
  {
    id: 'legal',
    name: 'Legal',
    value: 58,
    trend: 'down',
    color: '#937860'
  }
];

// Dashboard Metrics
export const metrics: Metric[] = [
  {
    id: 'vulnerabilities',
    name: 'Active Vulnerabilities',
    value: 37,
    change: -12,
    icon: 'shield'
  },
  {
    id: 'threats',
    name: 'Emerging Threats',
    value: 14,
    change: 3,
    icon: 'alert-triangle'
  },
  {
    id: 'incidents',
    name: 'Recent Incidents',
    value: 2,
    change: -1,
    icon: 'zap'
  },
  {
    id: 'compliance',
    name: 'Compliance Status',
    value: 94,
    change: 6,
    icon: 'check-circle'
  }
];

// Threat Intelligence
export const threats: Threat[] = [
  {
    id: '1',
    type: 'Ransomware',
    source: 'Criminal Group',
    impact: 'Critical',
    timeline: '0-30 days'
  },
  {
    id: '2',
    type: 'Phishing Campaign',
    source: 'Unknown',
    impact: 'Medium',
    timeline: 'Active'
  },
  {
    id: '3',
    type: 'Zero-day Vulnerability',
    source: 'Software Vendor',
    impact: 'High',
    timeline: '0-14 days'
  },
  {
    id: '4',
    type: 'Supply Chain Risk',
    source: 'Third-party Vendor',
    impact: 'Medium',
    timeline: '30-90 days'
  },
  {
    id: '5',
    type: 'Insider Threat',
    source: 'Internal',
    impact: 'High',
    timeline: 'Ongoing'
  }
];

// Strategic Actions
export const strategicActions: StrategicAction[] = [
  {
    id: '1',
    priority: 'Critical',
    action: 'Implement multi-factor authentication across all systems',
    impact: 'Reduces account compromise risk by 99%',
    status: 'In Progress'
  },
  {
    id: '2',
    priority: 'High',
    action: 'Update incident response plan for ransomware scenarios',
    impact: 'Reduces potential downtime by 72%',
    status: 'Completed'
  },
  {
    id: '3',
    priority: 'Medium',
    action: 'Conduct executive tabletop exercise',
    impact: 'Improves executive decision-making during incidents',
    status: 'Not Started'
  },
  {
    id: '4',
    priority: 'High',
    action: 'Review and update third-party security requirements',
    impact: 'Reduces supply chain risk exposure',
    status: 'In Progress'
  },
  {
    id: '5',
    priority: 'Medium',
    action: 'Implement enhanced email security controls',
    impact: 'Reduces successful phishing attempts by 85%',
    status: 'Not Started'
  }
];

// Services
export const services: Service[] = [
  {
    id: 'board-briefings',
    title: 'Board Briefings',
    description: 'Clear, actionable cybersecurity briefings for board members',
    features: [
      'Non-technical language for clear understanding',
      'Strategic focus on business impact',
      'Actionable recommendations',
      'Benchmark comparisons',
      'Trend analysis and forecasting'
    ],
    icon: 'presentation'
  },
  {
    id: 'ma-due-diligence',
    title: 'M&A Due Diligence',
    description: 'Comprehensive cyber risk assessment for acquisitions and mergers',
    features: [
      'Pre-acquisition security assessment',
      'Technical and non-technical risk evaluation',
      'Integration risk analysis',
      'Post-merger security strategy',
      'Value protection recommendations'
    ],
    icon: 'search'
  },
  {
    id: 'crisis-leadership',
    title: 'Crisis Leadership',
    description: 'Strategic guidance during cybersecurity incidents',
    features: [
      'Executive crisis communication',
      'Strategic decision support',
      'Stakeholder management',
      'Regulatory and legal guidance',
      'Reputation management'
    ],
    icon: 'shield'
  },
  {
    id: 'vciso',
    title: 'Virtual CISO',
    description: 'Executive-level security leadership without the full-time commitment',
    features: [
      'Strategic security planning',
      'Board and executive communication',
      'Security program development',
      'Vendor and technology selection',
      'Compliance oversight'
    ],
    icon: 'user'
  }
];

// Risk Radar Recommendations
export const recommendations: Recommendation[] = [
  {
    id: '1',
    priority: 'Critical',
    action: 'Implement enhanced data protection for sensitive customer information',
    impact: 'Reduces data breach risk by 78%',
    effort: 'Medium'
  },
  {
    id: '2',
    priority: 'High',
    action: 'Establish third-party risk management program',
    impact: 'Improves visibility into supply chain risks',
    effort: 'High'
  },
  {
    id: '3',
    priority: 'Medium',
    action: 'Update security awareness training with industry-specific scenarios',
    impact: 'Reduces successful social engineering attempts by 62%',
    effort: 'Low'
  },
  {
    id: '4',
    priority: 'High',
    action: 'Implement compliance monitoring automation',
    impact: 'Reduces manual effort and improves accuracy',
    effort: 'Medium'
  },
  {
    id: '5',
    priority: 'Critical',
    action: 'Enhance network segmentation to isolate critical systems',
    impact: 'Limits lateral movement during compromise',
    effort: 'High'
  }
];

// Scenarios for Risk Radar
export const scenarios = {
  current: {
    political: 65,
    economic: 78,
    social: 82,
    technology: 45,
    environmental: 72,
    legal: 58
  },
  breach: {
    political: 85,
    economic: 92,
    social: 95,
    technology: 78,
    environmental: 72,
    legal: 90
  },
  investment: {
    political: 45,
    economic: 52,
    social: 55,
    technology: 30,
    environmental: 50,
    legal: 42
  },
  industry: {
    political: 72,
    economic: 68,
    social: 75,
    technology: 62,
    environmental: 65,
    legal: 70
  }
};

// Board presentation slides
export const presentationSlides = [
  {
    id: 'slide1',
    title: 'Cybersecurity Executive Briefing',
    subtitle: 'Strategic analysis and recommendations',
    content: 'Comprehensive overview of the organization\'s cybersecurity posture with executive-level insights.'
  },
  {
    id: 'slide2',
    title: 'Current Risk Landscape',
    subtitle: 'Overview of the threat environment',
    content: 'Analysis of the current cyber threat landscape and its potential impact on the organization.'
  },
  {
    id: 'slide3',
    title: 'STEEL™ Risk Assessment',
    subtitle: 'Holistic view of organizational risk',
    content: 'Detailed assessment of risk across all six STEEL dimensions with comparative industry benchmarks.'
  },
  {
    id: 'slide4',
    title: 'Strategic Vulnerabilities',
    subtitle: 'Key areas requiring attention',
    content: 'Identification of critical vulnerabilities that pose significant risk to strategic objectives.'
  },
  {
    id: 'slide5',
    title: 'Recommended Actions',
    subtitle: 'Prioritized initiatives for risk reduction',
    content: 'Prioritized recommendations for addressing identified risks with expected outcomes.'
  },
  {
    id: 'slide6',
    title: 'Investment Considerations',
    subtitle: 'Resource allocation for maximum impact',
    content: 'Analysis of investment options with expected return on security investment calculations.'
  },
  {
    id: 'slide7',
    title: 'Next Steps and Timeline',
    subtitle: 'Implementation roadmap',
    content: 'Proposed implementation roadmap with key milestones and resource requirements.'
  }
];

// Sample resources with downloadable URLs
export const resourcesData = [
  {
    id: 'wp-001',
    title: 'The Executive\'s Guide to Modern Cyber Risk Management',
    description: 'A comprehensive guide for C-suite executives on implementing effective cyber risk management strategies using the STEEL methodology.',
    category: 'whitepapers' as const,
    tags: ['steel', 'risk', 'leadership'] as const,
    date: '2025-04-15',
    readTime: '25 min',
    downloadUrl: 'https://www.africau.edu/images/default/sample.pdf',
    imageUrl: '/background-copy.jpg',
    featured: true
  },
  {
    id: 'art-001',
    title: 'Five Critical Questions Every Board Should Ask About Cybersecurity',
    description: 'Learn the essential questions board members should be asking to fulfill their cyber governance responsibilities effectively.',
    category: 'articles' as const,
    tags: ['leadership', 'compliance'] as const,
    date: '2025-03-22',
    readTime: '12 min',
    imageUrl: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cs-001',
    title: 'How a Global Financial Institution Reduced Risk Exposure by 67%',
    description: 'A detailed case study of how our STEEL methodology helped a major financial institution transform their cyber risk posture.',
    category: 'casestudies' as const,
    tags: ['steel', 'risk', 'compliance'] as const,
    date: '2025-02-10',
    readTime: '18 min',
    downloadUrl: 'https://www.africau.edu/images/default/sample.pdf',
    imageUrl: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'web-001',
    title: 'Navigating Geopolitical Cyber Risks in a Turbulent World',
    description: 'An on-demand webinar featuring experts discussing how political factors impact cybersecurity strategy and resilience.',
    category: 'webinars' as const,
    tags: ['steel', 'risk'] as const,
    date: '2025-01-30',
    imageUrl: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'art-002',
    title: 'Emerging Technology Risks: What You Need to Know About AI Security',
    description: 'An analysis of the rapidly evolving security landscape around artificial intelligence and machine learning technologies.',
    category: 'articles' as const,
    tags: ['technology', 'risk'] as const,
    date: '2025-03-05',
    readTime: '15 min',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'wp-002',
    title: 'Building Cyber Resilience Through the STEEL Framework',
    description: 'A detailed technical paper on implementing the STEEL methodology to enhance organizational resilience against cyber threats.',
    category: 'whitepapers' as const,
    tags: ['steel', 'technology'] as const,
    date: '2025-02-28',
    readTime: '30 min',
    downloadUrl: 'https://www.africau.edu/images/default/sample.pdf',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'cs-002',
    title: 'Securing the Supply Chain: A Manufacturing Success Story',
    description: 'How a global manufacturing firm secured their complex supply chain using our advisory services and STEEL methodology.',
    category: 'casestudies' as const,
    tags: ['risk', 'technology'] as const,
    date: '2025-01-15',
    readTime: '14 min',
    downloadUrl: 'https://www.africau.edu/images/default/sample.pdf',
    imageUrl: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'web-002',
    title: 'Regulatory Landscape 2025: Preparing for New Compliance Requirements',
    description: 'Expert panel discussion on upcoming regulatory changes and how organizations can prepare effectively.',
    category: 'webinars' as const,
    tags: ['compliance', 'leadership'] as const,
    date: '2025-03-18',
    imageUrl: 'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];