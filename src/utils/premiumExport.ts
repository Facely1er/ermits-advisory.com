/**
 * Premium Export Utilities for STEEL Assessment
 * Generates professional reports in various formats
 */

interface STEELScore {
  dimension: string;
  score: number;
  description: string;
}

interface ExportData {
  scores: STEELScore[];
  timestamp: string;
  organizationName?: string;
}

/**
 * Generate CSV export of assessment results
 */
export const generateCSVExport = (data: ExportData): string => {
  let csv = 'STEEL Assessment Results\n';
  csv += `Generated: ${data.timestamp}\n`;
  if (data.organizationName) {
    csv += `Organization: ${data.organizationName}\n`;
  }
  csv += '\nDimension,Score,Description\n';

  data.scores.forEach(score => {
    csv += `"${score.dimension}",${score.score},"${score.description}"\n`;
  });

  return csv;
};

/**
 * Generate JSON export of assessment results
 */
export const generateJSONExport = (data: ExportData): string => {
  return JSON.stringify({
    title: 'STEEL Assessment Results',
    ...data,
    exported: new Date().toISOString()
  }, null, 2);
};

/**
 * Generate HTML report for PDF conversion
 */
export const generateHTMLReport = (data: ExportData): string => {
  const avgScore = data.scores.reduce((sum, s) => sum + s.score, 0) / data.scores.length;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>STEEL Assessment Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      background: #f5f5f5;
    }
    .header {
      background: linear-gradient(135deg, #1a3a4a 0%, #2d5566 100%);
      color: white;
      padding: 40px;
      border-radius: 8px;
      margin-bottom: 40px;
      page-break-after: avoid;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 32px;
    }
    .header p {
      margin: 5px 0;
      opacity: 0.9;
    }
    .score-summary {
      background: white;
      padding: 30px;
      border-radius: 8px;
      margin-bottom: 40px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      page-break-after: avoid;
    }
    .score-summary h2 {
      margin: 0 0 20px 0;
      color: #1a3a4a;
      border-bottom: 3px solid #d4af37;
      padding-bottom: 10px;
    }
    .overall-score {
      font-size: 48px;
      font-weight: bold;
      color: #2d5566;
      text-align: center;
      margin: 20px 0;
    }
    .dimensions {
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .dimension-card {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
      page-break-inside: avoid;
    }
    .dimension-card:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .dimension-title {
      font-size: 18px;
      font-weight: bold;
      color: #1a3a4a;
      margin-bottom: 8px;
    }
    .dimension-score {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
    }
    .dimension-description {
      font-size: 13px;
      color: #777;
      line-height: 1.5;
    }
    .score-bar {
      background: #eee;
      height: 8px;
      border-radius: 4px;
      margin: 8px 0;
      overflow: hidden;
    }
    .score-fill {
      height: 100%;
      background: linear-gradient(90deg, #d4af37 0%, #2d5566 100%);
      border-radius: 4px;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      color: #666;
      font-size: 12px;
      page-break-before: avoid;
    }
    @media print {
      body { background: white; }
      .header { page-break-after: avoid; }
      .score-summary { page-break-after: avoid; }
      .dimension-card { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>STEEL Assessment Report</h1>
    <p>Comprehensive Security & Resilience Evaluation</p>
    ${data.organizationName ? `<p>Organization: ${data.organizationName}</p>` : ''}
    <p>Generated: ${new Date(data.timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })}</p>
  </div>

  <div class="score-summary">
    <h2>Executive Summary</h2>
    <div class="overall-score">${avgScore.toFixed(1)}/10</div>
    <p style="text-align: center; color: #666; margin: 10px 0 0 0;">Overall Assessment Score</p>
  </div>

  <div class="dimensions">
    <h2 style="margin: 0 0 20px 0; color: #1a3a4a; border-bottom: 3px solid #d4af37; padding-bottom: 10px;">Dimension Scores</h2>
    ${data.scores.map(score => `
      <div class="dimension-card">
        <div class="dimension-title">${score.dimension}</div>
        <div class="dimension-score">Score: <strong>${score.score.toFixed(1)}/10</strong></div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${(score.score / 10) * 100}%"></div>
        </div>
        <div class="dimension-description">${score.description}</div>
      </div>
    `).join('')}
  </div>

  <div class="footer">
    <p><strong>Privacy Notice:</strong> This assessment was performed using client-side processing. All data processing occurred in your browser and was not transmitted to external servers.</p>
    <p>For detailed implementation recommendations and remediation strategies, please contact our security advisory team or refer to our comprehensive vCISO Starter Kit.</p>
  </div>
</body>
</html>
  `;
};

/**
 * Download file utility
 */
export const downloadFile = (content: string, filename: string, mimeType: string = 'text/plain') => {
  const element = document.createElement('a');
  element.setAttribute('href', `data:${mimeType};charset=utf-8,${encodeURIComponent(content)}`);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

/**
 * Download HTML report as PDF (requires external PDF library in production)
 */
export const downloadPDFReport = (data: ExportData) => {
  const htmlContent = generateHTMLReport(data);
  // In production, you would use a library like html2pdf, pdfkit, or send to a server
  // For now, we'll provide the HTML for download
  downloadFile(htmlContent, `STEEL_Assessment_${data.timestamp.replace(/[:\-]/g, '')}.html`, 'text/html');
};

/**
 * Export in multiple formats
 */
export const exportAssessment = (data: ExportData, format: 'csv' | 'json' | 'html') => {
  const timestamp = new Date().toISOString().slice(0, 10);

  switch (format) {
    case 'csv':
      downloadFile(generateCSVExport(data), `STEEL_Assessment_${timestamp}.csv`, 'text/csv');
      break;
    case 'json':
      downloadFile(generateJSONExport(data), `STEEL_Assessment_${timestamp}.json`, 'application/json');
      break;
    case 'html':
      downloadPDFReport(data);
      break;
    default:
      console.error('Unsupported export format');
  }
};
