/* @flow */

import React from 'react';
import { PointingModalFooterWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalFooter = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalFooterWrapper
      id="pointingmodal-footer"
      className={className}
      {...defaultProps}
    >
      {children}
    </PointingModalFooterWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalFooter;
