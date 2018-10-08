/* @flow */

import React from 'react';
import { PointingModalBodyWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalBody = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalBodyWrapper className={className} {...defaultProps}>
      <ul>
        {children}
      </ul>
    </PointingModalBodyWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalBody;
