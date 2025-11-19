/**
 * Data Import Wizard Component
 * 
 * Multi-step wizard for file upload, mapping, validation, and import
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Upload, Map, CheckCircle, FileCheck, Download } from 'lucide-react';
import { Card } from '../../../components/shared/Card';
import { Button } from '../../../components/shared/Button';
import { CSVImporter } from '../ingestion/CSVImporter';
import { JSONImporter } from '../ingestion/JSONImporter';
import { processFileIngestion, DataIngestionResult } from '../../services/dataIngestionService';
import { getAvailableTemplates, detectTemplate } from '../../data/ingestionTemplates';

interface DataImportWizardProps {
  onImportComplete?: (result: DataIngestionResult) => void;
}

type WizardStep = 'upload' | 'template' | 'validate' | 'import';

export const DataImportWizard: React.FC<DataImportWizardProps> = ({
  onImportComplete,
}) => {
  const [currentStep, setCurrentStep] = useState<WizardStep>('upload');
  const [parsedData, setParsedData] = useState<any[] | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [ingestionResult, setIngestionResult] = useState<DataIngestionResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const steps: { id: WizardStep; label: string; icon: React.ReactNode }[] = [
    { id: 'upload', label: 'Upload', icon: <Upload size={18} /> },
    { id: 'template', label: 'Template', icon: <Map size={18} /> },
    { id: 'validate', label: 'Validate', icon: <FileCheck size={18} /> },
    { id: 'import', label: 'Import', icon: <Download size={18} /> },
  ];

  const handleCSVFileParsed = async (data: any[], errors: string[]) => {
    if (errors.length === 0 && data.length > 0) {
      setParsedData(data);
      // Auto-detect template from data structure
      const detectedTemplate = detectTemplate(data);
      if (detectedTemplate) {
        setSelectedTemplate(detectedTemplate.id);
      }
      if (currentStep === 'upload') {
        setCurrentStep('template');
      }
    }
  };

  const handleJSONFileParsed = async (data: any, errors: string[]) => {
    if (errors.length === 0 && data) {
      const dataArray = Array.isArray(data) ? data : [data];
      setParsedData(dataArray);
      // Auto-detect template from data structure
      const detectedTemplate = detectTemplate(dataArray);
      if (detectedTemplate) {
        setSelectedTemplate(detectedTemplate.id);
      }
      if (currentStep === 'upload') {
        setCurrentStep('template');
      }
    }
  };


  const handleTemplateSelect = async () => {
    if (!selectedTemplate || !parsedData) return;

    setIsProcessing(true);
    try {
      // Create a mock file object for processing (we already have parsed data)
      const fileType = selectedFile?.name.endsWith('.json') ? 'json' : 'csv';
      const mockFile = selectedFile || new File([], `imported-data.${fileType}`, { type: fileType === 'json' ? 'application/json' : 'text/csv' });
      const result = await processFileIngestion(mockFile, selectedTemplate, parsedData);
      setIngestionResult(result);
      setCurrentStep('validate');
    } catch (error) {
      console.error('Error processing file:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleImport = () => {
    if (ingestionResult) {
      onImportComplete?.(ingestionResult);
      // Reset wizard
      setCurrentStep('upload');
      setSelectedFile(null);
      setParsedData(null);
      setSelectedTemplate('');
      setIngestionResult(null);
    }
  };

  const templates = getAvailableTemplates();

  return (
    <Card variant="glass" padding="lg">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">Data Import Wizard</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Import security tool data to auto-populate STEEL scores
        </p>
      </div>

      {/* Step indicator */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = steps.findIndex((s) => s.id === currentStep) > index;
          const isClickable = isCompleted || step.id === currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1">
                <button
                  onClick={() => isClickable && setCurrentStep(step.id)}
                  disabled={!isClickable}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                    isActive
                      ? 'bg-navy text-white dark:bg-navy'
                      : isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                  } ${isClickable ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed'}`}
                >
                  {isCompleted ? <CheckCircle size={20} /> : step.icon}
                </button>
                <span
                  className={`mt-2 text-xs font-medium ${
                    isActive
                      ? 'text-navy dark:text-silver'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 'upload' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 dark:text-white">CSV Import</h4>
                  <CSVImporter 
                    onFileParsed={handleCSVFileParsed}
                    onFileSelected={setSelectedFile}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 dark:text-white">JSON Import</h4>
                  <JSONImporter 
                    onFileParsed={handleJSONFileParsed}
                    onFileSelected={setSelectedFile}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 'template' && (
            <div>
              <h4 className="text-lg font-semibold mb-4 dark:text-white">
                Select Data Source Template
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {templates
                  .filter((t) => t.id !== 'generic-csv' && t.id !== 'generic-json')
                  .map((template) => (
                    <Card
                      key={template.id}
                      variant="outline"
                      padding="md"
                      className={`cursor-pointer transition-all ${
                        selectedTemplate === template.id
                          ? 'border-navy dark:border-gold bg-navy/5 dark:bg-gold/10'
                          : 'hover:border-navy/40 dark:hover:border-gold/40'
                      }`}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <h5 className="font-semibold mb-1 dark:text-white">{template.name}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {template.description}
                      </p>
                    </Card>
                  ))}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setCurrentStep('upload')}>
                  <ChevronLeft size={16} className="mr-1" />
                  Back
                </Button>
                <Button
                  variant="primary"
                  onClick={handleTemplateSelect}
                  disabled={!selectedTemplate || isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Continue'}
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 'validate' && ingestionResult && (
            <div>
              <h4 className="text-lg font-semibold mb-4 dark:text-white">Validation Results</h4>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Records Processed</p>
                      <p className="text-2xl font-bold dark:text-white">
                        {ingestionResult.recordsProcessed}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Valid Records</p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {ingestionResult.recordsValid}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Invalid Records</p>
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {ingestionResult.recordsInvalid}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Template</p>
                      <p className="text-lg font-semibold dark:text-white">
                        {ingestionResult.template || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>

                {ingestionResult.errors.length > 0 && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="font-semibold text-red-700 dark:text-red-300 mb-2">Errors:</p>
                    <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400">
                      {ingestionResult.errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {Object.keys(ingestionResult.mappedQuestions).length > 0 && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      Mapped Questions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {Object.keys(ingestionResult.mappedQuestions).map((q) => (
                        <span
                          key={q}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded text-sm"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setCurrentStep('template')}>
                  <ChevronLeft size={16} className="mr-1" />
                  Back
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setCurrentStep('import')}
                  disabled={!ingestionResult.success}
                >
                  Continue
                  <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 'import' && ingestionResult && (
            <div>
              <h4 className="text-lg font-semibold mb-4 dark:text-white">Import Confirmation</h4>
              <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={24} className="text-green-600 dark:text-green-400" />
                  <p className="text-lg font-semibold text-green-700 dark:text-green-300">
                    Ready to Import
                  </p>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  Your data has been validated and mapped to STEEL questions. Click Import to
                  process the data and update your scores.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    <strong>Records:</strong> {ingestionResult.recordsValid} valid
                  </p>
                  <p>
                    <strong>Questions Mapped:</strong>{' '}
                    {Object.keys(ingestionResult.mappedQuestions).length}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setCurrentStep('validate')}>
                  <ChevronLeft size={16} className="mr-1" />
                  Back
                </Button>
                <Button variant="primary" onClick={handleImport}>
                  <Download size={16} className="mr-1" />
                  Import Data
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};

