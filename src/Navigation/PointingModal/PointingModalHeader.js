/* @flow */

import React from 'react';
import { PointingModalHeaderContainer } from '../../Style/PointingModalStyle';

const PointingModalHeader = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <PointingModalHeaderContainer className={className}>
      {children}
    </PointingModalHeaderContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalHeader;
