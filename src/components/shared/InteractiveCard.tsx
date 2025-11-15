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
          className="absolute inset-0 bg-gradient-to-r from-navy/20 via-luxury-gold/10 to-silver/20 blur-xl -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
      
      {hover3D && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 via-luxury-gold/5 to-transparent pointer-events-none"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,${isHovered ? 0.15 : 0}) 0%, rgba(212,175,55,${isHovered ? 0.08 : 0}) 50%, transparent 100%)`,
            }}
          />
          <motion.div
            className="absolute inset-0 border border-luxury-gold/20 pointer-events-none rounded-lg"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </>
      )}
    </motion.div>
  );
};