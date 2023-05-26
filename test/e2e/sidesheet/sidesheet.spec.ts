import { test, expect } from '@playwright/test';
import { SidesheetPage } from './sidesheetPage';

test('Sidesheet - default', async ({ page }) => {
  const sidesheetPage = new SidesheetPage(page);

  await sidesheetPage.openSidesheet();
  await expect(sidesheetPage.canvas).toHaveScreenshot('sidesheet-open.png');

  await sidesheetPage.closeSidesheet();
  await expect(sidesheetPage.canvas).toHaveScreenshot('sidesheet-closed.png');
});

test('Sidesheet - no back button', async ({ page }) => {
  const sidesheetPage = new SidesheetPage(page);

  await sidesheetPage.openSidesheet('args=showBackButton:false');
  await expect(sidesheetPage.canvas).toHaveScreenshot(
    'sidesheet-no-back-button.png'
  );
});

test('Sidesheet - no close button', async ({ page }) => {
  const sidesheetPage = new SidesheetPage(page);

  await sidesheetPage.openSidesheet('args=showCloseButton:false');
  await expect(sidesheetPage.canvas).toHaveScreenshot(
    'sidesheet-no-close-button.png'
  );
});

test('Sidesheet - no back and close button', async ({ page }) => {
  const sidesheetPage = new SidesheetPage(page);

  await sidesheetPage.openSidesheet(
    'args=showBackButton:false;showCloseButton:false'
  );
  await expect(sidesheetPage.canvas).toHaveScreenshot(
    'sidesheet-no-back-and-close-button.png'
  );
});

test('Sidesheet - no hr and back button, with tabs', async ({ page }) => {
  const sidesheetPage = new SidesheetPage(page);

  await sidesheetPage.gotoWithTabsPage();
  await sidesheetPage.openSidesheet();
  await expect(sidesheetPage.canvas).toHaveScreenshot(
    'sidesheet-with-tabs.png'
  );
});
