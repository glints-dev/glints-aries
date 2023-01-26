import { Page } from '@playwright/test';
import { Args } from '../storybookPage';
import { PaginationPage } from './paginationPage';

export class SimplePaginationPage extends PaginationPage {
  constructor(page: Page) {
    super(page);
  }

  async goto(args?: Args) {
    this.setPath(`?path=/story/next-simplepagination--interactive`);
    super.goto(args);
  }
}
