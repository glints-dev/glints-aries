import React, { Component } from 'react';

import SelectItem from './SelectItem';

import Icon from '../../General/Icon';

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
    childrenLength: 0,
    defaultValue: '',
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

  handleChange = (onChange) => {
    const listener = (e) => {
      const { children } = this.props;

      this.setState({
        selectedValue: e.target.value,
        filterValue: children.filter(data => data.props.children.toLowerCase().includes(e.target.value.toLowerCase())),
        cursor: 0,
      });

      if (onChange !== undefined) {
        return onChange();
      }
    };

    return listener;
  }

  handleClick = (onOptionClick) => {
    const listener = (e) => {
      const { children, onChange } = this.props;

      this.setState({
        selectedValue: e.currentTarget.innerText,
        filterValue: children.map(data => data),
      });

      if (onChange !== undefined) {
        onChange(e.target.dataset.value);
      }

      if (onOptionClick !== undefined) {
        onOptionClick(e);
      }
    };

    return listener;
  }

  handleKeyDown = (e) => {
    const { children, onChange, disableTyping } = this.props;
    const { cursor, filterValue } = this.state;

    if (disableTyping) {
      e.preventDefault();
    }

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
        selectedValue: document.querySelector('.active').innerText,
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

    // Checking if children data is exist or not.
    if (children.length !== 0) {
      this.setState({
        childrenLength: children.length,
        filterValue: children.map(data => data),
      });
    } else {
      this.setState({
        notMatch: true,
      });
    }

    if (value !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
          selectedValue: value,
          defaultValue: value,
        });
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.children.length !== prevState.childrenLength) {
      return {
        filterValue: nextProps.children.map(data => data),
        childrenLength: nextProps.children.length,
        selectedValue: nextProps.value,
        defaultValue: nextProps.value,
      };
    }

    if (prevState.filterValue.length === 0) {
      return { notMatch: true };
    }

    if (nextProps.value !== undefined && nextProps.value !== prevState.defaultValue) {
      return {
        selectedValue: nextProps.value,
        defaultValue: nextProps.value,
      };
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
      onChange,
      noOptionResult,
      children,
      small,
      disableTyping,
      removeFloatingLabel,
      removeDropIcon,
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
      <SelectContainer id="aries-select" className={className}>
        <SelectWrapper id="select-inputwrapper" isFocus={isFocus}>
          <SelectInput
            type="text"
            placeholder={removeFloatingLabel && label}
            role="combobox"
            aria-expanded={isFocus}
            aria-autocomplete="list"
            status={status}
            disabled={disabled}
            onFocus={this.handleFocus(onFocus)}
            onBlur={this.handleFocusOut(onBlur)}
            onChange={this.handleChange(onChange)}
            onKeyDown={this.handleKeyDown}
            floating={floating}
            value={selectedValue}
            small={small}
            disableTyping={disableTyping}
            {...defaultProps}
          />
          <If condition={!removeFloatingLabel}>
            <SelectLabel
              floating={floating}
              status={status}
              small={small}
            >
              {label}
            </SelectLabel>
          </If>
          <If condition={!removeDropIcon}>
            <div
              className="select-icon"
              aria-label="show options"
            >
              <Icon name="arrow-down" color="#777777" />
            </div>
          </If>
        </SelectWrapper>
        <SelectListWrapper
          id="select-listbox"
          role="listbox"
          aria-hidden={!isFocus && true}
          open={isFocus}
          small={small}
        >
          {filterValue.map((data, index) => (
            <SelectItem
              className={cursor === index ? 'active' : null}
              key={data.props.value}
              role="option"
              data-id={index}
              data-value={data.props.value}
              onClick={this.handleClick(data.props.onOptionClick)}
              onMouseEnter={this.handleMouseEnter}
              tabIndex="0"
            >
              {data.props.children}
            </SelectItem>
          ))}
          {notMatch && (
            <SelectItem
              disabled
              role="option"
              aria-hidden={false}
              aria-disabled="true"
            >
              {noOptionResult}
            </SelectItem>
          )}
        </SelectListWrapper>
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
  small: boolean,
  disableTyping: boolean,
  removeFloatingLabel: boolean,
  removeDropIcon: boolean,
  defaultValue: string,
}

type State = {
  floating: boolean,
  isFocus: boolean,
  selectedValue: string,
  filterValue: array,
  cursor: number,
  notMatch: boolean,
  childrenLength: number,
};

export default Select;
