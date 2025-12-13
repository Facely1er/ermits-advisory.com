import { RiskDimension, Threat, StrategicAction, Metric, Service, SteelDimension, Recommendation } from '../types';

/**
 * DEMO DATA - Example data for demonstration purposes only
 * 
 * NOTE: All values in this file are example/demo data and do not represent
 * actual client assessments or real-world metrics. In production, this data
 * would be replaced with actual client data from authenticated API calls.
 * 
 * Data Sources:
 * - Risk values: Example ranges based on industry averages (sources: NIST, ISO 27001 frameworks)
 * - Threat types: Based on common threat categories (sources: CISA, ENISA threat landscape reports)
 * - Strategic actions: Example recommendations based on industry best practices
 */

// STEEL Dimensions - EXAMPLE DATA
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

// Risk Dimensions for Dashboard - EXAMPLE DATA
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

// Dashboard Metrics - EXAMPLE DATA
// Note: These are sample metrics for demonstration. Real metrics would come from actual security monitoring systems.
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

// Threat Intelligence - EXAMPLE DATA
// Note: Threat types are based on common categories from CISA and ENISA reports.
// Actual threat data would come from real-time threat intelligence feeds.
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

// Strategic Actions - EXAMPLE DATA
// Note: Impact percentages are illustrative examples. Actual impact varies by organization,
// implementation quality, and threat landscape. Sources: NIST Cybersecurity Framework,
// CIS Controls, industry best practices.
export const strategicActions: StrategicAction[] = [
  {
    id: '1',
    priority: 'Critical',
    action: 'Implement multi-factor authentication across all systems',
    impact: 'Significantly reduces account compromise risk (MFA effectiveness: ~99% according to Microsoft Security Intelligence Report)',
    status: 'In Progress'
  },
  {
    id: '2',
    priority: 'High',
    action: 'Update incident response plan for ransomware scenarios',
    impact: 'Can reduce potential downtime through improved response procedures (varies by organization)',
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
    impact: 'Can reduce successful phishing attempts (effectiveness varies by solution and implementation)',
    status: 'Not Started'
  }
];

// Services
export const services: Service[] = [
  {
    id: 'steel-framework',
    title: 'STEEL™ Framework',
    description: 'Comprehensive strategic risk assessment methodology for cybersecurity',
    features: [
      'Six-dimensional risk analysis (Political, Economic, Social, Technology, Environmental, Legal)',
      'Interactive risk visualization and modeling',
      'Scenario-based impact analysis',
      'Executive-ready briefing materials',
      'Continuous risk monitoring framework'
    ],
    icon: 'shield'
  },
  {
    id: 'vciso',
    title: 'Virtual CISO',
    description: 'Executive-level security leadership without the full-time commitment',
    features: [
      'Strategic security planning with STEEL™',
      'Board and executive communication',
      'Security program development',
      'STEEL-based risk diagnostics',
      'Compliance and governance oversight'
    ],
    icon: 'user'
  },
  {
    id: 'executive-dashboard',
    title: 'Executive Dashboard Suite',
    description: 'Real-time risk intelligence and strategic insights platform',
    features: [
      'Live STEEL™ risk radar visualization',
      'Executive KPI tracking and metrics',
      'Threat intelligence integration',
      'Strategic action recommendations',
      'Customizable board-ready reports'
    ],
    icon: 'presentation'
  }
];

// Risk Radar Recommendations - EXAMPLE DATA
// Note: Impact statements are illustrative. Actual results vary based on implementation
// and organizational context.
export const recommendations: Recommendation[] = [
  {
    id: '1',
    priority: 'Critical',
    action: 'Implement enhanced data protection for sensitive customer information',
    impact: 'Reduces data breach risk (effectiveness depends on implementation scope and controls)',
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
    title: 'STEEL™ Risk Diagnostic',
    subtitle: 'Holistic view of organizational risk',
    content: 'Detailed diagnostic of risk across all six STEEL dimensions with comparative industry benchmarks.'
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