/**
 * Comprehensive PDF Generation Utilities
 * Centralized PDF generation for the entire project
 */

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Extend jsPDF type to include autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

/**
 * PDF Configuration - Project-wide settings
 */
export const PDF_CONFIG = {
  pageSize: 'a4' as const,
  orientation: 'portrait' as const,
  unit: 'mm' as const,
  margin: {
    top: 20,
    right: 20,
    bottom: 30,
    left: 20
  },
  colors: {
    primary: [41, 128, 185],      // Navy blue
    secondary: [52, 152, 219],    // Blue
    success: [46, 204, 113],      // Green
    warning: [241, 196, 15],      // Yellow
    danger: [231, 76, 60],        // Red
    orange: [255, 152, 0],        // Orange
    purple: [155, 89, 182],       // Purple
    dark: [44, 62, 80],           // Dark blue
    light: [236, 240, 241],       // Light gray
    text: [0, 0, 0],              // Black
    textLight: [128, 128, 128]    // Gray
  },
  fonts: {
    title: { family: 'helvetica', style: 'bold', size: 20 },
    heading: { family: 'helvetica', style: 'bold', size: 14 },
    subheading: { family: 'helvetica', style: 'bold', size: 12 },
    body: { family: 'helvetica', style: 'normal', size: 10 },
    small: { family: 'helvetica', style: 'normal', size: 8 }
  },
  company: {
    name: 'ERMITS Advisory',
    tagline: 'Security & Risk Management Solutions'
  }
};

/**
 * Create a new PDF document with standard configuration
 */
export function createPDFDocument(): jsPDF {
  const doc = new jsPDF({
    orientation: PDF_CONFIG.orientation,
    unit: PDF_CONFIG.unit,
    format: PDF_CONFIG.pageSize
  });
  return doc;
}

/**
 * Add standard header to PDF
 */
export function addPDFHeader(
  doc: jsPDF,
  title: string,
  subtitle?: string,
  headerColor: number[] = PDF_CONFIG.colors.primary
): number {
  const pageWidth = doc.internal.pageSize.getWidth();
  const yPosition = 0;

  // Header background
  doc.setFillColor(...headerColor);
  doc.rect(0, 0, pageWidth, 40, 'F');

  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(PDF_CONFIG.fonts.title.size);
  doc.setFont(PDF_CONFIG.fonts.title.family, PDF_CONFIG.fonts.title.style);
  doc.text(title, pageWidth / 2, 20, { align: 'center' });

  // Subtitle or generation date
  doc.setFontSize(PDF_CONFIG.fonts.body.size);
  doc.setFont(PDF_CONFIG.fonts.body.family, PDF_CONFIG.fonts.body.style);
  const subtitleText = subtitle || `Generated: ${new Date().toLocaleString()}`;
  doc.text(subtitleText, pageWidth / 2, 32, { align: 'center' });

  return 50; // Return starting Y position
}

/**
 * Add standard footer to PDF
 */
export function addPDFFooter(doc: jsPDF, customText?: string): void {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const pageCount = doc.getNumberOfPages();

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(PDF_CONFIG.fonts.small.size);
    doc.setTextColor(...PDF_CONFIG.colors.textLight);
    doc.setFont(PDF_CONFIG.fonts.small.family, PDF_CONFIG.fonts.small.style);

    const footerText = customText || 
      `Page ${i} of ${pageCount} | ${PDF_CONFIG.company.name} - Confidential`;
    
    doc.text(
      footerText,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }
}

/**
 * Add section heading
 */
export function addSectionHeading(
  doc: jsPDF,
  yPosition: number,
  text: string,
  color: number[] = PDF_CONFIG.colors.text
): number {
  doc.setFontSize(PDF_CONFIG.fonts.heading.size);
  doc.setFont(PDF_CONFIG.fonts.heading.family, PDF_CONFIG.fonts.heading.style);
  doc.setTextColor(...color);
  doc.text(text, PDF_CONFIG.margin.left, yPosition);
  return yPosition + 10;
}

/**
 * Add information table
 */
export function addInfoTable(
  doc: jsPDF,
  yPosition: number,
  data: Array<[string, string]>,
  title?: string,
  headerColor: number[] = PDF_CONFIG.colors.primary
): number {
  if (title) {
    yPosition = addSectionHeading(doc, yPosition, title);
  }

  autoTable(doc, {
    startY: yPosition,
    head: [['Field', 'Value']],
    body: data,
    theme: 'striped',
    headStyles: {
      fillColor: headerColor,
      textColor: 255,
      fontStyle: 'bold'
    },
    styles: {
      fontSize: PDF_CONFIG.fonts.body.size,
      cellPadding: 3
    },
    margin: {
      left: PDF_CONFIG.margin.left,
      right: PDF_CONFIG.margin.right
    }
  });

  return (doc as any).lastAutoTable.finalY + 10;
}

/**
 * Add data table with custom columns
 */
