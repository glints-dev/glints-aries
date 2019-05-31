import * as React from 'react';
import { ColumnContainer } from '../../Style/Layout/GridStyle';

const Col: React.FunctionComponent<Props> = ({
  xs,
  sm,
  md,
  xsOrder,
  smOrder,
  mdOrder,
  children,
  ...defaultProps
}) => (
  <ColumnContainer
    xs={xs}
    sm={sm}
    md={md}
    xsOrder={xsOrder}
    smOrder={smOrder}
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

interface Props {
  xs: number;
  sm: number;
  md: number;
  xsOrder: number;
  smOrder: number;
  mdOrder: number;
  children: React.ReactNode;
}

export default Col;
