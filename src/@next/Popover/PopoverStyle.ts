import { createGlobalStyle } from 'styled-components';
import { borderRadius8 } from '../utilities/borderRadius';
import { Blue, Neutral } from '../utilities/colors';
import { space16, space4, space8 } from '../utilities/spacing';

// we need to use global style here because popover is created outside the root element for react app
export const StyledPopover: any = createGlobalStyle`
.Polaris-Popover {
  max-width: calc(100vw - ${space8});
  margin: 0.3125rem 2px ${space4};
  box-shadow: 0px ${space8} 20px rgba(71, 71, 71, 0.2), 0px 3px 6px -3px rgba(71, 71, 71, 0.08);
  border-radius: ${borderRadius8};
  backface-visibility: hidden;
  will-change: left, top;
}

.Polaris-Popover__PopoverOverlay {
  opacity: 0;
  transition: opacity 100ms ease,
    transform 100ms ease;
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
  width: fit-content;
}

.Polaris-Popover--fullWidth .Polaris-Popover__Content {
  max-width: none;
}

.Polaris-Popover--positionedAbove {
  margin: ${space4} 2px 0.3125rem;
}

.Polaris-Popover--positionedAbove.Polaris-Popover--fullWidth {
  margin: 0 auto 0.3125rem auto;
}

.Polaris-Popover__Wrapper {
  position: relative;
  overflow: hidden;
  background-color: ${Neutral.B100};
  border-radius: ${borderRadius8};
  outline: 1px solid transparent;
}

.Polaris-Popover__Content {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1px;
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
  border-top: 1px solid ${Neutral.B85};
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
  padding: ${space16};
  color: ${Neutral.B40};
}

.Polaris-Popover__Section + .Polaris-Popover__Section {
  border-top: 1px solid #e1e3e5;
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

.Polaris-PositionedOverlay--fixed {
  position: fixed;
}

.Polaris-PositionedOverlay--calculating {
  visibility: hidden;
}

.Polaris-PositionedOverlay--preventInteraction {
  pointer-events: none;
}

.Polaris-Scrollable {
  position: relative;
  max-height: none;
  overflow-x: hidden;
  overflow-y: hidden;

  &:focus {
    outline: 0.125rem solid ${Blue.S54};
    outline-offset: 0.125rem;
  }
}

.Polaris-Scrollable--horizontal {
  overflow-x: auto;
}

.Polaris-Scrollable--vertical {
  overflow-y: auto;
}

.Polaris-Scrollable--hasTopShadow {
  box-shadow: inset 0 1.25rem
    1.25rem calc(-1 * 1.25rem)
    rgba(0,0,0,.15);
}

.Polaris-Scrollable--hasBottomShadow {
  box-shadow: inset 0
    calc(-1 * 1.25rem) 1.25rem
    calc(-1 * 1.25rem) rgba(0,0,0,.15);
}

.Polaris-Scrollable--hasTopShadow.Polaris-Scrollable--hasBottomShadow {
  box-shadow: inset 0 1.25rem
    1.25rem calc(-1 * 1.25rem)
    rgba(0,0,0,.15),
    inset 0
    calc(-1 * 1.25rem) 1.25rem
    calc(-1 * 1.25rem) rgba(0,0,0,.15);
}

`;
