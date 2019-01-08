/* @flow */

import React from 'react';
import { PointingModalItemWrapper } from '../../Style/Display/PointingModalStyle';

const PointingModalItem = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <PointingModalItemWrapper
      className="pointingmodal-item"
      {...defaultProps}
    >
      {children}
    </PointingModalItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default PointingModalItem;
