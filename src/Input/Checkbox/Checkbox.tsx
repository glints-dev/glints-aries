import * as React from 'react';
import classNames from 'classnames';
import { CheckboxContainer } from '../../Style/Input/CheckboxStyle';

class Checkbox extends React.PureComponent<Props, State> {
  state = {
    checked: false,
  }

  handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { onClick } = this.props;
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });

    if (onClick !== undefined) {
      return onClick(e);
    }
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
        className={classNames('aries-checkbox', className)}
        role="checkbox"
        aria-labelledby={id}
        aria-checked={checked}
        tabIndex={0}
      >
        <input
          type="checkbox"
          id={id}
          onClick={this.handleClick}
          {...defaultProps}
        />
        <label
          htmlFor={id}
          tabIndex={-1}
        >
          {value}
        </label>
      </CheckboxContainer>
    );
  }
}

interface Props extends React.HTMLProps<HTMLInputElement> {
  onClick?(e: React.MouseEvent<HTMLInputElement, MouseEvent>): void;
}

interface State {
  checked: boolean;
}

export default Checkbox;
