import React from 'react';
import { Typography } from '../Typography';
import { StyledCardSection } from './CardStyle';

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledCardSection className="section">
      <Typography as="div" variant="body1">
        {children}
      </Typography>
    </StyledCardSection>
  );
};
