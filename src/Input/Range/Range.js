/* @flow */

import React, { Component, Fragment } from 'react';

import { RangeContainer } from '../../Style/Input/RangeStyle';

class Range extends Component <Props, State> {
  state = {
    minVal: 0,
    maxVal: 100,
    val: 0,
  }

  handleChange = (onChange) => {
    const listener = (e) => {
      this.setState({ val: e.target.value });

      if (onChange !== undefined) {
        onChange(e.target.value);
      }
    };

    return listener;
  }

  componentDidMount() {
    const { min, max, value } = this.props;

    if (min !== undefined && min >= 0) {
      this.setState({ minVal: min });
    }
    if (max !== undefined && max > 0) {
      this.setState({ maxVal: max });
    }
    if (value !== undefined && value > 0) {
      this.setState({ val: value });
    }
  }

  render() {
    const {
      className,
      onChange,
      block,
      ...defaultProps
    } = this.props;

    const {
      minVal,
      maxVal,
      val,
    } = this.state;

    return (
      <Fragment>
        <RangeContainer
          id="aries-range"
          type="range"
          className={className}
          min={minVal}
          max={maxVal}
          value={val}
          onChange={this.handleChange(onChange)}
          block={block}
          {...defaultProps}
        />
      </Fragment>
    );
  }
}

type Props = {
  className: string,
  min: number,
  max: number,
  value: number,
  onChange: Function,
  block: boolean,
}

type State = {
  minVal: number,
  maxVal: number,
  val: number,
}

export default Range;
