/**
 * Premium Access Verification System
 * Manages premium access for toolkit tools based on Stripe purchases
 */

export type ToolkitType = 'compliance' | 'vendor-risk' | 'incident-response' | 'all';
export type SubscriptionType = 'annual' | 'lifetime';

export interface PremiumAccess {
  toolkitType: ToolkitType;
  subscriptionType: SubscriptionType;
  purchaseDate: string;
  expiresAt?: string; // undefined for lifetime
  sessionId?: string;
  productId?: string;
}

const STORAGE_KEY = 'toolkit_premium_access';
const URL_PARAM_SESSION = 'session_id';
const URL_PARAM_PRODUCT = 'product_id';

/**
 * Get all premium access records
 */
export function getPremiumAccess(): PremiumAccess[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading premium access:', error);
    return [];
  }
}

/**
 * Check if user has premium access for a specific toolkit
 */
export function hasPremiumAccess(toolkitType: ToolkitType = 'all'): boolean {
  const access = getPremiumAccess();
  
  if (access.length === 0) return false;
  
  // Check for "all" access (bundle purchase)
  const hasAllAccess = access.some(a => a.toolkitType === 'all');
  if (hasAllAccess) {
    // Verify lifetime or not expired
    const allAccess = access.find(a => a.toolkitType === 'all');
    if (allAccess) {
      if (!allAccess.expiresAt) return true; // Lifetime
      return new Date(allAccess.expiresAt) > new Date(); // Not expired
    }
  }
  
  // Check for specific toolkit access
  if (toolkitType !== 'all') {
    const toolkitAccess = access.find(a => a.toolkitType === toolkitType);
    if (toolkitAccess) {
      if (!toolkitAccess.expiresAt) return true; // Lifetime
      return new Date(toolkitAccess.expiresAt) > new Date(); // Not expired
    }
  }
  
  return false;
}

/**
 * Grant premium access after successful purchase
 */
export function grantPremiumAccess(
  toolkitType: ToolkitType,
  subscriptionType: SubscriptionType,
  sessionId?: string,
  productId?: string
): PremiumAccess {
  const access: PremiumAccess = {
    toolkitType,
    subscriptionType,
    purchaseDate: new Date().toISOString(),
    sessionId,
    productId
  };
  
  // Set expiration date for annual subscriptions (1 year from now)
  if (subscriptionType === 'annual') {
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    access.expiresAt = expiresAt.toISOString();
  }
  
  // Add to existing access
  const existing = getPremiumAccess();
  
  // Remove any existing access for the same toolkit type (replace with new)
  const filtered = existing.filter(a => a.toolkitType !== toolkitType);
  filtered.push(access);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return access;
  } catch (error) {
    console.error('Error saving premium access:', error);
    throw error;
  }
}

/**
 * Check URL parameters for purchase confirmation and grant access
 * Call this after redirect from Stripe checkout success page
 */
export function checkPurchaseConfirmation(): boolean {
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get(URL_PARAM_SESSION);
  const productId = urlParams.get(URL_PARAM_PRODUCT);
  
  if (!sessionId && !productId) return false;
  
  // Determine toolkit type and subscription from product ID
  if (productId) {
    const toolkitType = getToolkitTypeFromProductId(productId);
    const subscriptionType = getSubscriptionTypeFromProductId(productId);
    
    if (toolkitType && subscriptionType) {
      grantPremiumAccess(toolkitType, subscriptionType, sessionId || undefined, productId);
      
      // Clean URL parameters
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
      
      return true;
    }
  }
  
  // If we have session ID but no product ID, we could verify with Stripe API
  // For now, we'll rely on product ID from URL
  return false;
}

/**
 * Get toolkit type from product ID
 */
function getToolkitTypeFromProductId(productId: string): ToolkitType | null {
  if (productId.includes('bundle')) return 'all';
  if (productId.includes('compliance')) return 'compliance';
  if (productId.includes('vendor-risk') || productId.includes('vendor')) return 'vendor-risk';
  if (productId.includes('incident-response') || productId.includes('incident')) return 'incident-response';
  return null;
}

/**
 * Get subscription type from product ID
 */
function getSubscriptionTypeFromProductId(productId: string): SubscriptionType | null {
  if (productId.includes('lifetime')) return 'lifetime';
  if (productId.includes('annual')) return 'annual';
  return null;
}

/**
 * Revoke premium access (for testing/admin purposes)
 */
export function revokePremiumAccess(toolkitType?: ToolkitType): void {
  if (toolkitType) {
    const existing = getPremiumAccess();
    const filtered = existing.filter(a => a.toolkitType !== toolkitType);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

/**
 * Get premium access details for a specific toolkit
 */
export function getPremiumAccessDetails(toolkitType: ToolkitType): PremiumAccess | null {
  const access = getPremiumAccess();
  
  // Check for "all" access first
  const allAccess = access.find(a => a.toolkitType === 'all');
  if (allAccess) {
    if (!allAccess.expiresAt || new Date(allAccess.expiresAt) > new Date()) {
      return allAccess;
    }
  }
  
  // Check for specific toolkit access
  const toolkitAccess = access.find(a => a.toolkitType === toolkitType);
  if (toolkitAccess) {
    if (!toolkitAccess.expiresAt || new Date(toolkitAccess.expiresAt) > new Date()) {
      return toolkitAccess;
    }
  }
  
  return null;
}

/**
 * Get days remaining for annual subscription
 */
export function getDaysRemaining(toolkitType: ToolkitType = 'all'): number | null {
  const access = getPremiumAccessDetails(toolkitType);
  if (!access || !access.expiresAt) return null; // Lifetime or no access
  
  const expiresAt = new Date(access.expiresAt);
  const now = new Date();
  const diffTime = expiresAt.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays > 0 ? diffDays : 0;
}

