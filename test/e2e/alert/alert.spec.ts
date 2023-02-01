import { test, expect } from '@playwright/test';
import { AlertPage } from './alertPage';

test('Alert', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.triggerAlert();
  await expect(alertPage.canvas).toHaveScreenshot('alert.png');
});

test('Alert - success', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.triggerAlert('args=status:success');
  await expect(alertPage.canvas).toHaveScreenshot('alert-success.png');
});

test('Alert - warning', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.triggerAlert('args=status:warning');
  await expect(alertPage.canvas).toHaveScreenshot('alert-warning.png');
});

test('Alert - info', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.triggerAlert('args=status:info');
  await expect(alertPage.canvas).toHaveScreenshot('alert-info.png');
});

test('Alert - error', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.triggerAlert('args=status:error');
  await expect(alertPage.canvas).toHaveScreenshot('alert-error.png');
});

test('Alert - without title', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.triggerAlert('args=title:');
  await expect(alertPage.canvas).toHaveScreenshot('alert-no-title.png');
});

test('Alert - without children', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.triggerAlert('args=children:');
  await expect(alertPage.canvas).toHaveScreenshot('alert-no-children.png');
});

test('Alert - without title and children', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.triggerAlert('args=title:;children:');
  await expect(alertPage.canvas).toHaveScreenshot(
    'alert-no-title-no-children.png'
  );
});

test('Alert - with provider', async ({ page }) => {
  const alertPage = new AlertPage(page);

  await alertPage.gotoWithProviderPage();
  await alertPage.triggerAlert();
  await expect(alertPage.canvas).toHaveScreenshot('alert-with-provider.png');
});
