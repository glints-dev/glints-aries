/* @flow */

import React from 'react';
import { OmniSearchItemContainer } from '../Style/OmniSearchStyle';

const OmniSearchBody = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <OmniSearchItemContainer className={className} {...defaultProps}>
      {children}
    </OmniSearchItemContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default OmniSearchBody;
