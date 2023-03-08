import React from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { Item } from './ActionList';
import {
  StyledActionListItem,
  StyledActionListItemDescription,
  StyledActionListItemWrapper,
} from './ActionListStyle';

export const ActionItem = ({ content, description, icon, action }: Item) => {
  const hasDescription = !!description;
  return (
    <StyledActionListItemWrapper
      tabIndex={0}
      role="button"
      onMouseUp={e => e.currentTarget.blur()}
      onClick={() => action?.()}
    >
      <StyledActionListItem>
        {icon}
        <Typography as="div" variant="body1">
          {content}
        </Typography>
      </StyledActionListItem>
      {hasDescription && (
        <StyledActionListItemDescription>
          <Typography as="div" variant="body1" color={Neutral.B40}>
            {description}
          </Typography>
        </StyledActionListItemDescription>
      )}
    </StyledActionListItemWrapper>
  );
};
