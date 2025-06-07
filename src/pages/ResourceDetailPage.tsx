import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowLeft, Download, Share2, BookOpen, Clock, Calendar,
  User, Tag, ExternalLink, ChevronRight, Mail
} from 'lucide-react';

// Sample resource data - in a real app, this would come from an API or database
const resourcesData = [
  {
    id: 'wp-001',
    title: 'The Executive\'s Guide to Modern Cyber Risk Management',
    description: 'A comprehensive guide for C-suite executives on implementing effective cyber risk management strategies using the STEEL methodology.',
    category: 'whitepapers',
    tags: ['steel', 'risk', 'leadership'],
    date: '2025-04-15',
    readTime: '25 min',
    downloadUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'ERMITS Advisory Research Team',
    content: {
      summary: 'In today\'s rapidly evolving threat landscape, executives need a comprehensive framework for understanding and managing cyber risk across all dimensions of their organization. This whitepaper introduces the STEEL™ methodology and provides practical guidance for C-suite leaders.',
      sections: [
        {
          title: 'Executive Summary',
          content: 'Cybersecurity is no longer just an IT concern—it\'s a business imperative that requires executive attention and strategic planning. Traditional risk assessment approaches often fall short in addressing the complex, interconnected nature of modern cyber threats.'
        },
        {
          title: 'The STEEL™ Framework',
          content: 'Our proprietary STEEL™ methodology examines cyber risk across six critical dimensions: Political, Economic, Social, Technology, Environmental, and Legal. This holistic approach ensures that organizations consider all factors that could impact their cybersecurity posture.'
        },
        {
          title: 'Implementation Strategies',
          content: 'This section provides step-by-step guidance for implementing the STEEL™ methodology within your organization, including how to establish governance structures, metrics, and reporting mechanisms that enable effective decision-making.'
        },
        {
          title: 'Case Studies',
          content: 'Real-world examples demonstrate how organizations across various industries have successfully implemented the STEEL™ framework to improve their cyber risk management capabilities and achieve measurable business outcomes.'
        },
        {
          title: 'Recommendations',
          content: 'Based on our research and practical experience, we provide specific recommendations for executives looking to enhance their organization\'s cyber risk management approach and build resilience against emerging threats.'
        }
      ],
      keyTakeaways: [
        'Cyber risk management requires a holistic approach that considers all dimensions of organizational exposure',
        'The STEEL™ methodology provides a comprehensive framework for assessing and managing cyber risk',
        'Executive leadership and governance are critical success factors for effective cyber risk management',
        'Regular assessment and continuous improvement are essential for maintaining cyber resilience',
        'Investment in cybersecurity should be aligned with business objectives and risk tolerance'
      ]
    }
  },
  {
    id: 'art-001',
    title: 'Five Critical Questions Every Board Should Ask About Cybersecurity',
    description: 'Learn the essential questions board members should be asking to fulfill their cyber governance responsibilities effectively.',
    category: 'articles',
    tags: ['leadership', 'compliance'],
    date: '2025-03-22',
    readTime: '12 min',
    imageUrl: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Sarah Johnson, Managing Director',
    content: {
      summary: 'Board members have a fiduciary responsibility to ensure their organization is adequately protected against cyber threats. This article outlines the key questions directors should be asking to fulfill their governance responsibilities.',
      sections: [
        {
          title: 'Question 1: What is our current cyber risk posture?',
          content: 'Understanding your organization\'s current cybersecurity posture is fundamental to effective governance. This involves knowing your key assets, threat landscape, and existing controls.'
        },
        {
          title: 'Question 2: How do we compare to industry peers?',
          content: 'Benchmarking against industry standards and peer organizations helps identify gaps and opportunities for improvement in your cybersecurity program.'
        },
        {
          title: 'Question 3: What are our most critical vulnerabilities?',
          content: 'Focus on understanding the vulnerabilities that pose the greatest risk to your business operations and strategic objectives.'
        },
        {
          title: 'Question 4: How would we respond to a major incident?',
          content: 'Ensure your organization has a comprehensive incident response plan and that leadership understands their roles during a crisis.'
        },
        {
          title: 'Question 5: Are we investing appropriately in cybersecurity?',
          content: 'Evaluate whether your cybersecurity investments are aligned with your risk tolerance and business objectives.'
        }
      ],
      keyTakeaways: [
        'Board oversight of cybersecurity is a critical governance responsibility',
        'Directors should ask probing questions to understand their organization\'s cyber risk posture',
        'Regular briefings and updates help maintain board awareness of evolving threats',
        'Investment decisions should be based on risk assessment and business impact analysis',
        'Incident response planning requires board-level attention and preparation'
      ]
    }
  }
  // Add more resources as needed
];

