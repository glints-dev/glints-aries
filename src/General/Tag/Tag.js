/* @flow */

import React, { Fragment } from 'react';
import { TagContainer, TagContent } from '../../Style/General/TagStyle';

const Tag = (props: Props) => {
  const {
    label,
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <TagContainer
        className={className}
        role="presentation"
        tabIndex="0"
        {...defaultProps}
      >
        <TagContent tabIndex="-1">
          {label}
          {children}
        </TagContent>
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
