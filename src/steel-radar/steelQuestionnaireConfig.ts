// steelQuestionnaireConfig.ts
// 18-question STEEL™ questionnaire, mapped to domain IDs used by the scoring engine.

import type { DomainId, SteelAxis } from "./steelScoring";

export interface SteelQuestion {
  id: DomainId;
  axis: SteelAxis;
  shortLabel: string;
  question: string;
  description?: string;
}

export const STEEL_QUESTIONS: SteelQuestion[] = [
  // Strategic (6)
  {
    id: "S1_GOVERNANCE_ALIGNMENT",
    axis: "strategic",
    shortLabel: "Governance Alignment",
    question:
      "To what extent is cyber risk formally integrated into business governance and decision-making processes?"
  },
  {
    id: "S2_RISK_APPETITE_DEFINITION",
    axis: "strategic",
    shortLabel: "Risk Appetite Definition",
    question:
      "Has the organization defined, approved, and communicated a cyber risk appetite that guides decisions?"
  },
  {
    id: "S3_LEADERSHIP_AWARENESS",
    axis: "strategic",
    shortLabel: "Leadership Awareness",
    question:
      "How well do executives understand the organization’s cyber exposure, constraints, and dependencies?"
  },
  {
    id: "S4_BOARD_ENGAGEMENT",
    axis: "strategic",
    shortLabel: "Board Engagement",
    question:
      "Does the board receive structured, repeatable, and meaningful cyber reporting tied to business outcomes?"
  },
  {
    id: "S5_REGULATORY_READINESS",
    axis: "strategic",
    shortLabel: "Regulatory & Market Readiness",
    question:
      "How prepared is the organization to meet its current regulatory, contractual, or market expectations related to security and privacy?"
  },
  {
    id: "S6_STRATEGIC_ROADMAP_INTEGRATION",
    axis: "strategic",
    shortLabel: "Strategic Integration",
    question:
      "Are cybersecurity and resilience initiatives aligned with strategic objectives, growth plans, and transformation efforts?"
  },

  // Threat (6)
  {
    id: "T1_SECTOR_THREAT_AWARENESS",
    axis: "threat",
    shortLabel: "Sector Threat Awareness",
    question:
      "Is the organization up to date on relevant sector-specific threat actors, campaigns, and likely attack vectors?"
  },
  {
    id: "T2_ATTACK_SURFACE_VISIBILITY",
    axis: "threat",
    shortLabel: "Attack Surface Visibility",
    question:
      "How well does the organization understand its digital footprint, exposed assets, and key vulnerabilities?"
  },
  {
    id: "T3_INCIDENT_READINESS",
    axis: "threat",
    shortLabel: "Incident Readiness",
    question:
      "How prepared is the organization to detect, respond to, and manage high-impact incidents such as ransomware or data breaches?"
  },
  {
    id: "T4_CRISIS_DECISION_ARCHITECTURE",
    axis: "threat",
    shortLabel: "Crisis Decision Architecture",
    question:
      "Are escalation paths, incident responsibilities, and decision rights clearly defined and tested for major incidents?"
  },
  {
    id: "T5_THREAT_INTEL_UTILIZATION",
    axis: "threat",
    shortLabel: "Threat Intelligence Utilization",
    question:
      "Does the organization consume and act upon threat intelligence in practice (not only in policy)?"
  },
  {
    id: "T6_VULNERABILITY_EXPLOIT_EXPOSURE",
    axis: "threat",
    shortLabel: "Vulnerability & Exploit Exposure",
    question:
      "How consistently and effectively are vulnerabilities identified, prioritized, and remediated based on real-world threat relevance?"
  },

  // Enterprise (6)
  {
    id: "E1_ARCHITECTURE_COHERENCE",
    axis: "enterprise",
    shortLabel: "Architecture Coherence",
    question:
      "How well defined, current, and consistent is the organization’s security architecture across environments?"
  },
  {
    id: "E2_CONTROL_EFFECTIVENESS",
    axis: "enterprise",
    shortLabel: "Control Effectiveness",
    question:
      "Are foundational security controls implemented, maintained, and enforced consistently across the enterprise?"
  },
  {
    id: "E3_DATA_FLOW_CLARITY",
    axis: "enterprise",
    shortLabel: "Critical Data Flow Clarity",
    question:
      "Are critical assets, data flows, and dependencies documented, understood, and validated with stakeholders?"
  },
  {
    id: "E4_VENDOR_DEPENDENCIES",
    axis: "enterprise",
    shortLabel: "Vendor & Supply Chain Dependencies",
    question:
      "To what extent does the organization govern third-party and supply chain risk in line with business impact?"
  },
  {
    id: "E5_WORKFLOW_MATURITY",
    axis: "enterprise",
    shortLabel: "Workflow Maturity",
    question:
      "How consistently do teams follow defined workflows for change, access, recovery, and exception handling?"
  },
  {
    id: "E6_RESILIENCE_RECOVERY",
    axis: "enterprise",
    shortLabel: "Resilience & Recovery Capability",
    question:
      "How confident is the organization in its ability to recover critical services within acceptable timeframes during disruption?"
  }
];

// Optional: scale labels for UI
export const STEEL_SCALE_LABELS = {
  min: 1,
  max: 5,
  anchors: {
    1: "1 – Critical / Not in place",
    2: "2 – Significant gaps",
    3: "3 – Emerging / Partial",
    4: "4 – Mostly effective",
    5: "5 – Strong & reliable"
  } as Record<number, string>
};
