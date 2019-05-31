import * as React from 'react';
import classNames from 'classnames';
import { SearchFilterListWrapper } from '../../Style/Input/SearchFilterStyle';

const SearchFilterList = (props: Props) => {
  const {
    title,
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <SearchFilterListWrapper
      className={classNames('searchfilter-listitem', className)}
      role="list"
      {...defaultProps}
    >
      <label>
        {title}
      </label>
      <ul>
        {children}
      </ul>
    </SearchFilterListWrapper>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof SearchFilterListWrapper> {
  children: React.ReactNode;
  title: HTMLDivElement['title'];
}

export default SearchFilterList;
