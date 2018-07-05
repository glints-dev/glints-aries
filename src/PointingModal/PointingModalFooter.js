/* @flow */
import React from 'react';
import { PointingModalFooterContainer } from './../Style/PointingModalStyle';

const PointingModalFooter = (props: Props) => {
  const { children } = props;

  return (
    <PointingModalFooterContainer>{children}</PointingModalFooterContainer>
  );
}

type Props = {
  children: React$Node,
}

export default PointingModalFooter;
