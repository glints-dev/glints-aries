import React from 'react';

import {
  LayoutContainer,
} from '../../Style/Navigation/LayoutStyle';

const Layout = ({ children }:Props) => (
  <LayoutContainer>
    {children}
  </LayoutContainer>
);

type Props = {
    children: React$Node,
}

export default Layout;
