/**
 * CSV Importer Component
 * 
 * File upload component with drag-drop for CSV files
 */

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, X, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from '../../../components/shared/Card';
import { Button } from '../../../components/shared/Button';
import { parseCSVFile } from '../../services/dataIngestionService';

interface CSVImporterProps {
  onFileParsed: (data: any[], errors: string[]) => void;
  onFileSelected?: (file: File) => void;
  maxSize?: number; // in MB
}

export const CSVImporter: React.FC<CSVImporterProps> = ({
  onFileParsed,
  onFileSelected,
  maxSize = 10,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedData, setParsedData] = useState<any[] | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>('');

  const handleFileSelect = async (file: File) => {
    if (!file.name.endsWith('.csv')) {
      const error = 'Please select a valid CSV file.';
      setErrors([error]);
      setParsedData(null);
      onFileParsed([], [error]);
      return;
    }

    if (file.size > maxSize * 1024 * 1024) {
      const error = `File size exceeds maximum of ${maxSize}MB.`;
      setErrors([error]);
      setParsedData(null);
      onFileParsed([], [error]);
      return;
    }

    setIsProcessing(true);
    setFileName(file.name);
    setErrors([]);
    onFileSelected?.(file);

    try {
      const result = await parseCSVFile(file);
      setParsedData(result.data);
      setErrors(result.errors);
      onFileParsed(result.data, result.errors);
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : 'Failed to parse CSV file.';
      setErrors([errorMsg]);
      setParsedData(null);
      onFileParsed([], [errorMsg]);
    } finally {
      setIsProcessing(false);
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

  const handleClear = () => {
    setParsedData(null);
    setErrors([]);
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card variant="glass" padding="md">
      <div className="flex items-center gap-3 mb-4">
        <FileText size={20} className="text-navy dark:text-silver" />
        <h3 className="text-lg font-semibold dark:text-white">Import CSV File</h3>
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
        <Upload
          size={48}
          className={`mx-auto mb-4 ${
            isDragging
              ? 'text-navy dark:text-gold'
              : 'text-gray-400 dark:text-gray-500'
          }`}
        />
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Drag and drop your CSV file here, or click to browse
        </p>
        <Button
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Select CSV File'}
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          onChange={handleFileInputChange}
          className="hidden"
          aria-label="Import CSV file"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Maximum file size: {maxSize}MB
        </p>
      </div>

      {/* File info */}
      {fileName && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">{fileName}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClear}>
            <X size={16} />
          </Button>
        </motion.div>
      )}

      {/* Success message */}
      {parsedData && parsedData.length > 0 && errors.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2"
        >
          <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
          <span className="text-green-700 dark:text-green-300 text-sm">
            Successfully parsed {parsedData.length} rows
          </span>
        </motion.div>
      )}

      {/* Error message */}
      {errors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
        >
          <div className="flex items-start gap-2">
            <AlertCircle
              size={20}
              className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"
            />
            <div className="flex-1">
              <p className="text-red-700 dark:text-red-300 text-sm font-medium mb-1">
                Parsing Errors:
              </p>
              <ul className="text-red-600 dark:text-red-400 text-sm list-disc list-inside">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Preview */}
      {parsedData && parsedData.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Preview (first 5 rows):
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full text-xs">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  {Object.keys(parsedData[0]).slice(0, 5).map((key) => (
                    <th
                      key={key}
                      className="px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-300"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {parsedData.slice(0, 5).map((row, index) => (
                  <tr key={index}>
                    {Object.keys(row)
                      .slice(0, 5)
                      .map((key) => (
                        <td
                          key={key}
                          className="px-3 py-2 text-gray-600 dark:text-gray-400"
                        >
                          {String(row[key] || '').substring(0, 30)}
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Card>
  );
};

