/* @flow */

import React from 'react';
import { Paragraph } from './../Style/BlockquoteStyle';

const BlockquoteContent = (props: Props) => {
  const {
      children,
  } = props;

  return (
    <Paragraph>
      {children}
    </Paragraph>
  );
}

export default BlockquoteContent;
