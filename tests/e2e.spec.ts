import { test, expect } from '@playwright/test';

// `test.describe` groups testing under a single suite
test.describe('Portfolio End-to-End Tests', () => {

  // `test.beforeEach` runs before every test in this block
  test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('http://localhost:3000');
  });

  test('should load the homepage and display key elements', async ({ page }) => {
    // 1. ASSERTIONS & LOCATORS: Get by role
    // Check if your name is clearly visible in the main h1 heading
    const nameHeading = page.getByRole('heading', { name: /Amirreza Jolani Mameghani/i, level: 1 });
    await expect(nameHeading).toBeVisible();

    // 2. LOCATOR: Get by Role (Best practice for accessibility)
    // Find the link that points to the Resume/CV download
    const cvButton = page.getByRole('link', { name: /Download CV/i });
    await expect(cvButton).toBeVisible();

    // 3. ASSERTION: Check attributes
    // Ensure the CV button opens in a new tab
    await expect(cvButton).toHaveAttribute('target', '_blank');

    // 4. LOCATOR: Using standard CSS Selectors
    // Check if the "Available for Work" badge exists
    const availableBadge = page.locator('text=Available for Work');
    await expect(availableBadge).toBeVisible();
  });

  test('should interact with the Theme Switcher', async ({ page }) => {
    // Wait for the theme switcher to load (it might have an animation delay from framer-motion)
    const themeLabel = page.getByText('🎨 Theme');
    await expect(themeLabel).toBeVisible({ timeout: 5000 });

    // Assuming the first theme button corresponds to a specific theme color
    // Find all buttons inside the theme switcher container
    const themeButtons = page.locator('.flex.items-center.gap-2 > button');
    
    if (await themeButtons.count() > 1) {
      // 5. ACTION: Hover
      // Hover over the second theme button to test interaction
      await themeButtons.nth(1).hover();
      
      // 6. ACTION: Click
      // Click the second theme button
      await themeButtons.nth(1).click();

      // Ensure the theme name text updates
      // This is a generic check, you can refine it based on exact theme names
      const themeText = page.locator('span.text-xs.font-medium.text-white\\/50');
      await expect(themeText).not.toBeEmpty();
    }
  });

  test('should smoothly scroll to the projects section', async ({ page }) => {
    // 7. ACTION: Real-user simulation
    const workLink = page.getByRole('link', { name: /See My Work/i });
    
    // Check if the link has the anchor `#projects`
    await expect(workLink).toHaveAttribute('href', '#projects');

    // Click it to trigger smooth scrolling
    await workLink.click();

    // 8. ASSERTION: Check URL hash
    // The URL should now end with #projects
    await expect(page).toHaveURL(/.*#projects/);
  });

  test('should verify external social links', async ({ page }) => {
    // Find the GitHub link
    const githubLink = page.getByRole('link', { name: /GitHub/i });
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/AmirrezaJM');

    // Find the LinkedIn link
    const linkedinLink = page.getByRole('link', { name: /LinkedIn/i });
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/amirjm/');
  });

  test('should perform visual viewport checks on mobile', async ({ page }) => {
    // 9. CONFIG: Viewport adjustments within a specific test
    await page.setViewportSize({ width: 375, height: 667 }); // Simulate iPhone 8
    
    // Check if elements stack or hide properly on small screens (e.g. Navigation)
    const nameHeading = page.getByRole('heading', { name: /Amirreza Jolani Mameghani/i, level: 1 });
    await expect(nameHeading).toBeVisible();
  });

  // Example of how you would test a contact form using Playwright
  test.skip('should submit the contact form successfully', async ({ page }) => {
    // This test is skipped using `test.skip` because we don't know the exact structure of your Contact form yet.
    // It shows how you would handle typing and filling out forms.
    
    await page.goto('/#contact'); // Assuming there is a contact section

    // 10. ACTION: Filling inputs
    await page.getByPlaceholder('Enter your name').fill('Test User');
    await page.getByPlaceholder('Enter your email').fill('test@playwright.dev');
    
    // 11. ACTION: Typing with simulated keystrokes
    await page.getByPlaceholder('Your message').pressSequentially('Hello, this is a test message from Playwright.', { delay: 50 });

    // Submit form
    await page.getByRole('button', { name: 'Send Message' }).click();

    // 12. ASSERTION: Awaiting mock responses or success messages
    const successToast = page.getByText('Message sent successfully!');
    await expect(successToast).toBeVisible({ timeout: 10000 });
  });

});
