// steelScoring.ts
// STEEL™ Index scoring engine with PESTEL-informed weighting

// -----------------------------
// Types
// -----------------------------

export type PestelFactor = "P" | "E" | "S" | "T" | "Env" | "L";

export type SteelAxis = "strategic" | "threat" | "enterprise";

export type DomainId =
  | "S1_GOVERNANCE_ALIGNMENT"
  | "S2_RISK_APPETITE_DEFINITION"
  | "S3_LEADERSHIP_AWARENESS"
  | "S4_BOARD_ENGAGEMENT"
  | "S5_REGULATORY_READINESS"
  | "S6_STRATEGIC_ROADMAP_INTEGRATION"
  | "T1_SECTOR_THREAT_AWARENESS"
  | "T2_ATTACK_SURFACE_VISIBILITY"
  | "T3_INCIDENT_READINESS"
  | "T4_CRISIS_DECISION_ARCHITECTURE"
  | "T5_THREAT_INTEL_UTILIZATION"
  | "T6_VULNERABILITY_EXPLOIT_EXPOSURE"
  | "E1_ARCHITECTURE_COHERENCE"
  | "E2_CONTROL_EFFECTIVENESS"
  | "E3_DATA_FLOW_CLARITY"
  | "E4_VENDOR_DEPENDENCIES"
  | "E5_WORKFLOW_MATURITY"
  | "E6_RESILIENCE_RECOVERY";

export interface DomainConfig {
  id: DomainId;
  axis: SteelAxis;
  label: string;
  pestelWeights: Record<PestelFactor, number>; // must sum ~1.0
}

export type RawScores = Partial<Record<DomainId, number>>;

export interface RiskMultipliers {
  P: number;
  E: number;
  S: number;
  T: number;
  Env: number;
  L: number;
}

export interface DomainScores {
  [domainId: string]: {
    label: string;
    axis: SteelAxis;
    raw: number | null;
    normalized: number | null;
    pestelAdjusted: number | null; // 0–1-ish if multipliers ~1.0
  };
}

export interface AxisScores {
  strategic: number | null;  // 0–100
  threat: number | null;     // 0–100
  enterprise: number | null; // 0–100
}

export interface SteelIndexResult {
  domainScores: DomainScores;
  axisScores: AxisScores;
  steelIndex: number | null; // 0–100
}

// -----------------------------
// Domain configuration (18 domains)
// -----------------------------

