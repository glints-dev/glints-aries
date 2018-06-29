/* @flow */
import React from 'react';
import { DividerWrapper } from '../Style/DividerStyle';

const Divider = (props: Props) => {
  const { theme, size } = props;

  return (
    <DividerWrapper theme={theme} size={size} />
  );
}

export default Divider;