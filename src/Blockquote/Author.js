/* @flow */

import React from 'react';
import { StyledAuthor } from './../Style/BlockquoteStyle';

const Author = (props: Props) => {
  const {
    children
  } = props;

  return (
    <StyledAuthor>{children}</StyledAuthor>
  );
}

type Props = {
  children: React$Node,
}

export default Author;