import { Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class ModalPage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-modal--interactive');
  }

  async gotoWithProviderPage(args?: Args) {
    this.setPath('?path=/story/next-modalwithprovider--interactive');
    await this.goto(args);
  }

  async gotoWithCustomActionsPage(args?: Args) {
    this.setPath('?path=/story/next-modal--with-custom-actions');
    await this.goto(args);
  }

  async triggerModal(args?: Args) {
    await this.goto(args);
    await this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: 'Show Modal' })
      .click();
  }

  async closeModal() {
    await this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('modal-close-btn')
      .click();
  }
}
