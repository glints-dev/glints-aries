import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class IndexTablePage extends StoryBookPage {
  [x: string]: any;
  readonly checkboxes: Locator;
  readonly tableHeadRow: Locator;
  readonly tableRow: Locator;
  readonly moveToAction: Locator;
  readonly bulkAction: Locator;
  readonly bulkActionOption: Locator;
  readonly actionList: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-indextable--interactive');
    this.checkboxes = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('checkbox');
    this.tableHeadRow = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('selected candidates');
    this.tableRow = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('Dwi Nugraha Putri');
    this.moveToAction = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: 'Move to' });
    this.bulkAction = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('.Polaris-BulkActions--groupNotSticky');
    this.bulkActionOption = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('Assessment');
    this.actionList = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('.Polaris-ActionList');
  }

  async verifyCheckboxValues(expectedValues: boolean[]): Promise<boolean> {
    for (let i = 0; i < expectedValues.length; i++) {
      const checkbox = this.checkboxes.locator(`nth=${i}`);
      if ((await checkbox.isChecked()) !== expectedValues[i]) return false;
    }
    return true;
  }
}
