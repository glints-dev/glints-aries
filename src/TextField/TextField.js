import React, { Component } from 'react';
import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
  Icon
} from './../../src/Style/TextFieldStyle';

class TextField extends Component {
  state = {
    floating: false
  }

  handleFocusChange = e => {
    this.setState({
      floating: e.target.value.length > 0 ? true : false,
    })
  }

  render() {
    const { 
      label, 
      inputWidth, 
      status, 
      disabled, 
      className 
    } = this.props;

    return(
      <TextFieldContainer size={inputWidth} className={className}>
        <TextFieldInput 
          type="text"
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange}
          floating={this.state.floating} 
        />
        <TextFieldLabel floating={this.state.floating}>{label}</TextFieldLabel>
        <Icon status={status} size="14px" />
      </TextFieldContainer>
    );
  }
}

type Props = {
  label: string,
  inputWidth: string,
  status: string,
  disabled: boolean,
  className: string,
}

export default TextField;