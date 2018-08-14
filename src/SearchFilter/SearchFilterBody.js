/* @flow */

import React from 'react';
import { ResultContainer } from '../Style/SearchFilterStyle';

const SearchFilterBody = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <ResultContainer className={className} {...defaultProps}>
      {children}
    </ResultContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default SearchFilterBody;
