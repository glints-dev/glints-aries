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
    <PointingModalContainer
      className={className}
      role="dialog"
      aria-modal="true"
      tabIndex={0}
      {...defaultProps}
    >
      <PointingModalHeaderArrow role="presentation" />
      {children}
    </PointingModalContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default PointingModal;
