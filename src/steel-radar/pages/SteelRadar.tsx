/**
 * STEEL Radar Dashboard Page
 * 
 * Main dashboard for continuous monitoring with automated data ingestion
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Download,
  Upload,
  AlertCircle,
  Shield,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { Button } from '../../components/shared/Button';
import { RadarChart } from '../components/radar/RadarChart';
import { TrendChart } from '../components/radar/TrendChart';
import { DataImportWizard } from '../components/radar/DataImportWizard';
import { AutoScoringEngine } from '../components/scoring/AutoScoringEngine';
import {
  getLatestScore,
  getHistoricalData,
  calculateTrends,
  saveRadarDataPoint,
  exportRadarData,
} from '../services/radarDataService';
import {
  generateDemoData,
  markDemoDataLoaded,
} from '../services/demoDataService';
import { calculateAutoScoring } from '../services/autoScoringService';
import { DataIngestionResult } from '../types/radar';
import { RadarDataPoint, TrendAnalysis } from '../types/radar';
import { getSteelAssessmentFromStorage } from '../../services/steelAssessmentService';
import { SteelAssessmentData, SteelFactor } from '../../types/steelAssessment';
import { DataSourceInfo } from '../services/confidenceService';
import { useToast, ToastContainer } from '../../components/shared/Toast';

export const SteelRadar: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [currentData, setCurrentData] = useState<RadarDataPoint | null>(null);
  const [historicalData, setHistoricalData] = useState<RadarDataPoint | null>(null);
  const [trendData, setTrendData] = useState<TrendAnalysis | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>('30d');
  const [showImportWizard, setShowImportWizard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selfAssessment, setSelfAssessment] = useState<SteelAssessmentData | null>(null);
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);

  const loadTrendData = useCallback(async (period: '7d' | '30d' | '90d') => {
    try {
      const trends = await calculateTrends(period);
      setTrendData(trends);
    } catch (error) {
      console.error('Error loading trend data:', error);
    }
  }, []);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Load latest score
      const latest = await getLatestScore();
      setCurrentData(latest);

      // Load historical for comparison (30 days ago)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const historical = await getHistoricalData(thirtyDaysAgo, new Date());
      if (historical.length > 1) {
        setHistoricalData(historical[historical.length - 1]); // Second most recent
      }

      // Load self-assessment for comparison
      const assessment = getSteelAssessmentFromStorage();
      setSelfAssessment(assessment);

      // Load trend data
      await loadTrendData(selectedPeriod);
    } catch (error) {
      console.error('Error loading radar data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedPeriod, loadTrendData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (selectedPeriod) {
      loadTrendData(selectedPeriod);
    }
  }, [selectedPeriod, loadTrendData]);

  const handleImportComplete = async (result: DataIngestionResult) => {
    if (!result.success) {
      // Show error notification
      const errorMsg = result.errors.length > 0 
        ? result.errors.join(', ') 
        : 'Import failed. Please check the errors and try again.';
      toast.error(errorMsg, 7000);
      return;
    }

    try {
      // Build DataSourceInfo from ingestion results for confidence calculation
      const dataSources: DataSourceInfo[] = [];
      const questionFactorMap: Record<string, SteelFactor> = {
        q1: 'political', q2: 'political', q3: 'political', q4: 'political',
        q5: 'political', q6: 'political', q7: 'political',
        q8: 'economic', q9: 'economic', q10: 'economic', q11: 'economic',
        q12: 'economic', q13: 'economic', q14: 'economic',
        q15: 'social', q16: 'social', q17: 'social', q18: 'social',
        q19: 'social', q20: 'social', q21: 'social',
        q22: 'technological', q23: 'technological', q24: 'technological',
        q25: 'technological', q26: 'technological', q27: 'technological', q28: 'technological',
        q29: 'environmental', q30: 'environmental', q31: 'environmental',
        q32: 'environmental', q33: 'environmental', q34: 'environmental', q35: 'environmental',
        q36: 'legal', q37: 'legal', q38: 'legal', q39: 'legal',
        q40: 'legal', q41: 'legal', q42: 'legal',
      };

      // Group questions by factor
      const factorQuestions: Record<SteelFactor, string[]> = {
        political: [],
        economic: [],
        social: [],
        technological: [],
        environmental: [],
        legal: [],
      };

      Object.keys(result.mappedQuestions).forEach((qId) => {
        const factor = questionFactorMap[qId];
        if (factor) {
          factorQuestions[factor].push(qId);
        }
      });

      // Create DataSourceInfo for each factor with data
      Object.entries(factorQuestions).forEach(([factor, questions]) => {
        if (questions.length > 0) {
          // Determine data quality based on template and question count
          const dataQuality: 'high' | 'medium' | 'low' = 
            result.template && result.template !== 'generic-csv' && result.template !== 'generic-json'
              ? 'high'
              : questions.length >= 3
              ? 'medium'
              : 'low';

          dataSources.push({
            factor: factor as SteelFactor,
            questions,
            hasData: true,
            dataQuality,
            dataAge: 0, // Fresh data, just imported
          });
        }
      });

      // Calculate auto-scores from ingested data
      const autoScoring = calculateAutoScoring(
        result.mappedQuestions,
        selfAssessment || undefined,
        dataSources
      );

      // Create radar data point
      const radarPoint: Omit<RadarDataPoint, 'id'> = {
        timestamp: new Date().toISOString(),
        factorScores: autoScoring.factorScores,
        composite: autoScoring.composite,
        confidence: autoScoring.confidence,
        source: result.source,
        dataSources: [result.template || 'unknown'],
        selfAssessment: selfAssessment?.factorScores,
        discrepancies: autoScoring.discrepancies,
      };

      // Save to IndexedDB
      await saveRadarDataPoint(radarPoint);

      // Reload data
      await loadData();

      // Close wizard
      setShowImportWizard(false);

      alert('Data imported successfully! Your scores have been updated.');
    } catch (error) {
      console.error('Error processing import:', error);
      alert('Error processing imported data. Please try again.');
    }
  };

  const handleExport = async () => {
    try {
      const data = await exportRadarData();
      if (!data || data === '[]') {
        toast.warning('No data available to export. Please import data first.', 5000);
        return;
      }
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `steel-radar-export-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Data exported successfully!', 3000);
    } catch (error) {
      console.error('Error exporting data:', error);
      const errorMsg = error instanceof Error 
        ? `Export failed: ${error.message}` 
        : 'Failed to export data. Please try again.';
      toast.error(errorMsg, 7000);
    }
  };

  const calculateFactorTrends = () => {
    if (!currentData || !historicalData) {
      return {
        political: 0,
        economic: 0,
        social: 0,
        technological: 0,
        environmental: 0,
        legal: 0,
      };
    }

    return {
      political: currentData.factorScores.political - historicalData.factorScores.political,
      economic: currentData.factorScores.economic - historicalData.factorScores.economic,
      social: currentData.factorScores.social - historicalData.factorScores.social,
      technological:
        currentData.factorScores.technological - historicalData.factorScores.technological,
      environmental:
        currentData.factorScores.environmental - historicalData.factorScores.environmental,
      legal: currentData.factorScores.legal - historicalData.factorScores.legal,
    };
  };

  const handleLoadDemo = async () => {
    setIsLoadingDemo(true);
    try {
      // Generate demo data
      const demoDataPoints = await generateDemoData();
      
      // Save each data point
      for (const point of demoDataPoints) {
        await saveRadarDataPoint(point);
      }
      
      // Mark as loaded
      markDemoDataLoaded();
      
      // Reload data
      await loadData();
      
      toast.success('Demo data loaded successfully! Explore the features with sample data.', 5000);
    } catch (error) {
      console.error('Error loading demo data:', error);
      toast.error('Failed to load demo data. Please try again.', 5000);
    } finally {
      setIsLoadingDemo(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy dark:border-gold mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading STEEL Radar...</p>
        </div>
      </div>
    );
  }

  const trends = calculateFactorTrends();

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <ToastContainer toasts={toast.toasts} onDismiss={toast.dismissToast} />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-12 text-center"
        >
          <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
            <span className="text-gold font-semibold">Premium Feature</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            STEEL™ Radar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
            Continuous monitoring with automated data ingestion and evidence-based scoring
          </p>
        </motion.div>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-wrap gap-3 justify-between items-center"
        >
          <div className="flex gap-3">
            <Button
              variant="primary"
              onClick={() => setShowImportWizard(!showImportWizard)}
              icon={<Upload size={18} />}
            >
              {showImportWizard ? 'Hide Import' : 'Import Data'}
            </Button>
            <Button variant="outline" onClick={handleExport} icon={<Download size={18} />}>
              Export Data
            </Button>
          </div>
          <Button
            variant="ghost"
            onClick={() => navigate('/steel/enterprise')}
            icon={<ExternalLink size={18} />}
            iconPosition="right"
          >
            Upgrade to Enterprise for API Integrations
          </Button>
        </motion.div>

        {/* Import Wizard */}
        {showImportWizard && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8"
          >
            <DataImportWizard 
              onImportComplete={handleImportComplete}
              onError={(msg) => toast.error(msg, 7000)}
            />
          </motion.div>
        )}

        {/* Current Score Display */}
        {currentData && (
          <>
            {/* Radar Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Card variant="glass" padding="lg">
                <h2 className="text-2xl font-bold mb-6 dark:text-white">Risk Radar</h2>
                <RadarChart
                  currentScores={currentData.factorScores}
                  historicalScores={historicalData?.factorScores}
                  confidence={currentData.confidence}
                  trends={trends}
                  height={500}
                />
              </Card>
            </motion.div>

            {/* Trend Chart */}
            {trendData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <Card variant="glass" padding="lg">
                  <TrendChart
                    trendData={trendData}
                    onPeriodChange={setSelectedPeriod}
                    showFactors={false}
                    height={350}
                  />
                </Card>
              </motion.div>
            )}

            {/* Auto-Scoring Results */}
            {currentData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <Card variant="glass" padding="lg">
                  <h2 className="text-2xl font-bold mb-6 dark:text-white">
                    Auto-Scoring Results
                  </h2>
                  <AutoScoringEngine
                    autoScoringResult={{
                      factorScores: currentData.factorScores,
                      composite: currentData.composite,
                      confidence: currentData.confidence,
                      questionsScored: {},
                      warnings: currentData.discrepancies
                        ? [`${currentData.discrepancies.length} discrepancies detected`]
                        : [],
                      discrepancies: currentData.discrepancies,
                    }}
                    selfAssessment={selfAssessment?.factorScores}
                  />
                </Card>
              </motion.div>
            )}
          </>
        )}

        {/* No Data State */}
        {!currentData && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Card variant="glass" padding="lg">
              <Shield size={64} className="mx-auto mb-4 text-gray-400 dark:text-gray-500" />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                No Radar Data Available
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                Import data from your security tools to start continuous monitoring. STEEL Radar
                will automatically calculate scores and track trends over time.
              </p>
              {!selfAssessment && (
                <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    <strong>Tip:</strong> Complete a STEEL self-assessment first to enable comparison between 
                    self-reported and data-validated scores.
                  </p>
                </div>
              )}
              
              {/* Demo Data Section */}
              <div className="mb-6 p-4 bg-gradient-to-r from-gold/10 to-navy/10 dark:from-gold/20 dark:to-navy/20 border border-gold/30 dark:border-gold/50 rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="font-semibold mb-1 dark:text-white">Try STEEL™ Radar with Demo Data</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Load sample data to explore all features including charts, trends, confidence scoring, and more.
                    </p>
                  </div>
                  <Button
                    variant="luxury"
                    onClick={handleLoadDemo}
                    disabled={isLoadingDemo}
                    icon={<Shield size={18} />}
                  >
                    {isLoadingDemo ? 'Loading Demo...' : 'Load Demo Data'}
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  variant="primary"
                  onClick={() => setShowImportWizard(true)}
                  icon={<Upload size={18} />}
                >
                  Import Your First Dataset
                </Button>
                {!selfAssessment && (
                  <Button
                    variant="outline"
                    onClick={() => navigate('/steel')}
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    Take STEEL Assessment First
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        )}

        {/* Alerts */}
        {currentData && currentData.discrepancies && currentData.discrepancies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <Card variant="glass" padding="md" className="border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-3">
                <AlertCircle
                  size={24}
                  className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                    Score Discrepancies Detected
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {currentData.discrepancies.length} factor(s) show significant differences
                    between your self-assessment and the auto-calculated scores. Please review the
                    discrepancies section above.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

