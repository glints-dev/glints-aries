/* @flow */
import React from 'react';
import { BlockquoteContainer } from './../Style/BlockquoteStyle';

const Blockquote = (props: Props) => {
  const {
    children,
    theme,
    ...defaultLabelProps
  } = props;

  return (
    <BlockquoteContainer theme={theme}>
        {children}
    </BlockquoteContainer>
  );
}

export default Blockquote;
