import { test, expect } from '@playwright/test';
import { TextPage } from './textPage';

test('Text', async ({ page }) => {
  const textPage = new TextPage(page);
  await textPage.goto();
  await expect(textPage.container).toHaveScreenshot('text.png');

  textPage.text.focus();
  await expect(textPage.container).toHaveScreenshot('text-focus.png');
});

test('Text - disabled', async ({ page }) => {
  const textPage = new TextPage(page);
  await textPage.goto('args=disabled:true');
  await expect(textPage.container).toHaveScreenshot('text-disabled.png');
});

test('Text - error', async ({ page }) => {
  const textPage = new TextPage(page);
  await textPage.goto('args=error:true');
  await expect(textPage.container).toHaveScreenshot('text-error.png');

  await textPage.text.focus();
  await expect(textPage.container).toHaveScreenshot('text-error-focus.png');
});

test('Text - can clear', async ({ page }) => {
  const textPage = new TextPage(page);
  await textPage.goto('args=canClear:true');

  await expect(textPage.container).toHaveScreenshot(
    'text-can-clear-empty-input.png'
  );

  await textPage.text.fill('Hello');
  await expect(textPage.container).toHaveScreenshot(
    'text-can-clear-filled-input.png'
  );

  await textPage.clearButton.click();
  await expect(textPage.container).toHaveScreenshot(
    'text-can-clear-btn-clicked.png'
  );
});

test('Text - prefix and suffix', async ({ page }) => {
  const textPage = new TextPage(page);
  await textPage.setPath('?path=/story/next-textinput--with-prefix-and-suffix');
  textPage.goto();
  await expect(textPage.container).toHaveScreenshot('text-prefix-suffix.png');

  await textPage.goto('args=disabled:true');
  await expect(textPage.container).toHaveScreenshot(
    'text-prefix-suffix-disabled.png'
  );
});
