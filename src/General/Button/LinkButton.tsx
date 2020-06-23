import * as React from 'react';
import classNames from 'classnames';

import { LinkBtn } from './ButtonStyle';

const LinkButton: React.FunctionComponent<Props> = ({
  children,
  className,
  tag,
  ...defaultProps
}) => (
  <LinkBtn
    className={classNames('aries-linkbtn', className)}
    as={(tag as React.ElementType) || 'button'}
    {...defaultProps}
  >
    {children}
  </LinkBtn>
);

interface Props extends React.ComponentPropsWithoutRef<typeof LinkBtn> {
  children: React.ReactNode;
  className: string;
  block?: boolean;
  tag?: React.ElementType;
}

export default LinkButton;
