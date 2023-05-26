import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class SidesheetPage extends StoryBookPage {
  readonly wrapper: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-sidesheet--interactive');
    this.wrapper = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('side-sheet-wrapper-unique');
  }

  async gotoWithTabsPage() {
    this.setPath('?path=/story/next-sidesheet--with-tabs-interactive');
  }

  async openSidesheet(args?: Args) {
    await this.goto(args);
    await this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: 'Show Side Sheet' })
      .click();
  }

  async closeSidesheet() {
    await this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('sidesheet-close-btn')
      .click();
  }
}
