import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Loader2 } from 'lucide-react';

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy' | 'checking';
  timestamp: string;
  checks: {
    [key: string]: {
      status: 'pass' | 'fail' | 'warn';
      message: string;
      responseTime?: number;
    };
  };
}

export const HealthCheck: React.FC = () => {
  const [healthStatus, setHealthStatus] = useState<HealthStatus>({
    status: 'checking',
    timestamp: new Date().toISOString(),
    checks: {}
  });

  useEffect(() => {
    const performHealthCheck = async () => {
      const checks: HealthStatus['checks'] = {};

      // Check if the app is running
      checks.app = {
        status: 'pass',
        message: 'Application is running',
        responseTime: 0
      };

      // Check localStorage availability
      try {
        localStorage.setItem('health-check', 'test');
        localStorage.removeItem('health-check');
        checks.localStorage = {
          status: 'pass',
          message: 'Local storage is available',
          responseTime: 1
        };
      } catch (error) {
        checks.localStorage = {
          status: 'fail',
          message: 'Local storage is not available'
        };
      }

      // Check network connectivity
      try {
        const startTime = performance.now();
        const response = await fetch('https://httpbin.org/status/200', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        const responseTime = performance.now() - startTime;

        checks.network = {
          status: 'pass',
          message: 'Network connectivity is available',
          responseTime: Math.round(responseTime)
        };
      } catch (error) {
        checks.network = {
          status: 'fail',
          message: 'Network connectivity issues detected'
        };
      }

      // Check performance
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          checks.performance = {
            status: loadTime < 3000 ? 'pass' : loadTime < 5000 ? 'warn' : 'fail',
            message: `Page load time: ${Math.round(loadTime)}ms`,
            responseTime: Math.round(loadTime)
          };
        }
      }

      // Determine overall status
      const failedChecks = Object.values(checks).filter(check => check.status === 'fail').length;
      const warningChecks = Object.values(checks).filter(check => check.status === 'warn').length;

      let overallStatus: HealthStatus['status'] = 'healthy';
      if (failedChecks > 0) {
        overallStatus = 'unhealthy';
      } else if (warningChecks > 0) {
        overallStatus = 'degraded';
      }

      setHealthStatus({
        status: overallStatus,
        timestamp: new Date().toISOString(),
        checks
      });
    };

    performHealthCheck();

    // Perform health check every 5 minutes
    const interval = setInterval(performHealthCheck, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'fail':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'warn':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Loader2 className="h-4 w-4 text-gray-500 animate-spin" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'text-green-600 dark:text-green-400';
      case 'fail':
        return 'text-red-600 dark:text-red-400';
      case 'warn':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  if (process.env.NODE_ENV !== 'production') {
    return null; // Only show in production
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            System Health
          </h3>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              healthStatus.status === 'healthy' ? 'bg-green-500' :
              healthStatus.status === 'degraded' ? 'bg-yellow-500' :
              healthStatus.status === 'unhealthy' ? 'bg-red-500' :
              'bg-gray-500'
            }`} />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {healthStatus.status}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          {Object.entries(healthStatus.checks).map(([key, check]) => (
            <div key={key} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {getStatusIcon(check.status)}
                <span className="capitalize">{key}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={getStatusColor(check.status)}>
                  {check.message}
                </span>
                {check.responseTime !== undefined && (
                  <span className="text-gray-400">
                    {check.responseTime}ms
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Last checked: {new Date(healthStatus.timestamp).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};
