import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Must match index.html gtag config (same property as ERMITS Landing). */
const GA_MEASUREMENT_ID = 'G-VEQXJHYNHG';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends GA4 page_view on client-side route changes (SPA).
 * Initial HTML uses send_page_view: false so views are not double-counted.
 */
export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);

  return null;
}
