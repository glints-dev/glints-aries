/* @flow */

import React from 'react';
import { PointingModalHeaderWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalHeader = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalHeaderWrapper className={className} {...defaultProps}>
      {children}
    </PointingModalHeaderWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalHeader;
