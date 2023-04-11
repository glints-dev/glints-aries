import React from 'react';

import { StyledSkeletonImageCircle } from './SkeletonImageStyle';

export interface SkeletonImageCircleProps {
  size?: string;
}

export const SkeletonImageCircle = ({ size }: SkeletonImageCircleProps) => {
  return <StyledSkeletonImageCircle size={size} />;
};
