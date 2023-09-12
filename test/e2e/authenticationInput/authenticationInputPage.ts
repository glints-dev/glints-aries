import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';
export class AuthenticationInputPage extends StoryBookPage {
  readonly inputsContainer: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-authenticationinput--interactive');
    this.inputsContainer = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('.authentication-inputs-container');
  }

  async getNInput(item: number) {
    return this.inputsContainer.locator('.authentication-input').nth(item);
  }
}
