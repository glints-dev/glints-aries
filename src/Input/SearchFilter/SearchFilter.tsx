import * as React from 'react';
import classNames from 'classnames';

import {
  SearchFilterContainer,
  SearchFilterBar,
  SearchFilterBodyWrapper,
  SearchFilterButton,
} from '../../Style/Input/SearchFilterStyle';
import SearchFilterBody from './SearchFilterBody';
import SearchFilterList from './SearchFilterList';
import SearchFilterItem from './SearchFilterItem';
import { SearchFilterContext } from './Context';

class SearchFilter extends React.Component<Props, State> {
  static Body = SearchFilterBody;
  static Button = SearchFilterButton;
  static List = SearchFilterList;
  static Item = SearchFilterItem;

  state = { isOpen: false };
  searchFilterRef: React.RefObject<HTMLDivElement> = React.createRef();
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.inputRef = props.inputRef || React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if (
      this.searchFilterRef.current &&
      !this.searchFilterRef.current.contains(element)
    ) {
      this.handleClose();
    }
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
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

    delete defaultProps.inputRef;
    const { isOpen } = this.state;

    return (
      <SearchFilterContext.Provider
        value={{ closeSearchFilterMenu: this.handleClose }}
      >
        <SearchFilterContainer
          className={classNames('aries-searchfilter', className)}
          role="search"
          aria-expanded={isOpen}
          aria-label={label}
          ref={this.searchFilterRef}
        >
          <SearchFilterBar className="searchfilter-inputwrapper">
            <input
              type="text"
              placeholder={label}
              onFocus={this.handleOpen}
              value={value}
              ref={this.inputRef}
              {...defaultProps}
            />
            {content}
          </SearchFilterBar>
          <SearchFilterBodyWrapper
            className="searchfilter-content"
            role="menuitem"
            aria-hidden={!isOpen && true}
            open={isOpen}
          >
            {children}
          </SearchFilterBodyWrapper>
        </SearchFilterContainer>
      </SearchFilterContext.Provider>
    );
  }
}

interface Props extends Omit<React.HTMLProps<HTMLInputElement>, 'content'> {
  children?: React.ReactNode;
  content?: React.ReactNode;
  label: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

interface State {
  isOpen: boolean;
}

export default SearchFilter;
