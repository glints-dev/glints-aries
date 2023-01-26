import { test, expect } from '@playwright/test';
import { SimplePaginationPage } from './simplePaginationPage';

test('Simple Pagination', async ({ page }) => {
  const paginationPage = new SimplePaginationPage(page);
  await paginationPage.goto();

  await expect(paginationPage.container).toHaveScreenshot(
    'simple-pagination.png'
  );

  await paginationPage.next();
  await expect(paginationPage.container).toHaveScreenshot(
    'simple-pagination-next.png'
  );

  await paginationPage.previous();
  await expect(paginationPage.container).toHaveScreenshot(
    'simple-pagination-previous.png'
  );
});

test('Simple Pagination - disabled', async ({ page }) => {
  const paginationPage = new SimplePaginationPage(page);
  await paginationPage.goto('args=disabled:true');

  await expect(paginationPage.container).toHaveScreenshot(
    'simple-pagination-disabled.png'
  );
});
