import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DownloadPage: React.FC = () => {
  const navigate = useNavigate();
  const { productType } = useParams<{ productType: string }>();

  useEffect(() => {
    // If there's no token in the URL, redirect home after 5 seconds
    const params = new URLSearchParams(window.location.search);
    const hasToken = params.has('token') && params.has('expires');

    if (!hasToken) {
      const timer = setTimeout(() => {
        navigate('/', { replace: true });
      }, 5000);
      return () => clearTimeout(timer);
    }

    // If a valid token is present, the Vercel function at /api/download handles
    // the actual validation and file redirect. The user should never land on this
    // page with a valid token — they'd be redirected by the API. We simply show
    // a loading message while the redirect processes.
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
      <div className="text-center p-8 max-w-md">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy dark:border-golden mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold mb-4 text-navy dark:text-white">
          Your Download Is Being Prepared
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {productType === 'vciso-kit'
            ? "We're preparing your vCISO Starter Kit download."
            : productType === 'dashboard-template'
            ? "We're preparing your Executive Dashboard Template download."
            : "We're preparing your download."}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          If nothing happens within a few seconds, you will be redirected to the homepage.
          For help, contact{' '}
          <a
            href="mailto:support@ermits-advisory.com"
            className="text-navy dark:text-golden underline"
          >
            support@ermits-advisory.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default DownloadPage;
