import React, { Component } from 'react';
import Icon from '../../General/Icon';
import SelectItem from './SelectItem';
import {
  SelectContainer,
  SelectWrapper,
  SelectInput,
  SelectLabel,
  SelectListWrapper,
} from '../../Style/Input/SelectStyle';

class Select extends Component <Props, State> {
  state = {
    floating: false,
    isFocus: false,
    selectedValue: '',
    filterValue: [],
    cursor: 0,
    notMatch: false,
  }

  handleFocusOut = (onBlur) => {
    const listener = (e) => {
      this.setState({
        floating: e.target.value.length > 0,
        isFocus: false,
      });

      if (onBlur !== undefined) {
        return onBlur(e);
      }
    };

    return listener;
  }

  handleFocus = (onFocus) => {
    const listener = (e) => {
      this.setState({
        isFocus: true,
      });

      if (onFocus !== undefined) {
        return onFocus(e);
      }
    };

    return listener;
  }

  handleChange = (e) => {
    const { children } = this.props;

    this.setState({
      selectedValue: e.target.value,
      filterValue: children.filter(data => data.props.children.toLowerCase().includes(e.target.value.toLowerCase())),
      cursor: 0,
    });
  }

  handleClick = (e) => {
    const { children, onChange } = this.props;

    this.setState({
      selectedValue: e.currentTarget.innerText,
      filterValue: children.map(data => data),
    });

    if (onChange !== undefined) {
      onChange(e.target.dataset.value);
    }
  }

  handleKeyDown = (e) => {
    const { children, onChange } = this.props;
    const { cursor, filterValue } = this.state;

    if (e.keyCode === 38 && cursor > 0) {
      this.setState({
        cursor: cursor - 1,
      });
    } else if (e.keyCode === 40 && cursor < filterValue.length - 1) {
      this.setState({
        cursor: cursor + 1,
      });
    } else if (e.keyCode === 13) {
      e.target.blur();
      this.setState({
        selectedValue: document.querySelector('.active').innerHTML,
        filterValue: children.map(data => data),
        floating: true,
        isFocus: false,
      });
      if (onChange !== undefined) {
        const itemValue = document.querySelector('.active').dataset.value;
        onChange(itemValue);
      }
    } else if (e.keyCode === 27) {
      e.target.blur();
      this.setState({ isFocus: false });
    }
  }

  handleMouseEnter = (e) => {
    this.setState({
      cursor: Number(e.target.dataset.id),
    });
  }

  componentDidMount() {
    const { value, children } = this.props;

    this.setState({
      filterValue: children.map(data => data),
    });

    if (value !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
          selectedValue: value,
        });
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.filterValue.length === 0) {
      return { notMatch: true };
    }
    return { notMatch: false };
  }

  render() {
    const {
      label,
      value,
      status,
      disabled,
      className,
      onFocus,
      onBlur,
      noOptionResult,
      children,
      ...defaultProps
    } = this.props;

    const {
      floating,
      isFocus,
      selectedValue,
      filterValue,
      cursor,
      notMatch,
    } = this.state;

    return (
      <SelectContainer className={className}>
        <SelectWrapper>
          <SelectInput
            type="text"
            role="combobox"
            aria-expanded={isFocus}
            aria-autocomplete="list"
            status={status}
            disabled={disabled}
            onFocus={this.handleFocus(onFocus)}
            onBlur={this.handleFocusOut(onBlur)}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            floating={floating}
            value={selectedValue}
            {...defaultProps}
          />
          <SelectLabel floating={floating} status={status}>
            {label}
          </SelectLabel>
          <div className="select-icon" aria-label="show options">
            <Icon name="arrow-down" color="#777" size="14" />
          </div>
        </SelectWrapper>
        {isFocus && (
          <SelectListWrapper role="listbox">
            {filterValue.map((data, index) => (
              <SelectItem
                className={cursor === index ? 'active' : null}
                key={data.props.value}
                role="option"
                data-id={index}
                data-value={data.props.value}
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                {data.props.children}
              </SelectItem>
            ))}
            {notMatch && (
              <SelectItem
                disabled
                role="option"
                aria-disabled="true"
              >
                {noOptionResult}
              </SelectItem>
            )}
          </SelectListWrapper>
        )}
      </SelectContainer>
    );
  }
}

type Props = {
  label: string,
  status: string,
  disabled: boolean,
  className: string,
  noOptionResult: string,
  children: React$Node,
}

type State = {
  floating: boolean,
  isFocus: boolean,
  selectedValue: string,
  filterValue: array,
  cursor: number,
  notMatch: boolean,
};

export default Select;
