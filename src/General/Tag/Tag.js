/* @flow */

import React, { Fragment } from 'react';
import { TagContainer, TagContent } from '../../Style/General/TagStyle';

const Tag = (props: Props) => {
  const {
    className,
    children,
    theme,
    block,
    outline,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <TagContainer
        className={className}
        role="presentation"
        tabIndex="0"
        theme={theme}
        block={block}
        outline={outline}
        {...defaultProps}
      >
        <TagContent tabIndex="-1">
          {children}
        </TagContent>
      </TagContainer>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  className: string,
  theme: string,
  block: boolean,
  outline: boolean,
}

export default Tag;
