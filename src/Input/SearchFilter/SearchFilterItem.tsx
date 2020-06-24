import * as React from 'react';
import { SearchFilterItemWrapper } from './SearchFilterStyle';
import { useSearchFilterContext } from './Context';

const SearchFilterItem: React.FunctionComponent<Props> = props => {
  const { children, className, onClick, ...defaultProps } = props;
  const { closeSearchFilterMenu } = useSearchFilterContext();

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }
    if (closeSearchFilterMenu) {
      closeSearchFilterMenu();
    }
  };
  return (
    <SearchFilterItemWrapper
      className={className}
      onClick={handleClick}
      role="listitem"
      {...defaultProps}
    >
      {children}
    </SearchFilterItemWrapper>
  );
};

export interface Props
  extends React.ComponentPropsWithoutRef<typeof SearchFilterItemWrapper> {
  children: React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}

export default SearchFilterItem;
