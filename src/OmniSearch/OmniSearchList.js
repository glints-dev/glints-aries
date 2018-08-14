/* @flow */

import React from 'react';
import { OmniSearchItemWrapper } from '../Style/OmniSearchStyle';

const OmniSearchList = (props: Props) => {
  const {
    title,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <OmniSearchItemWrapper className={className} {...defaultProps}>
      <label>
        {title}
      </label>
      <ul>
        {children}
      </ul>
    </OmniSearchItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
  title: string,
};

export default OmniSearchList;
