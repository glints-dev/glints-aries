/* @flow */

import React from 'react';
import { OmniSearchListItem } from '../../Style/Input/OmniSearchStyle';

const OmniSearchList = (props: Props) => {
  const {
    title,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <OmniSearchListItem
      className={className}
      role="list"
      {...defaultProps}
    >
      <label>
        {title}
      </label>
      <ul>
        {children}
      </ul>
    </OmniSearchListItem>
  );
};

type Props = {
  children: React$Node,
  className: string,
  title: string,
};

export default OmniSearchList;
