import { test, expect } from '@playwright/test';
import { ModalPage } from './modalPage';

test('Modal', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal();
  await expect(modalPage.canvas).toHaveScreenshot('modal.png');

  await modalPage.closeModal();
  await expect(modalPage.canvas).toHaveScreenshot('modal-closed.png');
});

test('Modal - small', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal('args=size:small');
  await expect(modalPage.canvas).toHaveScreenshot('modal-small.png');
});

test('Modal - large', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal('args=size:large');
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
