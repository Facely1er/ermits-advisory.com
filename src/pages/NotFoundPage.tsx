import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { Home, ArrowLeft, Search, AlertCircle, BookOpen } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();
  // const navigate = useNavigate();
  
  return (
    <div className="pb-16 bg-silver-light dark:bg-dark-bg min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-navy/10 dark:bg-navy/20">
            <AlertCircle size={48} className="text-navy dark:text-silver" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
            {t('notFound.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
            {t('notFound.message')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/">
              <Button 
                variant="primary" 
                size="lg"
                icon={<Home size={18} />}
                iconPosition="left"
              >
                {t('notFound.returnHome')}
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              icon={<ArrowLeft size={18} />}
              iconPosition="left"
              onClick={() => window.history.back()}
            >
              {t('notFound.goBack')}
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <Card variant="glass" padding="lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              {t('notFound.lookingFor')}
            </h3>
            
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-navy focus:border-navy dark:bg-dark-surface dark:text-white"
                  placeholder={t('notFound.searchPlaceholder')}
                />
              </div>
              
              <h4 className="font-medium text-lg dark:text-gray-100">{t('notFound.popularPages')}:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link 
                  to="/steel" 
                  className="p-3 rounded-md bg-silver/20 dark:bg-navy/20 hover:bg-silver/30 dark:hover:bg-navy/30 transition-colors dark:text-white"
                >
                  {t('navigation.steel')}
                </Link>
                <Link 
                  to="/risk-radar" 
                  className="p-3 rounded-md bg-silver/20 dark:bg-navy/20 hover:bg-silver/30 dark:hover:bg-navy/30 transition-colors dark:text-white"
                >
                  {t('navigation.riskRadar')}
                </Link>
                <Link 
                  to="/services" 
                  className="p-3 rounded-md bg-silver/20 dark:bg-navy/20 hover:bg-silver/30 dark:hover:bg-navy/30 transition-colors dark:text-white"
                >
                  {t('navigation.services')}
                </Link>
                <Link
                  to="/resources"
                  className="p-3 rounded-md bg-silver/20 dark:bg-navy/20 hover:bg-silver/30 dark:hover:bg-navy/30 transition-colors dark:text-white flex items-center justify-between"
                >
                  {t('navigation.resources')}
                  <BookOpen size={16} />
                </Link>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  {t('notFound.needAssistance')} 
                  <Link to="/contact" className="text-navy dark:text-silver ml-1 hover:underline">
                    {t('notFound.contactUs')}
                  </Link>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};