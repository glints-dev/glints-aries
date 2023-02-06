import { test, expect } from '@playwright/test';
import { ModalPage } from './modalPage';

test('Modal', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal();
  await expect(modalPage.canvas).toHaveScreenshot('modal.png');

  await modalPage.closeModal();
  await expect(modalPage.canvas).toHaveScreenshot('modal-closed.png');
});

test('Modal - large content', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal(
    'args=children:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  );
  await expect(modalPage.canvas).toHaveScreenshot('modal-large.png');
});

test('Modal - with custom actions', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.gotoWithCustomActionsPage();
  await modalPage.triggerModal();
  await expect(modalPage.canvas).toHaveScreenshot(
    'modal-with-custom-actions.png'
  );
});

test('Modal - with provider', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.gotoWithProviderPage();
  await modalPage.triggerModal();
  await expect(modalPage.canvas).toHaveScreenshot('modal-with-provider.png');
});
