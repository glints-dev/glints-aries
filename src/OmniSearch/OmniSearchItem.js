/* @flow */

import React from 'react';
import { OmniSearchItemWrapper } from '../Style/OmniSearchStyle';

const OmniSearchItem = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <OmniSearchItemWrapper className={className} {...defaultProps}>
      {children}
    </OmniSearchItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default OmniSearchItem;
