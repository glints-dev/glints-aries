/* @flow */

import React from 'react';
import { MobileMenuItemWrapper } from '../../Style/Navigation/MobileMenuStyle';

const MobileMenuItem = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <MobileMenuItemWrapper
      className={className}
      {...defaultProps}
    >
      {children}
    </MobileMenuItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default MobileMenuItem;
