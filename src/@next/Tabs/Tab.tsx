import React, { useRef } from 'react';
import { Typography } from '../Typography';
import { StyledSpan, StyledTabButton } from './TabStyle';

export type TabProps = {
  content: React.ReactNode;
  id?: string;
  selected?: boolean;
  disabled?: boolean;
  onSelect: () => void;
};

export const Tab = ({
  content,
  id,
  selected,
  disabled = false,
  onSelect,
}: TabProps) => {
  const tabRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    event.preventDefault();
    tabRef.current.scrollIntoView({ behavior: 'smooth' });
    onSelect();
  };

  return (
    <StyledTabButton
      ref={tabRef}
      data-selected={selected}
      data-disabled={disabled}
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
