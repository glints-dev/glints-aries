import React, { Component } from 'react';
import Icon from '../Icon';
import Item from './SelectItems';
import {
  Container,
  SelectWrapper,
  Input,
  Label,
  ItemWrapper,
} from '../Style/SelectStyle';

class Select extends Component <Props, State> {
  state = {
    floating: false,
    isFocus: false,
    selectedValue: '',
    filterValue: [],
  }

  handleFocusOut = (onBlur) => {
    const listener = (e) => {
      this.setState({
        floating: e.target.value.length > 0,
        isFocus: false,
      });

      if (onBlur !== undefined) {
        return onBlur();
      }
    };

    return listener;
  }

  handleFocus = (onFocus) => {
    const listener = () => {
      this.setState({
        isFocus: true,
      });

      if (onFocus !== undefined) {
        return onFocus();
      }
    };

    return listener;
  }

  handleChange = (e) => {
    const { options } = this.props;

    this.setState({
      selectedValue: e.target.value,
      filterValue: options.filter(data => data.toLowerCase().includes(e.target.value.toLowerCase())),
    });
  }

  handleClick = (e) => {
    const { onChange } = this.props;

    this.setState({
      selectedValue: e.currentTarget.innerText,
      floating: true,
      isFocus: false,
    });

    if (onChange !== undefined) {
      onChange(e.currentTarget.innerText);
    }
  }

  componentDidMount() {
    const { value, options } = this.props;

    this.setState({
      filterValue: options.map(data => data),
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

  render() {
    const {
      label,
      options,
      value,
      status,
      disabled,
      className,
      onFocus,
      onBlur,
      ...defaultProps
    } = this.props;

    const {
      floating,
      isFocus,
      selectedValue,
      filterValue,
    } = this.state;

    return (
      <Container className={className}>
        <SelectWrapper>
          <Input
            type="text"
            status={status}
            disabled={disabled}
            onFocus={this.handleFocus(onFocus)}
            onBlur={this.handleFocusOut(onBlur)}
            onChange={this.handleChange}
            floating={floating}
            value={selectedValue}
            {...defaultProps}
          />
          <Label floating={floating} status={status}>
            {label}
          </Label>
          <div className="icon">
            <Icon name="arrow-down" color="#777" size="14" />
          </div>
        </SelectWrapper>
        {isFocus && (
          <ItemWrapper>
            <ul>
              {filterValue.map((data, index) => (
                <Item key={index} onClick={this.handleClick}>
                  {data}
                </Item>
              ))}
            </ul>
          </ItemWrapper>
        )}
      </Container>
    );
  }
}

type Props = {
  label: string,
  status: string,
  disabled: boolean,
  className: string,
}

type State = {
  floating: boolean,
  isFocus: boolean,
  selectedValue: string,
  filterValue: array,
};

export default Select;
