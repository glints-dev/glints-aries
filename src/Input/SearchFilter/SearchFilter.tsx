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

class SearchFilter extends React.Component<Props, State> {
  static Body = SearchFilterBody;
  static Button = SearchFilterButton;
  static List = SearchFilterList;
  static Item = SearchFilterItem;

  state = { isOpen: false };
  searchFilterRef = React.createRef() as React.RefObject<HTMLDivElement>;
  inputRef = React.createRef() as React.RefObject<HTMLInputElement>;

  componentDidMount() {
    document.addEventListener('mousedown', this.handleMouseDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseDown, false);
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  handleMouseDown = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    const hasClickedOnInput = element === this.inputRef.current;
    const hasClickedInsideSearchFilter = this.searchFilterRef.current.contains(element);
    const hasClickedOnScrollBar = hasClickedInsideSearchFilter &&
      (event.offsetX > element.clientWidth || event.offsetY > element.clientHeight);

    if (hasClickedOnInput || hasClickedOnScrollBar) {
      return;
    } else {
      this.handleClose();
    }
  }

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
