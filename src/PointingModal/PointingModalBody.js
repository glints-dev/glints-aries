/* @flow */
import React from 'react';
import { PointingModalBodyContainer } from './../Style/PointingModalStyle';

const PointingModalBody = (props: Props) => {
  const { children } = props;

  return (
    <PointingModalBodyContainer>{children}</PointingModalBodyContainer>
  );
}

type Props = {
  children: React$Node,
}

export default PointingModalBody;
