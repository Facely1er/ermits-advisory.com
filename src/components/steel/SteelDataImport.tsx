import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { importSteelAssessment } from '../../services/steelAssessmentService';

interface SteelDataImportProps {
  onImportSuccess?: () => void;
  onImportError?: (error: string) => void;
}

export const SteelDataImport: React.FC<SteelDataImportProps> = ({
  onImportSuccess,
  onImportError,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileSelect = async (file: File) => {
    if (!file.name.endsWith('.json')) {
      const error = 'Please select a valid JSON file.';
      setErrorMessage(error);
      setImportStatus('error');
      onImportError?.(error);
      return;
    }

    setIsImporting(true);
    setImportStatus('idle');
    setErrorMessage('');

    try {
      const text = await file.text();
      importSteelAssessment(text);
      setImportStatus('success');
      onImportSuccess?.();
      setTimeout(() => {
        setImportStatus('idle');
      }, 3000);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to import diagnostic data.';
      setErrorMessage(errorMsg);
      setImportStatus('error');
      onImportError?.(errorMsg);
    } finally {
      setIsImporting(false);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <Card variant="glass" padding="md">
      <div className="flex items-center gap-3 mb-4">
        <Upload size={20} className="text-navy dark:text-silver" />
        <h3 className="text-lg font-semibold dark:text-white">Import STEEL™ Diagnostic</h3>
      </div>

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? 'border-navy dark:border-gold bg-navy/5 dark:bg-gold/10'
            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <FileText size={48} className="mx-auto mb-4 text-gray-400 dark:text-gray-500" />
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Drag and drop your STEEL™ Diagnostic JSON file here, or click to browse
        </p>
        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isImporting}
        >
          {isImporting ? 'Importing...' : 'Select File'}
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          onChange={handleFileInputChange}
          className="hidden"
          aria-label="Import STEEL™ Diagnostic JSON file"
          title="Select a JSON file exported from the STEEL™ Diagnostic"
        />
      </div>

      {importStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2"
        >
          <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
          <span className="text-green-700 dark:text-green-300 text-sm">
            Diagnostic data imported successfully!
          </span>
        </motion.div>
      )}

      {importStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2"
        >
          <AlertCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <span className="text-red-700 dark:text-red-300 text-sm">{errorMessage}</span>
        </motion.div>
      )}

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
        Import a JSON file exported from the STEEL™ Diagnostic to view results in the dashboard.
      </p>
    </Card>
  );
};

