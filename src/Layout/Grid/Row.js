import React from 'react';
import { RowContainer } from '../../Style/Layout/GridStyle';

const Col = ({ children }: Props) => (
  <RowContainer>
    {children}
  </RowContainer>
);

type Props = {
    children: React$Node,
}

export default Col;
