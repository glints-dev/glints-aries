import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-skeletonimagesquare--default');

test('SkeletonImageSquare', async ({ page }) => {
  const skeletonImageSquarePage = getPage(page);
  await skeletonImageSquarePage.goto();
  await expect(skeletonImageSquarePage.container).toHaveScreenshot(
    'skeleton-image-square.png'
  );
});
