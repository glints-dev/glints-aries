import { Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class PaginationPage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-pagination--interactive');
  }

  toPage(page: number) {
    return this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: `${page}` })
      .click();
  }

  previous() {
    return this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('previous-page')
      .click();
  }

  next() {
    return this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('next-page')
      .click();
  }

  previousJumper() {
    return this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('previous-jumper')
      .click();
  }

  nextJumper() {
    return this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('next-jumper')
      .click();
  }
}
