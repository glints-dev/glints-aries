/* @flow */

import React from 'react';
import { PointingModalContainer, PointingModalHeaderArrow } from '../../Style/PointingModalStyle';

const Heading = (props: Props) => {
  const {
    children,
    className,
    ...pointingProps
  } = props;

  return (
    <PointingModalContainer className={className} {...pointingProps}>
      <PointingModalHeaderArrow />
      {children}
    </PointingModalContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default Heading;
