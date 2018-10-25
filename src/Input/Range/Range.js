/* @flow */

import React from 'react';

import { RangeContainer } from '../../Style/Input/RangeStyle';

const Range = (props: Props) => {
  const {
    className,
    ...defaultProps
  } = props;

  return (
    <RangeContainer
      className={className}
      {...defaultProps}
    >
      <input type="range" />
      <input type="range" />
    </RangeContainer>
  );
};

type Props = {
  className: string,
}

export default Range;
