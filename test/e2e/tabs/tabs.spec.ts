import { test, expect } from '@playwright/test';
import { TabsPage } from './tabsPage';

test('Tabs', async ({ page }) => {
  const tabsPage = new TabsPage(page);
  await tabsPage.goto();
  await expect(tabsPage.container).toHaveScreenshot('tabs.png');

  await tabsPage.tabHeaders.last().hover();
  await expect(tabsPage.container).toHaveScreenshot('tabs-hover.png');

  await tabsPage.tabHeaders.last().click();
  await expect(tabsPage.container).toHaveScreenshot('tabs-changed.png');
});

test('Tabs - fitted', async ({ page }) => {
  const tabsPage = new TabsPage(page);
  await tabsPage.goto('args=fitted:true');

  await expect(tabsPage.container).toHaveScreenshot('tabs-fitted.png');
});

test('Tabs - overflow', async ({ page }) => {
  const tabsPage = new TabsPage(page);
  await tabsPage.gotoOverflowTabsPage();

  await expect(tabsPage.container).toHaveScreenshot('tabs-overflow.png');

  await tabsPage.tabHeaders.nth(10).scrollIntoViewIfNeeded();
  await expect(tabsPage.container).toHaveScreenshot('tabs-scroll-center.png');

  await tabsPage.tabHeaders.last().scrollIntoViewIfNeeded();
  await expect(tabsPage.container).toHaveScreenshot('tabs-scroll-end.png');

  await tabsPage.tabHeaders.first().scrollIntoViewIfNeeded();
  await expect(tabsPage.container).toHaveScreenshot('tabs-scroll-start.png');
});

test('Tabs - disabled', async ({ page }) => {
  const tabsPage = new TabsPage(page);
  await tabsPage.gotoDisabledTabsPage();

  await expect(tabsPage.container).toHaveScreenshot('tabs-disabled.png');

  await tabsPage.tabHeaders.last().hover();
  await expect(tabsPage.container).toHaveScreenshot(
    'tabs-disabled-unchanged.png'
  );
});

test('Tabs - With Custom Wrapper', async ({ page }) => {
  const tabsPage = new TabsPage(page);
  await tabsPage.gotoWithCustomWrapperTabsPage();

  await expect(tabsPage.container).toHaveScreenshot(
    'tabs-with-custom-wrapper.png'
  );

  await tabsPage.tabHeaders.nth(1).hover();
  await expect(tabsPage.container).toHaveScreenshot(
    'tabs-with-custom-wrapper-tooltip.png'
  );

  await tabsPage.tabHeaders.nth(2).hover();
  await expect(tabsPage.container).toHaveScreenshot(
    'tabs-with-custom-wrapper-tooltip-disabled.png'
  );
});
