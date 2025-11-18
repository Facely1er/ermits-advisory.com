import { useEffect } from 'react';

interface ExternalRedirectProps {
  to: string;
}

export const ExternalRedirect: React.FC<ExternalRedirectProps> = ({ to }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
      <div className="text-center p-8">
        <p className="text-gray-600 dark:text-gray-200 mb-4">
          Redirecting...
        </p>
      </div>
    </div>
  );
};

