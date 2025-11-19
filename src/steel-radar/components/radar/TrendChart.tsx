/**
 * Trend Chart Component
 * 
 * Line chart showing composite score trends over time with date range selector
 */

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { TrendAnalysis } from '../../types/radar';
import { useTheme } from '../../../contexts/ThemeContext';
import { Button } from '../../../components/shared/Button';
import { format, parseISO } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface TrendChartProps {
  trendData: TrendAnalysis;
  onPeriodChange?: (period: '7d' | '30d' | '90d') => void;
  showFactors?: boolean;
  height?: number;
}

export const TrendChart: React.FC<TrendChartProps> = ({
  trendData,
  onPeriodChange,
  showFactors = false,
  height = 300,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>(
    trendData.period
  );

  const handlePeriodChange = (period: '7d' | '30d' | '90d') => {
    setSelectedPeriod(period);
    onPeriodChange?.(period);
  };

  const labels = trendData.data.map((d) => format(parseISO(d.date), 'MMM dd'));

  const datasets: any[] = [
    {
      label: 'Composite Score',
      data: trendData.data.map((d) => d.composite),
      borderColor: isDark ? 'rgba(0, 75, 135, 1)' : 'rgba(0, 75, 135, 1)',
      backgroundColor: isDark
        ? 'rgba(0, 75, 135, 0.1)'
        : 'rgba(0, 75, 135, 0.05)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: isDark ? 'rgba(201, 230, 255, 1)' : 'rgba(0, 75, 135, 1)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
    },
  ];

  if (showFactors) {
    const factorColors = [
      'rgba(239, 68, 68, 0.7)', // political - red
      'rgba(59, 130, 246, 0.7)', // economic - blue
      'rgba(16, 185, 129, 0.7)', // social - green
      'rgba(245, 158, 11, 0.7)', // technological - yellow
      'rgba(139, 92, 246, 0.7)', // environmental - purple
      'rgba(236, 72, 153, 0.7)', // legal - pink
    ];

    const factorKeys = [
      'political',
      'economic',
      'social',
      'technological',
      'environmental',
      'legal',
    ] as const;

    factorKeys.forEach((factor, index) => {
      datasets.push({
        label: factor.charAt(0).toUpperCase() + factor.slice(1),
        data: trendData.data.map((d) => d.factorScores[factor]),
        borderColor: factorColors[index],
        backgroundColor: factorColors[index].replace('0.7', '0.1'),
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 2,
        pointHoverRadius: 4,
        borderDash: [5, 5],
      });
    });
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: isDark ? 'rgba(226, 232, 240, 0.8)' : 'rgb(100, 116, 139)',
          font: {
            size: 11,
          },
          usePointStyle: true,
          padding: 12,
        },
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(17, 24, 39, 0.9)' : 'rgba(0, 0, 0, 0.8)',
        titleColor: isDark ? 'rgba(226, 232, 240, 1)' : 'white',
        bodyColor: isDark ? 'rgba(226, 232, 240, 0.9)' : 'white',
        titleFont: {
          family: "'Inter', sans-serif",
          size: 13,
          weight: 'bold' as const,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 12,
        },
        padding: 10,
        cornerRadius: 6,
        boxPadding: 4,
        intersect: false,
        mode: 'index' as const,
      },
    },
    scales: {
      x: {
        grid: {
          color: isDark ? 'rgba(201, 230, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: isDark ? 'rgba(226, 232, 240, 0.8)' : 'rgb(100, 116, 139)',
          font: {
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: false,
        min: 0,
        max: 100,
        grid: {
          color: isDark ? 'rgba(201, 230, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: isDark ? 'rgba(226, 232, 240, 0.8)' : 'rgb(100, 116, 139)',
          font: {
            size: 11,
          },
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div>
      {/* Period selector */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold dark:text-white">Score Trends</h3>
        <div className="flex gap-2">
          {(['7d', '30d', '90d'] as const).map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? 'primary' : 'outline'}
              size="sm"
              onClick={() => handlePeriodChange(period)}
            >
              {period === '7d' ? '7 Days' : period === '30d' ? '30 Days' : '90 Days'}
            </Button>
          ))}
        </div>
      </div>

      {/* Trend direction indicator */}
      {trendData.direction && (
        <div className="mb-4">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
              trendData.direction === 'improving'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                : trendData.direction === 'declining'
                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
            }`}
          >
            <span>
              {trendData.direction === 'improving'
                ? '↑ Improving'
                : trendData.direction === 'declining'
                ? '↓ Declining'
                : '→ Stable'}
            </span>
            <span>
              ({trendData.changes.composite > 0 ? '+' : ''}
              {trendData.changes.composite.toFixed(1)} points)
            </span>
          </div>
        </div>
      )}

      {/* Chart */}
      <div style={{ height: `${height}px` }}>
        <Line data={{ labels, datasets }} options={options} />
      </div>
    </div>
  );
};

