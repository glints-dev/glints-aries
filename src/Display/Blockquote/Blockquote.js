/* @flow */

import React from 'react';
import { BlockquoteContainer } from '../../Style/BlockquoteStyle';

const Blockquote = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteContainer className={className}>
      {children}
    </BlockquoteContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Blockquote;
