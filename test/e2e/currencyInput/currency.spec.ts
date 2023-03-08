import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-currencyinput--interactive');

test('Currency', async ({ page }) => {
  const currencyPage = getPage(page);
  await currencyPage.goto();
  await expect(currencyPage.container).toHaveScreenshot('currency.png');

  const textBox = page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByRole('textbox');

  await textBox.clear();
  await textBox.type('2000');
  await expect(currencyPage.container).toHaveScreenshot('currency-changed.png');
});

test('Currency - disabled', async ({ page }) => {
  const currencyPage = getPage(page);
  await currencyPage.goto('args=disabled:true');
  await expect(currencyPage.container).toHaveScreenshot(
    'currency-disabled.png'
  );
});

test('Currency - locale', async ({ page }) => {
  const currencyPage = getPage(page);
  await currencyPage.goto('args=locale:id');
  await expect(currencyPage.container).toHaveScreenshot('currency-id.png');
});

test('Currency - long currency prefix', async ({ page }) => {
  const currencyPage = getPage(page);
  await currencyPage.goto('args=prefix:CAD');
  await expect(currencyPage.container).toHaveScreenshot(
    'currency-long-prefix.png'
  );
});
