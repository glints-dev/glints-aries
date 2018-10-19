/* @flow */

import React, { Component } from 'react';
import { CheckboxContainer } from '../../Style/Input/CheckboxStyle';

class Checkbox extends Component <Props, State> {
  state = {
    checked: false,
  }

  handleClick = (onClick) => {
    const listener = (e) => {
      const { checked } = this.state;
      this.setState({
        checked: !checked,
      });

      if (onClick !== undefined) {
        return onClick(e);
      }
    };

    return listener;
  }

  render() {
    const {
      id,
      value,
      onClick,
      className,
      ...defaultProps
    } = this.props;

    const { checked } = this.state;

    return (
      <CheckboxContainer
        className={className}
        role="checkbox"
        aria-labelledby={id}
        aria-checked={checked}
        tabIndex="0"
      >
        <input
          type="checkbox"
          id={id}
          value={value}
          onClick={this.handleClick(onClick)}
          {...defaultProps}
        />
        <label
          htmlFor={id}
          tabIndex="-1"
        >
          {value}
        </label>
      </CheckboxContainer>
    );
  }
}

type Props = {
  id: string,
  value: string,
  className: string,
  onClick: Function,
}

type State = {
  checked: boolean,
}

export default Checkbox;
