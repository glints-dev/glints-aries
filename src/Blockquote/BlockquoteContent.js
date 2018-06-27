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

type Props = {
  children: React$Node,
}

export default BlockquoteContent;
