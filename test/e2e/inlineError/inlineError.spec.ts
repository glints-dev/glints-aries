import { test, expect } from '@playwright/test';
import { InlineErrorPage } from './inlineError';

test('Inline Error - default', async ({ page }) => {
  const inlineError = new InlineErrorPage(page);
  await inlineError.goto();
  await expect(inlineError.container).toHaveScreenshot('inlineError.png');
});
