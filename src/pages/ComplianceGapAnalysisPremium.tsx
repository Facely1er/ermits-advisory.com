import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Download, Save, CheckCircle, XCircle, AlertTriangle,
  TrendingUp, Lock, BarChart3, FileText
} from 'lucide-react';

interface Control {
  id: string;
  description: string;
  category: string;
  score: number;
}

const nistControls: Control[] = [
  // Identify
  { id: 'ID.AM-1', description: 'Physical devices and systems are inventoried', category: 'Asset Management', score: 3 },
  { id: 'ID.AM-2', description: 'Software platforms and applications are inventoried', category: 'Asset Management', score: 3 },
  { id: 'ID.AM-5', description: 'Resources are prioritized based on classification', category: 'Asset Management', score: 3 },
  { id: 'ID.GV-1', description: 'Cybersecurity policy is established', category: 'Governance', score: 3 },
  { id: 'ID.RA-1', description: 'Asset vulnerabilities are identified', category: 'Risk Assessment', score: 3 },
  { id: 'ID.RA-5', description: 'Threats and vulnerabilities are used to determine risk', category: 'Risk Assessment', score: 3 },
  // Protect
  { id: 'PR.AC-1', description: 'Identities and credentials are managed', category: 'Access Control', score: 3 },
  { id: 'PR.AC-4', description: 'Access permissions are managed', category: 'Access Control', score: 3 },
  { id: 'PR.AC-7', description: 'Users and devices are authenticated', category: 'Access Control', score: 3 },
  { id: 'PR.AT-1', description: 'All users are informed and trained', category: 'Awareness Training', score: 3 },
  { id: 'PR.DS-1', description: 'Data-at-rest is protected', category: 'Data Security', score: 3 },
  { id: 'PR.DS-2', description: 'Data-in-transit is protected', category: 'Data Security', score: 3 },
  { id: 'PR.IP-1', description: 'Baseline configuration is created', category: 'Information Protection', score: 3 },
  { id: 'PR.IP-4', description: 'Backups are conducted and tested', category: 'Information Protection', score: 3 },
  { id: 'PR.PT-1', description: 'Audit/log records are reviewed', category: 'Protective Technology', score: 3 },
  // Detect
  { id: 'DE.AE-2', description: 'Detected events are analyzed', category: 'Anomalies and Events', score: 3 },
  { id: 'DE.CM-1', description: 'Network is monitored', category: 'Continuous Monitoring', score: 3 },
  { id: 'DE.CM-4', description: 'Malicious code is detected', category: 'Continuous Monitoring', score: 3 },
  { id: 'DE.CM-8', description: 'Vulnerability scans are performed', category: 'Continuous Monitoring', score: 3 },
  // Respond
  { id: 'RS.RP-1', description: 'Response plan is executed', category: 'Response Planning', score: 3 },
  { id: 'RS.CO-2', description: 'Incidents are reported', category: 'Communications', score: 3 },
  { id: 'RS.AN-1', description: 'Notifications are investigated', category: 'Analysis', score: 3 },
  { id: 'RS.MI-2', description: 'Incidents are mitigated', category: 'Mitigation', score: 3 },
  // Recover
  { id: 'RC.RP-1', description: 'Recovery plan is executed', category: 'Recovery Planning', score: 3 },
  { id: 'RC.IM-1', description: 'Recovery plans incorporate lessons learned', category: 'Improvements', score: 3 }
];

