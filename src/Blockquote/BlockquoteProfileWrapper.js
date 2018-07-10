/* @flow */

import React from 'react';
import { ProfileWrapper } from './../Style/BlockquoteStyle';

const BlockquoteProfileWrapper = (props: Props) => {
  const {
    children,
  } = props;

  return (
    <ProfileWrapper>
      {children}
    </ProfileWrapper>
  );
}

type Props = {
  children: React$Node,
}

export default BlockquoteProfileWrapper;
