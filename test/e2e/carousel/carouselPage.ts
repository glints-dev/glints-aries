import { Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class CarouselPage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-carousel--interactive');
  }

  async gotoHideIndicatorPage(args?: Args) {
    this.setPath('?path=/story/next-carousel--hide-indicator');
    await this.goto(args);
  }
}
