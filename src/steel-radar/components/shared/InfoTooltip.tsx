/**
 * Info Tooltip Component
 * 
 * Interactive tooltip with detailed information
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface InfoTooltipProps {
  content: string | React.ReactNode;
  title?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  content,
  title,
  position = 'top',
  className,
  size = 'sm',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const sizes = {
    sm: 'text-xs max-w-xs',
    md: 'text-sm max-w-sm',
    lg: 'text-base max-w-md',
  };

  return (
    <div className={cn('relative inline-block', className)}>
      <button
        type="button"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center text-gray-400 hover:text-navy dark:hover:text-silver transition-colors"
        aria-label="Show information"
      >
        <Info size={16} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: position === 'top' ? 5 : position === 'bottom' ? -5 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              'absolute z-50 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700',
              positions[position],
              sizes[size]
            )}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {title && (
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Close tooltip"
                  title="Close tooltip"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            <div className="text-gray-700 dark:text-gray-300">
              {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
            {/* Arrow */}
            <div
              className={cn(
                'absolute w-2 h-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rotate-45',
                position === 'top' && 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-0 border-l-0',
                position === 'bottom' && 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2 border-b-0 border-r-0',
                position === 'left' && 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2 border-l-0 border-b-0',
                position === 'right' && 'right-full top-1/2 -translate-y-1/2 translate-x-1/2 border-r-0 border-t-0'
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

