import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  Shield, AlertTriangle, Zap, CheckCircle, 
  ChevronRight, TrendingUp, TrendingDown, Minus,
  BarChart3, PieChart, Activity
} from 'lucide-react';
// import { formatPercentage } from '../utils/formatters';
import { riskDimensions, metrics, threats } from '../data/mockData';
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

export const Dashboard: React.FC = () => {
  const { t, getNestedTranslation } = useLanguage();
  const { theme } = useTheme();
  const [selectedView, setSelectedView] = useState<'overview' | 'details'>('overview');

  // Get translated strategic actions
  const strategicActionsData = getNestedTranslation('dashboard.actions.items');
  const strategicActions: Array<Record<string, unknown>> = Array.isArray(strategicActionsData) 
    ? strategicActionsData as Array<Record<string, unknown>>
    : [];

  // Calculate overall risk score (average of all dimensions)
  const overallScore = Math.round(
    riskDimensions.reduce((sum, dim) => sum + dim.value, 0) / riskDimensions.length
  );

  // Determine risk level based on score
  const getRiskLevel = (score: number) => {
    if (score < 40) return { level: t('dashboard.riskScore.low'), color: 'text-green-500' };
    if (score < 60) return { level: t('dashboard.riskScore.medium'), color: 'text-yellow-500' };
    if (score < 80) return { level: t('dashboard.riskScore.high'), color: 'text-orange-500' };
    return { level: t('dashboard.riskScore.critical'), color: 'text-red-500' };
  };

  const riskLevel = getRiskLevel(overallScore);

  // Trend icon based on trend direction
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-red-500" />;
      case 'down':
        return <TrendingDown size={16} className="text-green-500" />;
      case 'stable':
        return <Minus size={16} className="text-gray-500" />;
    }
  };

  // Metric icon based on metric type
  const getMetricIcon = (icon: string) => {
    switch (icon) {
      case 'shield':
        return <Shield size={24} className="text-navy dark:text-silver" />;
      case 'alert-triangle':
        return <AlertTriangle size={24} className="text-orange-500" />;
      case 'zap':
        return <Zap size={24} className="text-red-500" />;
      case 'check-circle':
        return <CheckCircle size={24} className="text-green-500" />;
      default:
        return <BarChart3 size={24} className="text-navy dark:text-silver" />;
    }
  };

  // Priority color based on priority level
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
      case 'Crítico':
      case 'Critique':
        return 'text-red-500';
      case 'High':
      case 'Alto':
      case 'Élevé':
        return 'text-orange-500';
      case 'Medium':
      case 'Medio':
      case 'Moyen':
        return 'text-yellow-500';
      case 'Low':
      case 'Bajo':
      case 'Faible':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  // Status color and styles based on status
  const getStatusStyles = (status: string) => {
    // Handle different languages
    const statusKey = 
      status === 'Not Started' || status === 'No Iniciado' || status === 'Non Démarré' 
        ? 'notStarted' 
        : status === 'In Progress' || status === 'En Progreso' || status === 'En Cours' 
          ? 'inProgress' 
          : 'completed';
    
    switch (statusKey) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'inProgress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'notStarted':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
    }
  };

  // Impact color based on impact level
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical':
        return 'text-red-500';
      case 'High':
        return 'text-orange-500';
      case 'Medium':
        return 'text-yellow-500';
      case 'Low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  // Radar chart data and options
  const radarData = {
    labels: riskDimensions.map(dim => t(`steel.dimensions.${dim.id}.title`)),
    datasets: [
      {
        label: t('dashboard.radar.title'),
        data: riskDimensions.map(dim => dim.value),
        backgroundColor: theme === 'dark' ? 'rgba(0, 75, 135, 0.3)' : 'rgba(0, 75, 135, 0.2)',
        borderColor: theme === 'dark' ? 'rgba(201, 230, 255, 0.8)' : 'rgba(0, 75, 135, 1)',
        borderWidth: 2,
        pointBackgroundColor: riskDimensions.map(dim => dim.color),
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Generate CSS variables for dimension colors
  const dimensionColorStyles = riskDimensions
    .map((dim) => `.risk-dimension-indicator[data-dimension-id="${dim.id}"] { --dimension-color: ${dim.color}; }`)
    .join('\n');

  return (
    <div className="min-h-screen bg-silver-light dark:bg-dark-bg">
      <style>{dimensionColorStyles}</style>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy text-white pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy-dark/90 to-navy/95"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-silver">
                <BarChart3 size={16} className="mr-2" />
                Executive Dashboard
              </span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-silver to-white bg-clip-text text-transparent">
                {t('dashboard.title')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-silver/90 max-w-3xl mx-auto leading-relaxed">
              {t('dashboard.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 mb-8 -mt-8">
          <Button 
            variant={selectedView === 'overview' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setSelectedView('overview')}
            icon={<Activity size={16} />}
          >
            Overview
          </Button>
          <Button 
            variant={selectedView === 'details' ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setSelectedView('details')}
            icon={<PieChart size={16} />}
          >
            Details
          </Button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar with Risk Score */}
          <motion.div 
            className="col-span-12 lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="glass" padding="lg" className="mb-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('dashboard.riskScore.title')}</h2>
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
              <div className="text-center">
                <p className="text-lg font-medium mb-1 dark:text-white">
                  <span className={riskLevel.color}>{riskLevel.level}</span> Risk
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: Today</p>
              </div>
            </Card>

            <Card variant="glass" padding="md">
              <h3 className="font-semibold mb-3 dark:text-white">Risk Dimensions</h3>
              <div className="space-y-4">
                {riskDimensions.map((dimension) => (
                  <div key={dimension.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="risk-dimension-indicator w-3 h-3 rounded-full mr-2" 
                        data-dimension-id={dimension.id}
                      ></div>
                      <span className="text-sm dark:text-gray-200">{t(`steel.dimensions.${dimension.id}.title`)}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-1 dark:text-white">{dimension.value}</span>
                      {getTrendIcon(dimension.trend)}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Key Metrics */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('dashboard.metrics.title')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric) => (
                  <motion.div key={metric.id} variants={item}>
                    <Card variant="glass" padding="md" className="h-full">
                      <div className="flex items-start">
                        <div className="p-3 rounded-full bg-silver/20 dark:bg-navy/40 mr-4">
                          {getMetricIcon(metric.icon)}
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-200">{t(`dashboard.metrics.${metric.id}`)}</p>
                          <p className="text-2xl font-bold dark:text-white">{metric.value}{metric.id === 'compliance' ? '%' : ''}</p>
                          <div className="flex items-center mt-1">
                            {metric.change > 0 ? (
                              <TrendingUp size={14} className={metric.id === 'compliance' ? "text-green-500" : "text-red-500"} />
                            ) : (
                              <TrendingDown size={14} className={metric.id === 'compliance' ? "text-red-500" : "text-green-500"} />
                            )}
                            <span className="text-xs ml-1 dark:text-gray-300">
                              {Math.abs(metric.change)}% from last month
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Risk Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="glass" padding="md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold dark:text-white">{t('dashboard.radar.title')}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-200">{t('dashboard.radar.description')}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {}}
                    icon={<ChevronRight size={16} />}
                    iconPosition="right"
                  >
                    {t('common.viewDashboard')}
                  </Button>
                </div>
                <div className="h-64 md:h-80">
                  <Radar data={radarData} options={radarOptions} />
                </div>
              </Card>
            </motion.div>

            {/* Threat Intelligence Table */}
            {selectedView === 'details' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card variant="glass" padding="md">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('dashboard.threats.title')}</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            {t('dashboard.threats.type')}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            {t('dashboard.threats.source')}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            {t('dashboard.threats.impact')}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                            {t('dashboard.threats.timeline')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {threats.map((threat) => (
                          <tr key={threat.id}>
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium dark:text-white">
                              {threat.type}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                              {threat.source}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm">
                              <span className={getImpactColor(threat.impact)}>
                                {threat.impact}
                              </span>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-200">
                              {threat.timeline}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Strategic Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card variant="glass" padding="md">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('dashboard.actions.title')}</h2>
                <div className="space-y-4">
                  {strategicActions.map((action: Record<string, unknown>, index: number) => {
                    const priority = typeof action.priority === 'string' ? action.priority : '';
                    const status = typeof action.status === 'string' ? action.status : '';
                    const actionText = typeof action.action === 'string' ? action.action : '';
                    const impact = typeof action.impact === 'string' ? action.impact : '';
                    
                    return (
                      <div key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center mb-1">
                              <span className={`text-sm font-medium ${getPriorityColor(priority)} mr-2`}>
                                {priority}
                              </span>
                              <span className={`text-xs px-2 py-0.5 rounded ${getStatusStyles(status)}`}>
                                {status}
                              </span>
                            </div>
                            <p className="font-medium dark:text-white">{actionText}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-200 mt-1">{impact}</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            icon={<ChevronRight size={16} />}
                            iconPosition="right"
                          >
                            {t('dashboard.actions.details')}
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>{t('common.demo')} - {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};