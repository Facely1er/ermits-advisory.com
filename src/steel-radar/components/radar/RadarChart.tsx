/**
 * Radar Chart Component
 * 
 * Enhanced radar chart with historical overlay, confidence indicators, and trend arrows
 */

import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { FactorScores, FactorConfidence } from '../../types/radar';
import { useTheme } from '../../../contexts/ThemeContext';
import { getConfidenceColor } from '../../services/confidenceService';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface RadarChartProps {
  currentScores: FactorScores;
  historicalScores?: FactorScores;
  confidence?: FactorConfidence;
  trends?: Record<string, number>; // Factor name -> change value
  height?: number;
}

export const RadarChart: React.FC<RadarChartProps> = ({
  currentScores,
  historicalScores,
  confidence,
  trends,
  height = 400,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const labels = ['Political', 'Economic', 'Social', 'Technological', 'Environmental', 'Legal'];
  const factorKeys: (keyof FactorScores)[] = [
    'political',
    'economic',
    'social',
    'technological',
    'environmental',
    'legal',
  ];

  const currentData = factorKeys.map((key) => currentScores[key]);
  const historicalData = historicalScores
    ? factorKeys.map((key) => historicalScores[key])
    : null;

  const datasets: any[] = [
    {
      label: 'Current Score',
      data: currentData,
      backgroundColor: isDark
        ? 'rgba(0, 75, 135, 0.3)'
        : 'rgba(0, 75, 135, 0.2)',
      borderColor: isDark ? 'rgba(201, 230, 255, 0.8)' : 'rgba(0, 75, 135, 1)',
      borderWidth: 2,
      pointBackgroundColor: factorKeys.map((key) => {
        if (confidence) {
          const conf = confidence[key];
          return conf === 'HIGH'
            ? '#10b981'
            : conf === 'MEDIUM'
            ? '#f59e0b'
            : '#ef4444';
        }
        return isDark ? '#c9e6ff' : '#004b87';
      }),
      pointBorderColor: isDark ? '#e2e8f0' : '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: isDark ? 'rgba(201, 230, 255, 1)' : 'rgba(0, 75, 135, 1)',
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ];

  if (historicalData) {
    datasets.push({
      label: 'Previous Period',
      data: historicalData,
      backgroundColor: isDark
        ? 'rgba(148, 163, 184, 0.2)'
        : 'rgba(148, 163, 184, 0.1)',
      borderColor: isDark ? 'rgba(148, 163, 184, 0.6)' : 'rgba(148, 163, 184, 0.8)',
      borderWidth: 2,
      borderDash: [5, 5],
      pointRadius: 4,
      pointHoverRadius: 6,
    });
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          backdropColor: 'transparent',
          color: isDark ? 'rgba(226, 232, 240, 0.8)' : 'rgba(100, 116, 139, 0.8)',
          font: {
            size: 12,
          },
        },
        grid: {
          color: isDark ? 'rgba(201, 230, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: isDark ? 'rgba(201, 230, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: isDark ? 'rgba(226, 232, 240, 0.8)' : 'rgb(100, 116, 139)',
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: {
          color: isDark ? 'rgba(226, 232, 240, 0.8)' : 'rgb(100, 116, 139)',
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(17, 24, 39, 0.9)' : 'rgba(0, 0, 0, 0.8)',
        titleColor: isDark ? 'rgba(226, 232, 240, 1)' : 'white',
        bodyColor: isDark ? 'rgba(226, 232, 240, 0.9)' : 'white',
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: 'bold' as const,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12,
        },
        padding: 12,
        cornerRadius: 6,
        boxPadding: 4,
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.parsed.r;
            const factorKey = factorKeys[context.dataIndex];
            const conf = confidence?.[factorKey];

            let tooltipText = `${label}: ${value}/100`;

            if (conf) {
              tooltipText += ` (${conf} confidence)`;
            }

            if (trends && trends[factorKey]) {
              const trend = trends[factorKey];
              const trendText = trend > 0 ? `↑ +${trend}` : trend < 0 ? `↓ ${trend}` : '→';
              tooltipText += ` ${trendText}`;
            }

            return tooltipText;
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
  };

  return (
    <div className="relative" style={{ height: `${height}px` }}>
      <Radar data={{ labels, datasets }} options={options} />
      
      {/* Confidence indicators */}
      {confidence && (
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {factorKeys.map((key, index) => {
            const conf = confidence[key];
            const color = getConfidenceColor(conf, isDark);
            return (
              <div
                key={key}
                className={`flex items-center gap-2 text-xs ${color}`}
                style={{
                  transform: `rotate(${(index * 60 - 90) * (Math.PI / 180)}rad)`,
                  transformOrigin: 'center',
                }}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    conf === 'HIGH'
                      ? 'bg-green-500'
                      : conf === 'MEDIUM'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                />
                <span className="font-medium">{conf}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Trend arrows */}
      {trends && (
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {Object.entries(trends).map(([factor, change]) => {
            if (Math.abs(change) < 1) return null; // Ignore minimal changes

            const Icon =
              change > 0 ? TrendingUp : change < 0 ? TrendingDown : Minus;
            const color =
              change > 0
                ? 'text-green-600 dark:text-green-400'
                : change < 0
                ? 'text-red-600 dark:text-red-400'
                : 'text-gray-600 dark:text-gray-400';

            return (
              <div
                key={factor}
                className={`flex items-center gap-1 text-xs ${color}`}
              >
                <Icon size={14} />
                <span className="font-medium">
                  {factor.charAt(0).toUpperCase() + factor.slice(1)}: {change > 0 ? '+' : ''}
                  {change.toFixed(1)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

