import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-collapse--interactive');

test('Collapse', async ({ page }) => {
  const collapsePage = getPage(page);
  await collapsePage.goto();
  await expect(collapsePage.container).toHaveScreenshot('collapse.png');
});

test('Collapse - no border', async ({ page }) => {
  const collapsePage = getPage(page);
  await collapsePage.goto('args=hasBorder:false');
  await expect(collapsePage.container).toHaveScreenshot(
    'collapse-no-border.png'
  );
});

test('Collapse - no indicator', async ({ page }) => {
  const collapsePage = getPage(page);
  await collapsePage.goto('args=indicator:none');
  await expect(collapsePage.container).toHaveScreenshot(
    'collapse-no-indicator.png'
  );
});

test('Collapse - right indicator', async ({ page }) => {
  const collapsePage = getPage(page);
  await collapsePage.goto('args=indicator:right');
  await expect(collapsePage.container).toHaveScreenshot(
    'collapse-right-indicator.png'
  );
});

test('Collapse - small screen', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const collapsePage = getPage(page);
  await collapsePage.goto();
  await expect(collapsePage.container).toHaveScreenshot(
    'collapse-small-screen.png'
  );
});
