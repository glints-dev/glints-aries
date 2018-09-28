/* @flow */

import React from 'react';
import { TagContainer } from '../../Style/TagStyle';

const Tag = (props: Props) => {
  const {
    label,
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <TagContainer className={className} {...defaultProps}>
      {label}
      {children}
    </TagContainer>
  );
};

type Props = {
  children: React$Node,
  label: string,
  className: string,
}

export default Tag;
