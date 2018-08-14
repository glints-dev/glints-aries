/* @flow */

import React from 'react';
import { Outter } from '../Style/ContainerStyle';

const Container = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <Outter className={className}>
      {children}
    </Outter>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Container;
