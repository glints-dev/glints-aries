/* @flow */

import React from 'react';
import { Paragraph } from '../Style/BlockquoteStyle';

const BlockquoteContent = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <Paragraph className={className}>
      {children}
    </Paragraph>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteContent;
