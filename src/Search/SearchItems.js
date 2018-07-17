/* @flow */

import React from 'react';
import { SearchItemWrapper } from '../Style/SearchStyle';

const SearchItems = (props: Props) => {
  const { 
    children, 
    className 
  } = props;

  return (
    <SearchItemWrapper className={className}>
      {children}
    </SearchItemWrapper>
  );
}

type Props = {
  children: React$Node,
  className: string,
};

export default SearchItems;
