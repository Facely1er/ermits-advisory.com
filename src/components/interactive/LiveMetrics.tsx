import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Activity, Shield, Scale, Globe, Users } from 'lucide-react';

interface Metric {
  id: string;
  label: string;
  value: number;
  previousValue: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
  unit?: string;
  description?: string;
  icon?: React.ReactNode;
  category?: string;
}

export const LiveMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: 'steel-composite',
      label: "STEEL™ Composite Score",
      value: 0,
      previousValue: 0,
      change: 0,
      trend: 'stable',
      color: '#3b82f6',
      unit: '/100',
      description: 'Overall risk resilience',
      icon: <Shield size={16} className="text-blue-500" />,
      category: 'STEEL'
    },
    {
      id: 'regulatory-changes',
      label: "Regulatory Updates",
      value: 0,
      previousValue: 0,
      change: 0,
      trend: 'stable',
      color: '#8b5cf6',
      description: 'Political factor - Last 30 days',
      icon: <Scale size={16} className="text-purple-500" />,
      category: 'PESTEL'
    },
    {
      id: 'vendor-risk',
      label: "Vendor Risk Indicators",
      value: 0,
      previousValue: 0,
      change: 0,
      trend: 'stable',
      color: '#f59e0b',
      description: 'Supply chain exposure',
      icon: <Globe size={16} className="text-amber-500" />,
      category: 'PESTEL'
    },
    {
      id: 'privacy-updates',
      label: "Privacy Regulation Changes",
      value: 0,
      previousValue: 0,
      change: 0,
      trend: 'stable',
      color: '#10b981',
      unit: '%',
      description: 'Legal factor - GDPR/CCPA/DPDP',
      icon: <Users size={16} className="text-green-500" />,
      category: 'PESTEL'
    }
  ]);

  const [loading, setLoading] = useState(true);

  // Simulate STEEL™ data updates
  useEffect(() => {
    const fetchSteelData = async () => {
      try {
        setLoading(true);
        
        // Simulate STEEL™ metrics based on PESTEL framework
        // In production, this would fetch from STEEL API
        const simulateSteelMetrics = () => {
          return {
            steelComposite: Math.floor(Math.random() * 30) + 60, // 60-90 range
            regulatoryChanges: Math.floor(Math.random() * 15) + 5, // 5-20
            vendorRisk: Math.floor(Math.random() * 25) + 10, // 10-35
            privacyUpdates: Math.floor(Math.random() * 20) + 5, // 5-25
          };
        };

        const steelData = simulateSteelMetrics();

        setMetrics(prev => {
          return prev.map(metric => {
            let newValue = metric.value;
            let previousValue = metric.value;

            switch (metric.id) {
              case 'steel-composite':
                newValue = steelData.steelComposite;
                previousValue = metric.value || steelData.steelComposite;
                break;
              case 'regulatory-changes':
                newValue = steelData.regulatoryChanges;
                previousValue = metric.value || steelData.regulatoryChanges;
                break;
              case 'vendor-risk':
                newValue = steelData.vendorRisk;
                previousValue = metric.value || steelData.vendorRisk;
                break;
              case 'privacy-updates':
                newValue = steelData.privacyUpdates;
                previousValue = metric.value || steelData.privacyUpdates;
                break;
            }

            const change = newValue - previousValue;
            const trend: 'up' | 'down' | 'stable' = 
              change > 0.5 ? 'up' : change < -0.5 ? 'down' : 'stable';

            return {
              ...metric,
              value: newValue,
              previousValue: previousValue,
              change: Math.round(change * 10) / 10,
              trend,
            };
          });
        });
      } catch (error) {
        console.error('Error fetching STEEL metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchSteelData();

    // Update every 5 minutes (STEEL data updates periodically)
    const interval = setInterval(fetchSteelData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

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

  const getRiskColor = (value: number, id: string, defaultColor: string) => {
    if (id === 'steel-composite') {
      // For STEEL score, higher is better (green = high score, red = low score)
      if (value >= 80) return '#10b981'; // green
      if (value >= 60) return '#eab308'; // yellow
      if (value >= 40) return '#f97316'; // orange
      return '#dc2626'; // red
    }
    // For other metrics, use default color
    return defaultColor;
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const displayColor = getRiskColor(metric.value, metric.id, metric.color);
          const isScoreMetric = metric.id === 'steel-composite';
          
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loading ? 0.7 : 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card-bg rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 flex-1">
                  {metric.icon && (
                    <div className="flex-shrink-0">
                      {metric.icon}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {metric.label}
                    </h3>
                    {metric.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {metric.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center ml-2 flex-shrink-0">
                  <Activity 
                    size={12} 
                    className={`mr-1 ${loading ? 'text-gray-300 animate-pulse' : 'text-cyan-400'}`} 
                  />
                  <span className={`text-xs font-medium ${loading ? 'text-gray-300' : 'text-cyan-400'}`}>
                    {loading ? 'LOADING' : 'LIVE'}
                  </span>
                </div>
              </div>
            
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <motion.div
                    key={metric.value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold"
                    style={{ color: displayColor }}
                  >
                    {metric.value}{metric.unit || ''}
                  </motion.div>
                  
                  <div className="flex items-center mt-1">
                    {getTrendIcon(metric.trend)}
                    <span 
                      className={`text-xs ml-1 font-medium ${
                        isScoreMetric
                          ? (metric.trend === 'up' ? 'text-green-500' : metric.trend === 'down' ? 'text-red-500' : 'text-gray-500')
                          : (metric.trend === 'up' ? 'text-red-500' : metric.trend === 'down' ? 'text-green-500' : 'text-gray-500')
                      }`}
                    >
                      {metric.change > 0 ? '+' : ''}{metric.change}{metric.unit || ''}
                    </span>
                  </div>
                </div>
                
                {/* Progress bar for STEEL composite score */}
                {isScoreMetric && (
                  <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full ml-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: displayColor }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          STEEL™ metrics powered by PESTEL analysis. Data sourced from regulatory feeds, threat intelligence, and vendor risk databases. Updates every 5 minutes.
        </p>
      </div>
    </div>
  );
};