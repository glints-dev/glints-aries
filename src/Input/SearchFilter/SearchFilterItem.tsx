import * as React from 'react';
import { SearchFilterItemWrapper } from '../../Style/Input/SearchFilterStyle';

const SearchFilterItem: React.FunctionComponent<Props> = (props) => {
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
      role="listitem"
      {...defaultProps}
    >
      {children}
    </SearchFilterItemWrapper>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof SearchFilterItemWrapper> {
  children: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}

export default SearchFilterItem;
