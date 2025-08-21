import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export const PerformanceMonitor: React.FC = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metricsRef.current.fcp = fcpEntry.startTime;
        logMetric('FCP', fcpEntry.startTime);
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        metricsRef.current.lcp = lastEntry.startTime;
        logMetric('LCP', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        metricsRef.current.fid = entry.processingStart - entry.startTime;
        logMetric('FID', entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
          metricsRef.current.cls = clsValue;
          logMetric('CLS', clsValue);
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      metricsRef.current.ttfb = ttfb;
      logMetric('TTFB', ttfb);
    }

    // Log all metrics when page is about to unload
    const handleBeforeUnload = () => {
      logAllMetrics();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const logMetric = (name: string, value: number) => {
    if (process.env.NODE_ENV === 'production') {
      // TODO: Send to analytics service
      console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`);
    }
  };

  const logAllMetrics = () => {
    const metrics = metricsRef.current;
    if (process.env.NODE_ENV === 'production') {
      // TODO: Send to analytics service
      console.log('[Performance] All Metrics:', metrics);
    }
  };

  // This component doesn't render anything
  return null;
};
