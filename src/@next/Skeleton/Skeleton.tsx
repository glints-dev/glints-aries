import React from 'react';
import {
  SkeletonText,
  SkeletonTextProps,
} from './components/SkeletonText/SkeletonText';

import { SkeletonContainer } from './SkeletonStyle';

export interface SkeletonImageProps {
  shape?: 'circle' | 'square';
  position?: 'left' | 'right';
  size?: string;
}

export interface SkeletonProps {
  animation?: boolean;
  children?: React.ReactNode;
  /** Whether to show subcomponents. Set to true to show skeleton. */
  loading?: boolean;
  image?: SkeletonImageProps;
  text?: SkeletonTextProps;
}

export const Skeleton = ({ children, loading, text }: SkeletonProps) => {
  return (
    <SkeletonContainer>
      <SkeletonText {...text} />
      {!loading && children}
    </SkeletonContainer>
  );
};
