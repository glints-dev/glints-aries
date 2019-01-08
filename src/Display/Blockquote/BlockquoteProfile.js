/* @flow */

import React from 'react';
import { BlockquoteProfileWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteProfile = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteProfileWrapper id="blockquote-profile" className={className}>
      {children}
    </BlockquoteProfileWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteProfile;
