import { StoryBookPage } from '../storybookPage';
import { Page, test, expect } from '@playwright/test';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-switch--interactive');

test('default', async ({ page }) => {
  const switchPage = getPage(page);
  await switchPage.goto();
  await expect(switchPage.container).toHaveScreenshot('switch.png');
});

test('checked', async ({ page }) => {
  const switchPage = getPage(page);
  await switchPage.goto('args=checked:true');
  await expect(switchPage.container).toHaveScreenshot('switch-checked.png');
});

test('disabled and unchecked', async ({ page }) => {
  const switchPage = getPage(page);
  await switchPage.goto('args=disabled:true;checked:false');
  await expect(switchPage.container).toHaveScreenshot(
    'switch-disabled-unchecked.png'
  );
});

test('disabled and checked', async ({ page }) => {
  const switchPage = getPage(page);
  await switchPage.goto('args=checked:true;disabled:true');
  await expect(switchPage.container).toHaveScreenshot(
    'switch-disabled-checked.png'
  );
});

test('mobile - default', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const switchPage = getPage(page);
  await switchPage.goto();
  await expect(switchPage.container).toHaveScreenshot('switch-mobile.png');
});

test('mobile - checked', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const switchPage = getPage(page);
  await switchPage.goto('args=checked:true');
  await expect(switchPage.container).toHaveScreenshot(
    'switch-mobile-checked.png'
  );
});

test('mobile - disabled and unchecked', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const switchPage = getPage(page);
  await switchPage.goto('args=disabled:true;checked:false');
  await expect(switchPage.container).toHaveScreenshot(
    'switch-mobile-disabled-unchecked.png'
  );
});

test('mobile - disabled and checked', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const switchPage = getPage(page);
  await switchPage.goto('args=checked:true;disabled:true');
  await expect(switchPage.container).toHaveScreenshot(
    'switch-mobile-disabled-checked.png'
  );
});
