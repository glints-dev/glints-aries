import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-card--interactive');

test('Card', async ({ page }) => {
  const cardPage = getPage(page);
  await cardPage.goto();
  await expect(cardPage.container).toHaveScreenshot('card.png');
});

test('Card - without subheading', async ({ page }) => {
  const cardPage = getPage(page);
  await cardPage.goto('args=subheading:');
  await expect(cardPage.container).toHaveScreenshot('card-no-subheading.png');
});

test('Card - without heading', async ({ page }) => {
  const cardPage = getPage(page);
  await cardPage.goto('args=heading:');
  await expect(cardPage.container).toHaveScreenshot('card-no-heading.png');
});

test('Card - without header', async ({ page }) => {
  const cardPage = getPage(page);
  await cardPage.goto('args=heading:;subheading:');
  await expect(cardPage.container).toHaveScreenshot('card-no-header.png');
});

test('Card - actions align left', async ({ page }) => {
  const cardPage = getPage(page);
  await cardPage.goto('args=actionsAlignment:left');
  await expect(cardPage.container).toHaveScreenshot(
    'card-actions-align-left.png'
  );
});

test('Card - without action', async ({ page }) => {
  const cardPage = new StoryBookPage(page, '?path=/story/next-card--no-action');
  await cardPage.goto();
  await expect(cardPage.container).toHaveScreenshot('card-no-action.png');
});

test('Card - primary action only', async ({ page }) => {
  const cardPage = new StoryBookPage(
    page,
    '?path=/story/next-card--primary-action-only'
  );
  await cardPage.goto();
  await expect(cardPage.container).toHaveScreenshot(
    'card-primary-action-only.png'
  );
});

test('Card - secondary action only', async ({ page }) => {
  const cardPage = new StoryBookPage(
    page,
    '?path=/story/next-card--secondary-action-only'
  );
  await cardPage.goto();
  await expect(cardPage.container).toHaveScreenshot(
    'card-secondary-action-only.png'
  );
});
