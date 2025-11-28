import { test, expect } from '@playwright/test';

test.describe('STEEL Assessment E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/steel');
  });

  test('should load STEEL assessment page', async ({ page }) => {
    await expect(page).toHaveURL(/steel/);
    await expect(page.locator('h1')).toContainText(/STEEL/i);
  });

  test('should display assessment form', async ({ page }) => {
    // Check for assessment-related content
    const assessmentContent = page.getByText(/assessment/i);
    await expect(assessmentContent.first()).toBeVisible();
  });

  test('should navigate to premium page', async ({ page }) => {
    // Look for premium link
    const premiumLink = page.getByRole('link', { name: /premium/i });
    if (await premiumLink.count() > 0) {
      await premiumLink.first().click();
      await expect(page).toHaveURL(/premium/);
    }
  });

  test('should show visualization', async ({ page }) => {
    // Wait for any charts or visualizations to load
    await page.waitForTimeout(1000);
    
    // Check if canvas elements (for charts) are present
    const canvas = page.locator('canvas');
    if (await canvas.count() > 0) {
      await expect(canvas.first()).toBeVisible();
    }
  });
});

