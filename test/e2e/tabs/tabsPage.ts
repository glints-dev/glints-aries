import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class TabsPage extends StoryBookPage {
  readonly tabHeaders: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-tabs--interactive');
    this.tabHeaders = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button');
  }
}
