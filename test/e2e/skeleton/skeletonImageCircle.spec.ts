import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-skeletonimagecircle--default');

test('SkeletonImageCircle', async ({ page }) => {
  const skeletonImageCirclePage = getPage(page);
  await skeletonImageCirclePage.goto();
  await expect(skeletonImageCirclePage.container).toHaveScreenshot(
    'skeleton-image-circle.png'
  );
});
