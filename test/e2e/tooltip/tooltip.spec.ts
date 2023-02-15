import { test, expect } from '@playwright/test';
import { TooltipPage } from './tooltipPage';

test('Tooltip', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);
  await tooltipPage.goto();

  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-initially-hidden.png'
  );

  await tooltipPage.tooltipActivator.hover();
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-show-mouse-enter.png'
  );

  await tooltipPage.page.mouse.move(1, 1);
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-hidden-mouse-leave.png'
  );
});

test('Tooltip - top-left', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:top-left');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-top-left.png');
});

test('Tooltip - top-right', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:top-right');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-top-right.png');
});

test('Tooltip - bottom', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:bottom-center');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-bottom.png');
});

test('Tooltip - bottom-left', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:bottom-left');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-bottom-left.png');
});

test('Tooltip - bottom-right', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:bottom-right');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-bottom-right.png');
});

test('Tooltip - left', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:left-middle');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-left.png');
});

test('Tooltip - left-top', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:left-top');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-left-top.png');
});

test('Tooltip - left-bottom', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:left-bottom');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-left-bottom.png');
});

test('Tooltip - right', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:right-middle');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-right.png');
});

test('Tooltip - right-top', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:right-top');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-right-top.png');
});

test('Tooltip - right-bottom', async ({ page }) => {
  const tooltipPage = new TooltipPage(page);

  await tooltipPage.showTooltip('args=preferredPosition:right-bottom');
  await expect(tooltipPage.canvas).toHaveScreenshot('tooltip-right-bottom.png');
});
