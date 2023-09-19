import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { Icon } from '../Icon';
import {
  CollapseContent,
  CollapseContentWrapper,
  CollapseItemHeader,
  CollapseItemContent,
  RightHeaderSection,
} from './CollapseItemStyle';

export interface CollapseItemProps {
  /** Content to be displayed when the item is not collapsed, 8px padding applied by default */
  children: React.ReactNode;
  /** Title for each collapse item, simply can pass in a string */
  header: React.ReactNode;
  /** Extra components to be displayed on the left side of heading, on the right of indicator (if it is left-aligned) and header (title), flex row with gap of 4px is applied */
  headerLeftExtra?: React.ReactNode;
  /** Extra components to be displayed on the right side of heading, on the left of indicator (if it is right-aligned), flex row with gap of 4px is applied */
  headerRightExtra?: React.ReactNode;
  /** If this is false, it is not collapsed at the beginning (you can see children content directly), default is true */
  defaultCollapsed?: boolean;
  /** If this is true, you cannot collapse or uncollapsed the item, default is false */
  disabled?: boolean;
  /** Arrow indicator to be put on the very left or right of the header, default is left or whatever specified in Collapse component, you can overwrite for a single item here */
  indicator?: 'left' | 'right' | 'none';
}

export const CollapseItem = React.forwardRef<HTMLDivElement, CollapseItemProps>(
  function CollapseItem(
    {
      children,
      header,
      headerLeftExtra,
      headerRightExtra,
      defaultCollapsed = true,
      disabled = false,
      indicator = 'left',
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
          {indicator === 'left' && (
            <>
              {!isCollapsed && <Icon name="ri-arrow-m-down-fill" />}
              {isCollapsed && <Icon name="ri-arrow-m-right-fill" />}
            </>
          )}
          <Typography
            as="span"
            variant="body1"
            color={disabled ? Neutral.B85 : Neutral.B18}
          >
            {header}
          </Typography>
          {headerLeftExtra}
          <RightHeaderSection>
            {headerRightExtra}
            {indicator === 'right' && (
              <>
                {!isCollapsed && <Icon name="ri-arrow-m-down-fill" />}
                {isCollapsed && <Icon name="ri-arrow-m-left-fill" />}
              </>
            )}
          </RightHeaderSection>
        </CollapseItemHeader>
        <CollapseItemContent open={!isCollapsed}>
          <CollapseContentWrapper>
            <CollapseContent>{children}</CollapseContent>
          </CollapseContentWrapper>
        </CollapseItemContent>
      </>
    );
  }
);
