import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-link--default');

test('Link - default', async ({ page }) => {
  const linkPage = getPage(page);
  await linkPage.goto();
  await expect(linkPage.container).toHaveScreenshot('link.png');
});

test('Link - with extenal link', async ({ page }) => {
  const linkPage = getPage(page);
  await linkPage.goto('args=external:true');
  await expect(linkPage.container).toHaveScreenshot('link-external.png');
});

test('Link - without underline', async ({ page }) => {
  const linkPage = getPage(page);
  await linkPage.goto('args=removeUnderline:true');
  await expect(linkPage.container).toHaveScreenshot('link-no-underline.png');
});

test('Link - monochrome', async ({ page }) => {
  const linkPage = new StoryBookPage(
    page,
    '?path=/story/next-link--monochrome'
  );
  await linkPage.goto();
  await expect(linkPage.container).toHaveScreenshot('link-monochrome.png');
});
