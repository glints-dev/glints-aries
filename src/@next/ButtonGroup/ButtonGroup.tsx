import React from 'react';
import { StyledButtonGroup } from './ButtonGroupStyle';

export interface ButtonGroupProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  segmented?: boolean;
  fullWidth?: boolean;
  /** Set this true when buttons are wrapped by another element (e.g as an activator for Popover) */
  isButtonWrapped?: boolean;
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(
    { segmented, fullWidth, isButtonWrapped, ...props }: ButtonGroupProps,
    ref
  ) {
    return (
      <StyledButtonGroup
        ref={ref}
        data-segmented={segmented}
        data-full-width={fullWidth}
        data-button-wrapped={isButtonWrapped}
        {...props}
      />
    );
  }
);
