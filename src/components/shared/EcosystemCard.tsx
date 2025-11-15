import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
import { cn } from '../../utils/cn';

interface EcosystemCardProps {
  name: string;
  tag: string;
  description: string;
  steelFeeds: string;
  logo?: string;
  className?: string;
}

export const EcosystemCard: React.FC<EcosystemCardProps> = ({
  name,
  tag,
  description,
  steelFeeds,
  logo,
  className
}) => {
  return (
    <Card
      variant="glass"
      className={cn(
        'luxury-card luxury-hover h-full p-5 bg-gradient-to-br from-cyan-500/15 via-white/95 to-white/95 dark:from-cyan-500/15 dark:via-dark-luxury-surface/95 dark:to-dark-luxury-surface/95 border-luxury-gold/25 dark:border-luxury-gold/35 backdrop-blur-xl',
        className
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        {logo && (
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt={`${name} Logo`} 
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <div className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-white">
              {name}
            </div>
            <Badge variant="outline" color="blue" className="text-xs flex-shrink-0 ml-2">
              {tag}
            </Badge>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 dark:text-slate-300 mb-3 leading-relaxed">
        {description}
      </p>
      <div className="text-xs text-gray-600 dark:text-slate-400">
        <strong className="text-gray-900 dark:text-slate-300">STEEL feeds:</strong> {steelFeeds}
      </div>
    </Card>
  );
};

