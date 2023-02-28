import { test, expect } from '@playwright/test';
import { TooltipPage } from './tooltipPage';

test('Tooltip - adaptive with preferred position "bottom-center"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-bottom-center');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('bottom-center-to-right-middle');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-bottom-center-to-right-middle.png'
  );

  await tooltipPage.showTooltipByTestId('bottom-center-to-bottom-right');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-bottom-center-to-bottom-right.png'
  );

  await tooltipPage.showTooltipByTestId('bottom-center-to-left-middle');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-bottom-center-to-left-middle.png'
  );

  await tooltipPage.showTooltipByTestId('bottom-center-to-bottom-left');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-bottom-center-to-bottom-left.png'
  );
});

test('Tooltip - adaptive with preferred position "bottom-left"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-bottom-left');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('bottom-left-to-bottom-right');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-bottom-left-to-bottom-right.png'
  );
  await tooltipPage.showTooltipByTestId('bottom-left-to-bottom-center');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-bottom-left-to-bottom-center.png'
  );
});

test('Tooltip - adaptive with preferred position "bottom-right"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-bottom-right');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('bottom-right-to-bottom-left');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'bottom-right-to-bottom-left.png'
  );

  await tooltipPage.showTooltipByTestId('bottom-right-to-bottom-center');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'bottom-right-to-bottom-center.png'
  );
});
