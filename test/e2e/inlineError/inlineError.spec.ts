import { test, expect } from '@playwright/test';
import { InlineErrorPage } from './inlineError';

test('Inline Error - default', async ({ page }) => {
  const inlineError = new InlineErrorPage(page);
  await inlineError.goto();
  await expect(inlineError.container).toHaveScreenshot('inlineError.png');
});

test('Inline Error - default (small device)', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });

  const inlineError = new InlineErrorPage(page);
  await inlineError.goto();
  await expect(inlineError.container).toHaveScreenshot('inlineError-small.png');
});

test('Inline Error - multi line', async ({ page }) => {
  const inlineError = new InlineErrorPage(page);
  await inlineError.goto(
    'args=text:This%20is%20a%20very%20long%20error%20message%20that%20will%20wrap%20to%20multiple%20lines%20that%20will%20wrap%20to%20multiple%20lines%20will%20wrap%20to%20multiple%20lines%20that%20will%20wrap%20to%20multiple%20lines%20is%20a%20very%20long%20error%20message%20that%20will%20wrap%20to%20multiple%20lines%20that%20will%20wrap%20to%20multiple%20lines%20will%20wrap%20to%20multiple%20lines%20that%20will%20wrap%20to%20multiple%20lines'
  );
  await expect(inlineError.container).toHaveScreenshot(
    'inlineError-multi-line.png'
  );
});

test('Inline Error - multi line (small device)', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });

  const inlineError = new InlineErrorPage(page);
  await inlineError.goto(
    'args=text:This%20is%20a%20very%20long%20error%20message%20that%20will%20wrap%20to%20multiple%20lines%20that%20will%20wrap%20to%20multiple%20lines%20will%20wrap%20to%20multiple%20lines%20that%20will%20wrap%20to%20multiple%20lines'
  );
  await expect(inlineError.container).toHaveScreenshot(
    'inlineError-small-multi-line.png'
  );
});
