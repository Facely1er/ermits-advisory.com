import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Calendar, ChevronUp, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actionItems = [
    {
      icon: <Calendar size={20} />,
      label: 'Schedule Consultation',
      action: () => navigate('/contact'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <Mail size={20} />,
      label: 'Contact Us',
      action: () => navigate('/contact'),
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Action items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-3"
          >
            {actionItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { delay: index * 0.1 }
                }}
                exit={{ 
                  opacity: 0, 
                  x: 50, 
                  scale: 0,
                  transition: { delay: (actionItems.length - index - 1) * 0.1 }
                }}
                onClick={item.action}
                className={`w-12 h-12 ${item.color} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group relative`}
                aria-label={item.label}
              >
                {item.icon}
                
                {/* Tooltip */}
                <div className="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {item.label}
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-navy hover:bg-navy-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open action menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <MessageCircle size={24} />
        </motion.div>
      </motion.button>
    </div>
  );
};