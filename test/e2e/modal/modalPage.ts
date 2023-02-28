import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class ModalPage extends StoryBookPage {
  readonly wrapper: Locator;
  constructor(page: Page) {
    super(page, '?path=/story/next-modal--interactive');
    this.wrapper = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('modal-wrapper');
  }

  async gotoWithProviderPage(args?: Args) {
    this.setPath('?path=/story/next-modalwithprovider--interactive');
    await this.goto(args);
  }

  async gotoWithCustomActionsPage(args?: Args) {
    this.setPath('?path=/story/next-modal--with-custom-actions');
    await this.goto(args);
  }

  async gotoWithLargeContentPage(args?: Args) {
    this.setPath('?path=/story/next-modal--with-large-content');
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
