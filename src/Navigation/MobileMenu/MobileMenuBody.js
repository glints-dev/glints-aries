/* @flow */

import React from 'react';
import { MobileMenuBodyWrapper } from '../../Style/Navigation/MobileMenuStyle';

const MobileMenuBody = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <MobileMenuBodyWrapper
      className={className}
      role="list"
      {...defaultProps}
    >
      {children}
    </MobileMenuBodyWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default MobileMenuBody;