export const ResourceDetailPage: React.FC = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the resource by ID
  const resource = resourcesData.find(r => r.id === id);

  // If resource not found, show error
  if (!resource) {
    return (
      <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Resource Not Found</h1>
            <p className="text-gray-600 dark:text-gray-200 mb-8">
              The resource you're looking for doesn't exist or has been moved.
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/resources')}
              icon={<ArrowLeft size={16} />}
              iconPosition="left"
            >
              Back to Resources
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    // In a real implementation, this would trigger the actual download
    console.log('Downloading resource:', resource.title);
    alert(`Download started for: ${resource.title}`);
  };

  const handleShare = () => {
    // In a real implementation, this would open share options
    if (navigator.share) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('URL copied to clipboard!');
    }
  };

  // Get category label
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'whitepapers':
        return t('resources.categories.whitepapers');
      case 'articles':
        return t('resources.categories.articles');
      case 'casestudies':
        return t('resources.categories.casestudies');
      case 'webinars':
        return t('resources.categories.webinars');
      default:
        return category;
    }
  };

  // Get tag label
  const getTagLabel = (tag: string) => {
    switch(tag) {
      case 'steel':
        return 'STEEL™';
      case 'compliance':
        return t('resources.tags.compliance');
      case 'risk':
        return t('resources.tags.risk');
      case 'leadership':
        return t('resources.tags.leadership');
      case 'technology':
        return t('resources.tags.technology');
      default:
        return tag;
    }
  };

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <nav className="flex items-center space-x-2 text-sm">
            <Link 
              to="/resources" 
              className="text-navy dark:text-silver hover:underline flex items-center"
            >
              <ArrowLeft size={16} className="mr-1" />
              {t('resources.title')}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300">{getCategoryLabel(resource.category)}</span>
          </nav>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="mb-4">
                <span className="bg-navy dark:bg-navy/80 text-white text-sm font-medium px-3 py-1 rounded-md">
                  {getCategoryLabel(resource.category)}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                {resource.title}
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-200 mb-6">
                {resource.description}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{resource.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{new Date(resource.date).toLocaleDateString()}</span>
                </div>
                {resource.readTime && (
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{resource.readTime}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {resource.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-full flex items-center"
                  >
                    <Tag size={12} className="mr-1" />
                    {getTagLabel(tag)}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {resource.downloadUrl && (
                  <Button 
                    variant="primary" 
                    onClick={handleDownload}
                    icon={<Download size={16} />}
                    iconPosition="left"
                  >
                    {t('resources.download')}
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  onClick={handleShare}
                  icon={<Share2 size={16} />}
                  iconPosition="left"
                >
                  Share
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => window.print()}
                  icon={<BookOpen size={16} />}
                  iconPosition="left"
                >
                  Print
                </Button>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="glass" padding="lg">
                {/* Summary */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 dark:text-white">Overview</h2>
                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                    {resource.content.summary}
                  </p>
                </div>

                {/* Sections */}
                {resource.content.sections.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-bold mb-3 dark:text-white">{section.title}</h3>
                    <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}

                {/* Key Takeaways */}
                <div className="bg-silver/20 dark:bg-navy/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 dark:text-white">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {resource.content.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-navy dark:bg-silver mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-200">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Download CTA */}
              {resource.downloadUrl && (
                <Card variant="glass\" padding="lg\" className="bg-navy text-white">
                  <h3 className="text-lg font-bold mb-3">Download This Resource</h3>
                  <p className="text-silver mb-4 text-sm">
                    Get the complete guide with detailed analysis, implementation strategies, and actionable recommendations.
                  </p>
                  <Button 
                    variant="secondary" 
                    fullWidth
                    onClick={handleDownload}
                    icon={<Download size={16} />}
                    iconPosition="left"
                  >
                    {t('resources.download')} PDF
                  </Button>
                </Card>
              )}

              {/* Related Resources */}
              <Card variant="glass" padding="md">
                <h3 className="text-lg font-bold mb-4 dark:text-white">Related Resources</h3>
                <div className="space-y-4">
                  {resourcesData
                    .filter(r => r.id !== resource.id && r.tags.some(tag => resource.tags.includes(tag)))
                    .slice(0, 3)
                    .map(relatedResource => (
                      <Link 
                        key={relatedResource.id}
                        to={`/resources/${relatedResource.id}`}
                        className="block p-3 rounded-lg bg-silver/10 dark:bg-navy/10 hover:bg-silver/20 dark:hover:bg-navy/20 transition-colors"
                      >
                        <h4 className="font-medium text-sm dark:text-white mb-1">
                          {relatedResource.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {getCategoryLabel(relatedResource.category)}
                        </p>
                      </Link>
                    ))}
                </div>
              </Card>

              {/* Contact CTA */}
              <Card variant="glass" padding="md">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Need Expert Guidance?</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Our cybersecurity experts are here to help you implement these strategies in your organization.
                </p>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    fullWidth
                    icon={<Mail size={16} />}
                    iconPosition="left"
                  >
                    Contact Our Experts
                  </Button>
                </Link>
              </Card>

              {/* Newsletter Signup */}
              <Card variant="glass" padding="md">
                <h3 className="text-lg font-bold mb-3 dark:text-white">Stay Updated</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
                  Get the latest cybersecurity insights and resources delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white"
                    placeholder="Enter your email"
                  />
                  <Button 
                    variant="primary" 
                    size="sm"
                    fullWidth
                    icon={<Mail size={14} />}
                    iconPosition="left"
                  >
                    Subscribe
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};