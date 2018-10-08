import React from 'react';
import {
  LayoutBody,
} from '../../Style/Navigation/SidebarStyle';

const LayoutBodyContainer = ({ children, ...defaultProps }:Props) => (
  <LayoutBody {...defaultProps}>
    {children}
  </LayoutBody>
);

type Props = {
    children: React$Node,
}

export default LayoutBodyContainer;
