import React from 'react';
import { Row as PolarisRow, RowProps } from 'polaris-glints';

import { MemoizedCheckbox as Checkbox } from '../Checkbox/Checkbox';

export const Row = ({ children, ...props }: RowProps) => {
  console.log('row props', props);
  return (
    <PolarisRow checkbox={<Checkbox />} {...props}>
      {children}
    </PolarisRow>
  );
};
