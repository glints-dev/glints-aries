/* @flow */
import React from 'react';
import { PointingModalContainer } from './../Style/PointingModalStyle';

const Heading = (props: Props) => {
  const {
    children,
    ...pointingProps
  } = props;

  return (
    <PointingModalContainer {...pointingProps}>
        {children}
    </PointingModalContainer>
  );
}

export default Heading;
