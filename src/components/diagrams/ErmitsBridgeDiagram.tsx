import React from 'react';

interface ErmitsBridgeDiagramProps {
  className?: string;
}

export const ErmitsBridgeDiagram: React.FC<ErmitsBridgeDiagramProps> = ({ className = '' }) => {
  return (
    <div className={`ermits-bridge-diagram ${className}`}>
      <svg
        viewBox="0 0 900 500"
        className="w-full h-auto max-w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Title */}
        <text
          x="450"
          y="30"
          textAnchor="middle"
          className="text-lg font-bold fill-navy dark:fill-silver"
          fontSize="20"
          fontWeight="bold"
        >
          The ERMITS Bridge - From Strategy to Execution
        </text>

        {/* Business & Leadership Layer */}
        <rect
          x="50"
          y="60"
          width="800"
          height="70"
          rx="8"
          fill="#9333ea"
          fillOpacity="0.1"
          stroke="#9333ea"
          strokeWidth="2"
          className="dark:fill-purple-900/30 dark:stroke-purple-400"
        />
        <text
          x="450"
          y="90"
          textAnchor="middle"
          className="fill-purple-700 dark:fill-purple-400"
          fontSize="16"
          fontWeight="bold"
        >
          Business & Leadership
        </text>
        <text
          x="450"
          y="110"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="12"
        >
          Strategic priorities, risk appetite, board expectations
        </text>

        {/* Arrow down */}
        <path
          d="M 450 140 L 450 170"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-down)"
          className="stroke-navy dark:stroke-silver"
        />

        {/* ERMITS Advisory Layer */}
        <rect
          x="50"
          y="180"
          width="800"
          height="70"
          rx="8"
          fill="#1e3a8a"
          fillOpacity="0.2"
          stroke="#1e3a8a"
          strokeWidth="3"
          className="dark:fill-navy/40 dark:stroke-silver"
        />
        <text
          x="450"
          y="210"
          textAnchor="middle"
          className="fill-navy dark:fill-silver"
          fontSize="16"
          fontWeight="bold"
        >
          ERMITS Advisory
        </text>
        <text
          x="450"
          y="230"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="12"
        >
          Interprets and governs via STEEL™
        </text>

        {/* Arrow down */}
        <path
          d="M 450 260 L 450 290"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-down)"
          className="stroke-cyan-500 dark:stroke-cyan-400"
        />

        {/* STEEL Evaluation Layer */}
        <rect
          x="50"
          y="300"
          width="800"
          height="70"
          rx="8"
          fill="#06b6d4"
          fillOpacity="0.15"
          stroke="#06b6d4"
          strokeWidth="2"
          className="dark:fill-cyan-900/30 dark:stroke-cyan-400"
        />
        <text
          x="450"
          y="330"
          textAnchor="middle"
          className="fill-cyan-700 dark:fill-cyan-400"
          fontSize="16"
          fontWeight="bold"
        >
          STEEL™ Evaluation Layer
        </text>
        <text
          x="450"
          y="350"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="12"
        >
          Defines priorities and generates STEEL™ Index
        </text>

        {/* Arrow down */}
        <path
          d="M 450 380 L 450 410"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead-down)"
          className="stroke-green-600 dark:stroke-green-400"
        />

        {/* ERMITS Ecosystem Layer */}
        <rect
          x="50"
          y="420"
          width="800"
          height="70"
          rx="8"
          fill="#10b981"
          fillOpacity="0.15"
          stroke="#10b981"
          strokeWidth="2"
          className="dark:fill-green-900/30 dark:stroke-green-400"
        />
        <text
          x="450"
          y="450"
          textAnchor="middle"
          className="fill-green-700 dark:fill-green-400"
          fontSize="16"
          fontWeight="bold"
        >
          ERMITS Ecosystem Capabilities
        </text>
        <text
          x="200"
          y="470"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          CyberCaution™
        </text>
        <text
          x="300"
          y="470"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          CyberCorrect™
        </text>
        <text
          x="400"
          y="470"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          CyberSoluce™
        </text>
        <text
          x="500"
          y="470"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          VendorSoluce™
        </text>
        <text
          x="600"
          y="470"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          SocialCaution™
        </text>
        <text
          x="700"
          y="470"
          textAnchor="middle"
          className="fill-gray-700 dark:fill-gray-300"
          fontSize="11"
        >
          TechnoSoluce™
        </text>

        {/* Feedback Loop (Telemetry) */}
        <path
          d="M 870 455 Q 920 400 920 300 Q 920 200 870 145"
          stroke="#f59e0b"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          markerEnd="url(#arrowhead-left)"
          className="dark:stroke-amber-400"
        />
        <text
          x="920"
          y="280"
          textAnchor="middle"
          className="fill-amber-700 dark:fill-amber-400"
          fontSize="11"
          fontWeight="bold"
        >
          Telemetry & Evidence
        </text>
        <text
          x="920"
          y="295"
          textAnchor="middle"
          className="fill-amber-700 dark:fill-amber-400"
          fontSize="10"
        >
          (Feeds back)
        </text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowhead-down"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="7"
            orient="auto"
          >
            <polygon
              points="0 0, 10 7, 0 10"
              fill="currentColor"
            />
          </marker>
          <marker
            id="arrowhead-left"
            markerWidth="10"
            markerHeight="10"
            refX="2"
            refY="5"
            orient="auto"
          >
            <polygon
              points="10 0, 10 10, 0 5"
              fill="#f59e0b"
              className="dark:fill-amber-400"
            />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

