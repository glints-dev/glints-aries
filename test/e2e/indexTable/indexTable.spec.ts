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

  let isCheckboxCorrect: boolean, tempText: string | null;
  isCheckboxCorrect = await indexTablePage.verifyCheckboxValues(
    new Array(5).fill(false)
  );
  expect(isCheckboxCorrect).toBe(true);

  await indexTablePage.checkboxes.first().click();
  await expect(indexTablePage.bulkAction).toBeVisible();

  isCheckboxCorrect = await indexTablePage.verifyCheckboxValues(
    new Array(5).fill(true)
  );
  expect(isCheckboxCorrect).toBe(true);

  tempText = await indexTablePage.tableHeadRow.textContent();
  expect(tempText).toBe('4 selected candidates');

  tempText = await indexTablePage.bulkAction.textContent();
  expect(tempText).toContain('Reject');
  expect(tempText).toContain('Move to');

  await indexTablePage.checkboxes.last().click();

  await expect(indexTablePage.bulkAction).toBeVisible();

  isCheckboxCorrect = await indexTablePage.verifyCheckboxValues([
    false,
    true,
    true,
    true,
    true,
  ]);
  expect(isCheckboxCorrect).toBe(true);

  tempText = await indexTablePage.tableHeadRow.textContent();
  expect(tempText).toBe('3 selected candidates');

  tempText = await indexTablePage.bulkAction.textContent();
  expect(tempText).toContain('Reject');
  expect(tempText).toContain('Move to');

  await indexTablePage.moveToAction.click();
  await expect(indexTablePage.actionList).toBeVisible();

  isCheckboxCorrect = await indexTablePage.verifyCheckboxValues([
    false,
    true,
    true,
    true,
    true,
  ]);
  expect(isCheckboxCorrect).toBe(true);

  tempText = await indexTablePage.tableHeadRow.textContent();
  expect(tempText).toBe('3 selected candidates');

  tempText = await indexTablePage.bulkAction.textContent();
  expect(tempText).toContain('Reject');
  expect(tempText).toContain('Move to');
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
