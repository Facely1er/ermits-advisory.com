import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { 
  ExternalLink, Loader, AlertCircle, ArrowLeft, Maximize, Minimize 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ResourcesPage: React.FC = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const openInNewTab = () => {
    window.open('https://resources.ermits-advisory.com', '_blank');
  };

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-dark-bg' : 'pb-16 bg-silver-light dark:bg-dark-bg min-h-screen'}`}>
      <div className={`${isFullscreen ? 'h-full flex flex-col' : 'container mx-auto px-4'}`}>
        {/* Header - Hide in fullscreen mode */}
        {!isFullscreen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center text-navy dark:text-silver hover:underline mb-4">
              <ArrowLeft size={16} className="mr-2" />
              {t('resources.backToHome')}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {t('navigation.resources')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-100 mb-6">
              {t('resources.description')}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                variant="outline"
                size="sm"
                icon={<Maximize size={16} />}
                onClick={toggleFullscreen}
              >
                {t('resources.fullscreenView')}
              </Button>
              <Button
                variant="outline"
                size="sm"
                icon={<ExternalLink size={16} />}
                onClick={openInNewTab}
              >
                {t('resources.openInNewTab')}
              </Button>
            </div>
          </motion.div>
        )}

        {/* Fullscreen Controls */}
        {isFullscreen && (
          <div className="flex justify-between items-center p-4 bg-navy text-white">
            <h1 className="text-xl font-bold">ERMITS Advisory Resources</h1>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                icon={<ExternalLink size={16} />}
                onClick={openInNewTab}
                className="text-white hover:bg-white/10"
              >
                {t('resources.openInNewTab')}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                icon={<Minimize size={16} />}
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/10"
              >
                {t('resources.exitFullscreen')}
              </Button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${isFullscreen ? 'flex-1' : 'h-96'} flex items-center justify-center`}
          >
            <Card variant="glass" padding="lg" className="text-center">
              <div className="flex flex-col items-center">
                <Loader size={48} className="text-navy dark:text-silver animate-spin mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('resources.loading.title')}</h3>
                <p className="text-gray-600 dark:text-gray-200">
                  {t('resources.loading.message')}
                </p>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Error State */}
        {hasError && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${isFullscreen ? 'flex-1' : 'h-96'} flex items-center justify-center`}
          >
            <Card variant="glass" padding="lg" className="text-center max-w-md">
              <div className="flex flex-col items-center">
                <AlertCircle size={48} className="text-red-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{t('resources.error.title')}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {t('resources.error.message')}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink size={16} />}
                    onClick={openInNewTab}
                  >
                    {t('resources.openInNewTab')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsLoading(true);
                      setHasError(false);
                      // Force iframe reload
                      const iframe = document.getElementById('resources-iframe') as HTMLIFrameElement;
                      if (iframe && iframe.src) {
                        const originalSrc = iframe.src;
                        iframe.src = '';
                        iframe.src = originalSrc;
                      }
                    }}
                  >
                    {t('resources.error.retry')}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Resources Iframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`relative ${isFullscreen ? 'flex-1' : 'h-[800px]'} ${isLoading || hasError ? 'hidden' : 'block'}`}
        >
          <Card variant="glass" padding="none" className="h-full overflow-hidden">
            <iframe
              id="resources-iframe"
              src="https://resources.ermits-advisory.com"
              className="w-full h-full border-0"
              title="ERMITS Advisory Resources"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              sandbox="allow-same-origin allow-scripts allow-forms allow-navigation allow-top-navigation"
              loading="lazy"
              style={{ minHeight: isFullscreen ? '100vh' : '800px' }}
            />
          </Card>
        </motion.div>

        {/* Footer Information - Hide in fullscreen */}
        {!isFullscreen && !isLoading && !hasError && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Card variant="glass" padding="md">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="font-semibold mb-2 dark:text-white">{t('resources.about.title')}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    {t('resources.about.description')}
                  </p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<ExternalLink size={16} />}
                    onClick={openInNewTab}
                  >
                    {t('resources.openInNewTab')}
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => window.location.href = '/contact'}
                  >
                    {t('resources.contactButton')}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};