import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'solid';
  color?: 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'cyan';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  color = 'blue',
  className
}) => {
  const colorStyles = {
    blue: 'text-blue-300 bg-blue-500/20 border-blue-500/60',
    green: 'text-green-300 bg-green-500/20 border-green-500/60',
    red: 'text-red-300 bg-red-500/20 border-red-500/60',
    purple: 'text-purple-300 bg-purple-500/20 border-purple-500/60',
    orange: 'text-orange-300 bg-orange-500/20 border-orange-500/60',
    cyan: 'text-cyan-300 bg-cyan-500/20 border-cyan-500/60'
  };

  const variantStyles = {
    default: `px-3 py-1 rounded-full text-xs font-medium border ${colorStyles[color]}`,
    outline: `px-3 py-1 rounded-full text-xs font-medium border-2 ${colorStyles[color]}`,
    solid: `px-3 py-1 rounded-full text-xs font-medium ${colorStyles[color]} border-0`
  };

  return (
    <span className={cn(variantStyles[variant], className)}>
      {children}
    </span>
  );
};

