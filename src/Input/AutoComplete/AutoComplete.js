import React, { Component } from 'react';

import AutoCompleteItem from './AutoCompleteItem';

import {
  AutoCompleteContainer,
  AutoCompleteWrapper,
  AutoCompleteLabel,
  AutoCompleteInput,
  AutoCompleteListWrapper,
} from '../../Style/Input/AutoCompleteStyle';

class AutoComplete extends Component <Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      floating: false,
      isOpen: false,
      selectedValue: '',
      filterValue: [],
      cursor: 0,
      defaultValue: '',
    };
  }

  handleFocus = (onFocus) => {
    const listener = (e) => {
      const { children } = this.props;

      if (e.target.value !== '') {
        this.setState({
          filterValue: children.filter(data => data.props.children.toLowerCase().includes(e.target.value.toLowerCase())),
        });
      }

      if (onFocus !== undefined) {
        return onFocus(e);
      }
    };

    return listener;
  }

  handleFocusOut = (onBlur) => {
    const listener = (e) => {
      this.setState({
        floating: e.target.value.length > 0,
        filterValue: [],
      });

      if (onBlur !== undefined) {
        return onBlur();
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
      const { onChange } = this.props;

      this.setState({
        selectedValue: e.currentTarget.innerText,
        filterValue: [],
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
    const { onChange } = this.props;
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
        selectedValue: document.querySelector('.active').innerText,
        filterValue: [],
        floating: true,
      });

      if (onChange !== undefined) {
        const itemValue = document.querySelector('.active').dataset.value;
        onChange(itemValue);
      }
    } else if (e.keyCode === 27) {
      e.target.blur();
      this.setState({ isOpen: false });
    }
  }

  handleMouseEnter = (e) => {
    this.setState({
      cursor: Number(e.target.dataset.id),
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.selectedValue === '' || prevState.filterValue.length === 0) {
      return {
        isOpen: false,
        filterValue: [],
      };
    }

    if (prevState.filterValue.length !== 0) {
      return { isOpen: true };
    }

    if (nextProps.value && nextProps.value !== prevState.defaultValue) {
      return {
        selectedValue: nextProps.value,
        defaultValue: nextProps.value,
      };
    }

    return null;
  }

  // componentDidUpdate(prevProps, nextState) {
  //   console.log(prevProps);
  //   console.log(nextState);
  // }

  componentDidMount() {
    const { value } = this.props;

    if (value !== undefined) {
      if (value !== '' || value !== null) {
        this.setState({
          floating: true,
          selectedValue: value,
          defaultValue: value,
        });
      }
    }
  }

  render() {
    const {
      children,
      label,
      value,
      status,
      disabled,
      className,
      onFocus,
      onBlur,
      onChange,
      small,
      removeFloatingLabel,
      ...defaultProps
    } = this.props;

    const {
      isOpen,
      floating,
      cursor,
      selectedValue,
      filterValue,
    } = this.state;

    return (
      <AutoCompleteContainer id="aries-autocomplete" className={className}>
        <AutoCompleteWrapper>
          <AutoCompleteInput
            type="text"
            placeholder={removeFloatingLabel && label}
            status={status}
            disabled={disabled}
            onFocus={this.handleFocus(onFocus)}
            onBlur={this.handleFocusOut(onBlur)}
            onChange={this.handleChange(onChange)}
            onKeyDown={this.handleKeyDown}
            floating={floating}
            value={selectedValue}
            aria-label={label}
            small={small}
            {...defaultProps}
          />
          <If condition={!removeFloatingLabel}>
            <AutoCompleteLabel
              floating={floating}
              status={status}
              small={small}
            >
              {label}
            </AutoCompleteLabel>
          </If>
        </AutoCompleteWrapper>
        <AutoCompleteListWrapper
          id="select-listbox"
          role="listbox"
          open={isOpen}
          small={small}
        >
          {filterValue.map((data, index) => (
            <AutoCompleteItem
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
            </AutoCompleteItem>
          ))}
        </AutoCompleteListWrapper>
      </AutoCompleteContainer>
    );
  }
}

type Props = {
  children: React$Node,
  label: string,
  status: string,
  disabled: boolean,
  className: string,
  small: boolean,
  removeFloatingLabel: boolean,
}

type State = {
  isOpen: boolean,
  floating: boolean,
  cursor: number,
  defaultValue: string,
};

export default AutoComplete;
