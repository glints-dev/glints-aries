import React, { useRef } from 'react';
import { Typography } from '../Typography';
import { StyledSpan, StyledTabButton } from './TabStyle';

export type TabProps = {
  content: React.ReactNode;
  id?: string;
  selected?: boolean;
  onSelect: () => void;
};

export const Tab = ({ content, id, selected, onSelect }: TabProps) => {
  const tabRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    tabRef.current.scrollIntoView({ behavior: 'smooth' });
    onSelect();
  };

  return (
    <StyledTabButton
      ref={tabRef}
      data-selected={selected}
      id={id}
      onClick={handleClick}
    >
      <StyledSpan>
        <Typography as="span" variant="body1">
          {content}
        </Typography>
      </StyledSpan>
    </StyledTabButton>
  );
};
