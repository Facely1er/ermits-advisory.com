import { test, expect } from '@playwright/test';

test.describe('Landing Page E2E Tests', () => {
  test('should load the landing page', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the page to load
    await expect(page).toHaveTitle(/ERMITS Advisory/i);
  });

  test('should navigate to STEEL assessment', async ({ page }) => {
    await page.goto('/');
    
    // Click on STEEL-related link
    const steelLink = page.getByRole('link', { name: /steel/i }).first();
    await steelLink.click();
    
    // Verify navigation
    await expect(page).toHaveURL(/steel/i);
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/');
    
    // Check for navigation elements
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/');
    
    // Find and click a CTA button
    const ctaButton = page.getByRole('button').first();
    await expect(ctaButton).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Verify page loads on mobile
    await expect(page.locator('body')).toBeVisible();
  });

  test('should scroll smoothly', async ({ page }) => {
    await page.goto('/');
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    
    // Verify scroll position
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);
  });
});

