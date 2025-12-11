// SteelRadar.tsx
// Radar chart component for STEEL domain visualization

import React, { useRef, useEffect } from 'react';
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

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface SteelRadarProps {
  scores: number[]; // Array of scores in the same order as STEEL_DOMAINS (0-5 scale)
  title?: string;
  height?: number;
}

export default function SteelRadar({ scores, title, height = 400 }: SteelRadarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set height via CSS variable
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--radar-height', `${height}px`);
    }
  }, [height]);

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
        backgroundColor: 'rgba(0, 75, 135, 0.2)',
        borderColor: 'rgba(0, 75, 135, 1)',
        borderWidth: 2,
        pointBackgroundColor: '#004b87',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0, 75, 135, 1)',
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
          color: 'rgba(100, 116, 139, 0.8)',
          font: {
            size: 12,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: 'rgb(100, 116, 139)',
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
          color: 'rgb(100, 116, 139)',
          font: {
            size: 12,
          },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
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
        <h3 className="text-xl font-bold mb-4">{title}</h3>
      )}
      <div ref={containerRef} className="steel-radar-chart-container">
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
}
