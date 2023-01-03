import { test, expect, Page } from '@playwright/test';
import { ButtonPage } from './buttonPage';

const getPage = (page: Page) => {
  const buttonPage = new ButtonPage(page);
  buttonPage.setPath(
    '?path=/story/button-next-outlinemonochromebutton--interactive'
  );
  return buttonPage;
};

test('Outline Monochrome Button', async ({ page }) => {
  const buttonPage = getPage(page);
  buttonPage.setPath(
    '?path=/story/button-next-outlinemonochromebutton--interactive'
  );
  await buttonPage.goto();

  await expect(buttonPage.container).toHaveScreenshot(
    'outline-monochrome-button.png'
  );

  await buttonPage.button.focus();
  await expect(buttonPage.container).toHaveScreenshot(
    'outline-monochrome-button-focus.png'
  );
  await buttonPage.container.click();

  await buttonPage.button.hover();
  await expect(buttonPage.container).toHaveScreenshot(
    'outline-monochrome-button-hover.png'
  );

  await buttonPage.button.click();
  await buttonPage.page.mouse.down();
  await expect(buttonPage.container).toHaveScreenshot(
    'outline-monochrome-button-pressed.png'
  );
});

test('Outline Monochrome Button - active', async ({ page }) => {
  const buttonPage = getPage(page);
  await buttonPage.goto('args=active:true');
  await expect(buttonPage.container).toHaveScreenshot(
    'outline-monochrome-button-active.png'
  );
});
