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

  const variantArray =
    typeof variant === 'string'
      ? Array.from({ length: rows }, () => variant)
      : variant;

  console.log('widthArray', widthArray);
  console.log('variantArray', widthArray);

  const renderTexts = () => {
    return [...Array(rows)].map((_, index) => {
      return (
        <StyledSkeletonText
          width={widthArray[index]}
          variant={variantArray[index] as TypographyVariant}
          key={`skeleton-text-${index}`}
        />
      );
    });
  };

  return <SkeletonTextContainer>{renderTexts()}</SkeletonTextContainer>;
};
