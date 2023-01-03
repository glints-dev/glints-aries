import { test, expect } from '@playwright/test';
import { ButtonPage } from './buttonPage';

test('Outline Button', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  buttonPage.setPath('?path=/story/button-next-outlinebutton--interactive');
  await buttonPage.goto();

  await expect(buttonPage.container).toHaveScreenshot('outline-button.png');

  await buttonPage.button.focus();
  await expect(buttonPage.container).toHaveScreenshot(
    'outline-button-focus.png'
  );
  await buttonPage.container.click();

  await buttonPage.button.hover();
  await expect(buttonPage.container).toHaveScreenshot(
    'outline-button-hover.png'
  );

  await buttonPage.button.click();
  await buttonPage.page.mouse.down();
  await expect(buttonPage.container).toHaveScreenshot(
    'outline-button-pressed.png'
  );
});
