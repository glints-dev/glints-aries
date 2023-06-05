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

  async gotoWithTwoButtonsPage(args?: Args) {
    this.setPath('?path=/story/next-banner--with-two-buttons');
    await this.goto(args);
  }

  async gotoFixedBannerPage(args?: Args) {
    this.setPath('?path=/story/next-banner--fixed-banner');
    await this.goto(args);
  }

  async gotoFixedBannerWithButtonsPage(args?: Args) {
    this.setPath('?path=/story/next-banner--fixed-banner-with-buttons');
    await this.goto(args);
  }
}
