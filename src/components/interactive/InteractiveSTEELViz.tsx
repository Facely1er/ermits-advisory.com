import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Users, Server, Leaf, Scale, X, Info, Play, HelpCircle, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { InteractiveCard } from '../shared/InteractiveCard';
import { SteelAssessmentData, SteelFactor } from '../../types/steelAssessment';
import { getSteelAssessmentFromStorage, watchSteelStorage, getRiskLevel as getRiskLevelFromService } from '../../services/steelAssessmentService';

interface STEELDimension {
  id: string;
  title: string;
  description: string;
  value: number;
  color: string;
  icon: React.ReactNode;
  details: string[];
}

interface InteractiveSTEELVizProps {
  onDimensionSelect?: (dimension: STEELDimension | null) => void;
  showTutorial?: boolean;
  onTutorialComplete?: () => void;
  assessmentData?: SteelAssessmentData | null;
  useRealData?: boolean;
}

/**
 * InteractiveSTEELViz Component
 * 
 * NOTE: This component displays example STEEL dimension values for demonstration.
 * In production, all risk values would be calculated from actual STEEL framework assessments.
 * 
 * Data Sources (when connected to real assessments):
 * - Dimension values: Calculated from STEEL framework assessment questionnaires
 * - Risk scores: Based on organizational responses to STEEL assessment questions
 */
// Factor colors matching dashboard
const factorColors: Record<SteelFactor, string> = {
  political: '#8b5cf6',
  economic: '#10b981',
  social: '#06b6d4',
  technological: '#f97316',
  environmental: '#22c55e',
  legal: '#ef4444',
};

const factorNames: Record<SteelFactor, string> = {
  political: 'Political',
  economic: 'Economic',
  social: 'Social',
  technological: 'Technological',
  environmental: 'Environmental',
  legal: 'Legal',
};

const factorIcons: Record<SteelFactor, React.ReactNode> = {
  political: <Shield size={20} />,
  economic: <TrendingUp size={20} />,
  social: <Users size={20} />,
  technological: <Server size={20} />,
  environmental: <Leaf size={20} />,
  legal: <Scale size={20} />,
};

const factorDescriptions: Record<SteelFactor, string> = {
  political: 'Regulatory landscape and governance factors',
  economic: 'Financial and market conditions',
  social: 'Societal and cultural influences',
  technological: 'Technical infrastructure and innovation',
  environmental: 'Physical and environmental factors',
  legal: 'Legal framework and compliance',
};

