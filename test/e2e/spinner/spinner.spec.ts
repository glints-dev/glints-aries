import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-spinner--default');

const getWithLabelPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-spinner--with-label');

test('Spinner - large', async ({ page }) => {
  const spinnerPage = getPage(page);
  await spinnerPage.goto();
  await expect(spinnerPage.container).toHaveScreenshot('spinner-large.png');
});

test('Spinner - large with label', async ({ page }) => {
  const cardPage = getWithLabelPage(page);
  await cardPage.goto();
  await expect(cardPage.container).toHaveScreenshot(
    'spinner-large-with-label.png'
  );
});

test('Spinner - small', async ({ page }) => {
  const spinnerPage = getPage(page);
  await spinnerPage.goto('args=size:small');
  await expect(spinnerPage.container).toHaveScreenshot('spinner-small.png');
});

test('Spinner - small with label', async ({ page }) => {
  const cardPage = getWithLabelPage(page);
  await cardPage.goto('args=size:small');
  await expect(cardPage.container).toHaveScreenshot(
    'spinner-small-with-label.png'
  );
});
