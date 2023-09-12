import { test, expect } from '@playwright/test';
import { AuthenticationInputPage } from './authenticationInputPage';

test('AuthenticationInput - default', async ({ page }) => {
  const authenticationInputPage = new AuthenticationInputPage(page);
  await authenticationInputPage.goto();
  await expect(authenticationInputPage.container).toHaveScreenshot(
    'authenticationInput.png'
  );
});

test('AuthenticationInput - disabled', async ({ page }) => {
  const authenticationInputPage = new AuthenticationInputPage(page);
  await authenticationInputPage.goto('args=disabled:true');
  await expect(authenticationInputPage.container).toHaveScreenshot(
    'authenticationInpu-disabled.png'
  );
});

test('AuthenticationInput - error', async ({ page }) => {
  const authenticationInputPage = new AuthenticationInputPage(page);
  await authenticationInputPage.goto('args=error:true');
  await expect(authenticationInputPage.container).toHaveScreenshot(
    'authenticationInpu-error.png'
  );
});

test('AuthenticationInput - fill first input', async ({ page }) => {
  const authenticationInputPage = new AuthenticationInputPage(page);
  await authenticationInputPage.goto();
  (await authenticationInputPage.getNInput(0)).fill('1');
  await expect(authenticationInputPage.container).toHaveScreenshot(
    'authenticationInput-fill-first-input.png'
  );
});

test('AuthenticationInput - fill all input', async ({ page }) => {
  const authenticationInputPage = new AuthenticationInputPage(page);
  await authenticationInputPage.goto();
  const firstInput = await authenticationInputPage.getNInput(0);
  firstInput.fill('1');
  firstInput.fill('2');
  firstInput.fill('3');
  firstInput.fill('4');
  firstInput.fill('5');
  firstInput.fill('6');

  await expect(authenticationInputPage.container).toHaveScreenshot(
    'authenticationInput-fill-all-input.png'
  );
});
