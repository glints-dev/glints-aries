import { test, expect } from '@playwright/test';
import { TooltipPage } from './tooltipPage';

test('Tooltip - adaptive with preferred position "left-middle"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-left-middle');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('left-middle-to-right-middle');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-left-middle-to-right-middle.png'
  );

  await tooltipPage.showTooltipByTestId('left-middle-to-top-right');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-left-middle-to-top-right.png'
  );

  await tooltipPage.showTooltipByTestId('left-middle-to-top-middle');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-left-middle-to-top-middle.png'
  );
});

test('Tooltip - adaptive with preferred position "left-top"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-left-top');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('left-top-to-top-right');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-left-top-to-top-right.png'
  );
});

test('Tooltip - adaptive with preferred position "left-bottom"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-left-bottom');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('left-bottom-to-left-middle');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-left-bottom-to-left-middle.png'
  );
});
