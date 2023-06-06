import { test, expect } from '@playwright/test';
import { TextAreaPage } from './textAreaPage';

test('TextArea', async ({ page }) => {
  const textAreaPage = new TextAreaPage(page);
  await textAreaPage.goto();
  await expect(textAreaPage.container).toHaveScreenshot('textarea.png');
});

test('TextArea - focus', async ({ page }) => {
  const textAreaPage = new TextAreaPage(page);
  await textAreaPage.goto();
  await textAreaPage.text.focus();
  await expect(textAreaPage.container).toHaveScreenshot('textarea-focus.png');
});

test('TextArea - error', async ({ page }) => {
  const textAreaPage = new TextAreaPage(page);
  await textAreaPage.goto('args=error:true');
  await expect(textAreaPage.container).toHaveScreenshot('textarea-error.png');
});

test('TextArea - disabled', async ({ page }) => {
  const textAreaPage = new TextAreaPage(page);
  await textAreaPage.goto('args=disabled:true');
  await expect(textAreaPage.container).toHaveScreenshot(
    'textarea-disabled.png'
  );
});

test('TextArea - 2 rows', async ({ page }) => {
  const textAreaPage = new TextAreaPage(page);
  await textAreaPage.goto('args=rows:2');
  await expect(textAreaPage.container).toHaveScreenshot('textarea-2rows.png');
});

test('TextArea - 6 rows', async ({ page }) => {
  const textAreaPage = new TextAreaPage(page);
  await textAreaPage.goto('args=rows:6');
  await expect(textAreaPage.container).toHaveScreenshot('textarea-6rows.png');
});

test('TextArea - populated', async ({ page }) => {
  const textAreaPage = new TextAreaPage(page);
  await textAreaPage.gotoWithPopulatedValuePage();
  await expect(textAreaPage.container).toHaveScreenshot(
    'textarea-populated.png'
  );
});
