import { Locator, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class UploadPage extends StoryBookPage {
  readonly input: Locator;
  readonly uploadContainer: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-upload--interactive');
    this.input = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('input[type="file"]');
    this.uploadContainer = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('upload-container');
  }
}
