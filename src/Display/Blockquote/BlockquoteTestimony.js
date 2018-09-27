/* @flow */

import React from 'react';
import { BlockquoteTestimonyWrapper } from '../../Style/BlockquoteStyle';

const BlockquoteTestimony = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteTestimonyWrapper className={className}>
      {children}
    </BlockquoteTestimonyWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteTestimony;
