import { createGlobalStyle } from 'styled-components';

export const StyledIndexTable: any = createGlobalStyle`
  :root {
    color-scheme: light;
    --p-breakpoints-xs: 0rem;
    --p-breakpoints-sm: 30.625rem;
    --p-breakpoints-md: 48rem;
    --p-breakpoints-lg: 65rem;
    --p-breakpoints-xl: 90rem;
    --p-background: rgba(246, 246, 247, 1);
    --p-background-hovered: rgba(241, 242, 243, 1);
    --p-background-pressed: rgba(237, 238, 239, 1);
    --p-background-selected: rgba(237, 238, 239, 1);
    --p-surface: rgba(255, 255, 255, 1);
    --p-surface-dark: rgba(32, 33, 35, 1);
    --p-surface-neutral: rgba(228, 229, 231, 1);
    --p-surface-neutral-hovered: rgba(219, 221, 223, 1);
    --p-surface-neutral-pressed: rgba(201, 204, 208, 1);
    --p-surface-neutral-disabled: rgba(241, 242, 243, 1);
    --p-surface-neutral-subdued: rgba(246, 246, 247, 1);
    --p-surface-neutral-subdued-dark: rgba(68, 71, 74, 1);
    --p-surface-subdued: rgba(250, 251, 251, 1);
    --p-surface-disabled: rgba(250, 251, 251, 1);
    --p-surface-hovered: rgba(246, 246, 247, 1);
    --p-surface-hovered-dark: rgba(47, 49, 51, 1);
    --p-surface-pressed: rgba(241, 242, 243, 1);
    --p-surface-pressed-dark: rgba(62, 64, 67, 1);
    --p-surface-depressed: rgba(237, 238, 239, 1);
    --p-surface-search-field: rgba(241, 242, 243, 1);
    --p-surface-search-field-dark: rgba(47, 49, 51, 1);
    --p-backdrop: rgba(0, 0, 0, 0.5);
    --p-overlay: rgba(255, 255, 255, 0.5);
    --p-shadow-color-picker: rgba(0, 0, 0, 0.5);
    --p-shadow-color-picker-dragger: rgba(33, 43, 54, 0.32);
    --p-hint-from-direct-light: rgba(0, 0, 0, 0.15);
    --p-border: rgba(140, 145, 150, 1);
    --p-border-on-dark: rgba(80, 83, 86, 1);
    --p-border-neutral-subdued: rgba(186, 191, 195, 1);
    --p-border-hovered: rgba(153, 158, 164, 1);
    --p-border-disabled: rgba(210, 213, 216, 1);
    --p-border-subdued: rgba(201, 204, 207, 1);
    --p-border-depressed: rgba(87, 89, 89, 1);
    --p-border-shadow: rgba(174, 180, 185, 1);
    --p-border-shadow-subdued: rgba(186, 191, 196, 1);
    --p-divider: rgba(225, 227, 229, 1);
    --p-divider-dark: rgba(69, 71, 73, 1);
    --p-icon: rgba(92, 95, 98, 1);
    --p-icon-on-dark: rgba(166, 172, 178, 1);
    --p-icon-hovered: rgba(26, 28, 29, 1);
    --p-icon-pressed: rgba(68, 71, 74, 1);
    --p-icon-disabled: rgba(186, 190, 195, 1);
    --p-icon-subdued: rgba(140, 145, 150, 1);
    --p-text: rgba(32, 34, 35, 1);
    --p-text-on-dark: rgba(227, 229, 231, 1);
    --p-text-disabled: rgba(140, 145, 150, 1);
    --p-text-subdued: rgba(109, 113, 117, 1);
    --p-text-subdued-on-dark: rgba(153, 159, 164, 1);
    --p-interactive: rgba(44, 110, 203, 1);
    --p-interactive-on-dark: rgba(54, 163, 255, 1);
    --p-interactive-disabled: rgba(189, 193, 204, 1);
    --p-interactive-hovered: rgba(31, 81, 153, 1);
    --p-interactive-pressed: rgba(16, 50, 98, 1);
    --p-interactive-pressed-on-dark: rgba(136, 188, 255, 1);
    --p-focused: rgba(69, 143, 255, 1);
    --p-surface-selected: rgba(242, 247, 254, 1);
    --p-surface-selected-hovered: rgba(237, 244, 254, 1);
    --p-surface-selected-pressed: rgba(229, 239, 253, 1);
    --p-icon-on-interactive: rgba(255, 255, 255, 1);
    --p-text-on-interactive: rgba(255, 255, 255, 1);
    --p-action-secondary: rgba(255, 255, 255, 1);
    --p-action-secondary-disabled: rgba(255, 255, 255, 1);
    --p-action-secondary-hovered: rgba(246, 246, 247, 1);
    --p-action-secondary-hovered-dark: rgba(84, 87, 91, 1);
    --p-action-secondary-pressed: rgba(241, 242, 243, 1);
    --p-action-secondary-pressed-dark: rgba(96, 100, 103, 1);
    --p-action-secondary-depressed: rgba(109, 113, 117, 1);
    --p-action-primary: rgba(0, 128, 96, 1);
    --p-action-primary-disabled: rgba(241, 241, 241, 1);
    --p-action-primary-hovered: rgba(0, 110, 82, 1);
    --p-action-primary-pressed: rgba(0, 94, 70, 1);
    --p-action-primary-depressed: rgba(0, 61, 44, 1);
    --p-icon-on-primary: rgba(255, 255, 255, 1);
    --p-text-on-primary: rgba(255, 255, 255, 1);
    --p-text-primary: rgba(0, 123, 92, 1);
    --p-text-primary-hovered: rgba(0, 108, 80, 1);
    --p-text-primary-pressed: rgba(0, 92, 68, 1);
    --p-surface-primary-selected: rgba(241, 248, 245, 1);
    --p-surface-primary-selected-hovered: rgba(179, 208, 195, 1);
    --p-surface-primary-selected-pressed: rgba(162, 188, 176, 1);
    --p-border-critical: rgba(253, 87, 73, 1);
    --p-border-critical-subdued: rgba(224, 179, 178, 1);
    --p-border-critical-disabled: rgba(255, 167, 163, 1);
    --p-icon-critical: rgba(215, 44, 13, 1);
    --p-surface-critical: rgba(254, 211, 209, 1);
    --p-surface-critical-subdued: rgba(255, 244, 244, 1);
    --p-surface-critical-subdued-hovered: rgba(255, 240, 240, 1);
    --p-surface-critical-subdued-pressed: rgba(255, 233, 232, 1);
    --p-surface-critical-subdued-depressed: rgba(254, 188, 185, 1);
    --p-text-critical: rgba(215, 44, 13, 1);
    --p-action-critical: rgba(216, 44, 13, 1);
    --p-action-critical-disabled: rgba(241, 241, 241, 1);
    --p-action-critical-hovered: rgba(188, 34, 0, 1);
    --p-action-critical-pressed: rgba(162, 27, 0, 1);
    --p-action-critical-depressed: rgba(108, 15, 0, 1);
    --p-icon-on-critical: rgba(255, 255, 255, 1);
    --p-text-on-critical: rgba(255, 255, 255, 1);
    --p-interactive-critical: rgba(216, 44, 13, 1);
    --p-interactive-critical-disabled: rgba(253, 147, 141, 1);
    --p-interactive-critical-hovered: rgba(205, 41, 12, 1);
    --p-interactive-critical-pressed: rgba(103, 15, 3, 1);
    --p-border-warning: rgba(185, 137, 0, 1);
    --p-border-warning-subdued: rgba(225, 184, 120, 1);
    --p-icon-warning: rgba(185, 137, 0, 1);
    --p-surface-warning: rgba(255, 215, 157, 1);
    --p-surface-warning-subdued: rgba(255, 245, 234, 1);
    --p-surface-warning-subdued-hovered: rgba(255, 242, 226, 1);
    --p-surface-warning-subdued-pressed: rgba(255, 235, 211, 1);
    --p-text-warning: rgba(145, 106, 0, 1);
    --p-border-highlight: rgba(68, 157, 167, 1);
    --p-border-highlight-subdued: rgba(152, 198, 205, 1);
    --p-icon-highlight: rgba(0, 160, 172, 1);
    --p-surface-highlight: rgba(164, 232, 242, 1);
    --p-surface-highlight-subdued: rgba(235, 249, 252, 1);
    --p-surface-highlight-subdued-hovered: rgba(228, 247, 250, 1);
    --p-surface-highlight-subdued-pressed: rgba(213, 243, 248, 1);
    --p-text-highlight: rgba(52, 124, 132, 1);
    --p-border-success: rgba(0, 164, 124, 1);
    --p-border-success-subdued: rgba(149, 201, 180, 1);
    --p-icon-success: rgba(0, 127, 95, 1);
    --p-surface-success: rgba(174, 233, 209, 1);
    --p-surface-success-subdued: rgba(241, 248, 245, 1);
    --p-surface-success-subdued-hovered: rgba(236, 246, 241, 1);
    --p-surface-success-subdued-pressed: rgba(226, 241, 234, 1);
    --p-text-success: rgba(0, 128, 96, 1);
    --p-icon-attention: rgba(138, 97, 22, 1);
    --p-surface-attention: rgba(255, 234, 138, 1);
    --p-decorative-one-icon: rgba(126, 87, 0, 1);
    --p-decorative-one-surface: rgba(255, 201, 107, 1);
    --p-decorative-one-text: rgba(61, 40, 0, 1);
    --p-decorative-two-icon: rgba(175, 41, 78, 1);
    --p-decorative-two-surface: rgba(255, 196, 176, 1);
    --p-decorative-two-text: rgba(73, 11, 28, 1);
    --p-decorative-three-icon: rgba(0, 109, 65, 1);
    --p-decorative-three-surface: rgba(146, 230, 181, 1);
    --p-decorative-three-text: rgba(0, 47, 25, 1);
    --p-decorative-four-icon: rgba(0, 106, 104, 1);
    --p-decorative-four-surface: rgba(145, 224, 214, 1);
    --p-decorative-four-text: rgba(0, 45, 45, 1);
    --p-decorative-five-icon: rgba(174, 43, 76, 1);
    --p-decorative-five-surface: rgba(253, 201, 208, 1);
    --p-decorative-five-text: rgba(79, 14, 31, 1);
    --p-shadow-transparent: 0 0 0 0 transparent;
    --p-shadow-faint: 0 0.0625rem 0 0 rgba(22, 29, 37, 0.05);
    --p-shadow-base: 0 0 0 0.0625rem rgba(63, 63, 68, 0.05),
      0 0.0625rem 0.1875rem 0 rgba(63, 63, 68, 0.15);
    --p-shadow-deep: 0 0 0 0.0625rem rgba(6, 44, 82, 0.1),
      0 0.125rem 1rem rgba(33, 43, 54, 0.08);
    --p-shadow-button: 0 0.0625rem 0 rgba(0, 0, 0, 0.05);
    --p-shadow-top-bar: 0 0.125rem 0.125rem -0.0625rem rgba(0, 0, 0, 0.15);
    --p-shadow-card: 0 0 0.3125rem rgba(23, 24, 24, 0.05),
      0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);
    --p-shadow-popover: 0 0.1875rem 0.375rem -0.1875rem rgba(23, 24, 24, 0.08),
      0 0.5rem 1.25rem -0.25rem rgba(23, 24, 24, 0.12);
    --p-shadow-layer: 0 1.9375rem 2.5625rem 0 rgba(32, 42, 53, 0.2),
      0 0.125rem 1rem 0 rgba(32, 42, 54, 0.08);
    --p-shadow-modal: 0 1.625rem 5rem rgba(0, 0, 0, 0.2),
      0 0 0.0625rem rgba(0, 0, 0, 0.2);
    --p-shadows-inset-button: inset 0 -0.0625rem 0 rgba(0, 0, 0, 0.2);
    --p-shadows-inset-button-pressed: inset 0 0.0625rem 0 rgba(0, 0, 0, 0.15);
    --p-font-family-sans: -apple-system, BlinkMacSystemFont, 'San Francisco',
      'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    --p-font-family-mono: ui-monospace, SFMono-Regular, 'SF Mono', Consolas,
      'Liberation Mono', Menlo, monospace;
    --p-font-size-75: 0.75rem;
    --p-font-size-100: 0.875rem;
    --p-font-size-200: 1rem;
    --p-font-size-300: 1.25rem;
    --p-font-size-400: 1.5rem;
    --p-font-size-500: 1.75rem;
    --p-font-size-600: 2rem;
    --p-font-size-700: 2.5rem;
    --p-font-weight-regular: 400;
    --p-font-weight-medium: 500;
    --p-font-weight-semibold: 600;
    --p-font-weight-bold: 700;
    --p-font-line-height-1: 1rem;
    --p-font-line-height-2: 1.25rem;
    --p-font-line-height-3: 1.5rem;
    --p-font-line-height-4: 1.75rem;
    --p-font-line-height-5: 2rem;
    --p-font-line-height-6: 2.5rem;
    --p-font-line-height-7: 3rem;
    --p-override-loading-z-index: 514;
    --p-choice-size: 1.25rem;
    --p-icon-size-small: 0.5rem;
    --p-icon-size-medium: 1.25rem;
    --p-choice-margin: 0.0625rem;
    --p-control-border-width: 0.125rem;
    --p-banner-border-default: inset 0 0.0625rem 0 0
        var(--p-border-neutral-subdued),
      inset 0 0 0 0.0625rem var(--p-border-neutral-subdued);
    --p-banner-border-success: inset 0 0.0625rem 0 0
        var(--p-border-success-subdued),
      inset 0 0 0 0.0625rem var(--p-border-success-subdued);
    --p-banner-border-highlight: inset 0 0.0625rem 0 0
        var(--p-border-highlight-subdued),
      inset 0 0 0 0.0625rem var(--p-border-highlight-subdued);
    --p-banner-border-warning: inset 0 0.0625rem 0 0
        var(--p-border-warning-subdued),
      inset 0 0 0 0.0625rem var(--p-border-warning-subdued);
    --p-banner-border-critical: inset 0 0.0625rem 0 0
        var(--p-border-critical-subdued),
      inset 0 0 0 0.0625rem var(--p-border-critical-subdued);
    --p-thin-border-subdued: 0.0625rem solid var(--p-border-subdued);
    --p-text-field-spinner-offset: 0.125rem;
    --p-text-field-focus-ring-offset: -0.25rem;
    --p-button-group-item-spacing: -0.0625rem;
    --p-range-slider-thumb-size-base: 1rem;
    --p-range-slider-thumb-size-active: 1.5rem;
    --p-frame-offset: 0rem;
    --p-duration-0: 0ms;
    --p-duration-50: 50ms;
    --p-duration-100: 100ms;
    --p-duration-150: 150ms;
    --p-duration-200: 200ms;
    --p-duration-250: 250ms;
    --p-duration-300: 300ms;
    --p-duration-350: 350ms;
    --p-duration-400: 400ms;
    --p-duration-450: 450ms;
    --p-duration-500: 500ms;
    --p-duration-5000: 5000ms;
    --p-ease: cubic-bezier(0.25, 0.1, 0.25, 1);
    --p-ease-in: cubic-bezier(0.42, 0, 1, 1);
    --p-ease-out: cubic-bezier(0, 0, 0.58, 1);
    --p-ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
    --p-linear: cubic-bezier(0, 0, 1, 1);
    --p-keyframes-bounce: p-keyframes-bounce;
    --p-keyframes-fade-in: p-keyframes-fade-in;
    --p-keyframes-pulse: p-keyframes-pulse;
    --p-keyframes-spin: p-keyframes-spin;
    --p-border-radius-05: 0.125rem;
    --p-border-radius-1: 0.25rem;
    --p-border-radius-2: 0.5rem;
    --p-border-radius-3: 0.75rem;
    --p-border-radius-4: 1rem;
    --p-border-radius-5: 1.25rem;
    --p-border-radius-6: 1.875rem;
    --p-border-radius-base: 0.1875rem;
    --p-border-radius-large: 0.375rem;
    --p-border-radius-half: 50%;
    --p-border-width-1: 0.0625rem;
    --p-border-width-2: 0.125rem;
    --p-border-width-3: 0.1875rem;
    --p-border-width-4: 0.25rem;
    --p-border-width-5: 0.3125rem;
    --p-border-base: var(--p-border-width-1) solid var(--p-border-subdued);
    --p-border-dark: var(--p-border-width-1) solid var(--p-border);
    --p-border-transparent: var(--p-border-width-1) solid transparent;
    --p-border-divider: var(--p-border-width-1) solid var(--p-divider);
    --p-border-divider-on-dark: var(--p-border-width-1) solid
      var(--p-divider-dark);
    --p-space-0: 0;
    --p-space-025: 0.0625rem;
    --p-space-05: 0.125rem;
    --p-space-1: 0.25rem;
    --p-space-2: 0.5rem;
    --p-space-3: 0.75rem;
    --p-space-4: 1rem;
    --p-space-5: 1.25rem;
    --p-space-6: 1.5rem;
    --p-space-8: 2rem;
    --p-space-10: 2.5rem;
    --p-space-12: 3rem;
    --p-space-16: 4rem;
    --p-space-20: 5rem;
    --p-space-24: 6rem;
    --p-space-28: 7rem;
    --p-space-32: 8rem;
    --p-z-1: 100;
    --p-z-2: 400;
    --p-z-3: 510;
    --p-z-4: 512;
    --p-z-5: 513;
    --p-z-6: 514;
    --p-z-7: 515;
    --p-z-8: 516;
    --p-z-9: 517;
    --p-z-10: 518;
    --p-z-11: 519;
    --p-z-12: 520;
  }

  @keyframes p-keyframes-bounce {
    from,
    65%,
    85% {
      transform: scale(1);
    }
    75% {
      transform: scale(0.85);
    }
    82.5% {
      transform: scale(1.05);
    }
  }

  @keyframes p-keyframes-fade-in {
    to {
      opacity: 1;
    }
  }

  @keyframes p-keyframes-pulse {
    from,
    75% {
      transform: scale(0.85);
      opacity: 1;
    }
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  @keyframes p-keyframes-spin {
    to {
      transform: rotate(1turn);
    }
  }

  .Polaris-Text--root {
    margin: 0;
    text-align: inherit;
  }

  .Polaris-Text--block {
    display: block;
  }

  .Polaris-Text--truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

  .Polaris-Text--start {
    text-align: start;
  }

  .Polaris-Text--center {
    text-align: center;
  }

  .Polaris-Text--end {
    text-align: end;
  }

  .Polaris-Text--justify {
    text-align: justify;
  }

  .Polaris-Text--success {
    color: var(--p-text-success);
  }

  .Polaris-Text--critical {
    color: var(--p-text-critical);
  }

  .Polaris-Text--warning {
    color: var(--p-text-warning);
  }

  .Polaris-Text--subdued {
    color: var(--p-text-subdued);
  }

  .Polaris-Text__text--inverse {
    color: var(--p-text-on-dark);
  }

  .Polaris-Text--regular {
    font-weight: var(--p-font-weight-regular);
  }

  .Polaris-Text--medium {
    font-weight: var(--p-font-weight-medium);
  }

  .Polaris-Text--semibold {
    font-weight: var(--p-font-weight-semibold);
  }

  .Polaris-Text--bold {
    font-weight: var(--p-font-weight-bold);
  }

  .Polaris-Text--headingXs {
    font-size: var(--p-font-size-75);
    line-height: var(--p-font-line-height-1);
  }

  .Polaris-Text--headingSm {
    font-size: var(--p-font-size-100);
    line-height: var(--p-font-line-height-2);
  }

  .Polaris-Text--headingMd {
    font-size: var(--p-font-size-200);
    line-height: var(--p-font-line-height-3);
  }

  .Polaris-Text--headingLg {
    font-size: var(--p-font-size-200);
    line-height: var(--p-font-line-height-2);
  }

  @media (min-width: 48em) {
    .Polaris-Text--headingLg {
      font-size: var(--p-font-size-300);
      line-height: var(--p-font-line-height-3);
    }
  }

  .Polaris-Text--headingXl {
    font-size: var(--p-font-size-300);
    line-height: var(--p-font-line-height-3);
  }

  @media (min-width: 48em) {
    .Polaris-Text--headingXl {
      font-size: var(--p-font-size-400);
      line-height: var(--p-font-line-height-4);
    }
  }

  .Polaris-Text--heading2xl {
    font-size: var(--p-font-size-300);
    line-height: var(--p-font-line-height-3);
  }

  @media (min-width: 48em) {
    .Polaris-Text--heading2xl {
      font-size: var(--p-font-size-500);
      line-height: var(--p-font-line-height-5);
    }
  }

  .Polaris-Text--heading3xl {
    font-size: var(--p-font-size-400);
    line-height: var(--p-font-line-height-4);
  }

  @media (min-width: 48em) {
    .Polaris-Text--heading3xl {
      font-size: var(--p-font-size-600);
      line-height: var(--p-font-line-height-6);
    }
  }

  .Polaris-Text--heading4xl {
    font-size: var(--p-font-size-600);
    line-height: var(--p-font-line-height-6);
  }

  @media (min-width: 48em) {
    .Polaris-Text--heading4xl {
      font-size: var(--p-font-size-700);
      line-height: var(--p-font-line-height-7);
    }
  }

  .Polaris-Text--bodySm {
    font-size: var(--p-font-size-75);
    line-height: var(--p-font-line-height-1);
  }

  .Polaris-Text--bodyMd {
    font-size: var(--p-font-size-100);
    line-height: var(--p-font-line-height-2);
  }

  .Polaris-Text--bodyLg {
    font-size: var(--p-font-size-200);
    line-height: var(--p-font-line-height-2);
  }

  .Polaris-Text--break {
    overflow-wrap: break-word;
  }

  .Polaris-Icon {
    display: block;
    height: 1.25rem;
    width: 1.25rem;
    max-height: 100%;
    max-width: 100%;
    margin: auto;
  }

  .Polaris-Icon--applyColor {
    color: var(--p-surface);
  }

  .Polaris-Icon--hasBackdrop {
    position: relative;
    display: flex;
    align-items: center;
    margin: var(--p-space-1);
  }

  .Polaris-Icon--hasBackdrop::before {
    content: '';
    position: absolute;
    top: calc(var(--p-space-1) * -1);
    bottom: calc(var(--p-space-1) * -1);
    left: calc(var(--p-space-1) * -1);
    right: calc(var(--p-space-1) * -1);
    border-radius: var(--p-border-radius-half);
  }

  .Polaris-Icon--colorBase svg {
    fill: var(--p-icon);
  }

  .Polaris-Icon--colorBase::before {
    background-color: var(--p-surface-neutral);
  }

  .Polaris-Icon--colorSubdued svg {
    fill: var(--p-icon-subdued);
  }

  .Polaris-Icon--colorCritical svg {
    fill: var(--p-icon-critical);
  }

  .Polaris-Icon--colorCritical::before {
    background-color: var(--p-surface-critical);
  }

  .Polaris-Icon--colorInteractive svg {
    fill: var(--p-interactive);
  }

  .Polaris-Icon--colorWarning svg {
    fill: var(--p-icon-warning);
  }

  .Polaris-Icon--colorWarning::before {
    background-color: var(--p-surface-warning);
  }

  .Polaris-Icon--colorHighlight svg {
    fill: var(--p-icon-highlight);
  }

  .Polaris-Icon--colorHighlight::before {
    background-color: var(--p-surface-highlight);
  }

  .Polaris-Icon--colorSuccess svg {
    fill: var(--p-icon-success);
  }

  .Polaris-Icon--colorSuccess::before {
    background-color: var(--p-surface-success);
  }

  .Polaris-Icon--colorPrimary svg {
    fill: var(--p-action-primary);
  }

  .Polaris-Icon__Svg,
  .Polaris-Icon__Img {
    position: relative;
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  .Polaris-Icon__Placeholder {
    padding-bottom: 100%;
    background: currentColor;
  }

  .Polaris-Spinner svg {
    animation: var(--p-keyframes-spin) var(--p-duration-500) linear infinite;
    fill: var(--p-border-highlight);
  }

  .Polaris-Spinner--sizeSmall svg {
    height: 1.25rem;
    width: 1.25rem;
  }

  .Polaris-Spinner--sizeLarge svg {
    height: 2.75rem;
    width: 2.75rem;
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
    outline: var(--p-border-width-2) solid var(--p-focused);
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
    max-width: calc(100vw - var(--p-space-8));
    margin: 0.3125rem var(--p-space-2) var(--p-space-4);
    box-shadow: var(--p-shadow-popover);
    border-radius: var(--p-border-radius-2);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    will-change: left, top;
  }

  .Polaris-Popover__PopoverOverlay {
    opacity: 0;
    transition: opacity var(--p-duration-100) var(--p-ease),
      transform var(--p-duration-100) var(--p-ease);
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
    transition-duration: var(--p-duration-0);
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
    z-index: var(--p-z-2);
  }

  .Polaris-PositionedOverlay--fixed {
    position: fixed;
  }

  .Polaris-PositionedOverlay--calculating {
    visibility: hidden;
  }

  .Polaris-PositionedOverlay--preventInteraction {
    pointer-events: none;
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
    --pc-action-list-item-min-height: var(--p-space-10);
    --pc-action-list-item-vertical-padding: calc(
      (var(--pc-action-list-item-min-height) - var(--p-font-line-height-2)) / 2
    );
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
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
    cursor: pointer;
    padding: var(--pc-action-list-item-vertical-padding) var(--p-space-2);
    border-radius: var(--p-border-radius-1);
    border-top: var(--p-border-width-1) solid transparent;
    color: inherit;
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
    transition: box-shadow var(--p-duration-100) var(--p-ease);
    border-radius: var(--p-border-radius-1);
  }

  @media (forced-colors: active) {
    .Polaris-ActionList__Item {
      border: var(--p-border-width-1) solid transparent;
    }
  }

  .Polaris-ActionList__Item:hover {
    background-color: var(--p-surface-hovered);
    text-decoration: none;
    outline: var(--p-border-width-3) solid transparent;
  }

  .Polaris-ActionList__Item:active {
    background-color: var(--p-surface-pressed);
  }

  .Polaris-ActionList__Item:active svg {
    fill: var(--p-interactive);
  }

  .Polaris-ActionList__Item:focus:not(:active) {
    outline: var(--p-border-width-3) solid transparent;
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
    width: var(--p-border-width-3);
    border-top-right-radius: var(--p-border-radius-1);
    border-bottom-right-radius: var(--p-border-radius-1);
  }

  .Polaris-ActionList__Item.Polaris-ActionList--destructive {
    color: var(--p-interactive-critical);
  }

  .Polaris-ActionList__Item.Polaris-ActionList--destructive svg {
    fill: var(--p-icon-critical);
  }

  .Polaris-ActionList__Item.Polaris-ActionList--destructive:hover {
    background-color: var(--p-surface-critical-subdued-hovered);
  }

  .Polaris-ActionList__Item.Polaris-ActionList--destructive:active,
  .Polaris-ActionList__Item.Polaris-ActionList--destructive.Polaris-ActionList--active {
    background-color: var(--p-surface-critical-subdued-pressed);
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

  .Polaris-ActionList__Prefix {
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    height: var(--pc-action-list-image-size);
    width: var(--pc-action-list-image-size);
    border-radius: var(--p-border-radius-base);
    margin: calc(var(--pc-action-list-image-size) * -0.5) var(--p-space-4)
      calc(var(--pc-action-list-image-size) * -0.5) 0;
    background-size: cover;
    background-position: center center;
  }

  .Polaris-ActionList__Prefix svg {
    fill: var(--p-icon);
  }

  .Polaris-ActionList__Suffix {
    margin-left: var(--p-space-4);
  }

  .Polaris-ActionList__Suffix svg {
    fill: var(--p-icon);
  }

  .Polaris-ActionList__ContentBlock,
  .Polaris-ActionList__ContentBlockInner {
    display: block;
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

  @media (min-width: 30.625em) {
    .Polaris-Box {
      padding-block-end: var(
        --pc-box-padding-block-end-sm,
        var(--pc-box-padding-block-end-xs)
      );
    }
  }

  @media (min-width: 48em) {
    .Polaris-Box {
      padding-block-end: var(
        --pc-box-padding-block-end-md,
        var(--pc-box-padding-block-end-sm, var(--pc-box-padding-block-end-xs))
      );
    }
  }

  @media (min-width: 65em) {
    .Polaris-Box {
      padding-block-end: var(
        --pc-box-padding-block-end-lg,
        var(
          --pc-box-padding-block-end-md,
          var(--pc-box-padding-block-end-sm, var(--pc-box-padding-block-end-xs))
        )
      );
    }
  }

  @media (min-width: 90em) {
    .Polaris-Box {
      padding-block-end: var(
        --pc-box-padding-block-end-xl,
        var(
          --pc-box-padding-block-end-lg,
          var(
            --pc-box-padding-block-end-md,
            var(
              --pc-box-padding-block-end-sm,
              var(--pc-box-padding-block-end-xs)
            )
          )
        )
      );
    }
  }

  @media (min-width: 30.625em) {
    .Polaris-Box {
      padding-block-start: var(
        --pc-box-padding-block-start-sm,
        var(--pc-box-padding-block-start-xs)
      );
    }
  }

  @media (min-width: 48em) {
    .Polaris-Box {
      padding-block-start: var(
        --pc-box-padding-block-start-md,
        var(
          --pc-box-padding-block-start-sm,
          var(--pc-box-padding-block-start-xs)
        )
      );
    }
  }

  @media (min-width: 65em) {
    .Polaris-Box {
      padding-block-start: var(
        --pc-box-padding-block-start-lg,
        var(
          --pc-box-padding-block-start-md,
          var(
            --pc-box-padding-block-start-sm,
            var(--pc-box-padding-block-start-xs)
          )
        )
      );
    }
  }

  @media (min-width: 90em) {
    .Polaris-Box {
      padding-block-start: var(
        --pc-box-padding-block-start-xl,
        var(
          --pc-box-padding-block-start-lg,
          var(
            --pc-box-padding-block-start-md,
            var(
              --pc-box-padding-block-start-sm,
              var(--pc-box-padding-block-start-xs)
            )
          )
        )
      );
    }
  }

  @media (min-width: 30.625em) {
    .Polaris-Box {
      padding-inline-start: var(
        --pc-box-padding-inline-start-sm,
        var(--pc-box-padding-inline-start-xs)
      );
    }
  }

  @media (min-width: 48em) {
    .Polaris-Box {
      padding-inline-start: var(
        --pc-box-padding-inline-start-md,
        var(
          --pc-box-padding-inline-start-sm,
          var(--pc-box-padding-inline-start-xs)
        )
      );
    }
  }

  @media (min-width: 65em) {
    .Polaris-Box {
      padding-inline-start: var(
        --pc-box-padding-inline-start-lg,
        var(
          --pc-box-padding-inline-start-md,
          var(
            --pc-box-padding-inline-start-sm,
            var(--pc-box-padding-inline-start-xs)
          )
        )
      );
    }
  }

  @media (min-width: 90em) {
    .Polaris-Box {
      padding-inline-start: var(
        --pc-box-padding-inline-start-xl,
        var(
          --pc-box-padding-inline-start-lg,
          var(
            --pc-box-padding-inline-start-md,
            var(
              --pc-box-padding-inline-start-sm,
              var(--pc-box-padding-inline-start-xs)
            )
          )
        )
      );
    }
  }

  @media (min-width: 30.625em) {
    .Polaris-Box {
      padding-inline-end: var(
        --pc-box-padding-inline-end-sm,
        var(--pc-box-padding-inline-end-xs)
      );
    }
  }

  @media (min-width: 48em) {
    .Polaris-Box {
      padding-inline-end: var(
        --pc-box-padding-inline-end-md,
        var(--pc-box-padding-inline-end-sm, var(--pc-box-padding-inline-end-xs))
      );
    }
  }

  @media (min-width: 65em) {
    .Polaris-Box {
      padding-inline-end: var(
        --pc-box-padding-inline-end-lg,
        var(
          --pc-box-padding-inline-end-md,
          var(
            --pc-box-padding-inline-end-sm,
            var(--pc-box-padding-inline-end-xs)
          )
        )
      );
    }
  }

  @media (min-width: 90em) {
    .Polaris-Box {
      padding-inline-end: var(
        --pc-box-padding-inline-end-xl,
        var(
          --pc-box-padding-inline-end-lg,
          var(
            --pc-box-padding-inline-end-md,
            var(
              --pc-box-padding-inline-end-sm,
              var(--pc-box-padding-inline-end-xs)
            )
          )
        )
      );
    }
  }

  .Polaris-Box--visuallyHidden {
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
    .Polaris-Box--printHidden {
      display: none !important;
    }
  }

  .Polaris-Button {
    --pc-button-slim-min-height: var(--p-font-line-height-4);
    --pc-button-large-min-height: 2.75rem;
    --pc-button-vertical-padding: calc(
      (2.25rem - var(--p-font-line-height-2) - var(--p-space-05)) / 2
    );
    --pc-button-slim-vertical-padding: calc(
      (
          var(--pc-button-slim-min-height) - var(--p-font-line-height-2) -
            var(--p-space-05)
        ) / 2
    );
    --pc-button-large-vertical-padding: calc(
      (
          var(--pc-button-large-min-height) - var(--p-font-line-height-2) -
            var(--p-space-05)
        ) / 2
    );
    --pc-button-spinner-size: 1.25rem;
    --pc-button-segment: 10;
    --pc-button-focused: 20;
    --pc-button-disclosure-icon-offset: -0.375rem;
    position: relative;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.25rem;
    min-width: 2.25rem;
    margin: 0;
    padding: calc(
        (2.25rem - var(--p-font-line-height-2) - var(--p-space-05)) / 2
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
    -webkit-user-select: none;
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
    transition: box-shadow var(--p-duration-100) var(--p-ease);
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
    box-shadow: var(--p-shadows-inset-button-pressed);
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

  .Polaris-Button.Polaris-Button--disabled {
    transition: none;
    box-shadow: none;
    border-color: var(--p-border-disabled);
    background: var(--p-surface-disabled);
    color: var(--p-text-disabled);
  }

  .Polaris-Button.Polaris-Button--disabled svg {
    fill: var(--p-icon-disabled);
  }

  .Polaris-Button.Polaris-Button--connectedDisclosure {
    z-index: var(--pc-button-segment);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .Polaris-Button.Polaris-Button--connectedDisclosure::after {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .Polaris-Button.Polaris-Button--connectedDisclosure:focus {
    z-index: var(--pc-button-focused);
  }

  .Polaris-Button__Content {
    font-size: var(--p-font-size-100);
    font-weight: var(--p-font-weight-medium);
    line-height: var(--p-font-line-height-1);
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

  .Polaris-Button--textAlignLeft {
    justify-content: flex-start;
    text-align: left;
  }

  .Polaris-Button--textAlignLeft .Polaris-Button__Content {
    justify-content: flex-start;
  }

  .Polaris-Button--textAlignStart {
    justify-content: flex-start;
    text-align: start;
  }

  .Polaris-Button--textAlignStart .Polaris-Button__Content {
    justify-content: flex-start;
  }

  .Polaris-Button--textAlignCenter {
    justify-content: center;
    text-align: center;
  }

  .Polaris-Button--textAlignRight {
    justify-content: flex-end;
    text-align: right;
  }

  .Polaris-Button--textAlignRight .Polaris-Button__Content {
    justify-content: flex-end;
  }

  .Polaris-Button--textAlignEnd {
    justify-content: flex-end;
    text-align: end;
  }

  .Polaris-Button--textAlignEnd .Polaris-Button__Content {
    justify-content: flex-end;
  }

  .Polaris-Button__Icon {
    margin-left: calc((var(--p-space-1)) * -1);
  }

  .Polaris-Button__Icon:last-child {
    margin-right: var(--pc-button-disclosure-icon-offset);
    margin-left: var(--p-space-1);
  }

  .Polaris-Button--fullWidth.Polaris-Button--textAlignLeft
    .Polaris-Button__Icon:last-child:not(:only-child) {
    margin-left: auto;
  }

  .Polaris-Button__Icon + *:not(.Polaris-Button__Icon) {
    margin-left: var(--p-space-1);
  }

  .Polaris-Button--hidden {
    visibility: hidden;
  }

  .Polaris-Button__Spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: calc((var(--pc-button-spinner-size) / 2) * -1);
    margin-left: calc((var(--pc-button-spinner-size) / 2) * -1);
  }

  .Polaris-Button--primary,
  .Polaris-Button--destructive {
    position: relative;
    background: var(--pc-button-color);
    border-width: 0;
    border-color: transparent;
    box-shadow: var(--p-shadow-button), var(--p-shadows-inset-button);
    color: var(--pc-button-text);
  }

  .Polaris-Button--primary::after,
  .Polaris-Button--destructive::after {
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
    transition: box-shadow var(--p-duration-100) var(--p-ease);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-Button--primary:hover,
  .Polaris-Button--destructive:hover {
    background: var(--pc-button-color-hover);
    border-color: transparent;
    color: var(--pc-button-text);
  }

  .Polaris-Button--primary:focus,
  .Polaris-Button--destructive:focus {
    border-color: transparent;
    box-shadow: var(--p-shadow-button), var(--p-shadows-inset-button);
  }

  .Polaris-Button--primary:active,
  .Polaris-Button--destructive:active {
    background: var(--pc-button-color-active);
    border-color: transparent;
    box-shadow: var(--p-shadow-button), var(--p-shadows-inset-button);
  }

  .Polaris-Button--primary.Polaris-Button--pressed,
  .Polaris-Button--destructive.Polaris-Button--pressed {
    color: var(--pc-button-text);
    background: var(--pc-button-color-depressed);
    border-color: transparent;
    box-shadow: var(--p-shadow-button), var(--p-shadows-inset-button);
  }

  .Polaris-Button--primary.Polaris-Button--pressed:hover,
  .Polaris-Button--primary.Polaris-Button--pressed:focus,
  .Polaris-Button--destructive.Polaris-Button--pressed:hover,
  .Polaris-Button--destructive.Polaris-Button--pressed:focus {
    background: var(--pc-button-color-depressed);
    box-shadow: var(--p-shadow-button), var(--p-shadows-inset-button);
  }

  .Polaris-Button--primary.Polaris-Button--disabled,
  .Polaris-Button--destructive.Polaris-Button--disabled {
    color: var(--p-text-disabled);
    box-shadow: none;
    border-color: transparent;
  }

  .Polaris-Button--primary.Polaris-Button--disabled svg,
  .Polaris-Button--destructive.Polaris-Button--disabled svg {
    fill: var(--p-icon-disabled);
  }

  .Polaris-Button--primary {
    --pc-button-color: var(--p-action-primary);
    --pc-button-text: var(--p-text-on-primary);
    --pc-button-color-hover: var(--p-action-primary-hovered);
    --pc-button-color-active: var(--p-action-primary-pressed);
    --pc-button-color-depressed: var(--p-action-primary-depressed);
  }

  .Polaris-Button--primary svg {
    fill: var(--p-icon-on-primary);
  }

  .Polaris-Button--primary.Polaris-Button--disabled {
    background: var(--p-action-primary-disabled);
  }

  .Polaris-Button--destructive {
    --pc-button-color: var(--p-action-critical);
    --pc-button-text: var(--p-text-on-critical);
    --pc-button-color-hover: var(--p-action-critical-hovered);
    --pc-button-color-active: var(--p-action-critical-pressed);
    --pc-button-color-depressed: var(--p-action-critical-depressed);
  }

  .Polaris-Button--destructive svg {
    fill: var(--p-icon-on-critical);
  }

  .Polaris-Button--destructive.Polaris-Button--disabled {
    background: var(--p-action-critical-disabled);
  }

  .Polaris-Button--outline {
    background: transparent;
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
    color: var(--p-text);
    position: relative;
  }

  .Polaris-Button--outline::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -0.125rem;
    right: -0.125rem;
    bottom: -0.125rem;
    left: -0.125rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 -0.125rem var(--p-focused);
    transition: box-shadow var(--p-duration-100) var(--p-ease);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-Button--outline:hover {
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
    background: var(--p-surface-hovered);
  }

  .Polaris-Button--outline:focus {
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
  }

  .Polaris-Button--outline:focus::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Button--outline:active {
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
    background: var(--p-surface-pressed);
  }

  .Polaris-Button--outline:active::after {
    box-shadow: none;
  }

  .Polaris-Button--outline.Polaris-Button--pressed {
    background: var(--p-action-secondary-pressed);
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
    color: var(--pc-button-text);
  }

  .Polaris-Button--outline.Polaris-Button--disabled {
    border: var(--p-border-width-1) solid var(--p-border-disabled);
    box-shadow: none;
    background: transparent;
    color: var(--p-text-disabled);
  }

  .Polaris-Button--outline.Polaris-Button--destructive {
    background: transparent;
    border: var(--p-border-width-1) solid var(--p-border-critical);
    box-shadow: none;
    color: var(--p-interactive-critical);
  }

  .Polaris-Button--outline.Polaris-Button--destructive svg {
    fill: var(--p-icon-critical);
  }

  .Polaris-Button--outline.Polaris-Button--destructive:hover {
    border: var(--p-border-width-1) solid var(--p-border-critical);
    background: var(--p-surface-critical-subdued);
  }

  .Polaris-Button--outline.Polaris-Button--destructive:focus {
    border: var(--p-border-width-1) solid var(--p-border-critical);
  }

  .Polaris-Button--outline.Polaris-Button--destructive:focus::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Button--outline.Polaris-Button--destructive:active {
    border: var(--p-border-width-1) solid var(--p-border-critical);
    background: var(--p-surface-critical-subdued);
  }

  .Polaris-Button--outline.Polaris-Button--destructive.Polaris-Button--disabled {
    border: var(--p-border-width-1) solid var(--p-border-critical-disabled);
    background: transparent;
    color: var(--p-interactive-critical-disabled);
  }

  .Polaris-Button--outline.Polaris-Button--destructive.Polaris-Button--pressed {
    border: var(--p-border-width-1) solid var(--p-border-critical);
    background: var(--p-surface-critical-subdued);
    color: var(--p-interactive-critical);
  }

  .Polaris-Button--outline.Polaris-Button--disabled {
    background: transparent;
    box-shadow: none;
  }

  .Polaris-Button--destructive.Polaris-Button--outline {
    background: transparent;
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
    color: var(--p-text);
    position: relative;
  }

  .Polaris-Button--destructive.Polaris-Button--outline::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -0.125rem;
    right: -0.125rem;
    bottom: -0.125rem;
    left: -0.125rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 -0.125rem var(--p-focused);
    transition: box-shadow var(--p-duration-100) var(--p-ease);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-Button--destructive.Polaris-Button--outline:hover {
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
    background: var(--p-surface-hovered);
  }

  .Polaris-Button--destructive.Polaris-Button--outline:focus {
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
  }

  .Polaris-Button--destructive.Polaris-Button--outline:focus::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Button--destructive.Polaris-Button--outline:active {
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
    background: var(--p-surface-pressed);
  }

  .Polaris-Button--destructive.Polaris-Button--outline:active::after {
    box-shadow: none;
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--pressed {
    background: var(--p-action-secondary-pressed);
    border: var(--p-border-width-1) solid var(--p-border);
    box-shadow: none;
    color: var(--pc-button-text);
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--disabled {
    border: var(--p-border-width-1) solid var(--p-border-disabled);
    box-shadow: none;
    background: transparent;
    color: var(--p-text-disabled);
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--destructive {
    background: transparent;
    border: var(--p-border-width-1) solid var(--p-border-critical);
    box-shadow: none;
    color: var(--p-interactive-critical);
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--destructive
    svg {
    fill: var(--p-icon-critical);
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--destructive:hover {
    border: var(--p-border-width-1) solid var(--p-border-critical);
    background: var(--p-surface-critical-subdued);
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--destructive:focus {
    border: var(--p-border-width-1) solid var(--p-border-critical);
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--destructive:focus::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--destructive:active {
    border: var(--p-border-width-1) solid var(--p-border-critical);
    background: var(--p-surface-critical-subdued);
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--destructive.Polaris-Button--disabled {
    border: var(--p-border-width-1) solid var(--p-border-critical-disabled);
    background: transparent;
    color: var(--p-interactive-critical-disabled);
  }

  .Polaris-Button--destructive.Polaris-Button--outline.Polaris-Button--destructive.Polaris-Button--pressed {
    border: var(--p-border-width-1) solid var(--p-border-critical);
    background: var(--p-surface-critical-subdued);
    color: var(--p-interactive-critical);
  }

  .Polaris-Button--disabled {
    cursor: default;
    pointer-events: none;
  }

  .Polaris-Button--loading {
    position: relative;
  }

  .Polaris-Button--loading,
  .Polaris-Button--loading:hover,
  .Polaris-Button--loading.Polaris-Button--disabled {
    color: transparent;
  }

  .Polaris-Button--loading.Polaris-Button--disabled svg {
    fill: var(--p-icon-subdued);
  }

  .Polaris-Button--plain {
    margin: calc(var(--pc-button-vertical-padding) * -1)
      calc(var(--p-space-2) * -1);
    padding-left: var(--p-space-2);
    padding-right: var(--p-space-2);
    background: transparent;
    border: 0;
    box-shadow: none;
    color: var(--p-interactive);
  }

  .Polaris-Button--plain svg {
    fill: var(--p-interactive);
  }

  .Polaris-Button--plain > .Polaris-Button__Content {
    font-weight: var(--p-font-weight-regular);
    position: relative;
  }

  .Polaris-Button--plain > .Polaris-Button__Content::after {
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
    transition: box-shadow var(--p-duration-100) var(--p-ease);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-Button--plain:hover,
  .Polaris-Button--plain:focus:not(.Polaris-Button--disabled) {
    color: var(--p-interactive-hovered);
    background: transparent;
    box-shadow: none;
  }

  .Polaris-Button--plain:hover svg,
  .Polaris-Button--plain:focus:not(.Polaris-Button--disabled) svg {
    fill: var(--p-interactive-hovered);
  }

  .Polaris-Button--plain:hover:not(.Polaris-Button--removeUnderline),
  .Polaris-Button--plain:focus:not(.Polaris-Button--disabled):not(
      .Polaris-Button--removeUnderline
    ) {
    text-decoration: underline;
  }

  .Polaris-Button--plain.Polaris-Button--pressed,
  .Polaris-Button--plain:active {
    color: var(--p-interactive-pressed);
    background: transparent;
    box-shadow: none;
  }

  .Polaris-Button--plain.Polaris-Button--pressed svg,
  .Polaris-Button--plain:active svg {
    fill: var(--p-interactive-pressed);
  }

  @media (-ms-high-contrast: active) {
    .Polaris-Button--plain.Polaris-Button--pressed,
    .Polaris-Button--plain:active {
      outline: none;
    }
  }

  .Polaris-Button--plain:focus::after {
    content: none;
  }

  @media (-ms-high-contrast: active) {
    .Polaris-Button--plain:focus {
      outline: none;
    }
  }

  @media (-ms-high-contrast: active) {
    .Polaris-Button--plain:focus > .Polaris-Button__Content {
      outline: var(--p-border-width-2) dotted;
    }
  }

  .Polaris-Button--plain:focus:not(:active) > .Polaris-Button__Content::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Button--plain:active:not(.Polaris-Button--iconOnly)
    > .Polaris-Button__Content,
  .Polaris-Button--plain.Polaris-Button--pressed:not(.Polaris-Button--iconOnly)
    > .Polaris-Button__Content {
    padding: var(--p-space-05) var(--p-space-1);
    margin: calc(var(--p-space-05) * -1) calc(var(--p-space-1) * -1);
    background: transparent;
    border-radius: var(--p-border-radius-base);
  }

  .Polaris-Button--plain.Polaris-Button--fullWidth {
    margin-left: 0;
    margin-right: 0;
  }

  .Polaris-Button--plain.Polaris-Button--disabled {
    color: var(--p-text-disabled);
    background: none;
  }

  .Polaris-Button--plain.Polaris-Button--disabled.Polaris-Button--loading {
    color: transparent;
  }

  .Polaris-Button--plain.Polaris-Button--destructive {
    color: var(--p-interactive-critical);
  }

  .Polaris-Button--plain.Polaris-Button--destructive svg {
    fill: var(--p-interactive-critical);
  }

  .Polaris-Button--plain.Polaris-Button--destructive:hover {
    color: var(--p-interactive-critical-hovered);
  }

  .Polaris-Button--plain.Polaris-Button--destructive:active,
  .Polaris-Button--plain.Polaris-Button--destructive.Polaris-Button--pressed {
    color: var(--p-interactive-critical-pressed);
  }

  .Polaris-Button--plain.Polaris-Button--destructive.Polaris-Button--disabled {
    color: var(--p-interactive-critical-disabled);
  }

  .Polaris-Button--plain.Polaris-Button--sizeSlim {
    margin-top: calc(var(--pc-button-slim-vertical-padding) * -1);
    margin-bottom: calc(var(--pc-button-slim-vertical-padding) * -1);
  }

  .Polaris-Button--plain.Polaris-Button--sizeLarge {
    margin: calc(var(--pc-button-large-vertical-padding) * -1)
      calc(var(--p-space-5) * -1);
  }

  .Polaris-Button--plain.Polaris-Button--iconOnly {
    margin: calc(var(--p-space-2) * -1);
  }

  .Polaris-Button--plain.Polaris-Button--iconOnly svg {
    fill: var(--p-icon);
  }

  .Polaris-Button--plain.Polaris-Button--iconOnly:hover svg {
    fill: var(--p-icon-hovered);
  }

  .Polaris-Button--plain.Polaris-Button--iconOnly:active svg,
  .Polaris-Button--plain.Polaris-Button--iconOnly.Polaris-Button--pressed svg {
    fill: var(--p-icon-pressed);
  }

  .Polaris-Button--plain.Polaris-Button--iconOnly.Polaris-Button--disabled svg {
    fill: var(--p-icon-disabled);
  }

  .Polaris-Button--plain.Polaris-Button--destructive.Polaris-Button--iconOnly
    svg {
    fill: var(--p-action-critical);
  }

  .Polaris-Button--plain.Polaris-Button--destructive.Polaris-Button--iconOnly:hover
    svg {
    fill: var(--p-action-critical-hovered);
  }

  .Polaris-Button--plain.Polaris-Button--destructive.Polaris-Button--iconOnly:active
    svg,
  .Polaris-Button--plain.Polaris-Button--destructive.Polaris-Button--iconOnly.Polaris-Button--pressed
    svg {
    fill: var(--p-action-critical-pressed);
  }

  .Polaris-Button--plain.Polaris-Button--destructive.Polaris-Button--iconOnly.Polaris-Button--disabled
    svg {
    fill: var(--p-action-critical-disabled);
  }

  .Polaris-Button--plain .Polaris-Button__Icon {
    margin-left: 0;
    margin-right: 0;
  }

  .Polaris-Button--fullWidth {
    display: flex;
    width: 100%;
  }

  .Polaris-Button--iconOnly {
    padding-left: var(--p-space-2);
    padding-right: var(--p-space-2);
  }

  .Polaris-Button--iconOnly.Polaris-Button--sizeLarge {
    padding-left: var(--p-space-3);
    padding-right: var(--p-space-3);
  }

  .Polaris-Button--iconOnly.Polaris-Button--sizeSlim {
    padding-left: var(--p-space-1);
    padding-right: var(--p-space-1);
  }

  .Polaris-Button--iconOnly .Polaris-Button__Icon:first-child {
    margin-left: 0;
  }

  .Polaris-Button--iconOnly .Polaris-Button__Icon:last-child {
    margin-right: calc(var(--p-space-1) * -1);
  }

  .Polaris-Button--iconOnly .Polaris-Button__Icon:only-child {
    margin-right: 0;
  }

  .Polaris-Button--sizeSlim {
    min-height: var(--pc-button-slim-min-height);
    padding: var(--pc-button-slim-vertical-padding) var(--p-space-3);
  }

  .Polaris-Button--sizeLarge {
    min-height: var(--pc-button-large-min-height);
    min-width: var(--pc-button-large-min-height);
    padding: var(--pc-button-large-vertical-padding) var(--p-space-6);
  }

  .Polaris-Button--sizeLarge .Polaris-Button__Content {
    font-size: var(--p-font-size-200);
    font-weight: var(--p-font-weight-medium);
    line-height: var(--p-font-line-height-2);
    text-transform: initial;
    letter-spacing: initial;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline,
  .Polaris-Button--monochrome.Polaris-Button--plain {
    color: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline svg,
  .Polaris-Button--monochrome.Polaris-Button--plain svg {
    fill: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline:hover,
  .Polaris-Button--monochrome.Polaris-Button--outline:focus,
  .Polaris-Button--monochrome.Polaris-Button--outline:active,
  .Polaris-Button--monochrome.Polaris-Button--plain:hover,
  .Polaris-Button--monochrome.Polaris-Button--plain:focus,
  .Polaris-Button--monochrome.Polaris-Button--plain:active {
    color: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline:hover svg,
  .Polaris-Button--monochrome.Polaris-Button--outline:focus svg,
  .Polaris-Button--monochrome.Polaris-Button--outline:active svg,
  .Polaris-Button--monochrome.Polaris-Button--plain:hover svg,
  .Polaris-Button--monochrome.Polaris-Button--plain:focus svg,
  .Polaris-Button--monochrome.Polaris-Button--plain:active svg {
    fill: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--disabled,
  .Polaris-Button--monochrome.Polaris-Button--plain.Polaris-Button--disabled {
    color: currentColor;
    opacity: 0.4;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--disabled
    svg,
  .Polaris-Button--monochrome.Polaris-Button--plain.Polaris-Button--disabled
    svg {
    fill: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--loading
    .Polaris-Button__Text,
  .Polaris-Button--monochrome.Polaris-Button--plain.Polaris-Button--loading
    .Polaris-Button__Text {
    visibility: hidden;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--iconOnly
    svg,
  .Polaris-Button--monochrome.Polaris-Button--plain.Polaris-Button--iconOnly
    svg {
    fill: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--iconOnly:focus
    svg,
  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--iconOnly:active
    svg,
  .Polaris-Button--monochrome.Polaris-Button--plain.Polaris-Button--iconOnly:focus
    svg,
  .Polaris-Button--monochrome.Polaris-Button--plain.Polaris-Button--iconOnly:active
    svg {
    fill: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--iconOnly.Polaris-Button--disabled
    svg,
  .Polaris-Button--monochrome.Polaris-Button--plain.Polaris-Button--iconOnly.Polaris-Button--disabled
    svg {
    fill: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--plain
    .Polaris-Button__Text:not(.Polaris-Button--removeUnderline) {
    text-decoration: underline;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline {
    position: relative;
    border-color: currentColor;
    box-shadow: 0 0 0 var(--p-border-width-1) currentColor;
    position: relative;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -0.1875rem;
    right: -0.1875rem;
    bottom: -0.1875rem;
    left: -0.1875rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 -0.1875rem var(--p-focused);
    transition: box-shadow var(--p-duration-100) var(--p-ease);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-Button--monochrome.Polaris-Button--outline::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    opacity: 0;
    z-index: 0;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--pressed {
    background: transparent;
    box-shadow: none;
    color: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline.Polaris-Button--pressed::before {
    opacity: 0.2;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline:hover,
  .Polaris-Button--monochrome.Polaris-Button--outline:focus,
  .Polaris-Button--monochrome.Polaris-Button--outline:active {
    background-color: transparent;
    border-color: currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline:hover::before,
  .Polaris-Button--monochrome.Polaris-Button--outline:focus::before,
  .Polaris-Button--monochrome.Polaris-Button--outline:active::before {
    opacity: 0.07;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline:focus {
    box-shadow: 0 0 0 var(--p-border-width-1) currentColor;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline:focus::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline:active::after {
    box-shadow: none;
  }

  .Polaris-Button--monochrome.Polaris-Button--outline:hover::before,
  .Polaris-Button--monochrome.Polaris-Button--outline:active::before {
    opacity: 0.05;
  }

  .Polaris-Button__ConnectedDisclosureWrapper {
    display: flex;
  }

  .Polaris-Button__ConnectedDisclosure {
    z-index: var(--pc-button-segment);
    margin-left: calc(var(--p-space-025) * -1);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 100%;
  }

  .Polaris-Button__ConnectedDisclosure:focus,
  .Polaris-Button__ConnectedDisclosure:active {
    z-index: var(--pc-button-focused);
  }

  .Polaris-Button__ConnectedDisclosure.Polaris-Button--primary,
  .Polaris-Button__ConnectedDisclosure.Polaris-Button--destructive {
    margin-left: var(--p-space-025);
  }

  .Polaris-Button__ConnectedDisclosure.Polaris-Button--primary.Polaris-Button--outline,
  .Polaris-Button__ConnectedDisclosure.Polaris-Button--destructive.Polaris-Button--outline {
    margin-left: 0;
    border-left: 0;
  }

  .Polaris-Button__ConnectedDisclosure::after {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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

  .Polaris-ButtonGroup {
    --pc-button-group-item: 10;
    --pc-button-group-focused: 20;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: calc(var(--p-space-2) * -1);
    margin-left: calc(var(--p-space-2) * -1);
  }

  .Polaris-ButtonGroup__Item {
    margin-top: var(--p-space-2);
    margin-left: var(--p-space-2);
  }

  .Polaris-ButtonGroup__Item--plain:not(:first-child) {
    margin-left: var(--p-space-4);
  }

  .Polaris-ButtonGroup__Item--plain:not(:last-child) {
    margin-right: var(--p-space-2);
  }

  .Polaris-ButtonGroup--segmented {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 0;
    margin-left: 0;
  }

  .Polaris-ButtonGroup--segmented .Polaris-ButtonGroup__Item {
    position: relative;
    z-index: var(--pc-button-group-item);
    margin-top: 0;
    margin-left: 0;
    line-height: normal;
  }

  .Polaris-ButtonGroup--segmented .Polaris-ButtonGroup__Item:not(:first-child) {
    margin-left: calc(var(--p-space-025) * -1);
  }

  .Polaris-ButtonGroup--segmented .Polaris-ButtonGroup__Item--focused {
    z-index: var(--pc-button-group-focused);
  }

  .Polaris-ButtonGroup--fullWidth .Polaris-ButtonGroup__Item {
    flex: 1 1 auto;
  }

  .Polaris-ButtonGroup--extraTight {
    margin-top: calc(var(--p-space-1) * -1);
    margin-left: calc(var(--p-space-1) * -1);
  }

  .Polaris-ButtonGroup--extraTight .Polaris-ButtonGroup__Item {
    margin-top: var(--p-space-1);
    margin-left: var(--p-space-1);
  }

  .Polaris-ButtonGroup--tight {
    margin-top: calc(var(--p-space-2) * -1);
    margin-left: calc(var(--p-space-2) * -1);
  }

  .Polaris-ButtonGroup--tight .Polaris-ButtonGroup__Item {
    margin-top: var(--p-space-2);
    margin-left: var(--p-space-2);
  }

  .Polaris-ButtonGroup--loose {
    margin-top: calc(var(--p-space-5) * -1);
    margin-left: calc(var(--p-space-5) * -1);
  }

  .Polaris-ButtonGroup--loose .Polaris-ButtonGroup__Item {
    margin-top: var(--p-space-5);
    margin-left: var(--p-space-5);
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
    --pc-stack-spacing: var(--p-space-0);
  }

  .Polaris-Stack--spacingExtraTight {
    --pc-stack-spacing: var(--p-space-1);
  }

  .Polaris-Stack--spacingTight {
    --pc-stack-spacing: var(--p-space-2);
  }

  .Polaris-Stack--spacingBaseTight {
    --pc-stack-spacing: var(--p-space-3);
  }

  .Polaris-Stack--spacingLoose {
    --pc-stack-spacing: var(--p-space-5);
  }

  .Polaris-Stack--spacingExtraLoose {
    --pc-stack-spacing: var(--p-space-8);
  }

  .Polaris-Stack--distributionLeading {
    justify-content: flex-start;
  }

  .Polaris-Stack--distributionTrailing {
    justify-content: flex-end;
  }

  .Polaris-Stack--distributionCenter {
    justify-content: center;
  }

  .Polaris-Stack--distributionEqualSpacing {
    justify-content: space-between;
  }

  .Polaris-Stack--distributionFill > .Polaris-Stack__Item {
    flex: 1 1 auto;
  }

  .Polaris-Stack--distributionFillEvenly > .Polaris-Stack__Item {
    flex: 1 1 auto;
  }

  @supports (
    (min-width: -webkit-fit-content) or (min-width: -moz-fit-content) or
      (min-width: fit-content)
  ) {
    .Polaris-Stack--distributionFillEvenly > .Polaris-Stack__Item {
      flex: 1 0;
      min-width: -webkit-fit-content;
      min-width: -moz-fit-content;
      min-width: fit-content;
    }
  }

  .Polaris-Stack--alignmentLeading {
    align-items: flex-start;
  }

  .Polaris-Stack--alignmentTrailing {
    align-items: flex-end;
  }

  .Polaris-Stack--alignmentCenter {
    align-items: center;
  }

  .Polaris-Stack--alignmentFill {
    align-items: stretch;
  }

  .Polaris-Stack--alignmentBaseline {
    align-items: baseline;
  }

  .Polaris-Stack--vertical {
    flex-direction: column;
    margin-left: var(--p-space-0);
  }

  .Polaris-Stack--vertical > .Polaris-Stack__Item {
    margin-left: var(--p-space-0);
  }

  .Polaris-Stack__Item {
    flex: 0 0 auto;
    min-width: 0;
  }

  .Polaris-Stack__Item--fill {
    flex: 1 1 auto;
  }

  .Polaris-ActionMenu-SecondaryAction {
    --pc-secondary-action-button-spacing: var(--p-space-3);
  }

  .Polaris-ActionMenu-SecondaryAction a,
  .Polaris-ActionMenu-SecondaryAction button {
    position: relative;
    background: transparent !important;
    box-shadow: none !important;
    border-radius: var(--p-border-radius-1) !important;
    padding-left: var(--pc-secondary-action-button-spacing);
    padding-right: var(--pc-secondary-action-button-spacing);
  }

  .Polaris-ActionMenu-SecondaryAction a::after,
  .Polaris-ActionMenu-SecondaryAction button::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -0.125rem;
    right: -0.125rem;
    bottom: -0.125rem;
    left: -0.125rem;
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 -0.125rem var(--p-focused);
    transition: box-shadow var(--p-duration-100) var(--p-ease);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-ActionMenu-SecondaryAction a:hover,
  .Polaris-ActionMenu-SecondaryAction button:hover {
    background: var(--p-background-hovered) !important;
  }

  .Polaris-ActionMenu-SecondaryAction a:active,
  .Polaris-ActionMenu-SecondaryAction button:active {
    background: var(--p-background-pressed) !important;
  }

  @media (min-width: 48em) {
    .Polaris-ActionMenu-SecondaryAction a,
    .Polaris-ActionMenu-SecondaryAction button {
      border: none !important;
      position: relative;
    }
    .Polaris-ActionMenu-SecondaryAction a::after,
    .Polaris-ActionMenu-SecondaryAction button::after {
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
      transition: box-shadow var(--p-duration-100) var(--p-ease);
      border-radius: var(--p-border-radius-1);
    }
  }

  .Polaris-ActionMenu-SecondaryAction.Polaris-ActionMenu-SecondaryAction--destructive
    a,
  .Polaris-ActionMenu-SecondaryAction.Polaris-ActionMenu-SecondaryAction--destructive
    button {
    color: var(--p-interactive-critical);
  }

  .Polaris-ActionMenu-SecondaryAction.Polaris-ActionMenu-SecondaryAction--destructive
    a
    svg,
  .Polaris-ActionMenu-SecondaryAction.Polaris-ActionMenu-SecondaryAction--destructive
    button
    svg {
    fill: var(--p-icon-critical);
  }

  .Polaris-ActionMenu-SecondaryAction.Polaris-ActionMenu-SecondaryAction--destructive
    a:hover,
  .Polaris-ActionMenu-SecondaryAction.Polaris-ActionMenu-SecondaryAction--destructive
    button:hover {
    background-color: var(--p-surface-critical-subdued-hovered) !important;
  }

  .Polaris-ActionMenu-SecondaryAction.Polaris-ActionMenu-SecondaryAction--destructive
    a:active,
  .Polaris-ActionMenu-SecondaryAction.Polaris-ActionMenu-SecondaryAction--destructive
    button:active {
    background-color: var(--p-surface-critical-subdued-pressed) !important;
  }

  .Polaris-ActionMenu-MenuGroup__Details {
    margin-top: calc(var(--p-space-4) * -1);
    padding: var(--p-space-4);
  }

  .Polaris-ActionMenu-Actions__ActionsLayout {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 auto;
  }

  .Polaris-ActionMenu-Actions__ActionsLayout > * {
    flex: 0 0 auto;
  }

  .Polaris-ActionMenu-RollupActions__RollupActivator {
    text-align: right;
  }

  .Polaris-ActionMenu-RollupActions__RollupActivator button[type='button'] {
    margin: 0;
    border: var(--p-border-width-1) solid var(--p-border-neutral-subdued);
  }

  .Polaris-ActionMenu-RollupActions__RollupActivator
    button[type='button']:hover,
  .Polaris-ActionMenu-RollupActions__RollupActivator
    button[type='button']:active,
  .Polaris-ActionMenu-RollupActions__RollupActivator
    button[type='button']:focus {
    border: var(--p-border-width-1) solid var(--p-border-neutral-subdued);
  }

  .Polaris-ActionMenu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  @media print {
    .Polaris-ActionMenu {
      display: none !important;
    }
  }

  .Polaris-Label {
    -webkit-tap-highlight-color: transparent;
  }

  .Polaris-Label--hidden {
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

  .Polaris-Label__Text {
    display: block;
    flex: 1 1 auto;
    color: currentColor;
    -webkit-tap-highlight-color: transparent;
  }

  .Polaris-Label__RequiredIndicator::after {
    content: '*';
    color: var(--p-text-critical);
    margin-left: var(--p-space-1);
  }

  .Polaris-InlineError {
    display: flex;
    color: var(--p-text-critical);
    fill: var(--p-icon-critical);
  }

  .Polaris-InlineError__Icon {
    fill: currentColor;
    margin-left: calc(var(--p-space-05) * -1);
    margin-right: calc(var(--p-space-05) + var(--p-space-1));
  }

  .Polaris-Labelled--hidden > .Polaris-Labelled__LabelWrapper {
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

  .Polaris-Labelled__LabelWrapper {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: var(--p-space-1);
  }

  .Polaris-Labelled__HelpText {
    margin-top: var(--p-space-1);
  }

  .Polaris-Labelled__Error {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    margin-top: var(--p-space-1);
  }

  .Polaris-Labelled__Action {
    flex: 0 0 auto;
  }

  .Polaris-Checkbox {
    position: relative;
    margin: var(--p-choice-margin);
  }

  .Polaris-Checkbox__Input {
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

  .Polaris-Checkbox__Input.Polaris-Checkbox--keyFocused
    + .Polaris-Checkbox__Backdrop::after {
    box-shadow: 0 0 0 0.125rem var(--p-focused);
    outline: var(--p-border-width-1) solid transparent;
  }

  .Polaris-Checkbox__Input:active:not(:disabled) + .Polaris-Checkbox__Backdrop,
  .Polaris-Checkbox__Input:checked + .Polaris-Checkbox__Backdrop,
  .Polaris-Checkbox__Input.Polaris-Checkbox__Input--indeterminate
    + .Polaris-Checkbox__Backdrop {
    border-color: var(--p-interactive);
  }

  .Polaris-Checkbox__Input:active:not(:disabled)
    + .Polaris-Checkbox__Backdrop::before,
  .Polaris-Checkbox__Input:checked + .Polaris-Checkbox__Backdrop::before,
  .Polaris-Checkbox__Input.Polaris-Checkbox__Input--indeterminate
    + .Polaris-Checkbox__Backdrop::before {
    opacity: 1;
    transform: scale(1);
  }

  @media (-ms-high-contrast: active) {
    .Polaris-Checkbox__Input:active:not(:disabled)
      + .Polaris-Checkbox__Backdrop::before,
    .Polaris-Checkbox__Input:checked + .Polaris-Checkbox__Backdrop::before,
    .Polaris-Checkbox__Input.Polaris-Checkbox__Input--indeterminate
      + .Polaris-Checkbox__Backdrop::before {
      border: var(--p-border-width-2) solid windowText;
    }
  }

  .Polaris-Checkbox__Input:active:not(:disabled) ~ .Polaris-Checkbox__Icon,
  .Polaris-Checkbox__Input:checked ~ .Polaris-Checkbox__Icon,
  .Polaris-Checkbox__Input.Polaris-Checkbox__Input--indeterminate
    ~ .Polaris-Checkbox__Icon {
    transition: opacity var(--p-duration-150) var(--p-ease),
      transform var(--p-duration-150) var(--p-ease);
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
  }

  .Polaris-Checkbox__Input:disabled + .Polaris-Checkbox__Backdrop {
    border-color: var(--p-border-disabled);
  }

  .Polaris-Checkbox__Input:disabled + .Polaris-Checkbox__Backdrop::before {
    background-color: var(--p-action-secondary-disabled);
  }

  .Polaris-Checkbox__Input:disabled + .Polaris-Checkbox__Backdrop:hover {
    cursor: default;
  }

  .Polaris-Checkbox__Input:disabled:checked + .Polaris-Checkbox__Backdrop {
    background: var(--p-border-disabled);
  }

  .Polaris-Checkbox__Input:disabled:checked
    + .Polaris-Checkbox__Backdrop::before {
    background: var(--p-border-disabled);
  }

  .Polaris-Checkbox__Backdrop {
    position: relative;
    border: var(--p-control-border-width) solid var(--p-border);
    background-color: var(--p-surface);
    border-radius: var(--p-border-radius-1);
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .Polaris-Checkbox__Backdrop::before {
    content: '';
    position: absolute;
    top: calc(var(--p-control-border-width) * -1);
    right: calc(var(--p-control-border-width) * -1);
    bottom: calc(var(--p-control-border-width) * -1);
    left: calc(var(--p-control-border-width) * -1);
    border-radius: var(--p-border-radius-1);
    background-color: var(--p-interactive);
    opacity: 0;
    transform: scale(0.25);
    transition: opacity var(--p-duration-100) var(--p-ease),
      transform var(--p-duration-100) var(--p-ease);
  }

  .Polaris-Checkbox__Backdrop.Polaris-Checkbox--hover,
  .Polaris-Checkbox__Backdrop:hover {
    cursor: pointer;
    border-color: var(--p-border-hovered);
  }

  .Polaris-Checkbox__Backdrop::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: calc(var(--p-control-border-width) * -1 + -0.0625rem);
    right: calc(var(--p-control-border-width) * -1 + -0.0625rem);
    bottom: calc(var(--p-control-border-width) * -1 + -0.0625rem);
    left: calc(var(--p-control-border-width) * -1 + -0.0625rem);
    display: block;
    pointer-events: none;
    box-shadow: 0 0 0 calc(var(--p-control-border-width) * -1 + -0.0625rem)
      var(--p-focused);
    transition: box-shadow var(--p-duration-100) var(--p-ease);
    border-radius: var(--p-border-radius-1);
  }

  .Polaris-Checkbox__Icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 50% 50%;
    pointer-events: none;
    transform: translate3d(-50%, -50%, 0) scale(0.25);
    opacity: 0;
    transition: opacity var(--p-duration-100) var(--p-ease),
      transform var(--p-duration-100) var(--p-ease);
  }

  .Polaris-Checkbox__Icon svg {
    fill: var(--p-icon-on-interactive);
  }

  @media (-ms-high-contrast: active) {
    .Polaris-Checkbox__Icon {
      fill: windowText;
    }
  }

  .Polaris-Checkbox--error .Polaris-Checkbox__Icon svg {
    fill: var(--p-icon-on-critical);
  }

  .Polaris-Checkbox--error .Polaris-Checkbox__Backdrop {
    border-color: var(--p-border-critical);
    background-color: var(--p-surface-critical);
  }

  .Polaris-Checkbox--error .Polaris-Checkbox__Backdrop.Polaris-Checkbox--hover,
  .Polaris-Checkbox--error .Polaris-Checkbox__Backdrop:hover {
    border-color: var(--p-border-critical);
  }

  .Polaris-Checkbox--error .Polaris-Checkbox__Backdrop::before {
    background-color: var(--p-border-critical);
  }

  .Polaris-Checkbox--error
    .Polaris-Checkbox__Input:checked
    + .Polaris-Checkbox__Backdrop::before,
  .Polaris-Checkbox--error
    .Polaris-Checkbox__Input:active
    + .Polaris-Checkbox__Backdrop::before,
  .Polaris-Checkbox--error
    .Polaris-Checkbox__Input.Polaris-Checkbox__Input--indeterminate
    + .Polaris-Checkbox__Backdrop::before {
    background-color: var(--p-border-critical);
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

  @media (min-width: 30.625em) {
    .Polaris-Inline {
      gap: var(--pc-inline-gap-sm, var(--pc-inline-gap-xs));
    }
  }

  @media (min-width: 48em) {
    .Polaris-Inline {
      gap: var(
        --pc-inline-gap-md,
        var(--pc-inline-gap-sm, var(--pc-inline-gap-xs))
      );
    }
  }

  @media (min-width: 65em) {
    .Polaris-Inline {
      gap: var(
        --pc-inline-gap-lg,
        var(
          --pc-inline-gap-md,
          var(--pc-inline-gap-sm, var(--pc-inline-gap-xs))
        )
      );
    }
  }

  @media (min-width: 90em) {
    .Polaris-Inline {
      gap: var(
        --pc-inline-gap-xl,
        var(
          --pc-inline-gap-lg,
          var(
            --pc-inline-gap-md,
            var(--pc-inline-gap-sm, var(--pc-inline-gap-xs))
          )
        )
      );
    }
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
    font-size: var(--p-font-size-200);
    font-weight: var(--p-font-weight-regular);
    line-height: var(--p-font-line-height-3);
    border: none;
    text-transform: initial;
    letter-spacing: initial;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    opacity: 0;
    width: 100%;
    justify-content: center;
    transition: var(--p-duration-100) var(--p-ease);
    transition-property: transform, opacity;
    transform: translateY(7.5rem);
    padding: 0 var(--p-space-4);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    will-change: transform, opacity;
  }

  @media (min-width: 48em) {
    .Polaris-BulkActions__Group {
      font-size: var(--p-font-size-100);
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
    transition: opacity var(--p-duration-100) var(--p-ease-out),
      transform var(--p-duration-100) var(--p-ease-out);
    transform: translateY(0);
  }

  .Polaris-IndexTable__LoadingContainer--exit {
    opacity: 1;
    transform: translateY(0);
  }

  .Polaris-IndexTable--loadingContainerExitActive {
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity var(--p-duration-100) var(--p-ease-in),
      transform var(--p-duration-100) var(--p-ease-in);
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
    filter: drop-shadow(0.0625rem 0 0 var(--p-divider));
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--sticky
      .Polaris-IndexTable__TableCell--first
      + .Polaris-IndexTable__TableCell,
    .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--sticky
      .Polaris-IndexTable__TableHeading--second {
      filter: drop-shadow(0.0625rem 0 0 var(--p-divider));
    }
  }

  .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--sticky.Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable__TableHeading--second,
  .Polaris-IndexTable__Table--scrolling.Polaris-IndexTable__Table--sticky.Polaris-IndexTable__Table--unselectable
    .Polaris-IndexTable__TableCell:first-child {
    filter: drop-shadow(0.0625rem 0 0 var(--p-divider));
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
    box-shadow: inset 0 -0.0625rem 0 #d4d5d8;
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
    background-color: #eaf9ff;
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
    background-color: #eaf9ff;
  }

  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered.Polaris-IndexTable__TableRow--selected,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered.Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableCell--first,
  .Polaris-IndexTable__TableRow.Polaris-IndexTable__TableRow--hovered.Polaris-IndexTable__TableRow--selected
    .Polaris-IndexTable__TableCell--first
    + .Polaris-IndexTable__TableCell {
    background-color: #eaf9ff;
  }

  .Polaris-IndexTable__TableRow--subdued {
    color: var(--p-text-subdued);
  }

  .Polaris-IndexTable__TableRow--disabled {
    cursor: default;
    color: var(--p-text-subdued);
  }

  .Polaris-IndexTable__TableHeading {
    background: #f8fafc;
    padding: var(--p-space-2) var(--p-space-4);
    text-align: left;
    font-weight: var(--p-font-weight-semibold);
    color: #2d2d2d;
    font-size: var(--p-font-size-200);
    line-height: var(--p-font-line-height-3);
    letter-spacing: 0.01563rem;
    white-space: nowrap;
    border: 0;
    box-shadow: inset 0 -0.0625rem 0 #d4d5d8;
    font-family: 'Noto Sans TC', 'Noto Sans SC', 'Noto Sans KR', 'Noto Sans JP',
    'Noto Sans', sans-serif;
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
    font-weight: var(--p-font-weight-medium);
    color: var(--p-text-subdued);
    font-size: var(--p-font-size-75);
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
    transition: opacity var(--p-duration-200) var(--p-ease-in)
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

  .Polaris-IndexTable__Table--sticky
    .Polaris-IndexTable__TableHeading--second.Polaris-IndexTable__TableHeading--unselectable {
    position: sticky;
    z-index: auto;
    left: 0;
  }

  .Polaris-IndexTable__Table--unselectable.Polaris-IndexTable__Table--sticky
    .Polaris-IndexTable__TableCell:first-child {
    left: 0;
    background-color: var(--p-surface);
    z-index: var(--pc-index-table-sticky-cell);
    position: sticky;
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
    background-color: var(--p-surface-hovered);
  }

  @media (min-width: 30.625em) {
    .Polaris-IndexTable--tableStickyScrolling
      .Polaris-IndexTable__TableCell:last-child,
    .Polaris-IndexTable--tableStickyScrolling
      .Polaris-IndexTable__TableHeading--last {
      filter: drop-shadow(-0.0625rem 0 0 var(--p-divider));
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
    background-color: var(--p-surface-hovered);
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
    bottom: calc(var(--p-space-10) - var(--p-space-1));
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
    padding: var(--p-space-05);
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

  .Polaris-IndexTable__ScrollBar::-webkit-scrollbar-track {
    border-radius: var(--p-border-radius-1);
    background-color: transparent;
  }

  .Polaris-IndexTable__ScrollBar::-webkit-scrollbar {
    -webkit-appearance: none;
    appearance: none;
    height: var(--p-space-2);
    width: var(--p-space-2);
    background-color: transparent;
  }

  .Polaris-IndexTable__ScrollBar::-webkit-scrollbar-thumb {
    border-radius: var(--p-border-radius-1);
    background-color: var(--p-border-neutral-subdued);
    -webkit-transition: background-color var(--p-duration-100) var(--p-ease-out);
    transition: background-color var(--p-duration-100) var(--p-ease-out);
  }

  .Polaris-IndexTable__ScrollBar:hover::-webkit-scrollbar-thumb {
    background-color: var(--p-border-depressed);
  }

  .Polaris-IndexTable--disableTextSelection {
    -webkit-user-select: none;
    user-select: none;
  }

  .Polaris-IndexTable--selectMode {
    transform: translateY(calc(var(--pc-index-table-table-header-offset) * -1));
    margin-bottom: calc(var(--pc-index-table-table-header-offset) * -1);
  }

  .Polaris-IndexTable__EmptySearchResultWrapper {
    padding: var(--p-space-4);
  }

  .Polaris-IndexTable--condensedRow {
    width: calc(100% + var(--pc-index-table-translate-offset));
    transform: translateX(calc(var(--pc-index-table-translate-offset) * -1));
    transition: transform var(--p-ease) var(--p-duration-200);
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

  .Polaris-IndexTable__ScrollBarContent {
    height: 0.0625rem;
    width: var(--pc-index-table-scroll-bar-content-width);
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

  .Polaris-IndexTable-ScrollContainer {
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border-radius: inherit;
  }

  .Polaris-IndexTable-ScrollContainer::-webkit-scrollbar {
    display: none;
  }

  .Polaris-CheckableButton {
    color: var(--p-text);
    font-size: var(--p-font-size-75);
    font-weight: var(--p-font-weight-medium);
    line-height: var(--p-font-line-height-1);
    text-transform: initial;
    letter-spacing: initial;
    display: flex;
    align-items: center;
    min-height: 2.25rem;
    min-width: 2.25rem;
    margin: 0;
    padding: calc(
        (2.375rem - var(--p-font-line-height-2) - var(--p-space-05)) / 2
      )
      var(--p-space-1)
      calc((2.375rem - var(--p-font-line-height-2) - var(--p-space-05)) / 2)
      var(--p-space-4);
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    text-decoration: none;
    text-align: left;
    border-radius: var(--p-border-radius-base);
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
    height: var(--p-choice-size);
    width: var(--p-choice-size);
    margin-left: calc(
      var(--p-space-2) * -1 - var(--p-control-border-width) -
        var(--p-border-width-1)
    );
  }

  .Polaris-CheckableButton__Label {
    flex: 1 1;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    font-size: var(--p-font-size-200);
    font-weight: var(--p-font-weight-semibold);
    font-family: 'Noto Sans TC', 'Noto Sans SC', 'Noto Sans KR', 'Noto Sans JP',
      'Noto Sans', sans-serif;
    padding: var(--p-space-025) 0;
    margin-left: calc(var(--p-space-5) - var(--p-control-border-width));
  }

  .Polaris-SelectAllActions {
    display: flex;
    gap: var(--p-space-025);
    align-items: center;
    justify-content: flex-start;
    -webkit-backface-visibility: hidden;
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
    font-size: var(--p-font-size-75);
    font-weight: var(--p-font-weight-semibold);
  }

  .Polaris-SelectAllActions__AllAction {
    font-size: var(--p-font-size-75);
    font-weight: var(--p-font-weight-semibold);
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
    transition: box-shadow var(--p-duration-100) var(--p-ease);
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
