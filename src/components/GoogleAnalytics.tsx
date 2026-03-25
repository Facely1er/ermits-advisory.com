import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { isAdvisoryMarketingAnalyticsPath } from '../utils/marketingAnalyticsPaths';

/** Must match index.html gtag config (same property as ERMITS Landing). */
const GA_MEASUREMENT_ID = 'G-VEQXJHYNHG';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends GA4 page_view on client-side route changes (SPA), only on marketing pages.
 * Initial HTML uses send_page_view: false so views are not double-counted.
 */
export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!isAdvisoryMarketingAnalyticsPath(location.pathname)) return;
    if (typeof window.gtag !== 'function') return;

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);

  return null;
}

/** Vercel Web Analytics only on the same marketing routes as GA4. */
export function VercelMarketingAnalytics() {
  const { pathname } = useLocation();
  if (!isAdvisoryMarketingAnalyticsPath(pathname)) return null;
  return <Analytics />;
}
