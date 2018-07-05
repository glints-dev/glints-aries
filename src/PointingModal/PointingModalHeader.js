/* @flow */
import React from 'react';
import { PointingModalHeaderContainer } from './../Style/PointingModalStyle';

const PointingModalHeader = (props: Props) => {
  const { children } = props;

  return (
    <PointingModalHeaderContainer>{children}</PointingModalHeaderContainer>
  );
}

type Props = {
  children: React$Node,
}

export default PointingModalHeader;
