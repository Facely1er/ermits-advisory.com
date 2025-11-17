import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowRight, AlertTriangle, CheckCircle, ChevronDown
} from 'lucide-react';
import { steelDimensions, scenarios } from '../data/mockData';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useTheme } from '../contexts/ThemeContext';

// Register ChartJS components
ChartJS.register(
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend
);

export const RiskRadar: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [currentScenario, setCurrentScenario] = useState<'current' | 'breach' | 'investment' | 'industry'>('current');
  const [sliderValues, setSliderValues] = useState<Record<string, number>>({
    political: scenarios.current.political,
    economic: scenarios.current.economic,
    social: scenarios.current.social,
    technology: scenarios.current.technology,
    environmental: scenarios.current.environmental,
    legal: scenarios.current.legal,
  });
  const [overallScore, setOverallScore] = useState<number>(0);
  const [activeRecommendation, setActiveRecommendation] = useState<string | null>(null);

  // Risk mitigation recommendations
  const recommendations = [
    {
      priority: 'Critical',
      action: 'Implement multi-factor authentication across all systems',
      impact: 'Prevent 99% of account takeover attacks',
      timeline: 'Immediate',
      effort: 'Medium'
    },
    {
      priority: 'High',
      action: 'Patch critical infrastructure vulnerabilities',
      impact: 'Reduce attack surface by 40%',
      timeline: '1-2 weeks',
      effort: 'High'
    },
    {
      priority: 'Medium',
      action: 'Update incident response playbooks',
      impact: 'Improve response time by 50%',
      timeline: '1 month',
      effort: 'Low'
    }
  ];

  // Update overall score when slider values change
  useEffect(() => {
    const sum = Object.values(sliderValues).reduce((total, value) => total + value, 0);
    setOverallScore(Math.round(sum / Object.values(sliderValues).length));
  }, [sliderValues]);

  // Handle scenario change
  const handleScenarioChange = (scenario: 'current' | 'breach' | 'investment' | 'industry') => {
    setCurrentScenario(scenario);
    setSliderValues(scenarios[scenario]);
  };

  // Handle slider change
  const handleSliderChange = (dimension: string, value: number) => {
    setSliderValues((prev) => ({
      ...prev,
      [dimension]: value,
    }));
    // When user makes changes, we're in a custom scenario
    setCurrentScenario('current');
  };

  // Handle generate report button click
  const handleGenerateReport = () => {
    navigate('/dashboard');
  };

  // Get risk level color based on value
  const getRiskLevelColor = (value: number) => {
    if (value < 40) return 'text-green-500';
    if (value < 60) return 'text-yellow-500';
    if (value < 80) return 'text-orange-500';
    return 'text-red-500';
  };

  // Get risk level text based on value
  const getRiskLevelText = (value: number) => {
    if (value < 40) return 'Low';
    if (value < 60) return 'Medium';
    if (value < 80) return 'High';
    return 'Critical';
  };

  // Priority color based on priority level
  const getPriorityColor = (priority: string) => {
    // Convert priority to lowercase for case-insensitive matching
    const lowerPriority = priority.toLowerCase();
    
    if (lowerPriority.includes('critical') || lowerPriority.includes('crítico') || lowerPriority.includes('critique')) {
      return 'text-red-500';
    } else if (lowerPriority.includes('high') || lowerPriority.includes('alto') || lowerPriority.includes('élevé')) {
      return 'text-orange-500';
    } else if (lowerPriority.includes('medium') || lowerPriority.includes('medio') || lowerPriority.includes('moyen')) {
      return 'text-yellow-500';
    } else if (lowerPriority.includes('low') || lowerPriority.includes('bajo') || lowerPriority.includes('faible')) {
      return 'text-green-500';
    }
    return 'text-gray-500';
  };

  // Effort badge style based on effort level
  const getEffortBadgeStyle = (effort: string) => {
    // Convert effort to lowercase for case-insensitive matching
    const lowerEffort = effort.toLowerCase();
    
    if (lowerEffort.includes('low') || lowerEffort.includes('bajo') || lowerEffort.includes('faible')) {
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
    } else if (lowerEffort.includes('medium') || lowerEffort.includes('medio') || lowerEffort.includes('moyen')) {
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
    } else if (lowerEffort.includes('high') || lowerEffort.includes('alto') || lowerEffort.includes('élevé')) {
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
    }
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
  };

  // Radar chart data and options
  const radarData = {
    labels: steelDimensions.map(dim => dim.title),
    datasets: [
      {
        label: 'Risk Visualization',
        data: Object.values(sliderValues),
        backgroundColor: theme === 'dark' ? 'rgba(0, 75, 135, 0.3)' : 'rgba(0, 75, 135, 0.2)',
        borderColor: theme === 'dark' ? 'rgba(201, 230, 255, 0.8)' : 'rgba(0, 75, 135, 1)',
        borderWidth: 2,
        pointBackgroundColor: steelDimensions.map(dim => dim.color),
        pointBorderColor: theme === 'dark' ? '#e2e8f0' : '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: theme === 'dark' ? 'rgba(201, 230, 255, 1)' : 'rgba(0, 75, 135, 1)',
      },
    ],
  };
  
  const radarOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          color: theme === 'dark' ? 'rgba(226, 232, 240, 0.8)' : 'rgba(100, 116, 139, 0.8)',
          font: {
            size: 12,
          },
        },
        grid: {
          color: theme === 'dark' ? 'rgba(201, 230, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: theme === 'dark' ? 'rgba(201, 230, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: theme === 'dark' ? 'rgba(226, 232, 240, 0.8)' : 'rgb(100, 116, 139)',
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(0, 0, 0, 0.7)',
        titleColor: theme === 'dark' ? 'rgba(226, 232, 240, 1)' : 'white',
        bodyColor: theme === 'dark' ? 'rgba(226, 232, 240, 0.8)' : 'white',
        titleFont: {
          family: "'Outfit', sans-serif",
          size: 14,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12,
        },
        padding: 10,
        cornerRadius: 4,
        boxPadding: 3,
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Animation variants (commented out as unused)
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };
  
  // const item = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: { opacity: 1, y: 0 },
  // };

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-16 mb-8"
        >
          <h1 className="text-3xl font-bold mb-2 dark:text-white">{'STEEL™ Risk Radar'}</h1>
          <p className="text-gray-600 dark:text-gray-200">{'Interactive risk assessment and scenario modeling'}</p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left panel: Sliders */}
          <motion.div 
            className="col-span-12 md:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="glass" padding="md">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">{'Risk Dimensions'}</h2>
              
              <div className="space-y-6">
                {steelDimensions.map((dimension) => (
                  <div key={dimension.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium dark:text-gray-200">
                        {dimension.id.charAt(0).toUpperCase() + dimension.id.slice(1)}
                      </label>
                      <span 
                        className={`text-sm font-bold ${getRiskLevelColor(sliderValues[dimension.id])}`}
                      >
                        {sliderValues[dimension.id]}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValues[dimension.id]}
                      onChange={(e) => handleSliderChange(dimension.id, parseInt(e.target.value))}
                      className="w-full accent-navy dark:accent-silver"
                      aria-label={`${dimension.id.charAt(0).toUpperCase() + dimension.id.slice(1)} risk level`}
                      ref={(el) => {
                        if (el) {
                          el.style.setProperty('--range-color', dimension.color);
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">{'Scenarios'}</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant={currentScenario === 'current' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleScenarioChange('current')}
                    className="w-full"
                  >
                    {'Current'}
                  </Button>
                  <Button 
                    variant={currentScenario === 'breach' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleScenarioChange('breach')}
                    className="w-full"
                  >
                    {'Breach'}
                  </Button>
                  <Button 
                    variant={currentScenario === 'investment' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleScenarioChange('investment')}
                    className="w-full"
                  >
                    {'Investment'}
                  </Button>
                  <Button 
                    variant={currentScenario === 'industry' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleScenarioChange('industry')}
                    className="w-full"
                  >
                    {'Industry'}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Middle: Radar Chart */}
          <motion.div 
            className="col-span-12 md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card variant="glass" padding="md" className="h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">{'Risk Visualization'}</h2>
              
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={theme === 'dark' ? "#374151" : "#eee"}
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={overallScore < 40 ? "#10B981" : overallScore < 60 ? "#FBBF24" : overallScore < 80 ? "#F97316" : "#EF4444"}
                      strokeWidth="3"
                      strokeDasharray={`${overallScore}, 100`}
                    />
                    <text x="18" y="20.5" className="text-lg font-bold" textAnchor="middle" fill={theme === 'dark' ? "#e2e8f0" : "currentColor"}>
                      {overallScore}
                    </text>
                  </svg>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <p className="text-lg font-medium dark:text-white">
                  <span className={getRiskLevelColor(overallScore)}>
                    {getRiskLevelText(overallScore)}
                  </span> Risk
                </p>
              </div>
              
              <div className="flex-grow h-64">
                <Radar data={radarData} options={radarOptions} />
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  variant="primary"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  onClick={handleGenerateReport}
                >
                  {'Generate Full Report'}
                </Button>
              </div>
            </Card>
          </motion.div>
          
          {/* Right panel: Recommendations */}
          <motion.div 
            className="col-span-12 md:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card variant="glass" padding="md">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">{'Strategic Recommendations'}</h2>
              
              <div className="space-y-4">
                {recommendations.map((recommendation, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"
                  >
                    <div 
                      className="flex items-start justify-between cursor-pointer"
                      onClick={() => setActiveRecommendation(
                        activeRecommendation === String(index) ? null : String(index)
                      )}
                    >
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <span className={`text-sm font-medium ${getPriorityColor(recommendation.priority)} mr-2`}>
                            {recommendation.priority}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded ${getEffortBadgeStyle(recommendation.effort)}`}>
                            {recommendation.effort}
                          </span>
                        </div>
                        <p className="font-medium dark:text-white">{recommendation.action}</p>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={`mt-1 transform transition-transform dark:text-white ${
                          activeRecommendation === String(index) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                    
                    <AnimatePresence>
                      {activeRecommendation === String(index) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pl-4 border-l-2 border-navy dark:border-silver"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-200 mb-2">
                            <span className="font-medium">{'Impact'}:</span> {recommendation.impact}
                          </p>
                          <div className="flex space-x-2">
                            {recommendation.priority.toLowerCase().includes('crit') && (
                              <div className="flex items-center text-xs text-red-500">
                                <AlertTriangle size={12} className="mr-1" />
                                <span>{'Immediate Action Required'}</span>
                              </div>
                            )}
                            {recommendation.effort.toLowerCase().includes('low') || 
                             recommendation.effort.toLowerCase().includes('bajo') || 
                             recommendation.effort.toLowerCase().includes('faible') && (
                              <div className="flex items-center text-xs text-green-500">
                                <CheckCircle size={12} className="mr-1" />
                                <span>{'Quick Win'}</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>{'Demo Mode'} - {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};