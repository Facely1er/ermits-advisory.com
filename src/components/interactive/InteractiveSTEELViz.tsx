import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Users, Server, Leaf, Scale, X } from 'lucide-react';
import { InteractiveCard } from '../shared/InteractiveCard';

interface STEELDimension {
  id: string;
  title: string;
  description: string;
  value: number;
  color: string;
  icon: React.ReactNode;
  details: string[];
}

interface InteractiveSTEELVizProps {
  onDimensionSelect?: (dimension: STEELDimension | null) => void;
}

export const InteractiveSTEELViz: React.FC<InteractiveSTEELVizProps> = ({
  onDimensionSelect
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [selectedDimension, setSelectedDimension] = useState<STEELDimension | null>(null);
  const [hoveredDimension, setHoveredDimension] = useState<string | null>(null);

  // Measure container width and update on window resize
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  // Calculate responsive values based on container width
  const responsiveRadius = Math.min(containerWidth * 0.25, 160); // Scale down on smaller screens, max 160px
  const dimensionHexagonSize = Math.max(Math.min(containerWidth * 0.08, 96), 60); // Between 60px and 96px
  const centerHexagonSize = Math.max(Math.min(containerWidth * 0.12, 128), 80); // Between 80px and 128px
  const iconSize = Math.max(Math.min(dimensionHexagonSize * 0.25, 20), 14); // Scale icons proportionally

  const dimensions: STEELDimension[] = [
    {
      id: 'political',
      title: 'Political',
      description: 'Regulatory landscape and governance factors',
      value: 65,
      color: '#4c72b0',
      icon: <Shield size={iconSize} />,
      details: [
        'Regulatory compliance requirements',
        'Government policy changes',
        'Political stability factors',
        'International trade regulations'
      ]
    },
    {
      id: 'economic',
      title: 'Economic',
      description: 'Financial and market conditions',
      value: 78,
      color: '#dd8452',
      icon: <TrendingUp size={iconSize} />,
      details: [
        'Market volatility assessment',
        'Economic indicators impact',
        'Investment climate analysis',
        'Currency fluctuation risks'
      ]
    },
    {
      id: 'social',
      title: 'Social',
      description: 'Societal and cultural influences',
      value: 82,
      color: '#55a868',
      icon: <Users size={iconSize} />,
      details: [
        'Social media threat landscape',
        'Cultural sensitivity factors',
        'Public opinion monitoring',
        'Community engagement strategies'
      ]
    },
    {
      id: 'technology',
      title: 'Technology',
      description: 'Technical infrastructure and innovation',
      value: 45,
      color: '#c44e52',
      icon: <Server size={iconSize} />,
      details: [
        'Emerging technology risks',
        'Infrastructure vulnerabilities',
        'Digital transformation impact',
        'Cybersecurity threat vectors'
      ]
    },
    {
      id: 'environmental',
      title: 'Environmental',
      description: 'Physical and environmental factors',
      value: 72,
      color: '#8172b3',
      icon: <Leaf size={iconSize} />,
      details: [
        'Climate change impact',
        'Natural disaster preparedness',
        'Environmental compliance',
        'Sustainability requirements'
      ]
    },
    {
      id: 'legal',
      title: 'Legal',
      description: 'Legal framework and compliance',
      value: 58,
      color: '#937860',
      icon: <Scale size={iconSize} />,
      details: [
        'Legal liability assessment',
        'Contractual obligations',
        'Intellectual property risks',
        'Litigation potential'
      ]
    }
  ];

  const handleDimensionClick = (dimension: STEELDimension) => {
    setSelectedDimension(dimension);
    onDimensionSelect?.(dimension);
  };

  const handleClose = () => {
    setSelectedDimension(null);
    onDimensionSelect?.(null);
  };

  return (
    <div className="relative">
      {/* Interactive Visualization */}
      <div
        ref={containerRef}
        className="relative w-full max-w-2xl mx-auto"
        style={{ height: `${Math.max(responsiveRadius * 2.5, 400)}px` }}
      >
        {/* Center STEEL Logo */}
        <motion.div
          className="absolute hexagon bg-navy text-white flex items-center justify-center z-10 cursor-pointer"
          style={{
            left: `calc(50% - ${centerHexagonSize / 2}px)`,
            top: `calc(50% - ${centerHexagonSize * 0.875 / 2}px)`, // Adjust for hexagon aspect ratio
            width: `${centerHexagonSize}px`,
            height: `${centerHexagonSize * 0.875}px`, // Hexagon height ratio
          }}
          whileHover={{ scale: 1.1 }}
          animate={{
            boxShadow: selectedDimension
              ? '0 0 30px rgba(0, 75, 135, 0.5)'
              : '0 0 15px rgba(0, 75, 135, 0.3)'
          }}
        >
          <span
            className="font-bold"
            style={{ fontSize: `${Math.max(centerHexagonSize * 0.15, 12)}px` }}
          >
            STEEL™
          </span>
        </motion.div>

        {/* Dimension Hexagons */}
        {dimensions.map((dimension, index) => {
          const angle = (index * 60) * (Math.PI / 180);
          const x = responsiveRadius * Math.cos(angle);
          const y = responsiveRadius * Math.sin(angle);

          return (
            <motion.button
              key={dimension.id}
              className="absolute hexagon flex flex-col items-center justify-center text-white font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
              style={{
                left: `calc(50% + ${x}px - ${dimensionHexagonSize / 2}px)`,
                top: `calc(50% + ${y}px - ${dimensionHexagonSize * 0.875 / 2}px)`,
                width: `${dimensionHexagonSize}px`,
                height: `${dimensionHexagonSize * 0.875}px`,
                backgroundColor: dimension.color,
                fontSize: `${Math.max(dimensionHexagonSize * 0.1, 10)}px`
              }}
              onClick={() => handleDimensionClick(dimension)}
              onMouseEnter={() => setHoveredDimension(dimension.id)}
              onMouseLeave={() => setHoveredDimension(null)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: hoveredDimension === dimension.id
                  ? `0 0 25px ${dimension.color}80`
                  : selectedDimension?.id === dimension.id
                    ? `0 0 20px ${dimension.color}60`
                    : '0 5px 15px rgba(0,0,0,0.2)',
                z: hoveredDimension === dimension.id ? 20 : 10
              }}
              type="button"
            >
              <div className="flex flex-col items-center justify-center pointer-events-none">
                {dimension.icon}
                <span className="font-medium mt-1 text-center leading-tight">
                  {dimension.title}
                </span>
                {/* Value indicator */}
                <div
                  className="bg-white/30 rounded-full mt-1"
                  style={{
                    width: `${Math.max(dimensionHexagonSize * 0.4, 24)}px`,
                    height: `${Math.max(dimensionHexagonSize * 0.08, 3)}px`
                  }}
                >
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${dimension.value}%` }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                  />
                </div>
              </div>
            </motion.button>
          );
        })}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {dimensions.map((dimension, index) => {
            const nextDimension = dimensions[(index + 1) % dimensions.length];
            const angle1 = (index * 60) * (Math.PI / 180);
            const angle2 = ((index + 1) * 60) * (Math.PI / 180);

            return (
              <motion.line
                key={`connection-${index}`}
                x1={`calc(50% + ${responsiveRadius * Math.cos(angle1)}px)`}
                y1={`calc(50% + ${responsiveRadius * Math.sin(angle1)}px)`}
                x2={`calc(50% + ${responsiveRadius * Math.cos(angle2)}px)`}
                y2={`calc(50% + ${responsiveRadius * Math.sin(angle2)}px)`}
                stroke="url(#steel-gradient)"
                strokeWidth="2"
                strokeOpacity="0.3"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: index * 0.2 }}
              />
            );
          })}
          <defs>
            <linearGradient id="steel-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#004B87" />
              <stop offset="100%" stopColor="#C9E6FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Detailed Information Panel */}
      <AnimatePresence>
        {selectedDimension && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8"
          >
            <InteractiveCard className="bg-white dark:bg-dark-surface shadow-xl">
              <div className="p-6 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Close details"
                >
                  <X size={16} className="dark:text-white" />
                </button>

                <div className="flex items-start">
                  <div
                    className="p-4 rounded-full mr-6 text-white"
                    style={{ backgroundColor: selectedDimension.color }}
                  >
                    {selectedDimension.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">
                      {selectedDimension.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-200 mb-4">
                      {selectedDimension.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium dark:text-gray-200">Risk Score</span>
                        <span className="text-lg font-bold dark:text-white">
                          {selectedDimension.value}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <motion.div
                          className="h-3 rounded-full"
                          style={{ backgroundColor: selectedDimension.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedDimension.value}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mb-3 dark:text-white">Key Considerations:</h4>
                    <ul className="space-y-2">
                      {selectedDimension.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (index * 0.1) }}
                          className="flex items-start"
                        >
                          <div
                            className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                            style={{ backgroundColor: selectedDimension.color }}
                          />
                          <span className="text-gray-600 dark:text-gray-200">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
