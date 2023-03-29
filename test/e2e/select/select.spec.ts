import { test, expect } from '@playwright/test';
import { SelectPage } from './selectPage';

test('Select - non-searchable single select', async ({ page }) => {
  const selectPage = new SelectPage(page);
  await selectPage.goto();

  await selectPage.activatorSelect.waitFor();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-single-select-closed.png'
  );

  await selectPage.activatorSelect.click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-single-select-opened.png'
  );

  await selectPage.options.nth(1).hover();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-single-select-option-hover.png'
  );

  await selectPage.options.nth(1).click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-single-select-option-selected.png'
  );
});

test('Select - non-searchable multi select', async ({ page }) => {
  const selectPage = new SelectPage(page);
  await selectPage.gotoNonSearchableMultiSelectPage();

  await selectPage.activatorSelect.waitFor();
  await selectPage.activatorSelect.click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-multi-select-opened.png'
  );

  await selectPage.options.nth(1).hover();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-multi-select-option-hover.png'
  );

  await selectPage.options.nth(1).click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-multi-select-option-selected.png'
  );

  await selectPage.options.nth(2).click();
  await selectPage.options.nth(3).click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-multi-select-options-selected.png'
  );

  await selectPage.options.nth(1).click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-multi-select-option-deselected.png'
  );
});

test('Select - non-searchable with error ', async ({ page }) => {
  const selectPage = new SelectPage(page);
  await selectPage.gotoWithErrorNonSearchablePage();

  await selectPage.activatorSelect.waitFor();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-with-error.png'
  );
});

test('Select - non-searchable disabled', async ({ page }) => {
  const selectPage = new SelectPage(page);
  await selectPage.gotoNonSearchableDisabledPage();

  await selectPage.activatorSelect.waitFor();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-non-searchable-disabled.png'
  );
});

test('Select - searchable multi select', async ({ page }) => {
  const selectPage = new SelectPage(page);
  await selectPage.gotoSearchableMultiSelectPage();

  await selectPage.activatorTextInput.waitFor();
  await selectPage.activatorTextInput.focus();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-searchable-multi-select-option-list.png'
  );

  await selectPage.activatorTextInput.fill('in');
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-searchable-multi-select-filter-options.png'
  );

  await selectPage.activatorTextInput.fill('empty');
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-searchable-multi-select-filter-options-no-match.png'
  );

  await selectPage.activatorTextInput.fill('');
  await selectPage.options.nth(1).hover();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-searchable-multi-select-option-hover.png'
  );

  await selectPage.options.nth(1).click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-searchable-multi-select-option-selected.png'
  );

  await selectPage.label.click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-searchable-multi-select-tags-selected-below.png'
  );
});

test('Select - searchable multi select scrollable', async ({ page }) => {
  const selectPage = new SelectPage(page);
  await selectPage.gotoScrollableSelectPage();

  await selectPage.activatorTextInput.waitFor();
  await selectPage.activatorTextInput.click();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-multi-select-scrollable.png'
  );
});

test('Select - searchable disabled', async ({ page }) => {
  const selectPage = new SelectPage(page);
  await selectPage.gotoSearchableDisabledPage();

  await selectPage.activatorTextInput.waitFor();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-searchable-disabled.png'
  );
});

test('Searchable - with inline error', async ({ page }) => {
  const selectPage = new SelectPage(page);
  await selectPage.gotoWithInlineErrorPage();

  await selectPage.activatorTextInput.waitFor();
  await expect(selectPage.canvas).toHaveScreenshot(
    'select-with-inline-error.png'
  );
});
