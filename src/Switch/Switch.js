/* @flow */

import React, { Component } from 'react';
import { RadioButton } from '../RadioButton';
import { SwitchContainer } from '../Style/SwitchStyle';

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
        className={className}
        {...defaultProps}
        ID={clickID}
        defaultValue={initialValue}
        items={value}
      >
        <RadioButton
          id={value[0]}
          label={label[0]}
          name={name[0]}
          value={value[0]}
          theme="white"
          checked={initialValue === `${value[0]}` && true}
          onClick={this.handleClick}
        />
        <RadioButton
          id={value[1]}
          label={label[1]}
          name={name[1]}
          value={value[1]}
          theme="white"
          checked={initialValue === `${value[1]}` && true}
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
  defaultValue: string,
  className: string,
}

type State = {
  clickID: string,
  initialValue: string,
}

export default Switch;
