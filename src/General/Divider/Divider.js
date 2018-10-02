/* @flow */

import React from 'react';
import { DividerContainer } from '../../Style/General/DividerStyle';

const Divider = (props: Props) => {
  const {
    theme,
    className,
  } = props;

  return (
    <DividerContainer
      className={className}
      theme={theme}
    />
  );
};

type Props = {
  theme: string,
  className: string,
}

export default Divider;
