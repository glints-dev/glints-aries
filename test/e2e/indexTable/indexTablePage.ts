import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class IndexTablePage extends StoryBookPage {
  [x: string]: any;
  readonly checkboxes: Locator;
  readonly tableRow: Locator;
  readonly moveToAction: Locator;
  readonly bulkAction: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-indextable--interactive');
    this.checkboxes = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('checkbox');
    this.tableRow = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('Dwi Nugraha Putri');
    this.moveToAction = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: 'Move to' });
    this.bulkAction = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('.Polaris-BulkActions--groupNotSticky');
  }
}
