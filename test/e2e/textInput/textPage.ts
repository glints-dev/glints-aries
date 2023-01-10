import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class TextPage extends StoryBookPage {
  readonly text: Locator;
  readonly clearButton: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-textinput--interactive');
    this.text = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('textbox');
    this.clearButton = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('svg');
  }
}
