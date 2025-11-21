/**
 * Professional PDF generation utilities for toolkit assessments
 * Uses centralized PDF utilities for consistency
 */

import {
  createPDFDocument,
  addPDFHeader,
  addPDFFooter,
  addSectionHeading,
  addInfoTable,
  addDataTable,
  addTextBlock,
  checkNewPage,
  exportPDF,
  PDF_CONFIG
} from './pdfUtils';

/**
 * Generate professional PDF for Compliance Gap Analysis
 */
export function generateCompliancePDF(data: {
  organizationName: string;
  assessmentDate: string;
  selectedFramework: string;
  controls: Array<{
    id: string;
    description: string;
    category: string;
    score: number;
  }>;
  maturityPercentage: string;
  scoreDistribution: Record<number, number>;
  criticalGaps: Array<{ id: string; description: string; score: number }>;
  needsImprovement: Array<{ id: string; description: string; score: number }>;
  totalControls: number;
}): void {
  const doc = createPDFDocument();
  let yPosition = addPDFHeader(doc, 'Compliance Gap Analysis Report', undefined, PDF_CONFIG.colors.primary);

  // Assessment Information
  const assessmentInfo: Array<[string, string]> = [
    ['Organization', data.organizationName || 'Not specified'],
    ['Assessment Date', data.assessmentDate],
    ['Framework', data.selectedFramework],
    ['Maturity Score', `${data.maturityPercentage}%`]
  ];
  yPosition = addInfoTable(doc, yPosition, assessmentInfo, 'Assessment Information');

  // Executive Summary
  const summaryData: Array<[string, string]> = [
    ['Total Controls Assessed', data.totalControls.toString()],
    ['Fully Implemented (5)', data.scoreDistribution[5]?.toString() || '0'],
    ['Mostly Implemented (4)', data.scoreDistribution[4]?.toString() || '0'],
    ['Partially Implemented (3)', data.scoreDistribution[3]?.toString() || '0'],
    ['Minimally Implemented (2)', data.scoreDistribution[2]?.toString() || '0'],
    ['Not Implemented (1)', data.scoreDistribution[1]?.toString() || '0'],
    ['Critical Gaps (≤2)', data.criticalGaps.length.toString()],
    ['Needs Improvement (=3)', data.needsImprovement.length.toString()]
  ];
  yPosition = addInfoTable(doc, yPosition, summaryData, 'Executive Summary');

  // Critical Gaps
  if (data.criticalGaps.length > 0) {
    yPosition = checkNewPage(doc, yPosition, 60);
    yPosition = addSectionHeading(doc, yPosition, 'Critical Gaps Requiring Immediate Attention', PDF_CONFIG.colors.danger);

    const criticalGapsData = data.criticalGaps.map(gap => [
      gap.id,
      gap.description.substring(0, 60) + (gap.description.length > 60 ? '...' : ''),
      `${gap.score}/5`,
      getScoreLabel(gap.score)
    ]);

    yPosition = addDataTable(
      doc,
      yPosition,
      ['Control ID', 'Description', 'Score', 'Status'],
      criticalGapsData,
      undefined,
      PDF_CONFIG.colors.danger,
      {
        0: { cellWidth: 35 },
        1: { cellWidth: 'auto' },
        2: { cellWidth: 20 },
        3: { cellWidth: 40 }
      }
    );
  }

  // Detailed Control Assessment by Category
  const controlsByCategory = data.controls.reduce((acc, control) => {
    if (!acc[control.category]) {
      acc[control.category] = [];
    }
    acc[control.category].push(control);
    return acc;
  }, {} as Record<string, typeof data.controls>);

  Object.entries(controlsByCategory).forEach(([category, controls]) => {
    yPosition = checkNewPage(doc, yPosition, 60);
    yPosition = addSectionHeading(doc, yPosition, category);

    const categoryData = controls.map(control => [
      control.id,
      control.description.substring(0, 50) + (control.description.length > 50 ? '...' : ''),
      `${control.score}/5`,
      getScoreLabel(control.score)
    ]);

    yPosition = addDataTable(
      doc,
      yPosition,
      ['Control ID', 'Description', 'Score', 'Status'],
      categoryData,
      undefined,
      PDF_CONFIG.colors.primary,
      {
        0: { cellWidth: 35 },
        1: { cellWidth: 'auto' },
        2: { cellWidth: 20 },
        3: { cellWidth: 40 }
      }
    );
  });

  // Add footer
  addPDFFooter(doc);

  // Export
  const filename = `compliance-gap-analysis-${data.organizationName || 'report'}-${data.assessmentDate}`;
  exportPDF(doc, filename);
}

/**
 * Generate professional PDF for Vendor Risk Assessment
 */
