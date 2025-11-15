import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
import { cn } from '../../utils/cn';

interface EcosystemCardProps {
  name: string;
  tag: string;
  description: string;
  steelFeeds: string;
  className?: string;
}

export const EcosystemCard: React.FC<EcosystemCardProps> = ({
  name,
  tag,
  description,
  steelFeeds,
  className
}) => {
  return (
    <Card
      variant="glass"
      className={cn(
        'h-full p-4 bg-gradient-to-br from-cyan-500/12 via-slate-900/98 to-slate-900/98 border-slate-700/55',
        className
      )}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="font-semibold text-sm uppercase tracking-wider text-white">
          {name}
        </div>
        <Badge variant="outline" color="blue" className="text-xs">
          {tag}
        </Badge>
      </div>
      <p className="text-sm text-slate-300 mb-3 leading-relaxed">
        {description}
      </p>
      <div className="text-xs text-slate-400">
        <strong className="text-slate-300">STEEL feeds:</strong> {steelFeeds}
      </div>
    </Card>
  );
};

