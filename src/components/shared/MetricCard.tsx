import React from 'react';
import { cn } from '../../utils/cn';

interface MetricCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  subtitle,
  className
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-4 bg-slate-900/90 dark:bg-slate-800/90 border border-slate-700/45 text-sm',
        className
      )}
    >
      <div className="text-slate-400 text-xs mb-1 uppercase tracking-wider">
        {label}
      </div>
      <div className="font-semibold text-base mb-1 text-white">
        {value}
      </div>
      {subtitle && (
        <div className="text-xs text-slate-400">
          {subtitle}
        </div>
      )}
    </div>
  );
};

