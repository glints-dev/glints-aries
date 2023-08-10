import { StoryBookPage } from '../storybookPage';
import { Page, test, expect } from '@playwright/test';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-radiobutton--interactive');

// test('default', async ({ page }) => {
//   const radioButtonPage = getPage(page);
//   await radioButtonPage.goto();
//   await expect(radioButtonPage.container).toHaveScreenshot('radio-button.png');
// });

test('checked', async ({ page }) => {
  const radioButtonPage = getPage(page);
  await radioButtonPage.goto('args=checked:true');
  await expect(radioButtonPage.container).toHaveScreenshot(
    'radio-button-checked.png'
  );
});

test('disabled', async ({ page }) => {
  const radioButtonPage = getPage(page);
  await radioButtonPage.goto('args=disabled:true');
  await expect(radioButtonPage.container).toHaveScreenshot(
    'radio-button-disabled.png'
  );
});

test('disabled checked', async ({ page }) => {
  const radioButtonPage = getPage(page);
  await radioButtonPage.goto('args=disabled:true;checked:true');
  await expect(radioButtonPage.container).toHaveScreenshot(
    'radio-button-disabled-checked.png'
  );
});

test('default - mobile', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const radioButtonPage = getPage(page);
  await radioButtonPage.goto();
  await expect(radioButtonPage.container).toHaveScreenshot(
    'radio-button-mobile.png'
  );
});

test('checked - mobile', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const radioButtonPage = getPage(page);
  await radioButtonPage.goto('args=checked:true');
  await expect(radioButtonPage.container).toHaveScreenshot(
    'radio-button-mobile-checked.png'
  );
});

test('disabled - mobile', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const radioButtonPage = getPage(page);
  await radioButtonPage.goto('args=disabled:true');
  await expect(radioButtonPage.container).toHaveScreenshot(
    'radio-button-mobile-disabled.png'
  );
});

test('disabled checked - mobile', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const radioButtonPage = getPage(page);
  await radioButtonPage.goto('args=disabled:true;checked:true');
  await expect(radioButtonPage.container).toHaveScreenshot(
    'radio-button-mobile-disabled-checked.png'
  );
});
