import React from 'react';
import { Row as PolarisRow, RowProps } from 'polaris-glints';

import { MemoizedCheckbox as Checkbox } from '../Checkbox';

export const Row = ({ children, ...props }: RowProps) => {
  return (
    <PolarisRow checkbox={<Checkbox />} {...props}>
      {children}
    </PolarisRow>
  );
};
