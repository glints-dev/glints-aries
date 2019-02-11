import React, { Component } from 'react';

import Icon from '../../General/Icon';

import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
} from '../../Style/Input/TextFieldStyle';

class TextField extends Component <Props, State> {
  constructor(props) {
    super(props);
    const { type } = this.props;

    this.state = {
      floating: false,
      inputType: type,
    };
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

  handleShowPassword = () => {
    const { inputType } = this.state;

    this.setState({
      inputType: inputType === 'password' ? 'text' : 'password',
    });
  }

  componentDidMount() {
    const { value, defaultValue } = this.props;
    if (value !== undefined || defaultValue !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
        });
      }
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.value) {
      return {
        floating: true,
      };
    }
    return {
      floating: false,
    };
  }

  render() {
    const {
      type,
      label,
      value,
      status,
      disabled,
      className,
      onBlur,
      small,
      removeFloatingLabel,
      ...defaultProps
    } = this.props;

    const { floating, inputType } = this.state;

    return (
      <TextFieldContainer id="aries-textfield" className={className}>
        <TextFieldInput
          type={inputType}
          placeholder={removeFloatingLabel && label}
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          floating={floating}
          value={value}
          aria-label={label}
          small={small}
          {...defaultProps}
        />
        <If condition={!removeFloatingLabel}>
          <TextFieldLabel
            floating={floating}
            status={status}
            small={small}
          >
            {label}
          </TextFieldLabel>
        </If>
        {type === 'password'
          && (
            <div className="see-password" onClick={this.handleShowPassword}>
              <Icon
                name={inputType === 'password' ? 'eye' : 'eye-slashed'}
                color={inputType === 'password' ? 'black' : '#777777'}
                size="18"
              />
            </div>
          )
        }
      </TextFieldContainer>
    );
  }
}

type Props = {
  type: string,
  label: string,
  status: string,
  disabled: boolean,
  className: string,
  small: boolean,
  removeFloatingLabel: boolean,
}

type State = {
  floating: boolean,
};

export default TextField;
