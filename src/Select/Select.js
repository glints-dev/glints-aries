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
  }

  handleFocusChange = (onBlur) => {
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

  componentDidMount() {
    const { value } = this.props;
    if (value !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
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

    const { floating, isFocus } = this.state;

    return (
      <Container className={className}>
        <SelectWrapper>
          <Input
            type="text"
            status={status}
            disabled={disabled}
            onFocus={this.handleFocus(onFocus)}
            onBlur={this.handleFocusChange(onBlur)}
            floating={floating}
            value={value}
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
              { children }
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
};

export default Select;
