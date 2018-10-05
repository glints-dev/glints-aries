/* @flow */

import React from 'react';
import { MobileMenuTopWrapper } from '../../Style/Navigation/MobileMenuStyle';

const MobileMenuTop = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <MobileMenuTopWrapper
      className={className}
      {...defaultProps}
    >
      {children}
    </MobileMenuTopWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default MobileMenuTop;
