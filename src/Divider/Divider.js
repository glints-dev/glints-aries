/* @flow */

import React from 'react';
import { DividerWrapper } from '../Style/DividerStyle';

const Divider = (props: Props) => {
  const {
    theme,
    size,
    thickness,
    className,
    style,
  } = props;

  return (
    <DividerWrapper
      className={className}
      theme={theme}
      size={size}
      thickness={thickness}
      style={style}
    />
  );
};

type Props = {
  theme: string,
  size: string,
  thickness: string,
  className: string,
  style: Object,
}

export default Divider;
