import React from 'react';
import { RowContainer } from '../../Style/Layout/GridStyle';

const Col = ({
  children,
  alignContent,
  justifyContent,
  ...defaultProps
}: Props) => (
  <RowContainer alignContent={alignContent} justifyContent={justifyContent} {...defaultProps}>
    {children}
  </RowContainer>
);

type Props = {
  children: React$Node,
  alignContent: string,
  justifyContent: string,
}

export default Col;
