import { test, expect } from '@playwright/test';
import { TooltipPage } from './tooltipPage';

test('Tooltip - adaptive with preferred position "right-middle"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-right-middle');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('right-middle-to-left-middle');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-right-middle-to-left-middle.png'
  );

  await tooltipPage.showTooltipByTestId('right-middle-to-top-left');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-right-middle-to-top-left.png'
  );

  await tooltipPage.showTooltipByTestId('right-middle-to-top-center');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-right-middle-to-top-center.png'
  );
});

test('Tooltip - adaptive with preferred position "right-top"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-right-top');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('right-top-to-top-left');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-right-top-to-top-left.png'
  );
});

test('Tooltip - adaptive with preferred position "right-bottom"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-right-bottom');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('right-bottom-to-left-bottom');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-right-bottom-to-left-bottom.png'
  );
});
