import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class IndexTablePage extends StoryBookPage {
  [x: string]: any;
  readonly checkboxes: Locator;
  readonly container: Locator;
  readonly tableRow: Locator;
  readonly moveToAction: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-indextable--interactive');
    this.container = page.locator('#storybook-preview-wrapper');
    this.checkboxes = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('checkbox');
    this.tableRow = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('Dwi Nugraha Putri');
    this.moveToAction = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: 'Move to' });
  }
}
