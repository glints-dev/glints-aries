import React from 'react';
import {
  LayoutHeader,
  LayoutHeaderEmptySpace,
} from '../../Style/Navigation/SidebarStyle';

const LayoutHeaderContainer = ({ children, ...defaultProps }:Props) => (
  <React.Fragment>
    <LayoutHeader {...defaultProps}>
      {children}
    </LayoutHeader>
    <LayoutHeaderEmptySpace {...defaultProps} />
  </React.Fragment>
);

type Props = {
    children: React$Node,
}

export default LayoutHeaderContainer;
