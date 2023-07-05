import { test, expect } from '@playwright/test';
import { IconPaginationPage } from './iconPaginationPage';

test('Icon Pagination', async ({ page }) => {
  const paginationPage = new IconPaginationPage(page);
  await paginationPage.goto();

  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination.png'
  );

  await paginationPage.next();
  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-next.png'
  );

  await paginationPage.previous();
  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-previous.png'
  );
});

test('Icon Pagination With Label', async ({ page }) => {
  const paginationPage = new IconPaginationPage(page);
  await paginationPage.gotoWithLabel();

  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-with-label.png'
  );

  await paginationPage.next();
  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-with-label-next.png'
  );

  await paginationPage.previous();
  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-with-label-previous.png'
  );
});

test('Icon Pagination - disable next', async ({ page }) => {
  const paginationPage = new IconPaginationPage(page);
  await paginationPage.goto('args=disableNext:true');

  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-disable-next.png'
  );
});

test('Icon Pagination - disable previous', async ({ page }) => {
  const paginationPage = new IconPaginationPage(page);
  await paginationPage.goto('args=disablePrevious:true');

  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-disable-previous.png'
  );
});

test('Icon Pagination With Label - disable next', async ({ page }) => {
  const paginationPage = new IconPaginationPage(page);
  await paginationPage.gotoWithLabel('args=disableNext:true');

  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-with-label-disable-next.png'
  );
});

test('Icon Pagination With Label - disable previous', async ({ page }) => {
  const paginationPage = new IconPaginationPage(page);
  await paginationPage.gotoWithLabel('args=disablePrevious:true');

  await expect(paginationPage.container).toHaveScreenshot(
    'icon-pagination-with-label-disable-previous.png'
  );
});
