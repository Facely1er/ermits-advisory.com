import SteelQuestionnaireForm from "./SteelQuestionnaireForm";

export default function SteelEvaluationPage() {
  return (
    <main className="steel-evaluation-page">
      <header className="steel-evaluation-header">
        <h1>STEEL™ Diagnostic</h1>
        <p>
          This interactive STEEL™ Diagnostic uses the Strategic Threat &amp; Enterprise
          Evaluation Layer to generate Strategic, Threat, and Enterprise scores,
          plus an overall STEEL™ Index and radar visualization.
        </p>
      </header>

      <SteelQuestionnaireForm />
    </main>
  );
}

