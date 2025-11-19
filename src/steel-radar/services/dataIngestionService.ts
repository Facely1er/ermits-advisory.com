/**
 * Data Ingestion Service
 * 
 * Handles CSV/JSON parsing, normalization, and validation
 */

import Papa from 'papaparse';
import Ajv from 'ajv';
import { DataIngestionResult, IngestionTemplate } from '../types/radar';
import { getTemplateById, detectTemplate } from '../data/ingestionTemplates';

const ajv = new Ajv({ allErrors: true });

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

/**
 * Parse CSV file
 */
export async function parseCSVFile(
  file: File
): Promise<{ data: any[]; errors: string[] }> {
  return new Promise((resolve) => {
    if (file.size > MAX_FILE_SIZE) {
      resolve({
        data: [],
        errors: [`File size exceeds maximum of ${MAX_FILE_SIZE / 1024 / 1024}MB`],
      });
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve({
          data: results.data,
          errors: results.errors.map((e) => e.message || 'Parse error'),
        });
      },
      error: (error) => {
        resolve({
          data: [],
          errors: [error.message || 'Failed to parse CSV file'],
        });
      },
    });
  });
}

/**
 * Parse JSON file
 */
export async function parseJSONFile(
  file: File
): Promise<{ data: any; errors: string[] }> {
  return new Promise((resolve) => {
    if (file.size > MAX_FILE_SIZE) {
      resolve({
        data: null,
        errors: [`File size exceeds maximum of ${MAX_FILE_SIZE / 1024 / 1024}MB`],
      });
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const data = JSON.parse(text);

        // Normalize to array if single object
        const normalizedData = Array.isArray(data) ? data : [data];

        resolve({
          data: normalizedData,
          errors: [],
        });
      } catch (error) {
        resolve({
          data: null,
          errors: [
            error instanceof Error ? error.message : 'Failed to parse JSON file',
          ],
        });
      }
    };

    reader.onerror = () => {
      resolve({
        data: null,
        errors: ['Failed to read file'],
      });
    };

    reader.readAsText(file);
  });
}

/**
 * Normalize data using template mappings
 */
export function normalizeData(
  data: any[],
  template: IngestionTemplate
): any[] {
  if (!template.fieldMappings || template.fieldMappings.length === 0) {
    return data;
  }

  return data.map((row) => {
    const normalized: any = {};

    template.fieldMappings.forEach((mapping) => {
      const sourceValue = row[mapping.sourceField];

      if (sourceValue !== undefined && sourceValue !== null && sourceValue !== '') {
        if (mapping.transform) {
          normalized[mapping.targetQuestion] = mapping.transform(sourceValue);
        } else {
          normalized[mapping.targetQuestion] = sourceValue;
        }
      } else if (mapping.required) {
        normalized[mapping.targetQuestion] = null;
      }
    });

    return normalized;
  });
}

/**
 * Validate ingestion data
 */
export function validateIngestionData(
  data: any[],
  template: IngestionTemplate
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data || data.length === 0) {
    errors.push('No data found in file');
    return { valid: false, errors };
  }

  // Validate against template rules
  template.validationRules.forEach((rule) => {
    if (rule.type === 'required') {
      const missingFields = data.filter(
        (row) => !row[rule.field] || row[rule.field] === ''
      );

      if (missingFields.length > 0) {
        errors.push(
          `${rule.message}: ${missingFields.length} rows missing ${rule.field}`
        );
      }
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Map data to STEEL questions
 */
export function mapToSteelQuestions(
  data: any[],
  template: IngestionTemplate
): Record<string, any> {
  const normalized = normalizeData(data, template);
  const mapped: Record<string, any> = {};

  normalized.forEach((row) => {
    Object.keys(row).forEach((key) => {
      if (key.startsWith('q')) {
        if (!mapped[key]) {
          mapped[key] = [];
        }
        mapped[key].push(row[key]);
      }
    });
  });

  return mapped;
}

/**
 * Process file ingestion
 */
export async function processFileIngestion(
  file: File,
  templateId?: string,
  preParsedData?: any[]
): Promise<DataIngestionResult> {
  const isCSV = file.name.endsWith('.csv');
  const isJSON = file.name.endsWith('.json');

  let data: any[] = [];

  // Use pre-parsed data if provided, otherwise parse file
  if (preParsedData && preParsedData.length > 0) {
    data = preParsedData;
  } else {
    if (!isCSV && !isJSON) {
      return {
        success: false,
        source: 'CSV',
        recordsProcessed: 0,
        recordsValid: 0,
        recordsInvalid: 0,
        errors: ['Unsupported file type. Please use CSV or JSON.'],
        mappedQuestions: {},
        timestamp: new Date().toISOString(),
      };
    }

    // Parse file
    const parseResult = isCSV
      ? await parseCSVFile(file)
      : await parseJSONFile(file);

    if (parseResult.errors.length > 0 || !parseResult.data) {
      return {
        success: false,
        source: isCSV ? 'CSV' : 'JSON',
        recordsProcessed: 0,
        recordsValid: 0,
        recordsInvalid: 0,
        errors: parseResult.errors,
        mappedQuestions: {},
        timestamp: new Date().toISOString(),
      };
    }

    data = Array.isArray(parseResult.data) ? parseResult.data : [parseResult.data];
  }

  // Detect or use template
  let template: IngestionTemplate | null = null;

  if (templateId) {
    template = getTemplateById(templateId) || null;
  }

  if (!template) {
    template = detectTemplate(data);
  }

  if (!template) {
    // Use generic template
    template = isCSV
      ? getTemplateById('generic-csv')!
      : getTemplateById('generic-json')!;
  }

  // Validate data
  const validation = validateIngestionData(data, template);

  // Map to STEEL questions
  const mappedQuestions = mapToSteelQuestions(data, template);

  return {
    success: validation.valid,
    source: isCSV ? 'CSV' : 'JSON',
    template: template.id,
    recordsProcessed: data.length,
    recordsValid: validation.valid ? data.length : 0,
    recordsInvalid: validation.valid ? 0 : data.length,
    errors: validation.errors,
    mappedQuestions,
    timestamp: new Date().toISOString(),
  };
}

