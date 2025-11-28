import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { FileText, Clock } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const placeholderArticles = [
    {
      title: 'From Controls to Asymmetries: Why We Built STEEL',
      description: 'An exploration of why traditional control-based audits miss structural risk, and how STEEL addresses this gap.',
      status: 'Coming Q1 2026'
    },
    {
      title: 'Why Most Cyber Risk Dashboards Mislead Boards',
      description: 'How risk dashboards that count controls and tools create false confidence, and what boards actually need to see.',
      status: 'Coming Q1 2026'
    },
    {
      title: 'Vendor and SBOM Risk as Board Topics, Not IT Noise',
      description: 'Why vendor risk and software bill of materials belong in board discussions, not buried in IT reports.',
      status: 'Coming Q1 2026'
    }
  ];

  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            Strategic perspectives on cyber and privacy governance, risk management, and board-level decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {placeholderArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-full bg-navy/10 dark:bg-silver/10 mr-4">
                    <FileText size={24} className="text-navy dark:text-silver" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 mb-2">
                      <Clock size={12} className="mr-1" />
                      {article.status}
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 dark:text-white">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {article.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-br from-navy/5 to-silver-light dark:from-dark-surface dark:to-dark-bg">
            <p className="text-gray-600 dark:text-gray-300">
              More insights and resources coming soon. Check back in Q1 2026 for in-depth articles on governance, risk management, and strategic cybersecurity decision-making.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

