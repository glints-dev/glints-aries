import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class CheckboxPage extends StoryBookPage {
  readonly checkbox: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-checkbox--interactive');
    this.checkbox = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('checkbox', { name: 'Label' })
      .first();
  }
}
