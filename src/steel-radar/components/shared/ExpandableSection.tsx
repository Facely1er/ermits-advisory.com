/**
 * Expandable Section Component
 * 
 * Collapsible section for showing/hiding detailed information
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'card' | 'bordered';
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  children,
  defaultExpanded = false,
  icon,
  className,
  variant = 'default',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const variants = {
    default: '',
    card: 'bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700',
    bordered: 'border border-gray-200 dark:border-gray-700 rounded-lg p-4',
  };

  return (
    <div className={cn(variants[variant], className)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-600 dark:text-gray-400">{icon}</span>}
          <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-gray-600 dark:text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

