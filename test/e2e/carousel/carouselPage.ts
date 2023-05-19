import { Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class CarouselPage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-carousel--interactive');
  }
}
