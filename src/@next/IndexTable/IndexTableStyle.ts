import { createGlobalStyle } from 'styled-components';
import { borderRadius16 } from '../utilities/borderRadius';
import { space8 } from '../utilities/spacing';
import { Blue, Neutral } from '../utilities/colors';
import {
  caption,
  subtitle2,
  body2 as typographyBody2,
} from '../Typography/TypographyStyles';

export const StyledIndexTable: any = createGlobalStyle<{ height?: string }>`
  :root {
    --p-surface: rgba(255, 255, 255, 1);
    --p-surface-dark: rgba(32, 33, 35, 1);
    --p-surface-subdued: rgba(250, 251, 251, 1);
    --p-surface-disabled: rgba(250, 251, 251, 1);
    --p-surface-hovered: rgba(246, 246, 247, 1);
    --p-surface-hovered-dark: rgba(47, 49, 51, 1);
    --p-surface-pressed: rgba(241, 242, 243, 1);
    --p-surface-pressed-dark: rgba(62, 64, 67, 1);
    --p-hint-from-direct-light: rgba(0, 0, 0, 0.15);
    --p-border: rgba(140, 145, 150, 1);
    --p-border-on-dark: rgba(80, 83, 86, 1);
    --p-border-neutral-subdued: rgba(186, 191, 195, 1);
    --p-border-disabled: rgba(210, 213, 216, 1);
    --p-border-subdued: rgba(201, 204, 207, 1);
    --p-border-depressed: rgba(87, 89, 89, 1);
    --p-border-shadow-subdued: rgba(186, 191, 196, 1);
    --p-divider: rgba(225, 227, 229, 1);
    --p-icon: rgba(92, 95, 98, 1);
    --p-icon-disabled: rgba(186, 190, 195, 1);
    --p-text: rgba(32, 34, 35, 1);
    --p-text-on-dark: rgba(227, 229, 231, 1);
    --p-text-disabled: rgba(140, 145, 150, 1);
    --p-text-subdued: rgba(109, 113, 117, 1);
    --p-interactive: rgba(44, 110, 203, 1);
    --p-interactive-hovered: rgba(31, 81, 153, 1);
    --p-interactive-pressed: rgba(16, 50, 98, 1);
    --p-focused: rgba(69, 143, 255, 1);
    --p-surface-selected: rgba(242, 247, 254, 1);
    --p-action-secondary-hovered: rgba(246, 246, 247, 1);
    --p-action-secondary-pressed: rgba(241, 242, 243, 1);
    --p-action-secondary-depressed: rgba(109, 113, 117, 1);
    --p-text-on-primary: rgba(255, 255, 255, 1);
    --p-surface-primary-selected: rgba(241, 248, 245, 1);
    --p-surface-highlight-subdued: rgba(235, 249, 252, 1);
    --p-shadow-base: 0 0 0 0.0625rem rgba(63, 63, 68, 0.05),
      0 0.0625rem 0.1875rem 0 rgba(63, 63, 68, 0.15);
    --p-shadow-deep: 0 0 0 0.0625rem rgba(6, 44, 82, 0.1),
      0 0.125rem 1rem rgba(33, 43, 54, 0.08);
    --p-shadow-button: 0 0.0625rem 0 rgba(0, 0, 0, 0.05);
    --p-shadow-popover: 0 0.1875rem 0.375rem -0.1875rem rgba(23, 24, 24, 0.08),
      0 0.5rem 1.25rem -0.25rem rgba(23, 24, 24, 0.12);
    --p-duration-100: 100ms;
    --p-border-radius-1: 0.25rem;
    --p-border-radius-2: 0.5rem;
    --p-border-width-1: 0.0625rem;
    --p-border-divider: var(--p-border-width-1) solid var(--p-divider);
    --p-space-025: 0.0625rem;
    --p-space-05: 0.125rem;
    --p-space-1: 0.25rem;
    --p-space-2: 0.5rem;
    --p-space-3: 0.75rem;
    --p-space-4: 1rem;
    --p-space-5: 1.25rem;
  }

  .Polaris-Text--root {
    margin: 0;
    text-align: inherit;
  }

  .Polaris-Text--visuallyHidden {
    position: absolute !important;
    top: 0;
    width: 0.0625rem !important;
    height: 0.0625rem !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip-path: inset(50%) !important;
    border: 0 !important;
    white-space: nowrap !important;
  }

  .Polaris-Text--regular {
    font-weight: 400;
  }

  .Polaris-Text--bodySm {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .Polaris-Icon {
    display: block;
    height: 1.25rem;
    width: 1.25rem;
    max-height: 100%;
    max-width: 100%;
    margin: auto;
  }

  .Polaris-Icon__Svg {
    position: relative;
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  .Polaris-Scrollable {
    --pc-scrollable-shadow-size: var(--p-space-5);
    --pc-scrollable-shadow-bottom: inset 0
      calc(var(--pc-scrollable-shadow-size) * -1)
      var(--pc-scrollable-shadow-size)
      calc(var(--pc-scrollable-shadow-size) * -1)
      var(--p-hint-from-direct-light);
    --pc-scrollable-shadow-top: inset 0 var(--pc-scrollable-shadow-size)
      var(--pc-scrollable-shadow-size)
      calc(var(--pc-scrollable-shadow-size) * -1)
      var(--p-hint-from-direct-light);
    --pc-scrollable-max-height: none;
    -webkit-overflow-scrolling: touch;
    position: relative;
    max-height: var(--pc-scrollable-max-height);
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .Polaris-Scrollable:focus {
    outline: 0.125rem solid var(--p-focused);
    outline-offset: var(--p-space-05);
  }

  .Polaris-Scrollable--horizontal {
    overflow-x: auto;
  }

  .Polaris-Scrollable--vertical {
    overflow-y: auto;
  }

  .Polaris-Scrollable--hasTopShadow {
    box-shadow: var(--pc-scrollable-shadow-top);
  }

  .Polaris-Scrollable--hasBottomShadow {
    box-shadow: var(--pc-scrollable-shadow-bottom);
  }

  .Polaris-Scrollable--hasTopShadow.Polaris-Scrollable--hasBottomShadow {
    box-shadow: var(--pc-scrollable-shadow-top),
      var(--pc-scrollable-shadow-bottom);
  }

  .Polaris-Popover {
    max-width: calc(100vw - 2rem);
    margin: 0.3125rem var(--p-space-2) var(--p-space-4);
    box-shadow: var(--p-shadow-popover);
    border-radius: var(--p-border-radius-2);
    backface-visibility: hidden;
    will-change: left, top;
  }

  .Polaris-Popover__PopoverOverlay {
    opacity: 0;
    transition: opacity var(--p-duration-100) cubic-bezier(0.25, 0.1, 0.25, 1),
      transform var(--p-duration-100) cubic-bezier(0.25, 0.1, 0.25, 1);
    transform: translateY(-0.3125rem);
  }

  .Polaris-Popover__PopoverOverlay--entering {
    opacity: 1;
    transform: translateY(0);
  }

  .Polaris-Popover__PopoverOverlay--open {
    opacity: 1;
    transform: none;
  }

  .Polaris-Popover__PopoverOverlay--exiting {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0ms;
  }

  .Polaris-Popover--measuring:not(.Polaris-Popover__PopoverOverlay--exiting) {
    opacity: 0;
    transform: translateY(-0.3125rem);
  }

  .Polaris-Popover--fullWidth {
    margin: 0.3125rem auto 0 auto;
  }

  .Polaris-Popover--fullWidth .Polaris-Popover__Content {
    max-width: none;
  }

  .Polaris-Popover--positionedAbove {
    margin: var(--p-space-4) var(--p-space-2) 0.3125rem;
  }

  .Polaris-Popover--positionedAbove.Polaris-Popover--fullWidth {
    margin: 0 auto 0.3125rem auto;
  }

  .Polaris-Popover__Wrapper {
    position: relative;
    overflow: hidden;
    background-color: var(--p-surface);
    border-radius: var(--p-border-radius-2);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Popover__Content {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: var(--p-border-radius-1);
    max-width: 25rem;
    max-height: 31.25rem;
  }

  .Polaris-Popover__Content:focus {
    outline: none;
  }

  .Polaris-Popover__Content--fullHeight {
    max-height: none;
  }

  .Polaris-Popover__Content--fluidContent {
    max-height: none;
    max-width: none;
  }

  .Polaris-Popover__Pane {
    flex: 1 1;
    max-width: 100%;
  }

  .Polaris-Popover__Pane + .Polaris-Popover__Pane {
    border-top: var(--p-border-divider);
  }

  .Polaris-Popover__Pane:focus {
    outline: none;
  }

  .Polaris-Popover__Pane--fixed {
    overflow: visible;
    flex: 0 0 auto;
  }

  .Polaris-Popover__Pane--captureOverscroll {
    overscroll-behavior: contain;
  }

  .Polaris-Popover__Section {
    padding: var(--p-space-4);
  }

  .Polaris-Popover__Section + .Polaris-Popover__Section {
    border-top: var(--p-border-divider);
  }

  .Polaris-Popover__FocusTracker {
    position: absolute !important;
    top: 0;
    width: 0.0625rem !important;
    height: 0.0625rem !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip-path: inset(50%) !important;
    border: 0 !important;
    white-space: nowrap !important;
  }

  @media print {
    .Polaris-Popover__PopoverOverlay--hideOnPrint {
      display: none !important;
    }
  }

  .Polaris-PositionedOverlay {
    position: absolute;
    z-index: 400;
  }

  .Polaris-ActionList {
    outline: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .Polaris-ActionList__Section:not(:first-child) {
    border-top: var(--p-border-divider);
  }

  .Polaris-ActionList__Section:not(:first-child)
    > .Polaris-ActionList__Section--withoutTitle
    .Polaris-ActionList__Actions {
    padding-top: var(--p-space-2);
  }

  .Polaris-ActionList__Actions {
    outline: none;
    list-style: none;
    margin: 0;
    padding: var(--p-space-2);
  }

  .Polaris-ActionList
    > .Polaris-ActionList__Section--withoutTitle
    .Polaris-ActionList__Actions,
  .Polaris-ActionList__Section:first-child
    > .Polaris-ActionList__Section--withoutTitle
    .Polaris-ActionList__Actions {
    border-top: none;
    padding-top: var(--p-space-2);
  }

  .Polaris-ActionList
    .Polaris-ActionList__Section
    .Polaris-ActionList__Actions {
    padding-top: 0;
  }

  .Polaris-ActionList__Item {
    --pc-action-list-image-size: 1.25rem;
    --pc-action-list-item-min-height: 2.5rem;
    --pc-action-list-item-vertical-padding: calc(
      (var(--pc-action-list-item-min-height) - 1.25rem) / 2
    );
    appearance: none;
    margin: 0;
    background: none;
    border: none;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    cursor: pointer;
    position: relative;
    display: block;
    width: 100%;
    min-height: var(--pc-action-list-item-min-height);
    text-align: left;
    text-decoration: none;
    padding: var(--pc-action-list-item-vertical-padding) var(--p-space-2);
    border-radius: var(--p-border-radius-1);
    border-top: var(--p-border-width-1) solid transparent;
  }

  .Polaris-ActionList__Item:focus {
    outline: none;
  }

  .Polaris-ActionList__Item::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -0.0625rem;
    right: -0.0625rem;
    bottom: -0.0625rem;
    left: -0.0625rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 -0.0625rem var(--p-focused);
    transition: box-shadow var(--p-duration-100) cubic-bezier(0.25, 0.1, 0.25, 1);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-ActionList__Item:hover {
    background-color: var(--p-surface-hovered);
    text-decoration: none;
    outline: 0.1875rem solid transparent;
  }

  .Polaris-ActionList__Item:active {
    background-color: var(--p-surface-pressed);
  }

  .Polaris-ActionList__Item:active svg {
    fill: var(--p-interactive);
  }

  .Polaris-ActionList__Item:focus:not(:active) {
    outline: 0.1875rem solid transparent;
  }

  .Polaris-ActionList__Item:focus:not(:active)::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-ActionList__Item:visited {
    color: inherit;
  }

  .Polaris-ActionList__Item.Polaris-ActionList--active {
    background-color: var(--p-surface-selected);
  }

  .Polaris-ActionList__Item.Polaris-ActionList--active svg {
    fill: var(--p-interactive);
  }

  .Polaris-ActionList__Item.Polaris-ActionList--active::before {
    content: '';
    background-color: var(--p-interactive);
    position: absolute;
    top: 0;
    left: calc(var(--p-space-2) * -1);
    height: 100%;
    display: block;
    width: 0.1875rem;
    border-top-right-radius: var(--p-border-radius-1);
    border-bottom-right-radius: var(--p-border-radius-1);
  }

  .Polaris-ActionList__Item.Polaris-ActionList--disabled {
    background-image: none;
    color: var(--p-text-disabled);
  }

  .Polaris-ActionList__Item.Polaris-ActionList--disabled
    .Polaris-ActionList__Prefix
    svg,
  .Polaris-ActionList__Item.Polaris-ActionList--disabled
    .Polaris-ActionList__Suffix
    svg {
    fill: var(--p-icon-disabled);
  }

  .Polaris-ActionList__Content {
    display: flex;
    align-items: center;
  }

  .Polaris-ActionList__Text {
    min-width: 0;
    max-width: 100%;
    flex: 1 1 auto;
  }

  .Polaris-Box--listReset {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    outline: none;
    padding-inline-start: 0;
  }

  .Polaris-Box {
    --pc-box-padding-block-end-xs: initial;
    --pc-box-padding-block-end-sm: initial;
    --pc-box-padding-block-end-md: initial;
    --pc-box-padding-block-end-lg: initial;
    --pc-box-padding-block-end-xl: initial;
    padding-block-end: var(--pc-box-padding-block-end-xs);
    --pc-box-padding-block-start-xs: initial;
    --pc-box-padding-block-start-sm: initial;
    --pc-box-padding-block-start-md: initial;
    --pc-box-padding-block-start-lg: initial;
    --pc-box-padding-block-start-xl: initial;
    padding-block-start: var(--pc-box-padding-block-start-xs);
    --pc-box-padding-inline-start-xs: initial;
    --pc-box-padding-inline-start-sm: initial;
    --pc-box-padding-inline-start-md: initial;
    --pc-box-padding-inline-start-lg: initial;
    --pc-box-padding-inline-start-xl: initial;
    padding-inline-start: var(--pc-box-padding-inline-start-xs);
    --pc-box-padding-inline-end-xs: initial;
    --pc-box-padding-inline-end-sm: initial;
    --pc-box-padding-inline-end-md: initial;
    --pc-box-padding-inline-end-lg: initial;
    --pc-box-padding-inline-end-xl: initial;
    padding-inline-end: var(--pc-box-padding-inline-end-xs);
    --pc-box-shadow: initial;
    --pc-box-background: initial;
    --pc-box-border-radius: initial;
    --pc-box-border-radius-end-start: initial;
    --pc-box-border-radius-end-end: initial;
    --pc-box-border-radius-start-start: initial;
    --pc-box-border-radius-start-end: initial;
    --pc-box-border: initial;
    --pc-box-border-block-end: initial;
    --pc-box-border-inline-start: initial;
    --pc-box-border-inline-end: initial;
    --pc-box-border-block-start: initial;
    --pc-box-color: initial;
    --pc-box-min-height: initial;
    --pc-box-min-width: initial;
    --pc-box-max-width: initial;
    --pc-box-overflow-x: initial;
    --pc-box-overflow-y: initial;
    --pc-box-width: initial;
    --pc-box-border-width: var(--p-border-width-1);
    --pc-box-inset-block-start: initial;
    --pc-box-inset-block-end: initial;
    --pc-box-inset-inline-start: initial;
    --pc-box-inset-inline-end: initial;
    inset-block-start: var(--pc-box-inset-block-start);
    inset-block-end: var(--pc-box-inset-block-end);
    inset-inline-start: var(--pc-box-inset-inline-start);
    inset-inline-end: var(--pc-box-inset-inline-end);
    background-color: var(--pc-box-background);
    box-shadow: var(--pc-box-shadow);
    border-radius: var(--pc-box-border-radius);
    border-end-start-radius: var(
      --pc-box-border-radius-end-start,
      var(--pc-box-border-radius)
    );
    border-end-end-radius: var(
      --pc-box-border-radius-end-end,
      var(--pc-box-border-radius)
    );
    border-start-start-radius: var(
      --pc-box-border-radius-start-start,
      var(--pc-box-border-radius)
    );
    border-start-end-radius: var(
      --pc-box-border-radius-start-end,
      var(--pc-box-border-radius)
    );
    border-block-end: var(--pc-box-border-block-end, var(--pc-box-border));
    border-inline-start: var(
      --pc-box-border-inline-start,
      var(--pc-box-border)
    );
    border-inline-end: var(--pc-box-border-inline-end, var(--pc-box-border));
    border-block-start: var(--pc-box-border-block-start, var(--pc-box-border));
    border-block-start-width: var(
      --pc-box-border-block-start-width,
      var(--pc-box-border-width)
    );
    border-block-end-width: var(
      --pc-box-border-block-end-width,
      var(--pc-box-border-width)
    );
    border-inline-start-width: var(
      --pc-box-border-inline-start-width,
      var(--pc-box-border-width)
    );
    border-inline-end-width: var(
      --pc-box-border-inline-end-width,
      var(--pc-box-border-width)
    );
    color: var(--pc-box-color);
    min-height: var(--pc-box-min-height);
    min-width: var(--pc-box-min-width);
    max-width: var(--pc-box-max-width);
    overflow-x: var(--pc-box-overflow-x);
    overflow-y: var(--pc-box-overflow-y);
    width: var(--pc-box-width);
    -webkit-overflow-scrolling: touch;
  }

  .Polaris-Button {
    --pc-button-slim-min-height: 1.75rem;
    --pc-button-large-min-height: 2.75rem;
    --pc-button-vertical-padding: calc(
      (2.25rem - 1.25rem - var(--p-space-05)) / 2
    );
    --pc-button-slim-vertical-padding: calc(
      (
          var(--pc-button-slim-min-height) - 1.25rem -
            var(--p-space-05)
        ) / 2
    );
    --pc-button-large-vertical-padding: calc(
      (
          var(--pc-button-large-min-height) - 1.25rem -
            var(--p-space-05)
        ) / 2
    );
    --pc-button-spinner-size: 1.25rem;
    --pc-button-segment: 10;
    --pc-button-focused: 20;
    --pc-button-disclosure-icon-offset: -0.375rem;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.25rem;
    min-width: 2.25rem;
    margin: 0;
    padding: calc(
        (2.25rem - 1.25rem - var(--p-space-05)) / 2
      )
      var(--p-space-4);
    background: var(--p-surface);
    box-shadow: var(--p-shadow-button);
    border-radius: var(--p-border-radius-1);
    color: var(--p-text);
    border: var(--p-border-width-1) solid var(--p-border-neutral-subdued);
    border-top-color: var(--p-border-subdued);
    border-bottom-color: var(--p-border-shadow-subdued);
    line-height: 1;
    text-align: center;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .Polaris-Button svg {
    fill: var(--p-icon);
  }

  .Polaris-Button::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: calc(var(--p-border-width-1) * -1 + -0.0625rem);
    right: calc(var(--p-border-width-1) * -1 + -0.0625rem);
    bottom: calc(var(--p-border-width-1) * -1 + -0.0625rem);
    left: calc(var(--p-border-width-1) * -1 + -0.0625rem);
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 calc(var(--p-border-width-1) * -1 + -0.0625rem)
      var(--p-focused);
    transition: box-shadow var(--p-duration-100) cubic-bezier(0.25, 0.1, 0.25, 1);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-Button:hover {
    background: var(--p-action-secondary-hovered);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Button:focus {
    box-shadow: var(--p-shadow-button);
    outline: 0;
  }

  .Polaris-Button:focus::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Button:active {
    background: var(--p-action-secondary-pressed);
    box-shadow: var(--p-shadow-button);
  }

  .Polaris-Button:active::after {
    border: none;
    box-shadow: none;
  }

  .Polaris-Button.Polaris-Button--pressed {
    background: var(--p-action-secondary-depressed);
    box-shadow: inset 0 0.0625rem 0 rgba(0, 0, 0, 0.15);
    color: var(--p-text-on-primary);
    border-color: var(--p-border-depressed);
  }

  .Polaris-Button.Polaris-Button--pressed svg {
    fill: currentColor;
  }

  @media (-ms-high-contrast: active) {
    .Polaris-Button {
      border: var(--p-border-width-1) solid windowText;
    }
  }

  .Polaris-Button__Content {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
    text-transform: initial;
    letter-spacing: initial;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 0.0625rem;
    min-height: 0.0625rem;
  }

  .Polaris-Button:not(.Polaris-Button--plain) .Polaris-Button__Content {
    width: 100%;
  }

  .Polaris-Button__Icon {
    margin-left: calc((var(--p-space-1)) * -1);
  }

  .Polaris-Button__Icon:last-child {
    margin-right: var(--pc-button-disclosure-icon-offset);
    margin-left: var(--p-space-1);
  }

  .Polaris-Button__Icon + *:not(.Polaris-Button__Icon) {
    margin-left: var(--p-space-1);
  }

  .Polaris-Button--sizeSlim {
    min-height: var(--pc-button-slim-min-height);
    padding: var(--pc-button-slim-vertical-padding) var(--p-space-3);
  }

  [data-buttongroup-segmented='true'] .Polaris-Button,
  [data-buttongroup-segmented='true'] .Polaris-Button::after {
    border-radius: 0;
  }

  [data-buttongroup-segmented='true'] > :first-child .Polaris-Button,
  [data-buttongroup-segmented='true'] > :first-child .Polaris-Button::after {
    border-radius: 0;
    border-top-left-radius: var(--p-border-radius-1);
    border-bottom-left-radius: var(--p-border-radius-1);
  }

  [data-buttongroup-segmented='true'] > :last-child .Polaris-Button,
  [data-buttongroup-segmented='true'] > :last-child .Polaris-Button::after {
    border-radius: 0;
    border-top-right-radius: var(--p-border-radius-1);
    border-bottom-right-radius: var(--p-border-radius-1);
  }

  [data-buttongroup-segmented='true'] > :last-child:first-child .Polaris-Button,
  [data-buttongroup-segmented='true']
    > :last-child:first-child
    .Polaris-Button::after {
    border-radius: var(--p-border-radius-1);
  }

  [data-buttongroup-connected-top='true'] > :first-child .Polaris-Button,
  [data-buttongroup-connected-top='true']
    > :first-child
    .Polaris-Button::after {
    border-top-left-radius: 0;
  }

  [data-buttongroup-connected-top='true'] > :last-child .Polaris-Button,
  [data-buttongroup-connected-top='true'] > :last-child .Polaris-Button::after {
    border-top-right-radius: 0;
  }

  [data-buttongroup-full-width='true'] .Polaris-Button {
    display: flex;
    width: 100%;
  }

  .Polaris-Stack {
    --pc-stack-spacing: var(--p-space-4);
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-top: calc(var(--pc-stack-spacing) * -1);
    margin-left: calc(var(--pc-stack-spacing) * -1);
  }

  .Polaris-Stack > .Polaris-Stack__Item {
    margin-top: var(--pc-stack-spacing);
    margin-left: var(--pc-stack-spacing);
    max-width: 100%;
  }

  .Polaris-Stack--noWrap {
    flex-wrap: nowrap;
  }

  .Polaris-Stack--spacingNone {
    --pc-stack-spacing: 0;
  }

  .Polaris-Stack--alignmentCenter {
    align-items: center;
  }

  .Polaris-Stack__Item {
    flex: 0 0 auto;
    min-width: 0;
  }

  .Polaris-Inline {
    --pc-inline-gap-xs: initial;
    --pc-inline-gap-sm: initial;
    --pc-inline-gap-md: initial;
    --pc-inline-gap-lg: initial;
    --pc-inline-gap-xl: initial;
    gap: var(--pc-inline-gap-xs);
    display: flex;
    flex-wrap: var(--pc-inline-wrap);
    align-items: var(--pc-inline-block-align);
    justify-content: var(--pc-inline-align);
  }

  .Polaris-BulkActions__Group {
    /* stylelint-disable -- polaris: Used to apply dark theme to action buttons */
    --p-surface: var(--p-surface-dark);
    --p-text: var(--p-text-on-dark);
    --p-icon: var(--p-text-on-dark);
    --p-border-neutral-subdued: var(--p-border-on-dark);
    --p-border-subdued: var(--p-border-on-dark);
    --p-border-shadow-subdued: var(--p-border-on-dark);
    --p-action-secondary-hovered: var(--p-surface-hovered-dark);
    --p-action-secondary-pressed: var(
      --p-surface-pressed-dark
    ); /* stylelint-enable */
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    border: none;
    text-transform: initial;
    letter-spacing: initial;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    opacity: 0;
    width: 100%;
    justify-content: center;
    transition: var(--p-duration-100) cubic-bezier(0.25, 0.1, 0.25, 1);
    transition-property: transform, opacity;
    transform: translateY(7.5rem);
    padding: 0 var(--p-space-4);
    backface-visibility: hidden;
    will-change: transform, opacity;
  }

  @media (min-width: 48em) {
    .Polaris-BulkActions__Group {
      font-size: 0.875rem;
    }
  }

  .Polaris-BulkActions__Group.Polaris-BulkActions--groupNotSticky {
    transform: none;
    opacity: 1;
  }

  .Polaris-BulkActions__Group.Polaris-BulkActions__Group--entering,
  .Polaris-BulkActions__Group.Polaris-BulkActions__Group--exiting {
    opacity: 0;
    display: flex;
  }

  .Polaris-BulkActions__Group.Polaris-BulkActions__Group--entered {
    opacity: 1;
    display: flex;
    transform: translateY(0);
  }

  .Polaris-BulkActions__Group.Polaris-BulkActions__Group--exited {
    opacity: 0;
    display: none;
  }

  .Polaris-BulkActions__Group.Polaris-BulkActions__Group--measuring {
    transition: none;
    display: flex;
    opacity: 0;
  }

  .Polaris-BulkActions__ButtonGroupWrapper {
    width: auto;
    justify-content: flex-start;
    padding: var(--p-space-4);
    background: var(--p-surface);
    border-radius: var(--p-border-radius-2);
    box-shadow: var(--p-shadow-deep), var(--p-shadow-popover);
    max-width: 100%;
    pointer-events: auto;
    margin-top: 1rem;
  }

  .Polaris-BulkActions__Group--measuring
    .Polaris-BulkActions__ButtonGroupWrapper {
    position: absolute;
    width: auto;
  }

  .Polaris-BulkActions__BulkActionButton {
    white-space: nowrap;
  }

  .Polaris-BulkActions__BulkActionButton button {
    display: flex;
  }

  .Polaris-BulkActions__BulkActionButton button:hover {
    background-color: #666666;
  }

  .Polaris-BulkActions__BulkActionButton button:active {
    background-color: #666666 !important;
  }

  .Polaris-BulkActions--disabled {
    transition: none;
    box-shadow: none;
    border-color: var(--p-border-disabled);
    background: var(--p-surface-disabled);
    color: var(--p-text-disabled);
    cursor: default;
    pointer-events: none;
  }

  .Polaris-BulkActions--disabled svg {
    fill: var(--p-icon-disabled);
  }

  .Polaris-IndexTable { 
    --pc-index-table-translate-offset: 2.1875rem;
    --pc-index-table-table-header-offset: 2.25rem;
    --pc-index-table-cell: 1;
    --pc-index-table-sticky-cell: 31;
    --pc-index-table-scroll-bar: 35;
    --pc-index-table-bulk-actions: 36;
    --pc-index-table-loading-panel: 37;
    position: relative;
    border-radius: inherit;
    height: ${props => props.height};
    overflow: auto;
    ${subtitle2}

    .Polaris-IndexTable__TableHeading {
      ${caption}
    }
  }

  .Polaris-IndexTable__IndexTableWrapper {
    border-radius: inherit;
  }

  .Polaris-IndexTable__IndexTableWrapperWithBulkActions {
    --pc-index-table-bulk-actions-offset: 5.75rem;
    border-radius: 0;
  }

  .Polaris-IndexTable__LoadingContainer--enter {
    opacity: 0;
    transform: translateY(-100%);
  }

  .Polaris-IndexTable--loadingContainerEnterActive {
    opacity: 1;
    transition: opacity var(--p-duration-100) cubic-bezier(0, 0, 0.58, 1),
      transform var(--p-duration-100) cubic-bezier(0, 0, 0.58, 1);
    transform: translateY(0);
  }

  .Polaris-IndexTable__LoadingContainer--exit {
    opacity: 1;
    transform: translateY(0);
  }

  .Polaris-IndexTable--loadingContainerExitActive {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity var(--p-duration-100) cubic-bezier(0.42, 0, 1, 1),
      transform var(--p-duration-100) cubic-bezier(0.42, 0, 1, 1);
  }

  .Polaris-IndexTable__LoadingPanel {
    position: absolute;
    z-index: var(--pc-index-table-loading-panel);
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: var(--p-surface);
    padding: var(--p-space-2) var(--p-space-4);
    box-shadow: var(--p-shadow-base);
  }

  .Polaris-IndexTable__LoadingPanel .Polaris-IndexTable__LoadingPanelRow {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    background: var(--p-surface-highlight-subdued);
    padding: var(--p-space-2);
    padding-bottom: var(--p-space-1);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-IndexTable__LoadingPanelText {
    margin-left: var(--p-space-3);
    color: var(--p-text);
  }

  .Polaris-IndexTable__Table {
    width: 100%;
    min-width: 100%;
    border-collapse: collapse;
  }

  .Polaris-IndexTable__Table--scrolling .Polaris-IndexTable__TableCell--first,
  .Polaris-IndexTable__Table--scrolling
    .Polaris-IndexTable__TableCell--first
    + .Polaris-IndexTable__TableCell,
  .Polaris-IndexTable__Table--scrolling
    .Polaris-IndexTable__TableHeading--first,
  .Polaris-IndexTable__Table--scrolling
    .Polaris-IndexTable__TableHeading--second {
    visibility: visible;
    background-color: var(--p-surface);
  }

  .Polaris-IndexTable__Table--scrolling .Polaris-IndexTable__TableCell--first,
  .Polaris-IndexTable__Table--scrolling
    .Polaris-IndexTable__TableHeading--first {
    filter: drop-shadow(0.0625rem 0 0 ${Neutral.B85});
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--sticky
      .Polaris-IndexTable__TableCell--first
      + .Polaris-IndexTable__TableCell,
    .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--sticky
      .Polaris-IndexTable__TableHeading--second {
      filter: drop-shadow(0.0625rem 0 0 ${Neutral.B85});
    }
  }

  .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--sticky.Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable__TableHeading--second,
  .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--sticky.Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable__TableCell:first-child {
    filter: drop-shadow(0.0625rem 0 0 ${Neutral.B85});
    background: ${Neutral.B100};
  }

  .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable__TableHeading--second,
  .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable__TableCell:first-child {
    visibility: visible;
  }

  .Polaris-IndexTable__TableRow {
    background-color: var(--p-surface);
    cursor: pointer;
    box-shadow: inset 0 -0.0625rem 0 ${Neutral.B85};
  }

  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--unclickable {
    cursor: auto;
  }

  .Polaris-IndexTable__TableRow.Polaris-IndexTable--statusSuccess,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable--statusSuccess
    .Polaris-IndexTable__TableCell--first,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable--statusSuccess
    .Polaris-IndexTable__TableCell--first
    + .Polaris-IndexTable__TableCell {
    background-color: var(--p-surface-primary-selected);
  }

  .Polaris-IndexTable__TableRow.Polaris-IndexTable--statusSubdued,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable--statusSubdued
    .Polaris-IndexTable__TableCell--first,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable--statusSubdued
    .Polaris-IndexTable__TableCell--first
    + .Polaris-IndexTable__TableCell {
    background-color: var(--p-surface-subdued);
  }

  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered
    .Polaris-IndexTable__TableCell--first,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered
    .Polaris-IndexTable__TableCell--first
    + .Polaris-IndexTable__TableCell {
    background-color: ${Blue.S08};
  }

  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--selected,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableHeading--first,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableHeading--second,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableCell--first,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableCell--first
    + .Polaris-IndexTable__TableCell {
    background-color: ${Blue.S08};
  }

  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered.Polaris-IndexTable__TableRow--selected,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered.Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableCell--first,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered.Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableCell--first
    + .Polaris-IndexTable__TableCell {
    background-color: ${Blue.S08};
  }

  .Polaris-IndexTable__TableRow--subdued {
    color: var(--p-text-subdued);
  }

  .Polaris-IndexTable__TableRow--disabled {
    cursor: default;
    color: var(--p-text-subdued);
  }

  .Polaris-IndexTable__TableHeading {
    background: ${Neutral.B99};
    padding: var(--p-space-2) var(--p-space-4);
    text-align: left;
    color: ${Neutral.B18};
    white-space: nowrap;
    border: 0;
    box-shadow: inset 0 -0.0625rem 0 ${Neutral.B85};
    ${typographyBody2}
  }

  .Polaris-IndexTable__TableHeading--sortable {
    background: var(--p-surface-subdued);
  }

  .Polaris-IndexTable__TableHeading--flush {
    padding: 0;
  }

  .Polaris-IndexTable__TableHeading--first {
    --pc-index-table-checkbox-offset-left: 1rem;
    --pc-index-table-checkbox-offset-right: 1.125rem;
    position: sticky;
    left: 0;
    padding-left: var(--pc-index-table-checkbox-offset-left);
    padding-right: var(--pc-index-table-checkbox-offset-right);
    width: var(--p-space-5);
  }

  .Polaris-IndexTable__TableHeadingSortButton {
    position: static;
    background: none;
    padding: 0;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: var(--p-text-subdued);
    font-size: 0.75rem;
  }

  .Polaris-IndexTable__TableHeadingSortButton:hover
    .Polaris-IndexTable__TableHeadingSortIcon,
  .Polaris-IndexTable__TableHeadingSortButton:focus
    .Polaris-IndexTable__TableHeadingSortIcon {
    opacity: 1;
  }

  .Polaris-IndexTable__TableHeadingSortIcon {
    order: 1;
    opacity: 0;
    height: var(--p-space-5);
    width: var(--p-space-5);
    transition: opacity 200ms cubic-bezier(0.42, 0, 1, 1)
      var(--p-duration-100);
  }

  .Polaris-IndexTable__TableHeadingSortIcon--visible {
    opacity: 1;
  }

  .Polaris-IndexTable__TableHeadingSortSvg {
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  .Polaris-IndexTable__ColumnHeaderCheckboxWrapper {
    display: flex;
  }

  .Polaris-IndexTable__FirstStickyHeaderElement {
    padding-right: var(--p-space-05);
  }

  .Polaris-IndexTable__TableHeading--second:not(
      .Polaris-IndexTable__TableHeading--unselectable
    ) {
    padding-left: var(--p-space-4);
  }

  .Polaris-IndexTable__TableCell {
    z-index: var(--pc-index-table-cell);
    text-align: left;
    padding: var(--p-space-2) var(--p-space-4);
    white-space: nowrap;
  }

  .Polaris-IndexTable__TableCell--flush {
    padding: 0;
  }

  .Polaris-IndexTable__TableCell--first {
    position: sticky;
    left: 0;
    z-index: var(--pc-index-table-sticky-cell);
    padding: var(--p-space-2) 0;
    vertical-align: middle;
  }

  .Polaris-IndexTable__TableCellCheckbox:hover .checkbox-wrapper {
    background-color: rgba(1, 126, 183, 0.2);
    border-radius: ${borderRadius16};
  }

  .Polaris-IndexTable__TableCell--first + .Polaris-IndexTable__TableCell {
    left: var(--pc-checkbox-offset);
    padding-left: 0;
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable__Table--sticky
      .Polaris-IndexTable__TableCell--first
      + .Polaris-IndexTable__TableCell {
      position: sticky;
      z-index: var(--pc-index-table-sticky-cell);
    }
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable__Table--sticky
      .Polaris-IndexTable__TableHeading--second:not(
        .Polaris-IndexTable__TableHeading--unselectable
      ) {
      position: sticky;
      z-index: auto;
      left: 0;
    }
  }
  
  .Polaris-IndexTable-ScrollContainer .Polaris-IndexTable__Table.Polaris-IndexTable__Table--unselectable.Polaris-IndexTable__Table--sticky .Polaris-IndexTable__TableHeading.Polaris-IndexTable__TableHeading--unselectable {
    position: sticky;
    top: 0;
  }

  .Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable--statusSuccess
    .Polaris-IndexTable__TableCell:first-child {
    background-color: var(--p-surface-primary-selected);
  }

  .Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable--statusSubdued
    .Polaris-IndexTable__TableCell:first-child {
    background-color: var(--p-surface-subdued);
  }

  .Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable__TableRow--hovered
    .Polaris-IndexTable__TableCell:first-child {
    background-color: ${Blue.S08}
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable--tableStickyScrolling
      .Polaris-IndexTable__TableCell:last-child,
    .Polaris-IndexTable--tableStickyScrolling
      .Polaris-IndexTable__TableHeading--last {
      filter: drop-shadow(-0.0625rem 0 0 ${Neutral.B85});
    }
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable--tableStickyLast
      .Polaris-IndexTable__TableCell:last-child {
      position: sticky;
      right: 0;
      background-color: var(--p-surface);
      z-index: var(--pc-index-table-sticky-cell);
    }
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable--tableStickyLast
      .Polaris-IndexTable__TableHeading--last {
      position: sticky;
      right: 0;
      background-color: var(--p-surface);
      z-index: auto;
    }
  }

  .Polaris-IndexTable--tableStickyLast
    .Polaris-IndexTable--statusSuccess
    .Polaris-IndexTable__TableCell:last-child {
    background-color: var(--p-surface-primary-selected);
  }

  .Polaris-IndexTable--tableStickyLast
    .Polaris-IndexTable--statusSubdued
    .Polaris-IndexTable__TableCell:last-child {
    background-color: var(--p-surface-subdued);
  }

  .Polaris-IndexTable--tableStickyLast
    .Polaris-IndexTable__TableRow--hovered
    .Polaris-IndexTable__TableCell:last-child {
    background-color: ${Blue.S08};
  }

  .Polaris-IndexTable--tableStickyLast
    .Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableCell:last-child {
    background-color: var(--p-surface-selected);
  }

  .Polaris-IndexTable__Table--sortable .Polaris-IndexTable__TableHeading {
    background-color: var(--p-surface-subdued);
  }

  .Polaris-IndexTable__StickyTable {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    z-index: var(--pc-index-table-loading-panel);
  }

  .Polaris-IndexTable__StickyTableHeader {
    position: absolute;
    display: flex;
    width: 100%;
  }

  .Polaris-IndexTable__StickyTableHeader:not(
      .Polaris-IndexTable__StickyTableHeader--isSticky
    ) {
    top: -62.5rem;
    left: -62.5rem;
  }

  .Polaris-IndexTable__StickyTableColumnHeader {
    flex: 0 0 auto;
  }

  .Polaris-IndexTable__StickyTableHeadings {
    overflow: hidden;
    flex: 1 1 auto;
    display: flex;
  }

  .Polaris-IndexTable__StickyTableHeading--second {
    padding-left: 0;
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable__StickyTableHeading--second {
      display: none;
    }
  }

  .Polaris-IndexTable__StickyTableHeading--second.Polaris-IndexTable--unselectable {
    display: none;
  }

  .Polaris-IndexTable--stickyTableHeadingSecondScrolling {
    padding: 0 var(--p-space-025) 0 var(--p-space-4);
    display: none;
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable--stickyTableHeadingSecondScrolling {
      display: block;
    }
  }

  .Polaris-IndexTable__StickyTableHeader--isSticky {
    visibility: visible;
    background-color: var(--p-surface);
    box-shadow: var(--p-shadow-base);
  }

  .Polaris-IndexTable:hover .Polaris-IndexTable__ScrollLeft {
    display: block;
  }

  .Polaris-IndexTable:hover .Polaris-IndexTable__ScrollRight {
    display: block;
  }

  .Polaris-IndexTable .Polaris-IndexTable__ScrollRight--onboarding {
    display: block;
  }

  .Polaris-IndexTable__BulkActionsWrapper {
    visibility: visible;
    position: absolute;
    z-index: var(--pc-index-table-bulk-actions);
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .Polaris-IndexTable__BulkActionsWrapperSticky {
    position: fixed;
    top: auto;
    bottom: calc(2.5rem - var(--p-space-1));
  }

  .Polaris-IndexTable__SelectAllActionsWrapper {
    visibility: visible;
    position: relative;
    z-index: var(--pc-index-table-bulk-actions);
    top: 0;
    left: 0;
    right: 0;
    padding: 0 var(--p-space-2) 0 calc(var(--p-space-3) - var(--p-space-025));
    background: #f8fafc;
  }

  .Polaris-IndexTable__SelectAllActionsWrapper.Polaris-IndexTable__StickyTableHeader--condensed {
    padding-top: calc(var(--p-space-2) + var(--p-space-05));
  }

  .Polaris-IndexTable__ScrollBarContainer {
    position: sticky;
    z-index: var(--pc-index-table-scroll-bar);
    bottom: 0;
    background-color: var(--p-surface);
    border-bottom-right-radius: var(--p-border-radius-2);
    border-bottom-left-radius: var(--p-border-radius-2);
  }

  .Polaris-IndexTable--scrollBarContainerCondensed {
    visibility: hidden;
    pointer-events: none;
  }

  .Polaris-IndexTable--scrollBarContainerHidden {
    display: none;
  }

  .Polaris-IndexTable__ScrollBar {
    overflow-x: scroll;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${Neutral.B68} ${Neutral.B100};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: ${Neutral.B100};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${Neutral.B68};
    border-radius: 10px;
    border: 5px solid ${Neutral.B100};
  }

  .Polaris-IndexTable--disableTextSelection {
    user-select: none;
  }

  .Polaris-IndexTable--selectMode {
    transform: translateY(calc(var(--pc-index-table-table-header-offset) * -1));
    margin-bottom: calc(var(--pc-index-table-table-header-offset) * -1);
  }

  .Polaris-IndexTable__EmptySearchResultWrapper {
    padding: var(--p-space-4);
    width: 100%;
  }

  .Polaris-IndexTable--condensedRow {
    width: calc(100% + var(--pc-index-table-translate-offset));
    transform: translateX(calc(var(--pc-index-table-translate-offset) * -1));
    transition: transform cubic-bezier(0.25, 0.1, 0.25, 1) 200ms;
    display: flex;
    border-top: var(--p-border-divider);
    filter: none;
    align-items: center;
  }

  [data-selectmode='true'] .Polaris-IndexTable--condensedRow {
    transform: none;
  }

  .Polaris-IndexTable__CondensedList {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .Polaris-IndexTable__HeaderWrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 3.25rem;
    padding: var(--p-space-2) var(--p-space-4);
    background-color: var(--p-surface);
  }

  .Polaris-IndexTable__HeaderWrapper.Polaris-IndexTable--unselectable {
    min-height: auto;
    padding: 0;
  }

  .Polaris-IndexTable__StickyTable--condensed {
    visibility: visible;
  }

  .Polaris-IndexTable__StickyTableHeader--condensed {
    padding: var(--p-space-4) var(--p-space-4) var(--p-space-2);
  }

  .Polaris-IndexTable-Checkbox__TableCellContentContainer {
    display: flex;
    align-items: center;
  }

  .Polaris-IndexTable-Checkbox__Wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Polaris-IndexTable-Checkbox--expanded {
    width: 2.25rem;
    height: 1.25rem;
    padding-left: var(--p-space-4);
  }

  .Polaris-IndexTable-Checkbox--condensed {
    min-width: 3.125rem;
    min-height: 2.75rem;
    margin-right: calc(var(--p-space-4) * -1);
  }

  .Polaris-CheckableButton {
    color: var(--p-text);
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1rem;
    text-transform: initial;
    letter-spacing: initial;
    display: flex;
    align-items: center;
    min-height: 2.25rem;
    min-width: 2.25rem;
    margin: 0;
    padding: calc(
        (2.375rem - 1.25rem - var(--p-space-05)) / 2
      )
      var(--p-space-1)
      calc((2.375rem - 1.25rem - var(--p-space-05)) / 2)
      var(--p-space-4);
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    text-align: left;
    border-radius: 0.1875rem;
    width: auto;
  }

  .Polaris-CheckableButton:hover,
  .Polaris-CheckableButton:active {
    background: transparent;
  }

  .Polaris-CheckableButton:focus {
    outline: none;
  }

  .Polaris-CheckableButton__Checkbox {
    pointer-events: none;
    height: 1.25rem;
    width: 1.25rem;
    margin-left: calc(
      var(--p-space-2) * -1 - 0.125rem -
        var(--p-border-width-1)
    );
  }

  .Polaris-CheckableButton__Label {
    flex: 1 1;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Noto Sans TC', 'Noto Sans SC', 'Noto Sans KR', 'Noto Sans JP',
      'Noto Sans', sans-serif;
    padding: var(--p-space-025) 0;
    margin-left: calc(var(--p-space-5) - 0.125rem);
    position: relative;
    bottom: -${space8};
  }

  .Polaris-SelectAllActions {
    display: flex;
    gap: var(--p-space-025);
    align-items: center;
    justify-content: flex-start;
    backface-visibility: hidden;
    will-change: opacity;
  }

  .Polaris-SelectAllActions__SelectAllActions--entering,
  .Polaris-SelectAllActions__SelectAllActions--exiting {
    opacity: 0;
    display: flex;
  }

  .Polaris-SelectAllActions__SelectAllActions--entered {
    opacity: 1;
    display: flex;
  }

  .Polaris-SelectAllActions__SelectAllActions--exited {
    opacity: 0;
    display: none;
  }

  .Polaris-SelectAllActions__PaginatedSelectAll {
    font-size: 0.75rem;
    font-weight: 600;
  }

  .Polaris-SelectAllActions__AllAction {
    font-size: 0.75rem;
    font-weight: 600;
    border: 0;
    background: none;
    padding: 0;
    cursor: pointer;
    color: var(--p-interactive);
    position: relative;
  }

  .Polaris-SelectAllActions__AllAction::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -0.0625rem;
    right: -0.0625rem;
    bottom: -0.0625rem;
    left: -0.0625rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 -0.0625rem var(--p-focused);
    transition: box-shadow var(--p-duration-100) cubic-bezier(0.25, 0.1, 0.25, 1);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-SelectAllActions__AllAction:hover,
  .Polaris-SelectAllActions__AllAction:focus {
    color: var(--p-interactive-hovered);
  }

  .Polaris-SelectAllActions__AllAction:active {
    color: var(--p-interactive-pressed);
  }

  .Polaris-SelectAllActions__AllAction:focus::after {
    content: none;
  }

  .Polaris-SelectAllActions__AllAction:focus:not(:active)::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }
`;
