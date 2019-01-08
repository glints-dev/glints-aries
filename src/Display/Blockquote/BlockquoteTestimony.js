/* @flow */

import React from 'react';
import { BlockquoteTestimonyWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteTestimony = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteTestimonyWrapper id="blockquote-testimony" className={className}>
      {children}
    </BlockquoteTestimonyWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteTestimony;
