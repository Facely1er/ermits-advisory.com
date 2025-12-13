/**
 * STEEL™ Diagnostic Service
 * 
 * Handles reading, writing, and managing STEEL diagnostic data
 * from localStorage and JSON imports.
 */

import {
  SteelAssessmentData,
  FactorScores,
  SteelInsights,
  SteelRecommendation,
  SteelRiskLevel,
  SteelPriority,
  SteelFactor,
  SteelAssessmentStorage,
} from '../types/steelAssessment';

const STORAGE_KEY = 'steel_assessment';
const STORAGE_EVENT_KEY = 'steel_assessment_updated';

/**
 * Get STEEL diagnostic data from localStorage
 */
export function getSteelAssessmentFromStorage(): SteelAssessmentData | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored);
    
    // If it's the raw question answers, we need to calculate results
    if (data.q1 || data.q2) {
      return calculateResultsFromAnswers(data);
    }

    // If it's already calculated results, validate and return
    if (validateSteelData(data)) {
      return data as SteelAssessmentData;
    }

    return null;
  } catch (error) {
    console.error('Error reading STEEL diagnostic from storage:', error);
    return null;
  }
}

/**
 * Calculate diagnostic results from question answers
 * This replicates the logic from the HTML diagnostic
 */
function calculateResultsFromAnswers(answers: SteelAssessmentStorage): SteelAssessmentData {
  const factorScores: FactorScores = {
    political: 0,
    economic: 0,
    social: 0,
    technological: 0,
    environmental: 0,
    legal: 0,
  };

  const factorQuestionCounts: FactorScores = {
    political: 0,
    economic: 0,
    social: 0,
    technological: 0,
    environmental: 0,
    legal: 0,
  };

  // Political: Q1-Q7 + Q43 (8 questions)
  for (let i = 1; i <= 7; i++) {
    const val = answers[`q${i}`];
    if (val) {
      factorScores.political += parseInt(val);
      factorQuestionCounts.political++;
    }
  }
  if (answers.q43) {
    factorScores.political += parseInt(answers.q43);
    factorQuestionCounts.political++;
  }

  // Economic: Q8-Q14 (7 questions)
  for (let i = 8; i <= 14; i++) {
    const val = answers[`q${i}`];
    if (val) {
      factorScores.economic += parseInt(val);
      factorQuestionCounts.economic++;
    }
  }

  // Social: Q15-Q21 (7 questions)
  for (let i = 15; i <= 21; i++) {
    const val = answers[`q${i}`];
    if (val) {
      factorScores.social += parseInt(val);
      factorQuestionCounts.social++;
    }
  }

  // Technological: Q22-Q28 + Q44-Q45 (9 questions)
  for (let i = 22; i <= 28; i++) {
    const val = answers[`q${i}`];
    if (val) {
      factorScores.technological += parseInt(val);
      factorQuestionCounts.technological++;
    }
  }
  if (answers.q44) {
    factorScores.technological += parseInt(answers.q44);
    factorQuestionCounts.technological++;
  }
  if (answers.q45) {
    factorScores.technological += parseInt(answers.q45);
    factorQuestionCounts.technological++;
  }

  // Environmental: Q29-Q35 + Q46 (8 questions)
  for (let i = 29; i <= 35; i++) {
    const val = answers[`q${i}`];
    if (val) {
      factorScores.environmental += parseInt(val);
      factorQuestionCounts.environmental++;
    }
  }
  if (answers.q46) {
    factorScores.environmental += parseInt(answers.q46);
    factorQuestionCounts.environmental++;
  }

  // Legal: Q36-Q42 (7 questions)
  for (let i = 36; i <= 42; i++) {
    const val = answers[`q${i}`];
    if (val) {
      factorScores.legal += parseInt(val);
      factorQuestionCounts.legal++;
    }
  }

  // Normalize scores to 0-100 scale
  const normalizedScores: FactorScores = {
    political: 0,
    economic: 0,
    social: 0,
    technological: 0,
    environmental: 0,
    legal: 0,
  };

  (Object.keys(factorScores) as SteelFactor[]).forEach((factor) => {
    const maxScore = factorQuestionCounts[factor] * 10;
    normalizedScores[factor] = maxScore > 0
      ? Math.round((factorScores[factor] / maxScore) * 100)
      : 0;
  });

  // Calculate composite score with weights
  const weights = {
    political: 1.0,
    economic: 1.0,
    social: 1.0,
    technological: 1.2,
    environmental: 0.9,
    legal: 1.1,
  };

  let weightedSum = 0;
  let totalWeight = 0;
  (Object.keys(normalizedScores) as SteelFactor[]).forEach((factor) => {
    weightedSum += normalizedScores[factor] * weights[factor];
    totalWeight += weights[factor];
  });

  const composite = Math.round(weightedSum / totalWeight);

  return {
    factorScores: normalizedScores,
    composite,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Import STEEL diagnostic from JSON string
 */
export function importSteelAssessment(jsonData: string): SteelAssessmentData {
  try {
    const data = JSON.parse(jsonData);

    // If it's question answers, calculate results
    if (data.q1 || data.q2) {
      const calculated = calculateResultsFromAnswers(data);
      saveSteelAssessment(calculated);
      return calculated;
    }

    // If it's already results, validate and save
    if (validateSteelData(data)) {
      const assessmentData = data as SteelAssessmentData;
      saveSteelAssessment(assessmentData);
      return assessmentData;
    }

    throw new Error('Invalid STEEL diagnostic data format');
  } catch (error) {
    console.error('Error importing STEEL diagnostic:', error);
    throw new Error('Failed to import STEEL diagnostic. Please ensure the file is valid JSON.');
  }
}

/**
 * Save STEEL diagnostic data to localStorage
 */
export function saveSteelAssessment(data: SteelAssessmentData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    // Trigger custom event for auto-refresh
    window.dispatchEvent(new CustomEvent(STORAGE_EVENT_KEY, { detail: data }));
  } catch (error) {
    console.error('Error saving STEEL diagnostic to storage:', error);
    throw new Error('Failed to save assessment data. Please check browser storage permissions.');
  }
}

/**
 * Clear STEEL diagnostic data from localStorage
 */
export function clearSteelAssessment(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(STORAGE_EVENT_KEY, { detail: null }));
  } catch (error) {
    console.error('Error clearing STEEL diagnostic from storage:', error);
  }
}

