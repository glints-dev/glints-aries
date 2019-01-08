/* @flow */

import React, { Component } from 'react';
import { RadioButton } from '../RadioButton';
import { SwitchContainer, SwitchItemWrapper } from '../../Style/Input/SwitchStyle';

class Switch extends Component <Props, State> {
  state = {
    clickID: '',
    initialValue: '',
  };

  handleClick = (e) => {
    this.setState({
      clickID: e.target.id,
      initialValue: e.target.value,
    });
  }

  componentDidMount() {
    const { value, defaultValue } = this.props;
    this.setState({
      clickID: value[0],
      initialValue: defaultValue,
    });
  }

  render() {
    const {
      label,
      name,
      value,
      className,
      ...defaultProps
    } = this.props;

    const { clickID, initialValue } = this.state;

    return (
      <SwitchContainer
        id="aries-switch"
        className={className}
        role="switch"
        aria-checked="true"
        {...defaultProps}
        ID={clickID}
        defaultValue={initialValue}
        items={value}
      >
        <SwitchItemWrapper id="switch-left">
          <RadioButton
            id={value[0]}
            aria-label={label[0]}
            label={label[0]}
            name={name[0]}
            value={value[0]}
            theme="white"
            checked={initialValue === `${value[0]}` && true}
            onClick={this.handleClick}
          />
        </SwitchItemWrapper>
        <SwitchItemWrapper id="switch-right">
          <RadioButton
            id={value[1]}
            aria-label={label[1]}
            label={label[1]}
            name={name[1]}
            value={value[1]}
            theme="white"
            checked={initialValue === `${value[1]}` && true}
            onClick={this.handleClick}
          />
        </SwitchItemWrapper>
      </SwitchContainer>
    );
  }
}

type Props = {
  label: string,
  name: string,
  value: string,
  defaultValue: string,
  className: string,
}

type State = {
  clickID: string,
  initialValue: string,
}

export default Switch;
