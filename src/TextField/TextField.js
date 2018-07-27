import React, { Component } from 'react';
import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
  Icon,
} from '../Style/TextFieldStyle';

class TextField extends Component <Props, State> {
  state = {
    floating: false,
  }

  handleFocusChange = (e) => {
    this.setState({
      floating: e.target.value.length > 0,
    });
  }

  render() {
    const {
      label,
      status,
      disabled,
      className,
    } = this.props;

    const { floating } = this.state;

    return (
      <TextFieldContainer className={className}>
        <TextFieldInput
          type="text"
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange}
          floating={floating}
        />
        <TextFieldLabel floating={floating}>
          {label}
        </TextFieldLabel>
        <Icon status={status} size="14px" />
      </TextFieldContainer>
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
};

export default TextField;
