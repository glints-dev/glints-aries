import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-skeletontext--default');

const getWithCustomRowsPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-skeletontext--with-custom-rows');

test('SkeletonText - default', async ({ page }) => {
  const skeletonTextPage = getPage(page);
  await skeletonTextPage.goto();
  await expect(skeletonTextPage.container).toHaveScreenshot(
    'skeleton-text.png'
  );
});

test('SkeletonText - custom rows', async ({ page }) => {
  const skeletonTextPage = getWithCustomRowsPage(page);
  await skeletonTextPage.goto();

  await expect(skeletonTextPage.container).toHaveScreenshot(
    'skeleton-text-custom-rows.png'
  );
});
