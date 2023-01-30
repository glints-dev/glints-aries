import { Locator, Page } from '@playwright/test';
import { Args } from '../storybookPage';
import { PaginationPage } from './paginationPage';

export class SimplePaginationPage extends PaginationPage {
  readonly currentPageButton: Locator;
  readonly currentPageInput: Locator;
  constructor(page: Page) {
    super(page);
    this.currentPageButton = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('current-page-btn');
    this.currentPageInput =
      this.currentPageButton.getByTestId('current-page-input');
  }

  async goto(args?: Args) {
    this.setPath(`?path=/story/next-simplepagination--interactive`);
    super.goto(args);
  }
}
