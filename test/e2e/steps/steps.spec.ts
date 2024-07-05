import { test, expect } from '@playwright/test';
import { StepsPage } from './stepsPage';

test('Steps - default', async ({ page }) => {
  const stepsPage = new StepsPage(page);
  await stepsPage.goto();

  await expect(stepsPage.container).toHaveScreenshot('steps-default.png');
});

test('Steps - progress', async ({ page }) => {
  const stepsPage = new StepsPage(page);
  await stepsPage.goto();

  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();

  await expect(stepsPage.container).toHaveScreenshot('steps-progress.png');
});

test('Steps - error', async ({ page }) => {
  const stepsPage = new StepsPage(page);
  await stepsPage.goto();

  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();
  await stepsPage.errorButton.click();

  await expect(stepsPage.container).toHaveScreenshot('steps-error.png');
});

test('Steps - completed', async ({ page }) => {
  const stepsPage = new StepsPage(page);
  await stepsPage.goto();

  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();

  await expect(stepsPage.container).toHaveScreenshot('steps-completed.png');
});

test('Steps - small screen', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const stepsPage = new StepsPage(page);
  await stepsPage.goto();

  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();
  await stepsPage.errorButton.click();
  await stepsPage.nextButton.click();

  await expect(stepsPage.container).toHaveScreenshot('steps-small-screen.png');
});

test('Steps - dot style', async ({ page }) => {
  const stepsPage = new StepsPage(page);
  await stepsPage.goto('args=type:dot');

  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();
  await stepsPage.errorButton.click();
  await stepsPage.nextButton.click();

  await expect(stepsPage.container).toHaveScreenshot('steps-dot.png');
});

test('Steps - Horizontal normal style orientation', async ({ page }) => {
  const stepsPage = new StepsPage(page);
  await stepsPage.goto('args=orientation:horizontal;type:dot');

  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();
  await stepsPage.errorButton.click();
  await stepsPage.nextButton.click();

  await expect(stepsPage.container).toHaveScreenshot(
    'steps-horizontal-normal.png'
  );
});

test('Steps - Horizontal dot style orientation', async ({ page }) => {
  const stepsPage = new StepsPage(page);
  await stepsPage.goto('args=orientation:horizontal');

  await stepsPage.nextButton.click();
  await stepsPage.nextButton.click();
  await stepsPage.errorButton.click();
  await stepsPage.nextButton.click();

  await expect(stepsPage.container).toHaveScreenshot(
    'steps-horizontal-dot.png'
  );
});
