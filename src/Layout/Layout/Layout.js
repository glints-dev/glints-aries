import React from 'react';

import { LayoutContainer } from '../../Style/Layout/LayoutStyle';

const Layout = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <LayoutContainer className={className} {...defaultProps}>
      {children}
    </LayoutContainer>
  );
};

type Props = {
  children: React$Node,
}

export default Layout;
