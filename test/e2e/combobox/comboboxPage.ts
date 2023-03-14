import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class ComboboxPage extends StoryBookPage {
  readonly textInput: Locator;
  readonly options: Locator;
  readonly label: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-combobox--multi-select');
    this.textInput = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('textbox');

    this.options = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('listitem');

    this.label = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('Label');
  }

  async gotoMultiSelectScrollablePage(args?: Args) {
    this.setPath('?path=/story/next-combobox--multi-select-scrollable');
    await this.goto(args);
  }
}
