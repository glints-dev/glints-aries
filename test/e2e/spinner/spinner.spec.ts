import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-spinner--default');

const getLoadingWithLabelPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-spinner--loading-with-label');

const getProcessingWithLabelPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-spinner--processing-with-label');

test('Spinner - Loading large', async ({ page }) => {
  const spinnerPage = getPage(page);
  await spinnerPage.goto();
  await expect(spinnerPage.container).toHaveScreenshot(
    'spinner-loading-large.png'
  );
});

test('Spinner - Loading large with label', async ({ page }) => {
  const cardPage = getLoadingWithLabelPage(page);
  await cardPage.goto();
  await expect(cardPage.container).toHaveScreenshot(
    'spinner-loading-large-with-label.png'
  );
});

test('Spinner - Loading small', async ({ page }) => {
  const spinnerPage = getPage(page);
  await spinnerPage.goto('args=size:small');
  await expect(spinnerPage.container).toHaveScreenshot(
    'spinner-loading-small.png'
  );
});

test('Spinner - Loading small with label', async ({ page }) => {
  const cardPage = getLoadingWithLabelPage(page);
  await cardPage.goto('args=size:small');
  await expect(cardPage.container).toHaveScreenshot(
    'spinner-loading-small-with-label.png'
  );
});

test('Spinner - Processing large', async ({ page }) => {
  const spinnerPage = getPage(page);
  await spinnerPage.goto('args=variant:processing');
  await expect(spinnerPage.container).toHaveScreenshot(
    'spinner-processing-large.png'
  );
});

test('Spinner - Processing large with label', async ({ page }) => {
  const cardPage = getProcessingWithLabelPage(page);
  await cardPage.goto();
  await expect(cardPage.container).toHaveScreenshot(
    'spinner-processing-large-with-label.png'
  );
});

test('Spinner - Processing small', async ({ page }) => {
  const spinnerPage = getPage(page);
  await spinnerPage.goto('args=size:small;variant:processing');
  await expect(spinnerPage.container).toHaveScreenshot(
    'spinner-processing-small.png'
  );
});

test('Spinner - Processing small with label', async ({ page }) => {
  const cardPage = getProcessingWithLabelPage(page);
  await cardPage.goto('args=size:small;variant:processing');
  await expect(cardPage.container).toHaveScreenshot(
    'spinner-processing-small-with-label.png'
  );
});
