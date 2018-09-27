/* @flow */

import React from 'react';
import { BlockquoteOriginWrapper } from '../../Style/BlockquoteStyle';

const BlockquoteOrigin = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteOriginWrapper className={className}>
      {children}
    </BlockquoteOriginWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteOrigin;
