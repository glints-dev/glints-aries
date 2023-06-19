import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PasswordInput, PasswordInputProps } from './PasswordInput';
import { useMimicPassword } from './PasswordInputHook';

(PasswordInput as React.FunctionComponent<PasswordInputProps>).displayName =
  'Password Input';

export default {
  title: '@next/PasswordInput',
  component: PasswordInput,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

class ReactBetterPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unmasked: props.value,
      value: Array(props.value.length + 1).join(props.mask),
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { mask } = this.props;

    if (nextProps.value !== this.state.unmasked) {
      this.setState({
        unmasked: nextProps.value,
        value: Array(nextProps.value.length + 1).join(nextProps.mask),
      });
    }

    if (nextProps.mask && nextProps.mask !== mask) {
      this.setState({
        value: Array(this.state.value.length + 1).join(nextProps.mask),
      });
    }
  }

  onChange(ev) {
    const { timeout, onChange, mask } = this.props;

    // Reset the previous showing character
    clearTimeout(this.timer);

    // Save the current cursor position to restore after masking
    const cursorPos = this.input.selectionEnd;

    const value = ev.target.value;
    const { unmasked } = this.state;

    // This is going to be the new original value (unmasked)
    const newValue = value.replace(
      new RegExp(
        `${cursorPos ? `(^\\${mask}{1,${cursorPos}})|` : ''}(\\${mask}+)`,
        'g'
      ),
      (match, part, offset, string) => {
        if (!offset && cursorPos) return unmasked.substr(0, match.length);
        else return unmasked.substr(-match.length);
      }
    );

    // Mask the value leaving the last character entered intact
    const maskedValue = value
      .split('')
      .map((c, index) => (index === cursorPos - 1 ? c : mask))
      .join('');

    this.setState({ value: maskedValue, unmasked: newValue }, () => {
      if (onChange) onChange(newValue);

      // Restore cursor position
      this.input.selectionStart = cursorPos;
      this.input.selectionEnd = cursorPos;

      // Set a timeout to replace the last showing character
      this.timer = setTimeout(() => {
        // Save user's current selection
        const start = this.input.selectionStart;
        const end = this.input.selectionEnd;

        this.setState({ value: Array(value.length + 1).join(mask) }, () => {
          // Restore cursor position once again
          this.input.selectionStart = start;
          this.input.selectionEnd = end;
        });
      }, timeout);
    });
  }

  render() {
    const { value, unmasked } = this.state;
    const { show } = this.props;

    const inputProps = _.omit(
      this.props,
      _.keys(ReactBetterPassword.propTypes)
    );

    return (
      <input
        {...inputProps}
        ref={input => {
          this.input = input;
        }}
        type="text"
        value={show ? unmasked : value}
        onChange={this.onChange}
      />
    );
  }
}

const Template: Story<PasswordInputProps> = args => {
  const handleChange = React.useCallback((value, event) => {
    console.log(value);
  }, []);

  const [value, presentation, onChange] = useMimicPassword({
    // All these parameters are optional
    mask: '•',
    delay: 1000,
    mode: 'delayed',
    handleChange,
  });

  // return (
  //   <>
  //     <ReactBetterPassword value="" timeout={1000} mask="X" show={false} />
  //   </>
  // );

  return (
    <>
      {value}
      <br />
      <input value={presentation} onChange={onChange} />;
    </>
  );

  // const [password, setPassword] = useState('');

  // return (
  //   <>
  //     <div>{password}</div>
  //     <PasswordInput {...args} value={password} onChange={setPassword} />;
  //   </>
  // );
};

export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: 'Enter Password',
  disabled: false,
  error: false,
};
