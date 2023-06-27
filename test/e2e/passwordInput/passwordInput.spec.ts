import { test, expect } from '@playwright/test';
import { PasswordInputPage } from './passwordInputPage';

test('Password Input', async ({ page }) => {
  const passwordInputPage = new PasswordInputPage(page);
  await passwordInputPage.goto();
  await expect(passwordInputPage.container).toHaveScreenshot(
    'passwordinput.png'
  );
});

test('Password Input - focus', async ({ page }) => {
  const passwordInputPage = new PasswordInputPage(page);
  await passwordInputPage.goto();
  await passwordInputPage.text.focus();
  await expect(passwordInputPage.container).toHaveScreenshot(
    'passwordinput-focus.png'
  );
});

test('Password Input - error', async ({ page }) => {
  const passwordInputPage = new PasswordInputPage(page);
  await passwordInputPage.goto('args=error:true');
  await expect(passwordInputPage.container).toHaveScreenshot(
    'passwordinput-error.png'
  );
});

test('Password Input - disabled', async ({ page }) => {
  const passwordInputPage = new PasswordInputPage(page);
  await passwordInputPage.goto('args=disabled:true');
  await expect(passwordInputPage.container).toHaveScreenshot(
    'passwordinput-disabled.png'
  );
});

test('Password Input - populated', async ({ page }) => {
  const passwordInputPage = new PasswordInputPage(page);
  await passwordInputPage.goto();
  await passwordInputPage.text.fill('thisismypassword');
  await expect(passwordInputPage.container).toHaveScreenshot(
    'passwordinput-populated.png'
  );
});

test('Password Input - show password', async ({ page }) => {
  const passwordInputPage = new PasswordInputPage(page);
  await passwordInputPage.goto();
  await passwordInputPage.eyeIcon.click();
  await expect(passwordInputPage.container).toHaveScreenshot(
    'passwordinput-showpassword.png'
  );
});

test('Password Input - populated - show password', async ({ page }) => {
  const passwordInputPage = new PasswordInputPage(page);
  await passwordInputPage.goto();
  await passwordInputPage.text.fill('thisismypassword');
  await passwordInputPage.eyeIcon.click();
  await expect(passwordInputPage.container).toHaveScreenshot(
    'passwordinput-populated-showpassword.png'
  );
});
