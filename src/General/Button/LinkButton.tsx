import * as React from 'react';
import { LinkBtn } from '../../Style/General/ButtonStyle';

const LinkButton: React.FunctionComponent<Props> = ({
  children,
  block,
  ...defaultProps
}) => (
  <LinkBtn className="aries-linkbtn" block={block} {...defaultProps}>
    {children}
  </LinkBtn>
);

interface Props extends React.ComponentPropsWithoutRef<typeof LinkBtn> {
  children: React.ReactNode;
  className: string;
  block?: boolean;
}

export default LinkButton;
