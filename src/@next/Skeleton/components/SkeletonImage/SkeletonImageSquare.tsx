import React from 'react';

import { StyledSkeletonImageSquare } from './SkeletonImageStyle';

export interface SkeletonImageSquareProps {
  height: string;
  width: string;
}

export const SkeletonImageSquare = ({
  height = '80px',
  width = '80px',
}: SkeletonImageSquareProps) => {
  return <StyledSkeletonImageSquare height={height} width={width} />;
};
