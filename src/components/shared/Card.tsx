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
    default: 'bg-white dark:bg-dark-card-bg shadow-md',
    glass: 'glass-card',
    solid: 'bg-navy text-white',
    outline: 'bg-transparent border border-navy/20 dark:border-silver/30',
  };
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };

  const cardClasses = cn(
    'rounded transition-all duration-300',
    variants[variant],
    paddings[padding],
    hover ? 'hover:shadow-lg' : '',
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