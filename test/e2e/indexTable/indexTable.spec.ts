import { test, expect } from '@playwright/test';
import { IndexTablePage } from './indexTablePage';

test('IndexTable', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);
  await indexTablePage.goto();

  await expect(indexTablePage.canvas).toHaveScreenshot('indexTable.png');

  await indexTablePage.tableRow.hover();
  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-hover-row.png'
  );
});

test('IndexTable - bulk action', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);
  await indexTablePage.goto();

  await indexTablePage.checkboxes.first().click();

  // this class is responsible for turning off the transformation prop, adding this to make sure everything is properly in place before taking the screenshot
  const bulkActionStickyEl = page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .locator('.Polaris-BulkActions--groupNotSticky');

  await expect(bulkActionStickyEl).toBeVisible();
  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-selectall-rows.png'
  );

  await indexTablePage.checkboxes.last().click();
  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-selectsome-rows.png'
  );

  await indexTablePage.moveToAction.click();
  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-click-bulkactionmenu.png'
  );
});

test('IndexTable - loading state', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);
  await indexTablePage.goto('args=loading:true');

  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indexTable-loading.png'
  );
});

test('IndexTable - empty state', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);

  await indexTablePage.goto('args=itemCount:0');

  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indexTable-empty-state.png'
  );
});
