import { test, expect } from '@playwright/test';

test.describe('Navigation E2E Tests', () => {
  test('should navigate between main pages', async ({ page }) => {
    await page.goto('/');
    
    // Test home navigation
    await expect(page).toHaveURL('/');
    
    // Navigate to services
    const servicesLink = page.getByRole('link', { name: /service/i });
    if (await servicesLink.count() > 0) {
      await servicesLink.first().click();
      await expect(page).toHaveURL(/service/);
    }
  });

  test('should handle back button', async ({ page }) => {
    await page.goto('/');
    await page.goto('/steel');
    
    // Go back
    await page.goBack();
    await expect(page).toHaveURL('/');
  });

  test('should show footer links', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check for footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should navigate to privacy policy', async ({ page }) => {
    await page.goto('/');
    
    // Look for privacy link
    const privacyLink = page.getByRole('link', { name: /privacy/i });
    if (await privacyLink.count() > 0) {
      await privacyLink.first().click();
      await expect(page).toHaveURL(/privacy/);
    }
  });

  test('should navigate to terms of service', async ({ page }) => {
    await page.goto('/');
    
    // Look for terms link
    const termsLink = page.getByRole('link', { name: /terms/i });
    if (await termsLink.count() > 0) {
      await termsLink.first().click();
      await expect(page).toHaveURL(/terms/);
    }
  });

  test('should handle 404 page', async ({ page }) => {
    await page.goto('/non-existent-page');
    
    // Check for 404 content
    const notFoundText = page.getByText(/404|not found/i);
    await expect(notFoundText).toBeVisible();
  });
});

