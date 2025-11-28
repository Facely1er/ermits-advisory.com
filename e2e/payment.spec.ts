import { test, expect } from '@playwright/test';

test.describe('Payment Flow E2E Tests', () => {
  test('should display pricing on premium page', async ({ page }) => {
    await page.goto('/steel/premium');
    
    // Check for price display
    const priceText = page.getByText(/\$29/);
    await expect(priceText).toBeVisible();
  });

  test('should have purchase button', async ({ page }) => {
    await page.goto('/steel/premium');
    
    // Look for buy/purchase button
    const buyButton = page.getByRole('button', { name: /buy|purchase/i });
    await expect(buyButton.first()).toBeVisible();
  });

  test('should display vCISO kit pricing', async ({ page }) => {
    await page.goto('/vciso-kit');
    
    // Check for vCISO price
    const priceText = page.getByText(/\$299/);
    await expect(priceText).toBeVisible();
  });

  test('should navigate to dashboard template page', async ({ page }) => {
    await page.goto('/dashboard-template');
    
    await expect(page).toHaveURL(/dashboard-template/);
    
    // Check for price
    const priceText = page.getByText(/\$79/);
    await expect(priceText).toBeVisible();
  });

  test('should show features for each product', async ({ page }) => {
    await page.goto('/steel/premium');
    
    // Check for features list
    const features = page.getByText(/feature|include|benefit/i);
    await expect(features.first()).toBeVisible();
  });
});

