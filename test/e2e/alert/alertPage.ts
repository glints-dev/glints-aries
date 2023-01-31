import { Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class AlertPage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-alert--interactive');
  }

  async gotoWithProviderPage(args?: Args) {
    this.setPath('?path=/story/next-alertwithprovider--interactive');
    await this.goto(args);
  }

  async triggerAlert(args?: Args) {
    await this.goto(args);
    await this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: 'Show Alert' })
      .click();
  }
}
