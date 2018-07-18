/* @flow */

import React from 'react';
import { PointingModalFooterContainer } from '../Style/PointingModalStyle';

const PointingModalFooter = ({
  children,
  className,
}: Props) => (
  <PointingModalFooterContainer className={className}>
    {children}
  </PointingModalFooterContainer>
);

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalFooter;
