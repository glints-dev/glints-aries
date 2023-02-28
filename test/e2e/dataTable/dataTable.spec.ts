import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (
  page: Page,
  path = '?path=/story/next-datatable--interactive'
) => {
  return new StoryBookPage(page, path);
};

test('DataTable', async ({ page }) => {
  const tablePage = getPage(page);
  await tablePage.goto();
  await expect(tablePage.container).toHaveScreenshot('dataTable.png');

  const sortButton = page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByTestId('data-table-sort-button-Unit sold');

  await sortButton.click();
  await expect(tablePage.container).toHaveScreenshot('dataTable-sorted.png');

  const row = page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByTestId('data-table-row');
  await row.first().hover();
  await expect(tablePage.container).toHaveScreenshot('dataTable-row-hover.png');
});

test('DataTable - loading', async ({ page }) => {
  const tablePage = getPage(page);
  await tablePage.goto('args=loading:true');
  await expect(tablePage.container).toHaveScreenshot('dataTable-loading.png');
});

test('DataTable - empty state', async ({ page }) => {
  const tablePage = getPage(
    page,
    '?path=/story/next-datatable--with-empty-state'
  );
  await tablePage.goto();
  await expect(tablePage.container).toHaveScreenshot(
    'dataTable-empty-state.png'
  );
});
