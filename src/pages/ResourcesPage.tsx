import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  FileText, Download, Search, Filter, ChevronDown, 
  BookOpen, FileCode, Video, Clock, Eye, Calendar,
  ArrowRight, Mail
} from 'lucide-react';
import { resourceService, newsletterService } from '../services/supabaseService';
import type { Resource } from '../lib/supabase';

type ResourceCategory = 'all' | 'whitepapers' | 'articles' | 'casestudies' | 'webinars';
type ResourceTag = 'steel' | 'compliance' | 'risk' | 'leadership' | 'technology';

export const ResourcesPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('all');
  const [selectedTags, setSelectedTags] = useState<ResourceTag[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [resources, setResources] = useState<Resource[]>([]);
  const [featuredResource, setFeaturedResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscribing, setSubscribing] = useState(false);
  
  // Fetch resources from Supabase
  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        const data = await resourceService.getResources({
          category: selectedCategory,
          tags: selectedTags,
        });
        
        setResources(data || []);
        
        // Get featured resource
        const featured = data?.find(resource => resource.featured);
        setFeaturedResource(featured || null);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setResources([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [selectedCategory, selectedTags]);
  
  // Filter resources based on search query
  const filteredResources = resources.filter(resource => {
    if (!resource.featured && searchQuery) {
      return resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return !resource.featured;
  });
  
  const handleTagToggle = (tag: ResourceTag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedTags([]);
    setSearchQuery('');
  };

  // Handle resource view - navigate to detail page
  const handleViewResource = (resourceId: string) => {
    navigate(`/resources/${resourceId}`);
  };

  // Handle download - create and click a download link
  const handleDownloadResource = async (resource: Resource) => {
    if (resource.download_url) {
      try {
        // Track download in analytics
        await resourceService.incrementDownloads(resource.id);
        
        const link = document.createElement('a');
        link.href = resource.download_url;
        link.download = resource.title.replace(/[^a-z0-9]/gi, '_') + '.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error tracking download:', error);
        alert(`Download error for: ${resource.title}`);
      }
    } else {
      alert(`Download not available for: ${resource.title}`);
    }
  };

  // Handle newsletter subscription
  const handleNewsletterSubscribe = async () => {
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    setSubscribing(true);
    try {
      await newsletterService.subscribe(newsletterEmail, 'resources_page');
      alert(`Thank you for subscribing with email: ${newsletterEmail}`);
      setNewsletterEmail(''); // Clear the input after successful subscription
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('There was an error subscribing to the newsletter. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };
  
  // Get category icon
  const getCategoryIcon = (category: ResourceCategory) => {
    switch(category) {
      case 'whitepapers':
        return <FileText size={20} />;
      case 'articles':
        return <BookOpen size={20} />;
      case 'casestudies':
        return <FileCode size={20} />;
      case 'webinars':
        return <Video size={20} />;
      default:
        return <FileText size={20} />;
    }
  };
  
  // Get category label
  const getCategoryLabel = (category: ResourceCategory) => {
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
        return t('resources.categories.all');
    }
  };
  
  // Get tag label
  const getTagLabel = (tag: ResourceTag) => {
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
        return '';
    }
  };
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">{t('common.loading')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{t('resources.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-3xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </motion.div>

        {/* Featured Resource */}
        {featuredResource && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Card variant="glass" padding="none" className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={featuredResource.image_url}
                    alt={featuredResource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-navy dark:bg-navy/80 text-white text-xs font-medium px-2.5 py-1 rounded-md mr-2">
                        {t('resources.featured')}
                      </span>
                      <span className="bg-silver/30 dark:bg-navy/30 text-navy dark:text-silver text-xs font-medium px-2.5 py-1 rounded-md flex items-center">
                        {getCategoryIcon(featuredResource.category)}
                        <span className="ml-1">{getCategoryLabel(featuredResource.category)}</span>
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 dark:text-white">{featuredResource.title}</h2>
                    <p className="text-gray-600 dark:text-gray-200 mb-6">{featuredResource.description}</p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredResource.tags?.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {getTagLabel(tag as ResourceTag)}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        <span>{new Date(featuredResource.date).toLocaleDateString()}</span>
                        {featuredResource.read_time && (
                          <>
                            <span className="mx-2">•</span>
                            <Clock size={14} className="mr-1" />
                            <span>{featuredResource.read_time}</span>
                          </>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          icon={<Eye size={16} />}
                          onClick={() => handleViewResource(featuredResource.id)}
                        >
                          {t('resources.view')}
                        </Button>
                        {featuredResource.download_url && (
                          <Button 
                            variant="primary" 
                            size="sm" 
                            icon={<Download size={16} />}
                            iconPosition="right"
                            onClick={() => handleDownloadResource(featuredResource)}
                          >
                            {t('resources.download')}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Card variant="glass" padding="md">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-grow">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white"
                    placeholder={t('resources.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Category Filter (Desktop) */}
              <div className="hidden md:flex space-x-2">
                <Button 
                  variant={selectedCategory === 'all' ? 'primary' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                >
                  {t('resources.categories.all')}
                </Button>
                <Button 
                  variant={selectedCategory === 'whitepapers' ? 'primary' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('whitepapers')}
                >
                  {t('resources.categories.whitepapers')}
                </Button>
                <Button 
                  variant={selectedCategory === 'articles' ? 'primary' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('articles')}
                >
                  {t('resources.categories.articles')}
                </Button>
                <Button 
                  variant={selectedCategory === 'casestudies' ? 'primary' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('casestudies')}
                >
                  {t('resources.categories.casestudies')}
                </Button>
                <Button 
                  variant={selectedCategory === 'webinars' ? 'primary' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedCategory('webinars')}
                >
                  {t('resources.categories.webinars')}
                </Button>
              </div>
              
              {/* Filter Toggle (Mobile) */}
              <div className="md:hidden">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  icon={<Filter size={16} />}
                  iconPosition="left"
                >
                  {t('resources.filters')}
                  <ChevronDown size={16} className={`ml-1 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </Button>
              </div>
              
              {/* Clear Filters Button */}
              {(selectedCategory !== 'all' || selectedTags.length > 0 || searchQuery) && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearFilters}
                >
                  {t('resources.clearFilters')}
                </Button>
              )}
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="mt-4 md:hidden">
                <h3 className="font-medium text-sm mb-2 dark:text-white">{t('resources.categories.title')}:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Button 
                    variant={selectedCategory === 'all' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('all')}
                  >
                    {t('resources.categories.all')}
                  </Button>
                  <Button 
                    variant={selectedCategory === 'whitepapers' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('whitepapers')}
                  >
                    {t('resources.categories.whitepapers')}
                  </Button>
                  <Button 
                    variant={selectedCategory === 'articles' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('articles')}
                  >
                    {t('resources.categories.articles')}
                  </Button>
                  <Button 
                    variant={selectedCategory === 'casestudies' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('casestudies')}
                  >
                    {t('resources.categories.casestudies')}
                  </Button>
                  <Button 
                    variant={selectedCategory === 'webinars' ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('webinars')}
                  >
                    {t('resources.categories.webinars')}
                  </Button>
                </div>
                
                <h3 className="font-medium text-sm mb-2 dark:text-white">{t('resources.tags.title')}:</h3>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={selectedTags.includes('steel') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('steel')}
                  >
                    STEEL™
                  </Button>
                  <Button 
                    variant={selectedTags.includes('compliance') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('compliance')}
                  >
                    {t('resources.tags.compliance')}
                  </Button>
                  <Button 
                    variant={selectedTags.includes('risk') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('risk')}
                  >
                    {t('resources.tags.risk')}
                  </Button>
                  <Button 
                    variant={selectedTags.includes('leadership') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('leadership')}
                  >
                    {t('resources.tags.leadership')}
                  </Button>
                  <Button 
                    variant={selectedTags.includes('technology') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('technology')}
                  >
                    {t('resources.tags.technology')}
                  </Button>
                </div>
              </div>
            )}
            
            {/* Desktop Tag Filters */}
            <div className="hidden md:block mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex items-center">
                <h3 className="font-medium text-sm mr-4 dark:text-white">{t('resources.tags.title')}:</h3>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={selectedTags.includes('steel') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('steel')}
                  >
                    STEEL™
                  </Button>
                  <Button 
                    variant={selectedTags.includes('compliance') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('compliance')}
                  >
                    {t('resources.tags.compliance')}
                  </Button>
                  <Button 
                    variant={selectedTags.includes('risk') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('risk')}
                  >
                    {t('resources.tags.risk')}
                  </Button>
                  <Button 
                    variant={selectedTags.includes('leadership') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('leadership')}
                  >
                    {t('resources.tags.leadership')}
                  </Button>
                  <Button 
                    variant={selectedTags.includes('technology') ? 'primary' : 'outline'} 
                    size="sm"
                    onClick={() => handleTagToggle('technology')}
                  >
                    {t('resources.tags.technology')}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <motion.div key={resource.id} variants={item}>
                  <Card variant="glass" padding="none" className="h-full flex flex-col overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={resource.image_url} 
                        alt={resource.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center mb-3">
                        <span className="bg-silver/30 dark:bg-navy/30 text-navy dark:text-silver text-xs font-medium px-2.5 py-1 rounded-md flex items-center">
                          {getCategoryIcon(resource.category)}
                          <span className="ml-1">{getCategoryLabel(resource.category)}</span>
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 dark:text-white">{resource.title}</h3>
                      <p className="text-gray-600 dark:text-gray-200 text-sm mb-4 flex-grow">{resource.description}</p>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags?.map(tag => (
                            <span 
                              key={tag} 
                              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded"
                            >
                              {getTagLabel(tag as ResourceTag)}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar size={14} className="mr-1" />
                            <span>{new Date(resource.date).toLocaleDateString()}</span>
                            {resource.read_time && (
                              <>
                                <span className="mx-2">•</span>
                                <Clock size={14} className="mr-1" />
                                <span>{resource.read_time}</span>
                              </>
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              icon={<Eye size={16} />}
                              onClick={() => handleViewResource(resource.id)}
                            >
                              {t('resources.view')}
                            </Button>
                            {resource.download_url && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                icon={<Download size={16} />}
                                onClick={() => handleDownloadResource(resource)}
                              >
                                {t('resources.download')}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card variant="glass" padding="lg" className="text-center">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{t('resources.noResults.title')}</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-4">{t('resources.noResults.message')}</p>
              <Button 
                variant="primary" 
                onClick={clearFilters}
              >
                {t('resources.clearFilters')}
              </Button>
            </Card>
          )}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card variant="solid" padding="lg" className="bg-navy text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-3">{t('resources.newsletter.title')}</h2>
                <p className="text-silver mb-6">
                  {t('resources.newsletter.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    className="flex-grow px-4 py-2 border border-silver/30 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-silver text-white placeholder-silver/70"
                    placeholder={t('resources.newsletter.emailPlaceholder')}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <Button 
                    variant="secondary" 
                    icon={<Mail size={16} />}
                    iconPosition="left"
                    onClick={handleNewsletterSubscribe}
                    isLoading={subscribing}
                  >
                    {t('resources.newsletter.subscribe')}
                  </Button>
                </div>
                <p className="text-xs text-silver/70 mt-3">
                  {t('resources.newsletter.privacy')}
                </p>
              </div>
              <div className="md:w-1/3 hidden md:block">
                <div className="flex justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 bg-silver/10 rounded-full flex items-center justify-center">
                      <Mail size={64} className="text-silver" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-silver/30 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};