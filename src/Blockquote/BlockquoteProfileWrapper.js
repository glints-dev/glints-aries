/* @flow */

import React from 'react';
import { ProfileWrapper } from './../Style/BlockquoteStyle';

const BlockquoteProfileWrapper = (props: Props) => {
  const {
    children,
    className
  } = props;

  return (
    <ProfileWrapper className={className}>
      {children}
    </ProfileWrapper>
  );
}

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteProfileWrapper;
