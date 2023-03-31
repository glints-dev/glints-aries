import { test, expect } from '@playwright/test';
import { IndexTablePage } from './indexTablePage';

test('IndexTable', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);
  await indexTablePage.goto();

  await indexTablePage.tableRow.waitFor();

  await expect(indexTablePage.canvas).toHaveScreenshot('indexTable.png');

  await indexTablePage.tableRow.hover();
  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-hover-row.png'
  );

  await indexTablePage.checkboxes.last().hover();
  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-hover-checkbox-cell.png'
  );
});

test('IndexTable - bulk action', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);
  await indexTablePage.goto();

  await indexTablePage.checkboxes.first().click();
  await expect(indexTablePage.bulkAction).toBeVisible();
  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-bulk-action-selected-all.png'
  );

  await indexTablePage.checkboxes.last().click();

  await expect(indexTablePage.bulkAction).toBeVisible();

  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-bulk-action-selected-row.png'
  );

  await indexTablePage.moveToAction.click();
  await expect(indexTablePage.actionList).toBeVisible();

  await expect(indexTablePage.canvas).toHaveScreenshot(
    'indextable-bulk-action-action-list.png'
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