export const STEEL_DOMAINS: DomainConfig[] = [
  // Strategic (6)
  {
    id: "S1_GOVERNANCE_ALIGNMENT",
    axis: "strategic",
    label: "Governance Alignment",
    pestelWeights: { P: 0.25, E: 0.10, S: 0.35, T: 0.10, Env: 0.0, L: 0.20 }
  },
  {
    id: "S2_RISK_APPETITE_DEFINITION",
    axis: "strategic",
    label: "Risk Appetite Definition",
    pestelWeights: { P: 0.20, E: 0.20, S: 0.25, T: 0.10, Env: 0.0, L: 0.25 }
  },
  {
    id: "S3_LEADERSHIP_AWARENESS",
    axis: "strategic",
    label: "Leadership Awareness",
    pestelWeights: { P: 0.10, E: 0.10, S: 0.60, T: 0.10, Env: 0.0, L: 0.10 }
  },
  {
    id: "S4_BOARD_ENGAGEMENT",
    axis: "strategic",
    label: "Board Engagement",
    pestelWeights: { P: 0.15, E: 0.05, S: 0.50, T: 0.05, Env: 0.0, L: 0.25 }
  },
  {
    id: "S5_REGULATORY_READINESS",
    axis: "strategic",
    label: "Regulatory & Market Pressure Readiness",
    pestelWeights: { P: 0.35, E: 0.10, S: 0.10, T: 0.05, Env: 0.0, L: 0.40 }
  },
  {
    id: "S6_STRATEGIC_ROADMAP_INTEGRATION",
    axis: "strategic",
    label: "Strategic Roadmap Integration",
    pestelWeights: { P: 0.10, E: 0.20, S: 0.30, T: 0.30, Env: 0.0, L: 0.10 }
  },

  // Threat (6)
  {
    id: "T1_SECTOR_THREAT_AWARENESS",
    axis: "threat",
    label: "Sector Threat Awareness",
    pestelWeights: { P: 0.10, E: 0.05, S: 0.10, T: 0.60, Env: 0.05, L: 0.10 }
  },
  {
    id: "T2_ATTACK_SURFACE_VISIBILITY",
    axis: "threat",
    label: "Attack Surface Visibility",
    pestelWeights: { P: 0.05, E: 0.05, S: 0.10, T: 0.70, Env: 0.0, L: 0.10 }
  },
  {
    id: "T3_INCIDENT_READINESS",
    axis: "threat",
    label: "Incident Readiness",
    pestelWeights: { P: 0.10, E: 0.10, S: 0.25, T: 0.40, Env: 0.05, L: 0.10 }
  },
  {
    id: "T4_CRISIS_DECISION_ARCHITECTURE",
    axis: "threat",
    label: "Crisis Decision Architecture",
    pestelWeights: { P: 0.10, E: 0.05, S: 0.45, T: 0.20, Env: 0.10, L: 0.10 }
  },
  {
    id: "T5_THREAT_INTEL_UTILIZATION",
    axis: "threat",
    label: "Threat Intelligence Utilization",
    pestelWeights: { P: 0.05, E: 0.05, S: 0.10, T: 0.70, Env: 0.0, L: 0.10 }
  },
  {
    id: "T6_VULNERABILITY_EXPLOIT_EXPOSURE",
    axis: "threat",
    label: "Vulnerability & Exploit Exposure",
    pestelWeights: { P: 0.05, E: 0.10, S: 0.05, T: 0.70, Env: 0.0, L: 0.10 }
  },

  // Enterprise (6)
  {
    id: "E1_ARCHITECTURE_COHERENCE",
    axis: "enterprise",
    label: "Security Architecture Coherence",
    pestelWeights: { P: 0.05, E: 0.10, S: 0.10, T: 0.70, Env: 0.0, L: 0.05 }
  },
  {
    id: "E2_CONTROL_EFFECTIVENESS",
    axis: "enterprise",
    label: "Control Effectiveness & Coverage",
    pestelWeights: { P: 0.05, E: 0.10, S: 0.20, T: 0.50, Env: 0.0, L: 0.15 }
  },
  {
    id: "E3_DATA_FLOW_CLARITY",
    axis: "enterprise",
    label: "Critical Asset & Data Flow Clarity",
    pestelWeights: { P: 0.05, E: 0.10, S: 0.20, T: 0.50, Env: 0.0, L: 0.15 }
  },
  {
    id: "E4_VENDOR_DEPENDENCIES",
    axis: "enterprise",
    label: "Vendor & Supply Chain Dependencies",
    pestelWeights: { P: 0.05, E: 0.10, S: 0.25, T: 0.25, Env: 0.25, L: 0.10 }
  },
  {
    id: "E5_WORKFLOW_MATURITY",
    axis: "enterprise",
    label: "Operational Workflow Maturity",
    pestelWeights: { P: 0.05, E: 0.15, S: 0.40, T: 0.30, Env: 0.0, L: 0.10 }
  },
  {
    id: "E6_RESILIENCE_RECOVERY",
    axis: "enterprise",
    label: "Resilience & Recovery Capability",
    pestelWeights: { P: 0.05, E: 0.20, S: 0.15, T: 0.20, Env: 0.30, L: 0.10 }
  }
];

// -----------------------------
// Defaults
// -----------------------------

export const DEFAULT_MAX_SCORE = 5; // questionnaire scale: 1–5

