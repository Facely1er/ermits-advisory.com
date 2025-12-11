// SteelQuestionnaireForm.tsx

import React, { useState } from "react";
import {
  computeSteelIndexFull,
  type RawScores,
  type SteelIndexResult,
  STEEL_DOMAINS
} from "./steelScoring";
import { STEEL_QUESTIONS, STEEL_SCALE_LABELS } from "./steelQuestionnaireConfig";
import SteelRadar from "./SteelRadar";

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
    <div className="steel-questionnaire">
      <form onSubmit={handleSubmit} className="space-y-8">
        {["strategic", "threat", "enterprise"].map((axis) => (
          <fieldset key={axis} className="border border-gray-300 dark:border-gray-600 rounded-lg p-6">
            <legend className="text-xl font-bold text-navy dark:text-gold px-2 capitalize">
              {axis} Evaluation
            </legend>

            <div className="mt-4 space-y-4">
              {STEEL_QUESTIONS.filter((q) => q.axis === axis).map((q) => (
                <div
                  key={q.id}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                >
                  <label htmlFor={q.id} className="block font-semibold text-navy dark:text-gold mb-2">
                    {q.shortLabel}
                  </label>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{q.question}</p>

                  <select
                    id={q.id}
                    value={answers[q.id] ?? ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-navy dark:focus:ring-gold"
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

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-navy-dark dark:bg-gold dark:text-navy dark:hover:bg-gold/90 transition-colors"
          >
            Compute STEEL™ Index
          </button>
        </div>
      </form>

      {result && (
        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold text-navy dark:text-gold">Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Strategic Score (S)</p>
              <p className="text-2xl font-bold text-navy dark:text-gold">
                {result.axisScores.strategic != null
                  ? result.axisScores.strategic.toFixed(1)
                  : "N/A"}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Threat Score (T)</p>
              <p className="text-2xl font-bold text-navy dark:text-gold">
                {result.axisScores.threat != null
                  ? result.axisScores.threat.toFixed(1)
                  : "N/A"}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Enterprise Score (E)</p>
              <p className="text-2xl font-bold text-navy dark:text-gold">
                {result.axisScores.enterprise != null
                  ? result.axisScores.enterprise.toFixed(1)
                  : "N/A"}
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-navy to-navy-dark dark:from-gold dark:to-gold/80 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-white/90 mb-1">STEEL™ Index</p>
              <p className="text-2xl font-bold text-white">
                {result.steelIndex != null ? result.steelIndex.toFixed(1) : "N/A"}
              </p>
            </div>
          </div>

          {radarScores.length > 0 && (
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <SteelRadar scores={radarScores} title="STEEL™ Radar (Current State)" height={500} />
            </div>
          )}
        </section>
      )}
    </div>
  );
}

