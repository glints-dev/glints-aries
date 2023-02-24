import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class LinkPage extends StoryBookPage {
  readonly link: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-link--default');
    this.link = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('Default Link');
  }
}
