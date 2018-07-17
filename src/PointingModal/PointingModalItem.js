/* @flow */

import React from 'react';
import { PointingModalBodyItemWrapper } from './../Style/PointingModalStyle';

const PointingModalItem = (props: Props) => {
  const { 
    children, 
    className 
  } = props;

  return (
    <PointingModalBodyItemWrapper className={className}>
      {children}
    </PointingModalBodyItemWrapper>
  );
}

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalItem;
