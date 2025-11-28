import { describe, it, expect } from 'vitest';
import {
  formatNumber,
  formatCurrency,
  formatPercentage,
  formatDate,
  formatRelativeTime,
} from '../formatters';

describe('formatters', () => {
  describe('formatNumber', () => {
    it('should format numbers with thousand separators', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1000000)).toBe('1,000,000');
      expect(formatNumber(1234567)).toBe('1,234,567');
    });

    it('should handle small numbers', () => {
      expect(formatNumber(0)).toBe('0');
      expect(formatNumber(99)).toBe('99');
      expect(formatNumber(999)).toBe('999');
    });

    it('should handle negative numbers', () => {
      expect(formatNumber(-1000)).toBe('-1,000');
      expect(formatNumber(-1234567)).toBe('-1,234,567');
    });
  });

  describe('formatCurrency', () => {
    it('should format USD currency', () => {
      const result = formatCurrency(1000);
      expect(result).toMatch(/1,000/);
    });

    it('should format with no decimal places', () => {
      const result = formatCurrency(29.99);
      expect(result).toMatch(/30/);
    });

    it('should handle zero', () => {
      const result = formatCurrency(0);
      expect(result).toMatch(/0/);
    });

    it('should handle negative values', () => {
      const result = formatCurrency(-100);
      expect(result).toMatch(/-100/);
    });
  });

  describe('formatPercentage', () => {
    it('should format percentages with one decimal', () => {
      expect(formatPercentage(50)).toBe('50.0%');
      expect(formatPercentage(75.5)).toBe('75.5%');
    });

    it('should format with custom decimals', () => {
      expect(formatPercentage(50, 'en-US', 0)).toBe('50%');
      expect(formatPercentage(50.123, 'en-US', 2)).toBe('50.12%');
    });

    it('should handle zero', () => {
      expect(formatPercentage(0)).toBe('0.0%');
    });

    it('should handle 100%', () => {
      expect(formatPercentage(100)).toBe('100.0%');
    });
  });

  describe('formatDate', () => {
    it('should format dates with default options', () => {
      const date = new Date('2024-01-15');
      const result = formatDate(date);
      expect(result).toMatch(/Jan/);
      expect(result).toMatch(/15/);
      expect(result).toMatch(/2024/);
    });

    it('should format dates with custom options', () => {
      const date = new Date('2024-01-15');
      const result = formatDate(date, 'en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      expect(result).toMatch(/January/);
      expect(result).toMatch(/15/);
      expect(result).toMatch(/2024/);
    });
  });

  describe('formatRelativeTime', () => {
    it('should format recent times', () => {
      const now = new Date();
      const fiveSecondsAgo = new Date(now.getTime() - 5000);
      const result = formatRelativeTime(fiveSecondsAgo);
      expect(result).toMatch(/second/i);
    });

    it('should format minutes ago', () => {
      const now = new Date();
      const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
      const result = formatRelativeTime(fiveMinutesAgo);
      expect(result).toMatch(/minute/i);
    });

    it('should format hours ago', () => {
      const now = new Date();
      const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
      const result = formatRelativeTime(twoHoursAgo);
      expect(result).toMatch(/hour/i);
    });

    it('should format days ago', () => {
      const now = new Date();
      const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
      const result = formatRelativeTime(threeDaysAgo);
      expect(result).toMatch(/day/i);
    });
  });
});

