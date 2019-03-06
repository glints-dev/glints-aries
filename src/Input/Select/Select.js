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
    childrenLength: 0,
    defaultValue: '',
    notMatch: false, // for checking a string included in array
    notExist: false, // for checking if a whole string match with string in array
  }

  handleReset() {
    const { selectedValue, filterValue } = this.state;

    filterValue.map((data) => {
      if (selectedValue.toLowerCase() !== data.props.children.toLowerCase()) {
        this.setState({
          notExist: true,
        });
      } else {
        this.setState({
          selectedValue: data.props.children,
          notExist: false,
          floating: true,
        });
      }
    });
  }

  handleFocusOut = (onBlur) => {
    const listener = (e) => {
      const { children } = this.props;
      const { notExist } = this.state;

      if (notExist) {
        this.setState({
          selectedValue: '',
          filterValue: children.map(data => data),
          floating: false,
        });
      }

      this.setState({
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
      const { notMatch } = this.state;

      this.setState({
        selectedValue: e.target.value,
        filterValue: children.filter(data => data.props.children.toLowerCase().includes(e.target.value.toLowerCase())),
        cursor: 0,
      });

      clearTimeout(this.inputTimer);
      this.inputTimer = setTimeout(() => {
        this.handleReset();

        if (notMatch) {
          this.setState({ notExist: true });
        }
      }, 500);

      if (onChange !== undefined) {
        return onChange(e);
      }
    };

    return listener;
  }

  handleClick = (onOptionClick) => {
    const listener = (e) => {
      const { children, onChange } = this.props;

      this.setState({
        selectedValue: e.currentTarget.children[0].innerText,
        filterValue: children.map(data => data),
        notExist: false,
        floating: true,
      });

      if (onChange !== undefined) {
        const itemValue = document.querySelector('.active').dataset.value;
        onChange(itemValue);
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
        selectedValue: document.querySelector('.active').children[0].innerText,
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

    if (value !== undefined && value !== '' && value !== null) {
      this.setState({
        floating: true,
        selectedValue: value,
        defaultValue: value,
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.children.length !== prevState.childrenLength) {
      if (nextProps.value) {
        return {
          selectedValue: nextProps.value,
          defaultValue: nextProps.value,
          floating: true,
          filterValue: nextProps.children.map(data => data),
        };
      }

      return {
        filterValue: nextProps.children.map(data => data),
        childrenLength: nextProps.children.length,
      };
    }

    if (prevState.filterValue.length === 0) {
      return { notMatch: true };
    }

    if (nextProps.value && nextProps.value !== prevState.defaultValue) {
      return {
        selectedValue: nextProps.value,
        defaultValue: nextProps.value,
        floating: true,
      };
    }

    if (nextProps.value === '') {
      return {
        selectedValue: nextProps.value,
        defaultValue: nextProps.value,
        floating: false,
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
          <Choose>
            <When condition={filterValue.length !== 0}>
              <For each="data" of={filterValue}>
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
                  <span id="select-value">{data.props.children}</span>
                  <span id="select-additionalinfo">{data.props.additionalInfo}</span>
                </SelectItem>
              </For>
            </When>
            <Otherwise>
              <SelectItem
                disabled
                role="option"
                aria-hidden={false}
                aria-disabled="true"
              >
                {noOptionResult}
              </SelectItem>
            </Otherwise>
          </Choose>
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
  notExist: boolean,
};

export default Select;
