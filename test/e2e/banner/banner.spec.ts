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

test('Banner - two buttons', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoWithTwoButtonsPage();
  await expect(bannerPage.container).toHaveScreenshot('banner-two-buttons.png');
});

test('Fixed Banner', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerPage();
  await expect(bannerPage.container).toHaveScreenshot('fixed-banner.png');
});

test('Fixed Banner - success', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerPage('args=status:success');
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-success.png'
  );
});

test('Fixed Banner - info', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerPage('args=status:info');
  await expect(bannerPage.container).toHaveScreenshot('fixed-banner-info.png');
});

test('Fixed Banner - warning', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerPage('args=status:warning');
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-warning.png'
  );
});

test('Fixed Banner - critical', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerPage('args=status:critical');
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-critical.png'
  );
});

test('Fixed Banner - no icon', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerPage('args=showIcon:false');
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-no-icon.png'
  );
});

test('Fixed Banner - non dismissable', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerPage('args=dismissable:false');
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-non-dismissable.png'
  );
});

test('Fixed Banner - no icon and non dismissable', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerPage('args=dismissable:false;showIcon:false');
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-no-icon-and-non-dismissable.png'
  );
});

test('Fixed Banner - with buttons', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerWithButtonsPage();
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-with-buttons.png'
  );
});

test('Fixed Banner - with buttons - no icon', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerWithButtonsPage('args=showIcon:false');
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-with-buttons-no-icon.png'
  );
});

test('Fixed Banner - with buttons - non dismissable', async ({ page }) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerWithButtonsPage('args=dismissable:false');
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-with-buttons-non-dismissable.png'
  );
});

test('Fixed Banner - with buttons - no icon and non dismissable', async ({
  page,
}) => {
  const bannerPage = new BannerPage(page);
  await bannerPage.gotoFixedBannerWithButtonsPage(
    'args=dismissable:false;showIcon:false'
  );
  await expect(bannerPage.container).toHaveScreenshot(
    'fixed-banner-with-buttons-no-icon-and-non-dismissable.png'
  );
});
