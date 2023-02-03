import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class TooltipPage extends StoryBookPage {
  readonly tooltipActivator: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-tooltip--interactive');
    this.tooltipActivator = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId('tooltip-activator');
  }

  async showTooltip(args?: Args) {
    await this.goto(args);
    await this.tooltipActivator.hover();
  }

  async showTooltipByTestId(testId: string) {
    const tooltipEl = this.page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByTestId(testId);

    tooltipEl.hover();
  }
}
