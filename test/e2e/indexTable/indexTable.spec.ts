import { test, expect } from '@playwright/test';
import { IndexTablePage } from './indexTablePage';

test('IndexTable', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);
  await indexTablePage.goto();

  await expect(indexTablePage.container).toHaveScreenshot('indexTable.png');

  await indexTablePage.tableRow.hover();
  await expect(indexTablePage.container).toHaveScreenshot(
    'indextable-hover-row.png'
  );
});

test('IndexTable - bulk action', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);
  await indexTablePage.goto();

  await indexTablePage.checkboxes.first().click();
  await expect(indexTablePage.container).toHaveScreenshot(
    'indextable-selectall-rows.png'
  );

  await indexTablePage.checkboxes.last().click();
  await expect(indexTablePage.container).toHaveScreenshot(
    'indextable-selectsome-rows.png'
  );

  await indexTablePage.moveToAction.click();
  await expect(indexTablePage.container).toHaveScreenshot(
    'indextable-click-bulkactionmenu.png'
  );
});

test('IndexTable - loading state', async ({ page }) => {
  const indexTablePage = new IndexTablePage(page);
  await indexTablePage.goto('args=loading:true');

  await expect(indexTablePage.container).toHaveScreenshot(
    'indexTable-loading.png'
  );
});
