import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Activity } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface Metric {
  id: string;
  label: string;
  value: number;
  previousValue: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
  unit?: string;
}

export const LiveMetrics: React.FC = () => {
  const { t } = useLanguage();
  
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: 'risk-score',
      label: t('landing.liveMetrics.overallRiskScore'),
      value: 67,
      previousValue: 72,
      change: -5,
      trend: 'down',
      color: '#059669',
      unit: '%'
    },
    {
      id: 'threats',
      label: t('landing.liveMetrics.activeThreats'),
      value: 14,
      previousValue: 11,
      change: 3,
      trend: 'up',
      color: '#dc2626'
    },
    {
      id: 'compliance',
      label: t('landing.liveMetrics.complianceScore'),
      value: 94,
      previousValue: 88,
      change: 6,
      trend: 'up',
      color: '#2563eb',
      unit: '%'
    },
    {
      id: 'incidents',
      label: t('landing.liveMetrics.recentIncidents'),
      value: 2,
      previousValue: 2,
      change: 0,
      trend: 'stable',
      color: '#f59e0b'
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const variance = Math.random() * 0.1 - 0.05; // ±5% variation
        const newValue = Math.max(0, Math.min(100, metric.value + variance));
        const change = newValue - metric.value;
        
        return {
          ...metric,
          previousValue: metric.value,
          value: Math.round(newValue * 10) / 10,
          change: Math.round(change * 10) / 10,
          trend: change > 0.1 ? 'up' : change < -0.1 ? 'down' : 'stable'
        };
      }));
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Update labels when language changes
  useEffect(() => {
    setMetrics(prev => prev.map(metric => ({
      ...metric,
      label: metric.id === 'risk-score' ? t('landing.liveMetrics.overallRiskScore') :
             metric.id === 'threats' ? t('landing.liveMetrics.activeThreats') :
             metric.id === 'compliance' ? t('landing.liveMetrics.complianceScore') :
             metric.id === 'incidents' ? t('landing.liveMetrics.recentIncidents') :
             metric.label
    })));
  }, [t]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-green-500" />;
      case 'down':
        return <TrendingDown size={16} className="text-red-500" />;
      default:
        return <Minus size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-dark-card-bg rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {metric.label}
            </h3>
            <div className="flex items-center">
              <Activity size={12} className="text-gray-400 mr-1" />
              <span className="text-xs text-gray-400">{t('landing.liveMetrics.live')}</span>
            </div>
          </div>
          
          <div className="flex items-end justify-between">
            <div>
              <motion.div
                key={metric.value}
                initial={{ scale: 1.2, color: metric.color }}
                animate={{ scale: 1, color: '#1f2937' }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold dark:text-white"
              >
                {metric.value}{metric.unit}
              </motion.div>
              
              <div className="flex items-center mt-1">
                {getTrendIcon(metric.trend)}
                <span 
                  className={`text-xs ml-1 ${
                    metric.trend === 'up' 
                      ? 'text-green-500' 
                      : metric.trend === 'down' 
                        ? 'text-red-500' 
                        : 'text-gray-500'
                  }`}
                >
                  {metric.change > 0 ? '+' : ''}{metric.change}{metric.unit}
                </span>
              </div>
            </div>
            
            {/* Mini chart */}
            <div className="w-16 h-8">
              <svg viewBox="0 0 60 30" className="w-full h-full">
                <motion.path
                  d={`M 0 ${30 - (metric.previousValue / 100) * 30} L 60 ${30 - (metric.value / 100) * 30}`}
                  stroke={metric.color}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                <motion.circle
                  cx="60"
                  cy={30 - (metric.value / 100) * 30}
                  r="2"
                  fill={metric.color}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};