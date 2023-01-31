import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-badge--interactive');

test('Badge - default', async ({ page }) => {
  const badgePage = getPage(page);
  await badgePage.goto();
  await expect(badgePage.container).toHaveScreenshot('badge.png');
});

test('Badge - information', async ({ page }) => {
  const badgePage = getPage(page);
  await badgePage.goto('args=status:informational');
  await expect(badgePage.container).toHaveScreenshot('badge-information.png');
});

test('Badge - success', async ({ page }) => {
  const badgePage = getPage(page);
  await badgePage.goto('args=status:success');
  await expect(badgePage.container).toHaveScreenshot('badge-success.png');
});

test('Badge - warning', async ({ page }) => {
  const badgePage = getPage(page);
  await badgePage.goto('args=status:warning');
  await expect(badgePage.container).toHaveScreenshot('badge-warning.png');
});

test('Badge - critical', async ({ page }) => {
  const badgePage = getPage(page);
  await badgePage.goto('args=status:critical');
  await expect(badgePage.container).toHaveScreenshot('badge-critical.png');
});

test('Badge - promotion', async ({ page }) => {
  const badgePage = getPage(page);
  await badgePage.goto('args=status:promotion');
  await expect(badgePage.container).toHaveScreenshot('badge-promotion.png');
});

test('Badge - new', async ({ page }) => {
  const badgePage = getPage(page);
  await badgePage.goto('args=status:new');
  await expect(badgePage.container).toHaveScreenshot('badge-new.png');
});

test('Badge - default - small', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const badgePage = getPage(page);
  await badgePage.goto();
  await expect(badgePage.container).toHaveScreenshot('badge-small.png');
});

test('Badge - information - small', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const badgePage = getPage(page);
  await badgePage.goto('args=status:informational');
  await expect(badgePage.container).toHaveScreenshot(
    'badge-information-small.png'
  );
});

test('Badge - success - small', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const badgePage = getPage(page);
  await badgePage.goto('args=status:success');
  await expect(badgePage.container).toHaveScreenshot('badge-success-small.png');
});

test('Badge - warning - small', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const badgePage = getPage(page);
  await badgePage.goto('args=status:warning');
  await expect(badgePage.container).toHaveScreenshot('badge-warning-small.png');
});

test('Badge - critical - small', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const badgePage = getPage(page);
  await badgePage.goto('args=status:critical');
  await expect(badgePage.container).toHaveScreenshot(
    'badge-critical-small.png'
  );
});

test('Badge - promotion - small', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const badgePage = getPage(page);
  await badgePage.goto('args=status:promotion');
  await expect(badgePage.container).toHaveScreenshot(
    'badge-promotion-small.png'
  );
});

test('Badge - new - small', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const badgePage = getPage(page);
  await badgePage.goto('args=status:new');
  await expect(badgePage.container).toHaveScreenshot('badge-new-small.png');
});
