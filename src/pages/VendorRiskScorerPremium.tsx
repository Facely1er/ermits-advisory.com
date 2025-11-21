import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import {
  Download, AlertCircle,
  CheckCircle, Save, Lock
} from 'lucide-react';
import { generateVendorRiskPDF } from '../utils/pdfGenerator';

interface VendorData {
  vendorName: string;
  assessmentDate: string;
  dataSensitivity: number;
  dataVolume: number;
  systemAccess: number;
  regulatoryScore: number;
  geographicRisk: number;
  securityPosture: number;
  certifications: number;
  incidentHistory: number;
  securityMaturity: number;
  transparency: number;
  serviceCriticality: number;
  financialImpact: number;
  dependency: number;
  integration: number;
  userImpact: number;
}

export const VendorRiskScorerPremium: React.FC = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [vendorData, setVendorData] = useState<VendorData>({
    vendorName: '',
    assessmentDate: new Date().toISOString().split('T')[0],
    dataSensitivity: 5,
    dataVolume: 3,
    systemAccess: 3,
    regulatoryScore: 3,
    geographicRisk: 0,
    securityPosture: 5,
    certifications: 5,
    incidentHistory: 10,
    securityMaturity: 6,
    transparency: 2,
    serviceCriticality: 5,
    financialImpact: 3,
    dependency: 2,
    integration: 2,
    userImpact: 2
  });

  // Calculate risk scores
  const calculateInherentRisk = () => {
    const dataSensScore = (vendorData.dataSensitivity / 10) * 35;
    const dataVolScore = (vendorData.dataVolume / 6) * 15;
    const accessScore = (vendorData.systemAccess / 6) * 25;
    const regScore = (vendorData.regulatoryScore / 10) * 15;
    const geoScore = (vendorData.geographicRisk / 9) * 10;
    return ((dataSensScore + dataVolScore + accessScore + regScore + geoScore) / 10).toFixed(2);
  };

  const calculateResidualRisk = () => {
    const securityAvg = (
      (vendorData.securityPosture / 10) * 35 +
      (vendorData.certifications / 10) * 25 +
      (vendorData.incidentHistory / 10) * 20 +
      (vendorData.securityMaturity / 10) * 15 +
      ((vendorData.transparency / 3) * 10) * 5
    ) / 10;
    return (10 - securityAvg).toFixed(2);
  };

  const calculateBusinessCriticality = () => {
    const critScore = (vendorData.serviceCriticality / 10) * 40;
    const finScore = ((vendorData.financialImpact / 5) * 10) * 20;
    const depScore = ((vendorData.dependency / 4) * 10) * 20;
    const intScore = ((vendorData.integration / 3) * 10) * 10;
    const userScore = ((vendorData.userImpact / 3) * 10) * 10;
    return ((critScore + finScore + depScore + intScore + userScore) / 10).toFixed(2);
  };

  const inherentRisk = parseFloat(calculateInherentRisk());
  const residualRisk = parseFloat(calculateResidualRisk());
  const businessCriticality = parseFloat(calculateBusinessCriticality());

  const finalScore = (
    inherentRisk * 0.4 +
    residualRisk * 0.3 +
    businessCriticality * 0.3
  ).toFixed(2);

  const getRiskTier = (score: number) => {
    if (score >= 8.0) return { tier: 1, label: 'Critical Risk', color: 'red' };
    if (score >= 6.0) return { tier: 2, label: 'High Risk', color: 'orange' };
    if (score >= 4.0) return { tier: 3, label: 'Medium Risk', color: 'yellow' };
    return { tier: 4, label: 'Low Risk', color: 'green' };
  };

  const riskTier = getRiskTier(parseFloat(finalScore));

  const handleExportPDF = () => {
    if (!isPremium) {
      alert('PDF Export is a Premium feature. Upgrade to access!');
      return;
    }
    
    try {
      generateVendorRiskPDF({
        vendorName: vendorData.vendorName,
        assessmentDate: vendorData.assessmentDate,
        vendorData: {
          dataSensitivity: vendorData.dataSensitivity,
          dataVolume: vendorData.dataVolume,
          systemAccess: vendorData.systemAccess,
          regulatoryScore: vendorData.regulatoryScore,
          geographicRisk: vendorData.geographicRisk,
          securityPosture: vendorData.securityPosture,
          certifications: vendorData.certifications,
          incidentHistory: vendorData.incidentHistory,
          securityMaturity: vendorData.securityMaturity,
          transparency: vendorData.transparency,
          serviceCriticality: vendorData.serviceCriticality,
          financialImpact: vendorData.financialImpact,
          dependency: vendorData.dependency,
          integration: vendorData.integration,
          userImpact: vendorData.userImpact
        },
        inherentRisk,
        residualRisk,
        businessCriticality,
        finalScore: parseFloat(finalScore),
        riskTier
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
    
    // Save functionality can be implemented here when needed
    alert('Save functionality coming soon!');
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
          <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-6">
            <span className="text-orange-700 dark:text-orange-400 font-semibold">Interactive Tool</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Vendor Risk Scoring Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto mb-8">
            Calculate vendor risk scores instantly with our interactive 3-dimensional risk assessment tool
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
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Premium Mode</span>
          </div>
        </motion.div>

        {/* Main Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <Card variant="glass" padding="lg">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Vendor Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Vendor Name</label>
                    <input
                      type="text"
                      value={vendorData.vendorName}
                      onChange={(e) => setVendorData({ ...vendorData, vendorName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                      placeholder="Enter vendor name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Assessment Date</label>
                    <input
                      type="date"
                      value={vendorData.assessmentDate}
                      onChange={(e) => setVendorData({ ...vendorData, assessmentDate: e.target.value })}
                      aria-label="Assessment Date"
                      title="Assessment Date"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Inherent Risk Factors */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">
                  1. Inherent Risk Assessment (40%)
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Data Sensitivity (0-10) - Weight: 35%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={vendorData.dataSensitivity}
                      onChange={(e) => setVendorData({ ...vendorData, dataSensitivity: parseInt(e.target.value) })}
                      aria-label="Data Sensitivity (0-10) - Weight: 35%"
                      title="Data Sensitivity (0-10) - Weight: 35%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>No sensitive data</span>
                      <span className="font-semibold">{vendorData.dataSensitivity}</span>
                      <span>Highly sensitive</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Data Volume (1-6) - Weight: 15%
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={vendorData.dataVolume}
                      onChange={(e) => setVendorData({ ...vendorData, dataVolume: parseInt(e.target.value) })}
                      aria-label="Data Volume (1-6) - Weight: 15%"
                      title="Data Volume (1-6) - Weight: 15%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>&lt; 100 records</span>
                      <span className="font-semibold">{vendorData.dataVolume}</span>
                      <span>&gt; 1M records</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      System Access Level (0-6) - Weight: 25%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="6"
                      value={vendorData.systemAccess}
                      onChange={(e) => setVendorData({ ...vendorData, systemAccess: parseInt(e.target.value) })}
                      aria-label="System Access Level (0-6) - Weight: 25%"
                      title="System Access Level (0-6) - Weight: 25%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>No access</span>
                      <span className="font-semibold">{vendorData.systemAccess}</span>
                      <span>Full admin/DB</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Regulatory Scope (0-10) - Weight: 15%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={vendorData.regulatoryScore}
                      onChange={(e) => setVendorData({ ...vendorData, regulatoryScore: parseInt(e.target.value) })}
                      aria-label="Regulatory Scope (0-10) - Weight: 15%"
                      title="Regulatory Scope (0-10) - Weight: 15%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>No regulations</span>
                      <span className="font-semibold">{vendorData.regulatoryScore}</span>
                      <span>Multiple regulations</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Geographic Risk (0-9) - Weight: 10%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="9"
                      value={vendorData.geographicRisk}
                      onChange={(e) => setVendorData({ ...vendorData, geographicRisk: parseInt(e.target.value) })}
                      aria-label="Geographic Risk (0-9) - Weight: 10%"
                      title="Geographic Risk (0-9) - Weight: 10%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Low risk location</span>
                      <span className="font-semibold">{vendorData.geographicRisk}</span>
                      <span>High risk location</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Residual Risk Factors */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  2. Residual Risk Assessment (30%)
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Security Posture Score (0-10) - Weight: 35%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={vendorData.securityPosture}
                      onChange={(e) => setVendorData({ ...vendorData, securityPosture: parseInt(e.target.value) })}
                      aria-label="Security Posture Score (0-10) - Weight: 35%"
                      title="Security Posture Score (0-10) - Weight: 35%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Poor (&lt;40%)</span>
                      <span className="font-semibold">{vendorData.securityPosture}</span>
                      <span>Excellent (90%+)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Certifications (0-10) - Weight: 25%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={vendorData.certifications}
                      onChange={(e) => setVendorData({ ...vendorData, certifications: parseInt(e.target.value) })}
                      aria-label="Certifications (0-10) - Weight: 25%"
                      title="Certifications (0-10) - Weight: 25%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>None</span>
                      <span className="font-semibold">{vendorData.certifications}</span>
                      <span>SOC 2 + ISO 27001</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Incident History (0-10) - Weight: 20%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={vendorData.incidentHistory}
                      onChange={(e) => setVendorData({ ...vendorData, incidentHistory: parseInt(e.target.value) })}
                      aria-label="Incident History (0-10) - Weight: 20%"
                      title="Incident History (0-10) - Weight: 20%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Recent major breach</span>
                      <span className="font-semibold">{vendorData.incidentHistory}</span>
                      <span>No incidents</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Security Maturity (0-10) - Weight: 15%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={vendorData.securityMaturity}
                      onChange={(e) => setVendorData({ ...vendorData, securityMaturity: parseInt(e.target.value) })}
                      aria-label="Security Maturity (0-10) - Weight: 15%"
                      title="Security Maturity (0-10) - Weight: 15%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Ad-hoc</span>
                      <span className="font-semibold">{vendorData.securityMaturity}</span>
                      <span>Advanced</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Transparency (0-3) - Weight: 5%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      value={vendorData.transparency}
                      onChange={(e) => setVendorData({ ...vendorData, transparency: parseInt(e.target.value) })}
                      aria-label="Transparency (0-3) - Weight: 5%"
                      title="Transparency (0-3) - Weight: 5%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>No audit rights</span>
                      <span className="font-semibold">{vendorData.transparency}</span>
                      <span>Full transparency</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Criticality */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  3. Business Criticality Assessment (30%)
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Service Criticality (0-10) - Weight: 40%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={vendorData.serviceCriticality}
                      onChange={(e) => setVendorData({ ...vendorData, serviceCriticality: parseInt(e.target.value) })}
                      aria-label="Service Criticality (0-10) - Weight: 40%"
                      title="Service Criticality (0-10) - Weight: 40%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Non-critical</span>
                      <span className="font-semibold">{vendorData.serviceCriticality}</span>
                      <span>Mission-critical</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Financial Impact (1-5) - Weight: 20%
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={vendorData.financialImpact}
                      onChange={(e) => setVendorData({ ...vendorData, financialImpact: parseInt(e.target.value) })}
                      aria-label="Financial Impact (1-5) - Weight: 20%"
                      title="Financial Impact (1-5) - Weight: 20%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>&lt; $50K</span>
                      <span className="font-semibold">{vendorData.financialImpact}</span>
                      <span>&gt; $1M</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Business Dependency (1-4) - Weight: 20%
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="4"
                      value={vendorData.dependency}
                      onChange={(e) => setVendorData({ ...vendorData, dependency: parseInt(e.target.value) })}
                      aria-label="Business Dependency (1-4) - Weight: 20%"
                      title="Business Dependency (1-4) - Weight: 20%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Easy to replace</span>
                      <span className="font-semibold">{vendorData.dependency}</span>
                      <span>Single source</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Integration Complexity (1-3) - Weight: 10%
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      value={vendorData.integration}
                      onChange={(e) => setVendorData({ ...vendorData, integration: parseInt(e.target.value) })}
                      aria-label="Integration Complexity (1-3) - Weight: 10%"
                      title="Integration Complexity (1-3) - Weight: 10%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Minimal</span>
                      <span className="font-semibold">{vendorData.integration}</span>
                      <span>Deep integration</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      User Impact (0.5-3) - Weight: 10%
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.5"
                      value={vendorData.userImpact}
                      onChange={(e) => setVendorData({ ...vendorData, userImpact: parseFloat(e.target.value) })}
                      aria-label="User Impact (0.5-3) - Weight: 10%"
                      title="User Impact (0.5-3) - Weight: 10%"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Internal only</span>
                      <span className="font-semibold">{vendorData.userImpact}</span>
                      <span>All users</span>
                    </div>
                  </div>
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

          {/* Results Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Risk Score Card */}
              <Card variant="glass" padding="lg" className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Risk Score Summary</h3>

                <div className="text-center mb-6">
                  <div className="text-6xl font-bold mb-2" style={{ color: `var(--color-${riskTier.color}-600)` }}>
                    {finalScore}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">out of 10.0</div>
                </div>

                <div className={`text-center py-3 px-4 rounded-lg mb-6 bg-${riskTier.color}-100 dark:bg-${riskTier.color}-900/30`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: `var(--color-${riskTier.color}-700)` }}>
                    Tier {riskTier.tier}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: `var(--color-${riskTier.color}-600)` }}>
                    {riskTier.label}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm dark:text-gray-200">Inherent Risk</span>
                    <span className="font-bold text-orange-600 dark:text-orange-400">{inherentRisk}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${inherentRisk * 10}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm dark:text-gray-200">Residual Risk</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{residualRisk}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${residualRisk * 10}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm dark:text-gray-200">Business Criticality</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">{businessCriticality}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${businessCriticality * 10}%` }}
                    />
                  </div>
                </div>
              </Card>

              {/* Tier Requirements */}
              <Card variant="glass" padding="md">
                <h4 className="font-bold mb-3 dark:text-white flex items-center gap-2">
                  <AlertCircle size={18} className="text-orange-600" />
                  Tier {riskTier.tier} Requirements
                </h4>
                <ul className="text-sm space-y-2">
                  {riskTier.tier === 1 && (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Quarterly security assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Executive approval required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Continuous monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">$5M+ cyber insurance</span>
                      </li>
                    </>
                  )}
                  {riskTier.tier === 2 && (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Semi-annual assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Director approval required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Security ratings monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">$2M+ cyber insurance</span>
                      </li>
                    </>
                  )}
                  {riskTier.tier === 3 && (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Annual assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Manager approval required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Periodic monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Standard security terms</span>
                      </li>
                    </>
                  )}
                  {riskTier.tier === 4 && (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Biennial assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Standard approval process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Passive monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="dark:text-gray-200">Basic security terms</span>
                      </li>
                    </>
                  )}
                </ul>
              </Card>

              {/* Premium CTA */}
              {!isPremium && (
                <Card variant="glass" padding="lg" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                  <div className="text-center">
                    <PremiumBadge />
                    <h4 className="font-bold text-lg mt-3 mb-2 dark:text-white">Unlock Premium Features</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Save assessments, export PDF reports, manage vendor portfolio
                    </p>
                    <Button variant="primary" size="sm" className="w-full">
                      Upgrade to Premium - $449/year
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
