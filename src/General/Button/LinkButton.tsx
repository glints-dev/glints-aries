import * as React from 'react';
import { LinkBtn } from '../../Style/General/ButtonStyle';

const LinkButton: React.FunctionComponent<Props> = ({ children, ...defaultProps }) => (
  <LinkBtn
    className="aries-linkbtn"
    {...defaultProps}
  >
    {children}
  </LinkBtn>
);

interface Props extends React.ComponentPropsWithoutRef<typeof LinkBtn> {
  children: React.ReactNode,
  className: string,
}

export default LinkButton;
