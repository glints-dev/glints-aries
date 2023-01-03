import { test, expect } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

test('Button Group', async ({ page }) => {
  const buttonGroupPage = new StoryBookPage(
    page,
    '?path=/story/buttongroup-next-buttongroup--interactive'
  );
  await buttonGroupPage.goto();
  await expect(buttonGroupPage.container).toHaveScreenshot('button-group.png');

  await page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByRole('button', { name: 'Label' })
    .first()
    .focus();

  await expect(buttonGroupPage.container).toHaveScreenshot(
    'button-group-should-focus.png'
  );

  await buttonGroupPage.goto('args=segmented:true');
  await expect(buttonGroupPage.container).toHaveScreenshot(
    'button-group-segmented.png'
  );

  await buttonGroupPage.goto('args=fullWidth:true');
  await expect(buttonGroupPage.container).toHaveScreenshot(
    'button-group-full-width.png'
  );

  await buttonGroupPage.goto('args=segmented:true;fullWidth:true');
  await expect(buttonGroupPage.container).toHaveScreenshot(
    'button-group-segmented-full-width.png'
  );
});
