/* @flow */

import React from 'react';
import { ItemWrapper } from '../Style/SearchFilterStyle';

const SearchFilterItem = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ItemWrapper className={className} {...defaultProps}>
      {children}
    </ItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default SearchFilterItem;