/**
 * Validate STEEL diagnostic data structure
 */
export function validateSteelData(data: unknown): data is SteelAssessmentData {
  if (!data || typeof data !== 'object') return false;

  const candidate = data as Record<string, unknown>;

  // Check for required fields
  if (!candidate.factorScores || typeof candidate.composite !== 'number') return false;

  // Validate factor scores
  const requiredFactors: SteelFactor[] = [
    'political',
    'economic',
    'social',
    'technological',
    'environmental',
    'legal',
  ];

  const factorScores = candidate.factorScores as Record<string, unknown>;
  for (const factor of requiredFactors) {
    const score = factorScores[factor];
    if (
      typeof score !== 'number' ||
      score < 0 ||
      score > 100
    ) {
      return false;
    }
  }

  // Validate composite score
  const composite = candidate.composite as number;
  if (composite < 0 || composite > 100) return false;

  return true;
}

/**
 * Watch for localStorage changes and call callback
 */
export function watchSteelStorage(
  callback: (data: SteelAssessmentData | null) => void
): () => void {
  // Listen for custom events
  const handleStorageEvent = (event: Event) => {
    const customEvent = event as CustomEvent<SteelAssessmentData | null>;
    callback(customEvent.detail);
  };

  // Listen for storage events from other tabs/windows
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      try {
        const data = event.newValue ? JSON.parse(event.newValue) : null;
        callback(data);
      } catch (error) {
        console.error('Error parsing storage event data:', error);
        callback(null);
      }
    }
  };

  window.addEventListener(STORAGE_EVENT_KEY, handleStorageEvent);
  window.addEventListener('storage', handleStorageChange);

  // Return cleanup function
  return () => {
    window.removeEventListener(STORAGE_EVENT_KEY, handleStorageEvent);
    window.removeEventListener('storage', handleStorageChange);
  };
}

/**
 * Generate insights from assessment data
 * This replicates the logic from the HTML assessment
 */
