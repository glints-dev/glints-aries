/* @flow */

import React from 'react';
import { PointingModalBodyItemWrapper } from '../Style/PointingModalStyle';

const PointingModalItem = ({
  children,
  className,
  ...props
}: Props) => (
  <PointingModalBodyItemWrapper className={className} {...props}>
    {children}
  </PointingModalBodyItemWrapper>
);

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalItem;
