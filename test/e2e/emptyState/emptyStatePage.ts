import { Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class EmptyStatePage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-emptystate--interactive');
  }

  async gotoWithLeastInfoPage(args?: Args) {
    this.setPath('?path=/story/next-emptystate--with-least-info');
    await this.goto(args);
  }

  async gotoWithBasicButtonOnlyPage(args?: Args) {
    this.setPath('?path=/story/next-emptystate--with-basic-button-only');
    await this.goto(args);
  }
}
