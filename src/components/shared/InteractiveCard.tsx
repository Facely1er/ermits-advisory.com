import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  hover3D?: boolean;
  glowEffect?: boolean;
  scaleOnHover?: boolean;
  onClick?: () => void;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  hover3D = false,
  glowEffect = false,
  scaleOnHover = true,
  onClick
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-lg transition-all duration-300',
        glowEffect && 'shadow-lg',
        onClick && 'cursor-pointer',
        className
      )}
      style={{
        transform: hover3D
          ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
          : undefined,
      }}
      whileHover={scaleOnHover ? { scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {glowEffect && isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-navy/20 to-silver/20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>

      {hover3D && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,${isHovered ? 0.1 : 0}) 0%, transparent 50%)`,
          }}
        />
      )}
    </motion.div>
  );
};
