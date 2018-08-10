/* @flow */

import React from 'react';
import { Outter, Inner} from '../Style/ContainerStyle';

const Container = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <Outter className={className}>
      <Inner>
        {children}
      </Inner>
    </Outter>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Container;
