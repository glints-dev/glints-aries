/* @flow */

import React from 'react';
import { PointingModalContainer, PointingModalHeaderArrow } from '../../Style/Display/PointingModalStyle';

const PointingModal = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalContainer className={className} {...defaultProps}>
      <PointingModalHeaderArrow />
      {children}
    </PointingModalContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default PointingModal;
