import * as React from 'react';
import { RowContainer } from '../../Style/Layout/GridStyle';

const Row: React.FunctionComponent<Props> = ({
  children,
  alignContent,
  justifyContent,
  ...defaultProps
}: Props) => (
  <RowContainer alignContent={alignContent} justifyContent={justifyContent} {...defaultProps}>
    {children}
  </RowContainer>
);

interface Props {
  children: React.ReactNode;
  alignContent: string;
  justifyContent: string;
}

export default Row;
