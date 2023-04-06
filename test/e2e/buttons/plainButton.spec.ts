import { test, expect } from '@playwright/test';
import { ButtonPage } from './buttonPage';

test('Plain Button', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  buttonPage.setPath('?path=/story/next-plainbutton--interactive');
  await buttonPage.goto();

  await expect(buttonPage.container).toHaveScreenshot('plain-button.png');

  await buttonPage.button.focus();
  await expect(buttonPage.container).toHaveScreenshot('plain-button-focus.png');
  await buttonPage.container.click();

  await buttonPage.button.hover();
  await expect(buttonPage.container).toHaveScreenshot('plain-button-hover.png');

  await buttonPage.button.click();
  await buttonPage.page.mouse.down();
  await expect(buttonPage.container).toHaveScreenshot(
    'plain-button-pressed.png'
  );
});

test('Plain Button -- disabled', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  buttonPage.setPath('?path=/story/next-plainbutton--interactive');
  await buttonPage.goto('args=disabled:true');

  await expect(buttonPage.container).toHaveScreenshot(
    'plain-button-disabled.png'
  );
});
