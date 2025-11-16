import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Activity } from 'lucide-react';
import { getThreatIntelligence } from '../../services/threatIntelligenceService';

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
}

export const LiveMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      id: 'exploited-vulns',
      label: "Known Exploited Vulnerabilities",
      value: 0,
      previousValue: 0,
      change: 0,
      trend: 'stable',
      color: '#dc2626',
      description: 'CISA KEV Catalog'
    },
    {
      id: 'recent-cves',
      label: "Recent CVEs Published",
      value: 0,
      previousValue: 0,
      change: 0,
      trend: 'stable',
      color: '#f59e0b',
      description: 'Last 24 hours'
    },
    {
      id: 'active-threats',
      label: "Active Threats",
      value: 0,
      previousValue: 0,
      change: 0,
      trend: 'stable',
      color: '#ef4444',
      description: 'Last 30 days'
    },
    {
      id: 'threat-score',
      label: "Threat Landscape Score",
      value: 0,
      previousValue: 0,
      change: 0,
      trend: 'stable',
      color: '#059669',
      unit: '%',
      description: 'Risk indicator'
    }
  ]);

  const [loading, setLoading] = useState(true);

  // Fetch real-time threat intelligence data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch real data from threat intelligence services
        const threatData = await getThreatIntelligence();

        setMetrics(prev => {
          const newMetrics = prev.map(metric => {
            let newValue = metric.value;
            let previousValue = metric.value;

            switch (metric.id) {
              case 'exploited-vulns':
                newValue = threatData.exploitedVulnerabilities;
                previousValue = metric.value || threatData.exploitedVulnerabilities;
                break;
              case 'recent-cves':
                newValue = threatData.recentVulnerabilities;
                previousValue = metric.value || threatData.recentVulnerabilities;
                break;
              case 'active-threats':
                newValue = threatData.activeThreats;
                previousValue = metric.value || threatData.activeThreats;
                break;
              case 'threat-score':
                newValue = threatData.riskScore;
                previousValue = metric.value || threatData.riskScore;
                break;
            }

            const change = newValue - previousValue;
            const trend: 'up' | 'down' | 'stable' = 
              change > 0.1 ? 'up' : change < -0.1 ? 'down' : 'stable';

            return {
              ...metric,
              value: newValue,
              previousValue: previousValue,
              change: Math.round(change * 10) / 10,
              trend,
            };
          });

          return newMetrics;
        });
      } catch (error) {
        console.error('Error fetching threat intelligence:', error);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Update every 5 minutes (threat intelligence data doesn't change that frequently)
    const interval = setInterval(fetchData, 5 * 60 * 1000);

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

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loading ? 0.7 : 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-dark-card-bg rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {metric.label}
                </h3>
                {metric.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {metric.description}
                  </p>
                )}
              </div>
              <div className="flex items-center ml-2">
                <Activity 
                  size={12} 
                  className={`mr-1 ${loading ? 'text-gray-300 animate-pulse' : 'text-gray-400'}`} 
                />
                <span className={`text-xs ${loading ? 'text-gray-300' : 'text-gray-400'}`}>
                  {loading ? 'LOADING' : 'LIVE'}
                </span>
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
            
            {/* Mini chart - only show for percentage-based metrics */}
            {metric.unit === '%' && (
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
            )}
          </div>
        </motion.div>
      ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Data sourced from CISA Known Exploited Vulnerabilities and NVD. Updates every 5 minutes.
        </p>
      </div>
    </div>
  );
};