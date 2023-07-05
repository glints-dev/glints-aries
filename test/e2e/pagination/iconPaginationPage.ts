import { Page } from '@playwright/test';
import { Args } from '../storybookPage';
import { PaginationPage } from './paginationPage';

export class IconPaginationPage extends PaginationPage {
  constructor(page: Page) {
    super(page);
  }

  async goto(args?: Args) {
    this.setPath(`?path=/story/next-iconpagination--interactive`);
    super.goto(args);
  }

  async gotoWithLabel(args?: Args) {
    this.setPath(`?path=/story/next-iconpagination--with-label`);
    super.goto(args);
  }
}
