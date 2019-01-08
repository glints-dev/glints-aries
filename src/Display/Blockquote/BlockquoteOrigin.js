/* @flow */

import React from 'react';
import { BlockquoteOriginWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteOrigin = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteOriginWrapper id="blockquote-origin" className={className}>
      {children}
    </BlockquoteOriginWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteOrigin;
