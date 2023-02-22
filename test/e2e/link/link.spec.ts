import { test, expect } from '@playwright/test';
import { LinkPage } from './linkPage';

test('Link - default', async ({ page }) => {
  const linkPage = new LinkPage(page);
  await linkPage.goto();
  await expect(linkPage.container).toHaveScreenshot('link.png');

  await linkPage.link.hover();
  await expect(linkPage.container).toHaveScreenshot('link-default-hover.png');

  await linkPage.page.mouse.down();
  await expect(linkPage.container).toHaveScreenshot('link-default-pressed.png');
});

test('Link - with extenal link', async ({ page }) => {
  const linkPage = new LinkPage(page);
  await linkPage.goto('args=external:true');
  await expect(linkPage.container).toHaveScreenshot('link-external.png');
});

test('Link - without underline', async ({ page }) => {
  const linkPage = new LinkPage(page);
  await linkPage.goto('args=removeUnderline:true');
  await expect(linkPage.container).toHaveScreenshot('link-no-underline.png');
});

test('Link - monochrome', async ({ page }) => {
  const linkPage = new LinkPage(page);
  await linkPage.gotoMonochromePage();
  await expect(linkPage.container).toHaveScreenshot('link-monochrome.png');
});