export function addDataTable(
  doc: jsPDF,
  yPosition: number,
  headers: string[],
  data: string[][],
  title?: string,
  headerColor: number[] = PDF_CONFIG.colors.primary,
  columnStyles?: Record<number, any>
): number {
  if (title) {
    yPosition = addSectionHeading(doc, yPosition, title);
  }

  autoTable(doc, {
    startY: yPosition,
    head: [headers],
    body: data,
    theme: 'striped',
    headStyles: {
      fillColor: headerColor,
      textColor: 255,
      fontStyle: 'bold'
    },
    styles: {
      fontSize: PDF_CONFIG.fonts.body.size,
      cellPadding: 3
    },
    margin: {
      left: PDF_CONFIG.margin.left,
      right: PDF_CONFIG.margin.right
    },
    columnStyles: columnStyles || {}
  });

  return (doc as any).lastAutoTable.finalY + 10;
}

/**
 * Add text block with word wrapping
 */
export function addTextBlock(
  doc: jsPDF,
  yPosition: number,
  text: string,
  maxWidth?: number,
  fontSize: number = PDF_CONFIG.fonts.body.size,
  color: number[] = PDF_CONFIG.colors.text
): number {
  const pageWidth = doc.internal.pageSize.getWidth();
  const width = maxWidth || (pageWidth - PDF_CONFIG.margin.left - PDF_CONFIG.margin.right);

  doc.setFontSize(fontSize);
  doc.setFont(PDF_CONFIG.fonts.body.family, PDF_CONFIG.fonts.body.style);
  doc.setTextColor(...color);

  const lines = doc.splitTextToSize(text, width);
  doc.text(lines, PDF_CONFIG.margin.left, yPosition);

  return yPosition + (lines.length * (fontSize * 0.4)) + 5;
}

/**
 * Check if new page is needed
 */
export function checkNewPage(
  doc: jsPDF,
  currentY: number,
  requiredSpace: number = 40
): number {
  const pageHeight = doc.internal.pageSize.getHeight();
  
  if (currentY + requiredSpace > pageHeight - PDF_CONFIG.margin.bottom) {
    doc.addPage();
    return PDF_CONFIG.margin.top;
  }
  
  return currentY;
}

/**
 * Add summary box (highlighted section)
 */
export function addSummaryBox(
  doc: jsPDF,
  yPosition: number,
  title: string,
  content: string[],
  backgroundColor: number[] = PDF_CONFIG.colors.light,
  borderColor: number[] = PDF_CONFIG.colors.primary
): number {
  const pageWidth = doc.internal.pageSize.getWidth();
  const boxWidth = pageWidth - PDF_CONFIG.margin.left - PDF_CONFIG.margin.right;
  const boxHeight = 20 + (content.length * 6);

  // Background
  doc.setFillColor(...backgroundColor);
  doc.rect(PDF_CONFIG.margin.left, yPosition, boxWidth, boxHeight, 'F');

  // Border
  doc.setDrawColor(...borderColor);
  doc.setLineWidth(0.5);
  doc.rect(PDF_CONFIG.margin.left, yPosition, boxWidth, boxHeight);

  // Title
  doc.setFontSize(PDF_CONFIG.fonts.subheading.size);
  doc.setFont(PDF_CONFIG.fonts.subheading.family, PDF_CONFIG.fonts.subheading.style);
  doc.setTextColor(...PDF_CONFIG.colors.text);
  doc.text(title, PDF_CONFIG.margin.left + 5, yPosition + 8);

  // Content
  doc.setFontSize(PDF_CONFIG.fonts.body.size);
  doc.setFont(PDF_CONFIG.fonts.body.family, PDF_CONFIG.fonts.body.style);
  content.forEach((line, index) => {
    doc.text(`• ${line}`, PDF_CONFIG.margin.left + 5, yPosition + 15 + (index * 6));
  });

  return yPosition + boxHeight + 10;
}

/**
 * Export PDF with standard naming
 */
export function exportPDF(
  doc: jsPDF,
  filename: string,
  addTimestamp: boolean = true
): void {
  const timestamp = addTimestamp ? `-${new Date().toISOString().split('T')[0]}` : '';
  const finalFilename = `${filename}${timestamp}.pdf`;
  doc.save(finalFilename);
}

/**
 * Get color by risk level
 */
export function getRiskColor(level: 'critical' | 'high' | 'medium' | 'low'): number[] {
  switch (level) {
    case 'critical': return PDF_CONFIG.colors.danger;
    case 'high': return PDF_CONFIG.colors.warning;
    case 'medium': return PDF_CONFIG.colors.secondary;
    case 'low': return PDF_CONFIG.colors.success;
    default: return PDF_CONFIG.colors.textLight;
  }
}

/**
 * Get color by score (1-5 scale)
 */
export function getScoreColor(score: number): number[] {
  if (score >= 5) return PDF_CONFIG.colors.success;
  if (score >= 4) return PDF_CONFIG.colors.secondary;
  if (score >= 3) return PDF_CONFIG.colors.warning;
  if (score >= 2) return PDF_CONFIG.colors.orange;
  return PDF_CONFIG.colors.danger;
}

