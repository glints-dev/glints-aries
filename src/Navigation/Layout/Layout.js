import React from 'react';

import {
  LayoutContainer,
} from '../../Style/Navigation/LayoutStyle';

const Layout = ({ children, ...defaultProps }:Props) => (
  <LayoutContainer {...defaultProps}>
    {children}
  </LayoutContainer>
);

type Props = {
    children: React$Node,
}

export default Layout;
