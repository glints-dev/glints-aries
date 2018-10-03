/* @flow */

import React from 'react';
import { SearchFilterListWrapper } from '../../Style/Input/SearchFilterStyle';

const SearchFilterList = (props: Props) => {
  const {
    title,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <SearchFilterListWrapper className={className} {...defaultProps}>
      <label>
        {title}
      </label>
      <ul>
        {children}
      </ul>
    </SearchFilterListWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
  title: string,
};

export default SearchFilterList;