export function generateVendorRiskPDF(data: {
  vendorName: string;
  assessmentDate: string;
  vendorData: Record<string, number>;
  inherentRisk: number;
  residualRisk: number;
  businessCriticality: number;
  finalScore: number;
  riskTier: { tier: number; label: string; color: string };
}): void {
  const doc = createPDFDocument();
  let yPosition = addPDFHeader(doc, 'Vendor Risk Assessment Report', undefined, PDF_CONFIG.colors.orange);

  // Vendor Information
  const vendorInfo: Array<[string, string]> = [
    ['Vendor', data.vendorName || 'Not specified'],
    ['Assessment Date', data.assessmentDate],
    ['Risk Tier', `${data.riskTier.tier} - ${data.riskTier.label}`],
    ['Final Risk Score', `${data.finalScore.toFixed(2)}/10`]
  ];
  yPosition = addInfoTable(doc, yPosition, vendorInfo, 'Vendor Information');

  // Risk Score Breakdown
  const riskBreakdown: Array<[string, string]> = [
    ['Inherent Risk', `${data.inherentRisk.toFixed(2)}/10 (40% weight)`],
    ['Residual Risk', `${data.residualRisk.toFixed(2)}/10 (30% weight)`],
    ['Business Criticality', `${data.businessCriticality.toFixed(2)}/10 (30% weight)`]
  ];
  yPosition = addInfoTable(doc, yPosition, riskBreakdown, 'Risk Score Breakdown');

  // Inherent Risk Factors
  yPosition = checkNewPage(doc, yPosition, 60);
  const inherentFactors: Array<[string, string]> = [
    ['Data Sensitivity', `${data.vendorData.dataSensitivity}/10 (35% weight)`],
    ['Data Volume', `${data.vendorData.dataVolume}/6 (15% weight)`],
    ['System Access Level', `${data.vendorData.systemAccess}/6 (25% weight)`],
    ['Regulatory Scope', `${data.vendorData.regulatoryScore}/10 (15% weight)`],
    ['Geographic Risk', `${data.vendorData.geographicRisk}/9 (10% weight)`]
  ];
  yPosition = addInfoTable(doc, yPosition, inherentFactors, 'Inherent Risk Factors', PDF_CONFIG.colors.secondary);

  // Residual Risk Factors
  yPosition = checkNewPage(doc, yPosition, 60);
  const residualFactors: Array<[string, string]> = [
    ['Security Posture', `${data.vendorData.securityPosture}/10 (35% weight)`],
    ['Certifications', `${data.vendorData.certifications}/10 (25% weight)`],
    ['Incident History', `${data.vendorData.incidentHistory}/10 (20% weight)`],
    ['Security Maturity', `${data.vendorData.securityMaturity}/10 (15% weight)`],
    ['Transparency', `${data.vendorData.transparency}/3 (5% weight)`]
  ];
  yPosition = addInfoTable(doc, yPosition, residualFactors, 'Residual Risk Factors', PDF_CONFIG.colors.purple);

  // Business Criticality Factors
  yPosition = checkNewPage(doc, yPosition, 60);
  const criticalityFactors: Array<[string, string]> = [
    ['Service Criticality', `${data.vendorData.serviceCriticality}/10 (40% weight)`],
    ['Financial Impact', `${data.vendorData.financialImpact}/5 (20% weight)`],
    ['Dependency', `${data.vendorData.dependency}/4 (20% weight)`],
    ['Integration', `${data.vendorData.integration}/3 (10% weight)`],
    ['User Impact', `${data.vendorData.userImpact}/3 (10% weight)`]
  ];
  yPosition = addInfoTable(doc, yPosition, criticalityFactors, 'Business Criticality Factors', PDF_CONFIG.colors.success);

  // Recommendations
  yPosition = checkNewPage(doc, yPosition, 60);
  yPosition = addSectionHeading(doc, yPosition, 'Recommendations');

  let recommendation = '';
  if (data.riskTier.tier === 1) {
    recommendation = 'CRITICAL: Immediate action required. Consider vendor replacement or enhanced controls. Enhanced monitoring, contract review, and risk mitigation strategies should be implemented immediately.';
  } else if (data.riskTier.tier === 2) {
    recommendation = 'HIGH: Enhanced monitoring and controls recommended. Review contract terms and implement additional security requirements. Regular reassessments should be conducted quarterly.';
  } else if (data.riskTier.tier === 3) {
    recommendation = 'MEDIUM: Standard monitoring and periodic reviews recommended. Maintain current vendor management practices with annual reassessments.';
  } else {
    recommendation = 'LOW: Standard vendor management practices sufficient. Continue with routine monitoring and periodic reviews as per standard vendor management program.';
  }

  addTextBlock(doc, yPosition, recommendation);

  // Add footer
  addPDFFooter(doc);

  // Export
  const filename = `vendor-risk-assessment-${data.vendorName || 'report'}-${data.assessmentDate}`;
  exportPDF(doc, filename);
}

/**
 * Generate professional PDF for Incident Response Assessment
 */
