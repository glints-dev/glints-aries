/* @flow */

import React from 'react';
import { StyledAuthor } from '../../Style/BlockquoteStyle';

const Author = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <StyledAuthor className={className}>
      {children}
    </StyledAuthor>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Author;
