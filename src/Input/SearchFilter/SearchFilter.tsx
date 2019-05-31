import * as React from 'react';

import { SearchFilterContainer, SearchFilterBar, SearchFilterBodyWrapper } from '../../Style/Input/SearchFilterStyle';
import SearchFilterBody from './SearchFilterBody';
import SearchFilterList from './SearchFilterList';
import SearchFilterItem from './SearchFilterItem';

class SearchFilter extends React.Component<Props, State> {
  static Body = SearchFilterBody;
  static List = SearchFilterList;
  static Item = SearchFilterItem;

  state = {
    isOpen: false,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const {
      children,
      className,
      label,
      content,
      value,
      ...defaultProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <SearchFilterContainer
        id="aries-searchfilter"
        className={className}
        role="search"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <SearchFilterBar id="searchfilter-inputwrapper">
          <input
            type="text"
            placeholder={label}
            onFocus={this.handleOpen}
            onBlur={this.handleOpen}
            value={value}
            {...defaultProps}
          />
          {content}
        </SearchFilterBar>
        <SearchFilterBodyWrapper
          id="searchfilter-content"
          role="menuitem"
          aria-hidden={!isOpen && true}
          open={isOpen}
        >
          { children }
        </SearchFilterBodyWrapper>
      </SearchFilterContainer>
    );
  }
}

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'content'> {
  children: React.ReactNode;
  content: React.ReactNode;
  label: string;
};

interface State {
  isOpen: boolean;
}

export default SearchFilter;
