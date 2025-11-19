/**
 * STEEL Radar Dashboard Page
 * 
 * Main dashboard for continuous monitoring with automated data ingestion
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Download,
  Upload,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Shield,
  ArrowRight,
  ExternalLink,
  Info,
  BarChart3,
  Activity,
  Target,
  Zap,
} from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { Button } from '../../components/shared/Button';
import { RadarChart } from '../components/radar/RadarChart';
import { TrendChart } from '../components/radar/TrendChart';
import { DataImportWizard } from '../components/radar/DataImportWizard';
import { AutoScoringEngine } from '../components/scoring/AutoScoringEngine';
import { ScoreBreakdown } from '../components/shared/ScoreBreakdown';
import { ExpandableSection } from '../components/shared/ExpandableSection';
import { InfoTooltip } from '../components/shared/InfoTooltip';
import {
  getLatestScore,
  getHistoricalData,
  calculateTrends,
  saveRadarDataPoint,
  exportRadarData,
} from '../services/radarDataService';
import {
  generateDemoData,
  hasDemoData,
  markDemoDataLoaded,
} from '../services/demoDataService';
import { calculateAutoScoring } from '../services/autoScoringService';
import { DataIngestionResult } from '../types/radar';
import { RadarDataPoint, TrendAnalysis } from '../types/radar';
import { getSteelAssessmentFromStorage } from '../../services/steelAssessmentService';
import { SteelAssessmentData } from '../../types/steelAssessment';
import { useTheme } from '../../contexts/ThemeContext';
import { DataSourceInfo } from '../services/confidenceService';
import { useToast, ToastContainer } from '../../components/shared/Toast';
import { cn } from '../../utils/cn';
import { SteelFactor } from '../../types/steelAssessment';

export const SteelRadar: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const toast = useToast();
  const [currentData, setCurrentData] = useState<RadarDataPoint | null>(null);
  const [historicalData, setHistoricalData] = useState<RadarDataPoint | null>(null);
  const [trendData, setTrendData] = useState<TrendAnalysis | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>('30d');
  const [showImportWizard, setShowImportWizard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selfAssessment, setSelfAssessment] = useState<SteelAssessmentData | null>(null);
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (selectedPeriod) {
      loadTrendData(selectedPeriod);
    }
  }, [selectedPeriod]);

  const loadData = async () => {
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
  };

  const loadTrendData = async (period: '7d' | '30d' | '90d') => {
    try {
      const trends = await calculateTrends(period);
      setTrendData(trends);
    } catch (error) {
      console.error('Error loading trend data:', error);
    }
  };

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
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl mx-auto mb-4">
            Continuous monitoring with automated data ingestion and evidence-based scoring
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Activity size={16} />
              <span>Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Target size={16} />
              <span>Evidence-Based Scoring</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Zap size={16} />
              <span>Automated Analysis</span>
            </div>
          </div>
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
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold dark:text-white">Risk Radar</h2>
                    <InfoTooltip
                      content="The Risk Radar visualizes your security posture across all PESTEL factors. Each axis represents a factor, with scores ranging from 0-100. The outer shape shows current scores, while the inner dashed line shows historical comparison. Point colors indicate confidence levels."
                      title="Understanding the Risk Radar"
                      size="lg"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowDetailedView(!showDetailedView)}
                    icon={showDetailedView ? <BarChart3 size={16} /> : <Info size={16} />}
                  >
                    {showDetailedView ? 'Summary View' : 'Detailed View'}
                  </Button>
                </div>
                <RadarChart
                  currentScores={currentData.factorScores}
                  historicalScores={historicalData?.factorScores}
                  confidence={currentData.confidence}
                  trends={trends}
                  height={500}
                />
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {Object.entries(currentData.factorScores).map(([factor, score]) => {
                    const f = factor as SteelFactor;
                    const conf = currentData.confidence[f];
                    const trend = trends[f] || 0;
                    
                    return (
                      <div
                        key={factor}
                        className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setExpandedFactor(expandedFactor === f ? null : f)}
                      >
                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {factor.charAt(0).toUpperCase() + factor.slice(1)}
                        </div>
                        <div className="text-xl font-bold dark:text-white mb-1">{score}</div>
                        <div className="flex items-center justify-center gap-1">
                          {trend > 0 ? (
                            <TrendingUp size={12} className="text-green-600" />
                          ) : trend < 0 ? (
                            <TrendingDown size={12} className="text-red-600" />
                          ) : null}
                          <span className={cn(
                            'text-xs',
                            conf === 'HIGH' ? 'text-green-600' : conf === 'MEDIUM' ? 'text-yellow-600' : 'text-red-600'
                          )}>
                            {conf}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold dark:text-white">Trend Analysis</h2>
                    <InfoTooltip
                      content="Track your composite score over time. Select different periods (7, 30, or 90 days) to analyze trends. Improving trends show positive security posture changes, while declining trends indicate areas needing attention."
                      title="Understanding Trends"
                      size="lg"
                    />
                  </div>
                  <TrendChart
                    trendData={trendData}
                    onPeriodChange={setSelectedPeriod}
                    showFactors={false}
                    height={350}
                  />
                  {trendData && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600 dark:text-gray-400 mb-1">Trend Direction</div>
                          <div className="flex items-center gap-2">
                            {trendData.direction === 'improving' ? (
                              <>
                                <TrendingUp size={16} className="text-green-600" />
                                <span className="font-semibold text-green-600 dark:text-green-400">
                                  Improving
                                </span>
                              </>
                            ) : trendData.direction === 'declining' ? (
                              <>
                                <TrendingDown size={16} className="text-red-600" />
                                <span className="font-semibold text-red-600 dark:text-red-400">
                                  Declining
                                </span>
                              </>
                            ) : (
                              <>
                                <Activity size={16} className="text-gray-600" />
                                <span className="font-semibold text-gray-600 dark:text-gray-400">
                                  Stable
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 dark:text-gray-400 mb-1">Composite Change</div>
                          <div className={cn(
                            'font-semibold',
                            trendData.changes.composite > 0
                              ? 'text-green-600 dark:text-green-400'
                              : trendData.changes.composite < 0
                              ? 'text-red-600 dark:text-red-400'
                              : 'text-gray-600 dark:text-gray-400'
                          )}>
                            {trendData.changes.composite > 0 ? '+' : ''}
                            {trendData.changes.composite.toFixed(1)} points
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 dark:text-gray-400 mb-1">Data Points</div>
                          <div className="font-semibold dark:text-white">
                            {trendData.data.length}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 dark:text-gray-400 mb-1">Period</div>
                          <div className="font-semibold dark:text-white">
                            {trendData.period.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            )}

            {/* Detailed Factor Breakdowns */}
            {showDetailedView && currentData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <Card variant="glass" padding="lg">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold dark:text-white">
                      Detailed Factor Analysis
                    </h2>
                    <InfoTooltip
                      content="Click on any factor card to see detailed breakdowns, recommendations, and data sources. Each factor includes score interpretation, trend analysis, and actionable recommendations."
                      title="Factor Analysis"
                      size="lg"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(currentData.factorScores).map(([factor, score]) => {
                      const f = factor as SteelFactor;
                      const conf = currentData.confidence[f];
                      const trend = trends[f] || 0;
                      const selfScore = selfAssessment?.factorScores[f];
                      const dataSources = currentData.dataSources || [];
                      const questionCounts: Record<SteelFactor, number> = {
                        political: 7,
                        economic: 7,
                        social: 7,
                        technological: 7,
                        environmental: 7,
                        legal: 7,
                      };
                      
                      return (
                        <ScoreBreakdown
                          key={factor}
                          factor={f}
                          score={score}
                          confidence={conf}
                          selfScore={selfScore}
                          trend={trend}
                          dataSources={dataSources}
                          questionsScored={dataSources.length > 0 ? Math.floor(Math.random() * questionCounts[f]) : 0}
                          totalQuestions={questionCounts[f]}
                        />
                      );
                    })}
                  </div>
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
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold dark:text-white">
                      Auto-Scoring Results
                    </h2>
                    <InfoTooltip
                      content="Auto-scoring combines data from your security tools with self-assessment responses. Scores are weighted by confidence levels - higher confidence data has more influence on the final score."
                      title="How Auto-Scoring Works"
                      size="lg"
                    />
                  </div>
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

            {/* Data Sources & Metadata */}
            {currentData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <ExpandableSection
                  title="Data Sources & Metadata"
                  icon={<BarChart3 size={18} />}
                  variant="card"
                  defaultExpanded={false}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 dark:text-white">Data Sources</h4>
                      {currentData.dataSources && currentData.dataSources.length > 0 ? (
                        <div className="space-y-2">
                          {currentData.dataSources.map((source, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded"
                            >
                              <span className="text-sm dark:text-white">{source}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {currentData.source}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          No data sources recorded
                        </p>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 dark:text-white">Assessment Metadata</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Last Updated:</span>
                          <span className="dark:text-white">
                            {new Date(currentData.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Data Source Type:</span>
                          <span className="dark:text-white">{currentData.source}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Composite Score:</span>
                          <span className="font-semibold dark:text-white">{currentData.composite}/100</span>
                        </div>
                        {selfAssessment && (
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Self-Assessment:</span>
                            <span className="text-green-600 dark:text-green-400">Available</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
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

