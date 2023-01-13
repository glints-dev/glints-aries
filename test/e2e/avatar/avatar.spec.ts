import { expect, Page, test } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-avatar--interactive');

const testData = [
  {
    testName: 'Avatar',
    args: '',
    screenshotResult: 'avatar',
  },
  {
    testName: 'Avatar - supplementary',
    args: 'variant:supplementary',
    screenshotResult: 'avatar-supplementary',
  },
  {
    testName: 'Avatar - warning',
    args: 'variant:warning',
    screenshotResult: 'avatar-warning',
  },
  {
    testName: 'Avatar - danger',
    args: 'variant:danger',
    screenshotResult: 'avatar-danger',
  },
  {
    testName: 'Avatar - success',
    args: 'variant:success',
    screenshotResult: 'avatar-success',
  },
  {
    testName: 'Avatar - outstanding',
    args: 'variant:outstanding',
    screenshotResult: 'avatar-outstanding',
  },
];

for (const [, testRecord] of testData.entries()) {
  test(`${testRecord.testName} - large`, async ({ page }) => {
    const avatarPage = getPage(page);
    await avatarPage.goto(
      `args=${testRecord.args};size:large` as `args=${string}`
    );
    await expect(avatarPage.container).toHaveScreenshot(
      `${testRecord.screenshotResult}-large.png`
    );
  });
}

for (const [, testRecord] of testData.entries()) {
  test(`${testRecord.testName} - medium`, async ({ page }) => {
    const avatarPage = getPage(page);
    await avatarPage.goto(
      `args=${testRecord.args};size:medium` as `args=${string}`
    );
    await expect(avatarPage.container).toHaveScreenshot(
      `${testRecord.screenshotResult}-medium.png`
    );
  });
}

test.describe('small viewport', () => {
  for (const [, testRecord] of testData.entries()) {
    test(`${testRecord.testName} - large`, async ({ page }) => {
      page.setViewportSize({ width: 768, height: 600 });
      const avatarPage = getPage(page);
      await avatarPage.goto(
        `args=${testRecord.args};size:large` as `args=${string}`
      );
      await expect(avatarPage.container).toHaveScreenshot(
        `${testRecord.screenshotResult}-small-viewport-large.png`
      );
    });
  }

  for (const [, testRecord] of testData.entries()) {
    test(`${testRecord.testName} - medium`, async ({ page }) => {
      page.setViewportSize({ width: 768, height: 600 });
      const avatarPage = getPage(page);
      await avatarPage.goto(
        `args=${testRecord.args};size:medium` as `args=${string}`
      );
      await expect(avatarPage.container).toHaveScreenshot(
        `${testRecord.screenshotResult}-small-viewport-medium.png`
      );
    });
  }
});
