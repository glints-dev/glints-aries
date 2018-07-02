/* @flow */
import React from 'react';
import { SearchContainer } from '../Style/SearchStyle';

const Search = (props: Props) => {
  const { children } = props;

  return (
    <SearchContainer>
        {children}
    </SearchContainer>
  );
}

export default Search;
