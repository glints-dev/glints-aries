/* @flow */

import React from 'react';
import { SearchFilterItemWrapper } from '../../Style/Input/SearchFilterStyle';

const SearchFilterItem = (props: Props) => {
  const {
    children,
    className,
    onClick,
    ...defaultProps
  } = props;

  return (
    <SearchFilterItemWrapper
      className={className}
      onMouseDown={onClick}
      {...defaultProps}
    >
      {children}
    </SearchFilterItemWrapper>
  );
};

type Props = {
  children: React$Node,
  onClick: Function,
  className: string,
};

export default SearchFilterItem;
