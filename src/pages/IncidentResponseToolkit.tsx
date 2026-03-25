import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const IncidentResponseToolkit: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/toolkits-premium', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-silver-light dark:bg-dark-bg">
      <div className="text-center p-8">
        <p className="text-gray-600 dark:text-gray-200 mb-4">
          Redirecting to toolkit options…
        </p>
      </div>
    </div>
  );
};
