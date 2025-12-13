import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';

export const PurchaseSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [productType, setProductType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    // Get product type from URL parameters
    const productParam = searchParams.get('product_type');
    if (productParam) {
      setProductType(productParam);
    }
    
    // Optionally verify the session with your backend
    if (sessionId) {
      // You can fetch session details to get product type
      // For now, we'll use the URL parameter or show a generic success message
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [sessionId, searchParams]);

  const getProductInfo = () => {
    switch (productType) {
      case 'steel-premium':
        return {
          name: t('purchaseSuccess.products.steelPremium.name'),
          message: t('purchaseSuccess.products.steelPremium.message'),
          action: t('purchaseSuccess.products.steelPremium.action'),
          icon: <Mail size={48} className="text-gold" />,
        };
      case 'vciso-kit':
        return {
          name: t('purchaseSuccess.products.vcisoKit.name'),
          message: t('purchaseSuccess.products.vcisoKit.message'),
          action: t('purchaseSuccess.products.vcisoKit.action'),
          icon: <Download size={48} className="text-gold" />,
        };
      case 'dashboard-template':
        return {
          name: t('purchaseSuccess.products.dashboardTemplate.name'),
          message: t('purchaseSuccess.products.dashboardTemplate.message'),
          action: t('purchaseSuccess.products.dashboardTemplate.action'),
          icon: <Download size={48} className="text-gold" />,
        };
      default:
        return {
          name: t('purchaseSuccess.products.default.name'),
          message: t('purchaseSuccess.products.default.message'),
          action: t('purchaseSuccess.products.default.action'),
          icon: <CheckCircle size={48} className="text-gold" />,
        };
    }
  };

  const productInfo = getProductInfo();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Processing your purchase...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-silver-light dark:bg-dark-bg py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-6">
            {productInfo.icon}
          </div>
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Payment Successful! 🎉
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Thank you for purchasing {productInfo.name}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {productInfo.message}
          </p>
        </motion.div>

        <Card variant="glass" padding="lg" className="mb-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold dark:text-white mb-1">What's Next?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {productInfo.action}
                </p>
              </div>
            </div>

            {sessionId && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Order ID: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{sessionId}</code>
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Save this for your records. You'll also receive a receipt via email.
                </p>
              </div>
            )}
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            onClick={() => window.location.href = '/'}
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          >
            Return to Home
          </Button>
          
          {productType === 'steel-premium' && (
            <Button
              variant="secondary"
              onClick={() => window.location.href = '/steel'}
            >
              Go to STEEL™ Diagnostic
            </Button>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Need help? Contact us at{' '}
            <a href="mailto:support@ermits-advisory.com" className="text-gold hover:underline">
              support@ermits-advisory.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

