import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    cursor: 0,
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
    const { children } = this.props;

    this.setState({
      selectedValue: e.target.value,
      filterValue: children.filter(data => data.props.children.toLowerCase().includes(e.target.value.toLowerCase())),
    });
  }

  handleClick = (e) => {
    const { children, onChange } = this.props;

    this.setState({
      selectedValue: e.currentTarget.innerText,
      filterValue: children.map(data => data),
    });

    if (onChange !== undefined) {
      onChange(e.currentTarget.innerText);
    }
  }

  handleKeyDown = (e) => {
    const { children } = this.props;
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
    }
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

  render() {
    const {
      label,
      value,
      status,
      disabled,
      className,
      onFocus,
      onBlur,
      children,
      ...defaultProps
    } = this.props;

    const {
      floating,
      isFocus,
      selectedValue,
      filterValue,
      cursor,
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
            onKeyDown={this.handleKeyDown}
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
                <Item className={cursor === index ? 'active' : null} key={index} onClick={this.handleClick}>
                  {data.props.children}
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
  children: React$Node,
}

type State = {
  floating: boolean,
  isFocus: boolean,
  selectedValue: string,
  filterValue: array,
  cursor: number,
};

export default Select;
