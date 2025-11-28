import React from 'react';
import { Card } from '../shared/Card';
import { Button } from '../shared/Button';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import { SteelRecommendation } from '../../types/steelAssessment';
import { useNavigate } from 'react-router-dom';

interface ErmitsIntegrationPathwayProps {
  recommendations: SteelRecommendation[];
  className?: string;
}

export const ErmitsIntegrationPathway: React.FC<ErmitsIntegrationPathwayProps> = ({
  recommendations,
  className,
}) => {
  const navigate = useNavigate();

  // Map platform names to their external URLs
  const platformUrls: Record<string, string> = {
    'CyberCaution': 'https://cybercaution.com',
    'CyberCorrect': 'https://cybercorrect.com',
    'VendorSoluce': 'https://vendorsoluce.com',
    'TechnoSoluce': 'https://technosoluce.com',
    'CyberCertitude': 'https://cybercertitude.com',
    'SocialCaution': 'https://socialcaution.com',
  };

  const ermitsSuggestions = [];

  if (recommendations.some((r) => r.factor === 'technological' && r.score < 60)) {
    ermitsSuggestions.push({
      platform: 'CyberCaution',
      description: 'Ransomware readiness and threat forecasts based on your technological risk profile',
    });
  }

  if (recommendations.some((r) => (r.factor === 'political' || r.factor === 'legal') && r.score < 60)) {
    ermitsSuggestions.push({
      platform: 'CyberCorrect',
      description: 'Privacy exposure and regulatory gaps identified through your STEEL assessment',
    });
  }

  if (recommendations.some((r) => r.factor === 'environmental' && r.score < 60)) {
    ermitsSuggestions.push({
      platform: 'CyberSoluce',
      description: 'NIST CSF–aligned maturity mapping derived from your strategic risk scores',
    });
  }

  if (recommendations.some((r) => r.factor === 'legal' && r.score < 60)) {
    ermitsSuggestions.push({
      platform: 'VendorSoluce',
      description: 'Vendor exposure scoring & TPRM informed by your legal and operational risk factors',
    });
  }

  if (recommendations.some((r) => r.factor === 'technological' && r.score < 60)) {
    ermitsSuggestions.push({
      platform: 'TechnoSoluce',
      description: 'SBOM risk and component vulnerabilities aligned to your technological maturity',
    });
  }

  if (recommendations.some((r) => r.factor === 'environmental' && r.score < 60)) {
    ermitsSuggestions.push({
      platform: 'ImpactSoluce',
      description: 'Sustainability, ESG, and supply chain climate risks from your environmental assessment',
    });
  }

  if (recommendations.some((r) => r.factor === 'social' && r.score < 60)) {
    ermitsSuggestions.push({
      platform: 'EduSoluce',
      description: 'Training aligned to your risk profile and social factor maturity',
    });
  }

  if (recommendations.some((r) => (r.factor === 'social' || r.factor === 'legal') && r.score < 60)) {
    ermitsSuggestions.push({
      platform: 'SocialCaution',
      description: 'Public-facing privacy understanding based on your social and legal risk exposure',
    });
  }

  // Remove duplicates
  const uniqueSuggestions = Array.from(
    new Map(ermitsSuggestions.map((item) => [item.platform, item])).values()
  );

  return (
    <Card variant="glass" padding="lg" className={className}>
      <div className="flex items-center gap-2 mb-4">
        <LinkIcon size={24} className="text-navy dark:text-silver" />
        <h3 className="text-2xl font-bold dark:text-white">ERMITS Ecosystem Integration Pathway</h3>
      </div>

      <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
        STEEL feeds every ERMITS product with consistent intelligence. Based on your assessment
        results, your STEEL scores will inform these platform solutions:
      </p>

      <ul className="space-y-3 mb-6">
        {uniqueSuggestions.map((suggestion, index) => {
          const platformUrl = platformUrls[suggestion.platform];
          return (
            <li
              key={index}
              className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
            >
              {platformUrl ? (
                <a
                  href={platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 dark:text-blue-300 min-w-[140px] hover:text-blue-900 dark:hover:text-blue-200 hover:underline transition-colors cursor-pointer"
                >
                  {suggestion.platform}:
                </a>
              ) : (
                <span className="font-semibold text-blue-700 dark:text-blue-300 min-w-[140px]">
                  {suggestion.platform}:
                </span>
              )}
              <span className="text-gray-700 dark:text-gray-200 text-sm flex-1">
                {suggestion.description}
              </span>
            </li>
          );
        })}
        <li className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <span className="font-semibold text-blue-700 dark:text-blue-300 min-w-[140px]">
            vCISO Services:
          </span>
          <span className="text-gray-700 dark:text-gray-200 text-sm flex-1">
            Strategic advisory to guide implementation and program development across all ERMITS
            platforms
          </span>
        </li>
      </ul>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-700 dark:text-gray-200 italic">
          <strong>Cross-Product Intelligence:</strong> ERMITS Advisory ensures that every
          tool—CyberCaution, CyberCorrect, VendorSoluce, CyberSoluce, TechnoSoluce, ImpactSoluce,
          EduSoluce, and SocialCaution—uses the same STEEL intelligence base, eliminating
          fragmentation and inconsistent scoring across departments.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="primary"
          onClick={() => navigate('/ecosystem')}
          icon={<ArrowRight size={18} />}
          iconPosition="right"
        >
          Explore ERMITS Ecosystem
        </Button>
        <Button variant="outline" onClick={() => navigate('/contact')}>
          Schedule Consultation
        </Button>
      </div>
    </Card>
  );
};

