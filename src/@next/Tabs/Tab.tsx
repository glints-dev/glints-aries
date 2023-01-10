import React from 'react';
import { Typography } from '../Typography';
import { StyledSpan, StyledTabButton } from './TabStyle';

export type TabProps = {
  content: React.ReactNode;
  id?: string;
  selected?: boolean;
  onSelect: () => void;
};

export const Tab = ({ content, id, selected, onSelect }: TabProps) => {
  return (
    <StyledTabButton
      data-selected={selected}
      id={id}
      onClick={() => onSelect()}
    >
      <StyledSpan>
        <Typography as="span" variant="body1">
          {content}
        </Typography>
      </StyledSpan>
    </StyledTabButton>
  );
};
