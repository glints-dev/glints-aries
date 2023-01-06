import { test, expect } from '@playwright/test';
import { ButtonPage } from './buttonPage';

test('Desctructive Button', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  buttonPage.setPath('?path=/story/next-destructivebutton--interactive');
  await buttonPage.goto();

  await expect(buttonPage.container).toHaveScreenshot('destructive-button.png');

  await buttonPage.button.focus();
  await expect(buttonPage.container).toHaveScreenshot(
    'destructive-button-focus.png'
  );
  await buttonPage.container.click();

  await buttonPage.button.hover();
  await expect(buttonPage.container).toHaveScreenshot(
    'destructive-button-hover.png'
  );
  await buttonPage.container.click();

  await buttonPage.button.click();
  await buttonPage.page.mouse.down();
  await expect(buttonPage.container).toHaveScreenshot(
    'destructive-button-pressed.png'
  );
});
