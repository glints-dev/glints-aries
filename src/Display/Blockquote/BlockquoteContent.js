/* @flow */

import React from 'react';
import { BlockquoteContentWrapper } from '../../Style/Display/BlockquoteStyle';

const BlockquoteContent = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <BlockquoteContentWrapper className={className}>
      {children}
    </BlockquoteContentWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default BlockquoteContent;
