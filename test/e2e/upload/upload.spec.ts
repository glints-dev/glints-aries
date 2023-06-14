import { test, expect } from '@playwright/test';
import { UploadPage } from './uploadPage';

test('Upload', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await expect(uploadPage.container).toHaveScreenshot('upload.png');
});

test('Upload - hover', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await uploadPage.uploadContainer.hover();
  await expect(uploadPage.container).toHaveScreenshot('upload-hover.png');
});

test('Upload - image', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await uploadPage.input.setInputFiles(
    'test/e2e/upload/assets/sample-image.png'
  );
  await expect(uploadPage.container).toHaveScreenshot('upload-image.png');
});

test('Upload - image - hover', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await uploadPage.input.setInputFiles(
    'test/e2e/upload/assets/sample-image.png'
  );
  await uploadPage.uploadContainer.hover();
  await expect(uploadPage.container).toHaveScreenshot('upload-image-hover.png');
});

test('Upload - nonimage', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await uploadPage.input.setInputFiles(
    'test/e2e/upload/assets/sample-nonimage.pdf'
  );
  await expect(uploadPage.container).toHaveScreenshot('upload-nonimage.png');
});

test('Upload - nonimage - hover', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await uploadPage.input.setInputFiles(
    'test/e2e/upload/assets/sample-nonimage.pdf'
  );
  await uploadPage.uploadContainer.hover();
  await expect(uploadPage.container).toHaveScreenshot(
    'upload-nonimage-hover.png'
  );
});

test('Upload - loading', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.gotoLoadingPage();
  await expect(uploadPage.container).toHaveScreenshot('upload-loading.png');
});

test('Upload - error', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await uploadPage.input.setInputFiles(
    'test/e2e/upload/assets/sample-large-file.zip'
  );
  await expect(uploadPage.container).toHaveScreenshot('upload-error.png');
});
