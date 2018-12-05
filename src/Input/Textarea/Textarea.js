/* @flow */

import React, { Component } from 'react';
import {
  TextareaContainer,
  TextareaInput,
  TextareaLabel,
} from '../../Style/Input/TextareaStyle';

class Textarea extends Component <Props, State> {
  state = {
    floating: false,
    rows: 4,
    minRows: 4,
    maxRows: 12,
    textareaMaxHeight: 0,
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
    const listener = (e) => {
      const { minRows, maxRows } = this.state;

      const previousRows = e.target.rows;
      e.target.rows = minRows;

      const currentRows = ~~(e.target.scrollHeight / 30);

      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }

      this.setState({
        rows: currentRows < maxRows ? currentRows : maxRows,
      });

      if (onChange !== undefined) {
        return onChange(e);
      }
    };

    return listener;
  }

  componentDidMount() {
    const { value } = this.props;
    const textarea = document.getElementsByTagName('textarea')[0];

    if (value !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
        });
      }
    }
    this.setState({
      textareaMaxHeight: ~~((textarea.offsetHeight * 3.7) + (23 * 8) + 1),
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
      rows,
      textareaMaxHeight,
    } = this.state;

    return (
      <TextareaContainer className={className}>
        <TextareaInput
          rows={rows}
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          onChange={this.handleChange(onChange)}
          floating={floating}
          value={value}
          aria-label={label}
          {...defaultProps}
          style={{
            maxHeight: `${textareaMaxHeight}px`,
          }}
        />
        <TextareaLabel floating={floating} status={status}>
          {label}
        </TextareaLabel>
      </TextareaContainer>
    );
  }
}

type Props = {
  label: string,
  status: string,
  disabled: boolean,
  className: string,
  value: string,
  onBlur: Function,
  onChange: Function,
}

type State = {
  floating: boolean,
  rows: number,
  minRows: number,
  maxRows: number,
  textareaMaxHeight: number,
};

export default Textarea;
