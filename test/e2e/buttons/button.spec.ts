import { test, expect } from '@playwright/test';
import { ButtonPage } from './buttonPage';

test('Button', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  await buttonPage.goto();

  await expect(buttonPage.container).toHaveScreenshot('button.png');

  await buttonPage.button.focus();
  await expect(buttonPage.container).toHaveScreenshot('button-focus.png');
  await buttonPage.container.click();

  await buttonPage.button.hover();
  await expect(buttonPage.container).toHaveScreenshot('button-hover.png');

  await buttonPage.button.click();
  await buttonPage.page.mouse.down();
  await expect(buttonPage.container).toHaveScreenshot('button-pressed.png');
});

test('Button - active', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  await buttonPage.goto('args=active:true');
  await expect(buttonPage.container).toHaveScreenshot('button-active.png');
});

test('Button - disabled', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  await buttonPage.goto('args=disabled:true');
  await expect(buttonPage.container).toHaveScreenshot('button-disabled.png');
});

test('Button - full width', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  await buttonPage.goto('args=fullWidth:true');
  await expect(buttonPage.container).toHaveScreenshot('button-full-width.png');
});

test('Button - loading', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  await buttonPage.goto('args=loading:true');
  await expect(buttonPage.container).toHaveScreenshot('button-loading.png');
});

test('Button - icons', async ({ page }) => {
  const buttonPage = new ButtonPage(page);
  buttonPage.setPath('?path=/story/next-button--with-icon');
  await buttonPage.goto();
  await expect(buttonPage.container).toHaveScreenshot('button-with-icons.png');

  await buttonPage.goto('args=iconPosition:right');
  await expect(buttonPage.container).toHaveScreenshot(
    'button-with-icons-right.png'
  );
});
