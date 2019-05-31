import * as React from 'react';
import classNames from 'classnames';
import { RadioButton } from '../RadioButton';
import { SwitchContainer, SwitchItemWrapper } from '../../Style/Input/SwitchStyle';

class Switch extends React.Component<Props, State> {
  state = {
    clickID: '',
    initialValue: '',
  };

  handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const radioButton = e.target as HTMLInputElement;
    this.setState({
      clickID: radioButton.id,
      initialValue: radioButton.value,
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
        className={classNames('aries-switch', className)}
        role="switch"
        aria-checked="true"
        {...defaultProps}
        ID={clickID}
        defaultValue={initialValue}
        items={value}
      >
        <SwitchItemWrapper className="switch-left">
          <RadioButton
            className={value[0]}
            aria-label={label[0]}
            label={label[0]}
            name={name[0]}
            value={value[0]}
            theme="white"
            checked={initialValue === `${value[0]}` && true}
            onClick={this.handleClick}
          />
        </SwitchItemWrapper>
        <SwitchItemWrapper className="switch-right">
          <RadioButton
            className={value[1]}
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

interface Props extends Omit<React.ComponentPropsWithoutRef<typeof SwitchContainer>, 'ID' | 'items'> {
  label: string[];
  name: string[];
  value: string[];
}

interface State {
  clickID: string;
  initialValue: string;
}

export default Switch;
