import { Locator, Page } from '@playwright/test';
import { Args, StoryBookPage } from '../storybookPage';

export class SelectPage extends StoryBookPage {
  readonly activatorSelect: Locator;
  readonly activatorTextInput: Locator;
  readonly optionList: Locator;
  readonly optionListEmpty: Locator;
  readonly options: Locator;
  readonly optionSingapore: Locator;
  readonly label: Locator;
  readonly searchableSelect: Locator;
  readonly clearButton: Locator;

  constructor(page: Page) {
    super(page, '?path=/story/next-select--non-searchable-single-select');
    this.activatorSelect = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('button');

    this.activatorTextInput = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('textbox');

    this.optionList = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('.Polaris-PositionedOverlay');

    this.optionListEmpty = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('No matching results');

    this.options = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByRole('listitem');

    this.optionSingapore = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('Singapore');

    this.label = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .getByText('Label');

    this.searchableSelect = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('.searchable-select');

    this.clearButton = page
      .frameLocator('internal:attr=[title="storybook-preview-iframe"i]')
      .locator('.clear-icon');
  }

  async gotoNonSearchableMultiSelectPage(args?: Args) {
    this.setPath('?path=/story/next-select--non-searchable-multiple-select');
    await this.goto(args);
  }

  async gotoWithErrorNonSearchablePage(args?: Args) {
    this.setPath('?path=/story/next-select--with-error-non-searchable');
    await this.goto(args);
  }

  async gotoNonSearchableDisabledPage(args?: Args) {
    this.setPath('?path=/story/next-select--non-searchable-disabled');
    await this.goto(args);
  }

  async gotoNonSearchablePrefixedPage(args?: Args) {
    this.setPath('?path=/story/next-select--non-searchable-prefixed');
    await this.goto(args);
  }

  async gotoSearchableSingleSelectPage(args?: Args) {
    this.setPath('?path=/story/next-select--searchable-single-select');
    await this.goto(args);
  }

  async gotoSearchableSingleSelectWithOverflowingInputStatePage(args?: Args) {
    this.setPath(
      '?path=/story/next-select--searchable-single-select-with-overflowing-input-state'
    );
    await this.goto(args);
  }

  async gotoSearchableSingleSelectWithInitialValuePage(args?: Args) {
    this.setPath(
      '?path=/story/next-select--searchable-single-select-with-initial-value'
    );
    await this.goto(args);
  }

  async gotoAsyncSearchableSingleSelectPage(args?: Args) {
    this.setPath(
      '?path=/story/next-select--async-searchable-single-with-input-state'
    );
    await this.goto(args);
  }

  async gotoSearchableMultiSelectPage(args?: Args) {
    this.setPath('?path=/story/next-select--searchable-multi-select');
    await this.goto(args);
  }

  async gotoScrollableSelectPage(args?: Args) {
    this.setPath('?path=/story/next-select--multi-select-scrollable');
    await this.goto(args);
  }

  async gotoWithInlineErrorPage(args?: Args) {
    this.setPath('?path=/story/next-select--with-inline-error');
    await this.goto(args);
  }
  async gotoSearchableDisabledPage(args?: Args) {
    this.setPath('?path=/story/next-select--searchable-disabled');
    await this.goto(args);
  }

  async gotoWithCustomPrefixPage(args?: Args) {
    this.setPath('?path=/story/next-select--with-custom-prefix');
    await this.goto(args);
  }
}