export const ComplianceGapAnalysisPremium: React.FC = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [controls, setControls] = useState<Control[]>(nistControls);
  const [organizationName, setOrganizationName] = useState('');
  const [assessmentDate, setAssessmentDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedFramework, setSelectedFramework] = useState('NIST CSF');

  const updateControlScore = (id: string, score: number) => {
    setControls(controls.map(c => c.id === id ? { ...c, score } : c));
  };

  const getScoreLabel = (score: number) => {
    switch (score) {
      case 5: return 'Fully Implemented';
      case 4: return 'Mostly Implemented';
      case 3: return 'Partially Implemented';
      case 2: return 'Minimally Implemented';
      case 1: return 'Not Implemented';
      default: return 'Unknown';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 5) return 'green';
    if (score >= 4) return 'blue';
    if (score >= 3) return 'yellow';
    if (score >= 2) return 'orange';
    return 'red';
  };

  // Calculate statistics
  const totalControls = controls.length;
  const totalScore = controls.reduce((sum, c) => sum + c.score, 0);
  const maxScore = totalControls * 5;
  const maturityPercentage = ((totalScore / maxScore) * 100).toFixed(1);

  const scoreDistribution = {
    5: controls.filter(c => c.score === 5).length,
    4: controls.filter(c => c.score === 4).length,
    3: controls.filter(c => c.score === 3).length,
    2: controls.filter(c => c.score === 2).length,
    1: controls.filter(c => c.score === 1).length
  };

  const criticalGaps = controls.filter(c => c.score <= 2);
  const needsImprovement = controls.filter(c => c.score === 3);

  const handleExportPDF = () => {
    if (!isPremium) {
      alert('PDF Export is a Premium feature. Upgrade to access!');
      return;
    }
    alert('Exporting comprehensive gap analysis report...');
  };

  const handleSave = () => {
    if (!isPremium) {
      alert('Save functionality is a Premium feature. Upgrade to access!');
      return;
    }
    alert('Gap analysis saved successfully!');
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
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <span className="text-green-700 dark:text-green-400 font-semibold">Interactive Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Compliance Gap Analysis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            Interactive gap analysis tool for NIST CSF, ISO 27001, SOC 2, and more
          </p>

          {/* Premium Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-sm text-gray-600 dark:text-gray-400">Try Demo Mode</span>
            <button
              onClick={() => setIsPremium(!isPremium)}
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
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">Premium Mode</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Assessment Section */}
          <div className="lg:col-span-2">
            <Card variant="glass" padding="lg">
              {/* Organization Info */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Assessment Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Organization Name</label>
                    <input
                      type="text"
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="Enter organization name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Assessment Date</label>
                    <input
                      type="date"
                      value={assessmentDate}
                      onChange={(e) => setAssessmentDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2 dark:text-gray-200">Framework</label>
                  <select
                    value={selectedFramework}
                    onChange={(e) => setSelectedFramework(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                    disabled={!isPremium}
                  >
                    <option value="NIST CSF">NIST Cybersecurity Framework</option>
                    <option value="ISO 27001">ISO 27001 {!isPremium && '(Premium)'}</option>
                    <option value="SOC 2">SOC 2 {!isPremium && '(Premium)'}</option>
                    <option value="HIPAA">HIPAA {!isPremium && '(Premium)'}</option>
                    <option value="GDPR">GDPR {!isPremium && '(Premium)'}</option>
                  </select>
                  {!isPremium && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Multiple frameworks available in Premium version
                    </p>
                  )}
                </div>
              </div>

              {/* Controls Assessment */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Control Assessment</h3>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {controls.map((control) => (
                    <div key={control.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-sm font-semibold text-green-600 dark:text-green-400">
                              {control.id}
                            </span>
                            <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">
                              {control.category}
                            </span>
                          </div>
                          <p className="text-sm dark:text-gray-200">{control.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <input
                            type="range"
                            min="1"
                            max="5"
                            value={control.score}
                            onChange={(e) => updateControlScore(control.id, parseInt(e.target.value))}
                            className="w-full"
                          />
                          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                            <span>Not Implemented</span>
                            <span className={`font-semibold text-${getScoreColor(control.score)}-600`}>
                              {control.score} - {getScoreLabel(control.score)}
                            </span>
                            <span>Fully Implemented</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap">
                <Button
                  variant="primary"
                  icon={<Save size={20} />}
                  onClick={handleSave}
                  className="relative"
                >
                  Save Assessment
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
              </div>
            </Card>
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Maturity Score */}
              <Card variant="glass" padding="lg" className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Maturity Score</h3>

                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {maturityPercentage}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Overall Compliance</div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="dark:text-gray-200">Total Score</span>
                    <span className="font-semibold dark:text-white">{totalScore} / {maxScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${maturityPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="text-center text-sm">
                  {parseFloat(maturityPercentage) >= 90 && (
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      ✓ Excellent maturity level
                    </span>
                  )}
                  {parseFloat(maturityPercentage) >= 75 && parseFloat(maturityPercentage) < 90 && (
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      Good maturity, room for improvement
                    </span>
                  )}
                  {parseFloat(maturityPercentage) >= 60 && parseFloat(maturityPercentage) < 75 && (
                    <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                      Moderate maturity, gaps identified
                    </span>
                  )}
                  {parseFloat(maturityPercentage) < 60 && (
                    <span className="text-red-600 dark:text-red-400 font-semibold">
                      Significant gaps require attention
                    </span>
                  )}
                </div>
              </Card>

              {/* Score Distribution */}
              <Card variant="glass" padding="md">
                <h4 className="font-bold mb-3 dark:text-white flex items-center gap-2">
                  <BarChart3 size={18} className="text-green-600" />
                  Score Distribution
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm flex-1 dark:text-gray-200">Fully Implemented (5)</span>
                    <span className="font-semibold text-sm dark:text-white">{scoreDistribution[5]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm flex-1 dark:text-gray-200">Mostly Implemented (4)</span>
                    <span className="font-semibold text-sm dark:text-white">{scoreDistribution[4]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm flex-1 dark:text-gray-200">Partially Implemented (3)</span>
                    <span className="font-semibold text-sm dark:text-white">{scoreDistribution[3]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-sm flex-1 dark:text-gray-200">Minimally Implemented (2)</span>
                    <span className="font-semibold text-sm dark:text-white">{scoreDistribution[2]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm flex-1 dark:text-gray-200">Not Implemented (1)</span>
                    <span className="font-semibold text-sm dark:text-white">{scoreDistribution[1]}</span>
                  </div>
                </div>
              </Card>

              {/* Priority Gaps */}
              <Card variant="glass" padding="md">
                <h4 className="font-bold mb-3 dark:text-white flex items-center gap-2">
                  <AlertTriangle size={18} className="text-red-600" />
                  Priority Gaps
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-200">Critical Gaps (≤2)</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">{criticalGaps.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="dark:text-gray-200">Needs Improvement (3)</span>
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400">{needsImprovement.length}</span>
                  </div>
                </div>

                {criticalGaps.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-semibold mb-2 dark:text-gray-200">Top Critical Gaps:</p>
                    <ul className="text-xs space-y-1">
                      {criticalGaps.slice(0, 3).map(gap => (
                        <li key={gap.id} className="flex items-start gap-1">
                          <XCircle size={12} className="text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="dark:text-gray-300">{gap.id}: {gap.description.substring(0, 40)}...</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>

              {/* Premium CTA */}
              {!isPremium && (
                <Card variant="glass" padding="lg" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                  <div className="text-center">
                    <PremiumBadge />
                    <h4 className="font-bold text-lg mt-3 mb-2 dark:text-white">Unlock Premium Features</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Multiple frameworks, save assessments, export detailed reports
                    </p>
                    <Button variant="primary" size="sm" className="w-full">
                      Upgrade to Premium - $499/year
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
