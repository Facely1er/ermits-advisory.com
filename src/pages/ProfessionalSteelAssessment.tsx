import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Shield, Zap, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { isErmitsIntegrationAvailable, initializeErmitsPlatforms } from '../services/ermitsIntegrationService';
import { getSteelAssessmentFromStorage } from '../services/steelAssessmentService';

export const ProfessionalSteelAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [isProfessional, setIsProfessional] = useState(false);
  const [hasAssessment, setHasAssessment] = useState(false);

  useEffect(() => {
    // Check if user has professional/enterprise access
    const professional = isErmitsIntegrationAvailable();
    setIsProfessional(professional);

    // Check if assessment exists
    const assessment = getSteelAssessmentFromStorage();
    setHasAssessment(!!assessment);

    // If professional and has assessment, initialize platforms
    if (professional && assessment) {
      initializeErmitsPlatforms(assessment);
    }
  }, []);

  if (!isProfessional) {
    return (
      <div className="min-h-screen bg-silver-light dark:bg-dark-bg">
        <div className="container mx-auto px-4 py-16">
          <Card variant="glass" padding="lg" className="max-w-2xl mx-auto text-center">
            <Lock size={64} className="mx-auto mb-6 text-gray-400" />
            <h2 className="text-3xl font-bold dark:text-white mb-4">
              Professional Assessment Access Required
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The Professional STEEL Assessment includes ERMITS platform integration, advanced
              analytics, and enterprise features. Upgrade to access these capabilities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="primary" onClick={() => navigate('/steel/premium')}>
                View Professional Pricing
              </Button>
              <Button variant="outline" onClick={() => navigate('/steel/enterprise')}>
                Enterprise Solutions
              </Button>
              <Button variant="ghost" onClick={() => navigate('/steel/index.html')}>
                Use Free Assessment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-silver-light dark:bg-dark-bg">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-6">
            <span className="text-gold font-semibold">Professional Access</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            STEEL™ Professional Assessment
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            Enhanced assessment with ERMITS platform integration, advanced analytics, and
            enterprise features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card variant="glass" padding="lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold dark:text-white">Enhanced Features</h3>
            </div>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li className="flex items-start gap-2">
                <Zap size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span>ERMITS platform auto-sync</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Advanced benchmarking & analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Multi-user collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span>API access for integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Priority support & consultation</span>
              </li>
            </ul>
          </Card>

          <Card variant="glass" padding="lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Shield size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold dark:text-white">Get Started</h3>
            </div>
            <div className="space-y-4">
              {hasAssessment ? (
                <>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">
                    You have an existing assessment. View it in the dashboard or start a new one.
                  </p>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => navigate('/dashboard')}
                  >
                    View Dashboard
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open('/steel/index.html', '_blank')}
                  >
                    Start New Assessment
                  </Button>
                </>
              ) : (
                <>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">
                    Complete the STEEL assessment to unlock professional features and ERMITS
                    integration.
                  </p>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => window.open('/steel/index.html', '_blank')}
                  >
                    Start Professional Assessment
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </>
              )}
            </div>
          </Card>
        </div>

        <Card variant="glass" padding="lg" className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold dark:text-white mb-4 text-center">
            ERMITS Platform Integration
          </h3>
          <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">
            Your STEEL assessment automatically syncs with ERMITS platforms for seamless
            integration:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'CyberCaution',
              'CyberCorrect',
              'VendorSoluce',
              'CyberSoluce',
              'TechnoSoluce',
              'ImpactSoluce',
              'EduSoluce',
              'SocialCaution',
            ].map((platform) => (
              <div
                key={platform}
                className="p-4 bg-navy/5 dark:bg-silver/10 rounded-lg text-center"
              >
                <div className="font-semibold text-navy dark:text-white">{platform}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={() => navigate('/ecosystem')}>
              Learn More About ERMITS Ecosystem
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

