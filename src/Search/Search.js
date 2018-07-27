/* @flow */

import React from 'react';
import { SearchContainer } from '../Style/SearchStyle';

const Search = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <SearchContainer className={className}>
      {children}
    </SearchContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default Search;
