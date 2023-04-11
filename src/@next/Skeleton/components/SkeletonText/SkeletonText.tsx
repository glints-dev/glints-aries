import React from 'react';

import { Variant as TypographyVariant } from '../../../Typography';
import { SkeletonTextContainer, StyledSkeletonText } from './SkeletonTextStyle';

export interface SkeletonTextProps {
  rows?: number;
  width?: string | string[];
  variant?: TypographyVariant | TypographyVariant[];
}

export const SkeletonText = ({
  rows = 4,
  width = '100%',
  variant = 'body1',
}: SkeletonTextProps) => {
  const widthArray =
    typeof width === 'string'
      ? Array.from({ length: rows }, () => width)
      : width;

  const variantArray: TypographyVariant[] =
    typeof variant === 'string'
      ? Array.from({ length: rows }, () => variant)
      : variant;

  const renderTexts = () => {
    return [...Array(rows)].map((_, index) => {
      return (
        <StyledSkeletonText
          key={`skeleton-text-${index}`}
          width={widthArray[index]}
          variant={variantArray[index]}
        />
      );
    });
  };

  return <SkeletonTextContainer>{renderTexts()}</SkeletonTextContainer>;
};
