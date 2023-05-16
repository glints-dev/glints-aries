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

  let isCheckboxValuesCorrect: boolean, selectAllTableHeadText: string | null;
  isCheckboxValuesCorrect = await indexTablePage.verifyCheckboxValues(
    new Array(4).fill(false)
  );
  expect(isCheckboxValuesCorrect).toBe(true);
  await expect(indexTablePage.bulkAction).toBeHidden();
  expect(await indexTablePage.selectAllCheckbox.isChecked()).toBe(false);

  await indexTablePage.selectAllCheckbox.click();
  await expect(indexTablePage.bulkAction).toBeVisible();
  expect(await indexTablePage.selectAllCheckbox.isChecked()).toBe(true);
  isCheckboxValuesCorrect = await indexTablePage.verifyCheckboxValues(
    new Array(4).fill(true)
  );
  expect(isCheckboxValuesCorrect).toBe(true);

  selectAllTableHeadText = await indexTablePage.tableHeadRow.textContent();
  expect(selectAllTableHeadText).toBe('4 selected candidates');

  selectAllTableHeadText = await indexTablePage.bulkAction.textContent();
  expect(selectAllTableHeadText).toContain('Reject');
  expect(selectAllTableHeadText).toContain('Move to');

  await indexTablePage.checkboxes.last().click();

  await expect(indexTablePage.bulkAction).toBeVisible();
  await expect(indexTablePage.selectAllCheckbox).toHaveAttribute(
    'aria-checked',
    'mixed'
  );
  isCheckboxValuesCorrect = await indexTablePage.verifyCheckboxValues([
    true,
    true,
    true,
    false,
  ]);
  expect(isCheckboxValuesCorrect).toBe(true);

  selectAllTableHeadText = await indexTablePage.tableHeadRow.textContent();
  expect(selectAllTableHeadText).toBe('3 selected candidates');

  selectAllTableHeadText = await indexTablePage.bulkAction.textContent();
  expect(selectAllTableHeadText).toContain('Reject');
  expect(selectAllTableHeadText).toContain('Move to');

  await indexTablePage.moveToAction.click();
  await expect(indexTablePage.actionList).toBeVisible();

  const bulkOptionActionListText =
    await indexTablePage.actionList.textContent();
  expect(bulkOptionActionListText).toContain('Assessment');
  expect(bulkOptionActionListText).toContain('Interviewing');
  expect(bulkOptionActionListText).toContain('Offered');
  expect(bulkOptionActionListText).toContain('Hired');
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
