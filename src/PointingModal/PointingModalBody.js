/* @flow */

import React from 'react';
import { PointingModalBodyContainer } from '../Style/PointingModalStyle';

const PointingModalBody = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <PointingModalBodyContainer className={className}>
      {children}
    </PointingModalBodyContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalBody;
