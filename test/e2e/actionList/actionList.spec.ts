import { test, expect } from '@playwright/test';
import { ActionListPage } from './actionListPage';

test('Action list', async ({ page }) => {
  const actionListPage = new ActionListPage(page);
  await actionListPage.goto();

  const exportAction = actionListPage.getActionByLabelName('Export').first();
  exportAction.waitFor();

  await expect(actionListPage.canvas).toHaveScreenshot('action-list.png');

  await exportAction.focus();
  await expect(actionListPage.canvas).toHaveScreenshot('action-list-focus.png');
  await actionListPage.canvas.click();

  await exportAction.hover();
  await expect(actionListPage.canvas).toHaveScreenshot('action-list-hover.png');

  await exportAction.click();
  await actionListPage.page.mouse.down();
  await expect(actionListPage.canvas).toHaveScreenshot(
    'action-list-pressed.png'
  );
});

test('Action list - with icons', async ({ page }) => {
  const actionListPage = new ActionListPage(page);
  actionListPage.setPath('?path=/story/next-actionlist--with-icons');
  await actionListPage.goto();

  const exportAction = actionListPage.getActionByLabelName('Add').first();
  exportAction.waitFor();

  await expect(actionListPage.canvas).toHaveScreenshot(
    'action-list-with-icons.png'
  );
});

test('Action list - with descriptions', async ({ page }) => {
  const actionListPage = new ActionListPage(page);
  actionListPage.setPath('?path=/story/next-actionlist--with-descriptions');
  await actionListPage.goto();

  await expect(actionListPage.canvas).toHaveScreenshot(
    'action-list-with-descriptions.png'
  );
});

test('Action list - with sections', async ({ page }) => {
  const actionListPage = new ActionListPage(page);
  actionListPage.setPath('?path=/story/next-actionlist--with-sections');
  await actionListPage.goto();

  await expect(actionListPage.canvas).toHaveScreenshot(
    'action-list-with-sections.png'
  );
});
