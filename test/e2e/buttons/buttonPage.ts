import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class ButtonPage extends StoryBookPage {
  readonly button: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-button--interactive');
    this.button = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: 'Label' });
  }

  async gotoWithBadgePage(args?: Args) {
    this.setPath('?path=/story/next-button--with-badge');
    await this.goto(args);
  }
}
