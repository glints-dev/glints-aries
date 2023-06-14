import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class TextAreaPage extends StoryBookPage {
  readonly text: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-textarea--interactive');
    this.text = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('textbox');
  }
}
