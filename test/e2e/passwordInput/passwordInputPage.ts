import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class PasswordInputPage extends StoryBookPage {
  readonly text: Locator;
  readonly eyeIcon: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-passwordinput--interactive');
    this.text = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('textbox');
    this.eyeIcon = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('eye-icon');
  }
}
