import { test, expect } from '@playwright/test';
import { EmptyStatePage } from './emptyStatePage';

test('EmptyState - most information', async ({ page }) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.goto();

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-most-info.png'
  );
});

test('EmptyState - most information with basic button only', async ({
  page,
}) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.gotoWithBasicButtonOnlyPage();

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-most-info-basic-button.png'
  );
});

test('EmptyState - least information', async ({ page }) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.gotoWithLeastInfoPage();

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-least-info.png'
  );
});

test('EmptyState - with primary button only', async ({ page }) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.gotoWithLeastInfoPage(
    'args=description:Lorem%20ipsum%20dolor%20sit%20amet'
  );

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-with-primary-button.png'
  );
});

test('EmptyState - full width', async ({ page }) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.goto();

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-full-width.png'
  );
});

test('EmptyState - fixed width', async ({ page }) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.goto('args=fullWidth:false');

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-fixed-width.png'
  );
});

test('EmptyState - empty carton image', async ({ page }) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.gotoWithLeastInfoPage('args=imageName:empty-carton');

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-empty-carton.png'
  );
});

test('EmptyState - empty mailbox image', async ({ page }) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.gotoWithLeastInfoPage('args=imageName:empty-mailbox');

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-empty-mailbox.png'
  );
});

test('EmptyState - safety cone image', async ({ page }) => {
  const emptyStatePage = new EmptyStatePage(page);
  await emptyStatePage.gotoWithLeastInfoPage('args=imageName:safety-cone');

  await expect(emptyStatePage.container).toHaveScreenshot(
    'emptyState-safety-cone.png'
  );
});
