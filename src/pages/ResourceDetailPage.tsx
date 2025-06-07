import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ArrowLeft, Download, Share2, BookOpen, Clock, 
  Calendar, Eye, FileText, ExternalLink, Tag,
  ChevronRight, Star, Users, Mail
} from 'lucide-react';

export const ResourceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Mock resource data - in real implementation, this would be fetched based on ID
  const resource = {
    id: id || 'wp-001',
    title: "STEEL™ Implementation Guide - Complete Version",
    description: "Comprehensive 120-page guide for implementing the STEEL™ methodology in your organization. Including templates, checklists, and sector-specific guidance.",
    category: 'whitepapers',
    tags: ['steel', 'implementation', 'methodology', 'guide'],
    date: '2025-01-15',
    readTime: '45 min',
    downloadUrl: 'https://www.africau.edu/images/default/sample.pdf',
    imageUrl: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'ERMITS Research Team',
    fileSize: '15.2 MB',
    downloads: 1247,
    views: 3892,
    featured: true,
    language: 'English',
    format: 'PDF',
    pages: 120,
    content: {
      summary: "This comprehensive implementation guide provides a detailed roadmap for successfully deploying the STEEL™ methodology in your organization. Developed by our cybersecurity experts, this 120-page document includes practical templates, detailed checklists, and industry-specific guidance.",
      keyTopics: [
        "Overview of STEEL™ methodology",
        "5-phase implementation process",
        "Ready-to-use templates and tools",
        "Successful implementation case studies",
        "Performance measures and metrics",
        "Industry-specific adaptations"
      ],
      benefits: [
        "Average 67% reduction in cyber risks",
        "3.4x ROI in less than 18 months",
        "83% improvement in insight time",
        "92% board confidence"
      ]
    }
  };

  const relatedResources = [
    {
      id: 'art-001',
      title: "Five Critical Questions for the Board",
      category: 'articles',
      readTime: '12 min',
      imageUrl: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    },
    {
      id: 'cs-001',
      title: "Fortune 500 Financial Institution Transformation",
      category: 'casestudies',
      readTime: '18 min',
      imageUrl: 'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    },
    {
      id: 'web-001',
      title: "Navigating Geopolitical Cyber Risks",
      category: 'webinars',
      readTime: '45 min',
      imageUrl: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2'
    }
  ];

  const handleDownload = () => {
    if (resource.downloadUrl) {
      const link = document.createElement('a');
      link.href = resource.downloadUrl;
      link.download = resource.title.replace(/[^a-z0-9]/gi, '_') + '.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(`Download not available for: ${resource.title}`);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate('/resources')}
            className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Resources
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Resource Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Card variant="glass" padding="lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img 
                        src={resource.imageUrl}
                        alt={resource.title}
                        className="w-full h-full object-cover"
                      />
                      {resource.featured && (
                        <div className="absolute top-3 left-3">
                          <div className="bg-navy text-white text-xs font-medium px-2 py-1 rounded-md flex items-center">
                            <Star size={12} className="mr-1" />
                            Featured
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="flex items-center mb-3">
                      <span className="bg-navy/10 dark:bg-navy/30 text-navy dark:text-silver text-sm font-medium px-3 py-1 rounded-md mr-3">
                        {resource.category === 'whitepapers' ? 'Whitepaper' : resource.category}
                      </span>
                      {resource.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2 py-1 rounded mr-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white">
                      {resource.title}
                    </h1>
                    
                    <p className="text-gray-600 dark:text-gray-200 mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{new Date(resource.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        <span>{resource.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>{resource.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center">
                        <Download size={14} className="mr-1" />
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="primary" 
                        icon={<Download size={16} />}
                        onClick={handleDownload}
                      >
                        Download ({resource.fileSize})
                      </Button>
                      <Button 
                        variant="outline" 
                        icon={<Share2 size={16} />}
                        onClick={handleShare}
                      >
                        Share
                      </Button>
                      <Button 
                        variant="outline" 
                        icon={<ExternalLink size={16} />}
                        onClick={() => navigate('/contact')}
                      >
                        Contact Expert
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Content Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <Card variant="glass" padding="lg">
                <h2 className="text-xl font-bold mb-4 dark:text-white">Content Summary</h2>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  {resource.content.summary}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      Key Topics Covered
                    </h3>
                    <ul className="space-y-2">
                      {resource.content.keyTopics.map((topic, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-200 text-sm flex items-start">
                          <ChevronRight size={14} className="text-navy dark:text-silver mt-0.5 mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white flex items-center">
                      <Star size={16} className="mr-2" />
                      Expected Benefits
                    </h3>
                    <ul className="space-y-2">
                      {resource.content.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-200 text-sm flex items-start">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Author & Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Card variant="glass" padding="lg">
                <h2 className="text-xl font-bold mb-4 dark:text-white">Publication Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <Users size={20} className="text-navy dark:text-silver mr-3" />
                      <div>
                        <h3 className="font-semibold dark:text-white">{resource.author}</h3>
                        <p className="text-gray-600 dark:text-gray-200 text-sm">Cybersecurity Experts</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Language:</span>
                        <span className="dark:text-white">{resource.language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Format:</span>
                        <span className="dark:text-white">{resource.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Pages:</span>
                        <span className="dark:text-white">{resource.pages}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 dark:text-white">Required Expertise</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded">
                        Executive Level
                      </span>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-medium px-2 py-1 rounded">
                        IT Manager
                      </span>
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-xs font-medium px-2 py-1 rounded">
                        Security Team
                      </span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      icon={<Mail size={16} />}
                      onClick={() => navigate('/contact')}
                    >
                      Questions about this Guide?
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <Card variant="glass" padding="md">
                <h3 className="font-semibold mb-4 dark:text-white">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    fullWidth
                    icon={<Download size={16} />}
                    onClick={handleDownload}
                  >
                    Download Guide
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth
                    icon={<Share2 size={16} />}
                    onClick={handleShare}
                  >
                    Share
                  </Button>
                  <Button 
                    variant="outline" 
                    fullWidth
                    icon={<Mail size={16} />}
                    onClick={() => navigate('/contact')}
                  >
                    Expert Consultation
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Related Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Card variant="glass" padding="md">
                <h3 className="font-semibold mb-4 dark:text-white">Related Resources</h3>
                <div className="space-y-4">
                  {relatedResources.map((related) => (
                    <div 
                      key={related.id}
                      className="flex items-start cursor-pointer hover:bg-silver/10 dark:hover:bg-navy/10 p-2 rounded transition-colors"
                      onClick={() => navigate(`/resources/${related.id}`)}
                    >
                      <div className="w-16 h-12 rounded overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src={related.imageUrl}
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm dark:text-white line-clamp-2">
                          {related.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                          <span className="capitalize">{related.category}</span>
                          <span className="mx-1">•</span>
                          <span>{related.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button 
                    variant="outline" 
                    size="sm"
                    fullWidth
                    icon={<ChevronRight size={16} />}
                    iconPosition="right"
                    onClick={() => navigate('/resources')}
                  >
                    View All Resources
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card variant="solid" padding="md" className="bg-navy text-white">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-silver text-sm mb-4">
                  Our experts are available to help you with STEEL™ implementation.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  fullWidth
                  icon={<Mail size={16} />}
                  onClick={() => navigate('/contact')}
                >
                  Contact an Expert
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};