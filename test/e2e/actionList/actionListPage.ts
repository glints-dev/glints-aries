import { Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

export class ActionListPage extends StoryBookPage {
  constructor(page: Page) {
    super(page, '?path=/story/next-actionlist--interactive');
  }

  getActionByLabelName(label: string) {
    return this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button', { name: label });
  }
}
