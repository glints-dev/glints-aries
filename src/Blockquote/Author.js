/* @flow */

import React from 'react';
import { Author } from './../Style/BlockquoteStyle';

const AuthorSection = (props: Props) => {
  const {
    children
  } = props;

  return (
    <Author>{children}</Author>
  );
}

type Props = {
  children: React$Node,
}

export default AuthorSection;