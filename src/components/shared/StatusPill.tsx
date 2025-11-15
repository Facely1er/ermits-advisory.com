import React from 'react';
import { cn } from '../../utils/cn';

interface StatusPillProps {
  label: string;
  status?: 'live' | 'active' | 'inactive';
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  label,
  status = 'live',
  className
}) => {
  const statusStyles = {
    live: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60',
    active: 'bg-blue-500/20 text-blue-300 border-blue-500/60',
    inactive: 'bg-gray-500/20 text-gray-300 border-gray-500/60'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border',
        statusStyles[status],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
      {label}
    </div>
  );
};

