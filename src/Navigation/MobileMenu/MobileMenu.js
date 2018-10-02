/* @flow */

import React from 'react';
import { MobileMenuContainer } from '../../Style/Navigation/MobileMenuStyle';

const MobileMenu = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <MobileMenuContainer className={className}>
      {children}
    </MobileMenuContainer>
  );
};

type Props = {
    children: React$Node,
    className: string,
}

export default MobileMenu;
