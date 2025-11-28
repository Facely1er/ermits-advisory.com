/**
 * Threat Intelligence Service
 * 
 * Fetches real-time cyber threat intelligence from public sources:
 * - CISA Known Exploited Vulnerabilities (KEV) Catalog
 * - NVD (National Vulnerability Database) recent vulnerabilities
 * - Public threat intelligence feeds
 */

interface ThreatIntelligenceData {
  activeThreats: number;
  recentVulnerabilities: number;
  exploitedVulnerabilities: number;
  riskScore: number;
  lastUpdated: string;
}

interface CISAKEVEntry {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  requiredAction: string;
  dueDate: string;
  knownRansomwareCampaignUse: string;
  notes: string;
}

interface NVDFeedEntry {
  cve: {
    id: string;
    published: string;
    lastModified: string;
    vulnStatus: string;
    descriptions: Array<{ lang: string; value: string }>;
    metrics?: {
      cvssMetricV31?: Array<{
        cvssData: {
          baseScore: number;
          baseSeverity: string;
        };
      }>;
      cvssMetricV2?: Array<{
        cvssData: {
          baseScore: number;
        };
      }>;
    };
  };
}

// Cache for API responses to avoid rate limiting
const cache: {
  data: ThreatIntelligenceData | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch CISA Known Exploited Vulnerabilities
 */
async function fetchCISAKEV(): Promise<CISAKEVEntry[]> {
  try {
    // Add timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
      const response = await fetch('https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json', {
        headers: {
          'Accept': 'application/json',
        },
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        // Silently return empty array on any error
        return [];
      }
      
      const data = await response.json();
      return data.vulnerabilities || [];
    } catch (fetchError) {
      clearTimeout(timeoutId);
      throw fetchError;
    }
  } catch (error) {
    // Silently handle all errors (network errors, CORS, timeouts, etc.)
    // These are expected in some environments and the app should continue working
    // No logging in production to avoid console noise
    return [];
  }
}

/**
 * Fetch recent vulnerabilities from NVD
 */
async function fetchRecentNVDVulnerabilities(): Promise<NVDFeedEntry[]> {
  try {
    // Fetch recent vulnerabilities (last 24 hours to avoid rate limiting)
    const now = new Date();
    const startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const startDateStr = startDate.toISOString().split('T')[0] + 'T00:00:00.000';
    const endDateStr = now.toISOString();
    
    // NVD API endpoint for recent vulnerabilities
    // Note: NVD API has rate limits, so we use a 24-hour window
    const url = `https://services.nvd.nist.gov/rest/json/cves/2.0/?pubStartDate=${startDateStr}&pubEndDate=${endDateStr}&resultsPerPage=20`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      // Silently return empty array on any error (rate limited, server error, etc.)
      return [];
    }
    
    const data = await response.json();
    return data.vulnerabilities || [];
  } catch (error) {
    // Silently return empty array on error - component will still show CISA data
    // No logging to avoid console noise in production
    return [];
  }
}

/**
 * Calculate risk score based on real threat data
 * Uses weighted factors from CISA KEV and NVD data
 */
function calculateRiskScore(
  exploitedCount: number,
  recentVulnCount: number,
  activeThreats: number
): number {
  // Risk score calculation (0-100)
  // Higher numbers = higher risk
  const exploitedWeight = 0.4;  // Known exploited vulnerabilities (most critical)
  const recentVulnWeight = 0.3;  // Recent vulnerabilities (emerging threats)
  const activeThreatWeight = 0.3; // Active threats in last 30 days
  
  // Normalize values based on typical real-world ranges:
  // - CISA KEV typically has 1000+ entries (normalize to 100)
  // - Recent NVD vulns: 0-50 per day (normalize to 50)
  // - Active threats: 0-30 per month (normalize to 20)
  const exploitedScore = Math.min(100, (exploitedCount / 100) * 100);
  const recentVulnScore = Math.min(100, (recentVulnCount / 50) * 100);
  const activeThreatScore = Math.min(100, (activeThreats / 20) * 100);
  
  const riskScore = 
    exploitedScore * exploitedWeight +
    recentVulnScore * recentVulnWeight +
    activeThreatScore * activeThreatWeight;
  
  return Math.round(Math.min(100, Math.max(0, riskScore)));
}

/**
 * Get real-time threat intelligence data
 */
export async function getThreatIntelligence(): Promise<ThreatIntelligenceData> {
  // Check cache first
  const now = Date.now();
  if (cache.data && (now - cache.timestamp) < CACHE_DURATION) {
    return cache.data;
  }

  try {
    // Fetch data from multiple sources in parallel
    const [cisaData, nvdData] = await Promise.all([
      fetchCISAKEV(),
      fetchRecentNVDVulnerabilities(),
    ]);

    // Count active threats (CISA entries added in last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const activeThreats = cisaData.filter(entry => {
      const dateAdded = new Date(entry.dateAdded);
      return dateAdded >= thirtyDaysAgo;
    }).length;

    // Count recent vulnerabilities (NVD entries from last 8 hours)
    const recentVulnerabilities = nvdData.length;

    // Count total exploited vulnerabilities
    const exploitedVulnerabilities = cisaData.length;

    // Calculate risk score
    const riskScore = calculateRiskScore(
      exploitedVulnerabilities,
      recentVulnerabilities,
      activeThreats
    );

    const result: ThreatIntelligenceData = {
      activeThreats,
      recentVulnerabilities,
      exploitedVulnerabilities,
      riskScore,
      lastUpdated: new Date().toISOString(),
    };

    // Update cache
    cache.data = result;
    cache.timestamp = now;

    return result;
  } catch (error) {
    // Silently return fallback data if API fails
    // No logging to avoid console noise in production
    return {
      activeThreats: 0,
      recentVulnerabilities: 0,
      exploitedVulnerabilities: 0,
      riskScore: 0,
      lastUpdated: new Date().toISOString(),
    };
  }
}

/**
 * Get compliance score (mock for now, would come from compliance monitoring system)
 */
export async function getComplianceScore(): Promise<number> {
  // In production, this would fetch from actual compliance monitoring system
  // For now, return a realistic baseline that can be updated
  return 88;
}

/**
 * Get recent incidents count (mock for now, would come from SIEM)
 */
export async function getRecentIncidents(): Promise<number> {
  // In production, this would fetch from actual SIEM/incident management system
  // For now, return a realistic baseline
  return 0;
}