export const DEFAULT_RISK_MULTIPLIERS: RiskMultipliers = {
  P: 1.0,
  E: 1.0,
  S: 1.0,
  T: 1.0,
  Env: 1.0,
  L: 1.0
};

export const DEFAULT_AXIS_WEIGHTS = {
  strategic: 0.4,
  threat: 0.3,
  enterprise: 0.3
};

// -----------------------------
// Core functions
// -----------------------------

/**
 * Compute PESTEL-adjusted domain scores (0–1-ish).
 */
export function computeDomainScores(
  rawScores: RawScores,
  options?: {
    maxScore?: number;
    riskMultipliers?: RiskMultipliers;
  }
): DomainScores {
  const maxScore = options?.maxScore ?? DEFAULT_MAX_SCORE;
  const risk = options?.riskMultipliers ?? DEFAULT_RISK_MULTIPLIERS;

  const result: DomainScores = {};

  for (const domain of STEEL_DOMAINS) {
    const raw = rawScores[domain.id] ?? null;
    let normalized: number | null = null;
    let pestelAdjusted: number | null = null;

    if (raw != null && raw > 0) {
      normalized = Math.max(0, Math.min(raw / maxScore, 1)); // clamp 0–1

      const { P, E, S, T, Env, L } = domain.pestelWeights;
      const factorSum =
        P * risk.P +
        E * risk.E +
        S * risk.S +
        T * risk.T +
        Env * risk.Env +
        L * risk.L;

      // NOTE: keep risk multipliers near 1.0 (e.g. 0.8–1.2) to stay in 0–1 range.
      pestelAdjusted = normalized * factorSum;
    }

    result[domain.id] = {
      label: domain.label,
      axis: domain.axis,
      raw,
      normalized,
      pestelAdjusted
    };
  }

  return result;
}

/**
 * Compute axis scores (S, T, E) in 0–100 scale.
 */
export function computeAxisScores(domainScores: DomainScores): AxisScores {
  const byAxis: Record<SteelAxis, number[]> = {
    strategic: [],
    threat: [],
    enterprise: []
  };

  for (const domain of STEEL_DOMAINS) {
    const ds = domainScores[domain.id];
    if (ds && ds.pestelAdjusted != null) {
      byAxis[domain.axis].push(ds.pestelAdjusted);
    }
  }

  const average = (values: number[]): number | null => {
    if (!values.length) return null;
    // assume pestelAdjusted ~0–1 → multiply by 100
    const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
    return Math.max(0, Math.min(mean * 100, 100));
  };

  return {
    strategic: average(byAxis.strategic),
    threat: average(byAxis.threat),
    enterprise: average(byAxis.enterprise)
  };
}

/**
 * Compute overall STEEL Index (0–100) from axis scores.
 */
export function computeSteelIndex(
  axisScores: AxisScores,
  axisWeights = DEFAULT_AXIS_WEIGHTS
): number | null {
  const { strategic, threat, enterprise } = axisScores;

  if (
    strategic == null ||
    threat == null ||
    enterprise == null
  ) {
    return null; // incomplete data
  }

  const { strategic: wS, threat: wT, enterprise: wE } = axisWeights;
  const index = strategic * wS + threat * wT + enterprise * wE;

  return Math.max(0, Math.min(index, 100));
}

/**
 * Full pipeline: raw scores → domain scores → axis scores → STEEL Index.
 */
export function computeSteelIndexFull(
  rawScores: RawScores,
  options?: {
    maxScore?: number;
    riskMultipliers?: RiskMultipliers;
    axisWeights?: typeof DEFAULT_AXIS_WEIGHTS;
  }
): SteelIndexResult {
  const domainScores = computeDomainScores(rawScores, {
    maxScore: options?.maxScore,
    riskMultipliers: options?.riskMultipliers
  });

  const axisScores = computeAxisScores(domainScores);
  const steelIndex = computeSteelIndex(
    axisScores,
    options?.axisWeights ?? DEFAULT_AXIS_WEIGHTS
  );

  return { domainScores, axisScores, steelIndex };
}