export function generateIncidentResponsePDF(data: {
  incidentData: {
    incidentTitle: string;
    incidentDate: string;
    incidentType: string;
    severity: number;
    status: string;
    description: string;
    detectionMethod: string;
    affectedSystems: string;
    dataImpact: number;
    businessImpact: number;
    financialImpact: number;
    containmentTime: string;
    eradicationTime: string;
    recoveryTime: string;
    communicationStatus: number;
    regulatoryNotification: boolean;
    customerNotification: boolean;
    lessonsLearned: string;
    remediationActions: string;
  };
  responseTime: number;
  impactScore: number;
  severityLabel: string;
}): void {
  const doc = createPDFDocument();
  let yPosition = addPDFHeader(doc, 'Incident Response Assessment Report', undefined, PDF_CONFIG.colors.danger);

  // Incident Information
  const incidentInfo: Array<[string, string]> = [
    ['Incident Title', data.incidentData.incidentTitle || 'Not specified'],
    ['Incident Date', data.incidentData.incidentDate],
    ['Incident Type', data.incidentData.incidentType],
    ['Severity', `${data.incidentData.severity}/5 - ${data.severityLabel}`],
    ['Status', data.incidentData.status]
  ];
  yPosition = addInfoTable(doc, yPosition, incidentInfo, 'Incident Information');

  // Incident Summary
  const summaryData: Array<[string, string]> = [
    ['Impact Score', `${data.impactScore.toFixed(1)}/10`],
    ['Total Response Time', `${data.responseTime.toFixed(1)} hours`],
    ['Containment Time', `${data.incidentData.containmentTime} hours`],
    ['Eradication Time', `${data.incidentData.eradicationTime} hours`],
    ['Recovery Time', `${data.incidentData.recoveryTime} hours`]
  ];
  yPosition = addInfoTable(doc, yPosition, summaryData, 'Response Summary');

  // Impact Assessment
  yPosition = checkNewPage(doc, yPosition, 60);
  const impactData: Array<[string, string]> = [
    ['Data Impact', `${data.incidentData.dataImpact}/10`],
    ['Business Impact', `${data.incidentData.businessImpact}/10`],
    ['Financial Impact', `${data.incidentData.financialImpact}/10`],
    ['Communication Status', `${data.incidentData.communicationStatus}/5`]
  ];
  yPosition = addInfoTable(doc, yPosition, impactData, 'Impact Assessment', PDF_CONFIG.colors.danger);

  // Detection & Systems
  yPosition = checkNewPage(doc, yPosition, 60);
  yPosition = addSectionHeading(doc, yPosition, 'Detection & Affected Systems');
  
  if (data.incidentData.detectionMethod) {
    yPosition = addTextBlock(doc, yPosition, `Detection Method: ${data.incidentData.detectionMethod}`);
  }
  if (data.incidentData.affectedSystems) {
    yPosition = addTextBlock(doc, yPosition, `Affected Systems: ${data.incidentData.affectedSystems}`);
  }
  if (data.incidentData.description) {
    yPosition = checkNewPage(doc, yPosition, 40);
    yPosition = addSectionHeading(doc, yPosition, 'Incident Description');
    yPosition = addTextBlock(doc, yPosition, data.incidentData.description);
  }

  // Notifications
  yPosition = checkNewPage(doc, yPosition, 60);
  yPosition = addSectionHeading(doc, yPosition, 'Notifications');
  const notificationData: Array<[string, string]> = [
    ['Regulatory Notification', data.incidentData.regulatoryNotification ? 'Yes' : 'No'],
    ['Customer Notification', data.incidentData.customerNotification ? 'Yes' : 'No']
  ];
  yPosition = addInfoTable(doc, yPosition, notificationData, 'Notification Status');

  // Remediation Actions
  if (data.incidentData.remediationActions) {
    yPosition = checkNewPage(doc, yPosition, 60);
    yPosition = addSectionHeading(doc, yPosition, 'Remediation Actions');
    yPosition = addTextBlock(doc, yPosition, data.incidentData.remediationActions);
  }

  // Lessons Learned
  if (data.incidentData.lessonsLearned) {
    yPosition = checkNewPage(doc, yPosition, 60);
    yPosition = addSectionHeading(doc, yPosition, 'Lessons Learned');
    addTextBlock(doc, yPosition, data.incidentData.lessonsLearned);
  }

  // Add footer
  addPDFFooter(doc);

  // Export
  const filename = `incident-response-${data.incidentData.incidentTitle || 'report'}-${data.incidentData.incidentDate}`;
  exportPDF(doc, filename);
}

/**
 * Helper function to get score label
 */
function getScoreLabel(score: number): string {
  switch (score) {
    case 5: return 'Fully Implemented';
    case 4: return 'Mostly Implemented';
    case 3: return 'Partially Implemented';
    case 2: return 'Minimally Implemented';
    case 1: return 'Not Implemented';
    default: return 'Unknown';
  }
}
