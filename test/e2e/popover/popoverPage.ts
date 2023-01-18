import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class PopoverPage extends StoryBookPage {
  readonly activators: Locator;
  readonly container: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-popover--interactive');
    this.container = page.locator('#storybook-preview-wrapper');
    this.activators = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button');
  }
}
