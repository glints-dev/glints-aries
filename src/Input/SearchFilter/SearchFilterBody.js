/* @flow */

import React from 'react';
import { SearchFilterResultContainer } from '../../Style/Input/SearchFilterStyle';

const SearchFilterBody = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <SearchFilterResultContainer
      className={className}
      role="menuitem"
      aria-hidden={false}
      {...defaultProps}
    >
      {children}
    </SearchFilterResultContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default SearchFilterBody;
