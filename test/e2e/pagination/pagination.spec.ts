import { test, expect } from '@playwright/test';
import { PaginationPage } from './paginationPage';

test('Pagination', async ({ page }) => {
  const paginationPage = new PaginationPage(page);
  await paginationPage.goto();

  await expect(paginationPage.container).toHaveScreenshot('pagination.png');

  await paginationPage.toPage(20);
  await expect(paginationPage.container).toHaveScreenshot(
    'pagination-last-page.png'
  );
});

test('Pagination - go to pages', async ({ page }) => {
  const paginationPage = new PaginationPage(page);
  await paginationPage.goto();

  await paginationPage.toPage(4);
  await expect(paginationPage.container).toHaveScreenshot(
    'pagination-page-4.png'
  );

  await paginationPage.toPage(6);
  await expect(paginationPage.container).toHaveScreenshot(
    'pagination-page-6.png'
  );

  await paginationPage.previousJumper();
  await expect(paginationPage.container).toHaveScreenshot(
    'pagination-previous-jumper.png'
  );

  await paginationPage.nextJumper();
  await expect(paginationPage.container).toHaveScreenshot(
    'pagination-next-jumper.png'
  );

  await paginationPage.previous();
  await expect(paginationPage.container).toHaveScreenshot(
    'pagination-previous.png'
  );

  await paginationPage.next();
  await expect(paginationPage.container).toHaveScreenshot(
    'pagination-next.png'
  );
});

test('Pagination - disabled', async ({ page }) => {
  const paginationPage = new PaginationPage(page);
  await paginationPage.goto('args=disabled:true');

  await expect(paginationPage.container).toHaveScreenshot(
    'pagination-disabled.png'
  );
});
