import * as React from 'react';
import classNames from 'classnames';

import { LinkBtn } from '../../Style/General/ButtonStyle';

const LinkButton: React.FunctionComponent<Props> = ({
  children,
  className,
  ...defaultProps
}) => (
  <LinkBtn className={classNames('aries-linkbtn', className)} {...defaultProps}>
    {children}
  </LinkBtn>
);

interface Props extends React.ComponentPropsWithoutRef<typeof LinkBtn> {
  children: React.ReactNode;
  className: string;
  block?: boolean;
}

export default LinkButton;
