import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class StepsPage extends StoryBookPage {
  readonly nextButton: Locator;
  readonly errorButton: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-steps--interactive');
    this.nextButton = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('[data-testid="next-button"]');
    this.errorButton = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('[data-testid="error-button"]');
  }
}
