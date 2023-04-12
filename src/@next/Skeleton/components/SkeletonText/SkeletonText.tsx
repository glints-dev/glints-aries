import React from 'react';

import { Variant as TypographyVariant } from '../../../Typography';
import { SkeletonTextContainer, StyledSkeletonText } from './SkeletonTextStyle';

type Row = {
  width?: string;
  variant?: TypographyVariant;
};
export interface SkeletonTextProps {
  rows?: number | Row[];
}

export const SkeletonText = ({ rows = 4 }: SkeletonTextProps) => {
  const defaultWidth = '100%';
  const defaultVariant = 'body1';

  const renderRows = () => {
    const rowsToArray = typeof rows === 'number' ? [...Array(rows)] : rows;

    return rowsToArray.map((row, index) => {
      return (
        <StyledSkeletonText
          key={`skeleton-text-${index}`}
          width={row?.width || defaultWidth}
          variant={row?.variant || defaultVariant}
        />
      );
    });
  };

  return <SkeletonTextContainer>{renderRows()}</SkeletonTextContainer>;
};
