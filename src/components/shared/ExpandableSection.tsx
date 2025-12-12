import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExpandableSectionProps {
  title: string;
  preview: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  preview,
  children,
  defaultExpanded = false,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`border-b border-gray-200 dark:border-gray-700 py-4 ${className}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left group"
        {...{ 'aria-expanded': isExpanded }}
      >
        <div className="flex-1 pr-4">
          <h3 className="font-bold text-lg group-hover:text-navy dark:group-hover:text-silver transition-colors mb-1">
            {title}
          </h3>
          {!isExpanded && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {preview}
            </p>
          )}
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="text-gray-400 group-hover:text-navy dark:group-hover:text-silver transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

