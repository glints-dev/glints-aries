/* @flow */
import React from 'react';
import { BlockquoteContainer } from './../Style/BlockquoteStyle';

const Blockquote = (props: Props) => {
  const {
    children,
    inverted,
  } = props;

  return (
    <BlockquoteContainer>
      {children}
    </BlockquoteContainer>
  );
}

type Props = {
  children: React$Node,
  inverted: boolean
}

export default Blockquote;
