import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class MenuPage extends StoryBookPage {
  readonly options: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-menu--basic');

    this.options = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('listitem');
  }

  async gotoAllowMultiplePage(args?: Args) {
    this.setPath('?path=/story/next-menu--allow-multiple');
    await this.goto(args);
  }

  async gotoSectionsPage(args?: Args) {
    this.setPath('?path=/story/next-menu--with-sections');
    await this.goto(args);
  }
}
