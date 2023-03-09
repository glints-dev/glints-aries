import { test, expect } from '@playwright/test';
import { ComboboxPage } from './comboboxPage';

test('Combobox', async ({ page }) => {
  const comboboxPage = new ComboboxPage(page);
  await comboboxPage.goto();

  await comboboxPage.textInput.waitFor();
  await expect(comboboxPage.canvas).toHaveScreenshot('combobox.png');
});

test('Combobox - multi select', async ({ page }) => {
  const comboboxPage = new ComboboxPage(page);
  await comboboxPage.goto();

  await comboboxPage.textInput.focus();
  await expect(comboboxPage.canvas).toHaveScreenshot(
    'combobox-multi-select-option-list.png'
  );

  await comboboxPage.textInput.fill('in');
  await expect(comboboxPage.canvas).toHaveScreenshot(
    'combobox-multi-select-filter-options.png'
  );

  await comboboxPage.textInput.fill('empty');
  await expect(comboboxPage.canvas).toHaveScreenshot(
    'combobox-multi-select-filter-options-no-match.png'
  );

  await comboboxPage.textInput.fill('');
  await comboboxPage.options.nth(1).hover();
  await expect(comboboxPage.canvas).toHaveScreenshot(
    'combobox-multi-select-option-hover.png'
  );

  await comboboxPage.options.nth(1).click();
  await expect(comboboxPage.canvas).toHaveScreenshot(
    'combobox-multi-select-option-selected.png'
  );

  await comboboxPage.label.click();
  await expect(comboboxPage.canvas).toHaveScreenshot(
    'combobox-multi-select-tags-selected-below.png'
  );
});
