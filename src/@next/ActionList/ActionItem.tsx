import React from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { Item } from './ActionList';
import {
  StyledActionListItem,
  StyledActionListItemDescription,
  StyledActionListItemWrapper,
} from './ActionListStyle';

export const ActionItem = ({
  content,
  description,
  icon,
  action,
  disabled,
}: Item) => {
  const hasDescription = !!description;
  return (
    <StyledActionListItemWrapper
      tabIndex={0}
      role="button"
      onMouseUp={e => e.currentTarget.blur()}
      onClick={() => action?.()}
      data-disabled={disabled}
    >
      <StyledActionListItem>
        {icon}
        <Typography as="div" variant="body1" className="action-item-content">
          {content}
        </Typography>
      </StyledActionListItem>
      {hasDescription && (
        <StyledActionListItemDescription>
          <Typography
            as="div"
            variant="body1"
            color={Neutral.B40}
            className="action-item-description"
          >
            {description}
          </Typography>
        </StyledActionListItemDescription>
      )}
    </StyledActionListItemWrapper>
  );
};
