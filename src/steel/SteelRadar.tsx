// SteelRadar.tsx
// Radar chart component for STEEL domain visualization

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
import { STEEL_DOMAINS } from './steelScoring';
import { useTheme } from '../contexts/ThemeContext';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface SteelRadarProps {
  scores: number[]; // Array of scores in the same order as STEEL_DOMAINS (0-5 scale)
  title?: string;
  height?: number;
}

export default function SteelRadar({ scores, title, height = 400 }: SteelRadarProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Get labels from STEEL_DOMAINS
  const labels = STEEL_DOMAINS.map((domain) => domain.label);

  // Ensure scores array matches the length of domains
  const data = scores.length === STEEL_DOMAINS.length 
    ? scores 
    : Array(STEEL_DOMAINS.length).fill(0);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'STEEL™ Domain Scores',
        data,
        backgroundColor: isDark
          ? 'rgba(0, 75, 135, 0.3)'
          : 'rgba(0, 75, 135, 0.2)',
        borderColor: isDark ? 'rgba(201, 230, 255, 0.8)' : 'rgba(0, 75, 135, 1)',
        borderWidth: 2,
        pointBackgroundColor: isDark ? '#c9e6ff' : '#004b87',
        pointBorderColor: isDark ? '#e2e8f0' : '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: isDark ? 'rgba(201, 230, 255, 1)' : 'rgba(0, 75, 135, 1)',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1,
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
            size: 11,
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
            const label = context.label || '';
            const value = context.parsed.r;
            return `${label}: ${value.toFixed(1)}/5`;
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
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-bold mb-4 dark:text-white">{title}</h3>
      )}
      <div style={{ height: `${height}px` }}>
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
}

