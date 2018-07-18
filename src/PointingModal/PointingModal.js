/* @flow */

import React from 'react';
import { PointingModalContainer } from '../Style/PointingModalStyle';

const Heading = ({
  children,
  className,
  ...pointingProps
}: Props) => (
  <PointingModalContainer className={className} {...pointingProps}>
    {children}
  </PointingModalContainer>
);

type Props = {
  children: React$Node,
  className: string,
};

export default Heading;
