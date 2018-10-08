import React from 'react';
import {
  LayoutFooter,
} from '../../Style/Navigation/SidebarStyle';

const LayoutFooterContainer = ({ children, ...defaultProps } :Props) => (
  <LayoutFooter {...defaultProps}>
    {children}
  </LayoutFooter>
);

type Props = {
    children: React$Node,
}

export default LayoutFooterContainer;
