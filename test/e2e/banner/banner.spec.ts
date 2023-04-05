import { test, expect } from '@playwright/test';
import { BannerPage } from './bannerPage';

test('Banner', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.goto();
  await expect(bannerPage.container).toHaveScreenshot('banner.png');
});

test('Banner - with button', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoWithButtonsPage();
  await expect(bannerPage.container).toHaveScreenshot(
    'banner-with-buttons.png'
  );
});

test('Banner - with - disabled - button', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoWithButtonsPage('args=buttonDisabled:true');
  await expect(bannerPage.container).toHaveScreenshot(
    'banner-with-disabled-buttons.png'
  );
});

test('Banner - with - loading - button', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoWithButtonsPage('args=buttonLoading:true');
  await expect(bannerPage.container).toHaveScreenshot(
    'banner-with-loading-buttons.png'
  );
});

test('Banner - without title', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.goto('args=title:');
  await expect(bannerPage.container).toHaveScreenshot('banner-no-title.png');
});

test('Banner - with button - without title', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoWithButtonsPage('args=title:');
  await expect(bannerPage.container).toHaveScreenshot(
    'banner-with-buttons-no-title.png'
  );
});

test('Banner - non - dismissable', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.goto('args=dismissable:false');
  await expect(bannerPage.container).toHaveScreenshot(
    'banner-non-dismissable.png'
  );
});

test('Banner - success', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.goto('args=status:success');
  await expect(bannerPage.container).toHaveScreenshot('banner-success.png');
});

test('Banner - info', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.goto('args=status:info');
  await expect(bannerPage.container).toHaveScreenshot('banner-info.png');
});

test('Banner - warning', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.goto('args=status:warning');
  await expect(bannerPage.container).toHaveScreenshot('banner-warning.png');
});

test('Banner - critical', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.goto('args=status:critical');
  await expect(bannerPage.container).toHaveScreenshot('banner-critical.png');
});