export function generateInsights(
  factorScores: FactorScores,
  composite: number
): SteelInsights {
  const insights: SteelInsights = {
    executiveSummary: '',
    keyInsights: [],
    strengths: [],
    opportunities: [],
    riskContext: '',
  };

  const riskLevel: SteelRiskLevel =
    composite >= 80 ? 'LOW' : composite >= 60 ? 'MODERATE' : composite >= 40 ? 'ELEVATED' : 'HIGH';

  insights.executiveSummary = `Your organization's composite STEEL score of ${composite} indicates a ${riskLevel.toLowerCase()} risk posture. `;

  const lowFactors = Object.entries(factorScores).filter(([, score]) => score < 60);
  const highFactors = Object.entries(factorScores).filter(([, score]) => score >= 80);

  if (lowFactors.length > 0) {
    insights.executiveSummary += `Critical attention is needed in ${lowFactors.length} PESTEL factor${lowFactors.length > 1 ? 's' : ''} (${lowFactors.map(([f]) => f.charAt(0).toUpperCase() + f.slice(1)).join(', ')}). `;
  }
  if (highFactors.length > 0) {
    insights.executiveSummary += `Strong performance is evident in ${highFactors.length} area${highFactors.length > 1 ? 's' : ''} (${highFactors.map(([f]) => f.charAt(0).toUpperCase() + f.slice(1)).join(', ')}).`;
  }

  // Key Insights
  Object.entries(factorScores).forEach(([factor, score]) => {
    const factorName = factor.charAt(0).toUpperCase() + factor.slice(1);
    if (score < 40) {
      insights.keyInsights.push({
        factor: factor as SteelFactor,
        text: `${factorName} factor shows critical vulnerabilities (${score}/100). Immediate action required to address regulatory, operational, and financial exposure.`,
        priority: 'CRITICAL',
      });
    } else if (score < 60) {
      insights.keyInsights.push({
        factor: factor as SteelFactor,
        text: `${factorName} factor indicates significant gaps (${score}/100). Strategic improvements needed to enhance resilience and reduce risk exposure.`,
        priority: 'HIGH',
      });
    } else if (score >= 80) {
      insights.strengths.push({
        factor: factor as SteelFactor,
        text: `${factorName} demonstrates mature capabilities (${score}/100). Consider leveraging this strength to support improvements in other areas.`,
      });
    }
  });

  // Opportunities
  Object.entries(factorScores).forEach(([factor, score]) => {
    if (score >= 60 && score < 80) {
      const factorName = factor.charAt(0).toUpperCase() + factor.slice(1);
      insights.opportunities.push({
        factor: factor as SteelFactor,
        text: `${factorName} shows good foundation (${score}/100). Optimization opportunities exist to reach best-in-class maturity.`,
      });
    }
  });

  // Risk Context
  if (composite < 40) {
    insights.riskContext =
      'Your organization faces significant strategic cybersecurity risks across multiple dimensions. Immediate executive attention and resource allocation are critical to prevent potential regulatory violations, financial losses, and operational disruptions.';
  } else if (composite < 60) {
    insights.riskContext =
      'Your organization has foundational security controls but significant gaps remain. Strategic investments and programmatic improvements are needed to enhance resilience and reduce exposure to emerging threats.';
  } else if (composite < 80) {
    insights.riskContext =
      'Your organization demonstrates a developing security program with managed processes. Focused optimization efforts can elevate your security posture to industry-leading levels.';
  } else {
    insights.riskContext =
      'Your organization maintains a mature and resilient security posture. Continue monitoring emerging threats and evolving best practices to maintain this strong position.';
  }

  return insights;
}

/**
 * Get risk level from composite score
 */
export function getRiskLevel(composite: number): SteelRiskLevel {
  if (composite >= 80) return 'LOW';
  if (composite >= 60) return 'MODERATE';
  if (composite >= 40) return 'ELEVATED';
  return 'HIGH';
}

/**
 * Generate recommendations from factor scores
 * This replicates the logic from the HTML assessment
 */
