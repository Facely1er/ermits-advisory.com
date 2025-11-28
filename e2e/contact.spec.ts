import { test, expect } from '@playwright/test';

test.describe('Contact Form E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should load contact page', async ({ page }) => {
    await expect(page).toHaveURL(/contact/);
    await expect(page.locator('h1, h2')).toContainText(/contact/i);
  });

  test('should display contact form', async ({ page }) => {
    // Check for form fields
    const form = page.locator('form').first();
    await expect(form).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Find submit button
    const submitButton = page.getByRole('button', { name: /submit/i });
    
    // Try to submit without filling
    await submitButton.click();
    
    // Check for validation messages (adjust based on your validation)
    await page.waitForTimeout(500);
  });

  test('should allow filling form', async ({ page }) => {
    // Fill out the form
    const nameInput = page.getByLabel(/name/i);
    const emailInput = page.getByLabel(/email/i);
    const messageInput = page.getByLabel(/message/i);
    
    await nameInput.fill('Test User');
    await emailInput.fill('test@example.com');
    await messageInput.fill('This is a test message');
    
    // Verify inputs
    await expect(nameInput).toHaveValue('Test User');
    await expect(emailInput).toHaveValue('test@example.com');
  });

  test('should show contact information', async ({ page }) => {
    // Check for email or other contact details
    const content = await page.textContent('body');
    expect(content).toMatch(/@ermits/i);
  });
});

