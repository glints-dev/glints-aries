import { Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class EmptyStatePage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-emptystate--interactive');
  }

  async gotoWithPrimaryButtonPage(args?: Args) {
    this.setPath('?path=/story/next-emptystate--with-buttons');
    await this.goto(args);
  }

  async gotoWithBasicButtonPage(args?: Args) {
    this.setPath('?path=/story/next-emptystate--with-buttons');
    await this.goto(args);
  }

  async gotoWithMinimum(args?: Args) {
    this.setPath('?path=/story/next-emptystate--with-buttons');
    await this.goto(args);
  }
}
