/* @flow */

import React, { Fragment } from 'react';
import { TagContainer } from '../../Style/General/TagStyle';

const Tag = (props: Props) => {
  const {
    label,
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <TagContainer className={className} {...defaultProps}>
        {label}
        {children}
      </TagContainer>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  label: string,
  className: string,
}

export default Tag;
