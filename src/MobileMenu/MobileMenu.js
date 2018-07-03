/* @flow */

import React from 'react';
import { MobileMenuContainer } from '../Style/MobileMenuStyle';

const MobileMenu = (props: Props) => {
  const { children } = props;

  return (
    <MobileMenuContainer>
        {children}
    </MobileMenuContainer>
  );
}

type Props = {
    children: React$Node,
}

export default MobileMenu;
