/* @flow */

import React from 'react';
import { MobileMenuHeaderWrapper } from '../../Style/Navigation/MobileMenuStyle';


const MobileMenuHeader = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <MobileMenuHeaderWrapper
      className={className}
      {...defaultProps}
    >
      {children}
    </MobileMenuHeaderWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default MobileMenuHeader;
