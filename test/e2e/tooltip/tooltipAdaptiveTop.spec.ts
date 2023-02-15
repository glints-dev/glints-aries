import { test, expect } from '@playwright/test';
import { TooltipPage } from './tooltipPage';

test('Tooltip - adaptive with preferred position "top-center"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-top-center');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('top-center-to-right-center');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    `tooltip-top-center-to-right-center.png`
  );

  await tooltipPage.showTooltipByTestId('top-center-to-top-right');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-top-center-to-top-right.png'
  );

  await tooltipPage.showTooltipByTestId('top-center-to-left-center');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-top-center-to-left-center.png'
  );

  await tooltipPage.showTooltipByTestId('top-center-to-top-left');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-top-center-to-top-left.png'
  );
});

test('Tooltip - adaptive with preferred position "top-left"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-top-left');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('top-left-to-top-center');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-top-left-to-top-center.png'
  );

  await tooltipPage.showTooltipByTestId('top-left-to-top-right');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'tooltip-top-left-to-top-right.png'
  );
});

test('Tooltip - adaptive with preferred position "top-right"', async ({
  page,
}) => {
  const tooltipPage = new TooltipPage(page);
  tooltipPage.setPath('?path=/story/next-tooltip--adaptive-top-right');
  await tooltipPage.goto();

  await tooltipPage.showTooltipByTestId('top-right-to-top-left');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'top-right-to-top-left.png'
  );

  await tooltipPage.showTooltipByTestId('top-right-to-top-center');
  await expect(tooltipPage.canvas).toHaveScreenshot(
    'top-right-to-top-center.png'
  );
});
