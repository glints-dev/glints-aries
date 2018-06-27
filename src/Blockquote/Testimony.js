/* @flow */

import React from 'react';
import { Testimony } from './../Style/BlockquoteStyle';

const TestimonySection = (props: Props) => {
  const {
    children,
  } = props;
  
  return (
    <Testimony>{children}</Testimony>
  );
}

type Props = {
  children: React$Node,
}

export default TestimonySection;