/* @flow */

import React from 'react';
import { BlockquoteAuthorWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteAuthor = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteAuthorWrapper id="blockquote-author" className={className}>
      {children}
    </BlockquoteAuthorWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteAuthor;
