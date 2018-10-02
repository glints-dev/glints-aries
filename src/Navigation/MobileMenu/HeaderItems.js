/* @flow */

import React from 'react';
import { HeaderWrapper, DividerWrapper } from '../../Style/Navigation/MobileMenuStyle';

import Divider from '../../General/Divider';

const HeaderItems = (props: Props) => {
  const {
    children,
    className,
    margin,
  } = props;

  return (
    <div>
      <HeaderWrapper
        className={className}
        margin={margin}
      >
        {children}
      </HeaderWrapper>
      <DividerWrapper>
        <Divider size="large" theme="white" thickness="thin" />
      </DividerWrapper>
    </div>
  );
};

type Props = {
  children: React$Node,
  className: string,
  margin: boolean
}

export default HeaderItems;
