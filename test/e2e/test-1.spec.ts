import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('?path=/docs/utilities-colors--page');
  const yellow = await page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .locator(
      'div:nth-child(12) > div > .ColorsStoriesHelpers__ColorBox-sc-1euu88z-2'
    )
    .first();
  await expect(yellow).toHaveScreenshot('yellow.png');
});
