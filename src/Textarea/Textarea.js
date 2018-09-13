/* @flow */

import React, { Component } from 'react';
import {
  Container,
  TextareaComponent,
  TextareaLabel,
} from '../Style/TextareaStyle';

class Textarea extends Component <Props, State> {
  state = {
    floating: false,
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
      onBlur,
      ...defaultProps
    } = this.props;

    const { floating } = this.state;

    return (
      <Container className={className}>
        <TextareaComponent
          rows="6"
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          floating={floating}
          value={value}
          {...defaultProps}
        />
        <TextareaLabel floating={floating} status={status}>
          {label}
        </TextareaLabel>
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
};

export default Textarea;
