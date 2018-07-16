/* @flow */
import React from 'react';
import { DividerWrapper } from '../Style/DividerStyle';

const Divider = (props: Props) => {
  const { 
    theme, 
    size, 
    thickness,
    className
  } = props;

  return (
    <DividerWrapper className={className} theme={theme} size={size} thickness={thickness} />
  );
}

export default Divider;