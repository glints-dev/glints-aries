/* @flow */

import React from 'react';
import { PointingModalBodyItemWrapper } from '../../Style/PointingModalStyle';

const PointingModalItem = ({
  children,
  className,
  ...defaultProps
}: Props) => (
  <PointingModalBodyItemWrapper className={className} {...defaultProps}>
    {children}
  </PointingModalBodyItemWrapper>
);

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalItem;
