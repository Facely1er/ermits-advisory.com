import React from 'react';

interface SteelArchitectureDiagramProps {
  className?: string;
}

export const SteelArchitectureDiagram: React.FC<SteelArchitectureDiagramProps> = ({ className = '' }) => {
  return (
    <div className={`steel-architecture-diagram ${className}`}>
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto max-w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background */}
        <rect width="800" height="600" fill="transparent" />
        
        {/* Title */}
        <text
          x="400"
          y="30"
          textAnchor="middle"
          className="text-lg font-bold fill-navy dark:fill-silver"
          fontSize="20"
          fontWeight="bold"
        >
          STEEL™ Architecture - Three Evaluation Sublayers
        </text>

        {/* Main STEEL Layer Container */}
        <rect
          x="50"
          y="60"
          width="700"
          height="480"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="stroke-navy dark:stroke-silver"
          strokeDasharray="5,5"
        />
        <text
          x="400"
          y="85"
          textAnchor="middle"
          className="fill-navy dark:fill-silver"
          fontSize="16"
          fontWeight="bold"
        >
          STEEL™ - Strategic Threat & Enterprise Evaluation Layer
        </text>

        {/* Strategic Evaluation Layer */}
        <g id="strategic-layer">
          <rect
            x="80"
            y="120"
            width="200"
            height="140"
            rx="8"
            fill="#1e3a8a"
            fillOpacity="0.1"
            stroke="#1e3a8a"
            strokeWidth="2"
            className="dark:fill-navy/30 dark:stroke-silver"
          />
          <text
            x="180"
            y="145"
            textAnchor="middle"
            className="fill-navy dark:fill-silver"
            fontSize="14"
            fontWeight="bold"
          >
            Strategic Evaluation Layer
          </text>
          <text
            x="180"
            y="165"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Business alignment
          </text>
          <text
            x="180"
            y="180"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Governance maturity
          </text>
          <text
            x="180"
            y="195"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Risk appetite
          </text>
          <text
            x="180"
            y="210"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Regulatory context
          </text>
          <text
            x="180"
            y="225"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Board priorities
          </text>
          <text
            x="180"
            y="245"
            textAnchor="middle"
            className="fill-navy dark:fill-silver"
            fontSize="12"
            fontWeight="bold"
          >
            S-Score
          </text>
        </g>

        {/* Threat Evaluation Layer */}
        <g id="threat-layer">
          <rect
            x="300"
            y="120"
            width="200"
            height="140"
            rx="8"
            fill="#dc2626"
            fillOpacity="0.1"
            stroke="#dc2626"
            strokeWidth="2"
            className="dark:fill-red-900/30 dark:stroke-red-400"
          />
          <text
            x="400"
            y="145"
            textAnchor="middle"
            className="fill-red-600 dark:fill-red-400"
            fontSize="14"
            fontWeight="bold"
          >
            Threat Evaluation Layer
          </text>
          <text
            x="400"
            y="165"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Sector threats
          </text>
          <text
            x="400"
            y="180"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Ransomware exposure
          </text>
          <text
            x="400"
            y="195"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Attack surface
          </text>
          <text
            x="400"
            y="210"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Incident readiness
          </text>
          <text
            x="400"
            y="225"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Vulnerability posture
          </text>
          <text
            x="400"
            y="245"
            textAnchor="middle"
            className="fill-red-600 dark:fill-red-400"
            fontSize="12"
            fontWeight="bold"
          >
            T-Score
          </text>
        </g>

        {/* Enterprise Evaluation Layer */}
        <g id="enterprise-layer">
          <rect
            x="520"
            y="120"
            width="200"
            height="140"
            rx="8"
            fill="#2563eb"
            fillOpacity="0.1"
            stroke="#2563eb"
            strokeWidth="2"
            className="dark:fill-blue-900/30 dark:stroke-blue-400"
          />
          <text
            x="620"
            y="145"
            textAnchor="middle"
            className="fill-blue-600 dark:fill-blue-400"
            fontSize="14"
            fontWeight="bold"
          >
            Enterprise Evaluation Layer
          </text>
          <text
            x="620"
            y="165"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Controls maturity
          </text>
          <text
            x="620"
            y="180"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Architecture coherence
          </text>
          <text
            x="620"
            y="195"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Vendor dependencies
          </text>
          <text
            x="620"
            y="210"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Data flow clarity
          </text>
          <text
            x="620"
            y="225"
            textAnchor="middle"
            className="fill-gray-700 dark:fill-gray-300"
            fontSize="11"
          >
            Resilience capability
          </text>
          <text
            x="620"
            y="245"
            textAnchor="middle"
            className="fill-blue-600 dark:fill-blue-400"
            fontSize="12"
            fontWeight="bold"
          >
            E-Score
          </text>
        </g>

        {/* Arrows pointing to STEEL Index */}
        <path
          d="M 180 280 L 180 320"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          className="stroke-navy dark:stroke-silver"
        />
        <path
          d="M 400 280 L 400 320"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          className="stroke-red-600 dark:stroke-red-400"
        />
        <path
          d="M 620 280 L 620 320"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          className="stroke-blue-600 dark:stroke-blue-400"
        />

        {/* STEEL Index Box */}
        <rect
          x="250"
          y="320"
          width="300"
          height="80"
          rx="8"
          fill="url(#steelGradient)"
          stroke="currentColor"
          strokeWidth="3"
          className="stroke-navy dark:stroke-gold"
        />
        <text
          x="400"
          y="350"
          textAnchor="middle"
          className="fill-white dark:fill-navy"
          fontSize="18"
          fontWeight="bold"
        >
          STEEL™ Index
        </text>
        <text
          x="400"
          y="375"
          textAnchor="middle"
          className="fill-white/90 dark:fill-navy"
          fontSize="12"
        >
          Weighted Aggregation
        </text>
        <text
          x="400"
          y="390"
          textAnchor="middle"
          className="fill-white/90 dark:fill-navy"
          fontSize="12"
        >
          (40% S + 30% T + 30% E)
        </text>

        {/* PESTEL Foundation */}
        <rect
          x="80"
          y="440"
          width="640"
          height="80"
          rx="8"
          fill="#10b981"
          fillOpacity="0.1"
          stroke="#10b981"
          strokeWidth="2"
          className="dark:fill-green-900/30 dark:stroke-green-400"
        />
        <text
          x="400"
          y="465"
          textAnchor="middle"
          className="fill-green-700 dark:fill-green-400"
          fontSize="14"
          fontWeight="bold"
        >
          PESTEL Foundation
        </text>
        <text
          x="150"
          y="490"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          Political
        </text>
        <text
          x="250"
          y="490"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          Economic
        </text>
        <text
          x="350"
          y="490"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          Social
        </text>
        <text
          x="450"
          y="490"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          Technological
        </text>
        <text
          x="550"
          y="490"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          Environmental
        </text>
        <text
          x="650"
          y="490"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          Legal
        </text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3, 0 6"
              fill="currentColor"
              className="fill-navy dark:fill-silver"
            />
          </marker>
          <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

