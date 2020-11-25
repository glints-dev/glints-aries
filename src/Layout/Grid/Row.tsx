import * as React from 'react';
import { RowContainer } from './GridStyle';

const Row: React.FunctionComponent<Props> = ({
  children,
  alignContent,
  justifyContent,
  ...defaultProps
}: Props) => (
  <RowContainer
    alignContent={alignContent}
    justifyContent={justifyContent}
    {...defaultProps}
  >
    {children}
  </RowContainer>
);

interface Props {
  children: React.ReactNode;
  /** Sets the align-content and align-items css properties for the row. */
  alignContent?: string;
  /** Sets the justfiy-content and justfiy-items css properties for the row. */
  justifyContent?: string;
}

export default Row;
