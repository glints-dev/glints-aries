import * as React from 'react';
import classNames from 'classnames';

import { IconBtn } from '../../Style/General/ButtonStyle';

const IconButton: React.FunctionComponent<Props> = ({
  children,
  className,
  shape,
  ...defaultProps
}) => (
  <IconBtn className={classNames('aries-iconbtn', `iconbtn-${shape}`, className)} {...defaultProps}>
    {children}
  </IconBtn>
);

interface Props extends React.ComponentPropsWithoutRef<typeof IconBtn> {
  children: React.ReactNode;
  className: string;
  shape?: string;
  block?: boolean;
}

export default IconButton;
