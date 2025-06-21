import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-navy/20 z-50"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-navy to-silver"
        style={{ scaleX: scrollProgress }}
        transformOrigin="0%"
      />
    </motion.div>
  );
};