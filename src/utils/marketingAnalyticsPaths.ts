/**
 * Product / deliverable surfaces: assessments, STEEL flows, toolkits, dashboards.
 * GA4 and Vercel Web Analytics only run on advisory marketing pages (not these).
 */
const DELIVERABLE_PATH_PREFIXES: readonly string[] = [
  '/dashboard',
  '/steel',
  '/steel-evaluation',
  '/toolkits',
  '/compliance-toolkit',
  '/incident-response-toolkit',
  '/vendor-risk-toolkit',
  '/compliance-gap-analysis-premium',
  '/vendor-risk-scorer-premium',
  '/toolkits-premium',
  '/toolkits-interactive',
  '/dashboard-template',
  '/risk-radar',
  '/purchase-success',
];

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/** True when pathname is a public advisory site page (eligible for marketing analytics). */
export function isAdvisoryMarketingAnalyticsPath(pathname: string): boolean {
  const p = normalizePathname(pathname);
  return !DELIVERABLE_PATH_PREFIXES.some(
    (prefix) => p === prefix || p.startsWith(`${prefix}/`)
  );
}
