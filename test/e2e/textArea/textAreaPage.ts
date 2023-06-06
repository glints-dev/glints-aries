import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class TextAreaPage extends StoryBookPage {
  readonly text: Locator;
  readonly clearButton: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-textarea--interactive');
    this.text = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('textbox');
  }

  async gotoWithPopulatedValuePage(args?: Args) {
    this.setPath('?path=/story/next-textarea--with-populated-value');
    await this.goto(args);
  }
}
