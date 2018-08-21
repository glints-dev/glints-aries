/* @flow */

import React from 'react';
import { ItemWrapper } from '../Style/SearchFilterStyle';

const SearchFilterList = (props: Props) => {
  const {
    title,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ItemWrapper className={className} {...defaultProps}>
      <label>
        {title}
      </label>
      <ul>
        {children}
      </ul>
    </ItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
  title: string,
};

export default SearchFilterList;
