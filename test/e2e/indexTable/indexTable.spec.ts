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

  await expect(indexTablePage.bulkAction).toBeVisible();

  await indexTablePage.checkboxes.last().click();

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
