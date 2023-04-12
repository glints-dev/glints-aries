import React from 'react';

import { StyledSkeletonImageCircle } from './SkeletonImageStyle';

export interface SkeletonImageCircleProps {
  /** Sets the height and width. Default is 48px */
  size?: string;
}

export const SkeletonImageCircle = ({
  size = '48px',
}: SkeletonImageCircleProps) => {
  return <StyledSkeletonImageCircle size={size} />;
};
