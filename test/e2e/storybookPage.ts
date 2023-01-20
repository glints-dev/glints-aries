import { Locator, Page } from '@playwright/test';
// eslint-disable-next-line prettier/prettier
export type Args = `args=${string}`;

export class StoryBookPage {
  readonly page: Page;
  readonly container: Locator;
  private path: string;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
    this.container = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('body');
  }

  async goto(args?: Args) {
    await this.page.goto(`${this.path}${args ? `&${args}` : ''}`);
  }

  setPath(path: string) {
    this.path = path;
  }
}
