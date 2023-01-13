import { test, expect } from '@playwright/test';
import { PopoverPage } from './popoverPage';

test('Popover', async ({ page }) => {
  const popoverPage = new PopoverPage(page);
  await popoverPage.goto();

  await popoverPage.activators.first().click();
  await expect(popoverPage.container).toHaveScreenshot('popover.png');

  await popoverPage.activators.nth(1).click();
  await expect(popoverPage.container).toHaveScreenshot('popover-pane.png');

  await popoverPage.activators.last().click();
  await expect(popoverPage.container).toHaveScreenshot(
    'popover-bulk-actions.png'
  );
});

test('Popover - position above', async ({ page }) => {
  const popoverPage = new PopoverPage(page);
  await popoverPage.goto('args=preferredPosition:above');

  await popoverPage.activators.first().click();
  await expect(popoverPage.container).toHaveScreenshot('popover-above.png');

  await popoverPage.activators.last().click();
  await expect(popoverPage.container).toHaveScreenshot(
    'popover-bulk-actions-above.png'
  );
});

test('Popover - alignment - left', async ({ page }) => {
  const popoverPage = new PopoverPage(page);
  await popoverPage.goto('args=preferredAlignment:left');

  await popoverPage.activators.first().click();
  await expect(popoverPage.container).toHaveScreenshot('popover-left.png');

  await popoverPage.activators.nth(1).click();
  await expect(popoverPage.container).toHaveScreenshot('popover-pane-left.png');

  await popoverPage.activators.last().click();
  await expect(popoverPage.container).toHaveScreenshot(
    'popover-bulk-actions-left.png'
  );
});

test('Popover - alignment - right', async ({ page }) => {
  const popoverPage = new PopoverPage(page);
  await popoverPage.goto('args=preferredAlignment:right');

  await popoverPage.activators.first().click();
  await expect(popoverPage.container).toHaveScreenshot('popover-right.png');

  await popoverPage.activators.nth(1).click();
  await expect(popoverPage.container).toHaveScreenshot(
    'popover-pane-right.png'
  );

  await popoverPage.activators.last().click();
  await expect(popoverPage.container).toHaveScreenshot(
    'popover-bulk-actions-right.png'
  );
});
