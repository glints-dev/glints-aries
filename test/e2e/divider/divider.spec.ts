import { test, expect } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

test('Divider', async ({ page }) => {
  const dividerPage = new StoryBookPage(
    page,
    '?path=/story/next-divider--interactive'
  );
  await dividerPage.goto();
  await expect(dividerPage.container).toHaveScreenshot('divider.png');
});
