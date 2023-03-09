import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class MenuPage extends StoryBookPage {
  readonly menuActivator: Locator;
  readonly options: Locator;
  readonly pendingOption: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-menu--basic');

    this.options = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('listitem');
  }
}