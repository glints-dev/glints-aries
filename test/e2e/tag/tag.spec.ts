import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-tag--default');

const getRemoveableTagPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-tag--removeable');

const getClickableTagPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-tag--clickable');

const getClickableDisabledTagPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-tag--clickable-disabled');

test('Tag - standard size', async ({ page }) => {
  const tagPage = getPage(page);
  await tagPage.goto();
  await expect(tagPage.container).toHaveScreenshot('tag-standard-size.png');
});

test('Tag - small size', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const tagPage = getPage(page);
  await tagPage.goto();
  await expect(tagPage.container).toHaveScreenshot('tag-small-size.png');
});

test('Tag - custom text color', async ({ page }) => {
  const tagPage = getPage(page);
  await tagPage.goto('args=textColor:!hex(3fde00)');
  await expect(tagPage.container).toHaveScreenshot('tag-custom-text-color.png');
});

test('removeable tag - standard size', async ({ page }) => {
  const tagPage = getRemoveableTagPage(page);
  await tagPage.goto();
  await expect(tagPage.container).toHaveScreenshot(
    'tag-removeable-standard-size.png'
  );
});

test('removeable tag - small size', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const tagPage = getRemoveableTagPage(page);
  await tagPage.goto();
  await expect(tagPage.container).toHaveScreenshot(
    'tag-removeable-small-size.png'
  );
});

test.describe('hover state', () => {
  test('removeable tag hover state - standard size', async ({ page }) => {
    const tagPage = getRemoveableTagPage(page);
    await tagPage.goto();

    await tagPage.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button')
      .first()
      .hover({ force: true });

    await expect(tagPage.container).toHaveScreenshot(
      'tag-removeable-hover-standard-size.png'
    );
  });

  test('removeable tag hover state - small size', async ({ page }) => {
    page.setViewportSize({ width: 768, height: 600 });
    const tagPage = getRemoveableTagPage(page);
    await tagPage.goto();
    await tagPage.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button')
      .first()
      .hover({ force: true });
    await expect(tagPage.container).toHaveScreenshot(
      'tag-removeable-hover-small-size.png'
    );
  });
});

test('removeable tag focused state - standard size', async ({ page }) => {
  const tagPage = getRemoveableTagPage(page);
  await tagPage.goto();

  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByRole('button')
    .first()
    .focus();

  await expect(tagPage.container).toHaveScreenshot(
    'tag-removeable-focus-standard-size.png'
  );
});

test('removeable tag focused state - small size', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const tagPage = getRemoveableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByRole('button')
    .first()
    .focus();
  await expect(tagPage.container).toHaveScreenshot(
    'tag-removeable-focus-small-size.png'
  );
});

test('removeable tag pressed state - standard size', async ({ page }) => {
  const tagPage = getRemoveableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByRole('button')
    .first()
    .hover();

  await tagPage.page.mouse.down();
  await expect(tagPage.container).toHaveScreenshot(
    'tag-removeable-pressed-standard-size.png'
  );
});

test('removeable tag pressed state - small size', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });
  const tagPage = getRemoveableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByRole('button')
    .first()
    .hover();

  await tagPage.page.mouse.down();
  await expect(tagPage.container).toHaveScreenshot(
    'tag-removeable-pressed-small-size.png'
  );
});

test('clickable tag hover state', async ({ page }) => {
  const tagPage = getClickableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByText('Clickable Tag')
    .first()
    .hover({ force: true });
  await expect(tagPage.container).toHaveScreenshot('tag-clickable-hover.png');
});

test('clickable tag hover state - small size', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });

  const tagPage = getClickableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByText('Clickable Tag')
    .first()
    .hover({ force: true });
  await expect(tagPage.container).toHaveScreenshot(
    'tag-clickable-hover-small-size.png'
  );
});

test('clickable tag active state', async ({ page }) => {
  const tagPage = getClickableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByText('Clickable Tag')
    .first()
    .click();

  await tagPage.page.mouse.down();
  await expect(tagPage.container).toHaveScreenshot('tag-clickable-active.png');
});

test('clickable tag active state - small size', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });

  const tagPage = getClickableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByText('Clickable Tag')
    .first()
    .click();

  await tagPage.page.mouse.down();
  await expect(tagPage.container).toHaveScreenshot(
    'tag-clickable-active-small-size.png'
  );
});

test('clickable tag focus state', async ({ page }) => {
  const tagPage = getClickableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByText('Clickable Tag')
    .first()
    .focus();

  await expect(tagPage.container).toHaveScreenshot('tag-clickable-focus.png');
});

test('clickable tag focus state - small size', async ({ page }) => {
  page.setViewportSize({ width: 768, height: 600 });

  const tagPage = getClickableTagPage(page);
  await tagPage.goto();
  await tagPage.page
    .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
    .getByText('Clickable Tag')
    .first()
    .focus();

  await expect(tagPage.container).toHaveScreenshot(
    'tag-clickable-focus-small-size.png'
  );
});

test('clickable tag disabled state', async ({ page }) => {
  const tagPage = getClickableDisabledTagPage(page);
  await tagPage.goto();

  await expect(tagPage.container).toHaveScreenshot(
    'tag-clickable-disabled.png'
  );
});

// test('clickable tag disabled state - small size', async ({ page }) => {
//   page.setViewportSize({ width: 768, height: 600 });

//   const tagPage = getClickableDisabledTagPage(page);
//   await tagPage.goto();

//   await expect(tagPage.container).toHaveScreenshot(
//     'tag-clickable-disabled-small-size.png'
//   );
// });
