import React from 'react';
import {
  Popover as PolarisPopover,
  PopoverProps as PolarisPopoverProps,
} from 'polaris-glints';
import { StyledPopover } from './PopoverStyle';
export type PopoverProps = PolarisPopoverProps;
const PopoverComponent = (props: PopoverProps) => {
  return (
    <>
      <StyledPopover />
      <PolarisPopover {...props} />
    </>
  );
};

/** Using Popover from polaris-glints repository internally
 * Please add `<div id="glints-portal-container"></div>` as a sibling element of where your React app is rendered.
 * This is a temporary workaround, as React Portal need this as the anchor */
export const Popover = Object.assign(PopoverComponent, {
  Pane: PolarisPopover.Pane,
  Section: PolarisPopover.Section,
});
