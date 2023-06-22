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

test('Upload - loading', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto('args=loading:true');
  await expect(uploadPage.container).toHaveScreenshot('upload-loading.png');
});

test('Upload - error - nonimage', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await uploadPage.input.setInputFiles(
    'test/e2e/upload/assets/sample-nonimage.pdf'
  );
  await expect(uploadPage.container).toHaveScreenshot(
    'upload-error-nonimage.png'
  );
});

test('Upload - error - large image', async ({ page }) => {
  const uploadPage = new UploadPage(page);
  await uploadPage.goto();
  await uploadPage.input.setInputFiles(
    'test/e2e/upload/assets/sample-large-image.jpg'
  );
  await expect(uploadPage.container).toHaveScreenshot(
    'upload-error-largeimage.png'
  );
});
