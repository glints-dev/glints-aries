import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { Icon } from '../Icon';
import {
  CollapseItemContainer,
  CollapseItemContentContainer,
  RightHeaderContent,
} from './CollapseItemStyle';

export interface CollapseItemProps {
  children: React.ReactNode;
  header: React.ReactNode;
  headerLeftExtra?: React.ReactNode;
  headerRightExtra?: React.ReactNode;
  defaultCollapsed?: boolean;
  disabled?: boolean;
  indicator?: 'left' | 'right' | 'none';
}

export const CollapseItem = ({
  children,
  header,
  headerLeftExtra,
  headerRightExtra,
  defaultCollapsed = true,
  disabled = false,
  indicator = 'left',
}: CollapseItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);

  const handleClick = () => {
    if (!disabled) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <>
      <CollapseItemContainer onClick={handleClick} data-disabled={disabled}>
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
        <RightHeaderContent>
          {headerRightExtra}
          {indicator === 'right' && (
            <>
              {!isCollapsed && <Icon name="ri-arrow-m-down-fill" />}
              {isCollapsed && <Icon name="ri-arrow-m-left-fill" />}
            </>
          )}
        </RightHeaderContent>
      </CollapseItemContainer>
      {!isCollapsed && (
        <CollapseItemContentContainer>{children}</CollapseItemContentContainer>
      )}
    </>
  );
};
