import { test, expect, Page } from '@playwright/test';
import { CheckboxPage } from './checkboxPage';

const getCheckboxPage = (page: Page) => {
  return new CheckboxPage(page);
};

test('Checkbox', async ({ page }) => {
  const checkboxPage = getCheckboxPage(page);
  await checkboxPage.goto();

  await expect(checkboxPage.container).toHaveScreenshot('checkbox.png');

  await checkboxPage.container.click();
  await checkboxPage.page.keyboard.press('Tab');
  await expect(checkboxPage.container).toHaveScreenshot('checkbox-focus.png');
  await checkboxPage.container.click();

  await checkboxPage.checkbox.locator('input').click();
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-checked-onclicked.png'
  );
});

test('Checkbox - checked - by default', async ({ page }) => {
  const checkboxPage = getCheckboxPage(page);

  await checkboxPage.goto('args=checked:true');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-checked-by-default.png'
  );
});

test('Checkbox - indeterminate', async ({ page }) => {
  const checkboxPage = getCheckboxPage(page);

  await checkboxPage.goto('args=indeterminate:true');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-indeterminate.png'
  );
});

test('Checkbox - disabled', async ({ page }) => {
  const checkboxPage = getCheckboxPage(page);

  await checkboxPage.goto('args=disabled:true');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-disabled.png'
  );

  await checkboxPage.goto('args=disabled:true;checked:true');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-disabled-checked.png'
  );

  await checkboxPage.goto('args=disabled:true;indeterminate:true');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-disabled-indeterminate.png'
  );
});

test('Checkbox - in table on hover state', async ({ page }) => {
  const checkboxPage = getCheckboxPage(page);
  await checkboxPage.goto('args=inTable:true');

  await checkboxPage.checkbox.locator('input').hover();
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-in-table-onhover.png'
  );
});

test('Checkbox - hasError', async ({ page }) => {
  const checkboxPage = getCheckboxPage(page);

  await checkboxPage.goto('args=hasError:true');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-hasError.png'
  );

  await checkboxPage.goto('args=hasError:true;checked:true');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-hasError-checked.png'
  );

  await checkboxPage.goto('args=hasError:true;indeterminate:true');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-hasError-indeterminate.png'
  );
});

test('Checkbox - helpText', async ({ page }) => {
  const checkboxPage = getCheckboxPage(page);

  await checkboxPage.goto('args=helpText:Help text goes here');
  await expect(checkboxPage.container).toHaveScreenshot(
    'checkbox-helpText.png'
  );
});
