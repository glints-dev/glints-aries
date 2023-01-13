import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-badge--interactive');

const testData = [
  {
    testName: 'Badge',
    args: '',
    screenshotResult: 'badge.png',
  },
  {
    testName: 'Badge - informational',
    args: 'args=status:informational',
    screenshotResult: 'badge-informational.png',
  },
  {
    testName: 'Badge - success',
    args: 'args=status:success',
    screenshotResult: 'badge-success.png',
  },
  {
    testName: 'Badge - warning',
    args: 'args=status:warning',
    screenshotResult: 'badge-warning.png',
  },
  {
    testName: 'Badge - critical',
    args: 'args=status:critical',
    screenshotResult: 'badge-critical.png',
  },
  {
    testName: 'Badge - promotion',
    args: 'args=status:promotion',
    screenshotResult: 'badge-promotion.png',
  },
  {
    testName: 'Badge - new',
    args: 'args=status:new',
    screenshotResult: 'badge-new.png',
  },
];

for (const [, testRecord] of testData.entries()) {
  test(testRecord.testName, async ({ page }) => {
    const badgePage = getPage(page);
    await badgePage.goto(testRecord.args as `args=${string}`);
    await expect(badgePage.container).toHaveScreenshot(
      testRecord.screenshotResult
    );
  });
}
