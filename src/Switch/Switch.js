/* @flow */

import React, { Component } from 'react';
import { RadioButton } from '../RadioButton';
import { SwitchContainer } from '../Style/SwitchStyle';

class Switch extends Component <Props, State> {
  state = {
    clickID: 'item-1',
  };

  handleClick = (e) => {
    this.setState({ clickID: e.target.id });
  }

  render() {
    const {
      label,
      name,
      value,
      className,
      ...defaultProps
    } = this.props;

    const { clickID } = this.state;

    return (
      <SwitchContainer className={className} {...defaultProps} ID={clickID}>
        <RadioButton
          id="item-1"
          label={label[0]}
          name={name[0]}
          value={value[0]}
          theme="white"
          defaultChecked
          onClick={this.handleClick}
        />
        <RadioButton
          id="item-2"
          label={label[1]}
          name={name[1]}
          value={value[1]}
          theme="white"
          onClick={this.handleClick}
        />
      </SwitchContainer>
    );
  }
}

type Props = {
  label: string,
  name: string,
  value: string,
  className: string,
}

type State = {
  clickID: string,
}

export default Switch;
