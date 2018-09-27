/* @flow */

import React, { Component } from 'react';
import {
  Container,
  TextareaComponent,
  TextareaLabel,
} from '../../Style/TextareaStyle';

class Textarea extends Component <Props, State> {
  state = {
    floating: false,
    textareaHeight: 0,
    textareaMaxHeight: 0,
    textareaMinHeight: 0,
    scrollHeight: 0,
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

  handleChange = (onChange) => {
    const { scrollHeight, textareaHeight, textareaMaxHeight } = this.state;

    const listener = (e) => {
      if (scrollHeight === 0) {
        this.setState({ scrollHeight: e.target.scrollHeight });
      } else if (scrollHeight !== e.target.scrollHeight && textareaHeight !== textareaMaxHeight) {
        this.setState({
          scrollHeight: e.target.scrollHeight,
          textareaHeight: textareaHeight + 18,
        });
      }

      if (onChange !== undefined) {
        return onChange(e);
      }
    };

    return listener;
  }

  componentDidMount() {
    const { value } = this.props;
    const height = document.getElementsByTagName('textarea')[0];
    if (value !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
        });
      }
    }

    this.setState({
      textareaHeight: height.offsetHeight * 3,
      textareaMaxHeight: (height.offsetHeight * 3) + (18 * 8),
      textareaMinHeight: height.offsetHeight * 3,
    });
  }

  render() {
    const {
      label,
      value,
      status,
      disabled,
      className,
      onBlur,
      onChange,
      ...defaultProps
    } = this.props;

    const {
      floating,
      textareaHeight,
      textareaMaxHeight,
      textareaMinHeight,
    } = this.state;

    return (
      <Container className={className}>
        <TextareaComponent
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          onChange={this.handleChange(onChange)}
          floating={floating}
          value={value}
          {...defaultProps}
          style={{
            height: `${textareaHeight}px`,
            maxHeight: `${textareaMaxHeight}px`,
            minHeight: `${textareaMinHeight}px`,
          }}
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
  value: string,
}

type State = {
  floating: boolean,
  textareaHeight: number,
  textareaMaxHeight: number,
  textareaMinHeight: number,
  scrollHeight: number,
};

export default Textarea;