export const InteractiveSTEELViz: React.FC<InteractiveSTEELVizProps> = ({
  onDimensionSelect,
  showTutorial = false,
  onTutorialComplete,
  assessmentData: propAssessmentData,
  useRealData = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [selectedDimension, setSelectedDimension] = useState<STEELDimension | null>(null);
  const [hoveredDimension, setHoveredDimension] = useState<string | null>(null);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [overallRisk, setOverallRisk] = useState<number>(0);
  const [assessmentData, setAssessmentData] = useState<SteelAssessmentData | null>(propAssessmentData || null);

  // Load assessment data from localStorage if useRealData is true
  useEffect(() => {
    if (useRealData && !propAssessmentData) {
      const data = getSteelAssessmentFromStorage();
      setAssessmentData(data);
      
      // Watch for changes
      const unwatch = watchSteelStorage((newData) => {
        setAssessmentData(newData);
      });
      
      return unwatch;
    }
  }, [useRealData, propAssessmentData]);

  // Update when prop changes
  useEffect(() => {
    if (propAssessmentData) {
      setAssessmentData(propAssessmentData);
    }
  }, [propAssessmentData]);

  // Measure container width and update on window resize
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  // Calculate responsive values based on container width
  const responsiveRadius = Math.min(containerWidth * 0.25, 160); // Scale down on smaller screens, max 160px
  const dimensionHexagonSize = Math.max(Math.min(containerWidth * 0.08, 96), 60); // Between 60px and 96px
  const centerHexagonSize = Math.max(Math.min(containerWidth * 0.12, 128), 80); // Between 80px and 128px
  const iconSize = Math.max(Math.min(dimensionHexagonSize * 0.25, 20), 14); // Scale icons proportionally

  // Generate dimensions from assessment data or use demo data
  const dimensions: STEELDimension[] = React.useMemo(() => {
    const factors: SteelFactor[] = ['political', 'economic', 'social', 'technological', 'environmental', 'legal'];
    
    if (assessmentData && assessmentData.factorScores) {
      return factors.map((factor) => ({
        id: factor,
        title: factorNames[factor],
        description: factorDescriptions[factor],
        value: Math.round(assessmentData.factorScores[factor]),
        color: factorColors[factor],
        icon: React.cloneElement(factorIcons[factor] as React.ReactElement, { size: iconSize }),
        details: assessmentData.insights?.keyInsights
          .filter(insight => insight.factor === factor)
          .map(insight => insight.text)
          .slice(0, 4) || [
          `${factorNames[factor]} risk factors`,
          'Assessment-based insights',
          'Strategic considerations',
          'Risk mitigation opportunities'
        ]
      }));
    }
    
    // Demo data when no assessment available
    return factors.map((factor) => ({
      id: factor,
      title: factorNames[factor],
      description: factorDescriptions[factor],
      value: factor === 'political' ? 65 : factor === 'economic' ? 78 : factor === 'social' ? 82 : 
             factor === 'technological' ? 45 : factor === 'environmental' ? 72 : 58,
      color: factorColors[factor],
      icon: React.cloneElement(factorIcons[factor] as React.ReactElement, { size: iconSize }),
      details: [
        `${factorNames[factor]} risk assessment`,
        'Complete assessment to see your scores',
        'Strategic risk factors',
        'Mitigation opportunities'
      ]
    }));
  }, [assessmentData, iconSize]);

  const handleDimensionClick = (dimension: STEELDimension) => {
    setSelectedDimension(dimension);
    onDimensionSelect?.(dimension);
  };

  const handleClose = () => {
    setSelectedDimension(null);
    onDimensionSelect?.(null);
  };

  // Calculate overall risk score
  useEffect(() => {
    if (assessmentData) {
      setOverallRisk(assessmentData.composite);
    } else {
      const avgRisk = dimensions.reduce((sum, dim) => sum + dim.value, 0) / dimensions.length;
      setOverallRisk(Math.round(avgRisk));
    }
  }, [assessmentData, dimensions]);

  // Get risk level label (using service function if available, otherwise local logic)
  const getRiskLevelInfo = (value: number) => {
    try {
      const riskLevel = getRiskLevelFromService(value);
      const levelMap: Record<string, { label: string; color: string; icon: typeof CheckCircle2 }> = {
        'LOW': { label: 'Low', color: '#10b981', icon: CheckCircle2 },
        'MODERATE': { label: 'Moderate', color: '#f59e0b', icon: AlertTriangle },
        'ELEVATED': { label: 'Elevated', color: '#f97316', icon: AlertTriangle },
        'HIGH': { label: 'High', color: '#ef4444', icon: AlertTriangle },
      };
      return levelMap[riskLevel] || levelMap['MODERATE'];
    } catch {
      // Fallback if service not available
      if (value < 40) return { label: 'Low', color: '#10b981', icon: CheckCircle2 };
      if (value < 60) return { label: 'Moderate', color: '#f59e0b', icon: AlertTriangle };
      if (value < 80) return { label: 'Elevated', color: '#f97316', icon: AlertTriangle };
      return { label: 'High', color: '#ef4444', icon: AlertTriangle };
    }
  };

  const tutorialSteps = [
    {
      title: 'Welcome to STEEL™ Visualization',
      content: 'This interactive tool helps you understand your organization\'s strategic risk exposure across six key dimensions. Click through to learn more.',
      target: 'center'
    },
    {
      title: 'Six Risk Dimensions',
      content: 'Each hexagon represents one of the six STEEL dimensions: Political, Economic, Social, Technology, Environmental, and Legal. Hover over any dimension to see its risk score.',
      target: 'dimensions'
    },
    {
      title: 'Risk Scores',
      content: 'The colored bar inside each dimension shows the risk level (0-100%). Higher scores indicate greater risk exposure in that area.',
      target: 'scores'
    },
    {
      title: 'Interactive Exploration',
      content: 'Click on any dimension to see detailed information, key considerations, and actionable insights for that risk area.',
      target: 'interaction'
    }
  ];

  // Generate CSS variables for dimension colors and dynamic styles
  const dimensionColorStyles = dimensions
    .map((dim) => `
      .dimension-hexagon-${dim.id} {
        --dimension-color: ${dim.color};
        background-color: var(--dimension-color);
      }
      .dimension-icon-${dim.id} {
        --dimension-color: ${dim.color};
        background-color: var(--dimension-color);
      }
      .dimension-progress-${dim.id} {
        --dimension-color: ${dim.color};
        background-color: var(--dimension-color);
      }
      .dimension-bullet-${dim.id} {
        --dimension-color: ${dim.color};
        background-color: var(--dimension-color);
      }
    `)
    .join('\n');

  const containerHeight = Math.max(responsiveRadius * 2.5, 400);
  const dynamicStyles = `
    .steel-viz-container {
      height: ${containerHeight}px;
    }
    .steel-center-hexagon {
      left: calc(50% - ${centerHexagonSize / 2}px);
      top: calc(50% - ${centerHexagonSize * 0.875 / 2}px);
      width: ${centerHexagonSize}px;
      height: ${centerHexagonSize * 0.875}px;
    }
    .steel-center-text {
      font-size: ${Math.max(centerHexagonSize * 0.15, 12)}px;
    }
    ${dimensions.map((dim, index) => {
      const angle = (index * 60) * (Math.PI / 180);
      const x = responsiveRadius * Math.cos(angle);
      const y = responsiveRadius * Math.sin(angle);
      return `
        .steel-dimension-${dim.id} {
          left: calc(50% + ${x}px - ${dimensionHexagonSize / 2}px);
          top: calc(50% + ${y}px - ${dimensionHexagonSize * 0.875 / 2}px);
          width: ${dimensionHexagonSize}px;
          height: ${dimensionHexagonSize * 0.875}px;
          font-size: ${Math.max(dimensionHexagonSize * 0.1, 10)}px;
        }
        .steel-value-indicator-${dim.id} {
          width: ${Math.max(dimensionHexagonSize * 0.4, 24)}px;
          height: ${Math.max(dimensionHexagonSize * 0.08, 3)}px;
        }
      `;
    }).join('\n')}
  `;

  return (
    <div className="relative">
      <style>{dimensionColorStyles + dynamicStyles}</style>
      
      {/* Tutorial Overlay */}
      <AnimatePresence>
        {showTutorial && tutorialStep < tutorialSteps.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => {
              if (tutorialStep < tutorialSteps.length - 1) {
                setTutorialStep(tutorialStep + 1);
              } else {
                onTutorialComplete?.();
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white dark:bg-dark-surface rounded-xl p-6 max-w-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold dark:text-white">
                  {tutorialSteps[tutorialStep].title}
                </h3>
                <button
                  onClick={() => onTutorialComplete?.()}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                {tutorialSteps[tutorialStep].content}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Step {tutorialStep + 1} of {tutorialSteps.length}
                </span>
                <div className="flex gap-2">
                  {tutorialStep > 0 && (
                    <button
                      onClick={() => setTutorialStep(tutorialStep - 1)}
                      className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Previous
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (tutorialStep < tutorialSteps.length - 1) {
                        setTutorialStep(tutorialStep + 1);
                      } else {
                        onTutorialComplete?.();
                      }
                    }}
                    className="px-4 py-2 text-sm bg-navy text-white rounded-lg hover:bg-navy-dark"
                  >
                    {tutorialStep < tutorialSteps.length - 1 ? 'Next' : 'Got it!'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overall Risk Summary */}
      <div className="mb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-dark-surface rounded-xl shadow-lg"
        >
          <div className="text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Risk Score</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold dark:text-white">{overallRisk}%</span>
              {(() => {
                const riskLevel = getRiskLevelInfo(overallRisk);
                const RiskIcon = riskLevel.icon;
                return (
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                    style={{ 
                      backgroundColor: `${riskLevel.color}20`,
                      color: riskLevel.color 
                    }}
                  >
                    <RiskIcon size={16} />
                    {riskLevel.label} Risk
                  </span>
                );
              })()}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Help Button */}
      <div className="absolute top-0 right-0 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowTutorial(true)}
          className="p-2 rounded-full bg-navy text-white shadow-lg hover:bg-navy-dark transition-colors"
          title="Show tutorial"
        >
          <HelpCircle size={20} />
        </motion.button>
      </div>

      {/* Interactive Visualization */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl mx-auto steel-viz-container"
      >
        {/* Center STEEL Logo */}
        <motion.div 
          className="absolute hexagon bg-navy text-white flex items-center justify-center z-10 cursor-pointer steel-center-hexagon"
          whileHover={{ scale: 1.1 }}
          animate={{ 
            boxShadow: selectedDimension 
              ? '0 0 30px rgba(0, 75, 135, 0.5)' 
              : '0 0 15px rgba(0, 75, 135, 0.3)' 
          }}
        >
          <span className="font-bold steel-center-text">
            STEEL™
          </span>
        </motion.div>
        
        {/* Dimension Hexagons */}
        {dimensions.map((dimension, index) => {
          const riskLevel = getRiskLevelInfo(dimension.value);
          return (
            <div key={dimension.id} className="relative">
              <motion.button
                className={`absolute hexagon flex flex-col items-center justify-center text-white font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy dimension-hexagon-${dimension.id} steel-dimension-${dimension.id}`}
                onClick={() => handleDimensionClick(dimension)}
                onMouseEnter={() => {
                  setHoveredDimension(dimension.id);
                  setShowTooltip(dimension.id);
                }}
                onMouseLeave={() => {
                  setHoveredDimension(null);
                  setShowTooltip(null);
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: hoveredDimension === dimension.id 
                    ? `0 0 25px ${dimension.color}80`
                    : selectedDimension?.id === dimension.id
                      ? `0 0 20px ${dimension.color}60`
                      : '0 5px 15px rgba(0,0,0,0.2)',
                  z: hoveredDimension === dimension.id ? 20 : 10
                }}
                type="button"
              >
                <div className="flex flex-col items-center justify-center pointer-events-none">
                  {dimension.icon}
                  <span className="font-medium mt-1 text-center leading-tight text-xs sm:text-sm">
                    {dimension.title}
                  </span>
                  {/* Value indicator */}
                  <div className={`bg-white/30 rounded-full mt-1 steel-value-indicator-${dimension.id}`}>
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${dimension.value}%` }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                    />
                  </div>
                  <span className="text-xs mt-1 opacity-90">{dimension.value}%</span>
                </div>
              </motion.button>

              {/* Tooltip on hover */}
              <AnimatePresence>
                {showTooltip === dimension.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute z-30 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-xl max-w-[200px] pointer-events-none"
                    style={{
                      left: `calc(50% + ${responsiveRadius * Math.cos((index * 60) * (Math.PI / 180))}px)`,
                      top: `calc(50% + ${responsiveRadius * Math.sin((index * 60) * (Math.PI / 180))}px + 60px)`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className="font-semibold mb-1">{dimension.title}</div>
                    <div className="text-gray-300 text-xs">{dimension.description}</div>
                    <div className="mt-2 pt-2 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <span>Risk: {dimension.value}%</span>
                        <span 
                          className="px-2 py-0.5 rounded text-xs"
                          style={{ 
                            backgroundColor: `${riskLevel.color}30`,
                            color: riskLevel.color 
                          }}
                        >
                          {riskLevel.label}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-gray-400 text-xs italic">Click for details</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {dimensions.map((_dimension, index) => {
            const angle1 = (index * 60) * (Math.PI / 180);
            const angle2 = ((index + 1) * 60) * (Math.PI / 180);
            
            return (
              <motion.line
                key={`connection-${index}`}
                x1={`calc(50% + ${responsiveRadius * Math.cos(angle1)}px)`}
                y1={`calc(50% + ${responsiveRadius * Math.sin(angle1)}px)`}
                x2={`calc(50% + ${responsiveRadius * Math.cos(angle2)}px)`}
                y2={`calc(50% + ${responsiveRadius * Math.sin(angle2)}px)`}
                stroke="url(#steel-gradient)"
                strokeWidth="2"
                strokeOpacity="0.3"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: index * 0.2 }}
              />
            );
          })}
          <defs>
            <linearGradient id="steel-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004B87" />
              <stop offset="100%" stopColor="#C9E6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Detailed Information Panel */}
      <AnimatePresence>
        {selectedDimension && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8"
          >
            <InteractiveCard className="bg-white dark:bg-dark-surface shadow-xl">
              <div className="p-6 relative">
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Close details"
                >
                  <X size={16} className="dark:text-white" />
                </button>
                
                <div className="flex items-start">
                  <div className={`p-4 rounded-full mr-6 text-white dimension-icon-${selectedDimension.id}`}>
                    {selectedDimension.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">
                      {selectedDimension.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-200 mb-4">
                      {selectedDimension.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium dark:text-gray-200">Risk Score</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold dark:text-white">
                            {selectedDimension.value}%
                          </span>
                          {(() => {
                            const riskLevel = getRiskLevelInfo(selectedDimension.value);
                            const RiskIcon = riskLevel.icon;
                            return (
                              <span 
                                className="px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                                style={{ 
                                  backgroundColor: `${riskLevel.color}20`,
                                  color: riskLevel.color 
                                }}
                              >
                                <RiskIcon size={14} />
                                {riskLevel.label}
                              </span>
                            );
                          })()}
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div 
                          className={`h-3 rounded-full dimension-progress-${selectedDimension.id}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedDimension.value}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>Low (0-39%)</span>
                        <span>Moderate (40-69%)</span>
                        <span>High (70-100%)</span>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4 rounded">
                      <div className="flex items-start">
                        <Info size={20} className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-blue-900 dark:text-blue-200 mb-1">
                            What This Means
                          </p>
                          <p className="text-sm text-blue-800 dark:text-blue-300">
                            This dimension represents {selectedDimension.description.toLowerCase()}. 
                            A score of {selectedDimension.value}% indicates {selectedDimension.value >= 70 ? 'significant' : selectedDimension.value >= 40 ? 'moderate' : 'low'} 
                            {' '}risk exposure in this area. Consider focusing on the key considerations below to improve your risk posture.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mb-3 dark:text-white">Key Considerations:</h4>
                    <ul className="space-y-2">
                      {selectedDimension.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                            className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 dimension-bullet-${selectedDimension.id}`}
                          />
                          <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                            className="text-gray-600 dark:text-gray-200"
                          >
                            {detail}
                          </motion.span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        💡 Tip: Use this assessment to prioritize your risk management efforts. Focus on dimensions with higher scores first.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};