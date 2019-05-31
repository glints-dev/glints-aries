import * as React from 'react';

import classNames from 'classnames';

import Icon from '../../General/Icon';

import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
} from '../../Style/Input/TextFieldStyle';

class TextField extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { type } = this.props;

    this.state = {
      floating: false,
      inputType: type,
    };
  }

  handleFocusChange = (onBlur: (e: React.FocusEvent<HTMLInputElement>) => void) => {
    const listener = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({
        floating: e.target.value.length > 0,
      });

      if (onBlur !== undefined) {
        return onBlur(e);
      }
    };

    return listener;
  }

  handleShowPassword = () => {
    const { inputType } = this.state;

    this.setState({
      inputType: inputType === 'password' ? 'text' : 'password',
    });
  }

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { disableTyping, onKeyDown } = this.props;

    if (disableTyping) {
      e.preventDefault();
    }

    if (onKeyDown !== undefined) {
      return onKeyDown(e);
    }
  }

  componentDidMount() {
    const { value, defaultValue } = this.props;
    if (value !== undefined || defaultValue !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
        });
      }
    }
  }

  static getDerivedStateFromProps(nextProps: Props) {
    if (nextProps.value) {
      return {
        floating: true,
      };
    }
    return false;
  }

  render() {
    const {
      type,
      label,
      value,
      status,
      disabled,
      className,
      onBlur,
      small,
      removeFloatingLabel,
      disableTyping,
      ...defaultProps
    } = this.props;

    const { floating, inputType } = this.state;

    return (
      <TextFieldContainer className={classNames('aries-textfield', className)}>
        <TextFieldInput
          type={inputType}
          placeholder={removeFloatingLabel && label}
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          onKeyDown={this.handleKeyDown}
          floating={floating}
          value={value}
          aria-label={label}
          small={small}
          disableTyping={disableTyping}
          {...defaultProps}
        />
        {!removeFloatingLabel &&
          <TextFieldLabel
            className="textfield-label"
            floating={floating}
            status={status}
            small={small}
          >
            {label}
          </TextFieldLabel>
        }
        {type === 'password'
          && (
            <div className="see-password" onClick={this.handleShowPassword}>
              <Icon
                name={inputType === 'password' ? 'eye' : 'eye-slashed'}
                color={inputType === 'password' ? 'black' : '#777777'}
              />
            </div>
          )
        }
      </TextFieldContainer>
    );
  }
}

interface Props extends React.ComponentPropsWithoutRef<typeof TextFieldInput> {
  type: 'text' | 'password';
  label: string;
  disabled?: boolean;
  className?: string;
  removeFloatingLabel?: boolean;
}

interface State {
  floating: boolean;
  inputType: 'text' | 'password';
}

export default TextField;
