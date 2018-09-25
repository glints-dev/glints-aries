/* @flow */

import React from 'react';
import { DividerWrapper } from '../../Style/DividerStyle';

const Divider = (props: Props) => {
  const {
    theme,
    className,
  } = props;

  return (
    <DividerWrapper
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
