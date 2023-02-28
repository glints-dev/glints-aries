import React from 'react';
import {
  Popover as PolarisPopover,
  PopoverProps as PolarisPopoverProps,
  PopoverPublicAPI,
} from 'polaris-glints';
import { StyledPopover } from './PopoverStyle';
export type PopoverProps = PolarisPopoverProps;
const PopoverComponent = React.forwardRef<PopoverPublicAPI, PopoverProps>(
  function Popoever(props: PopoverProps, ref) {
    return (
      <>
        <StyledPopover />
        <PolarisPopover ref={ref} {...props} />
      </>
    );
  }
);

/** Using Popover from polaris-glints repository internally
 * Please add `<div id="glints-portal-container"></div>` as a sibling element of where your React app is rendered.
 * This is a temporary workaround, as React Portal need this as the anchor */
export const Popover = Object.assign(PopoverComponent, {
  Pane: PolarisPopover.Pane,
  Section: PolarisPopover.Section,
});
