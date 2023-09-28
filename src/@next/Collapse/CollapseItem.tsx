import React, { useState } from 'react';

import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import {
  CollapseContent,
  CollapseContentWrapper,
  CollapseItemHeader,
  CollapseItemContent,
  IndicatorIconWrapper,
  RightHeaderSection,
} from './CollapseItemStyle';

export interface CollapseItemProps {
  /** Content to be displayed when the item is not collapsed, 8px padding applied by default */
  children: React.ReactNode;
  /** Title for each collapse item on the header, simply can pass in a string */
  title: React.ReactNode;
  /** Extra components to be displayed on the left side of heading, on the right of indicator (if it is left-aligned) and header (title), flex row with gap of 4px is applied */
  headerLeft?: React.ReactNode;
  /** Extra components to be displayed on the right side of heading, on the left of indicator (if it is right-aligned), flex row with gap of 4px is applied */
  headerRight?: React.ReactNode;
  /** If this is false, it is not collapsed at the beginning (you can see children content directly), default is true */
  defaultCollapsed?: boolean;
  /** If this is true, you cannot collapse or uncollapsed the item, default is false */
  disabled?: boolean;
  /** If this is true, show arrow indication, otherwise it is not shown, default is True or whatever specified in Collapse component */
  showIndicator?: boolean;
  /** Arrow indicator to be put on the very left or right of the header, default is left or whatever specified in Collapse component, you can overwrite for a single item here */
  indicatorPosition?: 'left' | 'right';
}

export const CollapseItem = React.forwardRef<HTMLDivElement, CollapseItemProps>(
  function CollapseItem(
    {
      children,
      title,
      headerLeft,
      headerRight,
      defaultCollapsed = true,
      disabled = false,
      showIndicator = true,
      indicatorPosition = 'left',
    }: CollapseItemProps,
    ref
  ) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);

    const handleClick = () => {
      if (!disabled) {
        setIsCollapsed(!isCollapsed);
      }
    };

    return (
      <>
        <CollapseItemHeader
          onClick={handleClick}
          data-disabled={disabled}
          ref={ref}
        >
          {showIndicator && indicatorPosition === 'left' && (
            <IndicatorIconWrapper isCollapsed={isCollapsed}>
              <Icon name="ri-arrow-m-right-fill" />
            </IndicatorIconWrapper>
          )}
          <Typography
            as="span"
            variant="body1"
            color={disabled ? Neutral.B85 : Neutral.B18}
          >
            {title}
          </Typography>
          {headerLeft}
          <RightHeaderSection>
            {headerRight}
            {showIndicator && indicatorPosition === 'right' && (
              <IndicatorIconWrapper
                isCollapsed={isCollapsed}
                data-anticlockwise={true}
              >
                <Icon name="ri-arrow-m-left-fill" />
              </IndicatorIconWrapper>
            )}
          </RightHeaderSection>
        </CollapseItemHeader>
        <CollapseItemContent isCollapsed={isCollapsed}>
          <CollapseContentWrapper>
            <CollapseContent>{children}</CollapseContent>
          </CollapseContentWrapper>
        </CollapseItemContent>
      </>
    );
  }
);
