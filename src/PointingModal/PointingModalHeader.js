/* @flow */

import React from 'react';
import { PointingModalHeaderContainer } from '../Style/PointingModalStyle';

const PointingModalHeader = ({
  children,
  className,
}: Props) => (
  <PointingModalHeaderContainer className={className}>
    {children}
  </PointingModalHeaderContainer>
);

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalHeader;
