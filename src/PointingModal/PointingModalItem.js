/* @flow */
import React from 'react';
import { PointingModalBodyItemWrapper } from './../Style/PointingModalStyle';

const PointingModalItem = (props: Props) => {
  const { children } = props;

  return (
    <PointingModalBodyItemWrapper>{children}</PointingModalBodyItemWrapper>
  );
}

type Props = {
  children: React$Node,
}

export default PointingModalItem;
