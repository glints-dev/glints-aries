import { test, expect } from '@playwright/test';
import { ModalPage } from './modalPage';

test('Modal', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal();
  await expect(modalPage.canvas).toHaveScreenshot('modal.png');

  await modalPage.closeModal();
  await expect(modalPage.canvas).toHaveScreenshot('modal-closed.png');
});

test('Modal - close on click outside', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal('args=closeOnClickOutside:true');
  await modalPage.wrapper.click({ position: { x: 1, y: 1 } });
  await expect(modalPage.canvas).toHaveScreenshot(
    'modal-close-on-click-outside.png'
  );
});

test('Modal - no header description', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal('args=headerDescription:');
  await expect(modalPage.canvas).toHaveScreenshot(
    'modal-no-header-description.png'
  );
});

test('Modal - no back button', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal('args=showBackButton:false');
  await expect(modalPage.canvas).toHaveScreenshot('modal-no-back-button.png');
});

test('Modal - no header description and no back button', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal('args=headerDescription:;showBackButton:false');
  await expect(modalPage.canvas).toHaveScreenshot(
    'modal-no-header-description-no-back-button.png'
  );
});

test('Modal - no close button', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal('args=showCloseButton:false');
  await expect(modalPage.canvas).toHaveScreenshot('modal-no-close-button.png');
});

test('Modal - header only', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.triggerModal(
    'args=headerDescription:;showCloseButton:false;showBackButton:false'
  );
  await expect(modalPage.canvas).toHaveScreenshot('modal-header-only.png');
});

test('Modal - with large content', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.gotoWithLargeContentPage();
  await expect(modalPage.canvas).toHaveScreenshot(
    'modal-with-large-content.png'
  );
});

test('Modal - with overflowing content', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.gotoWithOverflowContentPage();
  await expect(modalPage.canvas).toHaveScreenshot(
    'modal-with-overflowing-content.png'
  );
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
