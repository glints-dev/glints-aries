/* @flow */

import React from 'react';
import { HeaderWrapper, DividerWrapper } from '../Style/MobileMenuStyle';

import Divider from '../Divider';

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
