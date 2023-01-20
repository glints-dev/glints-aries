import { Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class BannerPage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-banner--interactive');
  }

  async gotoWithButtonsPage(args?: Args) {
    this.setPath('?path=/story/next-banner--with-buttons');
    await this.goto(args);
  }
}
