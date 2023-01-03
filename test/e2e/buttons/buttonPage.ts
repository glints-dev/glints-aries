import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class ButtonPage extends StoryBookPage {
  readonly button: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/button-next-button--interactive');
    this.button = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: 'Label' });
  }
}
