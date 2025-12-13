import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { ArrowLeft, Download, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';
import {
  getSteelAssessmentFromStorage,
  generateInsights,
  generateRecommendations,
  getRiskLevel,
} from '../services/steelAssessmentService';
import { SteelAssessmentData } from '../types/steelAssessment';
import { SteelCompositeScore } from '../components/steel/SteelCompositeScore';
import { SteelScoreCard } from '../components/steel/SteelScoreCard';
import { RecommendationList } from '../components/steel/RecommendationList';
import { ActionTimeline } from '../components/steel/ActionTimeline';
import { ErmitsIntegrationPathway } from '../components/steel/ErmitsIntegrationPathway';

const factorColors: Record<string, string> = {
  political: '#8b5cf6',
  economic: '#10b981',
  social: '#06b6d4',
  technological: '#f97316',
  environmental: '#22c55e',
  legal: '#ef4444',
};

const factorNames: Record<string, string> = {
  political: 'Political',
  economic: 'Economic',
  social: 'Social',
  technological: 'Technological',
  environmental: 'Environmental',
  legal: 'Legal',
};

export const SteelRecommendationsPage: React.FC = () => {
  const navigate = useNavigate();
  const [assessmentData, setAssessmentData] = useState<SteelAssessmentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = getSteelAssessmentFromStorage();
    if (data) {
      // Generate insights and recommendations if not present
      if (!data.insights) {
        data.insights = generateInsights(data.factorScores, data.composite);
      }
      if (!data.recommendations) {
        data.recommendations = generateRecommendations(data.factorScores);
      }
      setAssessmentData(data);
    }
    setLoading(false);
  }, []);

  const handleExportJSON = () => {
    if (!assessmentData) return;

    const blob = new Blob([JSON.stringify(assessmentData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `STEEL_Diagnostic_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy dark:border-gold mx-auto mb-4"></div>
          <p className="text-navy dark:text-white">Loading recommendations...</p>
        </div>
      </div>
    );
  }

  if (!assessmentData) {
    return (
      <div className="min-h-screen bg-silver-light dark:bg-dark-bg">
        <div className="container mx-auto px-4 py-16">
          <Card variant="glass" padding="lg" className="max-w-2xl mx-auto text-center">
            <AlertCircle size={48} className="mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold dark:text-white mb-4">No Assessment Data Found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Please complete the STEEL diagnostic to view detailed recommendations.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="primary" onClick={() => navigate('/dashboard')}>
                <ArrowLeft size={18} className="mr-2" />
                Back to Dashboard
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('/steel/index.html', '_blank')}
              >
                Take Assessment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const riskLevel = getRiskLevel(assessmentData.composite);
  const riskLevelColors: Record<string, string> = {
    LOW: '#16a34a',
    MODERATE: '#eab308',
    ELEVATED: '#f97316',
    HIGH: '#dc2626',
  };

  return (
    <div className="min-h-screen bg-silver-light dark:bg-dark-bg pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold dark:text-white mb-2">
                STEEL™ Assessment Results
              </h1>
              <p className="text-gray-600 dark:text-gray-200">
                Comprehensive recommendations and strategic action plan
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate('/dashboard')}>
                <ArrowLeft size={18} className="mr-2" />
                Back to Dashboard
              </Button>
              <Button variant="outline" onClick={handleExportJSON}>
                <Download size={18} className="mr-2" />
                Export JSON
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Executive Summary */}
        {assessmentData.insights && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card
              variant="glass"
              padding="lg"
              className="border-l-4"
              style={{ borderLeftColor: riskLevelColors[riskLevel] }}
            >
              <h2 className="text-2xl font-bold dark:text-white mb-4">Executive Summary</h2>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4 text-lg">
                {assessmentData.insights.executiveSummary}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {assessmentData.insights.riskContext}
              </p>
            </Card>
          </motion.div>
        )}

        {/* Composite Score and Factor Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <div className="lg:col-span-1">
              <SteelCompositeScore composite={assessmentData.composite} />
            </div>
            <div className="lg:col-span-3">
              <Card variant="glass" padding="md">
                <h3 className="text-xl font-semibold dark:text-white mb-4">
                  PESTEL Factor Scores
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(
                    Object.entries(assessmentData.factorScores) as [string, number][]
                  ).map(([factor, score]) => (
                    <SteelScoreCard
                      key={factor}
                      factor={factor as 'political' | 'economic' | 'social' | 'technological' | 'environmental' | 'legal'}
                      factorName={factorNames[factor]}
                      score={score}
                      color={factorColors[factor]}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Key Insights */}
        {assessmentData.insights && assessmentData.insights.keyInsights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <Card variant="glass" padding="lg" className="border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={24} className="text-red-500" />
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
                  Key Insights
                </h3>
              </div>
              <ul className="space-y-3">
                {assessmentData.insights.keyInsights.map((insight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
                  >
                    <span className="font-semibold text-red-700 dark:text-red-300 min-w-[120px]">
                      {factorNames[insight.factor]}:
                    </span>
                    <span className="text-gray-700 dark:text-gray-200 flex-1">
                      {insight.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        )}

        {/* Strengths */}
        {assessmentData.insights && assessmentData.insights.strengths.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <Card variant="glass" padding="lg" className="border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={24} className="text-green-500" />
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                  Strengths
                </h3>
              </div>
              <ul className="space-y-2">
                {assessmentData.insights.strengths.map((strength, index) => (
                  <li
                    key={index}
                    className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-gray-700 dark:text-gray-200"
                  >
                    {strength.text}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        )}

        {/* Opportunities */}
        {assessmentData.insights && assessmentData.insights.opportunities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <Card variant="glass" padding="lg" className="border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={24} className="text-yellow-500" />
                <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  Opportunities
                </h3>
              </div>
              <ul className="space-y-2">
                {assessmentData.insights.opportunities.map((opp, index) => (
                  <li
                    key={index}
                    className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-gray-700 dark:text-gray-200"
                  >
                    {opp.text}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        )}

        {/* Recommendations */}
        {assessmentData.recommendations && assessmentData.recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <RecommendationList recommendations={assessmentData.recommendations} />
          </motion.div>
        )}

        {/* Action Timeline */}
        {assessmentData.recommendations && assessmentData.recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <ActionTimeline recommendations={assessmentData.recommendations} />
          </motion.div>
        )}

        {/* ERMITS Integration Pathway */}
        {assessmentData.recommendations && assessmentData.recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <ErmitsIntegrationPathway recommendations={assessmentData.recommendations} />
          </motion.div>
        )}

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card variant="glass" padding="lg" className="border-l-4 border-gold">
            <h3 className="text-2xl font-bold dark:text-white mb-4">Recommended Next Steps</h3>
            <ol className="space-y-3 list-decimal list-inside text-gray-700 dark:text-gray-200">
              <li>
                <strong>Review with Leadership:</strong> Share results with executive team and board
                within 7 days
              </li>
              <li>
                <strong>Prioritize Actions:</strong> Focus on Critical priority recommendations first
                (30-day timeline)
              </li>
              <li>
                <strong>Schedule Consultation:</strong> Connect with ERMITS Advisory for strategic
                guidance and platform recommendations
              </li>
              <li>
                <strong>Update Risk Register:</strong> Integrate findings into your enterprise risk
                register (ISO 31000 alignment)
              </li>
              <li>
                <strong>Plan Roadmap:</strong> Develop a 30/60/90 day improvement plan with clear
                milestones
              </li>
              <li>
                <strong>Consider ERMITS Platform:</strong> Evaluate platform solutions to accelerate
                implementation
              </li>
            </ol>
            <div className="mt-6 flex gap-4">
              <Button variant="primary" onClick={() => navigate('/contact')}>
                Schedule Strategic Consultation
              </Button>
              <Button variant="outline" onClick={() => navigate('/ecosystem')}>
                Explore ERMITS Ecosystem
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

