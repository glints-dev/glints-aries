/* @flow */

import React, { PureComponent } from 'react';

import { isFunction } from 'lodash';
import {
  TextareaContainer,
  TextareaInput,
  TextareaLabel,
} from '../../Style/Input/TextareaStyle';

class Textarea extends PureComponent <Props, State> {
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

  handleChange = e => {
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

    if (isFunction(this.props.onChange)) {
      return this.props.onChange(e);
    }
  };

  componentDidMount() {
    const textarea = document.getElementById('textarea-input');

    if (textarea.value.length > 0) {
      this.setState({
        floating: true,
      });
    }

    this.setState({
      textareaMaxHeight: ~~((textarea.offsetHeight * 3.7) + (23 * 8) + 1),
    });
  }

  componentDidUpdate() {
    const { value } = this.props;
    const { floating } = this.state;

    if (value && value !== '' && !floating) {
      this.setState({ floating: true });
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
      onChange,
      removeFloatingLabel,
      ...defaultProps
    } = this.props;

    const {
      floating,
      rows,
      textareaMaxHeight,
    } = this.state;

    return (
      <TextareaContainer id="aries-textarea" className={className}>
        <TextareaInput
          id="textarea-input"
          placeholder={removeFloatingLabel && label}
          rows={rows}
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          onChange={this.handleChange}
          floating={floating}
          value={value}
          aria-label={label}
          {...defaultProps}
          style={{
            maxHeight: `${textareaMaxHeight}px`,
          }}
        />
        <If condition={!removeFloatingLabel}>
          <TextareaLabel floating={floating} status={status}>
            {label}
          </TextareaLabel>
        </If>
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
  removeFloatingLabel: boolean,
}

type State = {
  floating: boolean,
  rows: number,
  minRows: number,
  maxRows: number,
  textareaMaxHeight: number,
};

export default Textarea;
