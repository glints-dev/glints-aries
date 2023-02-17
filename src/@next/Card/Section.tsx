import React from 'react';
import { StyledCardSection } from './CardStyle';

export const Section = ({ children }: { children: React.ReactNode }) => {
  return <StyledCardSection className="section">{children}</StyledCardSection>;
};
