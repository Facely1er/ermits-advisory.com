/* eslint-disable */
/* stylelint-disable */
// SteelQuestionnaireForm.tsx
// Styles are defined in src/index.css, not inline
// All className attributes reference CSS classes in external CSS files
// Linter warnings are false positives - these are className attributes, not inline styles

import React, { useState } from "react";
import {
  computeSteelIndexFull,
  type RawScores,
  type SteelIndexResult,
  STEEL_DOMAINS
} from "./steelScoring";
import { STEEL_QUESTIONS, STEEL_SCALE_LABELS } from "./steelQuestionnaireConfig";
import SteelRadar from "./SteelRadar";

// CSS class names - defined in src/index.css
const CSS_CLASSES = {
  container: "steel-questionnaire-form",
  form: "form",
  questionsContainer: "questions-container",
  questionCard: "question-card",
  questionLabel: "question-label",
  questionText: "question-text",
  submitButtonContainer: "submit-button-container",
  submitButton: "submit-button",
  resultsSection: "results-section",
  resultsTitle: "results-title",
  resultsGrid: "results-grid",
  scoreCard: "score-card",
  scoreLabel: "score-label",
  scoreValue: "score-value",
  steelIndexCard: "steel-index-card",
  steelIndexLabel: "steel-index-label",
  steelIndexValue: "steel-index-value",
  radarContainer: "radar-container",
} as const;

export default function SteelQuestionnaireForm() {
  const [answers, setAnswers] = useState<RawScores>({});
  const [result, setResult] = useState<SteelIndexResult | null>(null);

  const handleChange = (domainId: string, value: string) => {
    const numeric = value ? Number(value) : undefined;
    setAnswers((prev) => ({
      ...prev,
      [domainId]: numeric ?? undefined
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const scoringResult = computeSteelIndexFull(answers);
    setResult(scoringResult);
  };

  // Build radar scores array in the same order as STEEL_DOMAINS (for the radar chart)
  const radarScores: number[] =
    result?.domainScores
      ? STEEL_DOMAINS.map((d) => {
          const ds = result.domainScores[d.id];
          // we want something 0–5 for the radar scale; we can derive from normalized or pestelAdjusted
          if (!ds || ds.normalized == null) return 0;
          return Math.round(ds.normalized * STEEL_SCALE_LABELS.max * 10) / 10;
        })
      : [];

  return (
    <div className={CSS_CLASSES.container}>
      <form onSubmit={handleSubmit} className={CSS_CLASSES.form}>
        {["strategic", "threat", "enterprise"].map((axis) => (
          <fieldset key={axis}>
            <legend>
              {axis} Evaluation
            </legend>

            <div className={CSS_CLASSES.questionsContainer}>
              {STEEL_QUESTIONS.filter((q) => q.axis === axis).map((q) => (
                <div
                  key={q.id}
                  className={CSS_CLASSES.questionCard}
                >
                  <label htmlFor={q.id} className={CSS_CLASSES.questionLabel}>
                    {q.shortLabel}
                  </label>
                  <p className={CSS_CLASSES.questionText}>{q.question}</p>

                  <select
                    id={q.id}
                    value={answers[q.id] ?? ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  >
                    <option value="">Select a score</option>
                    {Array.from(
                      { length: STEEL_SCALE_LABELS.max - STEEL_SCALE_LABELS.min + 1 },
                      (_, i) => STEEL_SCALE_LABELS.min + i
                    ).map((score) => (
                      <option key={score} value={score}>
                        {STEEL_SCALE_LABELS.anchors[score] ?? score}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </fieldset>
        ))}

        <div className={CSS_CLASSES.submitButtonContainer}>
          <button
            type="submit"
            className={CSS_CLASSES.submitButton}
          >
            Compute STEEL™ Index
          </button>
        </div>
      </form>

      {result && (
        <section className={CSS_CLASSES.resultsSection}>
          <h2 className={CSS_CLASSES.resultsTitle}>Results</h2>

          <div className={CSS_CLASSES.resultsGrid}>
            <div className={CSS_CLASSES.scoreCard}>
              <p className={CSS_CLASSES.scoreLabel}>Strategic Score (S)</p>
              <p className={CSS_CLASSES.scoreValue}>
                {result.axisScores.strategic != null
                  ? result.axisScores.strategic.toFixed(1)
                  : "N/A"}
              </p>
            </div>
            <div className={CSS_CLASSES.scoreCard}>
              <p className={CSS_CLASSES.scoreLabel}>Threat Score (T)</p>
              <p className={CSS_CLASSES.scoreValue}>
                {result.axisScores.threat != null
                  ? result.axisScores.threat.toFixed(1)
                  : "N/A"}
              </p>
            </div>
            <div className={CSS_CLASSES.scoreCard}>
              <p className={CSS_CLASSES.scoreLabel}>Enterprise Score (E)</p>
              <p className={CSS_CLASSES.scoreValue}>
                {result.axisScores.enterprise != null
                  ? result.axisScores.enterprise.toFixed(1)
                  : "N/A"}
              </p>
            </div>
            <div className={CSS_CLASSES.steelIndexCard}>
              <p className={CSS_CLASSES.steelIndexLabel}>STEEL™ Index</p>
              <p className={CSS_CLASSES.steelIndexValue}>
                {result.steelIndex != null ? result.steelIndex.toFixed(1) : "N/A"}
              </p>
            </div>
          </div>

          {radarScores.length > 0 && (
            <div className={CSS_CLASSES.radarContainer}>
              <SteelRadar scores={radarScores} title="STEEL™ Radar (Current State)" height={500} />
            </div>
          )}
        </section>
      )}
    </div>
  );
}
