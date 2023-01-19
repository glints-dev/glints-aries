import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-tag--interactive');

test('tag - standard size', async ({ page }) => {
  const tagPage = getPage(page);
  await tagPage.goto();
  await expect(tagPage.container).toHaveScreenshot('tag-standard-size.png');
});

test('tag - small size', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const tagPage = getPage(page);
  await tagPage.goto();
  await expect(tagPage.container).toHaveScreenshot('tag-small-size.png');
});
