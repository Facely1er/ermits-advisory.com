import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  saveAssessment,
  loadAssessment,
  getSavedAssessments,
  deleteAssessment,
  updateAssessment,
  getStorageInfo,
  clearAllAssessments,
  SavedAssessment,
} from '../storage';

describe('storage utilities', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('saveAssessment', () => {
    it('should save a compliance assessment', () => {
      const data = { question1: 'answer1', score: 85 };
      const result = saveAssessment('compliance', data, 'Test Assessment');

      expect(result.id).toBeDefined();
      expect(result.name).toBe('Test Assessment');
      expect(result.type).toBe('compliance');
      expect(result.data).toEqual(data);
      expect(result.timestamp).toBeDefined();
    });

    it('should save a vendor risk assessment', () => {
      const data = { vendor: 'Test Vendor', risk: 'Medium' };
      const result = saveAssessment('vendor-risk', data);

      expect(result.type).toBe('vendor-risk');
      expect(result.name).toMatch(/Vendor Risk Assessment/);
      expect(result.data).toEqual(data);
    });

    it('should save an incident response assessment', () => {
      const data = { incident: 'Ransomware', severity: 'High' };
      const result = saveAssessment('incident-response', data);

      expect(result.type).toBe('incident-response');
      expect(result.name).toMatch(/Incident Response Assessment/);
      expect(result.data).toEqual(data);
    });

    it('should generate unique IDs for each assessment', () => {
      const data = { test: 'data' };
      const result1 = saveAssessment('compliance', data);
      const result2 = saveAssessment('compliance', data);

      expect(result1.id).not.toBe(result2.id);
    });
  });

  describe('loadAssessment', () => {
    it('should load a saved assessment by ID', () => {
      const data = { test: 'data' };
      const saved = saveAssessment('compliance', data, 'Load Test');
      
      const loaded = loadAssessment('compliance', saved.id);
      
      expect(loaded).not.toBeNull();
      expect(loaded?.id).toBe(saved.id);
      expect(loaded?.name).toBe('Load Test');
      expect(loaded?.data).toEqual(data);
    });

    it('should return null for non-existent ID', () => {
      const loaded = loadAssessment('compliance', 'non-existent-id');
      expect(loaded).toBeNull();
    });

    it('should load from correct type', () => {
      const complianceData = { type: 'compliance' };
      const vendorData = { type: 'vendor' };
      
      const compliance = saveAssessment('compliance', complianceData);
      saveAssessment('vendor-risk', vendorData);
      
      const loaded = loadAssessment('compliance', compliance.id);
      expect(loaded?.data).toEqual(complianceData);
    });
  });

  describe('getSavedAssessments', () => {
    it('should return empty array when no assessments exist', () => {
      const assessments = getSavedAssessments('compliance');
      expect(assessments).toEqual([]);
    });

    it('should return all saved assessments of a type', () => {
      saveAssessment('compliance', { data: '1' });
      saveAssessment('compliance', { data: '2' });
      saveAssessment('vendor-risk', { data: '3' });
      
      const complianceAssessments = getSavedAssessments('compliance');
      const vendorAssessments = getSavedAssessments('vendor-risk');
      
      expect(complianceAssessments).toHaveLength(2);
      expect(vendorAssessments).toHaveLength(1);
    });
  });

  describe('deleteAssessment', () => {
    it('should delete an assessment by ID', () => {
      const saved = saveAssessment('compliance', { test: 'data' });
      
      const deleted = deleteAssessment('compliance', saved.id);
      expect(deleted).toBe(true);
      
      const loaded = loadAssessment('compliance', saved.id);
      expect(loaded).toBeNull();
    });

    it('should only delete from correct type', () => {
      const compliance = saveAssessment('compliance', { data: '1' });
      const vendor = saveAssessment('vendor-risk', { data: '2' });
      
      deleteAssessment('compliance', compliance.id);
      
      expect(loadAssessment('compliance', compliance.id)).toBeNull();
      expect(loadAssessment('vendor-risk', vendor.id)).not.toBeNull();
    });

    it('should return true even if assessment does not exist', () => {
      const result = deleteAssessment('compliance', 'non-existent');
      expect(result).toBe(true);
    });
  });

  describe('updateAssessment', () => {
    it('should update assessment data', () => {
      const saved = saveAssessment('compliance', { score: 50 });
      
      const updated = updateAssessment('compliance', saved.id, { score: 75 });
      expect(updated).toBe(true);
      
      const loaded = loadAssessment('compliance', saved.id);
      expect(loaded?.data.score).toBe(75);
    });

    it('should update assessment name', () => {
      const saved = saveAssessment('compliance', { data: 'test' }, 'Old Name');
      
      updateAssessment('compliance', saved.id, { data: 'test' }, 'New Name');
      
      const loaded = loadAssessment('compliance', saved.id);
      expect(loaded?.name).toBe('New Name');
    });

    it('should update lastModified timestamp', () => {
      const saved = saveAssessment('compliance', { data: 'test' });
      const originalModified = saved.lastModified;
      
      // Wait a bit to ensure different timestamp
      setTimeout(() => {
        updateAssessment('compliance', saved.id, { data: 'updated' });
        
        const loaded = loadAssessment('compliance', saved.id);
        expect(loaded?.lastModified).not.toBe(originalModified);
      }, 10);
    });

    it('should return false for non-existent ID', () => {
      const result = updateAssessment('compliance', 'non-existent', {});
      expect(result).toBe(false);
    });
  });

  describe('getStorageInfo', () => {
    it('should return zero counts when empty', () => {
      const info = getStorageInfo();
      
      expect(info.totalAssessments).toBe(0);
      expect(info.complianceCount).toBe(0);
      expect(info.vendorRiskCount).toBe(0);
      expect(info.incidentResponseCount).toBe(0);
    });

    it('should return correct counts', () => {
      saveAssessment('compliance', { data: '1' });
      saveAssessment('compliance', { data: '2' });
      saveAssessment('vendor-risk', { data: '3' });
      saveAssessment('incident-response', { data: '4' });
      
      const info = getStorageInfo();
      
      expect(info.totalAssessments).toBe(4);
      expect(info.complianceCount).toBe(2);
      expect(info.vendorRiskCount).toBe(1);
      expect(info.incidentResponseCount).toBe(1);
    });

    it('should estimate storage size', () => {
      saveAssessment('compliance', { data: 'test' });
      
      const info = getStorageInfo();
      expect(info.estimatedSize).toMatch(/KB|MB/);
    });
  });

  describe('clearAllAssessments', () => {
    it('should clear all assessments when no type specified', () => {
      saveAssessment('compliance', { data: '1' });
      saveAssessment('vendor-risk', { data: '2' });
      saveAssessment('incident-response', { data: '3' });
      
      clearAllAssessments();
      
      expect(getSavedAssessments('compliance')).toHaveLength(0);
      expect(getSavedAssessments('vendor-risk')).toHaveLength(0);
      expect(getSavedAssessments('incident-response')).toHaveLength(0);
    });

    it('should clear only specified type', () => {
      saveAssessment('compliance', { data: '1' });
      saveAssessment('vendor-risk', { data: '2' });
      
      clearAllAssessments('compliance');
      
      expect(getSavedAssessments('compliance')).toHaveLength(0);
      expect(getSavedAssessments('vendor-risk')).toHaveLength(1);
    });
  });
});

