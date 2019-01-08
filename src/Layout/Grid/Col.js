import React from 'react';
import { ColumnContainer } from '../../Style/Layout/GridStyle';

const Col = ({
  xs, sm, md, children,
}: Props) => (
  <ColumnContainer xs={xs} sm={sm} md={md}>
    {children}
  </ColumnContainer>
);

Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
};

type Props = {
    xs: number,
    sm: number,
    md: number,
    children: React$Node,
}

export default Col;
