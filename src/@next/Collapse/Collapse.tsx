import React from 'react';

import { CollapseItem, CollapseItemProps } from './CollapseItem';
import { CollapseComponentContainer } from './CollapseStyle';

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  /** If true, there is outer 1px border with 4px border radius, default is true */
  hasBorder?: boolean;
  /** The children should all be 'Collapse.Item' components */
  children?: React.ReactElement<CollapseItemProps>[];
  /** If this is true, show arrow indication, applies to all children collapse items */
  showIndicator?: boolean;
  /** Arrow indicator to be put on the very left or right of the header, applies to all children collapse items */
  indicatorPosition?: 'left' | 'right';
}

const CollapseComponent = React.forwardRef<HTMLDivElement, CollapseProps>(
  function Collapse(
    {
      hasBorder = true,
      children,
      showIndicator,
      indicatorPosition,
      ...props
    }: CollapseProps,
    ref
  ) {
    return (
      <>
        <CollapseComponentContainer
          ref={ref}
          data-border={hasBorder}
          {...props}
        >
          {React.Children.map(children, child => {
            const childShowIndicator =
              (child.props as Pick<CollapseProps, 'showIndicator'>)
                ?.showIndicator || showIndicator;
            const childIndicatorPosition =
              (child.props as Pick<CollapseProps, 'indicatorPosition'>)
                ?.indicatorPosition || indicatorPosition;
            return React.cloneElement(child, {
              showIndicator: childShowIndicator,
              indicatorPosition: childIndicatorPosition,
            });
          })}
        </CollapseComponentContainer>
      </>
    );
  }
);

export const Collapse = Object.assign(CollapseComponent, {
  Item: CollapseItem,
});
