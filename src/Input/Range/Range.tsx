import * as React from 'react';

import classNames from 'classnames';

import { RangeContainer } from '../../Style/Input/RangeStyle';

class Range extends React.Component<Props, State> {
  state = {
    minVal: 0,
    maxVal: 100,
    val: 0,
  }

  handleChange = (onChange: (newValue: string) => void) => {
    const listener = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value, 10);
      this.setState({ val: newValue });

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
      <React.Fragment>
        <RangeContainer
          type="range"
          className={classNames('aries-range', className)}
          min={minVal}
          max={maxVal}
          value={val}
          onChange={this.handleChange(onChange)}
          block={block}
          {...defaultProps}
        />
      </React.Fragment>
    );
  }
}

interface Props extends React.ComponentPropsWithoutRef<typeof RangeContainer> {
  min: number;
  max: number;
  value?: number;
  onChange?(newValue: string | React.ChangeEvent<HTMLInputElement>): void;
}

interface State {
  minVal: number;
  maxVal: number;
  val: number;
}

export default Range;
