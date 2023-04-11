import React from 'react';

import { StyledSkeletonImageSquare } from './SkeletonImageStyle';

export interface SkeletonImageSquareProps {
  height: string;
  width: string;
}

export const SkeletonImageSquare = ({
  height,
  width,
}: SkeletonImageSquareProps) => {
  return <StyledSkeletonImageSquare height={height} width={width} />;
};
