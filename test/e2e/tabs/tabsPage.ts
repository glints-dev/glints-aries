import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class TabsPage extends StoryBookPage {
  readonly tabHeaders: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-tabs--interactive');
    this.tabHeaders = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button');
  }

  async gotoOverflowTabsPage(args?: Args) {
    this.setPath('?path=/story/next-tabs--overflow');
    await this.goto(args);
  }

  async gotoDisabledTabsPage(args?: Args) {
    this.setPath('?path=/story/next-tabs--disabled');
    await this.goto(args);
  }

  async gotoWithCustomWrapperTabsPage(args?: Args) {
    this.setPath('?path=/story/next-tabs--custom-wrapper');
    await this.goto(args);
  }
}
