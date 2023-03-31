import React, { useState } from 'react';
import { Row as PolarisRow, RowProps } from 'polaris-glints';

import { MemoizedCheckbox as Checkbox } from '../Checkbox';

export const Row = ({ children, ...props }: RowProps) => {
  const [isCheckboxCellHovered, setIsCheckboxCellHovered] = useState(false);

  return (
    <PolarisRow
      onMouseOverCheckboxCell={() => setIsCheckboxCellHovered(true)}
      onMouseLeaveCheckboxCell={() => setIsCheckboxCellHovered(false)}
      checkbox={<Checkbox isHovered={isCheckboxCellHovered} />}
      {...props}
    >
      {children}
    </PolarisRow>
  );
};
