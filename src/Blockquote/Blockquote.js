/* @flow */
import React from 'react';
import { BlockquoteContainer } from './../Style/BlockquoteStyle';

const Blockquote = (props: Props) => {
  const {
    children,
    inverted,
    ...defaultLabelProps
  } = props;

  return (
    <BlockquoteContainer inverted={inverted}>
        {children}
    </BlockquoteContainer>
  );
}

export default Blockquote;
