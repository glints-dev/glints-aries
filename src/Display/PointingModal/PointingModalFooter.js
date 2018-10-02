/* @flow */

import React from 'react';
import { PointingModalFooterContainer } from '../../Style/Display/PointingModalStyle';

const PointingModalFooter = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <PointingModalFooterContainer className={className}>
      {children}
    </PointingModalFooterContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalFooter;