export function generateRecommendations(factorScores: FactorScores): SteelRecommendation[] {
  const recommendations: SteelRecommendation[] = [];
  const factorNames: Record<SteelFactor, string> = {
    political: 'Political',
    economic: 'Economic',
    social: 'Social',
    technological: 'Technological',
    environmental: 'Environmental',
    legal: 'Legal',
  };

  const recommendationLibrary: Record<
    SteelFactor,
    Record<SteelPriority, string[]>
  > = {
    political: {
      CRITICAL: [
        'Establish dedicated regulatory compliance monitoring program with automated intelligence feeds',
        'Develop proactive government relations strategy with regular stakeholder engagement',
        'Create regulatory change management process with impact assessment framework',
        'Implement cross-border data transfer compliance controls and verification mechanisms',
        'Consider ERMITS CyberCorrect™ platform for privacy exposure and regulatory gaps',
      ],
      HIGH: [
        'Enhance regulatory tracking with quarterly compliance reviews and gap analysis',
        'Strengthen relationships with key regulatory bodies through industry group participation',
        'Develop predictive compliance roadmap for upcoming regulatory changes',
        'Integrate regulatory requirements into enterprise risk management framework',
      ],
      MODERATE: [
        'Optimize existing compliance processes with automation and analytics',
        'Expand regulatory intelligence sources and monitoring capabilities',
        'Enhance executive communication with government stakeholders',
      ],
      LOW: [
        'Maintain regulatory excellence through continuous monitoring and early adoption',
        'Share best practices with industry peers and regulatory bodies',
        'Consider influencing policy development through thought leadership',
      ],
    },
    economic: {
      CRITICAL: [
        'Implement financial risk quantification framework (e.g., FAIR, Monte Carlo simulation)',
        'Develop security ROI metrics tied to business outcomes and revenue protection',
        'Establish cyber insurance program with comprehensive coverage and risk transfer strategy',
        'Create budget protection mechanisms to prevent security funding cuts during downturns',
        'Build business case for security investments with clear financial impact analysis',
      ],
      HIGH: [
        'Enhance financial risk modeling with regular quantification exercises',
        'Align security investments with business strategy and competitive advantage',
        'Optimize cyber insurance portfolio with regular policy reviews',
        'Develop contingency plans for economic downturn scenarios',
      ],
      MODERATE: [
        'Refine financial impact measurement with comprehensive cost analysis',
        'Enhance investor communication about security value proposition',
        'Strengthen vendor financial stability assessment processes',
      ],
      LOW: [
        'Maintain financial risk excellence through continuous optimization',
        'Leverage security as competitive differentiator in market positioning',
        'Share financial risk management best practices across organization',
      ],
    },
    social: {
      CRITICAL: [
        'Launch comprehensive security awareness program with regular training and phishing simulations',
        'Implement insider threat program with user behavior analytics and anomaly detection',
        'Establish security culture initiatives with leadership participation and accountability',
        'Deploy zero trust architecture for remote work security',
        'Integrate security into diversity and inclusion talent acquisition strategies',
        'Consider ERMITS EduSoluce™ platform for training aligned to your risk profile',
        'Consider ERMITS SocialCaution™ platform for public-facing privacy understanding',
      ],
      HIGH: [
        'Enhance security awareness with targeted training and engagement metrics',
        'Strengthen insider threat detection with behavioral analytics tools',
        'Improve leadership security commitment through executive training and communication',
        'Optimize remote work security with zero trust principles',
      ],
      MODERATE: [
        'Refine security culture programs with advanced engagement techniques',
        'Enhance incident communication with proactive transparency',
        'Implement security team wellness programs to address burnout',
      ],
      LOW: [
        'Maintain security culture excellence through continuous innovation',
        'Share security culture best practices as industry leader',
        'Leverage security culture as talent attraction differentiator',
      ],
    },
    technological: {
      CRITICAL: [
        'Establish security-by-design process for emerging technology adoption',
        'Implement threat hunting program for zero-day vulnerability detection',
        'Deploy DevSecOps pipeline with automated security testing and validation',
        'Implement API security gateway with comprehensive lifecycle management',
        'Deploy cloud security posture management (CSPM) tools for multi-cloud environments',
        'Consider ERMITS CyberCaution™ platform for ransomware readiness and threat forecasts',
        'Consider ERMITS TechnoSoluce™ platform for SBOM risk and component vulnerability management',
      ],
      HIGH: [
        'Enhance emerging technology security with integrated assessment processes',
        'Strengthen zero-day response with rapid patch deployment capabilities',
        'Optimize DevSecOps integration with advanced automation',
        'Improve cloud security with continuous compliance validation',
      ],
      MODERATE: [
        'Refine technology security with advanced orchestration (SOAR) capabilities',
        'Enhance IoT/OT security with dedicated program management',
        'Optimize API security with full lifecycle protection',
      ],
      LOW: [
        'Maintain technology security leadership through continuous innovation',
        'Share security innovation best practices with industry',
        'Leverage security technology as competitive advantage',
      ],
    },
    environmental: {
      CRITICAL: [
        'Integrate climate-related cybersecurity risks into business continuity planning',
        'Develop sustainable IT and green cybersecurity initiatives',
        'Establish ESG cyber risk disclosure framework with detailed metrics',
        'Implement environmental monitoring system security with specialized controls',
        'Create climate-event cyber resilience planning with adaptive infrastructure',
        'Consider ERMITS CyberSoluce™ platform for NIST CSF–aligned maturity mapping',
        'Consider ERMITS ImpactSoluce™ platform for sustainability, ESG, and supply chain climate risks',
      ],
      HIGH: [
        'Enhance climate-cyber risk integration with comprehensive planning',
        'Strengthen sustainable IT practices with energy efficiency focus',
        'Improve ESG reporting with detailed cyber risk metrics',
        'Optimize environmental compliance integration with unified governance',
      ],
      MODERATE: [
        'Refine environmental security with advanced monitoring capabilities',
        'Enhance climate resilience with scenario-based planning',
        'Strengthen sustainable supply chain cybersecurity requirements',
      ],
      LOW: [
        'Maintain environmental security excellence through continuous improvement',
        'Share sustainable cybersecurity best practices as industry leader',
        'Leverage green IT as competitive differentiator',
      ],
    },
    legal: {
      CRITICAL: [
        'Implement comprehensive data privacy program aligned with GDPR, CCPA, and other regulations',
        'Develop cyber liability and legal risk transfer strategy with insurance integration',
        'Establish breach litigation preparedness with dedicated response team and forensic protocols',
        'Create multi-jurisdictional compliance framework with automated jurisdiction mapping',
        'Implement intellectual property protection program with multi-layered security',
        'Consider ERMITS CyberCorrect™ platform for privacy exposure and regulatory gaps',
        'Consider ERMITS VendorSoluce™ platform for vendor exposure scoring & TPRM',
        'Consider ERMITS SocialCaution™ platform for public-facing privacy understanding',
      ],
      HIGH: [
        'Enhance privacy compliance with privacy-by-design principles',
        'Strengthen legal risk management with comprehensive contract governance',
        'Improve breach litigation readiness with evidence preservation protocols',
        'Optimize cross-border compliance with global program management',
      ],
      MODERATE: [
        'Refine legal protections with advanced IP security measures',
        'Enhance contract management with automated SLA monitoring',
        'Strengthen employment law integration with insider threat programs',
      ],
      LOW: [
        'Maintain legal compliance excellence through continuous monitoring',
        'Share legal risk management best practices as industry leader',
        'Leverage compliance excellence as competitive advantage',
      ],
    },
  };

  (Object.entries(factorScores) as [SteelFactor, number][]).forEach(([factor, score]) => {
    let priority: SteelPriority;
    let actions: string[];
    let timeline: string;

    if (score < 40) {
      priority = 'CRITICAL';
      actions = recommendationLibrary[factor].CRITICAL;
      timeline = '30 days';
    } else if (score < 60) {
      priority = 'HIGH';
      actions = recommendationLibrary[factor].HIGH;
      timeline = '60-90 days';
    } else if (score < 80) {
      priority = 'MODERATE';
      actions = recommendationLibrary[factor].MODERATE;
      timeline = '90-180 days';
    } else {
      priority = 'LOW';
      actions = recommendationLibrary[factor].LOW;
      timeline = 'Ongoing';
    }

    recommendations.push({
      factor,
      factorName: factorNames[factor],
      score,
      priority,
      timeline,
      actions,
      quickWins: actions.slice(0, 2),
      longTerm: actions.slice(2),
    });
  });

  // Sort by priority (critical first, then by score)
  const priorityOrder: Record<SteelPriority, number> = {
    CRITICAL: 0,
    HIGH: 1,
    MODERATE: 2,
    LOW: 3,
  };

  recommendations.sort((a, b) => {
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return a.score - b.score;
  });

  return recommendations;
}

