/**
 * Enhanced localStorage utility for toolkit assessments
 * Provides save, load, list, and delete functionality
 */

export interface SavedAssessment {
  id: string;
  name: string;
  type: 'compliance' | 'vendor-risk';
  data: any;
  timestamp: string;
  lastModified: string;
}

const STORAGE_KEYS = {
  compliance: 'compliance-assessments',
  vendorRisk: 'vendor-risk-assessments',
  metadata: 'toolkit-assessments-metadata'
};

/**
 * Generate unique ID for assessment
 */
function generateId(): string {
  return `assessment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get storage key for assessment type
 */
function getStorageKey(type: 'compliance' | 'vendor-risk'): string {
  return type === 'compliance' ? STORAGE_KEYS.compliance : STORAGE_KEYS.vendorRisk;
}

/**
 * Save assessment to localStorage
 */
export function saveAssessment(
  type: 'compliance' | 'vendor-risk',
  data: any,
  name?: string
): SavedAssessment {
  const storageKey = getStorageKey(type);
  const savedAssessments = getSavedAssessments(type);
  
  const assessment: SavedAssessment = {
    id: generateId(),
    name: name || `${type === 'compliance' ? 'Compliance' : 'Vendor Risk'} Assessment - ${new Date().toLocaleDateString()}`,
    type,
    data,
    timestamp: new Date().toISOString(),
    lastModified: new Date().toISOString()
  };

  savedAssessments.push(assessment);
  
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedAssessments));
    updateMetadata(assessment);
    return assessment;
  } catch (error) {
    // Handle quota exceeded error
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      // Remove oldest assessments if storage is full
      const sorted = savedAssessments.sort((a, b) => 
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
      // Keep only last 50 assessments
      const trimmed = sorted.slice(-49);
      trimmed.push(assessment);
      localStorage.setItem(storageKey, JSON.stringify(trimmed));
      updateMetadata(assessment);
      return assessment;
    }
    throw error;
  }
}

/**
 * Load assessment by ID
 */
export function loadAssessment(
  type: 'compliance' | 'vendor-risk',
  id: string
): SavedAssessment | null {
  const savedAssessments = getSavedAssessments(type);
  return savedAssessments.find(a => a.id === id) || null;
}

/**
 * Get all saved assessments for a type
 */
export function getSavedAssessments(type: 'compliance' | 'vendor-risk'): SavedAssessment[] {
  const storageKey = getStorageKey(type);
  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading assessments:', error);
    return [];
  }
}

/**
 * Delete assessment by ID
 */
export function deleteAssessment(
  type: 'compliance' | 'vendor-risk',
  id: string
): boolean {
  const storageKey = getStorageKey(type);
  const savedAssessments = getSavedAssessments(type);
  const filtered = savedAssessments.filter(a => a.id !== id);
  
  try {
    localStorage.setItem(storageKey, JSON.stringify(filtered));
    removeFromMetadata(id);
    return true;
  } catch (error) {
    console.error('Error deleting assessment:', error);
    return false;
  }
}

/**
 * Update assessment
 */
export function updateAssessment(
  type: 'compliance' | 'vendor-risk',
  id: string,
  data: any,
  name?: string
): boolean {
  const storageKey = getStorageKey(type);
  const savedAssessments = getSavedAssessments(type);
  const index = savedAssessments.findIndex(a => a.id === id);
  
  if (index === -1) return false;
  
  savedAssessments[index] = {
    ...savedAssessments[index],
    data,
    name: name || savedAssessments[index].name,
    lastModified: new Date().toISOString()
  };
  
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedAssessments));
    updateMetadata(savedAssessments[index]);
    return true;
  } catch (error) {
    console.error('Error updating assessment:', error);
    return false;
  }
}

/**
 * Get storage usage info
 */
export function getStorageInfo(): {
  totalAssessments: number;
  complianceCount: number;
  vendorRiskCount: number;
  estimatedSize: string;
} {
  const compliance = getSavedAssessments('compliance');
  const vendorRisk = getSavedAssessments('vendor-risk');
  const total = compliance.length + vendorRisk.length;
  
  // Estimate size (rough calculation)
  const complianceSize = JSON.stringify(compliance).length;
  const vendorRiskSize = JSON.stringify(vendorRisk).length;
  const totalSize = complianceSize + vendorRiskSize;
  
  const sizeInKB = (totalSize / 1024).toFixed(2);
  const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
  
  return {
    totalAssessments: total,
    complianceCount: compliance.length,
    vendorRiskCount: vendorRisk.length,
    estimatedSize: totalSize > 1024 * 1024 ? `${sizeInMB} MB` : `${sizeInKB} KB`
  };
}

/**
 * Clear all assessments (use with caution)
 */
export function clearAllAssessments(type?: 'compliance' | 'vendor-risk'): void {
  if (type) {
    localStorage.removeItem(getStorageKey(type));
  } else {
    localStorage.removeItem(STORAGE_KEYS.compliance);
    localStorage.removeItem(STORAGE_KEYS.vendorRisk);
  }
  localStorage.removeItem(STORAGE_KEYS.metadata);
}

/**
 * Update metadata for quick access
 */
function updateMetadata(assessment: SavedAssessment): void {
  try {
    const metadata = getMetadata();
    const index = metadata.findIndex(m => m.id === assessment.id);
    
    if (index === -1) {
      metadata.push({
        id: assessment.id,
        name: assessment.name,
        type: assessment.type,
        timestamp: assessment.timestamp
      });
    } else {
      metadata[index] = {
        ...metadata[index],
        name: assessment.name,
        timestamp: assessment.lastModified || assessment.timestamp
      };
    }
    
    localStorage.setItem(STORAGE_KEYS.metadata, JSON.stringify(metadata));
  } catch (error) {
    // Metadata is optional, don't fail if it errors
    console.warn('Could not update metadata:', error);
  }
}

/**
 * Remove from metadata
 */
function removeFromMetadata(id: string): void {
  try {
    const metadata = getMetadata();
    const filtered = metadata.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEYS.metadata, JSON.stringify(filtered));
  } catch (error) {
    console.warn('Could not update metadata:', error);
  }
}

/**
 * Get metadata
 */
function getMetadata(): Array<{ id: string; name: string; type: string; timestamp: string }> {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.metadata);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

