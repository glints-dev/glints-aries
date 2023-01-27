import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-tag--default');

const getRemoveableTagPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-tag--removeable');

test.describe('default tag', () => {
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
});

test.describe('removeable tag', () => {
  test('removeable tag - standard size', async ({ page }) => {
    const tagPage = getRemoveableTagPage(page);
    await tagPage.goto();
    await expect(tagPage.container).toHaveScreenshot(
      'tag-removeable-standard-size.png'
    );
  });

  test('removeable tag - small size', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const tagPage = getRemoveableTagPage(page);
    await tagPage.goto();
    await expect(tagPage.container).toHaveScreenshot(
      'tag-removeable-small-size.png'
    );
  });
});
