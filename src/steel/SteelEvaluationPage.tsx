import React from "react";
import SteelQuestionnaireForm from "./SteelQuestionnaireForm";

export default function SteelEvaluationPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <h1>STEEL™ Evaluation</h1>
        <p>
          This interactive STEEL™ evaluation uses the Strategic Threat &amp; Enterprise
          Evaluation Layer to generate Strategic, Threat, and Enterprise scores,
          plus an overall STEEL™ Index and radar visualization.
        </p>
      </header>

      <SteelQuestionnaireForm />
    </main>
  );
}

