import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Download, Save, AlertTriangle,
  Lock, FileText, FolderOpen, Trash2, Loader
} from 'lucide-react';
import { generateIncidentResponsePDF } from '../utils/pdfGenerator';
import {
  saveAssessment,
  getSavedAssessments,
  deleteAssessment,
  SavedAssessment
} from '../utils/storage';

interface IncidentData {
  incidentTitle: string;
  incidentDate: string;
  incidentType: string;
  severity: number; // 1-5
  status: string;
  description: string;
  detectionMethod: string;
  affectedSystems: string;
  dataImpact: number; // 0-10
  businessImpact: number; // 0-10
  financialImpact: number; // 0-10
  containmentTime: string; // hours
  eradicationTime: string; // hours
  recoveryTime: string; // hours
  communicationStatus: number; // 1-5
  regulatoryNotification: boolean;
  customerNotification: boolean;
  lessonsLearned: string;
  remediationActions: string;
}

const incidentTypes = [
  'Ransomware',
  'Data Breach',
  'Malware',
  'Phishing',
  'DDoS',
  'Insider Threat',
  'System Compromise',
  'Other'
];

const incidentStatuses = [
  'Detected',
  'Contained',
  'Eradicated',
  'Recovered',
  'Post-Incident'
];

export const IncidentResponsePremium: React.FC = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [incidentData, setIncidentData] = useState<IncidentData>({
    incidentTitle: '',
    incidentDate: new Date().toISOString().split('T')[0],
    incidentType: 'Ransomware',
    severity: 3,
    status: 'Detected',
    description: '',
    detectionMethod: '',
    affectedSystems: '',
    dataImpact: 5,
    businessImpact: 5,
    financialImpact: 5,
    containmentTime: '0',
    eradicationTime: '0',
    recoveryTime: '0',
    communicationStatus: 3,
    regulatoryNotification: false,
    customerNotification: false,
    lessonsLearned: '',
    remediationActions: ''
  });
  const [savedAssessments, setSavedAssessments] = useState<SavedAssessment[]>([]);
  const [showSavedList, setShowSavedList] = useState(false);
  const [saving, setSaving] = useState(false);

  // Calculate incident metrics
  const calculateResponseTime = () => {
    const containment = parseFloat(incidentData.containmentTime) || 0;
    const eradication = parseFloat(incidentData.eradicationTime) || 0;
    const recovery = parseFloat(incidentData.recoveryTime) || 0;
    return (containment + eradication + recovery).toFixed(1);
  };

  const calculateImpactScore = () => {
    const dataImpact = incidentData.dataImpact;
    const businessImpact = incidentData.businessImpact;
    const financialImpact = incidentData.financialImpact;
    return ((dataImpact + businessImpact + financialImpact) / 3).toFixed(1);
  };

  const getSeverityLabel = (severity: number) => {
    switch (severity) {
      case 5: return 'Critical';
      case 4: return 'High';
      case 3: return 'Medium';
      case 2: return 'Low';
      case 1: return 'Minimal';
      default: return 'Unknown';
    }
  };

  const getSeverityColor = (severity: number) => {
    if (severity >= 5) return 'red';
    if (severity >= 4) return 'orange';
    if (severity >= 3) return 'yellow';
    if (severity >= 2) return 'blue';
    return 'green';
  };

  const responseTime = parseFloat(calculateResponseTime());
  const impactScore = parseFloat(calculateImpactScore());

  // Load saved assessments on mount and when premium mode changes
  useEffect(() => {
    if (isPremium) {
      const saved = getSavedAssessments('incident-response');
      setSavedAssessments(saved);
    }
  }, [isPremium]);

  const handleExportPDF = () => {
    if (!isPremium) {
      alert('PDF Export is a Premium feature. Upgrade to access!');
      return;
    }
    
    try {
      generateIncidentResponsePDF({
        incidentData,
        responseTime,
        impactScore,
        severityLabel: getSeverityLabel(incidentData.severity)
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const handleSave = () => {
    if (!isPremium) {
      alert('Save functionality is a Premium feature. Upgrade to access!');
      return;
    }
    
    setSaving(true);
    
    try {
      const assessmentData = {
        incidentData,
        responseTime,
        impactScore,
        severityLabel: getSeverityLabel(incidentData.severity)
      };
      
      saveAssessment('incident-response', assessmentData, incidentData.incidentTitle || undefined);
      const updated = getSavedAssessments('incident-response');
      setSavedAssessments(updated);
      
      setTimeout(() => {
        setSaving(false);
        alert(`Incident assessment saved successfully! (${updated.length} total saved)`);
      }, 300);
    } catch (error) {
      setSaving(false);
      alert('Error saving assessment. Please try again.');
      console.error('Save error:', error);
    }
  };

  const handleLoadAssessment = (assessment: SavedAssessment) => {
    const data = assessment.data;
    setIncidentData(data.incidentData || incidentData);
    setShowSavedList(false);
    alert(`Incident assessment "${assessment.name}" loaded successfully!`);
  };

  const handleDeleteAssessment = (id: string) => {
    if (confirm('Are you sure you want to delete this incident assessment?')) {
      deleteAssessment('incident-response', id);
      const updated = getSavedAssessments('incident-response');
      setSavedAssessments(updated);
      alert('Incident assessment deleted successfully!');
    }
  };

  const PremiumBadge = () => (
    <div className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded text-white text-xs font-bold">
      <Lock size={12} />
      PREMIUM
    </div>
  );

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-12 text-center"
        >
          <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <span className="text-red-700 dark:text-red-400 font-semibold">Interactive Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Incident Response Tracker
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            Track and document security incidents with comprehensive assessment and reporting
          </p>

          {/* Premium Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-sm text-gray-600 dark:text-gray-400">Try Demo Mode</span>
            <button
              onClick={() => setIsPremium(!isPremium)}
              aria-label={isPremium ? 'Disable Premium Mode' : 'Enable Premium Mode'}
              title={isPremium ? 'Disable Premium Mode' : 'Enable Premium Mode'}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isPremium ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isPremium ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-sm font-semibold text-red-600 dark:text-red-400">Premium Mode</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Incident Details Section */}
          <div className="lg:col-span-2">
            <Card variant="glass" padding="lg">
              {/* Basic Incident Information */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Incident Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Incident Title</label>
                    <input
                      type="text"
                      value={incidentData.incidentTitle}
                      onChange={(e) => setIncidentData({ ...incidentData, incidentTitle: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="Enter incident title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Incident Date</label>
                    <input
                      type="date"
                      value={incidentData.incidentDate}
                      onChange={(e) => setIncidentData({ ...incidentData, incidentDate: e.target.value })}
                      aria-label="Incident Date"
                      title="Incident Date"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Incident Type</label>
                    <select
                      value={incidentData.incidentType}
                      onChange={(e) => setIncidentData({ ...incidentData, incidentType: e.target.value })}
                      aria-label="Incident Type"
                      title="Incident Type"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                    >
                      {incidentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Status</label>
                    <select
                      value={incidentData.status}
                      onChange={(e) => setIncidentData({ ...incidentData, status: e.target.value })}
                      aria-label="Status"
                      title="Status"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                    >
                      {incidentStatuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                    Severity (1-5) - Current: {incidentData.severity} - {getSeverityLabel(incidentData.severity)}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={incidentData.severity}
                    onChange={(e) => setIncidentData({ ...incidentData, severity: parseInt(e.target.value) })}
                    aria-label={`Severity (1-5) - Current: ${incidentData.severity} - ${getSeverityLabel(incidentData.severity)}`}
                    title={`Severity (1-5) - Current: ${incidentData.severity} - ${getSeverityLabel(incidentData.severity)}`}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <span>Minimal</span>
                    <span className="font-semibold">{incidentData.severity}</span>
                    <span>Critical</span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 dark:text-gray-200">Description</label>
                  <textarea
                    value={incidentData.description}
                    onChange={(e) => setIncidentData({ ...incidentData, description: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                    placeholder="Describe the incident..."
                  />
                </div>
              </div>

              {/* Detection & Impact */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
                  Detection & Impact Assessment
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Detection Method</label>
                    <input
                      type="text"
                      value={incidentData.detectionMethod}
                      onChange={(e) => setIncidentData({ ...incidentData, detectionMethod: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="e.g., SIEM alert, user report, external notification"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Affected Systems</label>
                    <input
                      type="text"
                      value={incidentData.affectedSystems}
                      onChange={(e) => setIncidentData({ ...incidentData, affectedSystems: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="List affected systems, applications, or services"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Data Impact (0-10) - Current: {incidentData.dataImpact}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={incidentData.dataImpact}
                      onChange={(e) => setIncidentData({ ...incidentData, dataImpact: parseInt(e.target.value) })}
                      aria-label={`Data Impact (0-10) - Current: ${incidentData.dataImpact}`}
                      title={`Data Impact (0-10) - Current: ${incidentData.dataImpact}`}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>No data impact</span>
                      <span className="font-semibold">{incidentData.dataImpact}</span>
                      <span>Massive data breach</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Business Impact (0-10) - Current: {incidentData.businessImpact}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={incidentData.businessImpact}
                      onChange={(e) => setIncidentData({ ...incidentData, businessImpact: parseInt(e.target.value) })}
                      aria-label={`Business Impact (0-10) - Current: ${incidentData.businessImpact}`}
                      title={`Business Impact (0-10) - Current: ${incidentData.businessImpact}`}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>No business impact</span>
                      <span className="font-semibold">{incidentData.businessImpact}</span>
                      <span>Complete business disruption</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Financial Impact (0-10) - Current: {incidentData.financialImpact}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={incidentData.financialImpact}
                      onChange={(e) => setIncidentData({ ...incidentData, financialImpact: parseInt(e.target.value) })}
                      aria-label={`Financial Impact (0-10) - Current: ${incidentData.financialImpact}`}
                      title={`Financial Impact (0-10) - Current: ${incidentData.financialImpact}`}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>&lt; $10K</span>
                      <span className="font-semibold">{incidentData.financialImpact}</span>
                      <span>&gt; $1M</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Timeline */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  Response Timeline (Hours)
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Containment Time</label>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      value={incidentData.containmentTime}
                      onChange={(e) => setIncidentData({ ...incidentData, containmentTime: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Eradication Time</label>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      value={incidentData.eradicationTime}
                      onChange={(e) => setIncidentData({ ...incidentData, eradicationTime: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Recovery Time</label>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      value={incidentData.recoveryTime}
                      onChange={(e) => setIncidentData({ ...incidentData, recoveryTime: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              {/* Communication & Notification */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  Communication & Notification
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Communication Status (1-5) - Current: {incidentData.communicationStatus}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={incidentData.communicationStatus}
                      onChange={(e) => setIncidentData({ ...incidentData, communicationStatus: parseInt(e.target.value) })}
                      aria-label={`Communication Status (1-5) - Current: ${incidentData.communicationStatus}`}
                      title={`Communication Status (1-5) - Current: ${incidentData.communicationStatus}`}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>No communication</span>
                      <span className="font-semibold">{incidentData.communicationStatus}</span>
                      <span>Fully communicated</span>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 dark:text-gray-200">
                      <input
                        type="checkbox"
                        checked={incidentData.regulatoryNotification}
                        onChange={(e) => setIncidentData({ ...incidentData, regulatoryNotification: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span>Regulatory Notification Required</span>
                    </label>
                    <label className="flex items-center gap-2 dark:text-gray-200">
                      <input
                        type="checkbox"
                        checked={incidentData.customerNotification}
                        onChange={(e) => setIncidentData({ ...incidentData, customerNotification: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span>Customer Notification Required</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Post-Incident */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">
                  Post-Incident Review
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Remediation Actions</label>
                    <textarea
                      value={incidentData.remediationActions}
                      onChange={(e) => setIncidentData({ ...incidentData, remediationActions: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="List remediation actions taken..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Lessons Learned</label>
                    <textarea
                      value={incidentData.lessonsLearned}
                      onChange={(e) => setIncidentData({ ...incidentData, lessonsLearned: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="Document lessons learned and improvements..."
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap mb-4">
                <Button
                  variant="primary"
                  icon={saving ? <Loader size={20} className="animate-spin" /> : <Save size={20} />}
                  onClick={handleSave}
                  className="relative"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Assessment'}
                  {!isPremium && (
                    <div className="absolute -top-2 -right-2">
                      <PremiumBadge />
                    </div>
                  )}
                </Button>
                <Button
                  variant="secondary"
                  icon={<Download size={20} />}
                  onClick={handleExportPDF}
                  className="relative"
                >
                  Export PDF Report
                  {!isPremium && (
                    <div className="absolute -top-2 -right-2">
                      <PremiumBadge />
                    </div>
                  )}
                </Button>
                {isPremium && savedAssessments.length > 0 && (
                  <Button
                    variant="outline"
                    icon={<FolderOpen size={20} />}
                    onClick={() => setShowSavedList(!showSavedList)}
                  >
                    Saved Assessments ({savedAssessments.length})
                  </Button>
                )}
              </div>

              {/* Saved Assessments List */}
              {isPremium && showSavedList && savedAssessments.length > 0 && (
                <Card variant="glass" padding="md" className="mb-4">
                  <h4 className="text-lg font-bold mb-3 dark:text-white">Saved Incident Assessments</h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {savedAssessments.map((assessment) => (
                      <div
                        key={assessment.id}
                        className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex-1">
                          <div className="font-semibold text-sm dark:text-white">{assessment.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(assessment.timestamp).toLocaleString()}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            icon={<FolderOpen size={16} />}
                            onClick={() => handleLoadAssessment(assessment)}
                            title="Load assessment"
                          >
                            Load
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            icon={<Trash2 size={16} />}
                            onClick={() => handleDeleteAssessment(assessment.id)}
                            title="Delete assessment"
                            className="text-red-600 hover:text-red-700"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Incident Summary */}
              <Card variant="glass" padding="lg" className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Incident Summary</h3>

                <div className="text-center mb-6">
                  <div className={`text-6xl font-bold mb-2 text-${getSeverityColor(incidentData.severity)}-600 dark:text-${getSeverityColor(incidentData.severity)}-400`}>
                    {incidentData.severity}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Severity Level</div>
                  <div className={`text-lg font-semibold mt-2 text-${getSeverityColor(incidentData.severity)}-700 dark:text-${getSeverityColor(incidentData.severity)}-400`}>
                    {getSeverityLabel(incidentData.severity)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm dark:text-gray-200">Impact Score</span>
                    <span className="font-bold text-red-600 dark:text-red-400">{impactScore}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${impactScore * 10}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm dark:text-gray-200">Response Time</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{responseTime}h</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((responseTime / 48) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </Card>

              {/* Incident Details */}
              <Card variant="glass" padding="md">
                <h4 className="font-bold mb-3 dark:text-white flex items-center gap-2">
                  <FileText size={18} className="text-red-600" />
                  Incident Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-200">Type</span>
                    <span className="font-semibold dark:text-white">{incidentData.incidentType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-200">Status</span>
                    <span className="font-semibold dark:text-white">{incidentData.status}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-200">Date</span>
                    <span className="font-semibold dark:text-white">{incidentData.incidentDate}</span>
                  </div>
                </div>
              </Card>

              {/* Impact Breakdown */}
              <Card variant="glass" padding="md">
                <h4 className="font-bold mb-3 dark:text-white flex items-center gap-2">
                  <AlertTriangle size={18} className="text-orange-600" />
                  Impact Breakdown
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-200">Data Impact</span>
                    <span className="font-semibold dark:text-white">{incidentData.dataImpact}/10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-200">Business Impact</span>
                    <span className="font-semibold dark:text-white">{incidentData.businessImpact}/10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-200">Financial Impact</span>
                    <span className="font-semibold dark:text-white">{incidentData.financialImpact}/10</span>
                  </div>
                </div>
              </Card>

              {/* Premium CTA */}
              {!isPremium && (
                <Card variant="glass" padding="lg" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                  <div className="text-center">
                    <PremiumBadge />
                    <h4 className="font-bold text-lg mt-3 mb-2 dark:text-white">Unlock Premium Features</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Save assessments, export PDF reports, track incident history
                    </p>
                    <Button variant="primary" size="sm" className="w-full">
                      Upgrade to Premium - $349/year
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

