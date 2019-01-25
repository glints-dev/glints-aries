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
      selectedValue: '',
      filterValue: [],
      cursor: 0,
      childrenLength: 0,
      notMatch: false,
      defaultValue: '',
    };
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

  handleFocusChange = (onBlur) => {
    const listener = (e) => {
      this.setState({
        floating: e.target.value.length > 0,
      });

      if (onBlur !== undefined) {
        return onBlur();
      }
    };

    return listener;
  }

  handleClick = () => {
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

  handleMouseEnter = (e) => {
    this.setState({
      cursor: Number(e.target.dataset.id),
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.filterValue.length === 0) {
      return { notMatch: true };
    }

    return { notMatch: false };
  }

  componentDidMount() {
    const { value, children } = this.props;

    // Checking if children data is exist or not.
    if (children.length !== 0) {
      this.setState({
        childrenLength: children.length,
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

  render() {
    const {
      children,
      label,
      value,
      status,
      disabled,
      className,
      onBlur,
      onChange,
      small,
      removeFloatingLabel,
      ...defaultProps
    } = this.props;

    const {
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
            onBlur={this.handleFocusChange(onBlur)}
            onChange={this.handleChange(onChange)}
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
          small={small}
        >
          {filterValue.map((data, index) => (
            <AutoCompleteItem
              className={cursor === index ? 'active' : null}
              key={data.props.value}
              role="option"
              data-id={index}
              data-value={data.props.value}
              onClick={this.handleClick}
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
  floating: boolean,
  cursor: number,
  childrenLength: number,
  notMatch: boolean,
  defaultValue: string,
};

export default AutoComplete;
