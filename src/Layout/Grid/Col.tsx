import * as React from 'react';

import { ColumnContainer } from './GridStyle';

export const Col: React.FunctionComponent<Props> = ({
  xs,
  sm,
  md,
  xsOrder,
  smOrder,
  mdOrder,
  children,
  ...defaultProps
}: Props) => (
  <ColumnContainer
    /** Set number of columns you wish to span for extra small devices like phone (<=640px) */
    xs={xs}
    /** Set number of columns you wish to span for small devices like tablet (<=768px) */
    sm={sm}
    /** Set number of columns you wish to span for medium devices like phone (>=1024px) */
    md={md}
    /** Sets the order of the column for extra small devices like phone (<=640px) */
    xsOrder={xsOrder}
    /** Sets the order of the column for small devices like tablet (<=768px) */
    smOrder={smOrder}
    /** Sets the order of the column for medium devices like phone (>=1024px) */
    mdOrder={mdOrder}
    {...defaultProps}
  >
    {children}
  </ColumnContainer>
);

Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
};

export interface Props {
  xs?: number;
  sm?: number;
  md?: number;
  xsOrder?: number;
  smOrder?: number;
  mdOrder?: number;
  children: React.ReactNode;
}

export default Col;
