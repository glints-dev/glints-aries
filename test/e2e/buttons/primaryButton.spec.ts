import { test, expect } from '@playwright/test';
import { ButtonPage } from './buttonPage';

test('Primary Button', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  buttonPage.setPath('?path=/story/button-next-primarybutton--interactive');
  await buttonPage.goto();

  await expect(buttonPage.container).toHaveScreenshot('primary-button.png');

  await buttonPage.button.focus();
  await expect(buttonPage.container).toHaveScreenshot(
    'primary-button-focus.png'
  );
  await buttonPage.container.click();

  await buttonPage.button.hover();
  await expect(buttonPage.container).toHaveScreenshot(
    'primary-button-hover.png'
  );

  await buttonPage.button.click();
  await buttonPage.page.mouse.down();
  await expect(buttonPage.container).toHaveScreenshot(
    'primary-button-pressed.png'
  );
});
