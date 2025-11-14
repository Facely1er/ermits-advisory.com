import React, { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'solid' | 'outline';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  fullHeight?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hover = true,
  fullHeight = false,
  className,
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-white dark:bg-dark-card-bg shadow-md hover:shadow-lg transition-shadow duration-300',
    glass: 'glass-card backdrop-blur-sm bg-white/80 dark:bg-dark-card-bg/80 border border-gray-200/50 dark:border-gray-700/50',
    solid: 'bg-navy text-white shadow-xl',
    outline: 'bg-transparent border-2 border-navy/20 dark:border-silver/30 hover:border-navy/40 dark:hover:border-silver/50 transition-colors duration-300',
  };
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  const cardClasses = cn(
    'rounded-lg transition-all duration-300',
    variants[variant],
    paddings[padding],
    hover ? 'hover:shadow-xl hover:-translate-y-1' : '',
    fullHeight ? 'h-full' : '',
    className
  );

  return (
    <motion.div 
      className={cardClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};