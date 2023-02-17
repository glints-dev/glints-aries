import React from 'react';
import { Typography } from '../Typography';
import { StyledCardSection } from './CardStyle';

export const Section = ({ children }: { children: React.ReactNode }) => {
  const content =
    typeof children === 'string' ? (
      <Typography as="div" variant="body1">
        {children}
      </Typography>
    ) : (
      children
    );
  return <StyledCardSection className="section">{content}</StyledCardSection>;
};
