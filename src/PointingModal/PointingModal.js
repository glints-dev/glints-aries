/* @flow */

import React from 'react';
import { PointingModalContainer } from './../Style/PointingModalStyle';

const Heading = (props: Props) => {
  const {
    children,
    className,
    ...pointingProps
  } = props;

  return (
    <PointingModalContainer className={className} {...pointingProps}>
        {children}
    </PointingModalContainer>
  );
}

type Props = {
  children: React$Node,
  className: string,
};

export default Heading;
