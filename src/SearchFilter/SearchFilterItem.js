/* @flow */

import React from 'react';
import { SearchFilterItems } from '../Style/SearchFilterStyle';

const SearchFilterItem = (props: Props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <SearchFilterItems className={className} onMouseDown={onClick} {...defaultProps}>
      {children}
    </SearchFilterItems>
  );
};

type Props = {
  children: React$Node,
  onClick: Function,
  className: string,
};

export default SearchFilterItem;
