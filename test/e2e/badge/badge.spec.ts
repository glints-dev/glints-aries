import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-badge--interactive');

test.describe('Badge - standard size', () => {
  test('default', async ({ page }) => {
    const badgePage = getPage(page);
    await badgePage.goto();
    await expect(badgePage.container).toHaveScreenshot('badge.png');
  });

  test('information', async ({ page }) => {
    const badgePage = getPage(page);
    await badgePage.goto('args=status:informational');
    await expect(badgePage.container).toHaveScreenshot('badge-information.png');
  });

  test('success', async ({ page }) => {
    const badgePage = getPage(page);
    await badgePage.goto('args=status:success');
    await expect(badgePage.container).toHaveScreenshot('badge-success.png');
  });

  test('warning', async ({ page }) => {
    const badgePage = getPage(page);
    await badgePage.goto('args=status:warning');
    await expect(badgePage.container).toHaveScreenshot('badge-warning.png');
  });

  test('critical', async ({ page }) => {
    const badgePage = getPage(page);
    await badgePage.goto('args=status:critical');
    await expect(badgePage.container).toHaveScreenshot('badge-critical.png');
  });

  test('promotion', async ({ page }) => {
    const badgePage = getPage(page);
    await badgePage.goto('args=status:promotion');
    await expect(badgePage.container).toHaveScreenshot('badge-promotion.png');
  });

  test('new', async ({ page }) => {
    const badgePage = getPage(page);
    await badgePage.goto('args=status:new');
    await expect(badgePage.container).toHaveScreenshot('badge-new.png');
  });
});

test.describe('Badge - small size', () => {
  test('default - small', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const badgePage = getPage(page);
    await badgePage.goto();
    await expect(badgePage.container).toHaveScreenshot('badge-small.png');
  });

  test('information - small', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const badgePage = getPage(page);
    await badgePage.goto('args=status:informational');
    await expect(badgePage.container).toHaveScreenshot(
      'badge-information-small.png'
    );
  });

  test('success - small', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const badgePage = getPage(page);
    await badgePage.goto('args=status:success');
    await expect(badgePage.container).toHaveScreenshot(
      'badge-success-small.png'
    );
  });

  test('warning - small', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const badgePage = getPage(page);
    await badgePage.goto('args=status:warning');
    await expect(badgePage.container).toHaveScreenshot(
      'badge-warning-small.png'
    );
  });

  test('critical - small', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const badgePage = getPage(page);
    await badgePage.goto('args=status:critical');
    await expect(badgePage.container).toHaveScreenshot(
      'badge-critical-small.png'
    );
  });

  test('promotion - small', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const badgePage = getPage(page);
    await badgePage.goto('args=status:promotion');
    await expect(badgePage.container).toHaveScreenshot(
      'badge-promotion-small.png'
    );
  });

  test('new - small', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const badgePage = getPage(page);
    await badgePage.goto('args=status:new');
    await expect(badgePage.container).toHaveScreenshot('badge-new-small.png');
  });
});
