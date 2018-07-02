/* @flow */
import React from 'react';
import { SearchItemWrapper } from '../Style/SearchStyle';

const SearchItems = (props: Props) => {
  const { children } = props;

  return (
    <SearchItemWrapper>{children}</SearchItemWrapper>
  );
}

type Props = {
  children: React$Node,
}

export default SearchItems;
