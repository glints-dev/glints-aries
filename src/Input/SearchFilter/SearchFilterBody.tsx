import * as React from 'react';
import { SearchFilterResultContainer } from '../../Style/Input/SearchFilterStyle';

const SearchFilterBody: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <SearchFilterResultContainer
      className={className}
      {...defaultProps}
    >
      {children}
    </SearchFilterResultContainer>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof SearchFilterResultContainer> {
  children: React.ReactNode;
}

export default SearchFilterBody;
