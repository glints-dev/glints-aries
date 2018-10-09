import React from 'react';
import {
  LayoutFooter,
} from '../../Style/Navigation/LayoutStyle';

const LayoutFooterContainer = ({ children, ...defaultProps } :Props) => (
  <LayoutFooter {...defaultProps}>
    {children}
  </LayoutFooter>
);

type Props = {
    children: React$Node,
}

export default LayoutFooterContainer;
