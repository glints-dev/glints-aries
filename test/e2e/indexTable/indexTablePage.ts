import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class IndexTablePage extends StoryBookPage {
  [x: string]: any;
  readonly selectAllCheckbox: Locator;
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
      .locator('.CheckboxStyle__StyledCheckboxContainer-sc-a9bf1h-1');
    this.selectAllCheckbox = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('checkbox')
      .first();
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
    this.actionList = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('.Polaris-ActionList');
  }

  async verifyCheckboxValues(expectedValues: boolean[]): Promise<boolean> {
    for (let i = 2; i < 6; i++) {
      const checkbox = this.page
        .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
        .locator('input')
        .nth(i);
      if ((await checkbox.isChecked()) !== expectedValues[i - 2]) return false;
    }
    return true;
  }
}
